(this.webpackJsonpcovered=this.webpackJsonpcovered||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"showDialog",(function(){return b})),n.d(a,"addToCustomers",(function(){return h})),n.d(a,"deleteUsers",(function(){return x})),n.d(a,"editUsers",(function(){return f})),n.d(a,"updateUsers",(function(){return p})),n.d(a,"openDialog",(function(){return O}));var c=n(0),r=n.n(c),i=n(8),s=n.n(i),o=(n(58),n(59),n(17)),l=(n(60),n(61),n(104)),d=n(97),u=n(6),j=n(48),b=function(e,t){console.log(t);var n=t;e.setState({showDialog:n}),console.log(e.state)},h=function(e,t){var n=e.state.customers.push(t);e.setState({newUserValue:n})},x=function(e,t){var n=e.state.user.indexOf(t);n>-1&&e.state.user.splice(n,1)},f=function(e,t){var n=e.state.user.findIndex((function(e){return e.id==t.id})),a=e.state.user[n]=t;e.setState({highlighted:a})},p=function(e,t){e.state.highlighted.email=t.email,e.state.highlighted.first=t.first,e.state.highlighted.last=t.last,e.state.highlighted.pass=t.pass;var n=e.state.highlighted,a=e.state.user.findIndex((function(e){return e.id==n.id})),c=e.state.user[a]=n;e.setState({updatedUser:c})},O=function(e,t){var n=t;e.setState({open:n})},m=Object(j.a)(r.a,{showDialog:!1,customers:[]},a),g=n(22),v=n.n(g),k=(n(34),n(2)),N=Object(d.a)((function(e){return{buttonPrime:{color:"white",fontWeight:600,"&:hover":{backgroundColor:"#262626"},backgroundColor:"black",width:"100%",marginTop:20,padding:16,borderRadius:0}}}));function w(e){var t=Object(u.f)(),n=N(),a=m(),r=Object(o.a)(a,2),i=(r[0],r[1]),s=Object(c.useState)(""),d=Object(o.a)(s,2),j=d[0],b=d[1],h=Object(c.useState)("Male"),x=Object(o.a)(h,2),f=x[0],p=x[1],O=Object(c.useState)("Single"),g=Object(o.a)(O,2),w=g[0],C=g[1],S=Object(c.useState)(""),y=Object(o.a)(S,2),M=y[0],B=y[1],D=Object(c.useState)(""),I=Object(o.a)(D,2),R=I[0],T=I[1],L={name:j,gender:f,maritalStatus:w,dob:M,interger:R};Object(c.useEffect)((function(){v.a.init({duration:1500})}),[]);return Object(k.jsxs)("form",{className:"form-div",onSubmit:function(n){n.preventDefault(),e.onHappened(),setTimeout((function(){i.addToCustomers(L),t.push("/results")}),2e3)},children:[Object(k.jsx)("h1",{className:"header-text",children:"We've got you covered!"}),Object(k.jsxs)("div",{"data-aos":"fade-up",children:[Object(k.jsxs)("div",{className:"form-flex",children:[Object(k.jsxs)("div",{className:"input-flex",children:[Object(k.jsx)("label",{children:"Name"}),Object(k.jsx)("input",{type:"text",value:j,onChange:function(e){return b(e.target.value)},className:"searchInput",style:{borderRadius:0,height:10,color:"black",padding:20}})]}),Object(k.jsxs)("div",{className:"input-flex",children:[Object(k.jsx)("label",{children:"Gender"}),Object(k.jsxs)("select",{value:f,onChange:function(e){return p(e.target.value)},className:"",style:{borderRadius:0,color:"black",padding:16.5,border:"4px solid black",backgroundColor:"transparent"},children:[Object(k.jsx)("option",{value:"Male",children:"Male"}),Object(k.jsx)("option",{value:"Female",children:"Female"}),Object(k.jsx)("option",{value:"Nonconforming",children:"Nonconforming"})]})]})]}),Object(k.jsxs)("div",{className:"form-flex",children:[Object(k.jsxs)("div",{className:"input-flex",children:[Object(k.jsx)("label",{children:"Marital Status"}),Object(k.jsxs)("select",{value:w,onChange:function(e){return C(e.target.value)},className:"",style:{borderRadius:0,color:"black",padding:16.5,border:"4px solid black",backgroundColor:"transparent"},children:[Object(k.jsx)("option",{value:"Single",children:"Single"}),Object(k.jsx)("option",{value:"Married",children:"Married"})]})]}),Object(k.jsxs)("div",{className:"input-flex",children:[Object(k.jsx)("label",{children:"Date of Birth"}),Object(k.jsx)("input",{type:"text",value:M,onChange:function(e){return B(e.target.value)},className:"searchInput",style:{borderRadius:0,height:10,color:"black",padding:20}})]})]}),Object(k.jsx)("div",{className:"form-flex",children:Object(k.jsxs)("div",{className:"last-input",children:[Object(k.jsx)("label",{children:"Number"}),Object(k.jsx)("input",{type:"text",value:R,onChange:function(e){return T(e.target.value)},className:"searchInput",style:{borderRadius:0,height:10,color:"black",padding:20}})]})}),Object(k.jsx)(l.a,{type:"submit",value:"Submit",classes:{root:n.buttonPrime},children:"Submit"})]})]})}var C=n(31),S=(n(71),n(103)),y=n(105),M=c.forwardRef((function(e,t){return Object(k.jsx)(y.a,Object(C.a)({direction:"up",ref:t},e))}));function B(e){return Object(k.jsx)("div",{children:Object(k.jsx)(S.a,{open:e.open,TransitionComponent:M,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",PaperProps:{style:{backgroundColor:"transparent",maxWidth:"65%",boxShadow:"none"}},children:Object(k.jsxs)("div",{className:"load-wrapp",children:[Object(k.jsx)("h1",{style:{color:"white"},children:"LOADING"}),Object(k.jsxs)("div",{className:"load-3",children:[Object(k.jsx)("div",{className:"line"}),Object(k.jsx)("div",{className:"line"}),Object(k.jsx)("div",{className:"line"})]})]})})})}var D=n.p+"static/media/covered-logomark-2.24116f29.svg",I=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navBarColor:{backgroundColor:"#2C2C2C"}}}));function R(e){var t=I(),n=Object(c.useState)(!1),a=Object(o.a)(n,2),r=a[0],i=a[1];Object(c.useEffect)((function(){v.a.init({duration:1500})}),[]);return Object(k.jsxs)("div",{className:t.root,children:[Object(k.jsx)(B,{open:r}),Object(k.jsxs)("header",{className:"covered-container",children:[Object(k.jsx)("div",{className:"form-section",children:Object(k.jsx)(w,{onHappened:function(){console.log("clicking"),i(!0)}})}),Object(k.jsxs)("div",{className:"covered-section",children:[Object(k.jsx)("h1",{"data-aos":"fade-down",children:"We've got you "}),Object(k.jsxs)("svg",{"data-aos":"zoom-out",id:"preloader",width:"240px",height:"120px",viewBox:"0 0 240 120",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(k.jsxs)("path",{id:"loop-normal",class:"st1",d:"M120.5,60.5L146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5\nL94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0z",children:[Object(k.jsx)("animate",{attributeName:"stroke-dasharray",from:"500, 50",to:"450 50",begin:"0s",dur:"2s",repeatCount:"indefinite"}),Object(k.jsx)("animate",{attributeName:"stroke-dashoffset",from:"-40",to:"-540",begin:"0s",dur:"2s",repeatCount:"indefinite"})]}),Object(k.jsx)("path",{id:"loop-offset",d:"M146.48,87.02c14.64,14.64,38.39,14.65,53.03,0s14.64-38.39,0-53.03s-38.39-14.65-53.03,0L120.5,60.5L94.52,87.02c-14.64,14.64-38.39,14.64-53.03,0c-14.64-14.64-14.64-38.39,0-53.03c14.65-14.64,38.39-14.65,53.03,0L120.5,60.5L146.48,87.02z"}),Object(k.jsx)("path",{id:"socket",d:"M7.5,0c0,8.28-6.72,15-15,15l0-30C0.78-15,7.5-8.28,7.5,0z",children:Object(k.jsx)("animateMotion",{dur:"2s",repeatCount:"indefinite",rotate:"auto",keyTimes:"0;1",keySplines:"0.42, 0.0, 0.58, 1.0",children:Object(k.jsx)("mpath",{xlinkHref:"#loop-offset"})})}),Object(k.jsx)("path",{id:"plug",d:"M0,9l15,0l0-5H0v-8.5l15,0l0-5H0V-15c-8.29,0-15,6.71-15,15c0,8.28,6.71,15,15,15V9z",children:Object(k.jsx)("animateMotion",{dur:"2s",rotate:"auto",repeatCount:"indefinite",keyTimes:"0;1",keySplines:"0.42, 0, 0.58, 1",children:Object(k.jsx)("mpath",{xlinkHref:"#loop-normal"})})})]}),Object(k.jsx)("img",{"data-aos":"fade-up",src:D,alt:"icon",width:"350",height:"150"})]})]})]})}var T=n(26),L=(n(72),Object(d.a)((function(e){var t;return{root:{width:"100%",paddingTop:100,display:"flex",alignItems:"center",flexDirection:"column"},customer:(t={height:50,cursor:"pointer",display:"flex",alignItems:"center",padding:"10px 20px",justifyContent:"space-between",color:"black",marginBottom:10},Object(T.a)(t,"color","#636161"),Object(T.a)(t,"width","95%"),Object(T.a)(t,"boxShadow","rgba(0, 0, 0, 0.24) 0px 3px 8px"),t),buttonDiv:{alignSelf:"flex-end",display:"flex",flexDirection:"row",padding:5},buttonRoot:{backgroundColor:"#47d5dc",color:"white","&:hover":{backgroundColor:"#47d5dc"}},buttonSecond:{backgroundColor:"#a9a9a9",color:"white",marginRight:3,"&:hover":{backgroundColor:"#a9a9a9"}}}})));function F(){var e=L(),t=Object(c.useState)([]),n=Object(o.a)(t,2),a=(n[0],n[1],m((function(e){return e.customers}))),r=Object(o.a)(a,1)[0];return Object(c.useEffect)((function(){v.a.init({duration:1500})}),[]),Object(k.jsxs)("div",{className:e.root,children:[Object(k.jsxs)("div",{"data-aos":"fade-down",className:"header",children:[Object(k.jsx)("h6",{children:"Name"}),Object(k.jsx)("h6",{children:"Gender"}),Object(k.jsx)("h6",{children:"Marital Status"}),Object(k.jsx)("h6",{children:"DOB"}),Object(k.jsx)("h6",{children:"Interger"})]}),r.map((function(e,t){return Object(k.jsxs)("div",{"data-aos":"fade-up",className:"customer",children:[Object(k.jsx)("h4",{children:e.name}),Object(k.jsx)("h4",{children:e.gender}),Object(k.jsx)("h4",{children:e.maritalStatus}),Object(k.jsx)("h4",{children:e.dob}),Object(k.jsx)("h4",{children:e.interger})]},t)}))]})}var G=n(100),H=n(101),P=n(102),z=n.p+"static/media/covered-logomark.6381a49f.svg",E=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"black"},navBarColor:{backgroundColor:"white"}}}));function U(e){var t=E(),n=Object(u.f)();Object(c.useEffect)((function(){v.a.init({duration:1500})}),[]);return Object(k.jsx)("div",{className:t.root,children:Object(k.jsx)(G.a,{position:"fixed",className:t.navBarColor,children:Object(k.jsxs)(H.a,{children:[Object(k.jsx)(P.a,{variant:"h6",className:t.title,children:Object(k.jsx)("img",{src:z,alt:"icon",width:"130px"})}),Object(k.jsx)(l.a,{onClick:function(){n.push("/covered")},children:"Back To Form"})]})})})}var W=n(35);var V=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(W.a,{children:[Object(k.jsx)(U,{}),Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{exact:!0,path:"/covered",component:R}),Object(k.jsx)(u.a,{exact:!0,path:"/results",component:F})]})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(k.jsx)(V,{}),document.getElementById("root")),A()}},[[73,1,2]]]);
//# sourceMappingURL=main.2feccf79.chunk.js.map