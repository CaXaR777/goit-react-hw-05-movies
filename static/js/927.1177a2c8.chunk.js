"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[927],{308:function(e,n,r){r.d(n,{Hx:function(){return l},Me:function(){return d},Y5:function(){return f},ZS:function(){return p},vw:function(){return o}});var t=r(861),a=r(757),u=r.n(a),c=r(243),i=r(7),s=r.n(i);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"26a67413674973264e8a8b350ec08dc8"};var o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={query:n},e.next=3,c.Z.get("/search/movie",{params:r});case 3:return t=e.sent,a=t.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day");case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();o.propTypes={query:s().string.isRequired},p.propTypes={data:s().object.isRequired},f.propTypes={movieId:s().number.isRequired},d.propTypes={movieId:s().number.isRequired},l.propTypes={movieId:s().number.isRequired}},927:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t,a,u,c,i=r(861),s=r(439),o=r(757),p=r.n(o),f=r(791),d=r(689),l=r(87),v=r(308),m=r(168),x=r(444),h=x.ZP.div(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0 20px;\n"]))),Z=x.ZP.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0 20px;\n"]))),w=x.ZP.li(u||(u=(0,m.Z)(["\n  margin: 10px 0;\n  font-weight: bold;\n"]))),y=x.ZP.h2(c||(c=(0,m.Z)(["\n  text-decoration: none;\n  color: #0000ff;\n\n  &:hover,\n  &:focus {\n    text-decoration: underline;\n  }\n"]))),b=r(184),g=function(){var e=(0,f.useState)([]),n=(0,s.Z)(e,2),r=n[0],t=n[1],a=(0,d.TH)();return(0,f.useEffect)((function(){var e=function(){var e=(0,i.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.ZS)();case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(a),(0,b.jsxs)(h,{children:[(0,b.jsx)(y,{children:"Popular Movies Today"}),(0,b.jsx)(Z,{children:r.map((function(e){return(0,b.jsx)(w,{children:(0,b.jsx)(l.rU,{to:"/movies/".concat(e.id),state:{from:a},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=927.1177a2c8.chunk.js.map