"use strict";(self.webpackChunkreact_docs_beta_kor=self.webpackChunkreact_docs_beta_kor||[]).push([[410],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),u=l,c=s["".concat(o,".").concat(u)]||s[u]||k[u]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8313:(e,t,n)=>{n.d(t,{E:()=>l});var a=n(7294);const l=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"sandpack-project",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},5229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),l=(n(7294),n(4137)),r=n(8313);const i={},p="\uc2a4\ub0c5\uc0f7\ucc98\ub7fc \uc0c1\ud0dc \uc0ac\uc6a9\ud558\uae30",o={unversionedId:"learn/Adding Interactivity/state-as-a-snapshot",id:"learn/Adding Interactivity/state-as-a-snapshot",title:"\uc2a4\ub0c5\uc0f7\ucc98\ub7fc \uc0c1\ud0dc \uc0ac\uc6a9\ud558\uae30",description:"\uc0c1\ud0dc \ubcc0\uc218\ub4e4\uc740 JavaScript\uc758 \ud3c9\ubc94\ud55c \ubcc0\uc218\ub4e4\ucc98\ub7fc \ubcf4\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc77d\uace0 \uc4f8 \uc218 \uc788\uc8e0.",source:"@site/docs/learn/Adding Interactivity/state-as-a-snapshot.mdx",sourceDirName:"learn/Adding Interactivity",slug:"/learn/Adding Interactivity/state-as-a-snapshot",permalink:"/React-Docs-KOR/docs/learn/Adding Interactivity/state-as-a-snapshot",draft:!1,editUrl:"https://github.com/line-next-level/React-Docs-KOR/tree/main/docs/learn/Adding Interactivity/state-as-a-snapshot.mdx",tags:[],version:"current",frontMatter:{},sidebar:"learnSidebar",previous:{title:"\uc0c1\ud0dc: \ucef4\ud3ec\ub10c\ud2b8\uc758 \uae30\uc5b5",permalink:"/React-Docs-KOR/docs/learn/Adding Interactivity/state-a-components-memory"},next:{title:"\ubc30\uc5f4\uc778 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8\ud558\uae30",permalink:"/React-Docs-KOR/docs/learn/Adding Interactivity/updating-arrays-in-state"}},m={},d=[{value:"\uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud574 \ub80c\ub354\ub9c1 \uc77c\uc73c\ud0a4\uae30",id:"\uc0c1\ud0dc\ub97c-\ubcc0\uacbd\ud574-\ub80c\ub354\ub9c1-\uc77c\uc73c\ud0a4\uae30",level:2},{value:"\ub80c\ub354\ub9c1\uc740 \uadf8 \uc2dc\uac04\uc5d0 \ub9de\ucdb0 \uc2a4\ub0c5\uc0f7\uc744 \ucc0d\uc2b5\ub2c8\ub2e4",id:"\ub80c\ub354\ub9c1\uc740-\uadf8-\uc2dc\uac04\uc5d0-\ub9de\ucdb0-\uc2a4\ub0c5\uc0f7\uc744-\ucc0d\uc2b5\ub2c8\ub2e4",level:2},{value:"\ub9ac\ub80c\ub354\ub9c1",id:"\ub9ac\ub80c\ub354\ub9c1",level:3},{value:"\uc2dc\uac04\uc5d0 \ub530\ub978 \uc0c1\ud0dc",id:"\uc2dc\uac04\uc5d0-\ub530\ub978-\uc0c1\ud0dc",level:2},{value:"\ub418\uc9da\uc5b4\ubcf4\uae30",id:"\ub418\uc9da\uc5b4\ubcf4\uae30",level:2},{value:"\ub3c4\uc804 \uacfc\uc81c",id:"\ub3c4\uc804-\uacfc\uc81c",level:2},{value:"1. \uc2e0\ud638\ub4f1 \uad6c\ud604\ud558\uae30",id:"1-\uc2e0\ud638\ub4f1-\uad6c\ud604\ud558\uae30",level:3},{value:"\uc815\ub2f5",id:"\uc815\ub2f5",level:3}],k={toc:d};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc2a4\ub0c5\uc0f7\ucc98\ub7fc-\uc0c1\ud0dc-\uc0ac\uc6a9\ud558\uae30"},"\uc2a4\ub0c5\uc0f7\ucc98\ub7fc \uc0c1\ud0dc \uc0ac\uc6a9\ud558\uae30"),(0,l.kt)("p",null,"\uc0c1\ud0dc \ubcc0\uc218\ub4e4\uc740 JavaScript\uc758 \ud3c9\ubc94\ud55c \ubcc0\uc218\ub4e4\ucc98\ub7fc \ubcf4\uc774\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc77d\uace0 \uc4f8 \uc218 \uc788\uc8e0.\n\uadf8\uce58\ub9cc \uc0c1\ud0dc\ub4e4\uc740 \uc870\uae08 \ub354 \uc2a4\ub0c5\uc0f7\ucc98\ub7fc \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc774 \uac12\uc744 \ub2e8\uc21c\ud788 \uc7ac\uc124\uc815(set)\ud558\ub294 \uac83\uc740 \uc774\ubbf8 \uc788\ub294 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4."),(0,l.kt)("admonition",{title:"\uc5ec\ub7ec\ubd84\uc774 \ubc30\uc6b8 \uac83\ub4e4",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5bb\uac8c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294\uac8c \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\ub294\uc9c0"),(0,l.kt)("li",{parentName:"ul"},"\uc5b8\uc81c, \uadf8\ub9ac\uace0 \uc5b4\ub5bb\uac8c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294\uc9c0"),(0,l.kt)("li",{parentName:"ul"},"\uc65c \uc0c1\ud0dc\uc758 \uc5c5\ub370\uc774\ud2b8\uac00 \ubc14\uafbc \uc9c1\ud6c4\uc5d0 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\uc9c0"),(0,l.kt)("li",{parentName:"ul"},'\uc5b4\ub5bb\uac8c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uc774 \uc0c1\ud0dc\uc758 "\uc2a4\ub0c5\uc0f7"\uc5d0 \uc811\uadfc\ud558\ub294\uc9c0'))),(0,l.kt)("h2",{id:"\uc0c1\ud0dc\ub97c-\ubcc0\uacbd\ud574-\ub80c\ub354\ub9c1-\uc77c\uc73c\ud0a4\uae30"},"\uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud574 \ub80c\ub354\ub9c1 \uc77c\uc73c\ud0a4\uae30"),(0,l.kt)("p",null,"\uc544\ub9c8 \uc5ec\ub7ec\ubd84\uc740 \ud074\ub9ad\uac19\uc740 \uc720\uc800 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc989\uc2dc \uc720\uc800 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ubcc0\uacbd\ub41c\ub2e4\uace0 \uc0dd\uac01\ud560 \uac83\uc785\ub2c8\ub2e4. React\uc5d0\uc11c\ub294 \uc774 \uc0dd\uac01\uacfc \uc0b4\uc9dd \ub2e4\ub974\uac8c \ub3d9\uc791\ud569\ub2c8\ub2e4.\n\uc774\uc804 \ud398\uc774\uc9c0\uc5d0\uc11c ",(0,l.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/render-and-commit#step-1-trigger-a-render"},"\uc0c1\ud0dc\ub97c \uc124\uc815\ud558\ub294\uac8c React\uc5d0\uac8c \ub9ac\ub80c\ub354\ub9c1\uc744 \uc694\uccad"),"\ud55c\ub2e4\ub294 \uac83\uc744 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4.\n\uc774 \ub9d0\uc740 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc774\ubca4\ud2b8\uc5d0 \ubc18\uc751\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8 \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,'\uc608\ub97c \ub4e4\uc5b4 \ub9cc\uc57d "Send" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c \uacbd\uc6b0, ',(0,l.kt)("inlineCode",{parentName:"p"},"setIsSent(true)"),"\ub294 React\uc5d0\uac8c UI\ub97c \ub2e4\uc2dc \uadf8\ub9ac\ub77c\uace0 \uba85\ub839\ud569\ub2c8\ub2e4."),(0,l.kt)(r.E,{src:"https://codesandbox.io/embed/relaxed-rui-6zbho9?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,l.kt)("p",null,"\uc544\ub798\ub294 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c \uc77c\uc5b4\ub098\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"onSubmit")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"setIsSent(true)"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"isSent"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"\ub85c \ubc14\uafb8\uace0 \uc0c8\ub85c\uc6b4 \ub80c\ub354\ub9c1\uc744 \uc608\uc57d\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"React\ub294 \uc5c5\ub370\uc774\ud2b8\ub41c ",(0,l.kt)("inlineCode",{parentName:"li"},"isSent")," \uac12\uc5d0 \ub530\ub77c \ub9ac\ub80c\ub354\ub9c1 \ub429\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc774\uc81c \uc0c1\ud0dc\uc640 \ub80c\ub354\ub9c1\uc758 \uad00\uacc4\uc5d0 \ub300\ud574 \ub354 \uc790\uc138\ud788 \uc54c\uc544\ubd05\uc2dc\ub2e4!"),(0,l.kt)("h2",{id:"\ub80c\ub354\ub9c1\uc740-\uadf8-\uc2dc\uac04\uc5d0-\ub9de\ucdb0-\uc2a4\ub0c5\uc0f7\uc744-\ucc0d\uc2b5\ub2c8\ub2e4"},"\ub80c\ub354\ub9c1\uc740 \uadf8 \uc2dc\uac04\uc5d0 \ub9de\ucdb0 \uc2a4\ub0c5\uc0f7\uc744 \ucc0d\uc2b5\ub2c8\ub2e4"),(0,l.kt)("p",null,'"\ub80c\ub354\ub9c1"\uc740 React\uac00 \ucef4\ud3ec\ub10c\ud2b8 \ud568\uc218\ub97c \ud638\ucd9c\ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \ud568\uc218\uac00 \ubc18\ud658\ud558\ub294 JSX\ub294 \uc5b4\ub5a4 \uc2dc\uac04\uc5d0 \ucd2c\uc601\ud55c \uc2a4\ub0c5\uc0f7\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ud3ec\ud568\ub41c props, \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec, \uc9c0\uc5ed\ubcc0\uc218\ub4e4\uc740 \ubaa8\ub450 \ub80c\ub354\ub9c1 \ub418\ub294 ',(0,l.kt)("em",{parentName:"p"},"\ub2f9\uc2dc\uc758 \uc0c1\ud0dc\uc5d0 \uae30\ubc18\ud574")," \uacc4\uc0b0\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,'\uc0ac\uc9c4\uc774\ub098 \uc601\ud654 \ud504\ub808\uc784\ub4e4\uacfc\ub294 \ub2ec\ub9ac, UI "\uc2a4\ub0c5\uc0f7"\uc740 \uc0c1\ud638\uc791\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc2a4\ub0c5\uc0f7\uc740 \uc785\ub825\uac12\uc5d0 \ub530\ub77c \uc5b4\ub5a4 \ubc18\uc751\uc744 \ud560\uc9c0 \uba85\uc2dc\ud558\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac19\uc740 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nReact\ub294 \uc774 \uc2a4\ub0c5\uc0f7\uacfc \uc77c\uce58\uc2dc\ud0a4\uae30 \uc704\ud574 \ud654\uba74\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uc744 \uc5f0\uacb0\ud569\ub2c8\ub2e4. \uacb0\uad6d \ubc84\ud2bc\uc744 \ub204\ub974\ub294 \uac83\uba74 JSX\uc758 \ud074\ub9ad \ud578\ub4e4\ub7ec\ub97c \ud638\ucd9c\ud558\uac8c \ub429\ub2c8\ub2e4.'),(0,l.kt)("p",null,"React\uac00 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9ac\ub80c\ub354\ub9c1 \ud560\ub54c\ub294"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"React\uac00 \ud568\uc218(\ucef4\ud3ec\ub10c\ud2b8)\ub97c \ub2e4\uc2dc \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\ud568\uc218(\ucef4\ud3ec\ub10c\ud2b8)\ub294 \uc0c8\ub85c\uc6b4 JSX \uc2a4\ub0c5\uc0f7\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"React\ub294 \uadf8 \uc0c8\ub85c\uc6b4 \uc2a4\ub0c5\uc0f7\uc73c\ub85c \ud654\uba74\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"\ub9ac\ub80c\ub354\ub9c1"},"\ub9ac\ub80c\ub354\ub9c1"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53335940/196471130-9e15b851-fd07-4fff-8caf-52891294124b.png",alt:"rerendering"})),(0,l.kt)("p",null,'\ucef4\ud3ec\ub10c\ud2b8\uc758 \uba54\ubaa8\ub9ac\ub85c \uc0ac\uc6a9\ub418\ub294 \uc0c1\ud0dc\ub294 \ud568\uc218\uac00 \ubc18\ud658\ub418\uba74 \uc0ac\ub77c\uc9c0\ub294 \uc77c\ubc18\uc801\uc778 \ubcc0\uc218\ub4e4\uacfc\ub294 \ub2e4\ub985\ub2c8\ub2e4. \uc0c1\ud0dc\ub294 \uc0ac\uc2e4 \ud568\uc218 \ubc14\uae65\uc758 React\uc5d0\uc11c \uad00\ub9ac\ub418\uace0 "\uc0b4\uc544\uc788\uc2b5\ub2c8\ub2e4".\nReact\uac00 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud638\ucd9c\ud588\uc744 \ub54c, \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud2b9\uc815 \ub80c\ub354\ub9c1\uc744 \uc704\ud55c \uc2a4\ub0c5\uc0f7\uc744 \uc81c\uacf5\ud574\uc90d\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub294 \ucd5c\uc2e0\uc758 props\uc640 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ud3ec\ud568\ud55c JSX\uc640 \ud568\uaed8 UI\uc758 \uc2a4\ub0c5\uc0f7\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\n\uc774 \ubaa8\ub4e0 \uac83\ub4e4\uc740 \uc0c1\ud0dc\uac12\uc5d0 \uae30\ubc18\ud574 \uacc4\uc0b0\ub429\ub2c8\ub2e4!'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/53335940/196471150-b3ff4944-2f80-459b-a2aa-446b95264b2d.png",alt:"state-and-render"})),(0,l.kt)("p",null,'\uc774 \uacfc\uc815\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uc2e4\ud5d8\uc744 \ud558\ub098 \ud574\ubd05\uc2dc\ub2e4. \uc774 \uc608\uc2dc\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc740 "+3" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uce74\uc6b4\ud130\uac00 3 \uc62c\ub77c\uac08 \uac83\uc774\ub77c\uace0 \uc608\uc0c1\ud560 \uac81\ub2c8\ub2e4.\n\uc774 \ubc84\ud2bc\uc774 ',(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(number + 1)"),'\uc744 \uc138 \ubc88 \ud074\ub9ad\ud560 \uac83\uc774\ub2c8\uae4c\uc694. "+3" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c \uc5b4\ub5a4 \uc77c\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0 \ubd05\uc2dc\ub2e4.'),(0,l.kt)(r.E,{src:"https://codesandbox.io/embed/stoic-worker-984x0t?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub294 \uc624\uc9c1 \ud074\ub9ad\ub2f9 \ud55c\ubc88\ub9cc \uc99d\uac00\ud588\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc740 \uc624\uc9c1 \ub2e4\uc74c \ub80c\ub354\ub9c1\uc744 \uc704\ud574\uc11c\ub9cc \ub3d9\uc791\ud569\ub2c8\ub2e4.")," \uccab \ubc88\uc9f8 \ub80c\ub354\ub9c1 \ub2e8\uacc4\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uc774\uc5c8\uc2b5\ub2c8\ub2e4.\n",(0,l.kt)("em",{parentName:"p"},"\uc774 ",(0,l.kt)("inlineCode",{parentName:"em"},"onClick")," \ud578\ub4e4\ub7ec\uac00 \ud3ec\ud568\ub41c \ub80c\ub354\ub9c1\uc5d0\uc11c")," ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," \uac12\uc740 0\uc774\uc5c8\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(number + 1)"),"\uc774 \ud638\ucd9c\ub41c \uc774\ud6c4\uc5d0\ub3c4 \uc0c1\ud0dc\ub294 \uacc4\uc18d ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={() => {\n  setNumber(number + 1);\n  setNumber(number + 1);\n  setNumber(number + 1);\n}}>+3</button>\n")),(0,l.kt)("p",null,"\ubc84\ud2bc\uc758 \ud074\ub9ad \ud578\ub4e4\ub7ec\uac00 React\uc5d0\uac8c \uc804\ub2ec\ud558\ub294 \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"setNumber(number + 1)")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\uc774\ubbc0\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"setNumber(0 + 1)"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React\ub294 \ub2e4\uc74c \ub80c\ub354\ub9c1\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\ub85c \ubc14\uafc0 \uc900\ube44\ub97c \ud569\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"setNumber(number + 1)")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\uc774\ubbc0\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"setNumber(0 + 1)"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React\ub294 \ub2e4\uc74c \ub80c\ub354\ub9c1\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\ub85c \ubc14\uafc0 \uc900\ube44\ub97c \ud569\ub2c8\ub2e4.")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"setNumber(number + 1)")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\uc774\ubbc0\ub85c ",(0,l.kt)("inlineCode",{parentName:"li"},"setNumber(0 + 1)"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React\ub294 \ub2e4\uc74c \ub80c\ub354\ub9c1\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\ub85c \ubc14\uafc0 \uc900\ube44\ub97c \ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(number + 1)"),"\uc744 \uc138 \ubc88 \ud638\ucd9c\ud588\ub2e4 \ud558\ub354\ub77c\ub3c4, ",(0,l.kt)("em",{parentName:"p"},"\uc774\ubc88 \ub80c\ub354\ub9c1"),"\uc758 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub294 \ud56d\uc0c1 ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uc774\ubbc0\ub85c \uc0c1\ud0dc\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\ub85c \uc138 \ubc88 \ubcc0\uacbd\ud55c \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4.\n\uc774\uac83\uc774 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc758 \uc2e4\ud589\uc774 \ub05d\ub09c \uc774\ud6c4\uc5d0 React\uac00 \ucef4\ud3ec\ub10c\ud2b8\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),"\uc774 \uc544\ub2cc ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\ub85c \ub80c\ub354\ub9c1\ud558\ub294 \uc774\uc720\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc0c1\ud0dc \ubcc0\uc218\ub97c \uc9c1\uc811 \ucf54\ub4dc\uc5d0 \ub123\uace0 \uc2dc\uac01\ud654 \ud574\ubd05\uc2dc\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," \uc0c1\ud0dc \ubcc0\uc218\uac00 \uc774\ubc88 \ub80c\ub354\ub9c1\uc5d0\uc11c\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uc774\ubbc0\ub85c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0dd\uacbc\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={() => {\n  setNumber(0 + 1);\n  setNumber(0 + 1);\n  setNumber(0 + 1);\n}}>+3</button>\n")),(0,l.kt)("p",null,"\ub2e4\uc74c \ub80c\ub354\ub9c1\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uadf8\ub54c\uc758 \ub80c\ub354\ub9c1\uc5d0\uc11c \ud074\ub9ad \ud578\ub4e4\ub7ec\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc0dd\uacbc\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={() => {\n  setNumber(1 + 1);\n  setNumber(1 + 1);\n  setNumber(1 + 1);\n}}>+3</button>\n")),(0,l.kt)("p",null,"\ubc84\ud2bc\uc744 \ub2e4\uc2dc \ud074\ub9ad\ud588\uc744 \ub54c \uce74\uc6b4\ud130\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\uac00 \ub418\uace0 \uadf8 \ub2e4\uc74c\uc5d4 ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),"\uc774 \ub418\ub294 \uc774\uc720\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc2dc\uac04\uc5d0-\ub530\ub978-\uc0c1\ud0dc"},"\uc2dc\uac04\uc5d0 \ub530\ub978 \uc0c1\ud0dc"),(0,l.kt)("p",null,"\uc7ac\ubc0c\uc9c0 \uc54a\ub098\uc694? \uc544\ub798 \ucf54\ub4dc\ub97c \ubcf4\uace0 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c \uc5b4\ub5a4 \ub0b4\uc6a9\uc774 alert \ub420 \uc9c0 \ub9de\ucdb0\ubcf4\uc138\uc694."),(0,l.kt)(r.E,{src:"https://codesandbox.io/embed/romantic-microservice-2p9kkd?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,l.kt)("p",null,'\ub9cc\uc57d \uc774\uc804 \ub80c\ub354\ub9c1\uc758 \uc0c1\ud0dc \ubcc0\uacbd \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud588\ub2e4\uba74, alert\uac00 "0"\uc744 \ubcf4\uc5ec\uc904 \uac83\uc744 \uc608\uc0c1\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"setNumber(0 + 5);\nalert(0);\n")),(0,l.kt)("p",null,'\ub9cc\uc57d alert\uc5d0 \ud0c0\uc774\uba38\ub97c \ucd94\uac00\ud55c\ub2e4\uba74, \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1 \ub41c \ud6c4\uc5d0 alert\uac00 \ud638\ucd9c\ub420\uae4c\uc694? "0"\uacfc "5" \uc911 alert\uac00 \ubcf4\uc5ec\uc904 \ub0b4\uc6a9\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694?'),(0,l.kt)(r.E,{src:"https://codesandbox.io/embed/falling-leftpad-3b6c48?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,l.kt)("p",null,'\ub180\ub78d\uc9c0 \uc54a\ub098\uc694? \uc0c1\ud0dc \ubcc0\uacbd \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud588\ub2e4\uba74, \uc5ec\ub7ec\ubd84\uc740 \uadf8 \uc0c1\ud0dc\uc758 "\uc2a4\ub0c5\uc0f7"\uc774 alert\uc5d0 \uc804\ub2ec\ub428\uc744 \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"setNumber(0 + 5);\nsetTimeout(() => {\n  alert(0);\n}, 3000);\n")),(0,l.kt)("p",null,"React\uc5d0 \uc800\uc7a5\ub41c \uc0c1\ud0dc\ub294 alert\uac00 \uc2e4\ud589\ub418\ub294 \uc911\uc5d0 \ubcc0\uacbd\ub418\uc5c8\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\uce58\ub9cc alert\ub294 \uc774\uc804 \uc0c1\ud0dc, \uc989 \uc720\uc800\uac00 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c\uc758 \uc2a4\ub0c5\uc0f7\uc744 \uc774\uc6a9\ud574 \uc2a4\ucf00\uc904\ub9c1 \ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\uc0c1\ud0dc \ubcc0\uc218\uc758 \uac12\uc740 \ud56d\uc0c1 \ub80c\ub354\ub9c1\uacfc \ud568\uaed8 \uc5c5\ub370\uc774\ud2b8 \ub429\ub2c8\ub2e4.")," \ub9cc\uc57d \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc758 \ucf54\ub4dc\uac00 \ube44\ub3d9\uae30\uc801\uc774\ub77c\ub450\uc694.\n",(0,l.kt)("em",{parentName:"p"},"\uc774\uc804 \uc0c1\ud0dc\uc758 \ub80c\ub354\ub9c1"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"onClick"),"\uc5d0\uc11c, ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"setNumber(number + 5)"),"\uac00 \ud638\ucd9c\ub41c \ub2e4\uc74c\uc774\ub77c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),'\uc785\ub2c8\ub2e4.\n\uadf8 \uac12\uc740 React\uac00 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud638\ucd9c\ub418\uc5b4 "\uc2a4\ub0c5\uc0f7\uc744 \ucd2c\uc601\ud55c \uc2dc\uc810"\uc758 \uac12\uc73c\ub85c "\uace0\uc815\ub418\uc5b4" \uc788\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \ud0c0\uc774\ubc0d \uad00\ub828\ud55c \uc2e4\uc218\ub97c \ub35c \ud558\uac8c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uc544\ub798 \ucf54\ub4dc\ub294 5\ucd08\uc758 \ub51c\ub808\uc774\ub97c \uac16\uace0 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\ub294 form\uc785\ub2c8\ub2e4.\n\uc2dc\ub098\ub9ac\uc624\ub97c \uc0dd\uac01\ud574\ubcf4\uba74:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'"Send" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 Alice\uc5d0\uac8c "Hello"\uac00 \ubcf4\ub0b4\uc9d1\ub2c8\ub2e4.'),(0,l.kt)("li",{parentName:"ol"},'5\ucd08\uc758 \ub51c\ub808\uc774\uac00 \ub05d\ub098\uae30 \uc804\uc5d0 \uc5ec\ub7ec\ubd84\uc740 "To" \ud544\ub4dc\ub97c "Bob"\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4.')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"alert"),'\uac00 \ubcf4\uc5ec\uc904 \ub0b4\uc6a9\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694? "You said Hello to Alice"\uc640 "You said Hello to Bob" \uc911 \uc5b4\ub5a4 \uba54\uc2dc\uc9c0\ub97c \ubcf4\uc5ec\uc904\uae4c\uc694?\n\ud55c\ubc88 \ucd94\uce21\ud574\ubcf4\uace0 \uc2e4\ud589\ud574\ubcf4\uc138\uc694!'),(0,l.kt)(r.E,{src:"https://codesandbox.io/embed/elastic-kilby-4tl0zd?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'React\ub294 \uc0c1\ud0dc \uac12\uc744 "\uace0\uc815\ub41c \uc0c1\ud0dc\ub85c" \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \ub4e4\uace0\uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.')," \uc5ec\ub7ec\ubd84\uc740 \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uba74\uc11c \uc0c1\ud0dc\uac00 \ubcc0\ud560 \uac83\uc5d0 \ub300\ud574\uc11c\ub294 \uac71\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub9cc\uc57d \ub9ac\ub80c\ub354\ub9c1 \ub418\uae30 \uc9c1\uc804\uc758, \uc989 \ucd5c\uc2e0\uc758 \uc0c1\ud0dc\ub97c \uc77d\uace0 \uc2f6\uc740 \uacbd\uc6b0\uc5d4 \uc5b4\ub5bb\uac8c \ud560\uae4c\uc694?\n\ub2e4\uc74c \uc7a5\uc5d0\uc11c \ubc30\uc6b8 ",(0,l.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/queueing-a-series-of-state-updates"},"\uc0c1\ud0dc \ubcc0\uacbd \ud568\uc218"),"\ub97c \uc774\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4!"),(0,l.kt)("h2",{id:"\ub418\uc9da\uc5b4\ubcf4\uae30"},"\ub418\uc9da\uc5b4\ubcf4\uae30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc740 \uc0c8\ub85c\uc6b4 \ub80c\ub354\ub9c1\uc744 \uc694\uccad\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"React\ub294 \ucef4\ud3ec\ub10c\ud2b8 \uc678\ubd80\uc5d0 \uc0c1\ud0dc\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4. React\uc5d0 \uc120\ubc18\uc774 \uc788\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \uc27d\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useState"),"\ub97c \ud638\ucd9c\ud558\uba74, React\ub294 ",(0,l.kt)("em",{parentName:"li"},"\uadf8 \ub80c\ub354\ub9c1"),"\uc5d0 \ub300\ud55c \uc0c1\ud0dc \uc2a4\ub0c5\uc0f7\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},'\ubcc0\uc218\ub4e4\uacfc \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uc740 \ub9ac\ub80c\ub354\ub9c1\uc774 \uc77c\uc5b4\ub098\ub294 \uacfc\uc815\uc5d0\uc11c "\uc0b4\uc544\ub0a8\uc9c0" \ubabb\ud569\ub2c8\ub2e4. \ub0b4\uc6a9\uc774 \uac19\ub354\ub77c\ub3c4, \ubaa8\ub4e0 \ub80c\ub354\ub9c1\uc5d0\uc11c \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uc740 \uc804\ubd80 \ub2e4\ub985\ub2c8\ub2e4.'),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 \ub80c\ub354\ub9c1(\uadf8\ub9ac\uace0 \ud568\uc218 \ub0b4\ubd80)\uc5d0\uc11c\ub294 \ud56d\uc0c1 React\uac00 \uadf8 \ub80c\ub354\ub9c1\uc5d0 \ub300\ud574 \uc900 \uc0c1\ud0dc\uc758 \uc2a4\ub0c5\uc0f7\ub9cc \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub80c\ub354\ub9c1\ub41c JSX\ub97c \uc0dd\uac01\ud560 \ub54c\uc640 \ube44\uc2b7\ud558\uac8c, \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ub0b4\ubd80\uc5d0\uc11c\uc758 \uc0c1\ud0dc\ub3c4 \ube44\uc2b7\ud558\uac8c \uc0c1\uc0c1\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ub0b4\ubd80\uc5d0\uc11c \uc0c1\ud0dc\uac12\uc744 \ucc38\uc870\ud558\uace0 \uc788\ub2e4\uba74, \uadf8 \uc0c1\ud0dc\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uac00 \uc0dd\uc131\ub41c \uc2dc\uc810\uc758 \uac12\uc785\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\ub3c4\uc804-\uacfc\uc81c"},"\ub3c4\uc804 \uacfc\uc81c"),(0,l.kt)("h3",{id:"1-\uc2e0\ud638\ub4f1-\uad6c\ud604\ud558\uae30"},"1. \uc2e0\ud638\ub4f1 \uad6c\ud604\ud558\uae30"),(0,l.kt)("p",null,"\uc544\ub798\ub294 \ubc84\ud2bc\uc774 \ud074\ub9ad\ub418\uba74 \uc2e0\ud638\ub4f1 \ubd88\ube5b\uc774 \ubc14\ub00c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,l.kt)(r.E,{src:"https://codesandbox.io/embed/cool-resonance-1jpmcc?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,l.kt)("p",null,"\ud074\ub9ad \ud578\ub4e4\ub7ec\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),'\ub97c \ucd94\uac00\ud574\ubcf4\uc138\uc694. \uc2e0\ud638\ub4f1\uc774 \ub179\uc0c9\uc774\uace0 "Walk"\uc77c \ub54c \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 "Stop is next"\ub97c \ucd9c\ub825\ud558\uace0, \uc2e0\ud638\ub4f1\uc774 \uc801\uc0c9\uc774\uace0 "Stop"\uc77c \ub54c \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 "Walk is next"\ub97c \ucd9c\ub825\ud558\ub3c4\ub85d \ud574\ubcf4\uc138\uc694.'),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"alert"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"setWalk"),"\uc758 \uc55e\uc5d0 \ub450\uc5c8\uc744 \ub54c\uc640 \ub4a4\uc5d0 \ub450\uc5c8\uc744 \ub54c \ucc28\uc774\uac00 \uc788\ub098\uc694?"),(0,l.kt)("h3",{id:"\uc815\ub2f5"},"\uc815\ub2f5"),(0,l.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"alert"),"\ub294 \uc544\ub798\uc640 \uac19\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)(r.E,{src:"https://codesandbox.io/embed/adoring-matan-6ql05d?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"alert"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"setWalk"),"\uc758 \uc55e\uc5d0 \ub193\ub294\uac83\uacfc \ub4a4\uc5d0 \ub193\ub294 \uac83\uc740 \uc544\ubb34 \ucc28\uc774\ub3c4 \uc5c6\uc744 \uac83\uc785\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"walk"),"\uc758 \uac12\uc740 \uadf8 \ub54c\uc758 \ub80c\ub354\ub9c1\uc5d0 \uace0\uc815\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\n",(0,l.kt)("inlineCode",{parentName:"p"},"setWalk"),"\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 ",(0,l.kt)("em",{parentName:"p"},"\ub2e4\uc74c")," \ub80c\ub354\ub9c1\uc5d0\uc11c\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \ubfd0\uc785\ub2c8\ub2e4. \uc774\uc804 \uc0c1\ud0dc\ub85c\ubd80\ud130 \ud30c\uc0dd\ub41c \ub80c\ub354\ub9c1\uc5d0\uc11c\uc758 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc5d0\ub294 \uc544\ubb34 \uc601\ud5a5\uc744 \ub07c\uce60 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798 \ucf54\ub4dc\ub294 \ucc98\uc74c\uc5d0\ub294 \uc9c1\uad00\uc801\uc774\uc9c0 \uc54a\uac8c \ubcf4\uc77c\uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"alert(walk ? 'Stop is next' : 'Walk is next');\n")),(0,l.kt)("p",null,"\ud558\uc9c0\ub9cc \"\uc2e0\ud638\ub4f1\uc774 'Walk now'\uc77c \uacbd\uc6b0 'Stop it next' \uba54\uc2dc\uc9c0\ub97c \ubcf4\uc5ec\uc900\ub2e4\"\ub77c\uace0 \uc77d\uc73c\uba74 \ub9d0\uc774 \ub429\ub2c8\ub2e4.\n\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \uc548\uc5d0 \uc788\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"walk")," \ubcc0\uc218\ub294 \ud604\uc7ac \ub80c\ub354\ub9c1\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"walk")," \uac12\uacfc \uc77c\uce58\ud558\uace0, \ubcc0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774\uac8c \uc9c4\uc9dc \ub9de\ub294\uc9c0\ub294 \uc0c1\ud0dc \ubcc0\uacbd \uba54\uc18c\ub4dc\ub97c \ubc14\uafd4\ubd04\uc73c\ub85c\uc368 \uac80\uc99d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"walk"),"\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<button onClick={() => {\n  setWalk(false);\n  alert('Stop is next');\n}}>\n  Change to Stop\n</button>\n<h1 style={{color: 'darkgreen'}}>\n  Walk\n</h1>\n")),(0,l.kt)("p",null,'\uacb0\uad6d, "Change to Stop"\uc744 \ud074\ub9ad\ud558\uba74 ',(0,l.kt)("inlineCode",{parentName:"p"},"walk"),"\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),'\ub85c \uc138\ud305\ub41c \uc0c1\ud0dc\ub85c \ub80c\ub354\ub9c1\uc744 \uc694\uccad\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 "Stop is next" \uba54\uc2dc\uc9c0\ub97c \ub744\uc6b8 \uac83\uc785\ub2c8\ub2e4.'))}s.isMDXComponent=!0}}]);