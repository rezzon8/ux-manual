(function(e){function t(t){for(var r,s,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var i=o[s];0!==n[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={app:0},a=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3370379f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(u);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,o[1](l)}n[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"4f49":function(e,t,o){"use strict";o("6a82")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=o("bc3a"),a=o.n(n),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-overlay",{attrs:{value:e.$store.state.is_data_processing}},[o("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1),o("v-app-bar",{staticClass:"elevation-8",attrs:{app:"",color:"primary"}},[o("v-icon",{attrs:{size:"26"}},[e._v("mdi-book-open-page-variant")]),o("v-toolbar-title",{staticClass:"ml-3"},[o("h2",[e._v("The UX Manual")])])],1),o("v-main",[o("router-view")],1)],1)},c=[],i={name:"App",methods:{loadData:function(){this.$store.dispatch("GET_DATA").then((function(){console.log("asdas")})).catch((function(e){console.log(e.message)}))}}},l=i,u=(o("034f"),o("2877")),p=o("6544"),d=o.n(p),_=o("7496"),f=o("40dc"),v=o("132d"),g=o("f6c4"),h=o("a797"),y=o("490a"),b=o("2a7f"),m=Object(u["a"])(l,s,c,!1,null,null,null),S=m.exports;d()(m,{VApp:_["a"],VAppBar:f["a"],VIcon:v["a"],VMain:g["a"],VOverlay:h["a"],VProgressCircular:y["a"],VToolbarTitle:b["a"]});o("d3b7");var T=o("8c4f"),w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{staticClass:"home"},[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-4"},[o("v-icon",{staticClass:"mr-3",attrs:{size:"42"}},[e._v("mdi-book-open-page-variant")]),o("h1",{staticClass:"display-2 font-weight-bold mb-3 mt-3"},[e._v(" The UX Manual ")]),o("p",{staticClass:"subheading font-weight-regular"},[e._v(" A reference guide and resource for the processes "),o("br"),e._v(" of which UX strategy is comprised ")])],1)],1),o("v-row",[o("v-col",[e._l(e.$store.getters.getUXProcesses,(function(t){return o("UXProcessSection",{key:t.id,attrs:{title:t.title,copy:t.copy,color:t.color,process_steps:e.$store.getters.getProcessSteps(t.id)},on:{openDialog:e.openDialog}})})),o("Dialog",{attrs:{dialog:e.get_dialog_state,color:e.color,title:e.dialog.title,copy:e.dialog.copy},on:{closeDialog:e.closeDialog}})],2)],1)],1)},A=[],E=o("5530"),C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-divider"),o("h4",{staticClass:"display-1 mt-3"},[e._v(e._s(e.title))]),o("v-row",[o("v-col",{attrs:{cols:"9"}},[o("h4",{staticClass:"subtitle-1"},[e._v(e._s(e.copy))])])],1)],1),e._l(e.process_steps,(function(t){return o("v-col",{key:t.id,staticClass:"mb-5 d-flex align-stretch",attrs:{href:t.href,cols:"4"}},e._l(t.copy.introduction,(function(r,n){return o("v-card",{key:n,staticClass:"d-flex align-start flex-column elevation-5"},[o("v-card-title",{staticStyle:{width:"100%"},style:{backgroundColor:e.color}},[e._v(" "+e._s(t.title)+" ")]),o("v-card-text",[e._v(" "+e._s(r)+" ")]),o("v-card-actions",{staticClass:"mt-auto align-self-end"},[o("v-btn",{staticClass:"white--text",style:{backgroundColor:e.color},on:{click:function(o){return e.$emit("openDialog",{id:t.id,color:e.color})}}},[e._v(" View ")])],1)],1)})),1)}))],2)],1)},O=[],D={name:"UXProcessSection",props:{process_steps:Array,title:String,copy:String,color:String}},V=D,x=o("8336"),k=o("b0af"),P=o("99d9"),j=o("62ad"),R=o("a523"),$=o("ce7e"),U=o("0fd9"),X=Object(u["a"])(V,C,O,!1,null,null,null),G=X.exports;d()(X,{VBtn:x["a"],VCard:k["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:j["a"],VContainer:R["a"],VDivider:$["a"],VRow:U["a"]});var I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"800",scrollable:""},on:{"click:outside":function(t){return e.$emit("closeDialog")}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.$store.getters.get_data_load_state?o("v-card",[o("v-card-title",{staticClass:"headline",staticStyle:{position:"relative"}},[o("div",{staticStyle:{"z-index":"1"}},[e._v(" "+e._s(e.title)+" ")]),o("v-sheet",{attrs:{color:e.color}})],1),o("v-card-text",{staticClass:"pt-5"},[o("v-row",[o("v-col",[o("h3",[e._v("Introduction")]),e._l(e.copy.introduction,(function(t,r){return o("p",{key:r},[e._v(e._s(t))])}))],2)],1),e.copy.helps_how?o("v-row",[o("v-col",[o("h3",[e._v(e._s(e.copy.helps_how.title))]),e._l(e.copy.helps_how.copy,(function(t,r){return o("p",{key:r},[e._v(" "+e._s(t)+" ")])}))],2)],1):e._e(),e.copy.you_get?o("v-row",[o("v-col",[o("h3",[e._v(e._s(e.copy.you_get.title))]),e._l(e.copy.you_get.copy,(function(t,r){return o("p",{key:r},[e._v(e._s(t))])}))],2)],1):e._e(),e.copy.additional_info?o("v-row",[o("v-col",[o("h3",[e._v("Additional information")]),e._l(e.copy.additional_info,(function(t,r){return o("p",{key:r},[e._v(" "+e._s(t)+" ")])}))],2)],1):e._e(),e.copy.the_process?o("v-row",[o("v-col",[o("h3",[e._v(e._s(e.copy.the_process.title))]),e._l(e.copy.the_process.copy,(function(t,r){return o("p",{key:r},[e._v(" "+e._s(t)+" ")])})),o("ul",e._l(e.copy.the_process.steps,(function(t,r){return o("li",{key:r},[e._v(" "+e._s(t)+" ")])})),0)],2)],1):e._e(),e.copy.the_process?o("v-row",[o("v-col",e._l(e.copy.the_process.summary,(function(t,r){return o("p",{key:r},[e._v(" "+e._s(t)+" ")])})),0)],1):e._e()],1),o("v-divider"),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:e.color},on:{click:function(t){return e.$emit("closeDialog")}}},[e._v(" Close ")])],1)],1):e._e()],1)],1)},L=[],M={props:{dialog:{type:Boolean,required:!1},color:{type:String,default:"blue"},title:{type:String,default:"Disclaimer"},copy:{type:Object}}},N=M,B=(o("4f49"),o("169a")),z=o("8dd9"),q=o("2fa4"),F=Object(u["a"])(N,I,L,!1,null,null,null),J=F.exports;d()(F,{VBtn:x["a"],VCard:k["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:j["a"],VDialog:B["a"],VDivider:$["a"],VRow:U["a"],VSheet:z["a"],VSpacer:q["a"]});var H=o("2f62"),K={name:"UX_manual",components:{UXProcessSection:G,Dialog:J},data:function(){return{color:"blue",dialog:{title:"Foo",copy:{}}}},computed:Object(E["a"])({},Object(H["b"])(["get_dialog_state","getProcessStep"])),methods:Object(E["a"])(Object(E["a"])({},Object(H["c"])(["SET_DIALOG_STATE"])),{},{closeDialog:function(){this.SET_DIALOG_STATE(!1)},openDialog:function(e){e.id&&this.setSelectedStep(e.id,e.color),this.SET_DIALOG_STATE(!0)},setSelectedStep:function(e,t){var o=this.getProcessStep(e);this.color=t,console.log(o),this.dialog.title=o.title,this.dialog.copy=o.copy}}),beforeCreate:function(){this.$store.dispatch("GET_DATA").then((function(){})).catch((function(e){console.log(e.message)}))}},Q=K,W=Object(u["a"])(Q,w,A,!1,null,null,null),Y=W.exports;d()(W,{VCol:j["a"],VContainer:R["a"],VIcon:v["a"],VRow:U["a"]}),r["a"].use(T["a"]);var Z=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],ee=new T["a"]({mode:"history",base:"/",routes:Z}),te=ee;o("4de4"),o("7db0"),o("4160"),o("159b");r["a"].use(H["a"]);var oe=new H["a"].Store({state:{is_data_loaded:!1,is_data_processing:!1,has_data_load_error:!1,ux_processes:[],process_steps:[],dialog:!1},getters:{get_data_load_state:function(e){return e.is_data_loaded},getUXProcesses:function(e){return e.ux_processes},getProcessStep:function(e){return function(t){return e.process_steps.find((function(e){return e.id===t}))}},getProcessSteps:function(e){return function(t){return e.process_steps.filter((function(e){return e.ux_process_id===t}))}},get_dialog_state:function(e){return e.dialog}},mutations:{SET_DATA_LOAD_STATE:function(e,t){e.is_data_loaded=t},SET_DIALOG_STATE:function(e,t){e.dialog=t},SET_DATA_PROCESSING:function(e,t){e.is_data_processing=t},SET_DATA_LOAD_ERROR:function(e,t){e.has_data_load_error=t},SET_PROCESS_STEPS:function(e,t){r["a"].set(e.process_steps,e.process_steps.length,t)},SET_UX_PROCESSES:function(e,t){r["a"].set(e.ux_processes,e.ux_processes.length,t)}},actions:{GET_DATA:function(e){var t=e.commit,o=e.state;o.is_data_processing=!0,o.ux_processes=[],o.process_steps=[];var r="ux_processes.json";return new Promise((function(e,o){a.a.get(r).then((function(o){o.data["ux_processes"].forEach((function(e){t("SET_UX_PROCESSES",e)})),o.data["process_steps"].forEach((function(e){t("SET_PROCESS_STEPS",e)})),t("SET_DATA_PROCESSING",!1),t("SET_DATA_LOAD_STATE",!0),e()})).catch((function(e){t("SET_DATA_PROCESSING",!1),t("SET_DATA_LOAD_ERROR",!1),o(e)}))}))}},modules:{}}),re=o("f309");r["a"].use(re["a"]);var ne=new re["a"]({theme:{dark:!0,themes:{dark:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),ae=o("9483");Object(ae["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].prototype.$http=a.a,new r["a"]({axios:a.a,router:te,store:oe,vuetify:ne,render:function(e){return e(S)}}).$mount("#app")},"6a82":function(e,t,o){},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.bfd926c7.js.map