(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{917:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var s=t(5893),r=t(7294),i=t(9008),l=t(616),a=t(267),o=t(1252),c=function(e){return(0,l.Z)(e),(0,s.jsx)("footer",{style:{padding:"1rem"},children:(0,s.jsxs)(a.Z,{className:"align-items-center justify-content-md-between",children:[(0,s.jsx)(o.Z,{md:"6",children:(0,s.jsxs)("div",{className:" copyright",children:["\xa9 ",(new Date).getFullYear()," "]})}),(0,s.jsx)(o.Z,{md:"6"})]})})},d=t(7261),u=t(9227),f=t(9163),h=t(1664),p=t(9544),b=t(6992),v=t(5614),j=t(6737),m=t(7243),x=t(3999),g=t(8008);function Z(){var e=(0,d.Z)(["\n"]);return Z=function(){return e},e}var N=f.ZP.header(Z()),y=function(e){(0,l.Z)(e);var n=r.useState(!1),t=(0,u.Z)(n,2),i=t[0],a=t[1];return(0,s.jsx)(N,{children:(0,s.jsxs)(p.Z,{color:"light",light:!0,expand:"md",children:[(0,s.jsx)(b.Z,{href:"/",children:"Slazy"}),(0,s.jsx)(v.Z,{onClick:function(){return a(!i)}}),(0,s.jsxs)(j.Z,{isOpen:i,navbar:!0,children:[(0,s.jsx)(m.Z,{className:"mr-auto",navbar:!0,id:"basic-navbar-nav",children:(0,s.jsx)(x.Z,{children:(0,s.jsx)(h.default,{href:"/about",passHref:!0,children:(0,s.jsx)(g.Z,{children:"Features"})})})}),(0,s.jsx)(m.Z,{children:(0,s.jsx)(x.Z,{children:(0,s.jsx)(h.default,{href:"/about",passHref:!0,children:(0,s.jsx)(g.Z,{children:"About"})})})})]})]})})},k=function(e){var n=e.children,t=e.title,r=void 0===t?"This is the default title":t;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:r}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,s.jsx)(y,{}),n,(0,s.jsx)(c,{})]})}},7456:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var s=t(5893),r=t(2122),i=t(9756),l=t(7294),a=t(5697),o=t.n(a),c=t(4184),d=t.n(c),u=t(3663),f={tag:u.iC,fluid:o().bool,className:o().string,cssModule:o().object},h=function(e){var n=e.className,t=e.cssModule,s=e.tag,a=e.fluid,o=(0,i.Z)(e,["className","cssModule","tag","fluid"]),c=(0,u.mx)(d()(n,"jumbotron",!!a&&"jumbotron-fluid"),t);return l.createElement(s,(0,r.Z)({},o,{className:c}))};h.propTypes=f,h.defaultProps={tag:"div"};var p=h,b={tag:u.iC,fluid:o().oneOfType([o().bool,o().string]),className:o().string,cssModule:o().object},v=function(e){var n=e.className,t=e.cssModule,s=e.fluid,a=e.tag,o=(0,i.Z)(e,["className","cssModule","fluid","tag"]),c="container";!0===s?c="container-fluid":s&&(c="container-"+s);var f=(0,u.mx)(d()(n,c),t);return l.createElement(a,(0,r.Z)({},o,{className:f}))};v.propTypes=b,v.defaultProps={tag:"div"};var j=v,m=t(3349),x=t(3552),g={active:o().bool,"aria-label":o().string,block:o().bool,color:o().string,disabled:o().bool,outline:o().bool,tag:u.iC,innerRef:o().oneOfType([o().object,o().func,o().string]),onClick:o().func,size:o().string,children:o().node,className:o().string,cssModule:o().object,close:o().bool},Z=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind((0,m.Z)(t)),t}(0,x.Z)(n,e);var t=n.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,n=e.active,t=e["aria-label"],s=e.block,a=e.className,o=e.close,c=e.cssModule,f=e.color,h=e.outline,p=e.size,b=e.tag,v=e.innerRef,j=(0,i.Z)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof j.children&&(j.children=l.createElement("span",{"aria-hidden":!0},"\xd7"));var m="btn"+(h?"-outline":"")+"-"+f,x=(0,u.mx)(d()(a,{close:o},o||"btn",o||m,!!p&&"btn-"+p,!!s&&"btn-block",{active:n,disabled:this.props.disabled}),c);j.href&&"button"===b&&(b="a");var g=o?"Close":null;return l.createElement(b,(0,r.Z)({type:"button"===b&&j.onClick?"button":void 0},j,{className:x,ref:v,onClick:this.onClick,"aria-label":t||g}))},n}(l.Component);Z.propTypes=g,Z.defaultProps={color:"secondary",tag:"button"};var N=Z,y=t(917),k=function(){return(0,s.jsx)(y.Z,{title:"Slazy.io",children:(0,s.jsxs)("section",{style:{position:"relative",background:"linear-gradient(150deg,#7795f8 15%,#6772e5 70%,#555abf 94%)",color:"white"},children:[(0,s.jsx)(p,{fluid:!0,style:{background:"transparent"},children:(0,s.jsxs)(j,{fluid:!0,children:[(0,s.jsx)("h1",{className:"display-3",children:"Slazy"}),(0,s.jsx)("p",{className:"lead",children:"Blah blah"}),(0,s.jsx)(N,{color:"primary",size:"lg",children:"Primary button"})," "]})}),(0,s.jsx)("div",{className:"separator separator-bottom separator-skew",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:(0,s.jsx)("polygon",{fill:"white",points:"2560 0 2560 100 0 100"})})})]})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7456)}])}},function(e){e.O(0,[774,351,645],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);