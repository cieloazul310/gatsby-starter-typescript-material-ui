(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(319),c=a(248),i=a(239),l=a(247),o=a(235);t.default=function(e){var t=e.location,a=n.useReducer(l.a,Object(o.a)(t)),s=a[0],u=a[1];return n.createElement(c.a,{title:"Settings",location:t,appState:s,dispatch:u},n.createElement(r.a,{variant:"h2",gutterBottom:!0},"Settings"),n.createElement(r.a,{variant:"h5",gutterBottom:!0},"This is Settings Page for App."),n.createElement(i.a,{mapState:s.mapState,dispatch:u}))}},223:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(3),i=a.n(c),l=a(64),o=a.n(l);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return l.navigate});a(231);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&c(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||c,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},226:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return o});a(66);var n=a(0),r=a(223),c=a(228),i=a.n(c);function l(e){var t=e.className,a=e.children,c=e.to,l=e.appState;return n.createElement(r.a,{className:i()(t),to:c,state:{appState:l}},a)}function o(e,t,a){void 0===a&&(a={}),Object(r.c)(e,Object.assign({},a,{state:{appState:t}}))}},231:function(e,t,a){var n;e.exports=(n=a(246))&&n.default||n},234:function(e){e.exports={data:{site:{pathPrefix:"/gatsby-starter-typescript-material-ui"}}}},235:function(e,t,a){"use strict";var n={val:100,mapState:{layer:"cjstd",borderVisibility:!0}},r=function(e){return e.state&&e.state.appState?e.state.appState:n},c=["cjstd","cjpale","slopemap","relief","seemlessphoto"];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return c})},239:function(e,t,a){"use strict";var n=a(0),r=a(221),c=a(315),i=a(325),l=a(326),o=a(322),s=a(323),u=a(324),m=a(328),p=a(327),d=a(335),E=a(329),f=a(257),h=a.n(f),g=a(258),b=a.n(g),v=a(256),y=a.n(v),w=a(259),S=a.n(w),x=a(235),O=Object(r.a)(function(e){return Object(c.a)({nested:{paddingLeft:e.spacing(6)}})});t.a=function(e){var t=e.mapState,a=e.dispatch,r=O({}),c=n.useState(!1),f=c[0],g=c[1];return n.createElement(i.a,{subheader:n.createElement(l.a,null,"Map Handler")},n.createElement(o.a,{button:!0,onClick:function(){g(!f)}},n.createElement(s.a,null,n.createElement(y.a,null)),n.createElement(u.a,{primary:"Layers"}),f?n.createElement(h.a,null):n.createElement(b.a,null)),n.createElement(p.a,{in:f,timeout:"auto",unmountOnExit:!0},n.createElement(i.a,{disablePadding:!0},x.b.map(function(e){return n.createElement(o.a,{className:r.nested,key:e,button:!0,onClick:function(){return a({type:"SET_LAYER",layer:e})}},n.createElement(u.a,{primary:e}),n.createElement(m.a,null,n.createElement(d.a,{checked:e===t.layer,onChange:function(){return a({type:"SET_LAYER",layer:e})}})))}))),n.createElement(o.a,{onClick:function(){return a({type:"TOGGLE_BORDER"})}},n.createElement(s.a,null,n.createElement(S.a,null)),n.createElement(u.a,{primary:"Border"}),n.createElement(m.a,null,n.createElement(E.a,{checked:t.borderVisibility,onChange:function(){return a({type:"TOGGLE_BORDER"})}}))))}},245:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Typescript App Shell",description:"A GatsbyJS starter using Material Design written with TypeScript.",author:{name:"cieloazul310"}}}}}},246:function(e,t,a){"use strict";a.r(t);a(66);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),l=a(102),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},247:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(66);function n(e,t){switch(t.type){case"SET_LAYER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{layer:t.layer})});case"TOGGLE_BORDER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{borderVisibility:!e.mapState.borderVisibility})});default:throw new Error}}},248:function(e,t,a){"use strict";var n=a(245),r=a(0),c=a(223),i=a(100),l=a.n(i),o=a(221),s=a(315),u=a(319),m=a(334),p=a(332),d=a(331),E=a(228),f=a.n(E),h=a(316),g=a(318),b=a(314),v=a(336),y=a(254),w=a.n(y),S=a(98),x=a.n(S),O=a(312),j=a(250);var k=function(e){var t,a=e.icon,n=e.defaultVertical,c=x()(e,["icon","defaultVertical"]),i=a.icon[0],l=i>512?(512-i)/2:0;return r.createElement(O.a,c,r.createElement(j.a,{icon:a,style:{verticalAlign:n?void 0:"0.125em",transform:null!==l?"translateX("+l/(t=c.fontSize,"small"===t?20:"large"===t?36:24)+"px)":void 0}}))};var R=a(251),C=function(e){var t=e.url,a=e.title;return a?"https://twitter.com/intent/tweet?text="+encodeURI(a)+"&url="+encodeURIComponent(t):"https://twitter.com/intent/tweet?url="+encodeURIComponent(t)},D=function(e){var t=e.url;return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t)};var N=function(e){var t=e.className,a=e.title,n=e.location,c=e.fontSize,i=e.color;return r.createElement("div",{className:f()(t)},r.createElement(v.a,{title:"Share on Twitter"},r.createElement(b.a,{color:i||"default",href:C({url:n.href,title:a}),target:"_blank",rel:"noopener noreferrer"},r.createElement(k,{icon:R.c,fontSize:c||"default"}))),r.createElement(v.a,{title:"Share on Facebook"},r.createElement(b.a,{color:i||"default",href:D({url:n.href}),target:"_blank",rel:"noopener noreferrer"},r.createElement(k,{icon:R.a,fontSize:c||"default"}))),r.createElement(v.a,{title:"GitHub"},r.createElement(b.a,{color:i||"default",href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(k,{icon:R.b,fontSize:c||"default"}))))},T=Object(o.a)(function(e){return Object(s.a)({title:{flex:1,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}})});var L=function(e){var t=e.className,a=e.title,n=e.location,c=e.toggleDrawer,i=T({});return r.createElement(h.a,{className:f()(t)},r.createElement(g.a,null,r.createElement(m.a,{xsDown:!0,mdUp:!0,implementation:"css"},r.createElement(v.a,{title:"Menu"},r.createElement(b.a,{color:"inherit",onClick:c},r.createElement(w.a,null)))),r.createElement(u.a,{className:i.title,variant:"h6",component:"h1",color:"inherit"},a),r.createElement(m.a,{smDown:!0,implementation:"css"},r.createElement(N,{color:"inherit",location:n,title:a}))))},M=a(234),q=a(320),G=a(321),P=a(237),A=a.n(P),_=a(238),B=a.n(_),U=a(255),z=a.n(U),V=a(226);a(99);function I(e,t){var a=e.hostname,n=e.pathname;return"localhost"===a?n:n.replace(t,"")}var F=Object(o.a)(function(e){return Object(s.a)({root:{position:"fixed",bottom:0,left:0,width:"100%"}})});var Y=function(e){var t=e.location,a=e.appState;return r.createElement(c.b,{query:"1108187744",render:function(e){var n=e.site,c=F({}),i=n.pathPrefix;return r.createElement(q.a,{className:c.root,value:I(t,i),showLabels:!0,onChange:function(e,t){Object(V.b)(t,a)}},r.createElement(G.a,{label:"Top",value:"/",icon:r.createElement(A.a,null)}),r.createElement(G.a,{label:"page2",value:"/page-2/",icon:r.createElement(B.a,null)}),r.createElement(G.a,{label:"Settings",value:"/settings/",icon:r.createElement(z.a,null)}))},data:M})},H=(a(66),a(330)),J=a(260),Q=a.n(J),W=a(13),X=a.n(W),K=a(325),Z=a(326),$=a(322),ee=a(323),te=a(324),ae=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).renderLink=r.forwardRef(function(e,a){return r.createElement(V.a,Object.assign({to:t.props.to,appState:t.props.appState},e,{innerRef:a}))}),t}return X()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.primary,n=e.selected;return r.createElement($.a,{button:!0,component:this.renderLink,selected:n},t&&r.createElement(ee.a,null,t),r.createElement(te.a,{primary:a}))},t}(r.PureComponent);var ne=function(e){var t=e.location,a=e.appState;return r.createElement(c.b,{query:"1108187744",render:function(e){var n=e.site.pathPrefix,c=I(t,n);return r.createElement(K.a,{subheader:r.createElement(Z.a,null,"Contents")},r.createElement(ae,{to:"/",primary:"Top",appState:a,icon:r.createElement(A.a,null),selected:"/"===c}),r.createElement(ae,{to:"/page-2/",primary:"Page 2",appState:a,icon:r.createElement(B.a,null),selected:"/page-2/"===c}))},data:M})},re=a(239),ce=Object(o.a)(function(e){return Object(s.a)({toolbar:Object.assign({},e.mixins.toolbar,{display:"flex",alignItems:"center",paddingLeft:e.spacing(3)})})});var ie=function(e){var t=e.location,a=e.appState,n=e.handleDrawer,c=e.contents,i=e.dispatch,l=ce({});return r.createElement("div",null,r.createElement("div",{className:l.toolbar},r.createElement(m.a,{mdUp:!0},r.createElement(v.a,{title:"Close"},r.createElement(b.a,{onClick:n},r.createElement(Q.a,null))))),r.createElement(H.a,null),c?c.map(function(e,t,a){return t===a.length-1?e:r.createElement(r.Fragment,null,e,r.createElement(H.a,null))}):null,r.createElement(ne,{location:t,appState:a}),r.createElement(H.a,null),r.createElement(re.a,{mapState:a.mapState,dispatch:i}))},le=Object(o.a)(function(e){var t,a,n;return Object(s.a)({root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("md")]={width:280},t),drawerPaper:{width:280},header:(a={width:"100%"},a[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},a),main:(n={width:"100%",paddingTop:e.mixins.toolbar.minHeight},n[e.breakpoints.down("xs")]={paddingBottom:56},n[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},n["@media (min-width:600px)"]={paddingTop:64},n),content:{width:"100%",maxWidth:800,margin:"auto",padding:e.spacing(4)+"px "+e.spacing(2)+"px","@global":{a:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{color:e.palette.secondary.light,textDecoration:"underline"}}}},footer:{textAlign:"center",padding:e.spacing(4)+"px "+e.spacing(2)+"px"}})});t.a=function(e){var t=e.children,a=e.title,i=e.appState,o=e.location,s=e.drawerContents,E=e.dispatch,f=r.useState(!1),h=f[0],g=f[1],b=function(){g(!h)};return r.createElement(c.b,{query:"827723073",render:function(e){var n=le({});return r.createElement("div",{className:n.root},r.createElement(l.a,{title:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description}]}),r.createElement(L,{className:n.header,title:a||e.site.siteMetadata.title,location:o,toggleDrawer:b}),r.createElement("nav",{className:n.drawer},r.createElement(m.a,{mdUp:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"temporary",onClose:b,open:h},r.createElement(ie,{location:o,appState:i,handleDrawer:b,contents:s,dispatch:E}))),r.createElement(m.a,{smDown:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},r.createElement(ie,{location:o,appState:i,handleDrawer:b,contents:s,dispatch:E})))),r.createElement("div",{className:n.main},r.createElement("main",null,r.createElement("div",{className:n.content},t)),r.createElement("footer",null,r.createElement("div",{className:n.footer},r.createElement(u.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built with"," ",r.createElement(d.a,{color:"secondary",href:"https://www.gatsbyjs.org"},"Gatsby"))))),r.createElement(m.a,{smUp:!0,implementation:"css"},r.createElement(Y,{location:o,appState:i})))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-settings-tsx-c4fd934d716e65f4d861.js.map