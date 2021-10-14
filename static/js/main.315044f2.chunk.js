(this["webpackJsonpcitybikes-test"]=this["webpackJsonpcitybikes-test"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(7),s=n.n(a),i=(n(18),n.p+"static/media/bikes-logo.c28e18a6.svg"),r=(n(19),n(1));var o=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsxs)("div",{className:"header__container",children:[Object(r.jsx)("h1",{className:"header__title header__title-shadow",children:"CityBikes"}),Object(r.jsx)("img",{alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f spacex",className:"header__logo",src:i})]})})},j=(n(21),n(3)),u=n.n(j),l=n(5),b=n(4),d=(n(23),n(2)),O="SET_NETWORK",f=function(t){return{type:O,payload:t}},h=function(t){return function(){var e=Object(l.a)(u.a.mark((function e(n){var c,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.citybik.es/v2/networks/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,s=a.network,n(f(s)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},x=function(t){var e=t.location,n=t.index,a=t.stationId,s=Object(d.b)(),i=e.city,o=e.country,j=0===n,u=Object(c.useState)(!1),l=Object(b.a)(u,2),O=l[0],x=l[1];Object(c.useEffect)((function(){j&&s(h(a))}),[]);var v=function(t){t.stopPropagation(),x(!O)};return Object(r.jsx)("li",{className:"cities-list__item",tabIndex:0,onClick:function(t){t.stopPropagation(),O&&(s(f({company:[],stations:[]})),s(h(a)))},onFocus:v,onBlur:v,children:"".concat(i,": ").concat(o)})},v=(n(28),function(){return Object(r.jsx)("div",{className:"preloader",children:Object(r.jsx)("div",{className:"preloader__container",children:Object(r.jsx)("span",{className:"preloader__round"})})})});n(29);var p=function(){var t=Object(d.c)((function(t){return t.network})),e=t.company,n=t.location;return Object(r.jsx)(r.Fragment,{children:0!==e.length?Object(r.jsx)("h2",{className:"cities-title",children:"".concat(e.toString()," - ").concat(null===n||void 0===n?void 0:n.city," - ").concat(null===n||void 0===n?void 0:n.country)}):Object(r.jsx)(v,{})})},m=function(){var t=Object(c.useState)([]),e=Object(b.a)(t,2),n=e[0],a=e[1],s=function(){var t=Object(l.a)(u.a.mark((function t(){var e,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.citybik.es/v2/networks?fields=id,company,location");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,c=n.networks,a(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(r.jsxs)("div",{className:"cities",children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"cities-list__container",children:Object(r.jsx)("ul",{className:"cities-list",children:0!==n.length?n.map((function(t,e){return Object(r.jsx)(x,{location:t.location,index:e,stationId:t.id},e)})):Object(r.jsx)(v,{})})})]})};n(30),n(31);var _=function(t){var e=t.station,n=Object(c.useState)(!1),a=Object(b.a)(n,2),s=a[0],i=a[1],o="".concat(s?"station__favorite-btn station__favorite-btn_active":"station__favorite-btn");return Object(r.jsxs)("li",{className:"station__item",children:[e,Object(r.jsx)("div",{className:o,onClick:function(){i(!s)},children:Object(r.jsx)("svg",{viewBox:"0 0 18 18",children:Object(r.jsx)("path",{d:"M6.555,12.558c-0.098,0-0.195-0.034-0.273-0.103c-0.233-0.2-5.718-4.954-6.199-7.885 C-0.133,3.243,0.071,2.201,0.69,1.474C1.22,0.85,2.034,0.507,2.982,0.507c0.082,0,0.165,0.002,0.247,0.008 c0.058-0.003,0.115-0.004,0.172-0.004c1.048,0,2.343,0.461,3.109,2.421c0.43-1.196,1.311-2.417,3.328-2.417 c1.135,0,2.023,0.342,2.571,0.987c0.597,0.701,0.787,1.733,0.569,3.068c-0.479,2.929-5.918,7.684-6.149,7.884 C6.751,12.524,6.653,12.558,6.555,12.558z"})})})]})};n(32);var y=function(){var t=Object(d.c)((function(t){return t.network})),e=t.company,n=t.stations;return Object(r.jsx)(r.Fragment,{children:0!==e.length?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h2",{className:"stations-title",children:"Number of stations - ".concat(n.length)})}):Object(r.jsx)(v,{})})};var N=function(){var t=Object(d.c)((function(t){return t.network})),e=t.stations,n=t.company;return Object(r.jsxs)("div",{className:"station",children:[Object(r.jsx)(y,{}),Object(r.jsx)("div",{className:"station-list__container",children:0!==n.length?Object(r.jsx)("ul",{className:"station-list",children:0!==e.length&&e.map((function(t,e){return Object(r.jsx)(_,{station:t.name},e)}))}):Object(r.jsx)(v,{})})]})};var g=function(){return Object(r.jsxs)("section",{className:"main",children:[Object(r.jsx)(m,{}),Object(r.jsx)(N,{})]})},k=function(){return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(o,{}),Object(r.jsx)(g,{})]})},w=n(12),C=n(13),E=n.n(C),S=n(6),B=n(11),F={company:[],location:{city:"",country:""},stations:[]},I=Object(S.b)({network:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0,n=e.type,c=e.payload;switch(n){case O:return Object(B.a)(Object(B.a)({},t),c);default:return t}}}),J=(n(34),n(35),Object(S.c)(I,Object(S.a)(w.a,E.a)));s.a.render(Object(r.jsx)(d.a,{store:J,children:Object(r.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.315044f2.chunk.js.map