webpackJsonp([14],{AEMY:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("nav",[c("el-menu",{attrs:{mode:"horizontal",router:!0,"default-active":a.$route.path}},[a._l(a.pages,function(b){return[b.children?c("el-submenu",{key:b.path,attrs:{index:b.path,float:b.float}},[c("template",{slot:"title"},[a._v(a._s(b.name))]),a._l(b.children,function(b){return c("el-menu-item",{key:b.path,attrs:{index:b.path}},[a._v("\n            "+a._s(b.name)+"\n        ")])})],2):c("el-menu-item",{key:b.path,attrs:{index:b.path,float:b.float}},[a._v("\n        "+a._s(b.name)+"\n      ")])]})],2)],1)},staticRenderFns:[]}},"OBz/":function(a,b,c){"use strict";var d=c("oEaD");b.a={middleware:["authenticated","authorized"],components:{myNav:d.a}}},"Wj5/":function(a,b){"use strict";b.a={data:function(){return{pages:[{name:"\uD648",path:"/dashboard"},{name:"\uACB0\uC81C\uAD00\uB9AC",path:"/transactions",children:[{name:"\uACB0\uC81C\uC644\uB8CC",path:"/transactions/payments"},{name:"\uD658\uBD88\uC644\uB8CC",path:"/transactions/refunds"}]},{name:"\uD68C\uC6D0\uAD00\uB9AC",path:"/users",children:[{name:"\uD68C\uC6D0\uBAA9\uB85D",path:"/users/active"},{name:"\uD0C8\uD1F4\uD68C\uC6D0\uBAA9\uB85D",path:"/users/deleted"}]},{name:"\uB9E4\uCD9C\uD1B5\uACC4",path:"/stats",children:[{name:"\uC77C\uAC04 \uB9E4\uCD9C\uD1B5\uACC4",path:"/stats/daily"},{name:"\uC6D4\uAC04 \uB9E4\uCD9C\uD1B5\uACC4",path:"/stats/monthly"},{name:"\uD68C\uC6D0\uBCC4 \uB9E4\uCD9C\uD1B5\uACC4",path:"/stats/users"}]},{name:"\uC6B4\uC601\uAD00\uB9AC",path:"/operation",children:[{name:"\uB274\uC2A4&\uACF5\uC9C0\uC0AC\uD56D",path:"/operation/notices"},{name:"\uAD00\uB9AC\uC790 \uBA54\uC138\uC9C0",path:"/operation/notes"},{name:"FAQ",path:"/operation/faqs"},{name:"1:1 \uBB38\uC758",path:"/operation/qnas"},{name:"\uC774\uC6A9\uC57D\uAD00",path:"/operation/terms"},{name:"\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68",path:"/operation/privacies"},{name:"\uAD00\uB9AC\uC790 \uC815\uBCF4",path:"/operation/admins"}]},{name:this.$store.state.me.nickname+" \uB2D8",path:"/me",float:"right",children:[{name:"\uB85C\uADF8\uC544\uC6C3",path:"/logout"}]}]}}}},YoUW:function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[c("header",[c("my-nav")],1),c("div",{staticClass:"content"},[c("nuxt")],1)])},staticRenderFns:[]}},oEaD:function(a,b,c){"use strict";var d=c("Wj5/"),e=c("AEMY"),f=c("VU/8"),g=f(d.a,e.a,null,null,null);b.a=g.exports},rKBQ:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("OBz/"),e=c("YoUW"),f=c("VU/8"),g=f(d.a,e.a,null,null,null);b["default"]=g.exports}});
//# sourceMappingURL=authorized.630c5fb8455f9f79eb35.js.map