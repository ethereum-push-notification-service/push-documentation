"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[7606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1277:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),s=r(3438),i=r(9960),o=r(5999);const c={cardContainer:"cardContainer_VPOR",cardTitle:"cardTitle_deVx",cardDescription:"cardDescription_crxe"};function l(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c.cardContainer)},r)}function p(e){let{href:t,icon:r,title:s,description:i}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:s},r," ",s),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:i},i))}function d(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,s.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:"",title:t.label,description:t.description??r?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,s.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,s.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},4771:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),s=r(1277);const i={id:"dev-chat-message-types-section",title:"Message Types",hide_title:!0,slug:"./message-types",displayed_sidebar:"pushChatSidebar",sidebar_position:91},o="Intro to Message Types",c={unversionedId:"dev/chat/dev-chat-message-types-section",id:"dev/chat/dev-chat-message-types-section",title:"Message Types",description:"Each message of Push Chat is a json payload that carries with it a message type and some parameters that enables each frontend that integrates Push Chat to understand and display various message types.",source:"@site/docs/dev/chat/91-Message-Types-Section.mdx",sourceDirName:"dev/chat",slug:"/dev/chat/message-types",permalink:"/dev/chat/message-types",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/dev/chat/91-Message-Types-Section.mdx",tags:[],version:"current",sidebarPosition:91,frontMatter:{id:"dev-chat-message-types-section",title:"Message Types",hide_title:!0,slug:"./message-types",displayed_sidebar:"pushChatSidebar",sidebar_position:91},sidebar:"pushChatSidebar",previous:{title:"All API Calls",permalink:"/dev/chat/build/all-api-calls"},next:{title:"Text",permalink:"/dev/chat/message-types/text"}},l={},p=[],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro-to-message-types"},"Intro to Message Types"),(0,a.kt)("p",null,"Each message of Push Chat is a json payload that carries with it a message type and some parameters that enables each frontend that integrates Push Chat to understand and display various message types. "),(0,a.kt)("p",null,"Push Chat supports an evergrowing list message types, all of which can be sent by ",(0,a.kt)("inlineCode",{parentName:"p"},"chat.send"),", though some require passing few additional parameters."),(0,a.kt)("head",null,(0,a.kt)("title",null,"Intro to Message Types | Push Chat | Push Documentation")),(0,a.kt)(s.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);