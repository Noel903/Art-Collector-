(this.webpackJsonpart_collector_react=this.webpackJsonpart_collector_react||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),l=n(1),u=n.n(l),o=n(2),i="https://api.harvardartmuseums.org",p="apikey=1ed6bd20-6ced-11ea-8bdc-95909fa24347";function f(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(u.a.mark((function e(t){var n,a,r,c,s,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.century,a=t.classification,r=t.queryString,c="".concat(i,"/object?").concat(p,"&classification=").concat(a,"&century=").concat(n,"&keyword=").concat(r),e.prev=2,e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:return l=e.sent,e.abrupt("return",l);case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function y(){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("centuries")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("centuries")));case 2:return t="".concat(i,"/century?").concat(p,"&size=100&sort=temporalorder"),e.prev=3,e.next=6,fetch(t);case 6:return n=e.sent,e.next=9,n.json();case 9:return a=e.sent,r=a.records,localStorage.setItem("centuries",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function d(){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(u.a.mark((function e(){var t,n,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("classifications")){e.next=2;break}return e.abrupt("return",JSON.parse(localStorage.getItem("classifications")));case 2:return t="".concat(i,"/classification?").concat(p,"&size=100&sort=name"),e.prev=3,e.next=6,fetch(t);case 6:return n=e.sent,e.next=9,n.json();case 9:return a=e.sent,r=a.records,localStorage.setItem("classifications",JSON.stringify(r)),e.abrupt("return",r);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}var g=function(e){e.setFeatured},j=n(5),w=n.n(j),x=x,O=function(e){var t=t.props,n=n.props,a=a.props,c=(e.searchResults,e.info),s=e.records;function l(e){return i.apply(this,arguments)}function i(){return(i=Object(o.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,f(n);case 4:r=e.sent,t(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.prev=11,a(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}return r.a.createElement("aside",{id:"preview"},r.a.createElement("header",{className:"pagination"},r.a.createElement("button",{disabled:!c.prev,className:"previous",onClick:l(c.prev)},"Previous"),r.a.createElement("button",{disabled:!c.next,className:"next",onClick:l(c.next)},"Next")),r.a.createElement("section",{className:"results"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"object-preview",onClick:function(e){e.preventDefault(),n(!0)}},e.primaryimageurl?r.a.createElement("img",{src:e.primaryimageurl,alt:e.description}):"",e.title?r.a.createElement("h3",null,e.title):r.a.createElement("h3",null,"MISSING INFO"))}))))},k=n(3),S=function(e){var t=t.props,n=n.props,c=Object(a.useState)([]),s=Object(k.a)(c,2),l=s[0],i=s[1],p=Object(a.useState)([]),f=Object(k.a)(p,2),m=f[0],v=f[1],b=Object(a.useState)(""),E=Object(k.a)(b,2),g=E[0],j=E[1],w=Object(a.useState)("any"),x=Object(k.a)(w,2),O=x[0],S=x[1],N=Object(a.useState)("any"),I=Object(k.a)(N,2),C=I[0],J=I[1];return Object(a.useEffect)((function(){try{Promise.all([y(),d()]).then((function(e){var t=Object(k.a)(e,2),n=t[0],a=t[1];i(n),v(a)}))}catch(e){console.log(e)}}),[]),console.log(l),console.log(m),r.a.createElement("form",{id:"search",onSubmit:function(){var e=Object(o.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(!0);try{h({century:O,classification:C,queryString:g}).then((function(e){return n(e)}))}catch(r){console.error(r)}finally{t(!1)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"keywords"},"Query"),r.a.createElement("input",{id:"keywords",type:"text",placeholder:"enter keywords...",value:g,onChange:function(e){j(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"select-classification"},"Classification ",r.a.createElement("span",{className:"classification-count"},"(",m.length,")")),r.a.createElement("select",{name:"classification",id:"select-classification",value:C,onChange:function(e){return J(e.target.value)}},r.a.createElement("option",{value:"any"},"Any"),m.map((function(e,t){return r.a.createElement("option",{value:e.name,key:t},C.name)})))),r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"select-century"},"Century ",r.a.createElement("span",{className:"century-count"},"(",l.length,")")),r.a.createElement("select",{name:"century",id:"select-century",value:O,onChange:function(e){return S(e.target.value)}},r.a.createElement("option",{value:"any"},"Any"),l.map((function(e,t){return r.a.createElement("option",{value:e.name,key:t},e.name)})))),r.a.createElement("button",null,"SEARCH"))},N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(x,null),r.a.createElement(S,null),r.a.createElement(O,null),r.a.createElement(g,null),r.a.createElement(w.a,null)," ")};s.a.render(r.a.createElement(N,null),document.getElementById("app"))},5:function(e,t){},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.20e264f9.chunk.js.map