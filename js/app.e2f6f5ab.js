(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],f=0,v=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://voffkin.github.io/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"220c":function(t,e,n){"use strict";var a=n("be01"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)},s=[],i=n("2877"),o={},l=Object(i["a"])(o,r,s,!1,null,null,null),c=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("router-link",{attrs:{to:"/svg"}},[t._v("SVG converter")])],1)},v=[],d={name:"home"},b=d,p=Object(i["a"])(b,f,v,!1,null,null,null),m=p.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"svg_data_attributes"},[t._m(0),n("div",{staticClass:"control btn_group"},[n("button",{staticClass:"button is-small",class:{"is-success":1===t.config},on:{click:function(e){t.config=1}}},[t._v("to data-name")]),n("button",{staticClass:"button is-small",class:{"is-success":2===t.config},on:{click:function(e){t.config=2}}},[t._v("to class")])]),n("div",{staticClass:"field is-vertical"},[t._m(1),n("div",{staticClass:"field-body"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textareaSrc,expression:"textareaSrc"}],staticClass:"textarea",attrs:{name:"src",id:"",cols:"150",rows:"10"},domProps:{value:t.textareaSrc},on:{input:function(e){e.target.composing||(t.textareaSrc=e.target.value)}}})])]),n("button",{staticClass:"button",on:{click:t.onConvert}},[t._v("Convert")]),n("div",{staticClass:"field is-vertical"},[t._m(2),n("div",{staticClass:"field-body"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textareaResult,expression:"textareaResult"}],staticClass:"textarea",attrs:{name:"result",id:"",cols:"150",rows:"10"},domProps:{value:t.textareaResult},on:{input:function(e){e.target.composing||(t.textareaResult=e.target.value)}}})])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text_body"},[t._v(" Converter SVG attributes from "),n("code",[t._v('id="btn__btn1"')]),t._v(" to "),n("code",[t._v('data-name="btn btn1"')]),t._v(" or "),n("code",[t._v('class="btn btn1"')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-label is-small"},[n("label",{staticClass:"label"},[t._v("Source")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-label is-small"},[n("label",{staticClass:"label"},[t._v("Result")])])}],h=(n("4160"),n("caad"),n("ac1f"),n("2532"),n("5319"),n("159b"),'<svg id="layer_1" viewBox="0 0 1426 1007">\n  <g id="btns">\n    <g id="btn__btn1" >\n      <circle cx="500.5" cy="607.5" r="43.5" style="fill: #a8891b"/>\n    </g>\n    <g id="btn__btn2" >\n      <circle cx="497.5" cy="513.5" r="43.5" style="fill: #a8891b"/>\n    </g>\n  </g>\n</svg>\n'),x={name:"svgDataAttributes",data:function(){return{config:1,textareaResult:null,textareaSrc:h}},methods:{onConvert:function(){var t="data-name";2===this.config&&(t="class");var e=document.createElement("div");e.innerHTML=this.textareaSrc,e.querySelectorAll("*").forEach((function(e){if(e.getAttribute("id")){var n=e.getAttribute("id");n.includes("__")&&e.setAttribute(t,n.replace("__"," "))}})),this.textareaResult=e.querySelector("svg").outerHTML}}},y=x,C=(n("220c"),Object(i["a"])(y,_,g,!1,null,"07b18412",null)),w=C.exports;a["a"].use(u["a"]);var S=[{path:"/",name:"home",component:m},{path:"/svg",name:"svgDataAttributes",component:w}],O=new u["a"]({routes:S}),j=O;a["a"].config.productionTip=!1,new a["a"]({router:j,render:function(t){return t(c)}}).$mount("#app")},be01:function(t,e,n){}});
//# sourceMappingURL=app.e2f6f5ab.js.map