(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resume"],{"1a70":function(t,e,a){"use strict";a("b3e3")},"1ba2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{staticClass:"hau hau-resume-wrapper",attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{md10:"",sm12:""}},[t.studentData?a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md4:""}},[a("sidebar-container",{staticClass:"fill-height",attrs:{studentData:t.studentData}})],1),a("v-flex",{attrs:{md8:""}},[a("content-container",{staticClass:"fill-height",attrs:{studentData:t.studentData}})],1)],1):t._e()],1)],1)],1)},i=[],s=(a("ac1f"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("ac32")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"grey darken-3",dark:""}},[a("v-card-text",[a("avatar"),a("div",{staticClass:"text-sm-center mb-4 mt-3"},[a("h1",[t._v(" "+t._s(t.studentData.firstName)+" "),a("span",{staticClass:"light-blue--text text--lighten-3"},[t._v(" "+t._s(t.studentData.lastName)+" ")])])]),a("sidebar-section",{attrs:{options:t.infoSection}}),a("sidebar-section",{attrs:{options:t.socialsSection}}),a("sidebar-section",{attrs:{options:t.hobbiesSection},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[a("v-chip",{staticClass:"mr-1 mb-1"},[a("v-avatar",{staticClass:"mr-1"},[a("v-icon",[t._v(" "+t._s(n.icon)+" ")])],1),t._v(" "+t._s(n.text)+" ")],1)]}}])}),a("sidebar-section",{attrs:{options:t.languages},scopedSlots:t._u([{key:"items",fn:function(e){var n=e.items;return[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{staticClass:"text-xs-center",attrs:{wrap:""}},[t._l(n,(function(e,n){return[a("v-chip",{key:n,staticClass:"mr-1 mb-1"},[t._v(" "+t._s(e.text)+" ")])]}))],2)],1)]}}])})],1)],1)},o=[],c=a("6b75");function l(t){if(Array.isArray(t))return Object(c["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function u(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var d=a("06c5");a("d9e2");function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t){return l(t)||u(t)||Object(d["a"])(t)||f()}var m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-md-center"},[a("v-avatar",{attrs:{color:"grey lighten-4",size:"120"}},[a("img",{attrs:{src:t.publicPath("/img/avatar.jpg")}})])],1)},p=[],h={name:"Avatar"},b=h,_=a("2877"),g=a("6544"),x=a.n(g),y=a("5530"),S=(a("a9e3"),a("3408"),a("a9ad")),C=a("24b2"),k=a("a236"),w=a("80d2"),D=a("58df"),O=Object(D["a"])(S["a"],C["a"],k["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(y["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(y["a"])({height:Object(w["d"])(this.size),minWidth:Object(w["d"])(this.size),width:Object(w["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),E=Object(_["a"])(b,m,p,!1,null,"f28a7648",null),V=E.exports;x()(E,{VAvatar:O});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-4"},[a("div",{staticClass:"title mb-3"},[t._v(" "+t._s(t.options.title)+" ")]),t.$slots.default?t._t("default"):t.$scopedSlots.items?[t._t("items",null,{items:t.options.items})]:t.$scopedSlots.item?[t._l(t.options.items,(function(e){return t._t("item",null,{item:e})}))]:t._l(t.options.items,(function(t,e){return a("sidebar-section-item",{key:e,attrs:{item:t}})}))],2)},I=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[t.hasIcon?a("v-flex",{attrs:{xs2:""}},[a("v-icon",[t._v(" "+t._s(t.item.icon)+" ")])],1):t._e(),a("v-flex",{attrs:{xs10:t.hasIcon,xs12:!t.hasIcon}},[a("div",[t._v(" "+t._s(t.item.name)+" ")]),a("p",[t.item.link?a("a",{staticClass:"grey--text",attrs:{href:t.item.link,target:"_blank"}},[t._v(" "+t._s(t.item.text)+" ")]):a("span",{staticClass:"grey--text"},[t._v(" "+t._s(t.item.text)+" ")])])])],1)},$=[],R={name:"SidebarSectionItem",props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return!!this.item.icon}}},T=R,L=(a("20f6"),a("e8f2")),N=Object(L["a"])("flex"),z=a("132d"),B=Object(L["a"])("layout"),q=Object(_["a"])(T,A,$,!1,null,"3eb3b988",null),F=q.exports;x()(q,{VFlex:N,VIcon:z["a"],VLayout:B});var G={name:"SidebarSection",components:{SidebarSectionItem:F},props:{options:{type:Object,default:function(){}}}},M=G,P=(a("5640"),Object(_["a"])(M,j,I,!1,null,"67133aa2",null)),U=P.exports,Y={name:"Sidebar",props:{studentData:{type:Object,required:!0}},components:{SidebarSection:U,Avatar:V},data:function(){return{}},computed:{infoSection:function(){var t={title:"INFO",items:[]};return t.items.push({name:"Email",icon:"mdi-email",text:this.studentData.email}),t},socialsSection:function(){var t={title:"SOCIALS",items:[]};return t.items.push({name:"Github",icon:"mdi-github",text:"View in Github",link:this.studentData.github}),t.items.push({name:"LinkedIn",icon:"mdi-linkedin",text:"View in LinkedIn",link:this.studentData.linkedin}),t.items.push({name:"Twitter",icon:"mdi-twitter",text:"View in Twitter",link:this.studentData.twitter}),t.items.push({name:"Stack Overflow",icon:"mdi-stack-overflow",text:"View in Stack Overflow",link:this.studentData.stackOverflow}),t},hobbiesSection:function(){var t,e={title:"HOBBIES",items:[]};this.studentData&&this.studentData.hobbies&&this.studentData.hobbies.length>0&&(t=e.items).push.apply(t,v(this.studentData.hobbies));return e},languages:function(){var t,e={title:"LANGUAGES",items:[]};this.studentData&&this.studentData.languages&&this.studentData.languages.length>0&&(t=e.items).push.apply(t,v(this.studentData.languages));return e}}},J=Y,K=(a("1a70"),a("b0af")),H=a("99d9"),W=a("cc20"),Q=a("a523"),X=Object(_["a"])(J,r,o,!1,null,"b2d343b6",null),Z=X.exports;x()(X,{VAvatar:O,VCard:K["a"],VCardText:H["b"],VChip:W["a"],VContainer:Q["a"],VIcon:z["a"],VLayout:B});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{color:"grey lighten-4",light:""}},[a("v-card-text",[a("content-section",{attrs:{title:"Objectives"}},[t._v(" "+t._s(t.studentData.objectives)+" ")]),t.studentData.educations?a("content-section",{attrs:{title:"Education"}},t._l(t.studentData.educations,(function(e,n){return a("v-layout",{key:n},[a("v-flex",{attrs:{md4:""}},[t._v(" "+t._s(e.from)+" - "+t._s(e.to)+" ")]),a("v-flex",{attrs:{md8:""}},[e.title?a("strong",[t._v(t._s(e.title))]):t._e(),e.location?a("div",[a("i",[t._v(t._s(e.location))])]):t._e(),e.description?a("div",[t._v(" "+t._s(e.description)+" ")]):t._e()])],1)})),1):t._e(),t.studentData.skills?a("content-section",{attrs:{id:"to-timeline",title:"Skills"}},[a("template",{slot:"actions"}),a("v-layout",{attrs:{wrap:""}},[t._l(t.studentData.skills,(function(e,n){return[e.divider?a("v-flex",{key:n+"-div",attrs:{md12:"",xs12:"","mb-4":""}}):a("v-flex",{key:n+"-content",attrs:{md6:"",xs12:""}},[a("div",{staticClass:"mr-2 ml-2"},[a("div",{staticClass:"align-center"},[a("v-icon",{attrs:{small:""}},[t._v(" "+t._s(e.icon)+" ")]),t._v(" "+t._s(e.name)+" ")],1),a("v-progress-linear",{staticClass:"progress",attrs:{color:"secondary",height:"3",value:e.value}})],1)])]}))],2)],2):t._e(),t.studentData.experiences?a("content-section",{attrs:{title:"My Experiences"}},t._l(t.studentData.experiences,(function(e,n){return a("v-layout",{key:n},[a("v-flex",{attrs:{md4:""}},[t._v(" "+t._s(e.from)+" - "+t._s(e.to)+" ")]),a("v-flex",{attrs:{md8:""}},[e.title?a("strong",[t._v(t._s(e.title))]):t._e(),e.location?a("div",[a("i",[t._v(t._s(e.location))])]):t._e(),e.description?a("div",[t._v(" "+t._s(e.description)+" ")]):t._e()])],1)})),1):t._e(),a("content-section",[a("i",[t._v(' I hereby certify that the above Information is true and correct to the best of my knowledge and belief". ')])]),a("content-section",[a("center",[a("b",[a("u",[t._v(t._s(t.studentData.lastName+", "+t.studentData.firstName))])])]),a("center",[a("i",[t._v("Applicant")])])],1)],1)],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h3",{staticClass:"title font-weight-light mb-1"},[t._v(" "+t._s(t.title)+" ")]),a("v-spacer"),t._t("actions")],2),a("v-card-text",[t._t("default")],2)],1)},nt=[],it={name:"ContentSection",components:{},props:{title:{type:String,default:""}}},st=it,rt=(a("5eef"),a("2fa4")),ot=Object(_["a"])(st,at,nt,!1,null,"6fcb1ac6",null),ct=ot.exports;x()(ot,{VCard:K["a"],VCardText:H["b"],VCardTitle:H["c"],VSpacer:rt["a"]});var lt={name:"MainContent",components:{ContentSection:ct},props:{studentData:{type:Object,required:!0}}},ut=lt,dt=(a("1da0"),a("8e36")),ft=Object(_["a"])(ut,tt,et,!1,null,"7572ac64",null),vt=ft.exports;function mt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;t=t.replace(/[\\[\]]/g,"\\$&");var a=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),n=a.exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}x()(ft,{VCard:K["a"],VCardText:H["b"],VFlex:N,VIcon:z["a"],VLayout:B,VProgressLinear:dt["a"]});var pt={components:{SidebarContainer:Z,ContentContainer:vt},data:function(){return{id:0,studentName:"",studentData:null}},mounted:function(){this.id=parseInt(mt("id"));var t=Object(s["a"])(this.id);this.studentData=t}},ht=pt,bt=(a("24cf"),Object(_["a"])(ht,n,i,!1,null,null,null));e["default"]=bt.exports;x()(bt,{VContainer:Q["a"],VFlex:N,VLayout:B})},"1da0":function(t,e,a){"use strict";a("4cf4")},"24cf":function(t,e,a){"use strict";a("44e6")},"2c3e":function(t,e,a){var n=a("da84"),i=a("83ab"),s=a("9f7f").MISSED_STICKY,r=a("c6b6"),o=a("9bf2").f,c=a("69f3").get,l=RegExp.prototype,u=n.TypeError;i&&s&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},3408:function(t,e,a){},"44e6":function(t,e,a){},"4cf4":function(t,e,a){},"4d63":function(t,e,a){var n=a("83ab"),i=a("da84"),s=a("e330"),r=a("94ca"),o=a("7156"),c=a("9112"),l=a("9bf2").f,u=a("241c").f,d=a("3a9b"),f=a("44e7"),v=a("577e"),m=a("ad6d"),p=a("9f7f"),h=a("6eeb"),b=a("d039"),_=a("1a2d"),g=a("69f3").enforce,x=a("2626"),y=a("b622"),S=a("fce3"),C=a("107c"),k=y("match"),w=i.RegExp,D=w.prototype,O=i.SyntaxError,E=s(m),V=s(D.exec),j=s("".charAt),I=s("".replace),A=s("".indexOf),$=s("".slice),R=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,L=/a/g,N=new w(T)!==T,z=p.MISSED_STICKY,B=p.UNSUPPORTED_Y,q=n&&(!N||z||S||C||b((function(){return L[k]=!1,w(T)!=T||w(L)==L||"/a/i"!=w(T,"i")}))),F=function(t){for(var e,a=t.length,n=0,i="",s=!1;n<=a;n++)e=j(t,n),"\\"!==e?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),i+=e):i+="[\\s\\S]":i+=e+j(t,++n);return i},G=function(t){for(var e,a=t.length,n=0,i="",s=[],r={},o=!1,c=!1,l=0,u="";n<=a;n++){if(e=j(t,n),"\\"===e)e+=j(t,++n);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:V(R,$(t,n+1))&&(n+=2,c=!0),i+=e,l++;continue;case">"===e&&c:if(""===u||_(r,u))throw new O("Invalid capture group name");r[u]=!0,s[s.length]=[u,l],c=!1,u="";continue}c?u+=e:i+=e}return[i,s]};if(r("RegExp",q)){for(var M=function(t,e){var a,n,i,s,r,l,u=d(D,this),m=f(t),p=void 0===e,h=[],b=t;if(!u&&m&&p&&t.constructor===M)return t;if((m||d(D,t))&&(t=t.source,p&&(e="flags"in b?b.flags:E(b))),t=void 0===t?"":v(t),e=void 0===e?"":v(e),b=t,S&&"dotAll"in T&&(n=!!e&&A(e,"s")>-1,n&&(e=I(e,/s/g,""))),a=e,z&&"sticky"in T&&(i=!!e&&A(e,"y")>-1,i&&B&&(e=I(e,/y/g,""))),C&&(s=G(t),t=s[0],h=s[1]),r=o(w(t,e),u?this:D,M),(n||i||h.length)&&(l=g(r),n&&(l.dotAll=!0,l.raw=M(F(t),a)),i&&(l.sticky=!0),h.length&&(l.groups=h)),t!==b)try{c(r,"source",""===b?"(?:)":b)}catch(_){}return r},P=function(t){t in M||l(M,t,{configurable:!0,get:function(){return w[t]},set:function(e){w[t]=e}})},U=u(w),Y=0;U.length>Y;)P(U[Y++]);D.constructor=M,M.prototype=D,h(i,"RegExp",M)}x("RegExp")},5640:function(t,e,a){"use strict";a("826a")},"5eef":function(t,e,a){"use strict";a("631e")},"631e":function(t,e,a){},"826a":function(t,e,a){},b3e3:function(t,e,a){},c607:function(t,e,a){var n=a("da84"),i=a("83ab"),s=a("fce3"),r=a("c6b6"),o=a("9bf2").f,c=a("69f3").get,l=RegExp.prototype,u=n.TypeError;i&&s&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})}}]);
//# sourceMappingURL=resume.9a1c1099.js.map