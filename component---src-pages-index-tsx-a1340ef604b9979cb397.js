(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(0),r=a(319),l=a(248),o=a(226),i=a(247),c=a(235);t.default=function(e){var t=e.data,a=e.location;console.log(a);var u=n.useReducer(i.a,Object(c.a)(a)),m=u[0],s=u[1];return n.createElement(l.a,{title:"Index Page",location:a,appState:m,dispatch:s},n.createElement(r.a,{variant:"h2",gutterBottom:!0},"Gatsby Starter TypeScript App Shell"),n.createElement(r.a,{variant:"h5",gutterBottom:!0},"Welcome to your new ",n.createElement("strong",null,t.site.siteMetadata.title)," site."),n.createElement(r.a,{variant:"h4",gutterBottom:!0},"Features"),n.createElement(r.a,{variant:"body1"},"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement(r.a,{variant:"body1"},"昔々あるところにお爺さんとお婆さんが平和に暮らしておったとさ。"),n.createElement("p",null,"昔々あるところにお爺さんとお婆さんが平和に暮らしておったとさ。"),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement("p",null,"Now go build something great."),n.createElement(o.a,{to:"/page-2/",appState:m},"Go to page 2"))};var u="3783718424"},223:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(3),o=a.n(l),i=a(64),c=a.n(i);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return i.navigate});a(231);var u=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&l(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||l,staticQueryData:e})})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},226:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return c});a(66);var n=a(0),r=a(223),l=a(228),o=a.n(l);function i(e){var t=e.className,a=e.children,l=e.to,i=e.appState;return n.createElement(r.a,{className:o()(t),to:l,state:{appState:i}},a)}function c(e,t,a){void 0===a&&(a={}),Object(r.c)(e,Object.assign({},a,{state:{appState:t}}))}},231:function(e,t,a){var n;e.exports=(n=a(246))&&n.default||n},234:function(e){e.exports={data:{site:{pathPrefix:"/gatsby-starter-typescript-material-ui"}}}},235:function(e,t,a){"use strict";var n={val:100,mapState:{layer:"cjstd",borderVisibility:!0}},r=function(e){return e.state&&e.state.appState?e.state.appState:n},l=["cjstd","cjpale","slopemap","relief","seemlessphoto"];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l})},239:function(e,t,a){"use strict";var n=a(0),r=a(221),l=a(315),o=a(325),i=a(326),c=a(322),u=a(323),m=a(324),s=a(328),p=a(327),d=a(335),g=a(329),E=a(257),h=a.n(E),b=a(258),f=a.n(b),w=a(256),v=a.n(w),y=a(259),N=a.n(y),S=a(235),x=Object(r.a)(function(e){return Object(l.a)({nested:{paddingLeft:e.spacing(6)}})});t.a=function(e){var t=e.mapState,a=e.dispatch,r=x({}),l=n.useState(!1),E=l[0],b=l[1];return n.createElement(o.a,{subheader:n.createElement(i.a,null,"Map Handler")},n.createElement(c.a,{button:!0,onClick:function(){b(!E)}},n.createElement(u.a,null,n.createElement(v.a,null)),n.createElement(m.a,{primary:"Layers"}),E?n.createElement(h.a,null):n.createElement(f.a,null)),n.createElement(p.a,{in:E,timeout:"auto",unmountOnExit:!0},n.createElement(o.a,{disablePadding:!0},S.b.map(function(e){return n.createElement(c.a,{className:r.nested,key:e,button:!0,onClick:function(){return a({type:"SET_LAYER",layer:e})}},n.createElement(m.a,{primary:e}),n.createElement(s.a,null,n.createElement(d.a,{checked:e===t.layer,onChange:function(){return a({type:"SET_LAYER",layer:e})}})))}))),n.createElement(c.a,{onClick:function(){return a({type:"TOGGLE_BORDER"})}},n.createElement(u.a,null,n.createElement(N.a,null)),n.createElement(m.a,{primary:"Border"}),n.createElement(s.a,null,n.createElement(g.a,{checked:t.borderVisibility,onChange:function(){return a({type:"TOGGLE_BORDER"})}}))))}},245:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Typescript App Shell",description:"A GatsbyJS starter using Material Design written with TypeScript.",author:{name:"cieloazul310"}}}}}},246:function(e,t,a){"use strict";a.r(t);a(66);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),i=a(102),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},247:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(66);function n(e,t){switch(t.type){case"SET_LAYER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{layer:t.layer})});case"TOGGLE_BORDER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{borderVisibility:!e.mapState.borderVisibility})});default:throw new Error}}},248:function(e,t,a){"use strict";var n=a(245),r=a(0),l=a(223),o=a(100),i=a.n(o),c=a(221),u=a(315),m=a(319),s=a(334),p=a(332),d=a(331),g=a(228),E=a.n(g),h=a(316),b=a(318),f=a(314),w=a(336),v=a(254),y=a.n(v),N=a(98),S=a.n(N),x=a(312),O=a(250);var j=function(e){var t,a=e.icon,n=e.defaultVertical,l=S()(e,["icon","defaultVertical"]),o=a.icon[0],i=o>512?(512-o)/2:0;return r.createElement(x.a,l,r.createElement(O.a,{icon:a,style:{verticalAlign:n?void 0:"0.125em",transform:null!==i?"translateX("+i/(t=l.fontSize,"small"===t?20:"large"===t?36:24)+"px)":void 0}}))};var k=a(251),R=function(e){var t=e.url,a=e.title;return a?"https://twitter.com/intent/tweet?text="+encodeURI(a)+"&url="+encodeURIComponent(t):"https://twitter.com/intent/tweet?url="+encodeURIComponent(t)},C=function(e){var t=e.url;return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t)};var D=function(e){var t=e.className,a=e.title,n=e.location,l=e.fontSize,o=e.color;return r.createElement("div",{className:E()(t)},r.createElement(w.a,{title:"Share on Twitter"},r.createElement(f.a,{color:o||"default",href:R({url:n.href,title:a}),target:"_blank",rel:"noopener noreferrer"},r.createElement(j,{icon:k.c,fontSize:l||"default"}))),r.createElement(w.a,{title:"Share on Facebook"},r.createElement(f.a,{color:o||"default",href:C({url:n.href}),target:"_blank",rel:"noopener noreferrer"},r.createElement(j,{icon:k.a,fontSize:l||"default"}))),r.createElement(w.a,{title:"GitHub"},r.createElement(f.a,{color:o||"default",href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(j,{icon:k.b,fontSize:l||"default"}))))},T=Object(c.a)(function(e){return Object(u.a)({title:{flex:1,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}})});var L=function(e){var t=e.className,a=e.title,n=e.location,l=e.toggleDrawer,o=T({});return r.createElement(h.a,{className:E()(t)},r.createElement(b.a,null,r.createElement(s.a,{xsDown:!0,mdUp:!0,implementation:"css"},r.createElement(w.a,{title:"Menu"},r.createElement(f.a,{color:"inherit",onClick:l},r.createElement(y.a,null)))),r.createElement(m.a,{className:o.title,variant:"h6",component:"h1",color:"inherit"},a),r.createElement(s.a,{smDown:!0,implementation:"css"},r.createElement(D,{color:"inherit",location:n,title:a}))))},G=a(234),M=a(320),q=a(321),P=a(237),A=a.n(P),B=a(238),_=a.n(B),U=a(255),z=a.n(U),I=a(226);a(99);function V(e,t){var a=e.hostname,n=e.pathname;return"localhost"===a?n:n.replace(t,"")}var F=Object(c.a)(function(e){return Object(u.a)({root:{position:"fixed",bottom:0,left:0,width:"100%"}})});var Q=function(e){var t=e.location,a=e.appState;return r.createElement(l.b,{query:"1108187744",render:function(e){var n=e.site,l=F({}),o=n.pathPrefix;return r.createElement(M.a,{className:l.root,value:V(t,o),showLabels:!0,onChange:function(e,t){Object(I.b)(t,a)}},r.createElement(q.a,{label:"Top",value:"/",icon:r.createElement(A.a,null)}),r.createElement(q.a,{label:"page2",value:"/page-2/",icon:r.createElement(_.a,null)}),r.createElement(q.a,{label:"Settings",value:"/settings/",icon:r.createElement(z.a,null)}))},data:G})},Y=(a(66),a(330)),H=a(260),J=a.n(H),W=a(13),X=a.n(W),K=a(325),Z=a(326),$=a(322),ee=a(323),te=a(324),ae=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).renderLink=r.forwardRef(function(e,a){return r.createElement(I.a,Object.assign({to:t.props.to,appState:t.props.appState},e,{innerRef:a}))}),t}return X()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.primary,n=e.selected;return r.createElement($.a,{button:!0,component:this.renderLink,selected:n},t&&r.createElement(ee.a,null,t),r.createElement(te.a,{primary:a}))},t}(r.PureComponent);var ne=function(e){var t=e.location,a=e.appState;return r.createElement(l.b,{query:"1108187744",render:function(e){var n=e.site.pathPrefix,l=V(t,n);return r.createElement(K.a,{subheader:r.createElement(Z.a,null,"Contents")},r.createElement(ae,{to:"/",primary:"Top",appState:a,icon:r.createElement(A.a,null),selected:"/"===l}),r.createElement(ae,{to:"/page-2/",primary:"Page 2",appState:a,icon:r.createElement(_.a,null),selected:"/page-2/"===l}))},data:G})},re=a(239),le=Object(c.a)(function(e){return Object(u.a)({toolbar:Object.assign({},e.mixins.toolbar,{display:"flex",alignItems:"center",paddingLeft:e.spacing(3)})})});var oe=function(e){var t=e.location,a=e.appState,n=e.handleDrawer,l=e.contents,o=e.dispatch,i=le({});return r.createElement("div",null,r.createElement("div",{className:i.toolbar},r.createElement(s.a,{mdUp:!0},r.createElement(w.a,{title:"Close"},r.createElement(f.a,{onClick:n},r.createElement(J.a,null))))),r.createElement(Y.a,null),l?l.map(function(e,t,a){return t===a.length-1?e:r.createElement(r.Fragment,null,e,r.createElement(Y.a,null))}):null,r.createElement(ne,{location:t,appState:a}),r.createElement(Y.a,null),r.createElement(re.a,{mapState:a.mapState,dispatch:o}))},ie=Object(c.a)(function(e){var t,a,n;return Object(u.a)({root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("md")]={width:280},t),drawerPaper:{width:280},header:(a={width:"100%"},a[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},a),main:(n={width:"100%",paddingTop:e.mixins.toolbar.minHeight},n[e.breakpoints.down("xs")]={paddingBottom:56},n[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},n["@media (min-width:600px)"]={paddingTop:64},n),content:{width:"100%",maxWidth:800,margin:"auto",padding:e.spacing(4)+"px "+e.spacing(2)+"px","@global":{a:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{color:e.palette.secondary.light,textDecoration:"underline"}}}},footer:{textAlign:"center",padding:e.spacing(4)+"px "+e.spacing(2)+"px"}})});t.a=function(e){var t=e.children,a=e.title,o=e.appState,c=e.location,u=e.drawerContents,g=e.dispatch,E=r.useState(!1),h=E[0],b=E[1],f=function(){b(!h)};return r.createElement(l.b,{query:"827723073",render:function(e){var n=ie({});return r.createElement("div",{className:n.root},r.createElement(i.a,{title:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description}]}),r.createElement(L,{className:n.header,title:a||e.site.siteMetadata.title,location:c,toggleDrawer:f}),r.createElement("nav",{className:n.drawer},r.createElement(s.a,{mdUp:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"temporary",onClose:f,open:h},r.createElement(oe,{location:c,appState:o,handleDrawer:f,contents:u,dispatch:g}))),r.createElement(s.a,{smDown:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},r.createElement(oe,{location:c,appState:o,handleDrawer:f,contents:u,dispatch:g})))),r.createElement("div",{className:n.main},r.createElement("main",null,r.createElement("div",{className:n.content},t)),r.createElement("footer",null,r.createElement("div",{className:n.footer},r.createElement(m.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built with"," ",r.createElement(d.a,{color:"secondary",href:"https://www.gatsbyjs.org"},"Gatsby"))))),r.createElement(s.a,{smUp:!0,implementation:"css"},r.createElement(Q,{location:c,appState:o})))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a1340ef604b9979cb397.js.map