Search.setIndex({docnames:["api","index","readme","source/stheno.eis","source/stheno.field","source/stheno.function_field","source/stheno.graph","source/stheno.input","source/stheno.kernel","source/stheno.lazy","source/stheno.matrix","source/stheno.mean","source/stheno.mokernel","source/stheno.momean","source/stheno.numpy","source/stheno.random","source/stheno.tf","source/stheno.torch","source/stheno.util"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","index.rst","readme.rst","source/stheno.eis.rst","source/stheno.field.rst","source/stheno.function_field.rst","source/stheno.graph.rst","source/stheno.input.rst","source/stheno.kernel.rst","source/stheno.lazy.rst","source/stheno.matrix.rst","source/stheno.mean.rst","source/stheno.mokernel.rst","source/stheno.momean.rst","source/stheno.numpy.rst","source/stheno.random.rst","source/stheno.tf.rst","source/stheno.torch.rst","source/stheno.util.rst"],objects:{"":{stheno:[0,0,0,"-"]},"stheno.eis":{AdditiveComponentKernel:[3,1,1,""],ComponentKernel:[3,1,1,""],NoisyKernel:[3,1,1,""]},"stheno.graph":{GP:[6,1,1,""],Graph:[6,1,1,""],Obs:[6,2,1,""],Observations:[6,1,1,""],SparseObs:[6,2,1,""],SparseObservations:[6,1,1,""],model:[6,4,1,""]},"stheno.graph.GP":{"var":[6,2,1,""],condition:[6,2,1,""],diff:[6,3,1,""],diff_approx:[6,3,1,""],display:[6,3,1,""],kernel:[6,2,1,""],length_scale:[6,2,1,""],mean:[6,2,1,""],name:[6,2,1,""],period:[6,2,1,""],select:[6,3,1,""],shift:[6,3,1,""],stationary:[6,2,1,""],stretch:[6,3,1,""],transform:[6,3,1,""]},"stheno.graph.Graph":{add_independent_gp:[6,3,1,""],condition:[6,2,1,""],cross:[6,3,1,""],diff:[6,3,1,""],logpdf:[6,2,1,""],mul:[6,2,1,""],name:[6,2,1,""],sample:[6,2,1,""],select:[6,3,1,""],shift:[6,3,1,""],stretch:[6,3,1,""],sum:[6,2,1,""],transform:[6,3,1,""]},"stheno.graph.Observations":{K_x:[6,2,1,""],posterior_kernel:[6,3,1,""],posterior_mean:[6,3,1,""]},"stheno.graph.SparseObservations":{A:[6,2,1,""],K_z:[6,2,1,""],elbo:[6,2,1,""],mu:[6,2,1,""],posterior_kernel:[6,3,1,""],posterior_mean:[6,3,1,""]},"stheno.input":{At:[7,2,1,""],Component:[7,1,1,""],Input:[7,1,1,""],Latent:[7,2,1,""],Observed:[7,2,1,""],Unique:[7,1,1,""]},"stheno.input.Input":{get:[7,3,1,""]},"stheno.kernel":{DecayingKernel:[8,1,1,""],Delta:[8,1,1,""],DerivativeKernel:[8,1,1,""],EQ:[8,1,1,""],Exp:[8,1,1,""],Kernel:[8,1,1,""],Linear:[8,1,1,""],LogKernel:[8,1,1,""],Matern12:[8,2,1,""],Matern32:[8,1,1,""],Matern52:[8,1,1,""],OneKernel:[8,1,1,""],RQ:[8,1,1,""],ScaledKernel:[8,1,1,""],ZeroKernel:[8,1,1,""]},"stheno.kernel.DecayingKernel":{display:[8,2,1,""],elwise:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.Delta":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.EQ":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.Exp":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.Kernel":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""],periodic:[8,3,1,""],stationary:[8,2,1,""]},"stheno.kernel.Linear":{elwise:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.LogKernel":{"var":[8,2,1,""],display:[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.Matern32":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.Matern52":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.OneKernel":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.RQ":{"var":[8,2,1,""],display:[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.ScaledKernel":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.kernel.ZeroKernel":{"var":[8,2,1,""],elwise:[8,2,1,""],length_scale:[8,2,1,""],period:[8,2,1,""]},"stheno.matrix":{Constant:[10,1,1,""],Dense:[10,1,1,""],Diagonal:[10,1,1,""],LowRank:[10,1,1,""],One:[10,1,1,""],UniformlyDiagonal:[10,1,1,""],Woodbury:[10,1,1,""],Zero:[10,1,1,""],dense:[10,2,1,""],matrix:[10,2,1,""]},"stheno.matrix.Constant":{from_:[10,5,1,""]},"stheno.matrix.Dense":{T:[10,2,1,""]},"stheno.matrix.One":{from_:[10,5,1,""]},"stheno.matrix.UniformlyDiagonal":{from_:[10,5,1,""]},"stheno.matrix.Zero":{from_:[10,5,1,""]},"stheno.mean":{DerivativeMean:[11,1,1,""],TensorProductMean:[11,1,1,""]},"stheno.mokernel":{MultiOutputKernel:[12,1,1,""]},"stheno.mokernel.MultiOutputKernel":{elwise:[12,2,1,""]},"stheno.momean":{MultiOutputMean:[13,1,1,""]},"stheno.random":{Normal1D:[15,1,1,""],Normal:[15,1,1,""]},"stheno.random.Normal":{"var":[15,2,1,""],dim:[15,2,1,""],dtype:[15,2,1,""],entropy:[15,3,1,""],get:[15,3,1,""],kl:[15,2,1,""],lmatmul:[15,3,1,""],logpdf:[15,3,1,""],m2:[15,2,1,""],marginals:[15,3,1,""],mean:[15,2,1,""],rmatmul:[15,3,1,""],sample:[15,3,1,""],w2:[15,2,1,""]},stheno:{eis:[3,0,0,"-"],field:[4,0,0,"-"],function_field:[5,0,0,"-"],graph:[6,0,0,"-"],input:[7,0,0,"-"],kernel:[8,0,0,"-"],lazy:[9,0,0,"-"],matrix:[10,0,0,"-"],mean:[11,0,0,"-"],mokernel:[12,0,0,"-"],momean:[13,0,0,"-"],numpy:[14,0,0,"-"],random:[15,0,0,"-"],tf:[16,0,0,"-"],torch:[17,0,0,"-"],util:[18,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","data","Python data"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:data","5":"py:classmethod"},terms:{"50_000":2,"case":2,"class":[2,3,6,7,8,10,11,12,13,15],"default":[2,6,8,10,15],"export":2,"final":2,"float":8,"function":[1,6,8,12,15],"import":2,"int":[2,6,10,15],"new":2,"return":[2,6,8,10,15],"true":[2,10],"var":[2,6,8,15],Adding:2,And:2,For:2,GPs:1,Its:1,Obs:[2,6],One:[7,10],The:[2,6,10,15],Then:2,Uses:3,__add__:2,__init__:2,__or__:2,_without_:2,about:[1,7],abstractobserv:6,accept:2,accord:6,act:15,adamoptim:2,add:[2,6,15],add_independent_gp:6,added:[2,6,8],addit:[2,3,6],additivecomponentkernel:3,alia:[6,7,8],all:2,allow:2,alpha:[2,8],also:[2,15],altern:[2,6],alternative_prior:2,alwai:2,amount:6,ani:2,append:2,appli:2,applic:1,approxim:[1,6,8],arang:2,arg:[2,6],argument:[2,6],arrai:2,attach:6,automat:2,axi:2,base:[3,6,7,8,10,11,12,13,15],basi:1,basic:2,bayesian:1,befor:2,begin:2,behav:2,behaviour:15,besid:2,beta:[2,8],between:[1,3,6],bit:2,black:2,block:2,blue:2,bool:10,bound:[2,15],broadcast:15,build:2,call:2,callabl:2,can:[2,6,8,15],cannot:[2,7],carlo:2,cartesian:[2,6],cdot:2,central:[2,15],choic:2,classmethod:10,clone:2,col:10,collect:[2,6],column:[2,10,15],com:2,combin:2,come:2,command:2,compar:2,compat:2,compon:[2,3,7],componentkernel:3,comput:[2,15],concat:2,condit:[2,6],consist:[2,3],const_1:2,constant:[2,8,10],construct:[2,6,10,15],constructor:[2,6],constuct:2,contain:[2,15],contrib:2,conveni:[2,6,15],correct:6,correspond:2,cos:2,credibl:[2,15],cross:[2,6],current:2,data:[6,10,15],dddf:2,ddf:2,decai:8,decayingkernel:[2,8],decomposit:1,def:2,defin:2,definit:[2,10],delta:[2,8],dens:[2,10,15],deriv:[2,6,8,11],derivativefunct:[8,11],derivativekernel:8,derivativemean:11,descript:2,design:1,determin:[2,8,15],diag:10,diag_scal:10,diagon:10,dict:3,dictionari:2,diff:[2,6],diff_approx:[2,6],differ:[2,6],differenti:6,dim:[2,6,15],dimens:[2,6],dimension:[1,15],direct:2,directli:2,dispatch:2,displai:[6,8],distanc:8,distribut:[1,6,8,15],doc:2,draw:2,dtype:[2,10,15],e_exp:2,e_indep:2,each:2,effici:2,eis:[0,1,2],elbo:[2,6],element:[2,10],els:2,elwis:[2,8,12],end:2,ensur:2,ensure_at:6,entropi:15,enumer:2,epsilon:[2,8],equal:8,estim:[2,6],evalu:15,everi:[2,15],evid:2,exampl:1,exp:[2,8],experiment:2,exponenti:[2,8],extend:2,extent:6,extract:2,f1_posterior:2,f1_true:2,f2_posterior:2,f2_true:2,f_1:2,f_2:2,f_gp_rnn:2,f_linear:2,f_period:2,f_posterior:2,f_prod:2,f_rnn:2,f_smooth:2,f_sum:2,f_true:2,f_true_linear:2,f_true_period:2,f_true_smooth:2,f_true_wiggli:2,f_wiggli:2,factor:2,fals:2,featur:[1,6],field:[0,1,10],figsiz:2,figur:2,finit:[1,6],first:[2,6],fix:2,flatten:15,flexibl:2,float32:2,float64:2,fluctuat:2,follow:2,form:1,format:[2,6],formatt:[2,6],four:2,frac:2,from:[2,6,15],from_:10,fs_true:2,full:10,function_field:[0,1,8,11],functiontyp:2,further:6,furthermor:2,gamma:8,gaussian:[2,6],gcc:2,gener:[2,12,13],get:[2,6,7,15],gfortran:2,git:2,github:2,give:2,global_variables_initi:2,govern:8,gpar:1,graph:[0,1,2,12,13],green:2,gru:2,handi:2,have:2,henceforth:2,here:2,http:2,hyperparamet:2,implement:[2,15],in_class:2,incorpor:1,independ:[2,3,6],index:[1,2,3],inds2:2,inds_ob:2,induc:[1,6],infer:1,init:2,initialis:2,input:[0,1,2,3,6,15],instal:1,instanc:[2,6,12,13,15],instead:2,int32:2,integr:1,intercept:2,interfac:1,interpret:2,interv:15,its:2,jointli:2,k_f:3,k_n:3,k_u:2,k_x:6,k_z:6,keep:2,kernel:[0,1,3,6,12],kind:[7,15],knowledg:1,kroneck:[2,8],kw_arg:[2,6],label:2,lambda:[2,6],latent:[2,3,7],layer:2,lazi:[0,1],learn:[1,7],left:[2,10],legend:2,len:2,length:[2,6,8,10],length_scal:[2,6,8],let:2,like:2,linear:[1,8],linspac:2,list:[3,6,15],lmatmul:[2,15],lml1:2,lml2:2,lml:2,lml_gp_rnn:2,lml_rnn:2,locat:[2,6],log:15,logarithm:8,logkernel:8,logpdf:[2,6,15],low:10,lower1:2,lower2:2,lower:[2,15],lowrank:10,lr_pd:10,make:[2,3,12,13],mani:2,manual:1,map:8,margin:[2,15],mat:10,matern12:[2,8],matern32:[2,8],matern52:[2,8],matern:[2,8],math:2,matplotlib:2,matric:2,matrix:[0,1,2,6,15],mean1:2,mean2:2,mean:[0,1,6,13,15],method:[2,6,8,12,15],middl:10,minim:2,moar:2,model:[1,6],modul:[0,1],mokernel:[0,1,2],momean:[0,1,2],moment:15,mont:2,more:2,much:2,mul:6,multi:[1,12,13],multioutputkernel:[2,12],multioutputmean:[2,13],multipl:[1,3],multipli:[2,8],must:[2,8,15],name:[1,6],ndarrai:2,necessarili:2,nest:2,newli:6,nice:2,nois:[2,3,6,7,15],noisi:3,noisykernel:[2,3],none:[2,3,10,15],nonlinear:1,nonparametr:1,normal1d:[2,15],normal:[2,15],normalis:2,note:2,now:2,nudg:2,num:15,number:[10,15],numer:2,numpi:[0,1],object:[2,6,7],obs:2,observ:[2,3,6,7],offer:2,one:[2,15],oneel:10,onefunct:8,onekernel:8,ones:10,onli:[2,15],oper:2,opt:2,opt_jointli:2,opt_rnn:2,optim:6,optimis:2,option:[2,3,6,8,10,15],orang:2,order:[2,6],other:[2,15],otherwis:2,ouput:1,outer:10,output:[2,12,13],over:8,p_i:6,p_j:6,packag:2,page:1,pair:2,paramet:[2,3,6,7,8,10,12,13,15],parametr:[7,15],part:10,particular:[2,7,15],pdf:15,per:2,percentil:2,period:[2,6,8],permut:2,pleas:2,plot:2,plot_predict:2,plt:2,plum:[2,3,6,7,8,10,11,12,13,15],point:[1,6,7,15],pos:2,posit:[8,10,15],possibl:2,posterior:[2,6],posterior_kernel:6,posterior_mean:6,pred:2,pred_f:2,pred_if:2,pred_iif:2,pred_iiif:2,pred_linear:2,pred_period:2,pred_smooth:2,pred_wiggli:2,predict:[1,15],pretti:2,print:2,prior:[1,8],process:[2,3,6,12,13,15],product:[2,6,10],program:1,provid:[2,6],pyplot:2,python:2,pytorch:1,quadrat:[2,8],queri:2,randn:2,random:[0,1,2,6],randomprocess:6,randomvector:15,rang:2,rank:[2,10,15],rate:8,ration:[2,8],read:2,readabl:2,recommend:2,red:2,ref:[6,10],refer:[2,6],referenti:[2,3,6,8,10,11,12,13,15],region:2,regress:1,render:2,represent:2,resolv:[3,6,8,10,11,12,13,15],respect:[2,6],result:2,revers:2,right:[2,10],rmatmul:15,rnn:1,rnn_constructor:2,row:[2,10],run:2,sai:2,sampl:[1,6,15],scalar:[2,6,8,10,15],scale:[2,6,8,10],scaledfunct:8,scaledkernel:8,scatter:2,scipyoptimizerinterfac:2,search:1,second:[1,6,15],see:[2,6],select:[2,6],self:2,separ:2,session:2,shape:[2,8],shift:[2,6],shorthand:[2,6],show:2,sig1:2,sig2:2,simpl:1,simpli:2,sin:2,singl:[2,15],slope:2,smooth:1,soi:2,sole:2,sourc:[3,6,7,8,10,11,12,13,15],space:[2,8],spars:1,sparseob:[2,6],sparseobserv:6,specif:6,specifi:[2,10,15],split:2,sqrt:2,squar:8,squeez:2,stack:2,stationar:[2,6,8],stationari:[2,6,8],std:2,stheno:[0,1],storag:2,str:6,stretch:[2,6],string:[2,6],structur:2,subplot:2,subtract:2,sum:[2,6,10],support:2,symmetr:10,syntax:2,tab:2,tail:8,take:[2,6],tensor:[2,6,7,8,10,15],tensorflow:1,tensorproductfunct:11,tensorproductkernel:2,tensorproductmean:[2,11],term:2,test:2,text:2,thereon:2,thi:[2,7,15],thing:2,third:2,three:2,through:6,titl:2,toler:8,torch:[0,1,2],track:2,train:2,transform:[2,6],translat:2,transpos:10,true_intercept:2,true_slop:2,tupl:[3,6,15],two:[2,6],type:[2,3,6,7,8,10,15],underli:2,undiscuss:1,uniformli:10,uniformlydiagon:10,uniqu:7,unspecifi:2,unwrap:[2,10],upper1:2,upper2:2,upper:[2,15],use:2,used:[2,15],util:[0,1],val:2,valid:6,valu:[2,6,12,13,15],var_list:2,variabl:[2,15],varianc:[2,6,8,15],variou:[2,3],vars64:2,vector:[2,10,15],version:[2,8,15],vgp:2,via:[2,10],vs1:2,vs2:2,vs_gp:2,vs_rnn:2,wai:2,wbml:2,weight:[2,8],wesselb:2,when:2,where:2,which:[2,6,15],wiggli:2,window:2,wise:2,wish:2,woodburi:10,work:2,wrap:[2,7],x_ind:2,x_ob:2,x_obs1:2,x_obs2:2,y1_ob:2,y2_ob:2,y_gp_rnn:2,y_ob:2,y_rnn:2,y_true:2,you:2,your:2,ys_ob:2,zero:[6,10,15],zeroel:10,zerofunct:8,zerokernel:8,zip:2},titles:["Application Programming Interface","Welcome","Stheno","stheno.eis module","stheno.field module","stheno.function_field module","stheno.graph module","stheno.input module","stheno.kernel module","stheno.lazy module","stheno.matrix module","stheno.mean module","stheno.mokernel module","stheno.momean module","stheno.numpy module","stheno.random module","stheno.tf module","stheno.torch module","stheno.util module"],titleterms:{"function":2,GPs:2,Its:2,about:2,applic:0,approxim:2,avail:2,basi:2,bayesian:2,between:2,composit:2,decomposit:2,design:2,dimension:2,displai:2,distribut:2,eis:3,exampl:2,featur:2,field:4,finit:2,form:2,function_field:5,gpar:2,graph:6,incorpor:2,indic:1,induc:2,infer:2,input:7,instal:2,integr:2,interfac:0,kernel:[2,8],knowledg:2,lazi:9,learn:2,linear:2,manual:2,matrix:10,mean:[2,11],model:2,modul:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],mokernel:12,momean:13,multi:2,multipl:2,name:2,nonlinear:2,nonparametr:2,numpi:[2,14],ouput:2,point:2,predict:2,prior:2,program:0,properti:2,pytorch:2,random:15,regress:2,rnn:2,sampl:2,second:2,simpl:2,smooth:2,spars:2,stheno:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],tabl:1,tensorflow:2,torch:17,undiscuss:2,util:18,welcom:1}})