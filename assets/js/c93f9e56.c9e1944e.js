"use strict";(self.webpackChunkreact_docs_beta_kor=self.webpackChunkreact_docs_beta_kor||[]).push([[412],{4137:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,u=d["".concat(p,".").concat(m)]||d[m]||f[m]||l;return n?a.createElement(u,c(c({ref:t},o),{},{components:n})):a.createElement(u,c({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<l;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},232:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{title:t,description:n,link:r}=e;const l=(0,a.useCallback)((()=>{location.href=r}),[]);return a.createElement("div",{className:"_13zkr630"},a.createElement("h3",null,t),a.createElement("p",null,n),a.createElement("button",{onClick:l},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))}},8313:(e,t,n)=>{n.d(t,{E:()=>r});var a=n(7294);const r=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"sandpack-project",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},4359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>f});var a=n(7462),r=(n(7294),n(4137)),l=n(8313),c=n(232);const s={},p="\ud0c8\ucd9c\uad6c (Advanced)",i={unversionedId:"learn/Escape Hatches/escape-hatches",id:"learn/Escape Hatches/escape-hatches",title:"\ud0c8\ucd9c\uad6c (Advanced)",description:"\uc5ec\ub7ec\ubd84\uc758 \ucef4\ud3ec\ub10c\ud2b8 \uc911 \uc77c\ubd80\ub294 React \uc678\ubd80\uc758 \uc2dc\uc2a4\ud15c\uacfc \ud568\uaed8 \ucee8\ud2b8\ub864\ub418\uace0 \ub3d9\uae30\ud654\ub420 \ud544\uc694\uac00 \uc788\uc744 \uac83 \uc785\ub2c8\ub2e4.",source:"@site/docs/learn/Escape Hatches/escape-hatches.mdx",sourceDirName:"learn/Escape Hatches",slug:"/learn/Escape Hatches/escape-hatches",permalink:"/React-Docs-KOR/docs/learn/Escape Hatches/escape-hatches",draft:!1,editUrl:"https://github.com/line-next-level/React-Docs-KOR/tree/main/docs/learn/Escape Hatches/escape-hatches.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Reducer\uc640 Context\ub97c \ud1b5\ud574 \ud655\uc7a5\ud558\uae30",permalink:"/React-Docs-KOR/docs/learn/Managing State/scaling-up-with-reducer-and-context"},next:{title:"Ref\ub97c \uc774\uc6a9\ud574 \uac12\uc744 \uae30\uc5b5\ud558\uae30",permalink:"/React-Docs-KOR/docs/learn/Escape Hatches/referencing-values-with-refs"}},o={},f=[{value:"refs\ub85c \uac12\ub4e4\uc744 \ucc38\uc870\ud558\ub294 \ubc95",id:"refs\ub85c-\uac12\ub4e4\uc744-\ucc38\uc870\ud558\ub294-\ubc95",level:2},{value:"refs\ub85c DOM \uc870\uc791\ud558\uae30",id:"refs\ub85c-dom-\uc870\uc791\ud558\uae30",level:2},{value:"Effects\ub85c \ub3d9\uae30\ud654\ud558\uae30",id:"effects\ub85c-\ub3d9\uae30\ud654\ud558\uae30",level:2},{value:"Effect\uac00 \ud544\uc694 \uc5c6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",id:"effect\uac00-\ud544\uc694-\uc5c6\uc744-\uc218-\uc788\uc2b5\ub2c8\ub2e4",level:2},{value:"\ud65c\uc131\ud654\ub41c Effects\uc758 \uc0dd\uba85\uc8fc\uae30",id:"\ud65c\uc131\ud654\ub41c-effects\uc758-\uc0dd\uba85\uc8fc\uae30",level:2},{value:"Effect\uc5d0\uc11c \uc774\ubca4\ud2b8\ub4e4 \ubd84\ub9ac\ud558\uae30",id:"effect\uc5d0\uc11c-\uc774\ubca4\ud2b8\ub4e4-\ubd84\ub9ac\ud558\uae30",level:2},{value:"Effect \uc885\uc18d\uc131 \uc81c\uac70\ud558\uae30",id:"effect-\uc885\uc18d\uc131-\uc81c\uac70\ud558\uae30",level:2},{value:"\ucee4\uc2a4\ud140 \ud6c5\uc73c\ub85c \ub85c\uc9c1 \uc7ac\uc0ac\uc6a9\ud558\uae30",id:"\ucee4\uc2a4\ud140-\ud6c5\uc73c\ub85c-\ub85c\uc9c1-\uc7ac\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ub2e4\uc74c\uc5d0 \ubc30\uc6b8 \uac83",id:"\ub2e4\uc74c\uc5d0-\ubc30\uc6b8-\uac83",level:2}],d={toc:f};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ud0c8\ucd9c\uad6c-advanced"},"\ud0c8\ucd9c\uad6c (Advanced)"),(0,r.kt)("p",null,'\uc5ec\ub7ec\ubd84\uc758 \ucef4\ud3ec\ub10c\ud2b8 \uc911 \uc77c\ubd80\ub294 React \uc678\ubd80\uc758 \uc2dc\uc2a4\ud15c\uacfc \ud568\uaed8 \ucee8\ud2b8\ub864\ub418\uace0 \ub3d9\uae30\ud654\ub420 \ud544\uc694\uac00 \uc788\uc744 \uac83 \uc785\ub2c8\ub2e4.\n\uc608\ub97c\ub4e4\uc5b4 \ube0c\ub77c\uc6b0\uc800 API\ub97c \ud65c\uc6a9\ud558\uc5ec input\uc5d0 \ud3ec\ucee4\uc2f1\ud560 \ud544\uc694\ub098 React \uc5c6\uc774 \uad6c\ud604\ub41c \ube44\ub514\uc624 \ud50c\ub808\uc774\uc5b4\ub97c \uc7ac\uc0dd/\uc815\uc9c0\ud558\uac70\ub098,\n\uc6d0\uaca9 \uc11c\ubc84\uc5d0 \uc5f0\uacb0\ud558\uc5ec \uba54\uc2dc\uc9c0\ub97c \uae30\ub2e4\ub9ac\ub3c4\ub85d \ud574\uc57c\ud569\ub2c8\ub2e4. \uc774 \ucc55\ud130\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc740 React\uc758 "\uc678\ubd80\ub85c \ub098\uac00\ub3c4\ub85d"\ud558\uc5ec \uc678\ubd80 \uc2dc\uc2a4\ud15c\ub4e4\uacfc \uc5f0\uacb0\ud574\uc8fc\ub294\n\ud0c8\ucd9c\uad6c\ub97c \ubc30\uc6b8 \uac83 \uc785\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\uc9c1\uacfc \ub370\uc774\ud130 \ud750\ub984 \ub300\ubd80\ubd84\uc740 \uc774 \uae30\ub2a5\ub4e4\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uc544\uc57c\ud569\ub2c8\ub2e4.'),(0,r.kt)("admonition",{title:"In this chapter",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/referencing-values-with-refs"},'\ub9ac\ub80c\ub354\ub9c1\uc5c6\uc774 \uc815\ubcf4\ub97c "\uae30\uc5b5"\ud558\ub294 \ubc95')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/manipulating-the-dom-with-refs"},"React\uc5d0 \uc758\ud574 \uad00\ub9ac\ub418\ub294 DOM\uc5d0 \uc811\uadfc\ud558\ub294 \ubc95")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/synchronizing-with-effects"},"\uc678\ubd80 \uc2dc\uc2a4\ud15c\ub4e4\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub3d9\uae30\ud654\ud558\ub294 \ubc95")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/you-might-not-need-an-effect"},"\ubd88\ud544\uc694\ud55c Effect\ub4e4\uc744 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc81c\uac70\ud558\ub294 \ubc95")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/lifecycle-of-reactive-effects"},"\ucef4\ud3ec\ub10c\ud2b8\uc640 Effect\uc758 \ub77c\uc774\ud504\uc0ac\uc774\ud074\uc758 \ucc28\uc774\uc810\uc774 \ubb34\uc5c7\uc778\uc9c0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/separating-events-from-effects"},"\uc77c\ubd80 \uac12\ub4e4\uc774 Effect\ub97c \uc7ac\ud2b8\ub9ac\uac70 \ud558\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\ub294 \ubc95")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/removing-effect-dependencies"},"Effect\uac00 \ub35c \uc7ac\uc2e4\ud589\ub418\ub3c4\ub85d \ud558\ub294 \ubc95")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context"},"\ucef4\ud3ec\ub10c\ud2b8\uac04 \ub85c\uc9c1\uc744 \uacf5\uc720\ud558\ub294 \ubc95")))),(0,r.kt)("h2",{id:"refs\ub85c-\uac12\ub4e4\uc744-\ucc38\uc870\ud558\ub294-\ubc95"},"refs\ub85c \uac12\ub4e4\uc744 \ucc38\uc870\ud558\ub294 \ubc95"),(0,r.kt)("p",null,'\uc5ec\ub7ec\ubd84\uc774 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc77c\ubd80 \uc815\ubcf4\ub97c "\uae30\uc5b5"\ud558\uac8c \ud558\uace0\uc2f6\uc9c0\ub9cc \uc815\ubcf4\uac00 ',(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/render-and-commit"},"\uc0c8\ub85c\uc6b4 \ub80c\ub354\ub9c1\uc744 \uc720\ub3c4"),"\ud558\uae38 \uc6d0\uce58 \uc54a\ub294\ub2e4\uba74,\n",(0,r.kt)("em",{parentName:"p"},"ref"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ref = useRef(0);\n")),(0,r.kt)("p",null,"\uc0c1\ud0dc\uc640 \uac19\uc774, refs\ub294 React\uc5d0 \uc758\ud574 \ub9ac\ub80c\ub354\ub9c1 \uc0ac\uc774\uc5d0 \ubcf4\uc874\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc0c1\ud0dc\ub97c \uc124\uc815\ud558\ub294 \uac83\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9ac\ub80c\ub354\ub9c1\uc2dc\ud0b5\ub2c8\ub2e4.\nref\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc740 \uadf8\ub807\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4! \uc5ec\ub7ec\ubd84\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"ref.current")," \uc18d\uc131\uc73c\ub85c \ud604\uc7ac ref\uc758 \uac12\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/2yh3vt?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"ref\ub294 React\uac00 \ucd94\uc801\ud558\uc9c0 \uc54a\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ube44\ubc00 \uc800\uc7a5\uc18c\uc785\ub2c8\ub2e4. \uc608\ub97c\ub4e4\uc5b4 \uc5ec\ub7ec\ubd84\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#return_value"},"timeout IDs"),"\ub098\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element"},"Dom \uc694\uc18c\ub4e4"),", \uadf8\ub9ac\uace0 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub80c\ub354\ub9c1 \uacb0\uacfc\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0\uc54a\ub294 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc744 \uc800\uc7a5\ud558\ub294\ub370 ref\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"\uc815\ubcf4\ub97c \uae30\uc5b5\ud558\ub294\ub370 refs\ub97c \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ud558\ub294\uc9c0 \ubc30\uc6b0\uace0 \uc2f6\ub2e4\uba74 Refs\ub85c \uac12 \ucc38\uc870\ud558\uae30\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694",link:"https://beta.reactjs.org/learn/referencing-values-with-refs",mdxType:"Card"}),(0,r.kt)("h2",{id:"refs\ub85c-dom-\uc870\uc791\ud558\uae30"},"refs\ub85c DOM \uc870\uc791\ud558\uae30"),(0,r.kt)("p",null,"React\ub294 \uc5ec\ub7ec\ubd84\uc758 \ub80c\ub354\ub9c1 \uacb0\uacfc\uc640 \uc77c\uce58\uc2dc\ud0a4\uae30\uc704\ud574 DOM\uc744 \uc790\ub3d9\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \ub54c\ubb38\uc5d0, \uc5ec\ub7ec\ubd84\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc790\uc8fc \uc774\uc5d0 \ub300\ud574 \uc870\uc791\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uac00\ub054 \uc5ec\ub7ec\ubd84\uc740 React\uc5d0 \uc870\uc791\ub418\ub294 DOM \uc694\uc18c\ub4e4\uc5d0 \uc811\uadfc\ud574\uc57c\ud560 \ud544\uc694\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4 - \uc608\ub97c \ub4e4\uc5b4, node\uc5d0 \ud3ec\ucee4\uc2f1\ud558\uae30 \uc704\ud574, scroll\ud558\uae30 \uc704\ud574, \ud639\uc740 \uc0ac\uc774\uc988\uc640 \uc704\uce58\ub97c \uc54c\uc544\ub0b4\uae30 \uc704\ud574\uc11c\uc785\ub2c8\ub2e4.\nReact\ub294 \uc774\ub97c \uc704\ud55c \ub0b4\uc7a5 \uae30\ub2a5\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc5ec\ub7ec\ubd84\uc740 DOM \ub178\ub4dc\uc758 ref\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc608\ub97c\ub4e4\uc5b4, \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec ref\ub97c \uc0ac\uc6a9\ud558\ub294 input\uc5d0 \ud3ec\ucee4\uc2f1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/k2uec3?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"React\uc5d0 \uc758\ud574 \uc870\uc791\ub418\ub294 DOM\uc694\uc18c\ub4e4\uc5d0 \uc811\uadfc\ud558\ub294 \ubc95\uc744 \ubc30\uc6b0\uace0\uc2f6\ub2e4\uba74 Refs\ub85c DOM \uc870\uc791\ud558\uae30\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694",link:"https://beta.reactjs.org/learn/manipulating-the-dom-with-refs",mdxType:"Card"}),(0,r.kt)("h2",{id:"effects\ub85c-\ub3d9\uae30\ud654\ud558\uae30"},"Effects\ub85c \ub3d9\uae30\ud654\ud558\uae30"),(0,r.kt)("p",null,"\uc77c\ubd80 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \uc678\ubd80 \uc2dc\uc2a4\ud15c\ub4e4\uacfc \ub3d9\uae30\ud654\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 React \uc0c1\ud0dc\ub85c React\uae30\ubc18\uc774 \uc544\ub2cc \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc870\uc791\ud558\uac70\ub098, \uc11c\ubc84 \uc5f0\uacb0\uc744 \uc124\uc815\ud558\uac70\ub098,\n\ucef4\ud3ec\ub10c\ud2b8\uac00 \ud654\uba74\uc5d0 \ub098\ud0c0\ub0ac\uc744\ub54c \ubd84\uc11d log\ub97c \ubcf4\ub0b4\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc774 \ud2b9\uc815 \uc774\ubca4\ud2b8\ub4e4\uc744 \ucc98\ub9ac\ud558\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub4e4\uacfc\ub294 \ub2e4\ub974\uac8c, ",(0,r.kt)("em",{parentName:"p"},"Effects"),"\ub294 \uc5ec\ub7ec\ubd84\uc774 \ub80c\ub354\ub9c1 \uc774\ud6c4\uc5d0\n\ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. \uc774\ub97c \ud65c\uc6a9\ud558\uc5ec React \uc678\ubd80\uc758 \uc2dc\uc2a4\ud15c\uacfc \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub3d9\uae30\ud654\ud574\ubcf4\uc138\uc694."),(0,r.kt)("p",null,"\uc2dc\uc791/\uc815\uc9c0\ub97c \uc5ec\ub7ec\ubc88 \ub204\ub974\uace0 \ube44\ub514\uc624 \ud50c\ub808\uc774\uc5b4\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"isPlaying")," prop \uac12\uc5d0 \uc5b4\ub5bb\uac8c \ub3d9\uae30\ud654\ub418\uc5b4\uc788\ub294\uc9c0 \ubcf4\uc138\uc694."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/p3jxii?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,'\ub300\ubd80\ubd84\uc758 Effects\ub294 \ub610\ud55c \uc2e4\ud589 \ud6c4 "\uc815\ub9ac(clean up)"\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc608\ub97c\ub4e4\uc5b4 \uc5ec\ub7ec\ubd84\uc758 Effect\uac00 \ucc44\ud305\uc11c\ubc84\uc640\uc758 \uc5f0\uacb0\uc744 \uc124\uc815\ud558\uc600\ub2e4\uba74, React\uc5d0\uac8c \ucef4\ud3ec\ub10c\ud2b8\uc640\n\ucc44\ud305 \uc11c\ubc84\uc758 \uc5f0\uacb0\uc744 \uc885\ub8cc\ud558\ub77c\ub294 ',(0,r.kt)("em",{parentName:"p"},"cleanup function"),"\uc744 \ub9ac\ud134\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/58bmg8?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"\uac1c\ubc1c\uc5d0\uc11c\ub294, React\uac00 \uc989\uc2dc \uc2e4\ud589 \ud6c4 Effect\ub97c \ud55c\ubc88 \ub354 \uc815\ub9ac\ud569\ub2c8\ub2e4. \uc774\ub294 \uc5ec\ub7ec\ubd84\uc774\n",(0,r.kt)("inlineCode",{parentName:"p"},'"\u2705 Connecting..."'),"\ucd9c\ub825\uc744 \ub450 \ubc88 \ubcf4\ub294 \uc774\uc720\uc785\ub2c8\ub2e4. \uc774\ub85c\uc11c \uc5ec\ub7ec\ubd84\uc740 \uc815\ub9ac \ud568\uc218\ub97c \uc791\uc131\ud558\ub294 \uac83\uc744 \uc78a\uc9c0 \uc54a\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"\uc678\ubd80 \uc2dc\uc2a4\ud15c\uacfc \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \ub3d9\uae30\ud654\ud558\ub294 \ubc95\uc744 \ubc30\uc6b0\ub824\uba74 Effects\ub85c \ub3d9\uae30\ud654\ud558\uae30\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694",link:"https://beta.reactjs.org/learn/synchronizing-with-effects",mdxType:"Card"}),(0,r.kt)("h2",{id:"effect\uac00-\ud544\uc694-\uc5c6\uc744-\uc218-\uc788\uc2b5\ub2c8\ub2e4"},"Effect\uac00 \ud544\uc694 \uc5c6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,'Effects\ub294 React \ud328\ub7ec\ub2e4\uc784\uc758 \ud0c8\ucd9c\uad6c \uc785\ub2c8\ub2e4. \uc774\ub294 \uc5ec\ub7ec\ubd84\uc744 React "\ubc16\uc73c\ub85c", \uadf8\ub9ac\uace0 \uc5ec\ub7ec\ubd84\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc678\ubd80 \uc2dc\uc2a4\ud15c\uc5d0 \ub3d9\uae30\ud654\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.\n\ub9cc\uc57d \uad00\ub828\ub41c \uc678\ubd80 \uc2dc\uc2a4\ud15c\uc774 \uc5c6\ub2e4\uba74 (\uc608\ub97c \ub4e4\uc5b4, props\ub098 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub420\ub54c \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\uace0 \uc2f6\ub2e4\uba74), \uc5ec\ub7ec\ubd84\uc740 Effect\uac00 \ud544\uc694\uc5c6\uc2b5\ub2c8\ub2e4.\n\ubd88\ud544\uc694\ud55c Effects\ub97c \uc9c0\uc6b0\ub294 \uac83\uc740 \uc5ec\ub7ec\ubd84\uc758 \ucf54\ub4dc\ub97c \ub354 \uc27d\uac8c \ud314\ub85c\uc5c5\ud558\uace0, \ubc30\uc6b0\uace0, \uc5d0\ub7ec\ub97c \ub35c \ubc1c\uc0dd\ud558\uac8c \ud569\ub2c8\ub2e4.'),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc774 Effects\ub97c \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\ub294 \ub450\uac00\uc9c0 \ud754\ud55c \ucf00\uc774\uc2a4\uac00 \uc788\uc2b5\ub2c8\ub2e4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\ub80c\ub354\ub9c1\uc744 \uc704\ud55c \ub370\uc774\ud130 \ubcc0\uacbd\uc5d0 Effect\ub97c \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\uc720\uc800 \uc774\ubca4\ud2b8\ub97c \uc870\uc791\ud558\ub294\ub370 Effect\ub97c \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \uc5ec\ub7ec\ubd84\uc740 \ub2e4\ub978 \uc0c1\ud0dc\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \uc5b4\ub5a4 \uc0c1\ud0dc\ub97c \uc870\uc791\ud558\uae30 \uc704\ud574 Effect\ub97c \ud544\uc694\ub85c \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Form() {\n  const [firstName, setFirstName] = useState('Taylor');\n  const [lastName, setLastName] = useState('Swift');\n\n  // \ud83d\udd34 Avoid: redundant state and unnecessary Effect\n  const [fullName, setFullName] = useState('');\n  useEffect(() => {\n    setFullName(firstName + ' ' + lastName);\n  }, [firstName, lastName]);\n  // ...\n}\n")),(0,r.kt)("p",null,"\ub300\uc2e0\uc5d0, \ub80c\ub354\ub9c1\ub3d9\uc548 \uacc4\uc0b0\ud558\uace0 \uc2f6\uc740\ub9cc\ud07c \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Form() {\n  const [firstName, setFirstName] = useState('Taylor');\n  const [lastName, setLastName] = useState('Swift');\n  // \u2705 Good: calculated during rendering\n  const fullName = firstName + ' ' + lastName;\n  // ...\n}\n")),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc, \uc5ec\ub7ec\ubd84\uc740 \uc678\ubd80 \uc2dc\uc2a4\ud15c\uacfc\uc758 \ub3d9\uae30\ud654\ub97c \uc704\ud574\uc11c\ub294 Effects\uac00 ",(0,r.kt)("em",{parentName:"p"},"\uc815\ub9d0\ub85c")," \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"\ubd88\ud544\uc694\ud55c Effects\uc758 \uc81c\uac70\ub97c \ubc30\uc6b0\uace0 \uc2f6\ub2e4\uba74 \uc5ec\ub7ec\ubd84\uc740 Effect\uac00 \ud544\uc694 \uc5c6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694.",link:"https://beta.reactjs.org/learn/you-might-not-need-an-effect",mdxType:"Card"}),(0,r.kt)("h2",{id:"\ud65c\uc131\ud654\ub41c-effects\uc758-\uc0dd\uba85\uc8fc\uae30"},"\ud65c\uc131\ud654\ub41c Effects\uc758 \uc0dd\uba85\uc8fc\uae30"),(0,r.kt)("p",null,"Effects\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uacfc\ub294 \ub2e4\ub978 \uc0dd\uba85\uc8fc\uae30\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9c8\uc6b4\ud2b8\ub418\uace0, \uc5c5\ub370\uc774\ud2b8\ub418\uace0, \uc5b8\ub9c8\uc6b4\ud2b8 \ub429\ub2c8\ub2e4.\nEffect\ub294 \ub450\uac00\uc9c0\ub9cc \ud569\ub2c8\ub2e4: \uc5b4\ub5a4 \uac83\uc744 \ub3d9\uae30\ud654\ud558\uae30 \uc2dc\uc791\ud558\ub294 \uac83, \uadf8\ub9ac\uace0 \uc774\ud6c4\uc5d0 \ub3d9\uae30\ud654\ub97c \uadf8\ub9cc\ub450\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774 \uc0ac\uc774\ud074\uc740 \uc5ec\ub7ec\ubd84\uc758 Effect\uac00\n\ubcc0\ud654\ud558\ub294 props\ub098 \uc0c1\ud0dc\uc5d0 \uc758\uc874\ud558\uace0 \uc788\ub2e4\uba74 \uc5ec\ub7ec\ubc88 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 Effect\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"roomId")," prop\uc758 \uac12\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4. Props\ub294 ",(0,r.kt)("em",{parentName:"p"},"\ubcc0\ud654\ud558\ub294 \uac12"),"\uc774\uace0, \ub9ac\ub80c\ub354\ub9c1 \uc911\uc5d0 \ubcc0\ud560 \uc218 \uc788\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4.\nEffect\uac00 \uc5ec\ub7ec\ubd84\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"roomId"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud55c \ud6c4\uc5d0 ",(0,r.kt)("em",{parentName:"p"},"\uc7ac\ub3d9\uae30\ud654"),"(\uadf8\ub9ac\uace0 \uc11c\ubc84\uc5d0 \uc7ac \uc5f0\uacb0)\ud568\uc744 \ubcf4\uc138\uc694."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/q9fj0s?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"React\ub294 \uc5ec\ub7ec\ubd84\uc774 Effect\uc758 \uc758\uc874\uc131\ub4e4\uc744 \uc798 \uba85\uc2dc\ud588\ub294\uc9c0 \uccb4\ud06c\ud558\ub294 linter \uaddc\uce59\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc774 \uc704 \uc608\uc81c\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"roomId"),"\ub97c \uc758\uc874\uc131 \ub9ac\uc2a4\ud2b8\uc5d0\uc11c \uba85\uc2dc\ud558\ub294 \uac83\uc744 \uc78a\uc5c8\ub2e4\uba74, linter\uac00 \ubc84\uadf8\ub97c \uc790\ub3d9\uc73c\ub85c \ucc3e\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"Effect\uc640 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0dd\uc560\uc8fc\uae30\uac00 \uc5b4\ub5bb\uac8c \ub2e4\ub978\uc9c0\ub97c \ubc30\uc6b0\ub824\uba74 \ubcc0\ud558\ub294 \uc774\ubca4\ud2b8\uc758 \uc0dd\uc560\uc8fc\uae30\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694.",link:"https://beta.reactjs.org/learn/lifecycle-of-reactive-effects",mdxType:"Card"}),(0,r.kt)("h2",{id:"effect\uc5d0\uc11c-\uc774\ubca4\ud2b8\ub4e4-\ubd84\ub9ac\ud558\uae30"},"Effect\uc5d0\uc11c \uc774\ubca4\ud2b8\ub4e4 \ubd84\ub9ac\ud558\uae30"),(0,r.kt)("admonition",{title:"Under Constrction",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\uc774 \uc139\uc158\uc740 \uc5ec\ub7ec\ubd84\uc774 \uc544\uc9c1 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 ",(0,r.kt)("strong",{parentName:"p"},"React\uc5d0 \ucd94\uac00\ub418\uc9c0 \uc54a\uc740 \uc2e4\ud5d8\uc801 API"),"\ub97c \ubb18\uc0ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub294 \uc5ec\ub7ec\ubd84\uc774 \ub3d9\uc77c\ud55c \uc778\ud130\ub809\uc158\uc744 \uc7ac\uc2e4\ud589\ud560\ub54c\ub9cc \uc218\ud589\ub429\ub2c8\ub2e4. \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc640\ub294 \ub2e4\ub974\uac8c Effects\ub294 \ub9c8\uc9c0\ub9c9 \ub80c\ub354\ub9c1\uc5d0\uc11c\uc758\nprop \ub610\ub294 \uc0c1\ud0dc\uac12\uc774 \ub2ec\ub77c\uc84c\uc744 \ub54c \uc7ac \ub3d9\uae30\ud654\ub97c \uc218\ud589\ud569\ub2c8\ub2e4.\n\uac00\ub054 \uc5ec\ub7ec\ubd84\uc740 \uc774 \ub450 \ub3d9\uc791\uc744 \uc11e\uace0 \uc2f6\uc744 \uac83 \uc785\ub2c8\ub2e4: Effect\uac00 \uc5b4\ub5a4 \uac12\uc5d0\ub294 \ubc18\uc751\ud558\uc5ec \uc7ac\uc2e4\ud589\ub418\uace0, \ub2e4\ub978 \uac83\ub4e4\uc5d0\ub294 \uc2e4\ud589\ub418\uc9c0 \uc54a\ub3c4\ub85d \ub9d0\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"Effect \ub0b4\ubd80\uc758 \ubaa8\ub4e0 \ucf54\ub4dc\ub294 ",(0,r.kt)("em",{parentName:"p"},"\ubc18\uc751\ud615"),"\uc785\ub2c8\ub2e4. \ub9ac\ub80c\ub354\ub9c1\ub54c\ubb38\uc5d0 Effect\uac00 \uc77d\ub294 \ubc18\uc751\ud615 \uac12\uc774 \ubcc0\uacbd\ub418\uba74 \uc2e4\ud589\ub420 \uac83 \uc785\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4 \uc774 Effect\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"roomId"),"\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"theme"),"\uac00 \uc778\ud130\ub809\uc158 \ud6c4\uc5d0 \ubcc0\uacbd\ub418\uba74 \uc7ac\uc5f0\uacb0 \ud569\ub2c8\ub2e4."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/tpigyx?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"\uc774\ub294 \uc774\uc0c1\uc801\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"roomId"),"\uac00 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c\ub9cc \ucc44\ud305\uc5d0 \uc7ac\uc5f0\uacb0\ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"theme"),"\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc740 \ucc44\ud305\uc744 \uc7ac\uc5f0\uacb0\ud558\uba74 \uc548\ub429\ub2c8\ub2e4! Effect\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"theme"),"\ub97c \uc77d\ub294 \ucf54\ub4dc\ub97c ",(0,r.kt)("em",{parentName:"p"},"\uc774\ubca4\ud2b8 \ud568\uc218"),"\ub85c \uc62e\uae30\uc138\uc694."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/s065rq?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8 \ud568\uc218 \ub0b4\ubd80\uc758 \ucf54\ub4dc\ub294 \ubc18\uc751\uc801\uc774\uc9c0 \uc54a\uc73c\ubbc0\ub85c, ",(0,r.kt)("inlineCode",{parentName:"p"},"theme"),"\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc740 Effect\uac00 \uc7ac\uc5f0\uacb0\ud558\uac8c \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"\uc5b4\ub5a4 \uac12\ub4e4\uc774 Effect\ub97c \uc7ac \ud2b8\ub9ac\uac70\ud558\ub294 \uac83\uc744 \ub9c9\ub294 \ubc95\uc744 \ubc30\uc6b0\ub824\uba74 Effects\uc5d0\uc11c \uc774\ubca4\ud2b8 \ubd84\ub9ac\ud558\uae30\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694",link:"https://beta.reactjs.org/learn/separating-events-from-effects",mdxType:"Card"}),(0,r.kt)("h2",{id:"effect-\uc885\uc18d\uc131-\uc81c\uac70\ud558\uae30"},"Effect \uc885\uc18d\uc131 \uc81c\uac70\ud558\uae30"),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc774 Effect\ub97c \uc791\uc131\ud560 \ub54c, linter\ub294 \uc5ec\ub7ec\ubd84\uc774 Effect\uc758 \uc885\uc18d\uc131\uc5d0 \uc18d\ud55c \ubaa8\ub4e0 \ubc18\uc751\ud615 \uac12\ub4e4(props\ub098 \uc0c1\ud0dc\uc640 \uac19\uc740)\uc744 \ud3ec\ud568\ud558\uc600\ub294\uc9c0\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.\n\uc774\ub294 \uc5ec\ub7ec\ubd84\uc758 Effect\uac00 \uc5ec\ub7ec\ubd84\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc758 prop\uc774\ub098 \uc0c1\ud0dc\uc5d0 \ub3d9\uae30\ud654\ub41c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ub418\ub3c4\ub85d \ubcf4\uc7a5\ud574\uc90d\ub2c8\ub2e4. \ubd88\ud544\uc694\ud55c \uc885\uc18d\uc131\uc740 Effect\uac00 \ub108\ubb34 \uc790\uc8fc \ub3d9\uc791\ud558\ub3c4\ub85d \ud558\uac70\ub098,\n\uc2ec\uc9c0\uc5b4\ub294 \ubb34\ud55c\ub8e8\ud504\ub97c \ub9cc\ub4e4\uae30\ub3c4 \ud569\ub2c8\ub2e4. \uc774\ub97c \uc81c\uac70\ud558\ub294 \ubc29\ubc95\uc740 \uacbd\uc6b0\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, \uc774 Effect\ub294 \uc5ec\ub7ec\ubd84\uc774 input\uc744 \uc218\uc815\ud560 \ub54c\ub9c8\ub2e4 \uc7ac\uc0dd\uc131\ub418\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \uac1d\uccb4\uc5d0 \uc758\uc874\ud569\ub2c8\ub2e4."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/mgmub9?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 \ucc44\ud305\uc5d0\uc11c \uba54\uc2dc\uc9c0\ub97c \uc4f0\uae30 \uc2dc\uc791\ud560\ub54c\ub9c8\ub2e4 \ucc44\ud305\uc744 \uc7ac\uc5f0\uacb0 \ud558\uace0\uc2f6\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc81c\uc758 \ud574\uacb0\uc744 \uc704\ud574\uc11c,\n",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\uac1d\uccb4\uc758 \uc0dd\uc131\uc744 Effect\uc758 \ub0b4\ubd80\ub85c \uc62e\uae30\uace0 Effect\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"roomId")," \ubb38\uc790\uc5f4\uc5d0\ub9cc \uc758\uc874\ud558\ub3c4\ub85d \ud558\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/ee00ky?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \uc758\uc874\uc131\uc744 \uc81c\uac70\ud558\uae30 \uc704\ud574 \uc758\uc874\uc131 \ub9ac\uc2a4\ud2b8\ub97c \ud3b8\uc9d1\ud558\uba70 \uc2dc\uc791\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\uadf8\uac83\uc740 \uc798\ubabb\ub410\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub300\uc2e0\uc5d0, \uc8fc\ubcc0 \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uc5ec \uc758\uc874\uc131\uc774 ",(0,r.kt)("em",{parentName:"p"},"\ubd88\ud544\uc694"),"\ud558\uac8c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc740 \uc758\uc874\uc131 \ub9ac\uc2a4\ud2b8\ub97c \uc5ec\ub7ec\ubd84\uc758 Effect \ucf54\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubc18\uc751\ud615 \uac12\ub4e4\uc758 \ub9ac\uc2a4\ud2b8\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub429\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc740 \uc758\ub3c4\uc801\uc73c\ub85c \uadf8 \ub9ac\uc2a4\ud2b8\uc5d0 \ub4e4\uc5b4\uac08 \uac83\uc744 \uc815\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub9ac\uc2a4\ud2b8\uac00 \uc5ec\ub7ec\ubd84\uc758 \ucf54\ub4dc\ub97c \ubb18\uc0ac\ud558\ub294 \uac83 \uc785\ub2c8\ub2e4.\n\uc758\uc874\uc131 \ub9ac\uc2a4\ud2b8\ub97c \uc218\uc815\ud558\uae30 \uc704\ud574\uc11c\ub294, \ucf54\ub4dc\ub97c \uc218\uc815\ud558\uc138\uc694."),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"Effect\uac00 \ub35c \uc7ac\uc2e4\ud589\ub418\ub3c4\ub85d \ud558\ub294 \ubc95\uc744 \ubc30\uc6b0\ub824\uba74 Effect \uc758\uc874\uc131 \uc81c\uac70\ud558\uae30\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694.",link:"https://beta.reactjs.org/learn/removing-effect-dependencies",mdxType:"Card"}),(0,r.kt)("h2",{id:"\ucee4\uc2a4\ud140-\ud6c5\uc73c\ub85c-\ub85c\uc9c1-\uc7ac\uc0ac\uc6a9\ud558\uae30"},"\ucee4\uc2a4\ud140 \ud6c5\uc73c\ub85c \ub85c\uc9c1 \uc7ac\uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("p",null,"React\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"useState"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect"),"\uc640 \uac19\uc740 \ub0b4\ubd80 \ud6c5\uc73c\ub85c \uc774\ub904\uc9d1\ub2c8\ub2e4.\n\uac00\ub054 \uc5ec\ub7ec\ubd84\uc740 \ub354 \uad6c\uccb4\uc801\uc778 \ubaa9\uc801\uc744 \uac00\uc9c4 \ud6c5\uc774 \uc788\uae30\ub97c \ubc14\ub784 \uac83 \uc785\ub2c8\ub2e4: \uc608\ub97c \ub4e4\uc5b4 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30, \uc720\uc800\uac00 \uc811\uc18d \uc911\uc778\uc9c0 \uc9c0\uc18d\uc801\uc73c\ub85c \ud655\uc778\ud558\uae30, \ucc44\ud305\ubc29\uc5d0 \uc811\uc18d\ud558\uae30\uc758 \uacbd\uc6b0\uc785\ub2c8\ub2e4.\n\uc774\ub97c \uc704\ud574\uc11c, \uc5ec\ub7ec\ubd84\uc740 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud544\uc694\uc5d0 \ub530\ub77c \uac01\uc790\uc758 \ud6c5\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774 \uc608\uc2dc\uc5d0\uc11c, ",(0,r.kt)("inlineCode",{parentName:"p"},"usePointerPosition")," \ucee4\uc2a4\ud140 \ud6c5\uc740 \ucee4\uc11c\uc758 \uc704\uce58\ub97c \ucd94\uc801\ud569\ub2c8\ub2e4. \ubc18\uba74\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelayedValue"),' \ucee4\uc2a4\ud140 \ud6c5\uc740\n\uc5ec\ub7ec\ubd84\uc774 \ub118\uae34 \uac12\uc5d0\uc11c \ud2b9\uc815 \ubc00\ub9ac\ucd08\uac00 "\uc9c0\uc5f0\ub41c" \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\n\uc0cc\ub4dc\ubc15\uc2a4 \ud504\ub9ac\ubdf0 \uc601\uc5ed\uc5d0 \ucee4\uc11c\ub97c \uc62e\uae30\uace0 \ucee4\uc11c\ub97c \ub530\ub77c\ub2e4\ub2c8\ub294 \uc810\ub4e4\uc758 \uacbd\ub85c\uc774\ub3d9\uc744 \ubcf4\uc138\uc694.'),(0,r.kt)(l.E,{src:"https://codesandbox.io/s/b0714g?file=%2FApp.js&utm_medium=sandpack",mdxType:"Code"}),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 \ucee4\uc2a4\ud140 \ud6c5\uc744 \ub9cc\ub4e4\uace0, \ud569\uc131\ud558\uac70\ub098 \ub370\uc774\ud130\ub97c \uad50\ud658\ud558\uac70\ub098, \ucef4\ud3ec\ub10c\ud2b8\ub4e4 \uac04\uc5d0\uc11c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc758 \uc571\uc774 \uc131\uc7a5\ud560\uc218\ub85d, \uc774\ubbf8 \uc791\uc131\ub41c \ucee4\uc2a4\ud140 \ud6c5\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0, \ub354 \uc801\uc740 Effect\ub97c \uc791\uc131\ud560 \uac83 \uc785\ub2c8\ub2e4.\n\ub610\ud55c React \ucee4\ubba4\ub2c8\ud2f0\uc5d0 \uc758\ud574 \uc720\uc9c0\ub418\ub294 \ud6cc\ub96d\ud55c \ucee4\uc2a4\ud140 \ud6c5\uc774 \ub9ce\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(c.Z,{title:"Ready to learn this topic?",description:"\ucef4\ud3ec\ub10c\ud2b8\uac04\uc5d0 \ub85c\uc9c1\uc744 \uacf5\uc720\ud558\ub294 \ubc95\uc744 \ubc30\uc6b0\ub824\uba74 \ucee4\uc2a4\ud140 \ud6c5\uc73c\ub85c \ub85c\uc9c1 \uc7ac\uc0ac\uc6a9\ud558\uae30\ub97c \uc77d\uc5b4\ubcf4\uc138\uc694.",link:"https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks",mdxType:"Card"}),(0,r.kt)("h2",{id:"\ub2e4\uc74c\uc5d0-\ubc30\uc6b8-\uac83"},"\ub2e4\uc74c\uc5d0 \ubc30\uc6b8 \uac83"),(0,r.kt)("p",null,"\uc774 \ucc55\ud130\ub97c \ud398\uc774\uc9c0\ubcc4\ub85c \ubcf4\uae30\uc704\ud574 ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/referencing-values-with-refs"},"Refs\ub85c \uac12 \ucc38\uc870\ud558\uae30"),"\ub85c \uc774\ub3d9\ud558\uc138\uc694."))}m.isMDXComponent=!0}}]);