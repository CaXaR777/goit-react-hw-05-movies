"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[732],{308:function(n,e,r){r.d(e,{Hx:function(){return d},Me:function(){return p},Y5:function(){return u},ZS:function(){return o},vw:function(){return c}});var t=r(861),a=r(757),i=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"26a67413674973264e8a8b350ec08dc8"};var c=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:e},n.next=3,s.Z.get("/search/movie",{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/day");case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},732:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t,a,i,s,c,o,u,p,d,l,f,x=r(861),h=r(439),v=r(757),m=r.n(v),Z=r(791),g=r(689),j=r(87),w=r(308),b=r(168),k=r(444),y=k.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 60px;\n  border: 2px solid #c8c8c8;\n  padding: 20px;\n  border-radius: 10px;\n"]))),P=k.ZP.div(a||(a=(0,b.Z)(["\n  flex: 1 0 20px;\n  margin-right: 20px;\n"]))),_=k.ZP.img(i||(i=(0,b.Z)(["\n  max-width: 200px;\n  height: auto;\n"]))),R=k.ZP.div(s||(s=(0,b.Z)(["\n  flex: 2 1 750px;\n  margin-left: 20px;\n"]))),L=k.ZP.h1(c||(c=(0,b.Z)(["\n  margin-top: 0;\n"]))),O=k.ZP.p(o||(o=(0,b.Z)(["\n  margin-bottom: 10px;\n"]))),C=k.ZP.div(u||(u=(0,b.Z)(["\n  position: absolute;\n  top: 60px;\n  left: 20px;\n  font-weight: bold;\n"]))),U=k.ZP.div(p||(p=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n  border-top: 2px solid #c8c8c8;\n  padding-top: 0;\n"]))),G=k.ZP.div(d||(d=(0,b.Z)(["\n  margin-right: 20px;\n"]))),H=k.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n"]))),M=k.ZP.h4(f||(f=(0,b.Z)(["\n  margin-left: 20px;\n"]))),S=r(184),V=function(){var n,e=(0,g.UO)().movieId,r=(0,Z.useState)(null),t=(0,h.Z)(r,2),a=t[0],i=t[1],s=(0,g.TH)(),c=(0,Z.useRef)((null===(n=s.state)||void 0===n?void 0:n.from)||"/");if((0,Z.useEffect)((function(){var n=function(){var n=(0,x.Z)(m().mark((function n(){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,w.Y5)(e);case 3:r=n.sent,i(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),!a)return(0,S.jsx)("div",{children:"Loading..."});var o=a.poster_path,u=a.title,p=a.overview,d=a.release_date,l=a.vote_average,f=a.genres,v=a.runtime,b=f.map((function(n){return n.name})).join(" "),k=Math.floor(v/60),V=v%60,Y="".concat(k,"h ").concat(V,"m"),q="https://image.tmdb.org/t/p/w500".concat(o);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(y,{children:[(0,S.jsx)(P,{children:(0,S.jsx)(_,{src:q,alt:u})}),(0,S.jsxs)(R,{children:[(0,S.jsx)(L,{children:u}),(0,S.jsxs)(O,{children:[(0,S.jsx)("strong",{children:"Genre:"})," ",b]}),(0,S.jsxs)(O,{children:[(0,S.jsx)("strong",{children:"Release date:"})," ",d]}),(0,S.jsxs)(O,{children:[(0,S.jsx)("strong",{children:"Rating:"})," ",l," / 10"]}),(0,S.jsxs)(O,{children:[(0,S.jsx)("strong",{children:"Runtime:"})," ",Y]}),(0,S.jsxs)(O,{children:[(0,S.jsx)("strong",{children:"Overview:"})," ",p]}),(0,S.jsx)(C,{children:(0,S.jsx)(j.rU,{to:c.current,children:"Go back"})})]})]}),(0,S.jsxs)(U,{children:[(0,S.jsx)(M,{children:"Additional information"}),(0,S.jsxs)(H,{children:[(0,S.jsx)(G,{children:(0,S.jsx)(j.OL,{to:"/movies/".concat(e,"/cast"),children:"View Cast"})}),(0,S.jsx)("div",{children:(0,S.jsx)(j.OL,{to:"/movies/".concat(e,"/reviews"),children:"View Reviews"})})]}),(0,S.jsx)(g.j3,{})]})]})}}}]);
//# sourceMappingURL=732.fef52ed1.chunk.js.map