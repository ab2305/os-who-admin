webpackJsonp([20],{"38IB":function(a,b,c){"use strict";var d=c("Xxa5"),e=c.n(d),f=c("exGp"),g=c.n(f);b.a={layout:"authorized",validate:function(a){var b=a.params;return /^\d+$/.test(b.id)},asyncData:function(){var a=g()(e.a.mark(function a(b){var c,d=b.app,f=b.params;return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.$axios.$get("/questions/"+f.id);case 2:return c=a.sent,a.abrupt("return",{qna:c});case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),data:function(){return{form:{comment:""}}},methods:{write:function(){var a=this;this.$refs.form.validate(function(){var b=g()(e.a.mark(function b(c){return e.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(c){b.next=2;break}return b.abrupt("return");case 2:return b.prev=2,b.next=5,a.$axios.$post("questions/"+a.$route.params.id+"/comment",a.form);case 5:a.$router.replace("/reload"),a.$notify.success({title:"\uB4F1\uB85D",message:"\uB2F5\uBCC0\uC774 \uB4F1\uB85D \uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),b.next=12;break;case 9:b.prev=9,b.t0=b["catch"](2),a.$notify.error({title:"\uB4F1\uB85D \uC2E4\uD328",message:"status: "+b.t0.response.status});case 12:case"end":return b.stop();}},b,a,[[2,9]])}));return function(){return b.apply(this,arguments)}}())}}}},o6Fy:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("38IB"),e=c("zUN+"),f=c("VU/8"),g=f(d.a,e.a,null,null,null);b["default"]=g.exports},"zUN+":function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[c("el-form",{ref:"form",attrs:{model:a.form,"label-width":"120px"},nativeOn:{submit:function(b){b.preventDefault(),a.write()}}},[c("el-form-item",{attrs:{label:"\uBB38\uC758"}},[a._v("\n      "+a._s(a.qna.body)+"\n    ")]),c("el-form-item",{attrs:{label:"\uB2F5\uBCC0"}},[c("el-input",{attrs:{type:"textarea",rows:20},model:{value:a.form.comment,callback:function(b){a.form.comment=b},expression:"form.comment"}})],1),c("el-form-item",[c("el-button",{attrs:{type:"primary","native-type":"submit"}},[a._v("\uC791\uC131")]),c("router-link",{attrs:{to:"/operation/qnas",tag:"el-button"}},[a._v("\uCDE8\uC18C")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=new.368d7f80feb812dfc804.js.map