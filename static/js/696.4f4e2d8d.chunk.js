"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[696],{308:function(n,e,t){t.d(e,{Hx:function(){return p},Me:function(){return f},Y5:function(){return o},ZS:function(){return s},vw:function(){return i}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"26a67413674973264e8a8b350ec08dc8"};var i=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={query:e},n.next=3,c.Z.get("/search/movie",{params:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},696:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,u,c,i,s,o=t(861),f=t(439),p=t(757),l=t.n(p),d=t(791),v=t(87),x=t(689),h=t(308),m=t(168),Z=t(444),w=Z.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0 20px;\n"]))),g=Z.ZP.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0 20px;\n"]))),b=Z.ZP.li(u||(u=(0,m.Z)(["\n  margin: 10px 0;\n  font-weight: bold;\n"]))),y=Z.ZP.h2(c||(c=(0,m.Z)(["\n  text-decoration: none;\n  color: #0000ff;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),k=Z.ZP.label(i||(i=(0,m.Z)(["\n  padding: 8px 16px;\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 0 4px 4px 0;\n  border: none;\n"]))),j=Z.ZP.button(s||(s=(0,m.Z)(["\n  margin-left: 10px;\n"]))),P=t(184),S=function(){var n=(0,d.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],a=(0,d.useState)([]),u=(0,f.Z)(a,2),c=u[0],i=u[1],s=(0,v.lr)(),p=(0,f.Z)(s,2),m=p[0],Z=p[1],S=(0,x.TH)();(0,d.useEffect)((function(){var n=function(){var n=(0,o.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.vw)(m.get("textQuery"));case 3:e=n.sent,i(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[m]);var _=function(){var n=(0,o.Z)(l().mark((function n(e){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),t?(Z({textQuery:t}),r("")):(i([]),Z({}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,P.jsxs)(w,{children:[(0,P.jsx)(y,{children:"Movies"}),(0,P.jsxs)("form",{onSubmit:_,children:[(0,P.jsx)(k,{htmlFor:"search",children:"Search for movies:"}),(0,P.jsx)("input",{type:"text",id:"search",value:t,onChange:function(n){r(n.target.value)}}),(0,P.jsx)(j,{type:"submit",children:"Search"})]}),(0,P.jsx)(g,{children:c.map((function(n){return(0,P.jsx)(b,{children:(0,P.jsx)(v.rU,{to:"/movies/".concat(n.id),state:{from:S},children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=696.4f4e2d8d.chunk.js.map