(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(319),i=a(248),l=a(226),c=a(317),s=a(2),d=a.n(s),p=a(1),u=a.n(p),m=(a(3),a(65)),b=a(222),h=a(42),f=a(333),E=a(224),g=r.a.forwardRef(function(e,t){var a=e.children,n=e.classes,o=e.className,i=e.color,l=void 0===i?"default":i,c=e.component,s=void 0===c?"button":c,p=e.disabled,b=void 0!==p&&p,h=e.disableFocusRipple,g=void 0!==h&&h,y=e.focusVisibleClassName,v=e.fullWidth,w=void 0!==v&&v,x=e.size,S=void 0===x?"medium":x,C=e.type,k=void 0===C?"button":C,O=e.variant,j=void 0===O?"text":O,R=d()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),N="text"===j,T="outlined"===j,D="contained"===j,P="primary"===l,z="secondary"===l,L=Object(m.a)(n.root,o,N&&[n.text,P&&n.textPrimary,z&&n.textSecondary],T&&[n.outlined,P&&n.outlinedPrimary,z&&n.outlinedSecondary],D&&[n.contained,P&&n.containedPrimary,z&&n.containedSecondary],"medium"!==S&&n["size".concat(Object(E.a)(S))],b&&n.disabled,w&&n.fullWidth,"inherit"===l&&n.colorInherit);return r.a.createElement(f.a,u()({className:L,component:s,disabled:b,focusRipple:!g,focusVisibleClassName:Object(m.a)(n.focusVisible,y),ref:t,type:k},R),r.a.createElement("span",{className:n.label},a))}),y=Object(b.a)(function(e){return{root:u()({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(h.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(h.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(h.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(g),v=a(221),w=a(315),x=Object(v.a)(function(e){return Object(w.a)({root:{width:300,margin:"0 auto",textAlign:"center"},header:{backgroundColor:e.palette.primary.main,padding:"1.5em",boxShadow:e.shadows[2]},container:{width:"100%",padding:"3em"},counter:{fontSize:72,margin:"0 auto"},buttonContainer:{padding:"1em"},button:{width:120,margin:"0 .2em"}})});var S=function(e){var t=e.title,a=x({}),r=n.useState(0),i=r[0],l=r[1],s=n.useState(!0),d=s[0],p=s[1];return n.createElement(c.a,{className:a.root},n.createElement(o.a,{variant:"h6",className:a.header},t||"Simple Counter"),n.createElement("div",{className:a.container},n.createElement("span",{className:a.counter},i)),n.createElement("div",{className:a.buttonContainer},n.createElement(y,{className:a.button,variant:"contained",color:"primary",onClick:function(){l(d?i+1:i-1)}},d?"INCREMENT":"DECREMENT"),n.createElement(y,{className:a.button,variant:"contained",color:"secondary",onClick:function(){p(!d)}},"REVERSE")))},C=a(247),k=a(235);t.default=function(e){var t=e.location;console.log(t);var a=n.useReducer(C.a,Object(k.a)(t)),r=a[0],c=a[1];return n.createElement(i.a,{title:"Second Page",location:t,appState:r,dispatch:c},n.createElement(o.a,{variant:"h2",gutterBottom:!0},"Hi from the second page"),n.createElement(S,null),n.createElement("p",null,"Welcome to page 2"),n.createElement(l.a,{to:"/",appState:r},"Go back to the homepage"))}},223:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(64),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return l.navigate});a(231);var s=r.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(d,{data:t,query:a,render:n||o,staticQueryData:e})})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},226:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});a(66);var n=a(0),r=a(223),o=a(228),i=a.n(o);function l(e){var t=e.className,a=e.children,o=e.to,l=e.appState;return n.createElement(r.a,{className:i()(t),to:o,state:{appState:l}},a)}function c(e,t,a){void 0===a&&(a={}),Object(r.c)(e,Object.assign({},a,{state:{appState:t}}))}},231:function(e,t,a){var n;e.exports=(n=a(246))&&n.default||n},234:function(e){e.exports={data:{site:{pathPrefix:"/gatsby-starter-typescript-material-ui"}}}},235:function(e,t,a){"use strict";var n={val:100,mapState:{layer:"cjstd",borderVisibility:!0}},r=function(e){return e.state&&e.state.appState?e.state.appState:n},o=["cjstd","cjpale","slopemap","relief","seemlessphoto"];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o})},239:function(e,t,a){"use strict";var n=a(0),r=a(221),o=a(315),i=a(325),l=a(326),c=a(322),s=a(323),d=a(324),p=a(328),u=a(327),m=a(335),b=a(329),h=a(257),f=a.n(h),E=a(258),g=a.n(E),y=a(256),v=a.n(y),w=a(259),x=a.n(w),S=a(235),C=Object(r.a)(function(e){return Object(o.a)({nested:{paddingLeft:e.spacing(6)}})});t.a=function(e){var t=e.mapState,a=e.dispatch,r=C({}),o=n.useState(!1),h=o[0],E=o[1];return n.createElement(i.a,{subheader:n.createElement(l.a,null,"Map Handler")},n.createElement(c.a,{button:!0,onClick:function(){E(!h)}},n.createElement(s.a,null,n.createElement(v.a,null)),n.createElement(d.a,{primary:"Layers"}),h?n.createElement(f.a,null):n.createElement(g.a,null)),n.createElement(u.a,{in:h,timeout:"auto",unmountOnExit:!0},n.createElement(i.a,{disablePadding:!0},S.b.map(function(e){return n.createElement(c.a,{className:r.nested,key:e,button:!0,onClick:function(){return a({type:"SET_LAYER",layer:e})}},n.createElement(d.a,{primary:e}),n.createElement(p.a,null,n.createElement(m.a,{checked:e===t.layer,onChange:function(){return a({type:"SET_LAYER",layer:e})}})))}))),n.createElement(c.a,{onClick:function(){return a({type:"TOGGLE_BORDER"})}},n.createElement(s.a,null,n.createElement(x.a,null)),n.createElement(d.a,{primary:"Border"}),n.createElement(p.a,null,n.createElement(b.a,{checked:t.borderVisibility,onChange:function(){return a({type:"TOGGLE_BORDER"})}}))))}},245:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Typescript App Shell",description:"A GatsbyJS starter using Material Design written with TypeScript.",author:{name:"cieloazul310"}}}}}},246:function(e,t,a){"use strict";a.r(t);a(66);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(102),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},247:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(66);function n(e,t){switch(t.type){case"SET_LAYER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{layer:t.layer})});case"TOGGLE_BORDER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{borderVisibility:!e.mapState.borderVisibility})});default:throw new Error}}},248:function(e,t,a){"use strict";var n=a(245),r=a(0),o=a(223),i=a(100),l=a.n(i),c=a(221),s=a(315),d=a(319),p=a(334),u=a(332),m=a(331),b=a(228),h=a.n(b),f=a(316),E=a(318),g=a(314),y=a(336),v=a(254),w=a.n(v),x=a(98),S=a.n(x),C=a(312),k=a(250);var O=function(e){var t,a=e.icon,n=e.defaultVertical,o=S()(e,["icon","defaultVertical"]),i=a.icon[0],l=i>512?(512-i)/2:0;return r.createElement(C.a,o,r.createElement(k.a,{icon:a,style:{verticalAlign:n?void 0:"0.125em",transform:null!==l?"translateX("+l/(t=o.fontSize,"small"===t?20:"large"===t?36:24)+"px)":void 0}}))};var j=a(251),R=function(e){var t=e.url,a=e.title;return a?"https://twitter.com/intent/tweet?text="+encodeURI(a)+"&url="+encodeURIComponent(t):"https://twitter.com/intent/tweet?url="+encodeURIComponent(t)},N=function(e){var t=e.url;return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t)};var T=function(e){var t=e.className,a=e.title,n=e.location,o=e.fontSize,i=e.color;return r.createElement("div",{className:h()(t)},r.createElement(y.a,{title:"Share on Twitter"},r.createElement(g.a,{color:i||"default",href:R({url:n.href,title:a}),target:"_blank",rel:"noopener noreferrer"},r.createElement(O,{icon:j.c,fontSize:o||"default"}))),r.createElement(y.a,{title:"Share on Facebook"},r.createElement(g.a,{color:i||"default",href:N({url:n.href}),target:"_blank",rel:"noopener noreferrer"},r.createElement(O,{icon:j.a,fontSize:o||"default"}))),r.createElement(y.a,{title:"GitHub"},r.createElement(g.a,{color:i||"default",href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(O,{icon:j.b,fontSize:o||"default"}))))},D=Object(c.a)(function(e){return Object(s.a)({title:{flex:1,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}})});var P=function(e){var t=e.className,a=e.title,n=e.location,o=e.toggleDrawer,i=D({});return r.createElement(f.a,{className:h()(t)},r.createElement(E.a,null,r.createElement(p.a,{xsDown:!0,mdUp:!0,implementation:"css"},r.createElement(y.a,{title:"Menu"},r.createElement(g.a,{color:"inherit",onClick:o},r.createElement(w.a,null)))),r.createElement(d.a,{className:i.title,variant:"h6",component:"h1",color:"inherit"},a),r.createElement(p.a,{smDown:!0,implementation:"css"},r.createElement(T,{color:"inherit",location:n,title:a}))))},z=a(234),L=a(320),M=a(321),V=a(237),G=a.n(V),q=a(238),A=a.n(q),B=a(255),I=a.n(B),_=a(226);a(99);function U(e,t){var a=e.hostname,n=e.pathname;return"localhost"===a?n:n.replace(t,"")}var W=Object(c.a)(function(e){return Object(s.a)({root:{position:"fixed",bottom:0,left:0,width:"100%"}})});var $=function(e){var t=e.location,a=e.appState;return r.createElement(o.b,{query:"1108187744",render:function(e){var n=e.site,o=W({}),i=n.pathPrefix;return r.createElement(L.a,{className:o.root,value:U(t,i),showLabels:!0,onChange:function(e,t){Object(_.b)(t,a)}},r.createElement(M.a,{label:"Top",value:"/",icon:r.createElement(G.a,null)}),r.createElement(M.a,{label:"page2",value:"/page-2/",icon:r.createElement(A.a,null)}),r.createElement(M.a,{label:"Settings",value:"/settings/",icon:r.createElement(I.a,null)}))},data:z})},F=(a(66),a(330)),H=a(260),Y=a.n(H),J=a(13),Q=a.n(J),X=a(325),K=a(326),Z=a(322),ee=a(323),te=a(324),ae=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).renderLink=r.forwardRef(function(e,a){return r.createElement(_.a,Object.assign({to:t.props.to,appState:t.props.appState},e,{innerRef:a}))}),t}return Q()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.primary,n=e.selected;return r.createElement(Z.a,{button:!0,component:this.renderLink,selected:n},t&&r.createElement(ee.a,null,t),r.createElement(te.a,{primary:a}))},t}(r.PureComponent);var ne=function(e){var t=e.location,a=e.appState;return r.createElement(o.b,{query:"1108187744",render:function(e){var n=e.site.pathPrefix,o=U(t,n);return r.createElement(X.a,{subheader:r.createElement(K.a,null,"Contents")},r.createElement(ae,{to:"/",primary:"Top",appState:a,icon:r.createElement(G.a,null),selected:"/"===o}),r.createElement(ae,{to:"/page-2/",primary:"Page 2",appState:a,icon:r.createElement(A.a,null),selected:"/page-2/"===o}))},data:z})},re=a(239),oe=Object(c.a)(function(e){return Object(s.a)({toolbar:Object.assign({},e.mixins.toolbar,{display:"flex",alignItems:"center",paddingLeft:e.spacing(3)})})});var ie=function(e){var t=e.location,a=e.appState,n=e.handleDrawer,o=e.contents,i=e.dispatch,l=oe({});return r.createElement("div",null,r.createElement("div",{className:l.toolbar},r.createElement(p.a,{mdUp:!0},r.createElement(y.a,{title:"Close"},r.createElement(g.a,{onClick:n},r.createElement(Y.a,null))))),r.createElement(F.a,null),o?o.map(function(e,t,a){return t===a.length-1?e:r.createElement(r.Fragment,null,e,r.createElement(F.a,null))}):null,r.createElement(ne,{location:t,appState:a}),r.createElement(F.a,null),r.createElement(re.a,{mapState:a.mapState,dispatch:i}))},le=Object(c.a)(function(e){var t,a,n;return Object(s.a)({root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("md")]={width:280},t),drawerPaper:{width:280},header:(a={width:"100%"},a[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},a),main:(n={width:"100%",paddingTop:e.mixins.toolbar.minHeight},n[e.breakpoints.down("xs")]={paddingBottom:56},n[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},n["@media (min-width:600px)"]={paddingTop:64},n),content:{width:"100%",maxWidth:800,margin:"auto",padding:e.spacing(4)+"px "+e.spacing(2)+"px","@global":{a:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{color:e.palette.secondary.light,textDecoration:"underline"}}}},footer:{textAlign:"center",padding:e.spacing(4)+"px "+e.spacing(2)+"px"}})});t.a=function(e){var t=e.children,a=e.title,i=e.appState,c=e.location,s=e.drawerContents,b=e.dispatch,h=r.useState(!1),f=h[0],E=h[1],g=function(){E(!f)};return r.createElement(o.b,{query:"827723073",render:function(e){var n=le({});return r.createElement("div",{className:n.root},r.createElement(l.a,{title:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description}]}),r.createElement(P,{className:n.header,title:a||e.site.siteMetadata.title,location:c,toggleDrawer:g}),r.createElement("nav",{className:n.drawer},r.createElement(p.a,{mdUp:!0,implementation:"css"},r.createElement(u.a,{classes:{paper:n.drawerPaper},variant:"temporary",onClose:g,open:f},r.createElement(ie,{location:c,appState:i,handleDrawer:g,contents:s,dispatch:b}))),r.createElement(p.a,{smDown:!0,implementation:"css"},r.createElement(u.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},r.createElement(ie,{location:c,appState:i,handleDrawer:g,contents:s,dispatch:b})))),r.createElement("div",{className:n.main},r.createElement("main",null,r.createElement("div",{className:n.content},t)),r.createElement("footer",null,r.createElement("div",{className:n.footer},r.createElement(d.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built with"," ",r.createElement(m.a,{color:"secondary",href:"https://www.gatsbyjs.org"},"Gatsby"))))),r.createElement(p.a,{smUp:!0,implementation:"css"},r.createElement($,{location:c,appState:i})))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-64a26dafa1ee9d991d9d.js.map