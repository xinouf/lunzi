(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{150:function(t,e,n){},151:function(t,e,n){},152:function(t,e,n){"use strict";n(150)},153:function(t,e,n){"use strict";n(151)},155:function(t,e,n){"use strict";n(39);!function(t){var e,n,i,o,c,s='<svg><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667c234.666667 0 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333zM554.666667 725.333333l-85.333333 0 0-85.333333 85.333333 0L554.666667 725.333333zM554.666667 554.666667l-85.333333 0L469.333333 298.666667l85.333333 0L554.666667 554.666667z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M908 225.99999969c-16.00000031-4.00000031-31.99999969 6-36 22.00000031l-22.00000031 82.00000031C780.00000031 204.00000031 645.99999969 122 498.00000031 122 279.99999969 122 102.00000031 296 102.00000031 512s178.00000031 390 396 390c168 0 318-103.99999969 373.99999969-258 6-16.00000031-1.99999969-31.99999969-18-37.99999969-16.00000031-6-31.99999969 1.99999969-37.99999969 18-48 130.00000031-175.99999969 217.99999969-318 217.99999969C312.00000031 842 162.00000031 693.99999969 162.00000031 512S314 182 498.00000031 182c136.00000031 0 259.99999969 82.00000031 309.99999938 204l-120-34.00000031c-16.00000031-4.00000031-31.99999969 6-36 22.00000031-4.00000031 16.00000031 6 31.99999969 22.00000031 36l174 46.00000031c1.99999969 0 6 1.99999969 7.99999969 1.99999969 6 0 10.00000031-1.99999969 16.00000031-4.00000031 6-4.00000031 12-10.00000031 13.99999969-18l46.00000031-174c0-16.00000031-7.99999969-31.99999969-24-36z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M896 672c-17.066667 0-32 14.933333-32 32v128c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-128c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v128c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-128c0-17.066667-14.933333-32-32-32z"  ></path><path d="M488.533333 727.466667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l213.333333-213.333334c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-157.866667 157.866667V170.666667c0-17.066667-14.933333-32-32-32s-34.133333 14.933333-34.133333 32v456.533333L322.133333 469.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l211.2 213.333334z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M731.733333 480l-384-341.333333c-17.066667-14.933333-44.8-14.933333-59.733333 4.266666-14.933333 17.066667-14.933333 44.8 4.266667 59.733334L640 512 292.266667 821.333333c-17.066667 14.933333-19.2 42.666667-4.266667 59.733334 8.533333 8.533333 19.2 14.933333 32 14.933333 10.666667 0 19.2-4.266667 27.733333-10.666667l384-341.333333c8.533333-8.533333 14.933333-19.2 14.933334-32s-4.266667-23.466667-14.933334-32z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M544 731.733333l341.333333-384c14.933333-17.066667 14.933333-44.8-4.266666-59.733333-17.066667-14.933333-44.8-14.933333-59.733334 4.266667L512 640 202.666667 292.266667c-14.933333-17.066667-42.66666701-19.2-59.733334-4.266667-8.533333 8.533333-14.933333 19.2-14.933333 32 0 10.666667 4.266667 19.2 10.666667 27.733333l341.333333 384c8.533333 8.533333 19.2 14.933333 32 14.93333399s23.466667-4.266667 32-14.93333399z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M512 328c-100.8 0-184 83.2-184 184S411.2 696 512 696 696 612.8 696 512 612.8 328 512 328z m0 320c-75.2 0-136-60.8-136-136s60.8-136 136-136 136 60.8 136 136-60.8 136-136 136z"  ></path><path d="M857.6 572.8c-20.8-12.8-33.6-35.2-33.6-60.8s12.8-46.4 33.6-60.8c14.4-9.6 20.8-27.2 16-44.8-8-27.2-19.2-52.8-32-76.8-8-14.4-25.6-24-43.2-19.2-24 4.8-48-1.6-65.6-19.2-17.6-17.6-24-41.6-19.2-65.6 3.2-16-4.8-33.6-19.2-43.2-24-14.4-51.2-24-76.8-32-16-4.8-35.2 1.6-44.8 16-12.8 20.8-35.2 33.6-60.8 33.6s-46.4-12.8-60.8-33.6c-9.6-14.4-27.2-20.8-44.8-16-27.2 8-52.8 19.2-76.8 32-14.4 8-24 25.6-19.2 43.2 4.8 24-1.6 49.6-19.2 65.6-17.6 17.6-41.6 24-65.6 19.2-16-3.2-33.6 4.8-43.2 19.2-14.4 24-24 51.2-32 76.8-4.8 16 1.6 35.2 16 44.8 20.8 12.8 33.6 35.2 33.6 60.8s-12.8 46.4-33.6 60.8c-14.4 9.6-20.8 27.2-16 44.8 8 27.2 19.2 52.8 32 76.8 8 14.4 25.6 22.4 43.2 19.2 24-4.8 49.6 1.6 65.6 19.2 17.6 17.6 24 41.6 19.2 65.6-3.2 16 4.8 33.6 19.2 43.2 24 14.4 51.2 24 76.8 32 16 4.8 35.2-1.6 44.8-16 12.8-20.8 35.2-33.6 60.8-33.6s46.4 12.8 60.8 33.6c8 11.2 20.8 17.6 33.6 17.6 3.2 0 8 0 11.2-1.6 27.2-8 52.8-19.2 76.8-32 14.4-8 24-25.6 19.2-43.2-4.8-24 1.6-49.6 19.2-65.6 17.6-17.6 41.6-24 65.6-19.2 16 3.2 33.6-4.8 43.2-19.2 14.4-24 24-51.2 32-76.8 4.8-17.6-1.6-35.2-16-44.8z m-56 92.8c-38.4-6.4-76.8 6.4-104 33.6-27.2 27.2-40 65.6-33.6 104-17.6 9.6-36.8 17.6-56 24-22.4-30.4-57.6-49.6-97.6-49.6-38.4 0-73.6 17.6-97.6 49.6-19.2-6.4-38.4-14.4-56-24 6.4-38.4-6.4-76.8-33.6-104-27.2-27.2-65.6-40-104-33.6-9.6-17.6-17.6-36.8-24-56 30.4-22.4 49.6-57.6 49.6-97.6 0-38.4-17.6-73.6-49.6-97.6 6.4-19.2 14.4-38.4 24-56 38.4 6.4 76.8-6.4 104-33.6 27.2-27.2 40-65.6 33.6-104 17.6-9.6 36.8-17.6 56-24 22.4 30.4 57.6 49.6 97.6 49.6 38.4 0 73.6-17.6 97.6-49.6 19.2 6.4 38.4 14.4 56 24-6.4 38.4 6.4 76.8 33.6 104 27.2 27.2 65.6 40 104 33.6 9.6 17.6 17.6 36.8 24 56-30.4 22.4-49.6 57.6-49.6 97.6 0 38.4 17.6 73.6 49.6 97.6-6.4 19.2-14.4 38.4-24 56z"  ></path></symbol><symbol id="icon-zan" viewBox="0 0 1024 1024"><path d="M118.25 486.546875V828.40625c0 32.709375 26.49375 59.203125 59.203125 59.203125H230.75V427.90625l-53.296875-0.5625A59.203125 59.203125 0 0 0 118.25 486.546875zM815.46875 365.215625l-235.378125 1.490625c11.053125-38.896875 16.65-73.4625 16.65-103.89375 0-69.046875-60.496875-136.659375-120.909375-127.884375-53.26875 7.734375-59.11875 53.775-59.11875 111.459375v52.0875c0 66.853125-56.109375 123.80625-121.1625 130.078125L287 428.46875v459.140625h463.66875a90.28125 90.28125 0 0 0 88.70625-73.4625l64.8-341.859375a90.28125 90.28125 0 0 0-88.70625-107.071875z"  ></path></symbol></svg>',a=(a=document.getElementsByTagName("script"))[a.length-1].getAttribute("data-injectcss");if(a&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}function l(){c||(c=!0,i())}e=function(){var t,e;(e=document.createElement("div")).innerHTML=s,s=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",e=t,(t=document.body).firstChild?function(t,e){e.parentNode.insertBefore(t,e)}(e,t.firstChild):t.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(e,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),e()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(i=e,o=t.document,c=!1,function t(){try{o.documentElement.doScroll("left")}catch(e){return void setTimeout(t,50)}l()}(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,l())})}(window);var i={props:{name:{}}},o=(n(152),n(1)),c={components:{icon:Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"g-icon"},[e("use",{attrs:{"xlink:href":"#icon-"+this.name}})])}),[],!1,null,"74095176",null).exports},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"right"===t||"left"===t}}}},s=(n(153),Object(o.a)(c,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?i("icon",{attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?i("icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),i("div",{staticClass:"g-button-content"},[e._t("default")],2)],1)}),[],!1,null,"26e77087",null));e.a=s.exports},160:function(t,e,n){},161:function(t,e,n){},162:function(t,e,n){},169:function(t,e,n){"use strict";n(160)},170:function(t,e,n){"use strict";n(161)},171:function(t,e,n){"use strict";n(162)},177:function(t,e,n){"use strict";n(40),n(14),n(26);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},o=(n(169),n(1)),c=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"aef5ce26",null);e.a=c.exports},178:function(t,e,n){"use strict";var i={name:"GuluSider",components:{Button:n(155).a},data:function(){return{visible:!0}},methods:{}},o=(n(171),n(1)),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slider"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"e456d834",null);e.a=c.exports},179:function(t,e,n){"use strict";var i=n(1),o=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"41de35d6",null);e.a=o.exports},180:function(t,e,n){"use strict";var i=n(1),o=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"5f266bf2",null);e.a=o.exports},181:function(t,e,n){"use strict";n(170);var i=n(1),o=Object(i.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"e503aa68",null);e.a=o.exports},193:function(t,e,n){},211:function(t,e,n){"use strict";n(193)},232:function(t,e,n){"use strict";n.r(e);n(25),n(96);var i=n(177),o=n(179),c=n(180),s=n(181),a=n(178),l={components:{GLayout:i.a,GHeader:o.a,GFooter:c.a,GContent:s.a,GSider:a.a},data:function(){return{content:'\n          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n            <g-header style="height: 50px; background:lightskyblue;">\n              header\n            </g-header>\n            <g-layout>\n              <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">\n                sider\n              </g-sider>\n              <g-content style="height: 100px; background:deepskyblue;">\n                content\n              </g-content>\n            </g-layout>\n            <g-footer style="height: 50px; background:lightskyblue;">\n              footer\n            </g-footer>\n          </g-layout>\n      '.replace(/^ {8}/gm,"").trim()}}},r=(n(211),n(1)),u=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),n("g-layout",[n("g-sider",{staticStyle:{height:"100px",background:"#ddd",width:"200px",color:"black"}},[t._v("\n        sider\n      ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n        content\n      ")])],1),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"6940e26c",null);e.default=u.exports}}]);