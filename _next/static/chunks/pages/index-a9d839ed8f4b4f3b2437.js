(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7544:function(e,t,n){e.exports=n(6381)},917:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var i=n(5893),r=n(9227),s=n(7294),l=n(9008),c=n(616),a=n(267),o=n(1252),d=function(e){return(0,c.Z)(e),(0,i.jsx)("footer",{style:{padding:"1rem",backgroundColor:"#000",color:"#fcfcfd"},children:(0,i.jsxs)(a.Z,{className:"justify-content-md-between",children:[(0,i.jsx)(o.Z,{md:"6",children:(0,i.jsxs)("div",{className:" copyright",children:["\xa9 ",(new Date).getFullYear()," Slazy"]})}),(0,i.jsx)(o.Z,{md:"6",style:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:(0,i.jsx)("a",{href:"mailto:contact@slazy.io",children:"contact@slazy.io"})})]})})},u=n(1664),h=n(9544),x=n(6992),f=n(5614),g=n(6737),m=n(7243),j=n(3999),p=n(8008),y=n(7975),v=n(4788),b=function(e){(0,c.Z)(e);var t=s.useState(!1),n=(0,r.Z)(t,2),l=n[0],a=n[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(h.Z,{color:"light",light:!0,expand:"md",children:[(0,i.jsxs)(x.Z,{href:"/",style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)("div",{style:{marginRight:10},children:(0,i.jsx)(v.Z,{src:"/images/logo-512x512.png",alt:"logo",style:{width:48,height:48}})}),(0,i.jsx)("h1",{style:{fontSize:"1.6rem"},children:"Slazy"})]}),(0,i.jsx)(f.Z,{onClick:function(){return a(!l)}}),(0,i.jsxs)(g.Z,{isOpen:l,navbar:!0,children:[(0,i.jsxs)(m.Z,{className:"mr-auto",navbar:!0,id:"basic-navbar-nav",children:[(0,i.jsx)(j.Z,{children:(0,i.jsx)(u.default,{href:"/#features",passHref:!0,children:(0,i.jsx)(p.Z,{children:"Features"})})}),(0,i.jsx)(j.Z,{children:(0,i.jsx)(u.default,{href:"/#pricing",passHref:!0,children:(0,i.jsx)(p.Z,{children:"Pricing"})})})]}),(0,i.jsx)(m.Z,{children:(0,i.jsx)(j.Z,{children:(0,i.jsx)(y.Z,{color:"primary",children:"Try for free"})})})]})]})})},Z=function(e){var t=e.children,n=e.title,c=void 0===n?"This is the default title":n,a=s.useState(),o=(0,r.Z)(a,2),u=o[0],h=o[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.default,{children:[(0,i.jsx)("title",{children:c}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsx)("header",{ref:function(e){e&&h(e.getBoundingClientRect().height)},style:{position:"fixed",top:0,zIndex:1,width:"100%"},children:(0,i.jsx)(b,{})}),(0,i.jsx)("div",{style:{height:u}}),t,(0,i.jsx)(d,{})]})}},4788:function(e,t,n){"use strict";var i=n(5893),r=n(9227),s=n(7294);t.Z=function(e){var t=e.src,n=e.alt,l=e.style,c=s.useState(!1),a=(0,r.Z)(c,2),o=a[0],d=a[1];s.useEffect((function(){var e=!window||"localhost"!==window.location.hostname;d(e)}),[]);var u=o?"".concat("/slazy-vscode-docs","/").concat(t):t;return(0,i.jsx)("img",{src:u,alt:n,style:l})}},6381:function(e,t,n){"use strict";var i=n(809),r=n(2553),s=n(2012),l=n(9807),c=n(7690),a=n(9828),o=n(8561);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return c(this,n)}}var u=n(2426);t.Container=function(e){0;return e.children};var h=u(n(7294)),x=n(3937);function f(e){return g.apply(this,arguments)}function g(){return(g=o(i.mark((function e(t){var n,r,s;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,x.loadGetInitialProps)(n,r);case 3:return s=e.sent,e.abrupt("return",{pageProps:s});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.AppInitialProps,x.NextWebVitalsMetric;var m=function(e){l(n,e);var t=d(n);function n(){return r(this,n),t.apply(this,arguments)}return s(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,i=e.pageProps,r=e.__N_SSG,s=e.__N_SSP;return h.default.createElement(n,Object.assign({},i,r||s?{}:{url:j(t)}))}}]),n}(h.default.Component);function j(e){var t=e.pathname,n=e.asPath,i=e.query;return{get query(){return i},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var i=n?t:"",r=n||t;return e.push(i,r)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var i=n?t:"",r=n||t;return e.replace(i,r)}}}m.origGetInitialProps=f,m.getInitialProps=f},5087:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(5893),r=n(7544),s=n(267),l=n(1252),c=n(7975),a=n(7294),o=n(4788),d=function(e){var t=e.title,n=e.subtitle,r=e.description,s=e.image;return(0,i.jsxs)("div",{className:"feature-card",children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)(o.Z,{src:s,alt:"",style:{width:"100%",maxWidth:280,marginTop:30}}),(0,i.jsx)("h3",{children:n}),(0,i.jsx)("p",{children:r})]})},u=function(e){var t=e.children;return(0,i.jsx)("div",{className:"headline",children:t})},h=n(917),x=n(2122),f=n(9756),g=n(5697),m=n.n(g),j=n(4184),p=n.n(j),y=n(3663),v={tag:y.iC,inverse:m().bool,color:m().string,body:m().bool,outline:m().bool,className:m().string,cssModule:m().object,innerRef:m().oneOfType([m().object,m().string,m().func])},b=function(e){var t=e.className,n=e.cssModule,i=e.color,r=e.body,s=e.inverse,l=e.outline,c=e.tag,o=e.innerRef,d=(0,f.Z)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),u=(0,y.mx)(p()(t,"card",!!s&&"text-white",!!r&&"card-body",!!i&&(l?"border":"bg")+"-"+i),n);return a.createElement(c,(0,x.Z)({},d,{className:u,ref:o}))};b.propTypes=v,b.defaultProps={tag:"div"};var Z=b,w={tag:y.iC,className:m().string,cssModule:m().object,innerRef:m().oneOfType([m().object,m().string,m().func])},S=function(e){var t=e.className,n=e.cssModule,i=e.innerRef,r=e.tag,s=(0,f.Z)(e,["className","cssModule","innerRef","tag"]),l=(0,y.mx)(p()(t,"card-body"),n);return a.createElement(r,(0,x.Z)({},s,{className:l,ref:i}))};S.propTypes=w,S.defaultProps={tag:"div"};var z=S,k={tag:y.iC,className:m().string,cssModule:m().object},N=function(e){var t=e.className,n=e.cssModule,i=e.tag,r=(0,f.Z)(e,["className","cssModule","tag"]),s=(0,y.mx)(p()(t,"card-title"),n);return a.createElement(i,(0,x.Z)({},r,{className:s}))};N.propTypes=k,N.defaultProps={tag:"div"};var F=N,C={tag:y.iC,className:m().string,cssModule:m().object},E=function(e){var t=e.className,n=e.cssModule,i=e.tag,r=(0,f.Z)(e,["className","cssModule","tag"]),s=(0,y.mx)(p()(t,"card-subtitle"),n);return a.createElement(i,(0,x.Z)({},r,{className:s}))};E.propTypes=C,E.defaultProps={tag:"div"};var P=E,A=function(e){var t=e.title,n=e.subtitle,r=e.description,s=e.features,a=e.actionLabel;return(0,i.jsx)(l.Z,{md:"4",style:{display:"flex",justifyContent:"center",alignItems:"stretch"},children:(0,i.jsx)("div",{className:"pricing-card",children:(0,i.jsx)(Z,{children:(0,i.jsxs)(z,{style:{display:"flex",flexDirection:"column"},children:[(0,i.jsx)(F,{tag:"h5",style:{textAlign:"center"},children:t}),(0,i.jsx)(P,{tag:"h6",className:"mb-2 text-muted",style:{textAlign:"center"},children:n}),(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)("p",{children:r}),(0,i.jsx)("p",{style:{margin:0},children:"Top features:"}),(0,i.jsx)("ul",{children:s.map((function(e){return(0,i.jsx)("li",{children:e},e)}))})]}),(0,i.jsx)("a",{href:"action",children:(0,i.jsx)(c.Z,{color:"primary",style:{width:"100%"},children:a})})]})})})})},T=function(e){var t=e.background;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:(0,i.jsx)("polygon",{fill:t,points:"2560 0 2560 100 0 100"})})})},I=function(){return(0,i.jsxs)(h.Z,{title:"Slazy.io",children:[(0,i.jsx)("section",{style:{position:"relative"},children:(0,i.jsxs)(s.Z,{style:{padding:"0 20px"},children:[(0,i.jsx)(l.Z,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:10},children:[(0,i.jsxs)("h1",{style:{marginBottom:"1.5em"},children:["Create better software,",(0,i.jsx)("br",{})," without the busywork"]}),(0,i.jsx)("div",{style:{height:1,maxWidth:100,background:"grey",marginBottom:"1em"}}),(0,i.jsxs)("p",{style:{fontSize:"1.4em",maxWidth:460},children:["Slazy empowers your software development team with AI and let them focus on what's important : ",(0,i.jsx)("b",{children:"creating a Working Application."}),"  "]}),(0,i.jsx)("div",{style:{alignSelf:"flex-start"},children:(0,i.jsx)(c.Z,{color:"primary",size:"lg",children:"Try for free"})})]})}),(0,i.jsx)(l.Z,{md:"6",children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(o.Z,{src:"/images/hero.png",alt:"Picture of the author",style:{width:"100%"}})})})]})}),(0,i.jsx)(T,{background:"#FFF3E6"}),(0,i.jsxs)("section",{id:"features",style:{backgroundColor:"#FFF3E6"},children:[(0,i.jsx)(u,{children:(0,i.jsx)("h1",{style:{},children:"With its AI powered Skills, Slazy will become your ..."})}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{md:"4",children:(0,i.jsx)(d,{title:"Expert of the project",subtitle:"Ask for anything!",description:"Slazy builds its internal knowledge of your project by aggregating your content : source code, existing documents, team conversation...",image:"/images/hero.png"})}),(0,i.jsx)(l.Z,{md:"4",children:(0,i.jsx)(d,{title:"Engineering Assistant",subtitle:"Stay in the flow",description:"Slazy helps your team in capturing requirements and designing your solution thanks to assisted wizards and automatic consistency management.",image:"/images/hero.png"})}),(0,i.jsx)(l.Z,{md:"4",children:(0,i.jsx)(d,{title:"Document Writer",subtitle:"Focus on the core",description:"Slazy can compile its knowledge of your project into comprehensive documents",image:"/images/hero.png"})})]}),(0,i.jsx)(T,{background:"#FFFFFF"})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{style:{margin:20,textAlign:"center"},children:"Rely on the Expert"}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{md:"6",children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(o.Z,{src:"/images/1.png",alt:"Picture of the author",style:{width:"100%"}})})}),(0,i.jsx)(l.Z,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{padding:10},children:[(0,i.jsx)("h1",{style:{fontSize:"1.6em"},children:"Slazy makes sense of your content"}),(0,i.jsxs)("ul",{style:{fontSize:"1.2rem"},children:[(0,i.jsx)("li",{children:"Smart content aggregation from multiple sources"}),(0,i.jsx)("li",{children:"Source code analysys"}),(0,i.jsx)("li",{children:"Automatic knowledge extraction"}),(0,i.jsx)("li",{children:"Knowledge Graph"})]}),(0,i.jsx)("h1",{style:{fontSize:"1.6em"},children:"Ask for anything"}),(0,i.jsxs)("ul",{style:{fontSize:"1.2rem"},children:[(0,i.jsx)("li",{children:"Cognitive Search Engine"}),(0,i.jsx)("li",{children:"Automatic Question Answering"}),(0,i.jsx)("li",{children:"Human expert indentification"})]})]})})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{style:{margin:20,textAlign:"center"},children:"Get assisted"}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{md:"6",style:{padding:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{padding:10},children:[(0,i.jsx)("h1",{style:{fontSize:"1.6em"},children:"Engineering assistant"}),(0,i.jsxs)("ul",{style:{fontSize:"1.2rem"},children:[(0,i.jsx)("li",{children:"Requirement capture wizard"}),(0,i.jsx)("li",{children:"Technical Design wizard"}),(0,i.jsx)("li",{children:"UX Design wizard"}),(0,i.jsx)("li",{children:"Automatic consistency management"})]}),(0,i.jsx)("h1",{style:{fontSize:"1.6em"},children:"Coding assistant"}),(0,i.jsxs)("ul",{style:{fontSize:"1.2rem"},children:[(0,i.jsx)("li",{children:"Smart and visual code navigation"}),(0,i.jsx)("li",{children:"Automatic code portion tagging"}),(0,i.jsx)("li",{children:"Bugfix assistant"})]})]})}),(0,i.jsx)(l.Z,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(o.Z,{src:"/images/2.png",alt:"Picture of the author",style:{width:"100%"}})})})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{style:{margin:20,textAlign:"center"},children:"Focus on most impactful tasks"}),(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{md:"6",children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(o.Z,{src:"/images/3.png",alt:"Picture of the author",style:{width:"100%"}})})}),(0,i.jsx)(l.Z,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{padding:10},children:[(0,i.jsx)("h1",{style:{fontSize:"1.6em"},children:"Document automation"}),(0,i.jsxs)("ul",{style:{fontSize:"1.2rem"},children:[(0,i.jsx)("li",{children:"Built-in Specification Document generation IEEE"}),(0,i.jsx)("li",{children:"Built-in Technical Design Document generation IEEE"}),(0,i.jsx)("li",{children:"Customizable template based document generation"})]}),(0,i.jsx)("h1",{style:{fontSize:"1.6em"},children:"Workflow automation"}),(0,i.jsxs)("ul",{style:{fontSize:"1.2rem"},children:[(0,i.jsx)("li",{children:"Automatic reporting "}),(0,i.jsx)("li",{children:"Scriptable automation API"})]})]})})]})]}),(0,i.jsx)(T,{background:"#FFF3E6"}),(0,i.jsxs)("section",{id:"pricing",style:{backgroundColor:"#FFF3E6",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(u,{children:(0,i.jsx)("h1",{children:"Pricing"})}),(0,i.jsx)("div",{style:{alignSelf:"center",maxWidth:1024},children:(0,i.jsx)(r.Container,{children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(A,{title:"Starter",subtitle:"For every developper",description:"",features:["Per project knowledge base","Single User","Git integration"],action:"Try for free",actionLabel:"Try for free"}),(0,i.jsx)(A,{title:"Professional",subtitle:"For single professional developpers",description:"",features:["All Starter features","Multi-project knowledge base","Automated Project QnA","Basic documentation generation"],action:"Try for free",actionLabel:"Get in touch"}),(0,i.jsx)(A,{title:"Enterprise",subtitle:"For teams and organizations",description:"",features:["Organization wide knowledge base","Multi-user","Access control management","Private cloud or SaaS deployment"],action:"Try for free",actionLabel:"Get in touch"})]})})})]}),(0,i.jsx)(T,{background:"#000"})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5087)}])}},function(e){e.O(0,[774,351,765],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);