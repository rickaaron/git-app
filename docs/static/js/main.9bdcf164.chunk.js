(this["webpackJsonpgit-app"]=this["webpackJsonpgit-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(7),a=n.n(i),s=n(2),u=n(9),j=n(0),o=function(t){var e=t.setCategorie,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],a=r[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:i}),Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[i].concat(Object(u.a)(t))})),a("")},children:Object(j.jsx)("input",{type:"text",value:i,onChange:function(t){return a(t.target.value)}})})]})},d=n(10),l=n(6),b=n.n(l),O=n(8),f=function(){var t=Object(O.a)(b.a.mark((function t(e){var n,c,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=m9s9rFuxzAPaizgjKinNt9lEEcCD3O8O&q=".concat(e,"&limit=25&offset=0&rating=g&lang=en"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,i=r.data,t.abrupt("return",i.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){t.id;var e=t.title,n=t.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:n,alt:e}),Object(j.jsx)("h3",{children:e})]})},p=function(t){var e=t.title,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){setTimeout((function(){i({data:t,loading:!1})}),1e3)}))}),[]),r}(e),r=n.data,i=n.loading;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{children:[" ",e," "]}),i?"Cargado...":"",Object(j.jsx)("div",{className:"container",children:r.map((function(t){return Object(j.jsx)(h,Object(d.a)({},t),t.id)}))})]})},x=function(){var t=Object(c.useState)(["One punsh man"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"GIF Expert APP"}),Object(j.jsx)("hr",{}),Object(j.jsx)(o,{setCategorie:r}),Object(j.jsx)("div",{children:n.map((function(t){return Object(j.jsx)(p,{title:t},t)}))})]})};n(17);a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9bdcf164.chunk.js.map