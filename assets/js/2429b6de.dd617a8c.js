"use strict";(self.webpackChunkreact_docs_beta_kor=self.webpackChunkreact_docs_beta_kor||[]).push([[210],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(r),u=n,d=k["".concat(i,".").concat(u)]||k[u]||m[u]||p;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<p;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8313:(e,t,r)=>{r.d(t,{E:()=>n});var a=r(7294);const n=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"sandpack-project",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},1635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(4137)),p=r(8313);const o={},l="UI \ud45c\ud604\ud558\uae30",i={unversionedId:"learn/Describing the UI/describing-the-ui",id:"learn/Describing the UI/describing-the-ui",title:"UI \ud45c\ud604\ud558\uae30",description:"React\ub294 \uc720\uc800 \uc778\ud130\ud398\uc774\uc2a4(UI)\ub97c \ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud55c JavaScript \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. UI\ub294 \ubc84\ud2bc, \ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0\uac19\uc740 \uc791\uc740 \ub2e8\uc704\ub4e4\ub85c\ubd80\ud130 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4. React\ub294 \uc774\ub4e4\uc744 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\uace0, \uc911\ucca9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc870\ud569\ud574\uc90d\ub2c8\ub2e4. \uc6f9 \uc0ac\uc774\ud2b8\ubd80\ud130 \uc2a4\ub9c8\ud2b8\ud3f0\uc758 \uc571\uae4c\uc9c0, \uc2a4\ud06c\ub9b0\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uac83\ub4e4\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ucabc\uac1c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \uc2dc\uac04\uc5d0\ub294 React \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0dd\uc131\ud558\uace0, \ucee4\uc2a4\ud140\ud558\uace0, \uc870\uac74\uc5d0 \ub530\ub77c \ud654\uba74\uc5d0 \uadf8\ub9ac\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ubc30\uc6b0\uac8c \ub429\ub2c8\ub2e4.",source:"@site/docs/learn/Describing the UI/describing-the-ui.mdx",sourceDirName:"learn/Describing the UI",slug:"/learn/Describing the UI/describing-the-ui",permalink:"/React-Docs-KOR/docs/learn/Describing the UI/describing-the-ui",draft:!1,editUrl:"https://github.com/line-next-level/React-Docs-KOR/tree/main/docs/learn/Describing the UI/describing-the-ui.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"React \uac1c\ubc1c\uc790 \ub3c4\uad6c",permalink:"/React-Docs-KOR/docs/learn/installation/react-developer-tools"},next:{title:"\uc5ec\ub7ec\ubd84\uc758 \uccab\ubc88\uc9f8 \ucef4\ud3ec\ub10c\ud2b8",permalink:"/React-Docs-KOR/docs/learn/Describing the UI/your-first-component"}},s={},c=[{value:"\uccab \ubc88\uc9f8 \ucef4\ud3ec\ub10c\ud2b8",id:"\uccab-\ubc88\uc9f8-\ucef4\ud3ec\ub10c\ud2b8",level:2},{value:"\ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubcf4\ub0b4\uace0(Exporting) \ubd88\ub7ec\uc624\uae30(Importing)",id:"\ucef4\ud3ec\ub10c\ud2b8-\ub0b4\ubcf4\ub0b4\uace0exporting-\ubd88\ub7ec\uc624\uae30importing",level:2},{value:"JSX\ub85c \ub9c8\ud06c\uc5c5 \uc791\uc131\ud558\uae30",id:"jsx\ub85c-\ub9c8\ud06c\uc5c5-\uc791\uc131\ud558\uae30",level:2},{value:"\uc911\uad04\ud638({})\ub97c \ud1b5\ud574 JSX\uc5d0 JavaScript \uc8fc\uc785\ud558\uae30",id:"\uc911\uad04\ud638\ub97c-\ud1b5\ud574-jsx\uc5d0-javascript-\uc8fc\uc785\ud558\uae30",level:2},{value:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 props \ub118\uaca8\uc8fc\uae30",id:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0-props-\ub118\uaca8\uc8fc\uae30",level:2},{value:"\uc870\uac74\ubd80 \ub80c\ub354\ub9c1",id:"\uc870\uac74\ubd80-\ub80c\ub354\ub9c1",level:2},{value:"\ubc30\uc5f4 \ub80c\ub354\ub9c1",id:"\ubc30\uc5f4-\ub80c\ub354\ub9c1",level:2},{value:"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc21c\uc218\ud558\uac8c \uc720\uc9c0\ud558\uae30",id:"\ucef4\ud3ec\ub10c\ud2b8\ub97c-\uc21c\uc218\ud558\uac8c-\uc720\uc9c0\ud558\uae30",level:2},{value:"\ub2e4\uc74c \ub0b4\uc6a9\uc740?",id:"\ub2e4\uc74c-\ub0b4\uc6a9\uc740",level:2}],m={toc:c};function k(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ui-\ud45c\ud604\ud558\uae30"},"UI \ud45c\ud604\ud558\uae30"),(0,n.kt)("p",null,"React\ub294 \uc720\uc800 \uc778\ud130\ud398\uc774\uc2a4(UI)\ub97c \ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud55c JavaScript \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. UI\ub294 \ubc84\ud2bc, \ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0\uac19\uc740 \uc791\uc740 \ub2e8\uc704\ub4e4\ub85c\ubd80\ud130 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4. React\ub294 \uc774\ub4e4\uc744 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud558\uace0, \uc911\ucca9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc870\ud569\ud574\uc90d\ub2c8\ub2e4. \uc6f9 \uc0ac\uc774\ud2b8\ubd80\ud130 \uc2a4\ub9c8\ud2b8\ud3f0\uc758 \uc571\uae4c\uc9c0, \uc2a4\ud06c\ub9b0\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uac83\ub4e4\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ucabc\uac1c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \uc2dc\uac04\uc5d0\ub294 React \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0dd\uc131\ud558\uace0, \ucee4\uc2a4\ud140\ud558\uace0, \uc870\uac74\uc5d0 \ub530\ub77c \ud654\uba74\uc5d0 \uadf8\ub9ac\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ubc30\uc6b0\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)("admonition",{title:"\uc774 \ub2e8\uc6d0\uc5d0\uc11c \ub2e4\ub8f0 \uac83\ub4e4",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/your-first-component"},"\uccab React \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5b4\ub5bb\uac8c \uc791\uc131\ud560 \uc218 \uc788\ub294\uc9c0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/importing-and-exporting-components"},"\uc5b8\uc81c \uadf8\ub9ac\uace0 \uc5b4\ub5bb\uac8c \ub2e4\uc911 \ucef4\ud3ec\ub10c\ud2b8 \ud30c\uc77c\uc744 \ub9cc\ub4dc\ub294\uc9c0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/writing-markup-with-jsx"},"JSX\ub97c \uc774\uc6a9\ud574 \ub9c8\ud06c\uc5c5\uc744 JavaScript\ub85c \ud45c\ud604\ud558\ub294 \ubc29\ubc95")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces"},"\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc911\uad04\ud638({})\uc640 JSX\ub97c \uc774\uc6a9\ud574 JavaScript \uae30\ub2a5\ub4e4\uc5d0 \uc811\uadfc\ud558\ub294 \ubc29\ubc95")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/passing-props-to-a-component"},"props\ub97c \uc774\uc6a9\ud574 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ubc29\ubc95")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/conditional-rendering"},"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc870\uac74\uc5d0 \ub530\ub77c \ub80c\ub354\ub9c1\ud558\ub294 \ubc29\ubc95")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/rendering-lists"},"\ud55c\ubc88\uc5d0 \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \ubc29\ubc95")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/keeping-components-pure"},"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc21c\uc218\ud558\uac8c \uc720\uc9c0\ud568\uc73c\ub85c\uc368 \ubc84\uadf8\ub97c \ubc29\uc9c0\ud558\ub294 \ubc29\ubc95")))),(0,n.kt)("h2",{id:"\uccab-\ubc88\uc9f8-\ucef4\ud3ec\ub10c\ud2b8"},"\uccab \ubc88\uc9f8 \ucef4\ud3ec\ub10c\ud2b8"),(0,n.kt)("p",null,"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub77c\uace0 \ubd80\ub974\ub294 \uaca9\ub9ac\ub41c UI \uc870\uac01\ub4e4\ub85c\ubd80\ud130 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4. React \ucef4\ud3ec\ub10c\ud2b8\ub294 JavaScript \ud568\uc218\uc774\uace0, \ub9c8\ud06c\uc5c5\uc744 \uc870\ud569\ud574 \uc791\uc131\ud569\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud558\ub098\uc758 \ubc84\ud2bc\ucc98\ub7fc \uc791\uc744\uc218\ub3c4 \uc788\uace0, \ud398\uc774\uc9c0 \uc804\uccb4\ub9cc\ud07c \ud074 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc608\uc2dc\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"Profile")," \ucef4\ud3ec\ub10c\ud2b8 \uc138 \uac1c\ub97c \ub80c\ub354\ub9c1\ud558\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"Gallery")," \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/fpeliw?file=/App.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n","[\uccab \ucef4\ud3ec\ub10c\ud2b8]","(",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/your-first-component"},"https://beta.reactjs.org/learn/your-first-component"),"\uc5d0 \ub300\ud574 \uc77d\uc73c\uba70 \uc5b4\ub5bb\uac8c React \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc120\uc5b8\ud558\uace0 \uc0ac\uc6a9\ud558\ub294\uc9c0 \ubc30\uc6cc\ubd05\uc2dc\ub2e4.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/your-first-component"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ucef4\ud3ec\ub10c\ud2b8-\ub0b4\ubcf4\ub0b4\uace0exporting-\ubd88\ub7ec\uc624\uae30importing"},"\ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubcf4\ub0b4\uace0(Exporting) \ubd88\ub7ec\uc624\uae30(Importing)"),(0,n.kt)("p",null,"\uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud558\ub098\uc758 \ud30c\uc77c\uc5d0\uc11c \uc120\uc5b8\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud070 \ud30c\uc77c\uc740 \ub458\ub7ec\ubcf4\uae30\uac00 \ubd88\ud3b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc801\uc808\ud55c \ud30c\uc77c\ub85c ",(0,n.kt)("em",{parentName:"p"},"\ub0b4\ubcf4\ub0b4\uae30(export)")," \ud574\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 ",(0,n.kt)("em",{parentName:"p"},"\ubd88\ub7ec\uc624\uae30(import)"),"\ub97c \ud1b5\ud574 \ub0b4\ubcf4\ub0b4\uc9c4 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub2e4\ub978 \ud30c\uc77c\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/y0onmc?file=%2FGallery.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/importing-and-exporting-components"},"\ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubcf4\ub0b4\uace0 \ubd88\ub7ec\uc624\uae30"),"\uc5d0 \ub300\ud574 \uc77d\uc73c\uba70 \uc5b4\ub5bb\uac8c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc801\uc808\ud55c \ud30c\uc77c\ub85c \ubd84\ub9ac\uc2dc\ud0ac\uc9c0 \ubc30\uc6cc\ubcf4\uc138\uc694.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/importing-and-exporting-components"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"jsx\ub85c-\ub9c8\ud06c\uc5c5-\uc791\uc131\ud558\uae30"},"JSX\ub85c \ub9c8\ud06c\uc5c5 \uc791\uc131\ud558\uae30"),(0,n.kt)("p",null,"\uac01\uac01\uc758 React \ucef4\ud3ec\ub10c\ud2b8\ub294 JavaScript \ud568\uc218\uc785\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub294 React\uac00 \ube0c\ub77c\uc6b0\uc800\ub97c \ud1b5\ud574 \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\ub294 \ub9c8\ud06c\uc5c5\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. React \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9c8\ud06c\uc5c5\uc744 JSX\ub77c\uace0 \ubd80\ub974\ub294 \ud655\uc7a5 \ubb38\ubc95\uc744 \ud1b5\ud574 \ud45c\ud604\ud569\ub2c8\ub2e4. JSX\ub294 HTML\uacfc \ube44\uc2b7\ud558\uac8c \uc0dd\uacbc\uc9c0\ub9cc, \uc870\uae08 \ub354 \uc5c4\uaca9\ud558\uace0, \ub300\uc2e0 \uc815\ubcf4\ub4e4\uc744 \ub354 \ub3d9\uc801\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"HTML \ub9c8\ud06c\uc5c5\uc744 \uadf8\ub300\ub85c React \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ubcf5\uc0ac\ud55c\ub2e4\uba74, \uc81c\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\uc744 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/d3kg8y?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("p",null,"HTML \ucf54\ub4dc\uac00 \uc704\ucc98\ub7fc \uc0dd\uacbc\ub2e4\uba74, ",(0,n.kt)("a",{parentName:"p",href:"https://transform.tools/html-to-jsx"},"converter"),"\ub97c \ud1b5\ud574 \uace0\uccd0\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/y0rfhq?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc560 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/writing-markup-with-jsx"},"JSX\ub85c \ub9c8\ud06c\uc5c5 \uc791\uc131\ud558\uae30"),"\uc5d0 \ub300\ud574 \uc77d\uace0 \uc5b4\ub5bb\uac8c \uc720\ud6a8\ud55c JSX\ub97c \uc791\uc131\ud558\ub294\uc9c0 \ubc30\uc6cc\ubcf4\uc138\uc694.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/writing-markup-with-jsx"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc911\uad04\ud638\ub97c-\ud1b5\ud574-jsx\uc5d0-javascript-\uc8fc\uc785\ud558\uae30"},"\uc911\uad04\ud638({})\ub97c \ud1b5\ud574 JSX\uc5d0 JavaScript \uc8fc\uc785\ud558\uae30"),(0,n.kt)("p",null,"JSX\ub294 HTML\ucc98\ub7fc \uc0dd\uae34 \ub9c8\ud06c\uc5c5 \ubb38\ubc95\uc785\ub2c8\ub2e4. JavaScript \ud30c\uc77c \ub0b4\ubd80\uc5d0 \uc4f8 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub80c\ub354\ub9c1 \ub85c\uc9c1\uacfc \ub0b4\uc6a9\uc744 \ud55c \uacf3\uc5d0\uc11c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uac00\ub054 \uc5ec\ub7ec\ubd84\uc740 \ub9c8\ud06c\uc5c5 \uc548\uc5d0 \uc57d\uac04\uc758 JavaScript \ub85c\uc9c1\uc774\ub098 \ub3d9\uc801\uc778 \ud504\ub85c\ud37c\ud2f0\uc5d0 \ub300\ud55c \ucc38\uc870\ub97c \uc9d1\uc5b4\ub123\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \uc0c1\ud669\uc5d0\uc11c\ub294 \uc911\uad04\ud638({})\ub97c JSX \uc548\uc5d0 \uc500\uc73c\ub85c\uc368 JavaScript\uc5d0\uac8c \uc77c\uc885\uc758 '\ucc3d\ubb38'\uc744 \uc5f4\uc5b4\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/osbftg?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces"},"\uc911\uad04\ud638({})\ub97c \uc774\uc6a9\ud574 JSX\uc548\uc5d0 JavaScript \uc791\uc131\ud558\uae30"),"\ub97c \uc77d\uace0 \uc5b4\ub5bb\uac8c JSX \ub0b4\ubd80\uc5d0\uc11c JavaScript \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294\uc9c0\ub97c \ubc30\uc6cc\ubcf4\uc138\uc694.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ucef4\ud3ec\ub10c\ud2b8\uc5d0-props-\ub118\uaca8\uc8fc\uae30"},"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 props \ub118\uaca8\uc8fc\uae30"),(0,n.kt)("p",null,"React \ucef4\ud3ec\ub10c\ud2b8\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub07c\ub9ac \uc18c\ud1b5\ud558\uae30 \uc704\ud574 ",(0,n.kt)("em",{parentName:"p"},"props"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\ub294 props\ub97c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uac8c \ub118\uaca8\uc90c\uc73c\ub85c\uc368 \uc815\ubcf4\ub97c \uc804\ub2ec\ud574\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Props\ub294 HTML \uc18d\uc131(attribute)\uc640 \ube44\uc2b7\ud558\uac8c \uc0dd\uacbc\uc2b5\ub2c8\ub2e4. \uadf8\uce58\ub9cc props\ub97c \ud1b5\ud574\uc11c\ub77c\uba74 \uc5b4\ub5a4 JavaScript \uac12\uc774\ub77c\ub3c4 \ub118\uaca8\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac1d\uccb4, \ubc30\uc5f4, \ud568\uc218, \uc2ec\uc9c0\uc5b4 JSX\uae4c\uc9c0 \ub9d0\uc774\uc8e0!"),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/bjo8uo?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-props-to-a-component"},"Props\ub97c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub118\uaca8\uc8fc\uae30"),"\ub97c \uc77d\uace0 \uc5b4\ub5bb\uac8c props\ub97c \uc804\ub2ec\ud558\ub294\uc9c0 \ubc30\uc6cc\ubcf4\uc138\uc694.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-props-to-a-component"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\uc870\uac74\ubd80-\ub80c\ub354\ub9c1"},"\uc870\uac74\ubd80 \ub80c\ub354\ub9c1"),(0,n.kt)("p",null,"\uc885\uc885 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc5b4\ub5a4 \uc870\uac74\uc5d0 \ub530\ub77c \ub2e4\ub978 \ub0b4\uc6a9\uc744 \ubcf4\uc5ec\uc918\uc57c \ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. React\uc5d0\uc11c\ub294 JavsScript \ubb38\ubc95\uc744 \ud1b5\ud574 \uc870\uac74\ubd80\ub85c JSX\ub97c \ub80c\ub354\ub9c1\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. ",(0,n.kt)("inlineCode",{parentName:"p"},"if"),"\ubb38\uc774\ub098 ",(0,n.kt)("inlineCode",{parentName:"p"},"&&"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"? :")," \uc5f0\uc0b0\uc790\ub97c \uc774\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, JavaScript\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"&&")," \uc5f0\uc0b0\uc790\ub294 \uc870\uac74\ubd80\ub85c \uccb4\ud06c \ub9c8\ud06c\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/vxp3oy?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/conditional-rendering"},"\uc870\uac74\ubd80 \ub80c\ub354\ub9c1"),"\uc744 \uc77d\uace0 \uc870\uac74\ubd80\ub85c \ud654\uba74\uc744 \uadf8\ub9ac\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ubc30\uc6cc\ubcf4\uc138\uc694.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/conditional-rendering"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ubc30\uc5f4-\ub80c\ub354\ub9c1"},"\ubc30\uc5f4 \ub80c\ub354\ub9c1"),(0,n.kt)("p",null,"\uac00\ub054 \uc5ec\ub7ec\ubd84\uc740 \ub370\uc774\ud130 \ubaa8\uc74c(collection)\uc73c\ub85c\ubd80\ud130 \uc5ec\ub7ec\uac1c\uc758 \uc720\uc0ac\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uadf8\ub9ac\uace0 \uc2f6\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. React\uc640 \ud568\uaed8 JavaScript\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"filter()"),"\uc640 ",(0,n.kt)("inlineCode",{parentName:"p"},"map()"),"\uc744 \uc774\uc6a9\ud558\uba74 \ub370\uc774\ud130 \ubc30\uc5f4\uc744 \ud544\ud130\ub9c1\ud558\uac70\ub098 \ubcc0\ud615\uc2dc\ucf1c \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubc30\uc5f4\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/858nk9?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/rendering-lists"},"\ubc30\uc5f4 \ub80c\ub354\ub9c1"),"\uc744 \uc77d\uace0 \uc5b4\ub5bb\uac8c \ucef4\ud3ec\ub10c\ud2b8 \ubc30\uc5f4\uc744 \ub80c\ub354\ub9c1\ud558\ub294\uc9c0, \uc5b4\ub5bb\uac8c key\ub97c \uace0\ub974\ub294\uc9c0\uc5d0 \ub300\ud574 \ubc30\uc6cc\ubcf4\uc138\uc694.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/rendering-lists"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ucef4\ud3ec\ub10c\ud2b8\ub97c-\uc21c\uc218\ud558\uac8c-\uc720\uc9c0\ud558\uae30"},"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc21c\uc218\ud558\uac8c \uc720\uc9c0\ud558\uae30"),(0,n.kt)("p",null,"\uba87\uba87 JavaScript \ud568\uc218\ub4e4\uc740 \uc21c\uc218\ud569\ub2c8\ub2e4. \uc21c\uc218 \ud568\uc218\ub780"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uc678\ubd80 \uc0c1\ud669\uc5d0 \uad00\uc2ec\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")," \uc21c\uc218 \ud568\uc218\ub294 \uc790\uae30\uac00 \ud638\ucd9c\ub418\uae30 \uc774\uc804\uc758 \uc5b4\ub5a4 \uac1d\uccb4\ub098 \ubcc0\uc218\ub3c4 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uac19\uc740 \uc785\ub825\uc740 \uc5b8\uc81c\ub098 \uac19\uc740 \ucd9c\ub825\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4.")," \uc21c\uc218 \ud568\uc218\ub294 \uac19\uc740 \uc778\uc790\ub97c \uc8fc\uc5c8\uc744 \ub54c \uc5b8\uc81c\ub098 \uac19\uc740 \uacb0\uacfc(return)\ub97c \ub3cc\ub824\uc90d\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc21c\uc218 \ud568\uc218\ucc98\ub7fc \uc5c4\uaca9\ud558\uac8c \uc791\uc131\ud55c\ub2e4\uba74, \ucf54\ub4dc\uac00 \ucee4\uc9c0\ub354\ub77c\ub3c4 \uc5ec\ub7ec\ubd84\uc744 \ub2f9\ud669\uc2a4\ub7fd\uac8c \ud558\ub294 \ubc84\uadf8\ub4e4\uacfc \uc608\uce21 \ubd88\uac00\ub2a5\ud55c \ub3d9\uc791\ub4e4\uc744 \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc608\uc2dc\ub294 \uc21c\uc218\ud558\uc9c0 \uc54a\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/3r1fvp?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("p",null,"\uae30\uc874 \ubcc0\uc218\ub97c \uc218\uc815\ud558\ub294 \ub300\uc2e0 prop\uc744 \ub118\uaca8\uc8fc\ub294 \uac83\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc21c\uc218\ud558\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(p.E,{src:"https://codesandbox.io/s/4xcolt?file=%2FApp.js&from-sandpack=true",mdxType:"Code"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ubc30\uc6b8 \uc900\ube44\uac00 \ub418\uc168\ub098\uc694?"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/keeping-components-pure"},"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc21c\uc218\ud558\uac8c \uc720\uc9c0\ud558\uae30"),"\ub97c \uc77d\uace0 \uc5b4\ub5bb\uac8c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc21c\uc218\ud558\uace0 \uc608\uce21 \uac00\ub2a5\ud55c \ud568\uc218\ucc98\ub7fc \uc791\uc131\ud560 \uc218 \uc788\ub294\uc9c0 \ubc30\uc6cc\ubcf4\uc138\uc694.\n",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/keeping-components-pure"},"\ub354 \uc77d\uc5b4\ubcf4\uae30"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\ub2e4\uc74c-\ub0b4\uc6a9\uc740"},"\ub2e4\uc74c \ub0b4\uc6a9\uc740?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/your-first-component"},"\uccab \ucef4\ud3ec\ub10c\ud2b8"),"\ubd80\ud130 \uc2dc\uc791\ud574 \uc774\ubc88 \ub2e8\uc6d0\uc744 \uc77d\uc5b4\ubcf4\uc138\uc694.\n\uc774\ubbf8 \uc774 \uc8fc\uc81c\uc5d0 \ub300\ud574 \uc798 \uc54c\uace0 \uc788\ub2e4\uba74, ",(0,n.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/adding-interactivity"},"\uc0c1\ud638\uc791\uc6a9 \ucd94\uac00\ud558\uae30"),"\ub294 \uc5b4\ub5a0\uc2e0\uac00\uc694?"))}k.isMDXComponent=!0}}]);