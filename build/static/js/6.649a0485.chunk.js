(this.webpackJsonprdlmovies=this.webpackJsonprdlmovies||[]).push([[6],{922:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return f})),a.d(t,"e",(function(){return E}));var n=a(919),r=a.n(n),c=a(920),o="https://tarea-1-breaking-bad.herokuapp.com/api";a(56),a(69);function s(e){if(429!=e.status)return!0;alert("Se ha excedido el numero maximo de consultas, intente nuevamente mas tarde"),window.location.replace("/home")}function l(e,t){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hola"),e.next=3,fetch("".concat(o,"/episodes?series=").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,console.log(c),!s(n)){e.next=10;break}return e.abrupt("return",{response:n,res:c});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hola"),e.next=3,fetch("".concat(o,"/episodes/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,console.log(n),!s(a)){e.next=10;break}return e.abrupt("return",{response:a,res:n});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hola"),e.next=3,fetch("".concat(o,"/characters?name=").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,console.log(n),!s(a)){e.next=10;break}return e.abrupt("return",{response:a,res:n});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,fetch("".concat(o,"/characters?offset=").concat(a,"&name=").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:if(c=e.sent,console.log(c),!s(n)){e.next=10;break}return e.abrupt("return",{response:n,res:c});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hola"),e.next=3,fetch("".concat(o,"/quote?author=").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,console.log(n),!s(a)){e.next=10;break}return e.abrupt("return",{response:a,res:n});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},924:function(e,t,a){"use strict";var n=a(1),r=a(3),c=a(0),o=(a(4),a(2)),s=a(5),l=a(921),i={variant:"head"},u=c.forwardRef((function(e,t){var a=e.classes,s=e.className,u=e.component,p=void 0===u?"thead":u,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:i},c.createElement(p,Object(n.a)({className:Object(o.a)(a.root,s),ref:t,role:"thead"===p?null:"rowgroup"},m)))}));t.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},933:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var n=a(919),r=a.n(n),c=a(920),o=a(20),s=a(8),l=a(0),i=a.n(l),u=a(859),p=a(237),m=a(2),d=a(902),f=a(61),h=a(890),E=(Object(u.a)((function(){return{root:{}}})),a(26)),b=a(122),g=a.n(b),j=a(883),v=a(897),y=a(887),x=a(884),O=a(926),N=a(924),w=a(927),k=a(928),T=a(929),C=a(889),P=(a(238),Object(u.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}}))),A=function(e){var t=e.className,a=e.episodes,n=e.title,r=Object(s.a)(e,["className","episodes","title"]),c=P();return i.a.createElement("div",Object.assign({},r,{className:Object(m.a)(c.root,t)}),i.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"}),i.a.createElement(j.a,null,i.a.createElement(v.a,{title:n}),i.a.createElement(y.a,null),i.a.createElement(x.a,{className:c.content},i.a.createElement(g.a,null,i.a.createElement("div",{className:c.inner},i.a.createElement(O.a,null,i.a.createElement(N.a,null,i.a.createElement(w.a,null,i.a.createElement(k.a,{align:"center"},"Episodios"))),i.a.createElement(T.a,null,console.log(a),a.map((function(e){return i.a.createElement(w.a,{hover:!0,key:e.episode_id},i.a.createElement(k.a,null,i.a.createElement("div",{className:c.nameCell},i.a.createElement("div",null,i.a.createElement(C.a,{color:"inherit",component:E.a,to:"/RDLMovies/episodes/"+e.episode_id+"/",variant:"h6"},"E"+e.episode+" "+e.title)))))})))))))))};A.defaultProps={episodes:[]};a(69);var G=Object(u.a)((function(e){return{root:{},content:{padding:0},actions:{flexDirection:"column",alignItems:"flex-start","& > * + *":{marginLeft:0}},buttonIcon:{marginRight:e.spacing(1)}}})),R=function(e){var t=e.className,a=e.episode,n=Object(s.a)(e,["className","episode"]),r=G();return i.a.createElement(j.a,Object.assign({},n,{className:Object(m.a)(r.root,t)}),i.a.createElement(v.a,{title:"Informaci\xf3n Del Episodio"}),i.a.createElement(y.a,null),i.a.createElement(x.a,{className:r.content},i.a.createElement(O.a,null,i.a.createElement(T.a,null,i.a.createElement(w.a,null,i.a.createElement(k.a,null," ",i.a.createElement(f.a,{style:{fontWeight:"bold"}}," ","Nombre")," "),i.a.createElement(k.a,null,i.a.createElement("div",null,a.title))),i.a.createElement(w.a,{selected:!0},i.a.createElement(k.a,null," ",i.a.createElement(f.a,{style:{fontWeight:"bold"}}," ","Numero")," "),i.a.createElement(k.a,null,i.a.createElement("div",null,a.episode))),i.a.createElement(w.a,null,i.a.createElement(k.a,null,i.a.createElement(f.a,{style:{fontWeight:"bold"}}," ","Temporada")),i.a.createElement(k.a,null,a.season)),i.a.createElement(w.a,{selected:!0},i.a.createElement(k.a,null,i.a.createElement(f.a,{style:{fontWeight:"bold"}}," ","Fecha Estreno")),i.a.createElement(k.a,null,a.air_date))))))},W=a(6),B=a(847),D=a(848),I=a(892),S=Object(u.a)((function(){return{root:{},header:{paddingBottom:0},content:{paddingTop:0},actions:{backgroundColor:W.a.grey[50]},manageButton:{width:"100%"}}})),L=function(e){var t=e.actors,a=e.className,n=Object(s.a)(e,["actors","className"]),r=S();return i.a.createElement(j.a,Object.assign({},n,{className:Object(m.a)(r.root,a)}),i.a.createElement(v.a,{className:r.header,title:"Personajes",titleTypographyProps:{variant:"overline"}}),i.a.createElement(x.a,{className:r.content},i.a.createElement(B.a,null,t.map((function(e){return i.a.createElement(D.a,{disableGutters:!0},i.a.createElement(C.a,{color:"inherit",component:E.a,to:"/RDLMovies/personaje/"+e.replace(" ","+")+"/",variant:"h6"},i.a.createElement(I.a,{primary:e,primaryTypographyProps:{variant:"h6"}})))})))))},M=a(922),_=Object(u.a)((function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)},members:{marginTop:e.spacing(3)}}})),J=function(e){var t=e.match,a=(e.history,e.className),n=Object(s.a)(e,["match","history","className"]),u=_(),f=t.params.id,E=Object(l.useState)(!1),b=Object(o.a)(E,2),g=b[0],j=b[1],v=Object(l.useState)(),y=Object(o.a)(v,2),x=y[0],O=y[1];function N(){return(N=Object(c.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Buscando Episodio"),e.next=3,Promise.all([Object(M.a)(f)]);case 3:return t=e.sent,a=Object(o.a)(t,1),n=a[0],O(n.res),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.useEffect((function(){g||function(){N.apply(this,arguments)}(),j(!0)}),[]);return i.a.createElement(p.b,{className:u.root,title:"Prueba"},i.a.createElement(h.a,{color:"primary",variant:"contained",onClick:function(){window.history.back()}},"Volver Atr\xe1s"),i.a.createElement(d.a,Object.assign({},n,{className:Object(m.a)(u.root,a),container:!0,spacing:3}),i.a.createElement(d.a,{item:!0,lg:8,xl:9,xs:12},x&&i.a.createElement(R,{className:u.results,episode:x[0]})),i.a.createElement(d.a,{item:!0,lg:4,xl:3,xs:12},x&&i.a.createElement(L,{className:u.members,actors:x[0].characters}))))}}}]);
//# sourceMappingURL=6.649a0485.chunk.js.map