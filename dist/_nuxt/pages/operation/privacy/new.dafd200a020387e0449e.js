webpackJsonp([21],{"AA/3":function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[c("el-form",{ref:"form",attrs:{model:a.form,rules:a.rules,"label-width":"120px"},nativeOn:{submit:function(b){b.preventDefault(),a.write()}}},[c("el-form-item",{attrs:{label:"\uC81C\uBAA9",prop:"title"}},[c("el-input",{attrs:{type:"title"},model:{value:a.form.title,callback:function(b){a.form.title=b},expression:"form.title"}})],1),c("el-form-item",{attrs:{label:"\uB0B4\uC6A9",prop:"body"}},[c("el-input",{attrs:{type:"textarea",rows:20},model:{value:a.form.body,callback:function(b){a.form.body=b},expression:"form.body"}})],1),c("el-form-item",[c("el-button",{attrs:{type:"primary","native-type":"submit"}},[a._v("\uC644\uB8CC")]),c("router-link",{attrs:{to:"/operation/privacies",tag:"el-button"}},[a._v("\uCDE8\uC18C")])],1)],1)],1)},staticRenderFns:[]}},SEC3:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("gxSv"),e=c("AA/3"),f=c("VU/8"),g=f(d.a,e.a,null,null,null);b["default"]=g.exports},gxSv:function(a,b,c){"use strict";var d=c("Xxa5"),e=c.n(d),f=c("exGp"),g=c.n(f);b.a={layout:"authorized",data:function(){return{form:{title:"",body:"",category:"privacy"},rules:{title:[{required:!0,message:"\uC81C\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",trigger:"blur"},{max:500,message:"\uCD5C\uB300 500\uC790\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",trigger:"blur"}],body:[{required:!0,message:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",trigger:"blur"}]}}},methods:{write:function(){var a=this;this.$refs.form.validate(function(){var b=g()(e.a.mark(function b(c){return e.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(c){b.next=2;break}return b.abrupt("return");case 2:return b.prev=2,b.next=5,a.$axios.$post("other-notice",a.form);case 5:a.$router.push("/operation/privacies"),a.$notify.success({title:"\uB4F1\uB85D",message:"\uB4F1\uB85D \uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),b.next=12;break;case 9:b.prev=9,b.t0=b["catch"](2),a.$notify.error({title:"\uB4F1\uB85D \uC2E4\uD328",message:"status: "+b.t0.response.status});case 12:case"end":return b.stop();}},b,a,[[2,9]])}));return function(){return b.apply(this,arguments)}}())}}}}});
//# sourceMappingURL=new.dafd200a020387e0449e.js.map