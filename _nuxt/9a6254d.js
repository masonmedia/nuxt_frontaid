(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{345:function(t,e,n){"use strict";n.r(e);var r=n(24),c=(n(69),n(1),n(11),{name:"about",data:function(){return{articles:[],test:[],posts:[]}},methods:{flextype:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://web.andrewmasonmedia.com/api/entries?id=home&token=8c7f5eb9797e734703f7da67279a4ab4").then((function(t){return t.json()}));case 2:n=e.sent,t.test=n,console.log(n);case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.flextype()}}),l=n(62),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"p-0",attrs:{fluid:""}},[n("b-row",{staticClass:"min-vh-100 bg-light p-0 m-0",attrs:{"align-v":"center"}},[n("b-col",{staticClass:"p-5",attrs:{"align-self":"center",lg:"12"}},[n("ul",[n("li",[t._v(t._s(t.articles.title))])])])],1),t._v(" "),n("b-row",{staticClass:"min-vh-100 bg-warning p-0 m-0",attrs:{"align-v":"center"}},[n("b-col",{staticClass:"p-5",attrs:{"align-self":"center",lg:"12"}})],1),t._v(" "),n("b-row",{staticClass:"min-vh-100 bg-warning p-0 m-0",attrs:{"align-v":"center"}},t._l(t.test,(function(article){return n("b-col",{key:article.id,staticClass:"p-5",attrs:{"align-self":"center",lg:"3"}},[n("h2",[t._v(t._s(article.title))]),t._v(" "),n("p",{domProps:{innerHTML:t._s(article.content)}})])})),1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);