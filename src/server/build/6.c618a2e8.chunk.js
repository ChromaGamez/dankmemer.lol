(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,a){e.exports=a.p+"5295c2391f509827dfe95d73cbf4d072.png"},101:function(e,t,a){e.exports=a.p+"696461a621cfbcb8156457b741365a81.png"},102:function(e,t,a){e.exports=a.p+"2b8fa13b72cde5940407e101fb2e252d.gif"},103:function(e,t,a){e.exports=a.p+"b5bdba7c6cde4511a021c8c276861b0f.png"},104:function(e,t,a){e.exports=a.p+"0db60fcf17107d94fe2b26440bf88428.gif"},105:function(e,t,a){e.exports=a.p+"7dad32b9358fbe4630bc6031bfee4d47.gif"},117:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(0),r=a.n(n),c=({children:e})=>r.a.createElement("div",{className:"backdrop"},e),o=a(60);class i extends r.a.Component{render(){return r.a.createElement(c,null,r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-child"},this.props.component)),r.a.createElement(o.a,null))}}a(121);var s=a(19),d=a.n(s);const l=document.querySelector("#modals");function f(e){return d.a.render(r.a.createElement(i,{component:e}),l)}document.addEventListener("keydown",e=>{if("Escape"===e.code&&document.querySelector(".backdrop"))return d.a.unmountComponentAtNode(l)}),document.addEventListener("mousedown",e=>{if("modal"===e.target.className)return d.a.unmountComponentAtNode(l)})},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n),c=a(60),o=a(61),i=a(62),s=a(64);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function b({name:e,avatar:t,social:a,about:d}){const[f,b]=Object(n.useState)(d),[g,m]=Object(n.useState)(a);return r.a.createElement("div",{id:"edit-staff-modal"},r.a.createElement("h1",{id:"edit-staff-modal-title"},"Editing your staff card."),r.a.createElement("div",{id:"edit-staff-modal-content"},r.a.createElement("div",{id:"edit-staff-modal-content-preview"},r.a.createElement(o.a,{name:e,avatar:t,social:g,about:f}),r.a.createElement("span",{id:"edit-staff-modal-content-preview-save",onClick:()=>{s({url:`/api/${window.location.pathname.split("/")[1]}/staff`,method:"PUT",data:{about:f,socials:g}}).then(()=>{window.location.reload()}).catch(e=>{c.b.error("There was an issue while trying to update your staff card.",{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"noStaff"})})}},"Save changes")),r.a.createElement("div",{id:"edit-staff-modal-content-info"},r.a.createElement("textarea",{defaultValue:d,onChange:e=>b(e.target.value)}),Object.entries(i).map(([e,t],n)=>r.a.createElement("div",{className:"input-group",key:n},r.a.createElement("div",{className:"input-group-image",style:{backgroundImage:`url("${t}")`}}),r.a.createElement("input",{defaultValue:a[e]?a[e]:"",onChange:t=>((e,t)=>{if(t.length<1){const{[e]:t}=g,a=p(g,[e].map(u));return m(a)}m(l(l({},g),{},{[e]:t}))})(e,t.target.value)}))))))}},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a(64),i=a(60),s=(a(112),a(71)),d=(a(120),a(61)),l=a(117),f=a(122);t.default=Object(c.b)(e=>e.login,null)((function(e){const[t,a]=Object(n.useState)(!1),[c,p]=Object(n.useState)(0),[u,b]=Object(n.useState)(""),[g,m]=Object(n.useState)(""),[v,h]=Object(n.useState)(""),[E,y]=Object(n.useState)("");return Object(n.useEffect)(()=>{if(e.loggedIn&&e.isModerator&&a(!0),e.loggedIn&&!e.isModerator)return window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");e.loggedIn&&o("/api/staff?id="+e.id).then(({data:e})=>{e=e[0],b(e.name),m(e.about),h(e.avatar),y(e.social)}).catch(()=>i.b.dark("Your staff card data was not able to be shown.",{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"noStaff"}))},[e]),r.a.createElement("div",{id:"control"},t&&e.loggedIn?t?r.a.createElement("div",{id:"control-mods"},r.a.createElement("div",{id:"control-mods-header"},r.a.createElement("h1",{id:"control-mods-header-title"},"Hey, ",u),r.a.createElement("p",{id:"control-mods-header-note"},"This is your control panel. Here you can change the appearance of your staff card and get website related information regarding a user.")),r.a.createElement("div",{id:"control-mods-checker"},r.a.createElement("h3",{id:"control-mods-checker-title"},"Check website bans"),r.a.createElement("p",{id:"control-mods-checker-note"},"Quickly check to see if a user is website banned which may be restricting their access to specific parts of the website."),r.a.createElement("div",{id:"control-mods-checker-input"},r.a.createElement("label",{htmlFor:"checking"},"User ID"),r.a.createElement("input",{name:"checking",type:"text",onChange:e=>p(e.target.value)})),r.a.createElement("div",{id:"control-mods-checker-actions"},r.a.createElement("span",{id:"control-mods-checker-actions-submit",onClick:async()=>{try{let{data:e}=await o("/api/mods/checkBan?type=any&id="+c);e[0]?i.b.dark(r.a.createElement("p",null,r.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(233, 76, 88)"}},r.a.createElement("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})),r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"The user has ",1===e.length&&"appeal"===e[0]?"an ":"a ",e.join(" & ")," ban",1===e.length?"":"s",".")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"appealState"}):i.b.dark(r.a.createElement("p",null,r.a.createElement("svg",{viewBox:"0 0 16 16",fill:"currentColor",style:{display:"inline-block",verticalAlign:"middle",width:"20px",height:"20px",boxSizing:"border-box",margin:"10px",color:"rgb(50, 211, 139)"}},r.a.createElement("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})),r.a.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"This user has no website bans.")),{position:"top-right",autoClose:1e4,hideProgressBar:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"appealState"})}catch(e){console.error(e)}}},"Check user")))):"":r.a.createElement("div",{id:"control-login"},r.a.createElement("div",{id:"control-login-content"},r.a.createElement("h1",{id:"control-login-content-title"},"Restricted"),r.a.createElement("p",{id:"control-login-content-body"},"The page you are trying to access is restricted. Please login to continue"),r.a.createElement(s.a,null))),t?r.a.createElement("div",{id:"staff-card"},r.a.createElement(d.a,{name:u,about:g,social:E,avatar:v}),r.a.createElement("span",{id:"edit-staff-card",onClick:()=>Object(l.a)(r.a.createElement(f.a,{name:u,avatar:v,social:E,about:g}))},"Edit your staff card")):"",r.a.createElement(i.a,null))}))},47:function(e,t,a){e.exports=a.p+"f8389ca1a741a115313bede9ac02e2c0.svg"},48:function(e,t,a){e.exports=a.p+"ded344c86c35138f7e53c6225ed98816.svg"},49:function(e,t,a){e.exports=a.p+"9be66c09991347ecc68ec5063d920ab7.svg"},50:function(e,t,a){e.exports=a.p+"d8851beea04ea75ca3febac546828318.svg"},51:function(e,t,a){e.exports=a.p+"f7f02af468d2e829ae42eade5689accd.svg"},52:function(e,t,a){e.exports=a.p+"d219fc5e66cd2e90747714476d460f31.svg"},53:function(e,t,a){e.exports=a.p+"d567e9a616e39c0944842fbb4da9f516.svg"},54:function(e,t,a){e.exports=a.p+"ac7b60ebdb785a784e379362b3a0e1b2.svg"},55:function(e,t,a){e.exports=a.p+"68f7b9f66e8ba664e2adbe0b81c0c18f.svg"},56:function(e,t,a){e.exports=a.p+"6d2ab22bcdee8ba006102c0eb8ad5502.png"},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),c=(a(73),a(62)),o=a(66);const i=new Audio("/static/audio/uwu.wav");function s({name:e,avatar:t,social:a,about:n}){return r.a.createElement("div",{className:"staff-card"},r.a.createElement("div",{className:"staff-card-details"},r.a.createElement("img",{className:"staff-card-details-picture",src:t||o.a[e.toLowerCase().replace(/ /g,"-")],alt:e+"'s avatar",onClick:()=>{"Melmsie"===e?i.play():console.log("Go click Mel's avatar")}}),r.a.createElement("p",{className:"staff-card-details-name"},e),r.a.createElement("div",{className:"staff-card-details-about-container"},r.a.createElement("p",{className:n.length>120?"staff-card-details-about scroll":"staff-card-details-about",dangerouslySetInnerHTML:{__html:n}}))),r.a.createElement("div",{className:"staff-card-socials"},Object.entries(a).map(([t,a])=>r.a.createElement("a",{key:t,href:a},r.a.createElement("img",{className:"staff-card-socials-account",alt:`${e}'s ${t} link`,src:c[t]})))))}},62:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a.n(n);a.d(t,"Discord",(function(){return r.a}));var c=a(48),o=a.n(c);a.d(t,"Spotify",(function(){return o.a}));var i=a(49),s=a.n(i);a.d(t,"Twitter",(function(){return s.a}));var d=a(50),l=a.n(d);a.d(t,"Website",(function(){return l.a}));var f=a(51),p=a.n(f);a.d(t,"YouTube",(function(){return p.a}));var u=a(52),b=a.n(u);a.d(t,"GitHub",(function(){return b.a}));var g=a(53),m=a.n(g);a.d(t,"GitLab",(function(){return m.a}));var v=a(54),h=a.n(v);a.d(t,"Reddit",(function(){return h.a}));var E=a(55),y=a.n(E);a.d(t,"Twitch",(function(){return y.a}));var x=a(56),w=a.n(x);a.d(t,"Instagram",(function(){return w.a}))},66:function(e,t,a){"use strict";const n={},r=a(74);r.keys().map(e=>n[e.slice(2).split(".")[0]]=r(e)),t.a=n},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("a",{id:"discord--login",href:"/oauth/login?redirect="+window.location.pathname,rel:"noopener noreferrer"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",viewBox:"0 0 245 240"},r.a.createElement("path",{fill:"#ffffff",d:"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"}),r.a.createElement("path",{fill:"#ffffff",d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})),"Login with Discord")}},73:function(e,t,a){},74:function(e,t,a){var n={"./2pumpchump.png":75,"./abaddon.gif":76,"./aerielle.png":77,"./aetheryx.png":78,"./aiphey.png":79,"./auxim.gif":80,"./blair.gif":81,"./cece.gif":82,"./dauntless.jpg":83,"./devoxin.jpg":84,"./duckysoren.gif":85,"./faith.png":86,"./gxbriel.jpg":87,"./inblue.png":88,"./julia.png":89,"./kable-kompany.gif":90,"./melmsie.png":91,"./mistress-red.jpg":92,"./nunca.jpg":93,"./reese.png":94,"./samantha.gif":95,"./shiiiitak\xeb.png":96,"./sinister.png":97,"./smile.jpg":98,"./spurkeh.gif":99,"./terrarian.png":100,"./theprodigyhenry.png":101,"./tintin.gif":102,"./toto.png":103,"./xfastx.gif":104,"./yeng.gif":105};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=74},75:function(e,t,a){e.exports=a.p+"fee51643e2bb31af0780c1c8bb63aef4.png"},76:function(e,t,a){e.exports=a.p+"3adc385d31cd711ff1925738b25e5d2e.gif"},77:function(e,t,a){e.exports=a.p+"712bb3d47f2427cbeabf1f596f66be36.png"},78:function(e,t,a){e.exports=a.p+"7fbdb76a544220a0c7c6798f8bea1023.png"},79:function(e,t,a){e.exports=a.p+"4795fc64832831dc9c571728aafad65f.png"},80:function(e,t,a){e.exports=a.p+"9dedba447b4a9a15a3ad2595e9745992.gif"},81:function(e,t,a){e.exports=a.p+"6a8764fd3ab02420b6ed7c3b27a47ac4.gif"},82:function(e,t,a){e.exports=a.p+"43d06266d11f9efade5183e7723c7c9e.gif"},83:function(e,t,a){e.exports=a.p+"ad192b782127e0679d3ffe5d2c0ee5db.jpg"},84:function(e,t,a){e.exports=a.p+"891369adad61358fbde147eb4f8d7c32.jpg"},85:function(e,t,a){e.exports=a.p+"75c25e5d9666b5f8b943df219de315ad.gif"},86:function(e,t,a){e.exports=a.p+"7ad9861f47d10ec65e9850081e8abec2.png"},87:function(e,t,a){e.exports=a.p+"335531fb7ba07aa6c3d084942b8acede.jpg"},88:function(e,t,a){e.exports=a.p+"09e087e8508ae41582280257b3fa254a.png"},89:function(e,t,a){e.exports=a.p+"3a9550df56521d0dc6e4528e65c9bc92.png"},90:function(e,t,a){e.exports=a.p+"e6bcb2987332e274dd2d25c9a654d780.gif"},91:function(e,t,a){e.exports=a.p+"ac8d991f4bb8c804867147d7b613c821.png"},92:function(e,t,a){e.exports=a.p+"07ae074302f502e03657bfdd82eb3441.jpg"},93:function(e,t,a){e.exports=a.p+"474e76d7e0ad7b015a1a25e451ad120e.jpg"},94:function(e,t,a){e.exports=a.p+"7bb79e0dca8f7772f187a3a731b99831.png"},95:function(e,t,a){e.exports=a.p+"8a1de42878b52df25e0216ab1ffa7c68.gif"},96:function(e,t,a){e.exports=a.p+"b03acd8c9f7a35b82f5b45a767bcc421.png"},97:function(e,t,a){e.exports=a.p+"ca2cace685e80c175b8fd2e4ade695b8.png"},98:function(e,t,a){e.exports=a.p+"38d6453ea0d54faf9225312025208d78.jpg"},99:function(e,t,a){e.exports=a.p+"8c9a4331ffbd4aacbd8bc23b46e45383.gif"}}]);