webpackJsonp([4],{"5zde":function(a,b,c){c("zQR9"),c("qyJz"),a.exports=c("FeBl").Array.from},"95JN":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("f653"),e=c("mX30"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);g.options.__file="pages/operation/qnas.vue",!1,b["default"]=g.exports},Gu7T:function(a,b,c){"use strict";b.__esModule=!0;var d=c("c/Tr"),e=function(a){return a&&a.__esModule?a:{default:a}}(d);b.default=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return(0,e.default)(a)}},"c/Tr":function(a,b,c){a.exports={default:c("5zde"),__esModule:!0}},f653:function(a,b,c){"use strict";var d=c("Xxa5"),e=c.n(d),f=c("Gu7T"),g=c.n(f),h=c("exGp"),i=c.n(h);b.a={layout:"authorized",asyncData:function(){var a=i()(e.a.mark(function a(b){var c,d=b.app;return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.$axios.$get("/questions");case 2:return c=a.sent,a.abrupt("return",{list:[].concat(g()(c))});case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),methods:{handleSelectionChange:function(a){this.multipleSelection=a}}}},fBQ2:function(a,b,c){"use strict";var d=c("evD5"),e=c("X8DO");a.exports=function(a,b,c){b in a?d.f(a,b,e(0,c)):a[b]=c}},mX30:function(a,b){"use strict";var c=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[c("el-table",{attrs:{data:a.list},on:{"selection-change":a.handleSelectionChange}},[c("el-table-column",{attrs:{label:"No",width:"80"},scopedSlots:a._u([{key:"default",fn:function(b){return[a._v(a._s(b.row.id))]}}])}),c("el-table-column",{attrs:{label:"\uBB38\uC758"},scopedSlots:a._u([{key:"default",fn:function(b){return[c("nuxt-link",{attrs:{to:"/operation/qna/"+b.row.id+"/reply/edit"}},[a._v("\n          "+a._s(b.row.comment?b.row.body+" (1)":b.row.body)+"\n        ")])]}}])}),c("el-table-column",{attrs:{label:"\uBB38\uC758\uC790",width:"170"},scopedSlots:a._u([{key:"default",fn:function(b){return[a._v("\n      "+a._s(b.row.user.name)+"\n    ("+a._s(b.row.user.email)+")")]}}])}),c("el-table-column",{attrs:{label:"\uB4F1\uB85D\uC77C",width:"180"},scopedSlots:a._u([{key:"default",fn:function(b){return[a._v(a._s(a._f("moment")(b.row.createdAt,"lll")))]}}])})],1)],1)};c._withStripped=!0;b.a={render:c,staticRenderFns:[]},!1},qyJz:function(a,b,c){"use strict";var d=c("+ZMJ"),e=c("kM2E"),f=c("sB3e"),g=c("msXi"),h=c("Mhyx"),i=c("QRG4"),j=c("fBQ2"),k=c("3fs2");e(e.S+e.F*!c("dY0y")(function(a){Array.from(a)}),"Array",{from:function(a){var b,c,e,l,m=f(a),n="function"==typeof this?this:Array,o=arguments.length,p=1<o?arguments[1]:void 0,q=void 0!==p,r=0,s=k(m);if(q&&(p=d(p,2<o?arguments[2]:void 0,2)),void 0!=s&&!(n==Array&&h(s)))for(l=s.call(m),c=new n;!(e=l.next()).done;r++)j(c,r,q?g(l,p,[e.value,r],!0):e.value);else for(b=i(m.length),c=new n(b);b>r;r++)j(c,r,q?p(m[r],r):m[r]);return c.length=r,c}})}});