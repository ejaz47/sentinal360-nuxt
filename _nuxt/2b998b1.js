(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(e,t,r){"use strict";var n=r(2),o=r(213).trim;n({target:"String",proto:!0,forced:r(325)("trim")},{trim:function(){return o(this)}})},325:function(e,t,r){"use strict";var n=r(89).PROPER,o=r(3),l=r(214);e.exports=function(e){return o((function(){return!!l[e]()||"​᠎"!=="​᠎"[e]()||n&&l[e].name!==e}))}},329:function(e,t,r){"use strict";r.r(t);r(29);var n=r(10),o=(r(69),r(16),r(37),r(44),r(324),r(27),{name:"Form",props:{},data:function(){return{loading:!1,hasError:!1,formData:{name:{value:"",error:[],validate:{required:!0,maxLength:100}},title:{value:"",error:[],validate:{required:!0,maxLength:50}},email:{value:"",error:[],validate:{required:!0,maxLength:100,email:!0}},company:{value:"",error:[],validate:{required:!0,maxLength:100}}}}},methods:{onSendClick:function(){var e=this;if(this.validate(),!this.hasError){var t={};Object.keys(this.formData).forEach((function(r){t[r]=e.formData[r].value})),this.postData(t),console.log(t)}},clearForm:function(){for(var e in this.hasError=!1,this.loading=!1,this.formData){var t=this.formData[e];t.value="",t.error=[]}},postData:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.loading=!0,r.next=4,t.$axios.post("/insertData",e);case 4:r.sent,t.loading=!1,t.$buefy.dialog.alert({title:"Thank You!",message:"We've received your details and are on it! Expect to hear from us soon.",confirmText:"ok"}),t.clearForm(),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),t.$buefy.notification.open({duration:5e3,message:"Something went wrong!",position:"is-bottom-right",type:"is-danger",hasIcon:!0}),t.loading=!1;case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},validate:function(){for(var e in this.hasError=!1,this.formData){var t=this.formData[e];t.error=[],t.validate.required&&!t.value.trim()&&t.error.push("This field is required."),t.validate.maxLength&&t.value.length>t.validate.maxLength&&t.error.push("Maximum length is ".concat(t.validate.maxLength," characters.")),t.validate.email&&!/^\S+@\S+\.\S+$/.test(t.value)&&t.error.push("Invalid email address."),this.hasError=!(!this.hasError&&!t.error.length)}}}}),l=r(51),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pt-6 pb-6 mb-6 margin-top-24"},[e._m(0),e._v(" "),t("div",{staticClass:"container mt-5 box",staticStyle:{"max-width":"800px"}},[t("b-field",{attrs:{grouped:""}},[t("b-field",{attrs:{label:"Name",expanded:"",type:{"is-danger":e.formData.name.error.length},message:e.formData.name.error||""}},[t("b-input",{model:{value:e.formData.name.value,callback:function(t){e.$set(e.formData.name,"value",t)},expression:"formData.name.value"}})],1),e._v(" "),t("b-field",{attrs:{label:"Title",expanded:"",type:{"is-danger":e.formData.title.error.length},message:e.formData.title.error||""}},[t("b-input",{model:{value:e.formData.title.value,callback:function(t){e.$set(e.formData.title,"value",t)},expression:"formData.title.value"}})],1)],1),e._v(" "),t("b-field",{attrs:{label:"Email",type:{"is-danger":e.formData.email.error.length},message:e.formData.email.error||""}},[t("b-input",{attrs:{type:"email"},model:{value:e.formData.email.value,callback:function(t){e.$set(e.formData.email,"value",t)},expression:"formData.email.value"}})],1),e._v(" "),t("b-field",{attrs:{label:"Company",type:{"is-danger":e.formData.company.error.length},message:e.formData.company.error||""}},[t("b-input",{model:{value:e.formData.company.value,callback:function(t){e.$set(e.formData.company,"value",t)},expression:"formData.company.value"}})],1),e._v(" "),t("div",{staticClass:"field mt-6 mb-3"},[t("div",{staticClass:"control"},[t("b-button",{attrs:{type:"is-primary",loading:e.loading,disabled:e.loading},on:{click:e.onSendClick}},[e._v("Send")])],1)])],1)])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"is-flex is-flex-direction-row is-justify-content-center"},[t("div",{staticClass:"m-2",staticStyle:{"text-align":"center","max-width":"900px"}},[t("h1",{staticClass:"is-size-1 has-text-primary has-text-weight-bold",attrs:{id:"contact"}},[e._v("\n        Contact us\n      ")]),e._v(" "),t("p",{staticClass:"is-size-4 has-text-primary"},[e._v("\n        Get in touch with us effortlessly. Simply complete the form, and we'll\n        be in contact with you at the earliest convenience.\n      ")])])])}],!1,null,null,null);t.default=component.exports}}]);