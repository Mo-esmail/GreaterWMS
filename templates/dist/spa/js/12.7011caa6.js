(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"235f":function(e,t,a){"use strict";(function(e){var n,i=a("3004"),s=a("bd4c"),o=a("18d6"),r=a("a639"),l=a("b06b"),c=a("0967"),d=a("bca8");t["a"]={data(){return{device:o["a"].getItem("device"),device_name:o["a"].getItem("device_name"),lang:this.$i18n.locale,verCheck:!1,version:"",updateNow:!1,processpercent:0,downloadprocess:!1,container_height:this.$q.screen.height+"px",langOptions:[{value:"en-us",label:"English"},{value:"zh-hans",label:"中文简体"},{value:"zh-hant",label:"中文繁體"},{value:"fr",label:"Français"},{value:"pt",label:"Português"},{value:"ru",label:"Español"},{value:"de",label:"Deutsch"},{value:"ru",label:"русский язык"},{value:"ar",label:"Arabic"},{value:"fr",label:"Italiano"},{value:"ja",label:"日本語"}],title:this.$t("index.webtitle"),admin:!1,adminlogin:{name:"",password:""},openid:"",isPwd:!0,isPwd2:!0,authin:"0",authid:!1,left:!1,drawerleft:!1,tab:"",login:!1,link:"",login_name:"",login_id:0,check_code:"",register:!1,registerform:{name:"",password1:"",password2:""},friend:!1,friend_num:0,friend_list:[],friend_previous:null,friend_next:null,sender:"",receiver:"",chat:!1,chat_list:[],chat_text:"",chat_next:null,read:!1,read_num:0,read_list:[],read_previous:"",read_next:"",needLogin:"",activeTab:""}},methods:{linkChange(e){var t=this;localStorage.removeItem("menulink"),localStorage.setItem("menulink",e),t.link=e},drawerClick(e){var t=this;t.miniState&&(t.miniState=!1,e.stopPropagation())},brownlink(e){Object(l["a"])(e)},apiLink(){Object(l["a"])(i["b"]+"docs/")},Login(){var e=this;""===e.login_name?e.$q.notify({message:"Please enter the login name",color:"negative",icon:"close"}):""===e.openid?e.$q.notify({message:"Please Enter The Openid",icon:"close",color:"negative"}):""===e.check_code?e.$q.notify({message:"Please Enter The Check Code",icon:"close",color:"negative"}):(o["a"].set("openid",e.openid),r["a"].set("axios_check","false"),Object(i["e"])("staff/?staff_name="+e.login_name+"&check_code="+e.check_code).then((t=>{1===t.count&&(e.authin="1",e.login=!1,e.login_id=t.results[0].id,o["a"].set("auth","1"),o["a"].set("login_name",e.login_name),o["a"].set("login_id",t.results[0].id),o["a"].set("login_mode","user"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),localStorage.removeItem("menulink"),e.link="",e.$router.push({name:"web_index"}))})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})})))},adminLogin(){var e=this;e.adminlogin.name?e.adminlogin.password?(r["a"].set("axios_check","false"),Object(i["g"])("login/",e.adminlogin).then((t=>{"200"===t.code?(e.authin="1",e.login=!1,e.admin=!1,e.openid=t.data.openid,e.login_name=t.data.name,e.login_id=t.data.user_id,o["a"].set("auth","1"),o["a"].set("openid",t.data.openid),o["a"].set("login_name",e.login_name),o["a"].set("login_id",e.login_id),o["a"].set("login_mode","admin"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),localStorage.removeItem("menulink"),e.link="",e.$router.push({name:"web_index"})):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))):e.$q.notify({message:"Please enter the admin password",icon:"close",color:"negative"}):e.$q.notify({message:"Please enter the admin name",color:"negative",icon:"close"})},Logout(){var e=this;e.authin="0",e.login_name="",o["a"].remove("auth"),r["a"].remove("axios_check"),o["a"].set("login_name",""),o["a"].set("login_id",""),e.$q.notify({message:"Success Logout",icon:"check",color:"negative"}),localStorage.removeItem("menulink"),e.link="",e.$router.push({name:"web_index"})},Register(){var e=this;r["a"].set("axios_check","false"),Object(i["g"])("register/",e.registerform).then((t=>{"200"===t.code?(e.register=!1,e.openid=t.data.openid,e.login_name=e.registerform.name,e.login_id=t.data.user_id,e.authin="1",o["a"].set("openid",t.data.openid),o["a"].set("login_name",e.registerform.name),o["a"].set("login_id",e.login_id),o["a"].set("auth","1"),e.registerform={name:"",password1:"",password2:""},e.$q.notify({message:t.msg,icon:"check",color:"green"}),e.staffType(),localStorage.removeItem("menulink"),e.link="",e.$router.push({name:"web_index"})):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},staffType(){var e=this;Object(i["e"])("staff/?staff_name="+e.login_name).then((e=>{o["a"].set("staff_type",e.results[0].staff_type)}))},initWebSocket(){var e=this;n=new WebSocket(i["l"]+"?sender="+e.login_name+"&receiver="+e.receiver+"&openid="+e.openid),n.onmessage=e.websocketonmessage,n.onopen=e.websocketonopen,n.onerror=e.websocketonerror,n.onclose=e.websocketclose},websocketonopen(){console.log("Success Connect")},websocketonerror(){var e=this;e.initWebSocket()},websocketonmessage(e){var t=this;r["a"].getItem("receiver")===JSON.parse(e.data).sender&&t.chat_list.push(JSON.parse(e.data)),t.Readnum(),t.$q.notify({message:JSON.parse(e.data).sender+" Send you a message",color:"deep-purple",icon:"textsms",position:"right",actions:[{label:"View",color:"yellow",handler:()=>{t.ChatWith(JSON.parse(e.data).sender)}}]})},websocketsend(){var e=this;""!==e.chat_text&&(n.send(e.chat_text),e.chat_list.push({sender:e.sender+"-"+e.openid,receiver:e.receiver,detail:e.chat_text,create_time:s["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}),e.chat_text="")},websocketclose(e){console.log("Disconnect",e)},ChatWith(e){var t=this;t.sender=t.login_name,t.receiver=e,r["a"].set("receiver",e),t.sender===t.receiver?t.$q.notify({message:"Cannot Chat with yourself",icon:"close",color:"negative"}):(t.chat=!0,t.chat_text="",t.initWebSocket(),Object(i["e"])("chat/?sender="+t.sender+"&receiver="+t.receiver).then((e=>{t.chat_list=e.results.reverse(),t.Readnum(),t.chat_next=e.next})).catch((e=>{console.log(e),t.$q.notify({message:e.detail,icon:"close",color:"negative"})})))},LoadChatList(){var e=this;Object(i["e"])(e.chat_next).then((t=>{t.results.forEach((t=>{e.chat_list.unshift(t)})),e.chat_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ChatClose(){var e=this;e.receiver="",r["a"].set("receiver",""),e.chat_list=[],e.chat_text="",e.chat_next=null},Readnum(){var e=this;Object(i["e"])("chat/read/?sender="+e.login_name).then((t=>{e.read_previous=t.previous,e.read_next=t.next,e.read_list=t.results,e.read_num=t.count})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ReadnumPrevious(){var e=this;Object(i["e"])(e.read_previous,{}).then((t=>{e.read_list=t.results,e.read_previous=t.previous,e.read_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ReadnumNext(){var e=this;Object(i["e"])(e.read_next,{}).then((t=>{e.read_list=t.results,e.read_previous=t.previous,e.read_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend(){var e=this;e.friend=!0,Object(i["e"])("staff/",{}).then((t=>{e.friend_list=t.results,e.friend_previous=t.previous,e.friend_next=t.next,e.friend_num=t.count})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend_previous(){var e=this;Object(i["e"])(e.friend_previous,{}).then((t=>{e.friend_list=t.results,e.friend_previous=t.previous,e.friend_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},Friend_next(){var e=this;Object(i["e"])(e.friend_next,{}).then((t=>{e.friend_list=t.results,e.friend_previous=t.previous,e.friend_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},langChange(e){var t=this;t.lang=e,window.setTimeout((()=>{location.reload()}),1)},NewVersionignore(){var e=this;e.verCheck=!1,e.version=""},NewVersionDownload(){var e=this;e.version="",a("bdb9").ipcRenderer.send("downloadUpdate"),console.log(e.processpercent),100===e.processpercent?(e.verCheck=!1,e.downloadprocess=!1):e.downloadprocess=!0},NewVersionUpdate(){var e=this;a("bdb9").ipcRenderer.send("updateNow"),e.updateNow=!1},isLoggedIn(){this.$q.localStorage.getItem("openid")?this.login=!0:this.register=!0}},created(){var e=this;o["a"].has("openid")?(e.openid=o["a"].getItem("openid"),e.activeTab=o["a"].getItem("login_mode")):(e.openid="",o["a"].set("openid","")),o["a"].has("login_name")?e.login_name=o["a"].getItem("login_name"):(e.login_name="",o["a"].set("login_name","")),o["a"].has("auth")?(e.authin="1",e.initWebSocket(),e.staffType(),e.Readnum()):(o["a"].set("staff_type","Admin"),e.authin="0",e.isLoggedIn())},mounted(){var t=this;t.link=localStorage.getItem("menulink"),c["b"].is.electron&&o["a"].has("openid")&&Object(i["k"])("vcheck/?openid="+o["a"].getItem("openid")+"&platform="+e.platform).then((e=>{if(!e.detail){const n=a("bdb9").ipcRenderer;window.setTimeout((()=>{n.send("checkForUpdate",e.upurl.toString())}),1e3),n.on("message",((e,a)=>{"update-available"===a.cmd?(t.verCheck=!0,t.version=a.message.version):"download-progress"===a.cmd?t.processpercent=a.message.percent:"update-downloaded"===a.cmd?(t.processpercent=100,t.verCheck=!1,t.downloadprocess=!1,t.updateNow=!0):"check"===a.cmd&&console.log(a)})),clearTimeout()}})).catch((e=>{console.log(e)})),d["a"].$on("needLogin",(e=>{t.isLoggedIn()}))},updated(){document.getElementById("chat_scroll")?document.getElementById("chat_scroll").scrollTop=document.getElementById("chat_scroll").scrollHeight:document.getElementById("m_chat_scroll")&&(document.getElementById("m_chat_scroll").scrollTop=document.getElementById("m_chat_scroll").scrollHeight)},beforeDestroy(){c["b"].is.electron&&a("bdb9").ipcRenderer.removeAllListeners(["message","updateNow","downloadUpdate","checkForUpdate"]),d["a"].$off("needLogin")},destroyed(){n&&n.readyState===n.OPEN&&n.close()},watch:{lang(e){var t=this;o["a"].set("lang",e),t.$i18n.locale=e},login(e){e&&("admin"===this.activeTab?this.admin=!0:this.admin=!1)}}}}).call(this,a("4362"))},2588:function(e,t,a){},"2da0":function(e,t,a){"use strict";a("2588")},"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{style:{height:e.$q.screen.height,width:e.$q.screen.width},attrs:{view:"hHh LpR fFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:""}},[a("q-toolbar",{staticClass:"main-headers text-white shadow-18 rounded-borders"},[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawerleft=!e.drawerleft}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.hide_menu")))])],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-toolbar-title",{staticClass:"text-weight-bold",attrs:{shrink:""}},[e._v(e._s(e.$t("index.title")))])],1),a("q-space"),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{icon:"api",round:"",dense:"",flat:""},on:{click:function(t){return e.apiLink()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.api")))])],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{icon:"img:statics/icons/GitHub.png",round:"",dense:"",flat:""},on:{click:function(t){return e.brownlink("https://github.com/Singosgu/GreaterWMS")}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v("GitHub Link")])],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"translate"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.translate")))]),a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.langOptions,(function(t,n){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:n,attrs:{clickable:""},on:{click:function(a){return e.langChange(t.value)}}},[a("q-item-section",[e._v(e._s(t.label))])],1)})),1)],1)],1)],1),a("q-separator",{attrs:{vertical:""}}),"1"===e.authin?[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"notifications"},on:{click:function(t){e.read=!0}}},[e.read_num?a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[e._v(e._s(e.read_num))]):e._e(),a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.unread")))])],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn-dropdown",{attrs:{stretch:"",flat:"",color:"white-8",icon:"account_circle"},on:{click:function(t){e.chat=!1}}},[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column",staticStyle:{width:"150px"}},[a("div",{staticClass:"text-h6 q-mb-md"},[e._v("\n                  "+e._s(e.$t("index.user_center"))+"\n                ")]),a("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.change_user")},on:{click:function(t){e.login=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.change_user")))])],1),a("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.view_my_openid")},on:{click:function(t){e.authid=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.view_my_openid")))])],1),a("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.contact_list")},on:{click:function(t){return e.Friend()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.contact_list")))])],1)],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column items-center"},[a("q-avatar",{attrs:{size:"72px"}},[a("q-img",{attrs:{src:"statics/staff/stafftype.png"}})],1),a("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[e._v("\n                  "+e._s(e.login_name)+"\n                ")]),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary",label:e.$t("index.logout"),push:"",size:"sm",icon:"img:statics/icons/logout.png"},on:{click:function(t){return e.Logout()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.logout")))])],1)],1)],1)])],1)]:e._e(),"0"===e.authin?[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.login"),color:"primary"},on:{click:function(t){e.login=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.login_tip")))])],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[a("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.register"),color:"primary"},on:{click:function(t){e.register=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.register_tip")))])],1)],1)]:e._e()],2)],1),a("q-drawer",{attrs:{"show-if-above":"",width:200,breakpoint:500,bordered:"","content-class":"bg-grey-3 shadow-24"},model:{value:e.drawerleft,callback:function(t){e.drawerleft=t},expression:"drawerleft"}},[a("q-scroll-area",{staticClass:"fit",staticStyle:{"overflow-y":"auto"}},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"outbounddashboard"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"outbounddashboard"},exact:"",active:"outbounddashboard"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("outbounddashboard")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"auto_graph"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.dashboard")))])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"inbound"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"asn"},exact:"",active:"inbound"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("inbound")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"speaker_notes"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.inbound")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"outbound"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"dn"},exact:"",active:"outbound"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("outbound")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"rv_hookup"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.outbound")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"stock"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"stocklist"},exact:"",active:"stock"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("stock")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"multiline_chart"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.stock")))])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"finance"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"capitallist"},exact:"",active:"finance"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("finance")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"devices_other"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.finance")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"goods"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"goodslist"},exact:"",active:"goods"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("goods")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"shop_two"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.goods")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"baseinfo"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"company"},exact:"",active:"baseinfo"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("baseinfo")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"info"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.baseinfo")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"warehouse"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"warehouseset"},exact:"",active:"warehouse"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("warehouse")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"settings"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.warehouse")))])],1),a("q-separator"),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"staff"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"stafflist"},exact:"",active:"staff"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("staff")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"assignment_ind"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.staff")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"driver"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"driverlist"},exact:"",active:"driver"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("driver")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"transfer_within_a_station"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.driver")))])],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:0===e.device,expression:"device === 0"}]}),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"uploadcenter"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"initializeupload"},exact:"",active:"uploadcenter"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("uploadcenter")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"file_upload"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.uploadcenter")))])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"downloadcenter"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"downloadinbound"},exact:"",active:"downloadcenter"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("downloadcenter")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"file_download"}})],1),a("q-item-section",[e._v(e._s(e.$t("menuItem.downloadcenter")))])],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:"zh-hans"===e.lang,expression:"lang === 'zh-hans'"}]}),a("q-item",{directives:[{name:"show",rawName:"v-show",value:"zh-hans"===e.lang,expression:"lang === 'zh-hans'"},{name:"ripple",rawName:"v-ripple"}],class:{"my-menu-link":"shopid"===e.link&&""!==e.link},attrs:{clickable:"",to:{name:"douyin"},exact:"",active:"shopid"===e.link&&""!==e.link},on:{click:function(t){return e.linkChange("shopid")}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"img:statics/shopid/ecomments.png"}})],1),a("q-item-section",[e._v("电商店铺")])],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:"zh-hans"===e.lang,expression:"lang === 'zh-hans'"}]})],1)],1)],1),a("q-page-container",{staticClass:"main-page",style:{height:e.container_height,width:e.$q.screen.width}},[a("router-view")],1),a("q-dialog",{model:{value:e.chat,callback:function(t){e.chat=t},expression:"chat"}},[a("q-card",{staticStyle:{width:"600px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.receiver))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"},on:{click:function(t){return e.ChatClose()}}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"},attrs:{id:"chat_scroll"}},[[a("div",{staticClass:"q-pa-md row justify-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.chat_next,expression:"chat_next !== null"}],attrs:{flat:"",rounded:"",label:e.$t("index.chat_more")},on:{click:function(t){return e.LoadChatList()}}}),a("div",{staticStyle:{width:"100%"}},[a("q-chat-message",{directives:[{name:"show",rawName:"v-show",value:null===e.chat_next,expression:"chat_next === null"}],attrs:{label:e.$t("index.chat_no_more")}}),e._l(e.chat_list,(function(t){return a("div",{key:t.id},[t.sender===e.sender+"-"+e.openid?a("q-chat-message",{attrs:{name:e.sender,text:[t.detail],"bg-color":"light-green-4","name-sanitize":"",sent:"","text-sanitize":""}}):a("q-chat-message",{attrs:{name:e.receiver,text:[t.detail],"text-sanitize":"","name-sanitize":"","bg-color":"grey-4"}})],1)}))],2)],1)]],2),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-input",{staticClass:"bg-white col",attrs:{autofocus:"",dense:"",outlined:"",square:"",placeholder:"Send Message"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.websocketsend()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.ChatClose()}]},model:{value:e.chat_text,callback:function(t){e.chat_text=t},expression:"chat_text"}}),a("q-btn",{attrs:{flat:"",label:e.$t("index.chat_send"),color:"primary"},on:{click:function(t){return e.websocketsend()}}})],1)],1)],1),a("q-dialog",{attrs:{position:"right"},model:{value:e.read,callback:function(t){e.read=t},expression:"read"}},[a("q-card",{staticStyle:{width:"300px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.unread"))+"("+e._s(e.read_num)+")")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"}},[a("q-list",e._l(e.read_list,(function(t){return a("div",{key:t.id},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{on:{click:function(a){e.ChatWith(t.sender.split("-")[0])}}},[e._v(e._s(t.sender.split("-")[0]))]),a("q-item-label",{attrs:{caption:"",lines:"2"},on:{click:function(a){e.ChatWith(t.sender.split("-")[0])}}},[e._v(e._s(t.detail))])],1)],1)],1)})),0)],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.read_num>30,expression:"read_num > 30"}]}),a("q-card-actions",{attrs:{align:"left"}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.read_previous,expression:"read_previous !== null"}],attrs:{flat:"",label:e.$t("index.previous"),color:"primary"},on:{click:function(t){return e.ReadnumPrevious()}}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.read_next,expression:"read_next !== null"}],attrs:{flat:"",label:e.$t("index.next"),color:"primary"},on:{click:function(t){return e.ReadnumNext()}}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.authid,callback:function(t){e.authid=t},expression:"authid"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.your_openid")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"q-pt-md"},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Openid",readonly:""},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}})],1)],1)],1),a("q-dialog",{attrs:{position:"right"},model:{value:e.friend,callback:function(t){e.friend=t},expression:"friend"}},[a("q-card",{staticStyle:{width:"300px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.contact_list"))+"("+e._s(e.friend_num)+")")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v("关闭")])],1)],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.$q.platform.is.desktop,expression:"$q.platform.is.desktop"}]}),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"}},[a("q-list",[e._l(e.friend_list,(function(t){return[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.id,attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{on:{click:function(a){return e.ChatWith(t.staff_name)}}},[e._v(e._s(t.staff_name))])],1)],1)]}))],2)],1),a("q-separator",{directives:[{name:"show",rawName:"v-show",value:e.friend_num>30,expression:"friend_num > 30"}]}),a("q-card-actions",{attrs:{align:"left"}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.friend_previous,expression:"friend_previous !== null"}],attrs:{flat:"",label:e.$t("index.previous"),color:"primary"},on:{click:function(t){return e.Friend_previous()}}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.friend_next,expression:"friend_next !== null"}],attrs:{flat:"",label:e.$t("index.next"),color:"primary"},on:{click:function(t){return e.Friend_next()}}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("q-tabs",{staticClass:"tabs",model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("q-tab",{attrs:{name:"user"},on:{click:function(t){e.admin=!1}}},[e._v("\n            "+e._s(e.$t("index.user_login"))+"\n            "),a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.user_login")))])],1),a("q-tab",{attrs:{name:"admin"},on:{click:function(t){e.admin=!0}}},[e._v("\n            "+e._s(e.$t("index.admin_login"))+"\n            "),a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.admin_login")))])],1)],1),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"q-pt-md"},[e.admin?[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.admin_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},model:{value:e.adminlogin.name,callback:function(t){e.$set(e.adminlogin,"name",t)},expression:"adminlogin.name"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.adminlogin.password,callback:function(t){e.$set(e.adminlogin,"password",t)},expression:"adminlogin.password"}})]:e._e(),e.admin?e._e():[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.your_openid")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.login_name,callback:function(t){e.login_name=t},expression:"login_name"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("staff.check_code"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.check_code,callback:function(t){e.check_code=e._n(t)},expression:"check_code"}})]],2),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"left"}},[a("q-space"),[a("q-btn",{staticStyle:{"font-size":"16px",margin:"0 8px",width:"100%"},attrs:{color:"primary",label:e.$t("index.login")},on:{click:function(t){e.admin?e.adminLogin():e.Login()}}})],a("div",{staticClass:"q-mx-auto"},[a("q-btn",{staticClass:"text-teal-4 q-mt-sm",attrs:{flat:""},on:{click:function(t){e.login=!1,e.register=!0}}},[e._v("\n            "+e._s(e.$t("index.register_tip"))+"\n          ")])],1)],2)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.register,callback:function(t){e.register=t},expression:"register"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.register_tip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"q-pt-md"},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name"),autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},model:{value:e.registerform.name,callback:function(t){e.$set(e.registerform,"name",t)},expression:"registerform.name"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.registerform.password1,callback:function(t){e.$set(e.registerform,"password1",t)},expression:"registerform.password1"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.confirm_password"),type:e.isPwd2?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd2?"visibility_off":"visibility"},on:{click:function(t){e.isPwd2=!e.isPwd2}}})]},proxy:!0}]),model:{value:e.registerform.password2,callback:function(t){e.$set(e.registerform,"password2",t)},expression:"registerform.password2"}})],1),a("q-card-actions",{staticClass:"text-primary q-mx-sm",attrs:{align:"right"}},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:e.$t("index.register")},on:{click:function(t){return e.Register()}}})],1),a("q-card-actions",{staticStyle:{"margin-top":"-8px"},attrs:{align:"center"}},[a("q-btn",{staticClass:"text-teal-4",attrs:{flat:"",label:e.$t("index.return_to_login")},on:{click:function(t){e.login=!0,e.register=!1}}})],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up",persistent:""},model:{value:e.verCheck,callback:function(t){e.verCheck=t},expression:"verCheck"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.updatetitle")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"},on:{click:function(t){return e.NewVersionignore()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"q-pt-md"},[e._v(e._s(e.version)+" "+e._s(e.$t("index.updatedesc")))]),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.downloadprocess,expression:"!downloadprocess"},{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$t("index.cancel")},on:{click:function(t){return e.NewVersionignore()}}}),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.downloadprocess,expression:"!downloadprocess"}],attrs:{color:"primary",label:e.$t("index.download")},on:{click:function(t){return e.NewVersionDownload()}}}),a("q-linear-progress",{directives:[{name:"show",rawName:"v-show",value:e.downloadprocess,expression:"downloadprocess"}],attrs:{size:"25px",value:e.processpercent/100,color:"accent"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:e.processpercent.toFixed(2)+"%"}})],1)])],1)],1)],1),a("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up",persistent:""},model:{value:e.updateNow,callback:function(t){e.updateNow=t},expression:"updateNow"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("index.updatetitle")))]),a("q-space")],1),a("q-card-section",{staticClass:"q-pt-md"},[e._v(e._s(e.version)+" "+e._s(e.$t("index.updatedesc")))]),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{attrs:{color:"primary",label:e.$t("index.update")},on:{click:function(t){return e.NewVersionUpdate()}}})],1)],1)],1)],1)},i=[],s=a("235f"),o=s["a"],r=(a("2da0"),a("42e1")),l=a("4d5a"),c=a("e359"),d=a("65c6"),p=a("9c40"),m=a("05c0"),u=a("6ac5"),h=a("2c91"),g=a("4e73"),v=a("1c1c"),f=a("66e5"),b=a("4074"),_=a("eb85"),k=a("58a8"),x=a("f20b"),w=a("cb32"),q=a("068f"),y=a("9404"),$=a("4983"),C=a("0016"),S=a("09e3"),N=a("24e8"),I=a("f09f"),z=a("d847"),O=a("a370"),L=a("8169"),Q=a("4b7e"),j=a("27f9"),P=a("0170"),E=a("429b"),T=a("7460"),R=a("6b1d"),D=a("7f67"),F=a("714f"),W=a("eebe"),B=a.n(W),H=Object(r["a"])(o,n,i,!1,null,null,null);t["default"]=H.exports;B()(H,"components",{QLayout:l["a"],QHeader:c["a"],QToolbar:d["a"],QBtn:p["a"],QTooltip:m["a"],QToolbarTitle:u["a"],QSpace:h["a"],QMenu:g["a"],QList:v["a"],QItem:f["a"],QItemSection:b["a"],QSeparator:_["a"],QBadge:k["a"],QBtnDropdown:x["a"],QAvatar:w["a"],QImg:q["a"],QDrawer:y["a"],QScrollArea:$["a"],QIcon:C["a"],QPageContainer:S["a"],QDialog:N["a"],QCard:I["a"],QBar:z["a"],QCardSection:O["a"],QChatMessage:L["a"],QCardActions:Q["a"],QInput:j["a"],QItemLabel:P["a"],QTabs:E["a"],QTab:T["a"],QLinearProgress:R["a"]}),B()(H,"directives",{ClosePopup:D["a"],Ripple:F["a"]})}}]);