webpackJsonp([19],{"8Wk+":function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[c("el-table",{attrs:{data:a.list},on:{"selection-change":a.handleSelectionChange}},[c("el-table-column",{attrs:{type:"selection",width:"50"}}),c("el-table-column",{attrs:{label:"\uC81C\uBAA9"},scopedSlots:a._u([{key:"default",fn:function(b){return[c("nuxt-link",{attrs:{to:"/operation/term/"+b.row.id+"/edit"}},[a._v("\n          "+a._s(b.row.title)+"\n        ")])]}}])}),c("el-table-column",{attrs:{label:"\uB4F1\uB85D\uC77C",width:"240"},scopedSlots:a._u([{key:"default",fn:function(b){return[a._v(a._s(a._f("moment")(b.row.createdAt,"lll")))]}}])}),c("el-table-column",{attrs:{label:"\uC870\uD68C\uC218",width:"100"},scopedSlots:a._u([{key:"default",fn:function(b){return[a._v(a._s(b.row.viewCount.toLocaleString()))]}}])})],1),c("div",[c("router-link",{attrs:{to:"/operation/term/new",tag:"el-button"}},[a._v("\uB4F1\uB85D")]),c("el-button",{attrs:{disabled:!a.multipleSelection.length},on:{click:function(){a.deleteTerms()}}},[a._v("\uC0AD\uC81C")])],1)],1)},staticRenderFns:[]}},LlP2:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("ONpp"),e=c("8Wk+"),f=c("VU/8"),g=f(d.a,e.a,null,null,null);b["default"]=g.exports},ONpp:function(a,b,c){"use strict";var d=c("//Fk"),e=c.n(d),f=c("Xxa5"),g=c.n(f),h=c("exGp"),i=c.n(h);b.a={layout:"authorized",asyncData:function(){var a=i()(g.a.mark(function a(b){var c,d=b.app;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.$axios.$get("/other-notices",{params:{category:"term"}});case 2:return c=a.sent,a.abrupt("return",{list:c});case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),data:function(){return{multipleSelection:[]}},methods:{handleSelectionChange:function(a){this.multipleSelection=a},deleteTerms:function(){var a=i()(g.a.mark(function a(){var b,c=this;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,b=this.multipleSelection.map(function(){var a=i()(g.a.mark(function a(b){var d=b.id;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",c.$axios.$delete("/other-notices/"+d,{params:{category:"term"}}));case 1:case"end":return a.stop();}},a,c)}));return function(){return a.apply(this,arguments)}}()),a.next=4,e.a.all(b);case 4:this.$notify({message:"\uC774\uC6A9\uC57D\uAD00\uC744 \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4."}),this.$router.replace("/reload"),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),this.$notify({type:"error",message:a.t0});case 11:case"end":return a.stop();}},a,this,[[0,8]])}));return function(){return a.apply(this,arguments)}}()}}}});
//# sourceMappingURL=terms.dac7edc4210b30014f1e.js.map