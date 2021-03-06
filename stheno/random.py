from lab import B
from matrix import AbstractMatrix
from plum import (
    Self,
    Referentiable,
    PromisedType,
    type_parameter,
    Dispatcher,
    convert
)

from .input import Input, At
from .mean import ZeroMean
from .util import uprank

__all__ = ['Normal']


class Random(metaclass=Referentiable):
    """A random object."""

    def __radd__(self, other):
        return self + other

    def __rmul__(self, other):
        return self * other

    def __neg__(self):
        return -1 * self

    def __sub__(self, other):
        return self + (-other)

    def __rsub__(self, other):
        return (-self) + other

    def __div__(self, other):
        return self * (1 / other)

    def __truediv__(self, other):
        return Random.__div__(self, other)


class RandomProcess(Random):
    """A random process."""


class RandomVector(Random):
    """A random vector."""


PromisedGP = PromisedType()


class Normal(RandomVector, At):
    """Normal random variable.

    A normal random variable also acts as an instance of `At`, which can be
    used to specify a process at particular points.

    Args:
        var (matrix): Variance of the distribution.
        mean (tensor, optional): Mean of the distribution. Defaults to zero.
    """

    _dispatch = Dispatcher(in_class=Self)

    @_dispatch({B.Numeric, AbstractMatrix},
               [{B.Numeric, AbstractMatrix, type(None)}])
    def __init__(self, var, mean=None):
        # Ensure that the variance is an instance of `AbstractMatrix`.
        self._var = convert(var, AbstractMatrix)

        # Resolve mean and check whether it is zero.
        if mean is None:
            # Set to an actual zero that indicates that it is all zeros.
            self._mean = 0
            self._zero_mean = True
        else:
            # Not useful to retain structure here.
            self._mean = B.dense(mean)
            self._zero_mean = False

        # Set `p` and `x` to `None`.
        self.p = None
        self.x = None

    @_dispatch(PromisedGP, {B.Numeric, Input})
    def __init__(self, p, x):
        # Set variance and mean to `None` to signify that they have to be
        # acquired from `p.kernel(x)` and `p.mean(x)`.
        self._var = None
        self._mean = None

        # Save process and the point at which it was evaluated.
        # cache.
        self.p = p
        self.x = x

        # Check whether the mean is zero.
        self._zero_mean = isinstance(self.p.mean, ZeroMean)

    def get(self):
        """Get the point at which the the process was evaluated to construct
        the distribution.

        This method must be implemented to act as an instance of `Act`.

        Returns:
            input: Point at which the process was evaluated.
        """
        if self.p is None:
            raise RuntimeError('Normal distribution is not a '
                               'finite-dimensional distribution from a '
                               'process.')
        return self.x

    def __new__(cls, *args, **kw_args):
        # Since we have subtyped a parametric type, during instantiating the
        # parametric type will attempt to generate a new parametric type.
        # Prevent this. Simply redirect the call to `Normal.__new__` to that of
        # its base: `RandomVector`.
        return RandomVector.__new__(cls)

    @property
    def var(self):
        """Variance."""
        if self._var is None:
            # Variance must be acquired from the saved process.
            self._var = self.p.kernel(self.x)
        return self._var

    @property
    def mean(self):
        """Mean."""
        if self._mean is 0:
            # Mean is all zeros.
            self._mean = B.zeros(self.dtype, self.dim, 1)
        elif self._mean is None:
            # Mean must be acquired from the saved process. It is not useful
            # to retain structure.
            self._mean = B.dense(self.p.mean(self.x))
        return self._mean

    @property
    def dtype(self):
        """Data type."""
        return B.dtype(self.var)

    @property
    def dim(self):
        """Dimensionality."""
        return B.shape(self.var)[0]

    @property
    def m2(self):
        """Second moment."""
        return self.var + B.outer(B.squeeze(self.mean))

    def marginals(self):
        """Get the marginals.

        Returns:
            tuple: A tuple containing the predictive means and lower and
                upper 95% central credible interval bounds.
        """
        mean = B.squeeze(self.mean)
        if self.p is None:
            vars = B.diag(self.var)
        else:
            vars = B.squeeze(B.dense(self.p.kernel.elwise(self.x)))
        error = 2 * B.sqrt(vars)
        return mean, mean - error, mean + error

    def logpdf(self, x):
        """Compute the log-pdf.

        Args:
            x (input): Values to compute the log-pdf of.
            
        Returns:
            list[tensor]: Log-pdf for every input in `x`. If it can be
                determined that the list contains only a single log-pdf,
                then the list is flattened to a scalar.
        """
        logpdfs = -(B.logdet(self.var) +
                    B.cast(self.dtype, self.dim) *
                    B.cast(self.dtype, B.log_2_pi) +
                    B.iqf_diag(self.var, uprank(x) - self.mean)) / 2
        return logpdfs[0] if B.shape(logpdfs) == (1,) else logpdfs

    def entropy(self):
        """Compute the entropy.
        
        Returns:
            scalar: The entropy.
        """
        return (B.logdet(self.var) +
                B.cast(self.dtype, self.dim) *
                B.cast(self.dtype, B.log_2_pi + 1)) / 2

    @_dispatch(Self)
    def kl(self, other):
        """Compute the KL divergence with respect to another normal
        distribution.

        Args:
            other (:class:`.random.Normal`): Other normal.

        Returns:
            scalar: KL divergence.
        """
        return (B.ratio(self.var, other.var) +
                B.iqf_diag(other.var, other.mean - self.mean)[0] -
                B.cast(self.dtype, self.dim) +
                B.logdet(other.var) - B.logdet(self.var)) / 2

    @_dispatch(Self)
    def w2(self, other):
        """Compute the 2-Wasserstein distance with respect to another normal
        distribution.

        Args:
            other (:class:`.random.Normal`): Other normal.

        Returns:
            scalar: 2-Wasserstein distance.
        """
        var_root = B.root(self.var)
        root = B.root(B.matmul(var_root, other.var, var_root))
        var_part = B.trace(self.var) + B.trace(other.var) - 2 * B.trace(root)
        mean_part = B.sum((self.mean - other.mean) ** 2)
        # The sum of `mean_part` and `var_par` should be positive, but this
        # may not be the case due to numerical errors.
        return B.abs(mean_part + var_part) ** .5

    def sample(self, num=1, noise=None):
        """Sample from the distribution.

        Args:
            num (int): Number of samples.
            noise (scalar, optional): Variance of noise to add to the
                samples. Must be positive.

        Returns:
            tensor: Samples as rank 2 column vectors.
        """
        var = self.var

        # Add noise if requested for.
        if noise is not None:
            # Put diagonal matrix first in the sum to ease dispatch.
            var = B.fill_diag(noise, self.dim) + self.var

        # Perform sampling operation.
        sample = B.sample(var, num=num)
        if not self._zero_mean:
            sample = sample + self.mean
        return B.dense(sample)

    @_dispatch(object)
    def __add__(self, other):
        return Normal(self.var, self.mean + other)

    @_dispatch(Random)
    def __add__(self, other):
        raise NotImplementedError('Cannot add a Normal and a {}.'
                                  ''.format(type(other).__name__))

    @_dispatch(Self)
    def __add__(self, other):
        return Normal(self.var + other.var, self.mean + other.mean)

    @_dispatch(object)
    def __mul__(self, other):
        return Normal(self.var * other ** 2, self.mean * other)

    @_dispatch(Random)
    def __mul__(self, other):
        raise NotImplementedError('Cannot multiply a Normal and a {}.'
                                  ''.format(type(other).__name__))

    def rmatmul(self, other):
        return Normal(B.dot(B.dot(other, self.var), other, tr_b=True),
                      B.dot(self.mean, other))

    def lmatmul(self, other):
        return Normal(B.dot(B.dot(other, self.var), other, tr_b=True),
                      B.dot(other, self.mean))

    def __repr__(self):
        if self.p is None:
            return RandomVector.__repr__(self)
        else:
            return '{!r}({!r})'.format(self.p, self.x)

    def __str__(self):
        if self.p is None:
            return RandomVector.__str__(self)
        else:
            return '{!s}({!s})'.format(self.p, self.x)


# Make sure the type parameter can be extracted from a `Normal`.
@type_parameter.extend(Normal)
def type_parameter(a):
    if a.p is None:
        raise RuntimeError('Normal distribution is not a finite-dimensional '
                           'distribution from a process.')
    return a.p
