(function(t){function e(e){for(var i,s,l=e[0],c=e[1],o=e[2],d=0,m=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0764":function(t,e,a){"use strict";a("ed4d")},"0a9b":function(t,e,a){},"3c26":function(t,e,a){},"3e0c":function(t,e,a){},"4f65":function(t,e,a){"use strict";a("d95e")},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("HeaderComponent"),a("router-view"),a("ByteCodeFooter")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{staticClass:"bcl-menu-bar",attrs:{app:"",collapse:""}},[a("button",{on:{click:function(e){t.menu=!t.menu}}},[a("span",{staticClass:"material-icons menu-icon"},[t._v("menu")])])]),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("ul",t._l(10,(function(e){return a("li",{key:e},[t._v(t._s(e)+" ")])})),0)])],1)},l=[],c={name:"HeaderTop",data:()=>({menu:!1}),mounted(){window.addEventListener("keydown",t=>{27==t.keyCode&&(this.menu=!1)})}},o=c,u=(a("4f65"),a("2877")),d=a("6544"),m=a.n(d),f=a("40dc"),g=a("f774"),b=Object(u["a"])(o,s,l,!1,null,"533f1d5c",null),p=b.exports;m()(b,{VAppBar:f["a"],VNavigationDrawer:g["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"bcl-footer left"}),a("div",{staticClass:"bcl-line"}),a("div",{staticClass:"bcl-footer middle"},[a("div",{staticClass:"bcl-follow-us-on"},[a("div",{staticClass:"bcl-social-links"},[a("a",{attrs:{href:"https://www.instagram.com/bytecode_learners/",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{dark:""}},[t._v("mdi-instagram")])],1),a("a",{attrs:{href:"https://www.instagram.com/bytecode_learners/",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{href:"",dark:""}},[t._v("mdi-twitter")])],1),a("a",{attrs:{href:"https://www.facebook.com/Bytecode-Learners-103644071079006",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{dark:""}},[t._v("mdi-facebook")])],1),a("a",{attrs:{href:"https://github.com/ByteCodeLearners/",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{dark:""}},[t._v("mdi-github")])],1)])])]),a("div",{staticClass:"bcl-line"}),a("div",{staticClass:"bcl-footer right"})])},v=[],h={name:"ByteCodeFooter"},C=h,y=(a("eab0"),a("132d")),w=Object(u["a"])(C,_,v,!1,null,"2a103c7e",null),k=w.exports;m()(w,{VIcon:y["a"]});var x={name:"App",data:()=>({}),components:{HeaderComponent:p,ByteCodeFooter:k},methods:{test(){console.log("hello")}}},j=x,E=a("7496"),O=Object(u["a"])(j,n,r,!1,null,"152d5bde",null),B=O.exports;m()(O,{VApp:E["a"]});var P=a("8c4f"),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homepage"},[a("Introduction"),a("div",{staticClass:"contents",attrs:{id:"bcl-index-main-content"}}),a("ByteCodeSlider"),a("v-container",[a("PhotoGallery")],1)],1)},L=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bcl-slider-container"},[a("div",{staticClass:"bcl-group-slider  slide"},[t._l(t.sliderContent,(function(t,e){return a("div",{key:e,staticClass:"bcl-group-slider-content"},[a("MembersDetailsCard")],1)})),a("div",{staticClass:"bcl-group-slider-content"})],2)])},V=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("div",{staticClass:"bcl-members-details-container"},[a("div",{staticClass:"bcl-members-image"},[a("img",{attrs:{src:t.image,alt:"image"}})]),a("div",{staticClass:"bcl-members-details"},[a("p",[t._v("ByteCoder")])])])])},M=[],D={name:"ByteCodeMemberDetailsCard",data:()=>({image:a("c173")})},T=D,A=(a("cb01"),a("b0af")),H=Object(u["a"])(T,I,M,!1,null,"7b961bb6",null),W=H.exports;m()(H,{VCard:A["a"]});var F={data:()=>({sliderContent:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],show:!0}),components:{MembersDetailsCard:W},mounted(){var t=$(".bcl-group-slider")[0].childElementCount,e=($(".bcl-group-slider-content").outerWidth(),window.outerWidth-$(".bcl-group-slider").width());function a(e){$(".bcl-group-slider").animate({marginLeft:e},{duration:1200*t,easing:"linear"}).animate({marginLeft:0},"fast",()=>{a(e)})}window.addEventListener("resize",()=>{$(".bcl-group-slider-content").outerWidth(),e=window.outerWidth-$(".bcl-group-slider").width()}),a(e)}},z=F,J=(a("9501"),Object(u["a"])(z,S,V,!1,null,"34c22873",null)),N=J.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bcl-intro"},[t._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"bcl-intro-text-container align-content-center-column"},[t._m(1),a("div",{staticClass:"bcl-social-link-container"},[a("div",{staticClass:"bcl-social-links"},[a("a",{attrs:{href:"https://www.instagram.com/bytecode_learners/",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{dark:""}},[t._v("mdi-instagram")])],1),a("a",{attrs:{href:"https://www.instagram.com/bytecode_learners/",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{dark:""}},[t._v("mdi-twitter")])],1),a("a",{attrs:{href:"https://www.facebook.com/Bytecode-Learners-103644071079006",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{dark:""}},[t._v("mdi-facebook")])],1),a("a",{attrs:{href:"https://github.com/ByteCodeLearners/",target:"_blank"}},[a("v-icon",{staticClass:"bcl-social-media-icons",attrs:{dark:""}},[t._v("mdi-github")])],1)])])]),a("div",{staticClass:"bcl-side-image align-content-center-column "},[a("img",{attrs:{src:t.logo}})])]),a("div",{staticClass:"slide-btn align-content-center-row",on:{click:t.scrollDown}},[a("span",{staticClass:"material-icons ",staticStyle:{"font-size":"4em",color:"white"}},[t._v("keyboard_arrow_down")])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("ul",{staticClass:"bg-bubbles"},[a("li"),a("li"),a("li"),a("li"),a("li"),a("li"),a("li"),a("li"),a("li"),a("li")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bcl-intro-text"},[a("div",{staticClass:"heading"},[t._v("Coding Community")]),a("div",{staticClass:"sub-text"},[t._v("create something ctrl + n")])])}],q={name:"Introduction",data:()=>({logo:a("d30e")}),name:"Introduction",methods:{scrollDown(){$(".slide-btn").click(()=>{$("html, body").animate({scrollTop:$("#bcl-index-main-content").offset().top},"400")})}}},K=q,Q=(a("0764"),Object(u["a"])(K,R,Y,!1,null,null,null)),U=Q.exports;m()(Q,{VIcon:y["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bcl-container"},[a("v-card",{staticClass:"gallery_heading mx-auto mb-4"},[t._v("EVENTS GALLERY")]),a("div",{staticClass:"gallery"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("v-icon",{staticClass:"gallery__item gallery__item--7 plus",attrs:{"x-large":""}},[t._v("mdi-plus")])],1)],1)},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"gallery__item gallery__item--1"},[i("img",{staticClass:"gallery__img",attrs:{src:a("969a"),alt:"Gallery image 1"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"gallery__item gallery__item--2"},[i("img",{staticClass:"gallery__img",attrs:{src:a("893a"),alt:"Gallery image 2"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"gallery__item gallery__item--3"},[i("img",{staticClass:"gallery__img",attrs:{src:a("aa34"),alt:"Gallery image 3"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"gallery__item gallery__item--4"},[i("img",{staticClass:"gallery__img",attrs:{src:a("59d6"),alt:"Gallery image 4"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"gallery__item gallery__item--5"},[i("img",{staticClass:"gallery__img",attrs:{src:a("f1b1"),alt:"Gallery image 5"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("figure",{staticClass:"gallery__item gallery__item--6"},[i("img",{staticClass:"gallery__img",attrs:{src:a("8444"),alt:"Gallery image 6"}})])}],tt={name:"PhotoGallery"},et=tt,at=(a("d394"),Object(u["a"])(et,X,Z,!1,null,null,null)),it=at.exports;m()(at,{VCard:A["a"],VIcon:y["a"]});var nt={name:"homePage",components:{Introduction:U,ByteCodeSlider:N,PhotoGallery:it}},rt=nt,st=(a("7430"),a("a523")),lt=Object(u["a"])(rt,G,L,!1,null,"421cdc4a",null),ct=lt.exports;m()(lt,{VContainer:st["a"]}),i["a"].use(P["a"]);const ot=[{path:"/",name:"Home",component:ct}],ut=new P["a"]({mode:"history",base:"/",routes:ot});var dt=ut,mt=a("2f62");i["a"].use(mt["a"]);var ft=new mt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),gt=a("f309");i["a"].use(gt["a"]);var bt=new gt["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:dt,store:ft,vuetify:bt,render:function(t){return t(B)}}).$mount("#app")},"59d6":function(t,e,a){t.exports=a.p+"img/g4.2d65d725.jpg"},7430:function(t,e,a){"use strict";a("cad9")},8444:function(t,e,a){t.exports=a.p+"img/g6.841b3b10.jpg"},"893a":function(t,e,a){t.exports=a.p+"img/g2.3c303dcc.jpg"},9501:function(t,e,a){"use strict";a("3c26")},"969a":function(t,e,a){t.exports=a.p+"img/g1.704f4a16.jpg"},aa34:function(t,e,a){t.exports=a.p+"img/g3.3535b997.jpg"},c173:function(t,e,a){t.exports=a.p+"img/bytecode-original.ad9cfd3e.png"},cad9:function(t,e,a){},cb01:function(t,e,a){"use strict";a("fbbf")},d30e:function(t,e,a){t.exports=a.p+"img/bytecode.62269a64.png"},d394:function(t,e,a){"use strict";a("0a9b")},d95e:function(t,e,a){},eab0:function(t,e,a){"use strict";a("3e0c")},ed4d:function(t,e,a){},f1b1:function(t,e,a){t.exports=a.p+"img/g5.4b201643.jpg"},fbbf:function(t,e,a){}});
//# sourceMappingURL=app.ae532db1.js.map