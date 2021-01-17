(this["webpackJsonpmovie-award"]=this["webpackJsonpmovie-award"]||[]).push([[0],{35:function(n,t,e){},36:function(n,t,e){},44:function(n,t,e){},45:function(n,t,e){},46:function(n,t,e){},47:function(n,t,e){},48:function(n,t,e){"use strict";e.r(t);var i=e(1),a=e(0),c=e.n(a),r=e(25),o=e.n(r),s=(e(35),e(8)),l=e(2),m=(e(36),function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)(s.c,{to:"/",className:"L",children:"The Shoppies"})}),Object(i.jsxs)("div",{className:"NavItems",children:[Object(i.jsx)(s.c,{to:"/nominations",className:"nomList",children:"Nomination List"}),Object(i.jsx)(s.c,{to:"/browse",className:"btn",children:" Browse Movies"})]})]})}),j=e(9),b=e(10),u=e.p+"static/media/Cinema.1b2ec185.jpg";function d(){var n=Object(j.a)(["\n    color: #fff;\n    padding:5rem;\n    background-filter: blur(5px);\n    background-color: rgba(0,0,0,0.8);\n    margin:10rem;\n    border-radius: 10px;\n    \n\n    h1 {\n        font-size: clamp(2rem, 8vw, 5rem);\n        margin-bottom: 2rem;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 300;\n        text-transform: uppercase;\n    }\n\n    p {\n        font-size: clamp(1rem, 6vw, 2.5rem);\n        margin-bottom:1rem;\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 50;\n        text-transform: uppercase;\n    }\n\n    button{\n        font-size: clamp(0.8rem, 4vw, 1.2rem);\n        margin-bottom: 0.8rem 2rem;\n        color: #fff;\n        background: rgb(250,99,99);\n        border:none;\n        border-radius:4px;\n        cursor:pointer;\n        outline: none;\n        margin-top: 0.2rem;\n        margin-left: 14rem;\n        margin-right: 12rem;\n    }\n"]);return d=function(){return n},n}function O(){var n=Object(j.a)(["\n    background: url(",") top;\n    background-filter: blur(20px);\n    background-opacity: 0.5;\n    height: 100vh;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin-top: -60px;\n"]);return O=function(){return n},n}var f=b.a.section(O(),u),h=b.a.div(d());var x=function(){var n=Object(l.f)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(f,{children:Object(i.jsxs)(h,{children:[Object(i.jsx)("h1",{children:" The Shoppies"}),Object(i.jsx)("button",{onClick:function(){return n.push("/browse")},children:"Start Nominating"})]})})})},p=e(23),g=e.n(p),v=e(29),N=e(16),L=(e(44),e(17)),y=e(7),I=function(n,t){switch(t.type){case"REMOVE_MOVIE_FROM_NOMINATIONLIST":return Object(y.a)(Object(y.a)({},n),{},{nominationList:n.nominationList.filter((function(n){return n.imdbID!==t.payload.imdbID}))});case"ADD_MOVIE_TO_NOMINATIONLIST":return n.nominationList&&0!==n.nominationList.length?n.nominationList.find((function(n){return n.imdbID===t.payload.imdbID}))?(alert("cant nominate more than once!"),Object(y.a)(Object(y.a)({},n),{},{nominationList:Object(L.a)(n.nominationList)})):n.nominationList.length>4?(alert("You can only nominate 5 movies!"),Object(y.a)(Object(y.a)({},n),{},{nominationList:Object(L.a)(n.nominationList)})):Object(y.a)(Object(y.a)({},n),{},{nominationList:[t.payload].concat(Object(L.a)(n.nominationList))}):Object(y.a)(Object(y.a)({},n),{},{nominationList:[t.payload].concat(Object(L.a)(n.nominationList))});default:return n}},w={nominationList:localStorage.getItem("nominationList")?JSON.parse(localStorage.getItem("nominationList")):[]},k=Object(a.createContext)(w),M=function(n){var t=Object(a.useReducer)(I,w),e=Object(N.a)(t,2),c=e[0],r=e[1];Object(a.useEffect)((function(){localStorage.setItem("nominationList",JSON.stringify(c.nominationList))}),[c]);return Object(i.jsx)(k.Provider,{value:{nominationList:c.nominationList,addMovieToNominationList:function(n){r({type:"ADD_MOVIE_TO_NOMINATIONLIST",payload:n})},removeMovieFromNominationList:function(n){r({type:"REMOVE_MOVIE_FROM_NOMINATIONLIST",payload:n})}},children:n.children})},S=function(n){var t=n.movies,e=Object(a.useContext)(k).addMovieToNominationList;function c(n){n.target.src="https://assets.stickpng.com/images/58482ec0cef1014c0b5e4a70.png"}return t&&0!==t.length?t.map((function(n){return Object(i.jsx)("div",{className:"image-container",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"image",children:[Object(i.jsx)("img",{src:n.Poster,onError:c,alt:"poster"}),Object(i.jsxs)("h6",{className:"title",children:[" ",n.Title,", ",Object(i.jsxs)("i",{children:[" ",n.Year," "]})," "]})]}),Object(i.jsx)("div",{className:"overlay",children:Object(i.jsx)("button",{className:"btn-add",onClick:function(){return e(n)},children:" Nominate"})})]})},n.imdbID)})):Object(i.jsx)("div",{children:"Loading"})},T=(e(45),e.p+"static/media/navbar.343a389d.png");function C(){var n=Object(j.a)(["\n    background: url(",") top;\n    background-filter: blur(20px);\n    background-opacity: 0.5;\n    margin-top:30px;\n    height: 250px;\n    transform: translateY(40px);\n    overflow:auto;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin-top: -60px;\n"]);return C=function(){return n},n}var E=b.a.section(C(),T),F=function(){var n=Object(a.useState)(""),t=Object(N.a)(n,2),e=t[0],c=t[1],r=Object(a.useState)([]),o=Object(N.a)(r,2),s=o[0],l=o[1],m=function(){var n=Object(v.a)(g.a.mark((function n(){var t,i,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://www.omdbapi.com/?s=".concat(e,"&apikey=c2cd3803"),n.next=3,fetch(t);case 3:return i=n.sent,n.next=6,i.json();case 6:a=n.sent,l(a.Search),console.log(s);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){m(e)}),[e]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(E,{children:Object(i.jsx)("input",{type:"Text",placeholder:"Search for a movie by title",className:"search-box",value:e,onChange:function(n){return c(n.target.value)}})}),Object(i.jsx)("div",{className:"movie-container",children:Object(i.jsx)(S,{movies:s})})]})},_=(e(46),e(47),function(){var n=Object(a.useContext)(k).nominationList,t=Object(a.useContext)(k).removeMovieFromNominationList;return n&&0!==n.length?n.map((function(n,e){return Object(i.jsx)("div",{className:"image-container",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsxs)("div",{className:"image",children:[Object(i.jsx)("img",{src:n.Poster,alt:"poster"}),Object(i.jsxs)("h6",{className:"title",children:[" ",n.Title,", ",Object(i.jsxs)("i",{children:[" ",n.Year," "]})," "]})]}),Object(i.jsx)("div",{className:"overlay",children:Object(i.jsx)("button",{className:"btn-remove",onClick:function(){t(n)},children:" Remove"})}),Object(i.jsx)("div",{className:"done"})]})},e)})):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"null",children:Object(i.jsx)("h4",{className:"loading",children:" No Nominees yet!"})})})});function D(){var n=Object(j.a)(["\n    background: url(",") top;\n    background-filter: blur(20px);\n    background-opacity: 0.5;\n    margin-top:30px;\n    height: 250px;\n    transform: translateY(40px);\n    overflow:auto;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin-top: -60px;\n"]);return D=function(){return n},n}var A=b.a.section(D(),T),R=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(A,{children:Object(i.jsx)("h4",{className:"page-name",children:" Your Nominations"})}),Object(i.jsx)("div",{className:"nominee-page-container",children:Object(i.jsx)(_,{})}),Object(i.jsx)("button",{className:"submit",children:"Submit"})]})};var V=function(){return Object(i.jsx)(M,{children:Object(i.jsxs)(s.a,{children:[Object(i.jsx)(m,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",children:Object(i.jsx)(x,{})}),Object(i.jsx)(l.a,{path:"/nominations",children:Object(i.jsx)(R,{})}),Object(i.jsx)(l.a,{path:"/browse",children:Object(i.jsx)(F,{})})]})]})})},Y=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,49)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;e(n),i(n),a(n),c(n),r(n)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s.b,{children:Object(i.jsx)(V,{})})}),document.getElementById("root")),Y()}},[[48,1,2]]]);
//# sourceMappingURL=main.879c0e01.chunk.js.map