webpackJsonp([12],{BSZq:function(a,b,c){"use strict";var d=c("Xxa5"),e=c.n(d),f=c("exGp"),g=c.n(f);b.a={layout:"authorized",props:{form:{type:Object,default:function(){return{title:"",body:""}}},isEdit:{type:Boolean,default:!1}},data:function(){return{rules:{title:[{required:!0,message:"\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",trigger:"blur"},{max:500,message:"\uCD5C\uB300 500\uC790\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",trigger:"blur"}],body:[{required:!0,message:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",trigger:"blur"}]}}},methods:{write:function(){var a=this;this.$refs.form.validate(function(){var b=g()(e.a.mark(function b(c){return e.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(c){b.next=2;break}return b.abrupt("return");case 2:if(b.prev=2,!a.isEdit){b.next=8;break}return b.next=6,a.$axios.$put("other-notices/"+a.$route.params.id,a.form);case 6:b.next=10;break;case 8:return b.next=10,a.$axios.$post("other-notice",a.form);case 10:a.$router.push("/operation/privacies"),a.$notify.success({title:a.isEdit?"\uC218\uC815":"\uB4F1\uB85D",message:a.isEdit?"\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4.":"\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68\uC744 \uB4F1\uB85D\uD588\uC2B5\uB2C8\uB2E4."}),b.next=17;break;case 14:b.prev=14,b.t0=b["catch"](2),a.$notify.error({title:a.isEdit?"\uC218\uC815 \uC2E4\uD328":"\uB4F1\uB85D \uC2E4\uD328",message:"status: "+b.t0.response.status});case 17:case"end":return b.stop();}},b,a,[[2,14]])}));return function(){return b.apply(this,arguments)}}())}}}},emEk:function(a,b,c){"use strict";var d=c("Xxa5"),e=c.n(d),f=c("exGp"),g=c.n(f),h=c("tWSa");b.a={layout:"authorized",asyncData:function(){var a=g()(e.a.mark(function a(b){var c,d,f,g=b.app,h=b.route;return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.$axios.$get("/other-notices/"+h.params.id,{params:{category:"privacy"}});case 2:return c=a.sent,d=c.title,f=c.body,a.abrupt("return",{form:{title:d,body:f}});case 6:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}(),components:{myPrivacyEditor:h.a}}},"fu+G":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("emEk"),e=c("rjqD"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);g.options.__file="pages/operation/privacy/_id/edit.vue",!1,b["default"]=g.exports},iUUG:function(a,b){"use strict";var c=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[c("el-form",{ref:"form",attrs:{model:a.form,rules:a.rules,"label-width":"120px"},nativeOn:{submit:function(b){b.preventDefault(),a.write()}}},[c("el-form-item",{attrs:{label:"\uC81C\uBAA9",prop:"title"}},[c("el-input",{attrs:{type:"title"},model:{value:a.form.title,callback:function(b){a.$set(a.form,"title",b)},expression:"form.title"}})],1),c("el-form-item",{attrs:{label:"\uB0B4\uC6A9",prop:"body"}},[c("el-input",{attrs:{type:"textarea",rows:20},model:{value:a.form.body,callback:function(b){a.$set(a.form,"body",b)},expression:"form.body"}})],1),c("el-form-item",[c("el-button",{attrs:{type:"primary","native-type":"submit"}},[a._v("\uC644\uB8CC")]),c("router-link",{attrs:{to:"/operation/privacies",tag:"el-button"}},[a._v("\uCDE8\uC18C")])],1)],1)],1)};c._withStripped=!0;b.a={render:c,staticRenderFns:[]},!1},rjqD:function(a,b){"use strict";var c=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("my-privacy-editor",{attrs:{form:a.form,isEdit:!0}})};c._withStripped=!0;b.a={render:c,staticRenderFns:[]},!1},tWSa:function(a,b,c){"use strict";var d=c("BSZq"),e=c("iUUG"),f=c("VU/8"),g=f(d.a,e.a,!1,null,null,null);g.options.__file="components/PrivacyEditor.vue",!1,b.a=g.exports}});