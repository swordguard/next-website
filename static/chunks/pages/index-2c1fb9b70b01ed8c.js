(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5081)}])},5081:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return ad}});var d=c(5893),e=c(9008),f=c.n(e),g=function(){return(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"MSIT"}),(0,d.jsx)("meta",{name:"description",content:"Microsun IT"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})},h=g,i=c(7294),j=c(1265),k=c(1927),l=c(2293),m=c(7357),n=c(6242),o=c(4267),p=c(3965),q=c(6720),r=c(3156),s=c(1998),t=c(6886),u=c(9661),v=c(3321),w=c(9192),x=c(5861),y=c(621),z=c(4924),A=c(6042),B=c(9669),C=c.n(B),D="".concat("https://ms-website-api.herokuapp.com","/feedback"),E={firstName:{en:"required",cn:"必填项不能为空"},lastName:{en:"required",cn:"必填项不能为空"},email:{en:"incorrect email format",cn:"必填项不能为空或者电子邮件格式错误"},comments:{en:"required",cn:"必填项不能为空"}},F=function(a,b){b(a.target.value)},G=function(a,b,c){L({formData:a,formErrors:b,setFormErrors:c})},H=function(a,b){b(a.target.value)},I=function(a,b){b(a.target.value)},J=function(a,b){b(a.target.value)},K=function(a,b,c,d,e,f,g){var h=e.formErrors,i=e.setFormErrors,j=e.lan;L({formData:a,formErrors:h,setFormErrors:i,lan:j})&&(g.preventDefault(),d(!0),C().post(D,a).then(function(){d(!1),b(!0),c(!0)}).catch(function(a){d(!1),b(!0),c(!1),f(a.response.data)}))},L=function(a){var b,c=a.formData,d=a.formErrors,e=a.setFormErrors,f=a.lan,g=Object.keys(c).reduce(function(a,b){var e,g,h=c[b];return 0===h.trim().length?g=(0,z.Z)({},b,E[b][f]):delete d[b],"email"===b&& !String(e=h.trim()).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)&&(g=(0,z.Z)({},b,E[b][f])),(0,A.Z)({},a,g)},{});return g&&(null===(b=Object.values(g))|| void 0===b?void 0:b.length)?(e(g),!1):(e({}),!0)},M=c(6447),N=c(6798),O=c(5568),P=i.forwardRef(function(a,b){return(0,d.jsx)(O.Z,(0,A.Z)({elevation:6,ref:b,variant:"filled"},a))});function Q(a){var b=a.openToast,c=a.setOpenToast,e=a.success,f=a.message,g=function(a,b){"clickaway"!==b&&c(!1)};return(0,d.jsx)(M.Z,{spacing:2,sx:{width:"100%"},children:(0,d.jsx)(N.Z,{open:b,autoHideDuration:6e3,onClose:g,children:(0,d.jsx)(P,{onClose:g,severity:e?"success":"error",sx:{width:"100%"},children:e?"Success!":f})})})}var R={title:{en:"We'd like to hear from you.",cn:"请填写下面的表格联系我们，我们会在第一时间回复你的。或者加我的微信swordguard99，注明app开发咨询。"},firstName:{en:"firstName",cn:"名"},lastName:{en:"lastName",cn:"姓"},email:{en:"email",cn:"电子邮件"},comments:{en:"comments",cn:"留言区"},submit:{en:"submit",cn:"提交"}};function S(a){var b=a.lan,c=(0,i.useState)(""),e=c[0],f=c[1],g=(0,i.useState)(""),h=g[0],j=g[1],k=(0,i.useState)(""),l=k[0],n=k[1],o=(0,i.useState)(""),p=o[0],q=o[1],s=(0,i.useState)(!1),t=s[0],z=s[1],A=(0,i.useState)(!1),B=A[0],C=A[1],D=(0,i.useState)(),E=D[0],L=D[1],M=(0,i.useState)(),N=M[0],O=M[1],P=(0,i.useState)({firstName:"",lastName:"",email:"",comments:""}),S=P[0],T=P[1],U={firstName:e,lastName:h,email:l,comments:p};return(0,d.jsxs)(r.Z,{component:"main",maxWidth:"xs",children:[(0,d.jsx)(Q,{openToast:B,setOpenToast:C,success:E,message:N}),(0,d.jsxs)(m.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsx)(u.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,d.jsx)(y.Z,{})}),(0,d.jsx)(x.Z,{component:"h1",variant:"h5",children:R.title[b]}),(0,d.jsx)(w.Z,{required:!0,margin:"normal",fullWidth:!0,id:"firstName",label:R.firstName[b],name:"firstName",onChange:function(a){return F(a,f)},onBlur:function(){return G(U,S,T)},value:e,error:Boolean(S.firstName),helperText:S.firstName}),(0,d.jsx)(w.Z,{required:!0,margin:"normal",fullWidth:!0,id:"lastName",label:R.lastName[b],name:"lastName",value:h,onChange:function(a){return H(a,j)},onBlur:function(){return G(U,S,T)},error:Boolean(S.lastName),helperText:S.lastName}),(0,d.jsx)(w.Z,{required:!0,margin:"normal",fullWidth:!0,id:"email",label:R.email[b],name:"email",autoComplete:"email",value:l,onChange:function(a){return I(a,n)},onBlur:function(){return G(U,S,T)},error:Boolean(S.email),helperText:S.email}),(0,d.jsx)(w.Z,{required:!0,margin:"normal",id:"comments",name:"comments",label:R.comments[b],fullWidth:!0,multiline:!0,maxRows:6,value:p,onChange:function(a){return J(a,q)},onBlur:function(){return G(U,S,T)},error:Boolean(S.comments),helperText:S.comments}),(0,d.jsx)(v.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:t,onClick:function(a){return K(U,C,L,z,{formErrors:S,setFormErrors:T,lan:b},O,a)},children:R.submit[b]})]})]})}var T=c(155),U={en:"We're a group of IT experts based in Australia, specialising in providing IT solutions. If you want to outsource part or whole development of your IT systems and apps, no matter big or small, please talk to us and we're here to help.",cn:"我们是位于澳大利亚悉尼的IT软件专家，致力于提供全方位的IT服务，包括网站App系统开发建设，无论系统大小。如果你有这方面的需求请与我们联系。"},V=function(a){var b=a.lan;return(0,d.jsx)(x.Z,{gutterBottom:!0,variant:"h5",component:"h2",align:"center",className:"mx-5",children:(0,d.jsx)("section",{children:U[b]})})},W=c(9396),X=function(a){return(0,d.jsxs)(x.Z,(0,W.Z)((0,A.Z)({variant:"body2",color:"text.secondary",align:"center"},a),{children:["Copyright \xa9 MicroSun IT ",new Date().getFullYear(),"."]}))},Y=function(a){var b=a.onLocaleClick,c=a.lan;return(0,d.jsx)(v.Z,{variant:"variant",color:"inherit",size:"large",onClick:b,children:"en"===c?"中文":"English"})},Z=[{id:1,image:"https://images.unsplash.com/photo-1657517120264-efff2a7e8af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTI2MTk5OA&ixlib=rb-1.2.1&q=80&w=1080",heading:{en:"Agility",cn:"敏捷"},content:{en:"We're small but agile and ambitious. We break down big one into small pieces and delivery it to you one by one.",cn:"我们迅速而敏捷，分而攻克之。"}},{id:2,image:"https://images.unsplash.com/photo-1658781303736-e95b8db69bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTI2MTg5Mw&ixlib=rb-1.2.1&q=80&w=1080",heading:{en:"Attitude",cn:"态度"},content:{en:"Landing on the moon was achieved, and building a web app is a breeze for a group of hard-working minds.",cn:"对一群勤奋的头脑来说，从0到1开发一个App那是小菜一碟。"}},{id:3,image:"https://images.unsplash.com/photo-1657624394328-a2ec199a5edf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTI2MTk3MA&ixlib=rb-1.2.1&q=80&w=1080",heading:{en:"Outsourcing",cn:"外包"},content:{en:"We're good at building beautiful and powerful web apps, and we ship you to your destination.",cn:"我们提供全方位的IT外包服务，免费提供网站App开发报价。"}},],$={motto:{en:"Get things done is our motto. ",cn:"又好又快地完工是我们的格言。"}},_=(0,j.Z)(),aa=function(){var a=(0,i.useState)("en"),b=a[0],c=a[1],e=function(){c("en"===b?"cn":"en")};return(0,d.jsxs)(k.Z,{theme:_,children:[(0,d.jsx)(q.ZP,{}),(0,d.jsx)(m.Z,{sx:{flexGrow:1},children:(0,d.jsx)(l.Z,{position:"static",children:(0,d.jsxs)(T.Z,{children:[(0,d.jsx)(s.Z,{sx:{mr:2}}),(0,d.jsx)(x.Z,{variant:"h6",color:"inherit",component:"div",sx:{flexGrow:1},children:$.motto[b]}),(0,d.jsx)(Y,{onLocaleClick:e,lan:b})]})})}),(0,d.jsxs)("main",{children:[(0,d.jsxs)(r.Z,{sx:{py:8},maxWidth:"md",children:[(0,d.jsx)(V,{lan:b}),(0,d.jsx)(t.ZP,{container:!0,spacing:4,children:Z.map(function(a){var c=a.id,e=a.image,f=a.heading,g=a.content;return(0,d.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,d.jsxs)(n.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,d.jsx)(p.Z,{component:"img",sx:{},image:e,alt:"random"}),(0,d.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,d.jsx)(x.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:f[b]}),(0,d.jsx)(x.Z,{children:g[b]})]})]})},c)})})]}),(0,d.jsx)(S,{lan:b})]}),(0,d.jsx)("footer",{children:(0,d.jsx)(m.Z,{sx:{bgcolor:"background.red",p:6},component:"footer",children:(0,d.jsx)(X,{sx:{mt:8,mb:4},lan:b})})})]})},ab=c(214),ac=c.n(ab);function ad(){return(0,d.jsxs)("div",{className:ac().container,children:[(0,d.jsx)(h,{}),(0,d.jsx)(aa,{})]})}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(a){a.O(0,[769,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])