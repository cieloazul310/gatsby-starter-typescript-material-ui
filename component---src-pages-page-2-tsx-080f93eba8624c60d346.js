(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(317),i=a(246),l=a(224),c=a(315),s=a(2),d=a.n(s),p=a(1),m=a.n(p),u=(a(3),a(65)),b=a(221),h=a(42),E=a(331),f=a(222),g=r.a.forwardRef(function(e,t){var a=e.children,n=e.classes,o=e.className,i=e.color,l=void 0===i?"default":i,c=e.component,s=void 0===c?"button":c,p=e.disabled,b=void 0!==p&&p,h=e.disableFocusRipple,g=void 0!==h&&h,y=e.focusVisibleClassName,v=e.fullWidth,w=void 0!==v&&v,x=e.size,S=void 0===x?"medium":x,C=e.type,k=void 0===C?"button":C,O=e.variant,j=void 0===O?"text":O,R=d()(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","fullWidth","size","type","variant"]),N="text"===j,T="outlined"===j,D="contained"===j,z="primary"===l,L="secondary"===l,M=Object(u.a)(n.root,o,N&&[n.text,z&&n.textPrimary,L&&n.textSecondary],T&&[n.outlined,z&&n.outlinedPrimary,L&&n.outlinedSecondary],D&&[n.contained,z&&n.containedPrimary,L&&n.containedSecondary],"medium"!==S&&n["size".concat(Object(f.a)(S))],b&&n.disabled,w&&n.fullWidth,"inherit"===l&&n.colorInherit);return r.a.createElement(E.a,m()({className:M,component:s,disabled:b,focusRipple:!g,focusVisibleClassName:Object(u.a)(n.focusVisible,y),ref:t,type:k},R),r.a.createElement("span",{className:n.label},a))}),y=Object(b.a)(function(e){return{root:m()({lineHeight:1.75},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(h.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 16px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(h.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(h.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(h.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(h.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},sizeSmall:{padding:"4px 8px",fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"8px 24px",fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}},{name:"MuiButton"})(g),v=a(220),w=a(313),x=Object(v.a)(function(e){return Object(w.a)({root:{width:300,margin:"0 auto",textAlign:"center"},header:{backgroundColor:e.palette.primary.main,padding:"1.5em",boxShadow:e.shadows[2]},container:{width:"100%",padding:"3em"},counter:{fontSize:72,margin:"0 auto"},buttonContainer:{padding:"1em"},button:{width:120,margin:"0 .2em"}})});var S=function(e){var t=e.title,a=x({}),r=n.useState(0),i=r[0],l=r[1],s=n.useState(!0),d=s[0],p=s[1];return n.createElement(c.a,{className:a.root},n.createElement(o.a,{variant:"h6",className:a.header},t||"Simple Counter"),n.createElement("div",{className:a.container},n.createElement("span",{className:a.counter},i)),n.createElement("div",{className:a.buttonContainer},n.createElement(y,{className:a.button,variant:"contained",color:"primary",onClick:function(){l(d?i+1:i-1)}},d?"INCREMENT":"DECREMENT"),n.createElement(y,{className:a.button,variant:"contained",color:"secondary",onClick:function(){p(!d)}},"REVERSE")))},C=a(245),k=a(233);t.default=function(e){var t=e.location;console.log(t);var a=n.useReducer(C.a,Object(k.a)(t)),r=a[0],c=a[1];return n.createElement(i.a,{title:"Second Page",location:t,appState:r,dispatch:c},n.createElement(o.a,{variant:"h2",gutterBottom:!0},"Hi from the second page"),n.createElement(S,null),n.createElement("p",null,"Welcome to page 2"),n.createElement(l.a,{to:"/",appState:r},"Go back to the homepage"))}},224:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});a(66);var n=a(0),r=a(229),o=a(226),i=a.n(o);function l(e){var t=e.className,a=e.children,o=e.to,l=e.appState;return n.createElement(r.a,{className:i()(t),to:o,state:{appState:l}},a)}function c(e,t,a){void 0===a&&(a={}),Object(r.c)(e,Object.assign({},a,{state:{appState:t}}))}},229:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(64),c=a.n(l);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return l.navigate});a(230);var s=r.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(d,{data:t,query:a,render:n||o,staticQueryData:e})})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},230:function(e,t,a){var n;e.exports=(n=a(244))&&n.default||n},233:function(e,t,a){"use strict";var n={val:100,mapState:{layer:"cjstd",borderVisibility:!0}},r=function(e){return e.state&&e.state.appState?e.state.appState:n},o=["cjstd","cjpale","slopemap","relief","seemlessphoto"];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o})},237:function(e,t,a){"use strict";var n=a(0),r=a(220),o=a(313),i=a(323),l=a(324),c=a(320),s=a(321),d=a(322),p=a(326),m=a(325),u=a(333),b=a(327),h=a(255),E=a.n(h),f=a(256),g=a.n(f),y=a(254),v=a.n(y),w=a(257),x=a.n(w),S=a(233),C=Object(r.a)(function(e){return Object(o.a)({nested:{paddingLeft:e.spacing(6)}})});t.a=function(e){var t=e.mapState,a=e.dispatch,r=C({}),o=n.useState(!1),h=o[0],f=o[1];return n.createElement(i.a,{subheader:n.createElement(l.a,null,"Map Handler")},n.createElement(c.a,{button:!0,onClick:function(){f(!h)}},n.createElement(s.a,null,n.createElement(v.a,null)),n.createElement(d.a,{primary:"Layers"}),h?n.createElement(E.a,null):n.createElement(g.a,null)),n.createElement(m.a,{in:h,timeout:"auto",unmountOnExit:!0},n.createElement(i.a,{disablePadding:!0},S.b.map(function(e){return n.createElement(c.a,{className:r.nested,key:e,button:!0,onClick:function(){return a({type:"SET_LAYER",layer:e})}},n.createElement(d.a,{primary:e}),n.createElement(p.a,null,n.createElement(u.a,{checked:e===t.layer,onChange:function(){return a({type:"SET_LAYER",layer:e})}})))}))),n.createElement(c.a,{onClick:function(){return a({type:"TOGGLE_BORDER"})}},n.createElement(s.a,null,n.createElement(x.a,null)),n.createElement(d.a,{primary:"Border"}),n.createElement(p.a,null,n.createElement(b.a,{checked:t.borderVisibility,onChange:function(){return a({type:"TOGGLE_BORDER"})}}))))}},243:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Typescript App Shell",description:"A GatsbyJS starter using Material Design written with TypeScript.",author:{name:"cieloazul310"}}}}}},244:function(e,t,a){"use strict";a.r(t);a(66);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(101),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},245:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(66);function n(e,t){switch(t.type){case"SET_LAYER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{layer:t.layer})});case"TOGGLE_BORDER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{borderVisibility:!e.mapState.borderVisibility})});default:throw new Error}}},246:function(e,t,a){"use strict";var n=a(243),r=a(0),o=a(229),i=a(99),l=a.n(i),c=a(220),s=a(313),d=a(317),p=a(332),m=a(330),u=a(329),b=a(226),h=a.n(b),E=a(314),f=a(316),g=a(312),y=a(334),v=a(252),w=a.n(v),x=a(98),S=a.n(x),C=a(310),k=a(248);var O=function(e){var t,a=e.icon,n=e.defaultVertical,o=S()(e,["icon","defaultVertical"]),i=a.icon[0],l=i>512?(512-i)/2:0;return r.createElement(C.a,o,r.createElement(k.a,{icon:a,style:{verticalAlign:n?void 0:"0.125em",transform:null!==l?"translateX("+l/(t=o.fontSize,"small"===t?20:"large"===t?36:24)+"px)":void 0}}))};var j=a(249),R=function(e){var t=e.url,a=e.title;return a?"https://twitter.com/intent/tweet?text="+encodeURI(a)+"&url="+encodeURIComponent(t):"https://twitter.com/intent/tweet?url="+encodeURIComponent(t)},N=function(e){var t=e.url;return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t)};var T=function(e){var t=e.className,a=e.title,n=e.location,o=e.fontSize,i=e.color;return r.createElement("div",{className:h()(t)},r.createElement(y.a,{title:"Share on Twitter"},r.createElement(g.a,{color:i||"default",href:R({url:n.href,title:a}),target:"_blank",rel:"noopener noreferrer"},r.createElement(O,{icon:j.c,fontSize:o||"default"}))),r.createElement(y.a,{title:"Share on Facebook"},r.createElement(g.a,{color:i||"default",href:N({url:n.href}),target:"_blank",rel:"noopener noreferrer"},r.createElement(O,{icon:j.a,fontSize:o||"default"}))),r.createElement(y.a,{title:"GitHub"},r.createElement(g.a,{color:i||"default",href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(O,{icon:j.b,fontSize:o||"default"}))))},D=Object(c.a)(function(e){return Object(s.a)({title:{flex:1,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}})});var z=function(e){var t=e.className,a=e.title,n=e.location,o=e.toggleDrawer,i=D({});return r.createElement(E.a,{className:h()(t)},r.createElement(f.a,null,r.createElement(p.a,{xsDown:!0,mdUp:!0,implementation:"css"},r.createElement(y.a,{title:"Menu"},r.createElement(g.a,{color:"inherit",onClick:o},r.createElement(w.a,null)))),r.createElement(d.a,{className:i.title,variant:"h6",component:"h1",color:"inherit"},a),r.createElement(p.a,{smDown:!0,implementation:"css"},r.createElement(T,{color:"inherit",location:n,title:a}))))},L=a(318),M=a(319),P=a(235),V=a.n(P),G=a(236),A=a.n(G),B=a(253),I=a.n(B),_=a(224),q=Object(c.a)(function(e){return Object(s.a)({root:{position:"fixed",bottom:0,left:0,width:"100%"}})});var U=function(e){var t=e.location,a=e.appState,n=q({});return r.createElement(L.a,{className:n.root,value:t.pathname,showLabels:!0,onChange:function(e,t){Object(_.b)(t,a)}},r.createElement(M.a,{label:"Top",value:"/",icon:r.createElement(V.a,null)}),r.createElement(M.a,{label:"page2",value:"/page-2/",icon:r.createElement(A.a,null)}),r.createElement(M.a,{label:"Settings",value:"/settings/",icon:r.createElement(I.a,null)}))},W=(a(66),a(328)),$=a(258),F=a.n($),H=a(13),Y=a.n(H),J=a(323),Q=a(324),X=a(320),K=a(321),Z=a(322),ee=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).renderLink=r.forwardRef(function(e,a){return r.createElement(_.a,Object.assign({to:t.props.to,appState:t.props.appState},e,{innerRef:a}))}),t}return Y()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.primary,n=e.to,o=e.location;return r.createElement(X.a,{button:!0,component:this.renderLink,selected:o.pathname===n},t&&r.createElement(K.a,null,t),r.createElement(Z.a,{primary:a}))},t}(r.PureComponent);var te=function(e){var t=e.location,a=e.appState;return r.createElement(J.a,{subheader:r.createElement(Q.a,null,"Contents")},r.createElement(ee,{to:"/",primary:"Top",location:t,appState:a,icon:r.createElement(V.a,null)}),r.createElement(ee,{to:"/page-2/",primary:"Page 2",location:t,appState:a,icon:r.createElement(A.a,null)}))},ae=a(237),ne=Object(c.a)(function(e){return Object(s.a)({toolbar:Object.assign({},e.mixins.toolbar,{display:"flex",alignItems:"center",paddingLeft:e.spacing(3)})})});var re=function(e){var t=e.location,a=e.appState,n=e.handleDrawer,o=e.contents,i=e.dispatch,l=ne({});return r.createElement("div",null,r.createElement("div",{className:l.toolbar},r.createElement(p.a,{mdUp:!0},r.createElement(y.a,{title:"Close"},r.createElement(g.a,{onClick:n},r.createElement(F.a,null))))),r.createElement(W.a,null),o?o.map(function(e,t,a){return t===a.length-1?e:r.createElement(r.Fragment,null,e,r.createElement(W.a,null))}):null,r.createElement(te,{location:t,appState:a}),r.createElement(W.a,null),r.createElement(ae.a,{mapState:a.mapState,dispatch:i}))},oe=Object(c.a)(function(e){var t,a,n;return Object(s.a)({root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("md")]={width:280},t),drawerPaper:{width:280},header:(a={width:"100%"},a[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},a),main:(n={width:"100%",paddingTop:e.mixins.toolbar.minHeight},n[e.breakpoints.down("xs")]={paddingBottom:56},n[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},n["@media (min-width:600px)"]={paddingTop:64},n),content:{width:"100%",maxWidth:800,margin:"auto",padding:e.spacing(4)+"px "+e.spacing(2)+"px","@global":{a:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{color:e.palette.secondary.light,textDecoration:"underline"}}}},footer:{textAlign:"center",padding:e.spacing(4)+"px "+e.spacing(2)+"px"}})});t.a=function(e){var t=e.children,a=e.title,i=e.appState,c=e.location,s=e.drawerContents,b=e.dispatch,h=r.useState(!1),E=h[0],f=h[1],g=function(){f(!E)};return r.createElement(o.b,{query:"827723073",render:function(e){var n=oe({});return r.createElement("div",{className:n.root},r.createElement(l.a,{title:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description}]}),r.createElement(z,{className:n.header,title:a||e.site.siteMetadata.title,location:c,toggleDrawer:g}),r.createElement("nav",{className:n.drawer},r.createElement(p.a,{mdUp:!0,implementation:"css"},r.createElement(m.a,{classes:{paper:n.drawerPaper},variant:"temporary",onClose:g,open:E},r.createElement(re,{location:c,appState:i,handleDrawer:g,contents:s,dispatch:b}))),r.createElement(p.a,{smDown:!0,implementation:"css"},r.createElement(m.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},r.createElement(re,{location:c,appState:i,handleDrawer:g,contents:s,dispatch:b})))),r.createElement("div",{className:n.main},r.createElement("main",null,r.createElement("div",{className:n.content},t)),r.createElement("footer",null,r.createElement("div",{className:n.footer},r.createElement(d.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built with"," ",r.createElement(u.a,{color:"secondary",href:"https://www.gatsbyjs.org"},"Gatsby"))))),r.createElement(p.a,{smUp:!0,implementation:"css"},r.createElement(U,{location:c,appState:i})))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-080f93eba8624c60d346.js.map