"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[244],{8242:function(n,e,t){t.d(e,{e:function(){return v}});var i,r,o,s,a,c=t(2606),l=t(7689),u=t(168),h=t(6088),f=t(1087),d=h.Z.div(i||(i=(0,u.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    & img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n"]))),m=(0,h.Z)(f.rU)(r||(r=(0,u.Z)(["\n    display: block;\n    flex-grow: 1;\n"]))),p=h.Z.div(o||(o=(0,u.Z)(["\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 20px;\n    padding: 20px;\n    background-color: #000000e8;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n        opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    ","\n"])),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"transform: translateY(0); opacity: 1;":"transform: translateY(100%); opacity: 0;"),g=h.Z.h2(s||(s=(0,u.Z)(["\n    line-height: 1.5;\n    text-align: center;\n    color: ",";\n    font-size: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.medium})),x=h.Z.p(a||(a=(0,u.Z)(["\n    padding: 4px 10px;\n    background-color: ",";\n    border-radius: 12px;\n    color: ",";\n    font-size: ",";\n    font-weight: 700;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.small})),b=t(4757),j=t(184),v=function(n){var e=n.movies,t=(0,l.TH)(),i=function(n){return n.map((function(n){var e=n.id,t=n.title,i=n.original_title,r=n.name,o=n.original_name,s=n.poster_path;return{id:e,movie_title:r||t||o||i,poster:s?"https://image.tmdb.org/t/p/w500/"+s:b}}))}(e);return(0,j.jsx)(c.rj,{children:i.map((function(n){var e=n.id,i=n.movie_title,r=n.poster;return(0,j.jsx)(c.P4,{children:(0,j.jsx)(m,{to:"/movies/".concat(e),state:{from:t},children:(0,j.jsxs)(d,{children:[(0,j.jsx)("img",{src:r,alt:i}),(0,j.jsxs)(p,{className:"js-overlay",children:[(0,j.jsx)(g,{children:i}),(0,j.jsx)(x,{children:"\u0421lick for details"})]})]})})},e)}))})}},5244:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var i,r,o,s=t(9439),a=t(2606),c=t(1454),l=t(8242),u=t(2913),h=t(2791),f=t(168),d=t(6088),m=d.Z.form(i||(i=(0,f.Z)(["\n    max-width: 320px;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    margin-bottom: 20px;\n"]))),p=d.Z.input(r||(r=(0,f.Z)(["\n    width: 100%;\n    height: 50px;\n    padding-left: 10px;\n    padding-right: 50px;\n    background-color: transparent;\n    outline: none;\n    color: ",";\n    border-top-style: none;\n    border-left-style: none;\n    border-right-style: none;\n    border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.light})),g=d.Z.button(o||(o=(0,f.Z)(["\n    width: 50px;\n    height: 50px;\n\n    font-size: 20px;\n    font-weight: bold;\n    color: #fff;\n\n    position: absolute;\n    top: 0;\n    right: 0;\n"]))),x=t(3313),b=t(8174),j=(t(5462),t(184)),v=function(n){var e=n.onSubmit,t=(0,h.useState)(""),i=(0,s.Z)(t,2),r=i[0],o=i[1];return(0,j.jsxs)(m,{onSubmit:function(n){n.preventDefault(),r?(e(r),o(""),n.target.reset()):(0,b.Am)("Please enter your query")},children:[(0,j.jsx)(p,{placeholder:"Please enter your query",onInput:function(n){o(n.target.value)}}),(0,j.jsx)(g,{children:(0,j.jsx)(x.jRj,{size:"25px",stroke:"rgba(255,255,255,.5)"})}),(0,j.jsx)(b.Ix,{})]})},Z=t(1087),w=t(4390),y=function(){var n=(0,h.useState)([]),e=(0,s.Z)(n,2),t=e[0],i=e[1],r=(0,h.useState)(!0),o=(0,s.Z)(r,2),f=o[0],d=o[1],m=(0,h.useState)(null),p=(0,s.Z)(m,2),g=p[0],x=p[1],y=(0,h.useState)(!1),_=(0,s.Z)(y,2),k=_[0],S=_[1],z=(0,Z.lr)(),P=(0,s.Z)(z,2),q=P[0],A=P[1];(0,h.useEffect)((function(){var n=q.get("query");n&&(S(!0),(0,w.uG)(n,1).then((function(n){i(n.results)})).catch((function(n){x(n.message),(0,b.Am)(n.message)})).finally((function(){S(!1),d(!1)})))}),[q]);return(0,j.jsx)("section",{children:(0,j.jsxs)(a.W2,{children:[k&&(0,j.jsx)(c.a,{}),(0,j.jsx)(v,{onSubmit:function(n){A({query:n,page:1})}}),t&&(0,j.jsx)(l.e,{movies:t}),!f&&t.length<1&&(0,j.jsx)(u.l,{}),g&&(0,j.jsx)(b.Ix,{})]})})}}}]);
//# sourceMappingURL=244.e81c8366.chunk.js.map