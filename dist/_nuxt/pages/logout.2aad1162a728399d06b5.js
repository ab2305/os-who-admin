webpackJsonp([30],{"/FkW":function(a,b){"use strict";b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",[a._v("\n  logout\n")])},staticRenderFns:[]}},"5KkY":function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c("YX37"),e=c("/FkW"),f=c("VU/8"),g=f(d.a,e.a,null,null,null);b["default"]=g.exports},YX37:function(a,b,c){"use strict";var d=c("Xxa5"),e=c.n(d),f=c("exGp"),g=c.n(f);b.a={layout:"authenticated",beforeRouteEnter:function(a,b,c){var d=this;c(function(){var a=g()(e.a.mark(function a(b){return e.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.$store.dispatch("logout");case 3:b.$router.replace("/login"),b.$notify.success({title:"\uB85C\uADF8\uC544\uC6C3",message:"\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."}),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),d.$notify.error({title:"\uB85C\uADF8\uC544\uC6C3 \uC2E4\uD328",message:"status: "+a.t0.response.status});case 10:case"end":return a.stop();}},a,d,[[0,7]])}));return function(){return a.apply(this,arguments)}}())}}}});
//# sourceMappingURL=logout.2aad1162a728399d06b5.js.map