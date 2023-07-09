"use strict";(self.webpackChunkreact_docs_beta_kor=self.webpackChunkreact_docs_beta_kor||[]).push([[120],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=l(n),u=r,m=k["".concat(p,".").concat(u)]||k[u]||d[u]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5490:(e,t,n)=>{n.d(t,{R:()=>r});var a=n(7294);const r=e=>{let{children:t}=e;return a.createElement("div",{className:"rsdlg70"},t)}},8313:(e,t,n)=>{n.d(t,{E:()=>r});var a=n(7294);const r=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"sandpack-project",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},3705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(4137)),o=n(8313);n(5490);const s={},i="Reducer\uc640 Context\ub97c \ud1b5\ud574 \ud655\uc7a5\ud558\uae30",p={unversionedId:"learn/Managing State/scaling-up-with-reducer-and-context",id:"learn/Managing State/scaling-up-with-reducer-and-context",title:"Reducer\uc640 Context\ub97c \ud1b5\ud574 \ud655\uc7a5\ud558\uae30",description:"Reducer\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc744 \ud1b5\ud569\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. Context\ub97c \uc0ac\uc6a9\ud558\uba74 \uc815\ubcf4\ub97c \ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8 \uae4a\uc219\ud788\uae4c\uc9c0 \uc804\ub2ec\ud574\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/learn/Managing State/scaling-up-with-reducer-and-context.mdx",sourceDirName:"learn/Managing State",slug:"/learn/Managing State/scaling-up-with-reducer-and-context",permalink:"/React-Docs-KOR/docs/learn/Managing State/scaling-up-with-reducer-and-context",draft:!1,editUrl:"https://github.com/line-next-level/React-Docs-KOR/tree/main/docs/learn/Managing State/scaling-up-with-reducer-and-context.mdx",tags:[],version:"current",frontMatter:{},sidebar:"learnSidebar",previous:{title:"\uc0c1\ud0dc\ub97c \ud1b5\ud574 \uc785\ub825\uac12\uc5d0 \ubc18\uc751\ud558\uae30",permalink:"/React-Docs-KOR/docs/learn/Managing State/reacting-to-input-with-state"},next:{title:"\ucef4\ud3ec\ub10c\ud2b8 \uac04 \uc0c1\ud0dc \uacf5\uc720",permalink:"/React-Docs-KOR/docs/learn/Managing State/sharing-state-between-components"}},l={},c=[{value:"Reducer\uc640 context \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30",id:"reducer\uc640-context-\ud568\uaed8-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"1\ub2e8\uacc4 : context \ub9cc\ub4e4\uae30",id:"1\ub2e8\uacc4--context-\ub9cc\ub4e4\uae30",level:3},{value:"2\ub2e8\uacc4 : \uc0c1\ud0dc\uc640 dispatch\ub97c context\uc5d0 \uc9d1\uc5b4 \ub123\uae30",id:"2\ub2e8\uacc4--\uc0c1\ud0dc\uc640-dispatch\ub97c-context\uc5d0-\uc9d1\uc5b4-\ub123\uae30",level:3},{value:"3\ub2e8\uacc4 : context\ub97c \ud2b8\ub9ac \uc5b4\ub514\uc11c\ub4e0 \uc0ac\uc6a9\ud558\uae30",id:"3\ub2e8\uacc4--context\ub97c-\ud2b8\ub9ac-\uc5b4\ub514\uc11c\ub4e0-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"\ubaa8\ub4e0 \ubc30\uc120\ub4e4\uc744 \ud558\ub098\uc758 \ud30c\uc77c\uc5d0 \uc815\ub9ac\ud558\uae30",id:"\ubaa8\ub4e0-\ubc30\uc120\ub4e4\uc744-\ud558\ub098\uc758-\ud30c\uc77c\uc5d0-\uc815\ub9ac\ud558\uae30",level:2},{value:"\ub418\uc9da\uc5b4\ubcf4\uae30",id:"\ub418\uc9da\uc5b4\ubcf4\uae30",level:2}],d={toc:c};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reducer\uc640-context\ub97c-\ud1b5\ud574-\ud655\uc7a5\ud558\uae30"},"Reducer\uc640 Context\ub97c \ud1b5\ud574 \ud655\uc7a5\ud558\uae30"),(0,r.kt)("p",null,"Reducer\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc744 \ud1b5\ud569\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. Context\ub97c \uc0ac\uc6a9\ud558\uba74 \uc815\ubcf4\ub97c \ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8 \uae4a\uc219\ud788\uae4c\uc9c0 \uc804\ub2ec\ud574\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ubcf5\uc7a1\ud55c \ud654\uba74\uc744 \ud45c\ud604\ud560\ub54c\ub294 reducer\uc640 context\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"\uc5ec\ub7ec\ubd84\uc774 \ubc30\uc6b8 \uac83",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"reducer\uc640 context\ub97c \uacb0\ud569\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub97c prop\uc73c\ub85c \ubc1b\uc9c0 \uc54a\uace0\ub3c4 \uc804\ub2ec\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("li",{parentName:"ul"},"context\uc640 \uc0c1\ud0dc\ub97c \uac00\uae31 \ub2e4\ub978 \ud30c\uc77c\uc5d0\uc11c \uad00\ub9ac\ud558\ub294 \ubc29\ubc95"))),(0,r.kt)("h2",{id:"reducer\uc640-context-\ud568\uaed8-\uc0ac\uc6a9\ud558\uae30"},"Reducer\uc640 context \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer"},"Reducer\ub97c \uc18c\uac1c\ud558\ub294")," \uae00\uc5d0\uc11c \uac00\uc838\uc628 \uc544\ub798 \uc608\uc2dc\uc5d0\uc11c\ub294\n\uc0c1\ud0dc\ub97c reducer\ub97c \ud1b5\ud574 \uad00\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\nReducer \ud568\uc218\ub294 \ubaa8\ub4e0 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud654\uace0 \uc788\uace0, \ud30c\uc77c \ud558\ub2e8\uc5d0 \uc120\uc5b8\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.E,{src:"https://codesandbox.io/embed/naughty-keldysh-u5b2fk?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,r.kt)("p",null,"Reducer\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc9e7\uace0 \uac04\uacb0\ud558\uac8c \uc791\uc131\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc5ec\ub7ec\ubd84\uc758 \uc571\uc774 \ucee4\uc9c8 \uacbd\uc6b0, \ub610 \ub2e4\ub978 \uc5b4\ub824\uc6c0\uc5d0 \ubd09\ucc29\ud558\uac8c \ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("strong",{parentName:"p"},"\uc704 \uc608\uc2dc\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"strong"},"tasks")," \uc0c1\ud0dc\uc640 ",(0,r.kt)("inlineCode",{parentName:"strong"},"dispatch")," \ud568\uc218\ub294 \uc624\uc9c1 \ucd5c\uc0c1\uc704 \ub808\ubca8\uc778 ",(0,r.kt)("inlineCode",{parentName:"strong"},"TaskApp")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),"\n\ub2e4\ub978 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc774 tasks \ubc30\uc5f4\uc744 \uc77d\uac70\ub098 \ubcc0\uacbd\ud558\uac8c \ud558\uae30 \uc704\ud574\uc11c\ub294 \uba85\uc2dc\uc801\uc73c\ub85c \ud604\uc7ac \uc0c1\ud0dc\uc640 \uc774\ub97c \ubc14\uafc0 \uc218 \uc788\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c props\ub85c \ub0b4\ub824\uc8fc\uc5b4\uc57c\ub9cc \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskApp"),"\uc740 task\ub4e4\uc758 \ubc30\uc5f4\uacfc \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskList"),"\uc5d0\uac8c \uc804\ub2ec\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<TaskList\n  tasks={tasks}\n  onChangeTask={handleChangeTask}\n  onDeleteTask={handleDeleteTask}\n/>\n")),(0,r.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskList"),"\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),"\uc5d0\uac8c \uc804\ub2ec\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Task\n  task={task}\n  onChange={onChangeTask}\n  onDelete={onDeleteTask}\n/>\n")),(0,r.kt)("p",null,"\uc774\ub7f0 \uc791\uc740 \uc608\uc2dc\uc5d0\uc11c\ub294 \uc798 \ub3d9\uc791\ud558\uc9c0\ub9cc, \uc911\uac04\uc5d0 \uc218\ubc31 \uc218\ucc9c\uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc774 \uc788\ub2e4\uba74 \uc0c1\ud0dc\uc640 \ud568\uc218\ub4e4\uc744 \ub0b4\ub824\uc8fc\ub294 \uac83\uc740 \uaf64 \ubcf5\uc7a1\ud55c \uc791\uc5c5\uc77c\uac81\ub2c8\ub2e4!"),(0,r.kt)("p",null,"\uc774\ub807\uac8c props\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \ub0b4\ub824\uc8fc\ub294\uac83\uc758 \ub300\uc548\uc73c\ub85c\uc368, \uc5ec\ub7ec\ubd84\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \ud568\uc218\ub97c\n",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context"},"context\ub97c \ud1b5\ud574")," \ub0b4\ub824\uc8fc\uae38 \uc6d0\ud560\uac81\ub2c8\ub2e4.\n",(0,r.kt)("strong",{parentName:"p"},"\uc774 \ubc29\ubc95\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"strong"},"TaskApp"),' \uc544\ub798\uc5d0 \uc788\ub294 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\ub77c\ub3c4 "prop drilling" \uc5c6\uc774 tasks\uc640 dispatch \ud568\uc218\ub97c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.')),(0,r.kt)("p",null,"reducer\ub97c context\uc640 \uc870\ud569\ud560\ub54c\ub294 \uc774\ub807\uac8c \ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Context\ub97c ",(0,r.kt)("strong",{parentName:"li"},"\ub9cc\ub4ed\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},"\uc0c1\ud0dc\uc640 dispatch\ub97c context\uc5d0 ",(0,r.kt)("strong",{parentName:"li"},"\uc9d1\uc5b4 \ub123\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},"Context\ub97c \ud2b8\ub9ac \uc5b4\ub514\uc11c\ub4e0 \uc811\uadfc\ud574 ",(0,r.kt)("strong",{parentName:"li"},"\uc0ac\uc6a9\ud569\ub2c8\ub2e4."))),(0,r.kt)("h3",{id:"1\ub2e8\uacc4--context-\ub9cc\ub4e4\uae30"},"1\ub2e8\uacc4 : context \ub9cc\ub4e4\uae30"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useReducer")," \ud6c5\uc740 \ud604\uc7ac ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks"),"\uc640 \uc774 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," \ud568\uc218\ub97c \ub9ac\ud134\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\n")),(0,r.kt)("p",null,"\uc774\ub97c \ud2b8\ub9ac \uc544\ub798\ub85c \uc804\ub2ec\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub450 \uac1c\uc758 \uc11c\ub85c \ub2e4\ub978 context\ub97c ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context#step-2-use-the-context"},"\uc0dd\uc131"),"\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TasksContext"),"\ub294 \ud604\uc7ac\uc758 task \ubc30\uc5f4\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TasksDispatchContext"),"\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 dispatch \ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud568\uc218\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc774 \ub450 context\ub97c \ud558\ub098\uc758 \ud30c\uc77c\uc5d0 \ub450\uace0 \ub0b4\ubcf4\ub0b4\uba74(export) \uc774\ud6c4\uc5d0 \ub2e4\ub978 \ud30c\uc77c\uc5d0\uc11c \ubd88\ub7ec\uc640(import) \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.E,{src:"https://codesandbox.io/embed/green-firefly-1n71cs?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c \uc5ec\ub7ec\ubd84\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \uae30\ubcf8\uac12\uc73c\ub85c \ub450 context\uc5d0 \uc804\ub2ec\ud588\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c \uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskApp")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc758\ud574 \ucc44\uc6cc\uc9c0\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"2\ub2e8\uacc4--\uc0c1\ud0dc\uc640-dispatch\ub97c-context\uc5d0-\uc9d1\uc5b4-\ub123\uae30"},"2\ub2e8\uacc4 : \uc0c1\ud0dc\uc640 dispatch\ub97c context\uc5d0 \uc9d1\uc5b4 \ub123\uae30"),(0,r.kt)("p",null,"\uc774\uc81c \ub450 context\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskApp")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ubd88\ub7ec\uc635\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"useReducer()"),"\uc5d0\uc11c \ubc18\ud658\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\ub97c \uc774\ud558 \ud2b8\ub9ac \uc804\uccb4\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context#step-3-provide-the-context"},"\uc804\ub2ec"),"\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { TasksContext, TasksDispatchContext } from './TasksContext.js';\n\nexport default function TaskApp() {\n  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\n  // ...\n  return (\n    <TasksContext.Provider value={tasks}>\n      <TasksDispatchContext.Provider value={dispatch}>\n        ...\n      </TasksDispatchContext.Provider>\n    </TasksContext.Provider>\n  );\n}\n")),(0,r.kt)("p",null,"\uc9c0\uae08\uc740 \uc815\ubcf4\ub4e4\uc744 props\ub85c \uc804\ub2ec\ud558\uae30\ub3c4 \ud558\uace0 \ub3d9\uc2dc\uc5d0 context\ub85c\ub3c4 \uc804\ub2ec\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.E,{src:"https://codesandbox.io/embed/keen-antonelli-kfvrn7?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,r.kt)("p",null,"\ub2e4\uc74c \ub2e8\uacc4\uc5d0\uc11c\ub294 props\ub97c \ud1b5\ud574 \uc804\ub2ec\ud558\ub294 \ubc29\uc2dd\uc744 \uc81c\uac70\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"3\ub2e8\uacc4--context\ub97c-\ud2b8\ub9ac-\uc5b4\ub514\uc11c\ub4e0-\uc0ac\uc6a9\ud558\uae30"},"3\ub2e8\uacc4 : context\ub97c \ud2b8\ub9ac \uc5b4\ub514\uc11c\ub4e0 \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("p",null,"\uc774\uc81c \uc6b0\ub9ac\ub294 task\ub4e4\uc758 \ubc30\uc5f4\uc774\ub098 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \ud2b8\ub9ac \uc544\ub798\ub85c \uc804\ub2ec\ud574\uc904 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<TasksContext.Provider value={tasks}>\n  <TasksDispatchContext.Provider value={dispatch}>\n    <h1>Day off in Kyoto</h1>\n    <AddTask />\n    <TaskList />\n  </TasksDispatchContext.Provider>\n</TasksContext.Provider>\n")),(0,r.kt)("p",null,"\ub300\uc2e0 task \ubc30\uc5f4\uc774 \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub204\uad6c\ub77c\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskContext"),"\uc5d0 \uc811\uadfc\ud574 \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function TaskList() {\n  const tasks = useContext(TasksContext);\n  // ...\n")),(0,r.kt)("p",null,"\ub610\ud55c \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\ub4e0 context\ub85c\ubd80\ud130 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\ub97c \uaebc\ub0b4\uc640 task \ub9ac\uc2a4\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function AddTask() {\n  const [text, setText] = useState('');\n  const dispatch = useContext(TasksDispatchContext);\n  // ...\n  return (\n    // ...\n    <button onClick={() => {\n      setText('');\n      dispatch({\n        type: 'added',\n        id: nextId++,\n        text: text,\n      });\n    }}>Add</button>\n    // ...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TaskApp")," \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc544\ubb34 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub3c4 \uc544\ub798\ub85c \uc804\ub2ec\ud558\uc9c0 \uc54a\uace0, \ub9c8\ucc2c\uac00\uc9c0\ub85c ",(0,r.kt)("inlineCode",{parentName:"strong"},"TaskList"),"\ub3c4 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c ",(0,r.kt)("inlineCode",{parentName:"strong"},"Task")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uac8c \uc804\ub2ec\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),"\n\uac01\uac01\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud544\uc694\ud560 \ub54c context\uc5d0 \uc811\uadfc\ud574 \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.E,{src:"https://codesandbox.io/embed/objective-tristan-8179bl?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc0c1\ud0dc\ub294 \uc5ec\uc804\ud788 \ucd5c\uc0c1\uc704 \ub808\ubca8\uc778 ",(0,r.kt)("inlineCode",{parentName:"strong"},"TaskApp")," \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc704\uce58\ud574 \uc788\uace0, ",(0,r.kt)("inlineCode",{parentName:"strong"},"useReducer"),"\ub97c \ud1b5\ud574 \uad00\ub9ac\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."),"\n\ud558\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskApp"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"tasks"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\ub294 \uc774\uc81c \ud2b8\ub9ac \uc544\ub798\uc5d0 \uc788\ub294 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\ub77c\ub3c4 context\ub97c \ubd88\ub7ec\uc640 \uc0ac\uc6a9\ud558\uba74 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ubaa8\ub4e0-\ubc30\uc120\ub4e4\uc744-\ud558\ub098\uc758-\ud30c\uc77c\uc5d0-\uc815\ub9ac\ud558\uae30"},"\ubaa8\ub4e0 \ubc30\uc120\ub4e4\uc744 \ud558\ub098\uc758 \ud30c\uc77c\uc5d0 \uc815\ub9ac\ud558\uae30"),(0,r.kt)("p",null,"\ud544\uc218\ub294 \uc544\ub2c8\uc9c0\ub9cc, reducer\uc640 context\ub97c \ud558\ub098\uc758 \ud30c\uc77c\uc5d0\uc11c \uad00\ub9ac\ud574\uc57c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TasksContext.js"),"\uac00 \ub450 context \uc120\uc5b8\ub9cc\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createContext } from 'react';\n\nexport const TasksContext = createContext(null);\nexport const TasksDispatchContext = createContext(null);\n")),(0,r.kt)("p",null,"\uc774 \ud30c\uc77c\uc740 \uace7 \ubcf5\uc7a1\ud574\uc9c8\uac81\ub2c8\ub2e4! Reducer\ub97c \uac19\uc740 \ud30c\uc77c\uc5d0 \uc704\uce58\uc2dc\ud0a4\uace0, \uc0c8\ub85c\uc6b4 ",(0,r.kt)("inlineCode",{parentName:"p"},"TasksProvider")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac19\uc740 \ud30c\uc77c\uc5d0\uc11c \uc120\uc5b8\ud560 \uac83\uc785\ub2c8\ub2e4.\n\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ubaa8\ub4e0 \uc870\uac01\ub4e4\uc744 \ud558\ub098\ub85c \ubb36\ub294 \uc5ed\ud560\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"reducer\ub97c \ud1b5\ud574 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub450 context\ub85c \uc544\ub798 \ud2b8\ub9ac\ub97c \uac10\uc309\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"JSX\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,r.kt)("a",{parentName:"li",href:"https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children"},(0,r.kt)("inlineCode",{parentName:"a"},"children"),"\uc744 prop\uc73c\ub85c \ubc1b\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export function TasksProvider({ children }) {\n  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);\n\n  return (\n    <TasksContext.Provider value={tasks}>\n      <TasksDispatchContext.Provider value={dispatch}>\n        {children}\n      </TasksDispatchContext.Provider>\n    </TasksContext.Provider>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc774\uc81c ",(0,r.kt)("inlineCode",{parentName:"strong"},"TaskApp"),"\uc744 \ub458\ub7ec\uc2fc \ubc30\uc120\ub4e4\uacfc \ubcf5\uc7a1\ud55c \uac83\ub4e4\uc774 \uc81c\uac70\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,r.kt)(o.E,{src:"https://codesandbox.io/embed/lingering-architecture-7pfy1j?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,r.kt)("p",null,"\ub610\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"TasksContext.js"),"\uc5d0\uc11c context\ub97c ",(0,r.kt)("em",{parentName:"p"},"\uc0ac\uc6a9"),"\ud558\ub294 \ud568\uc218\ub97c \ub0b4\ubcf4\ub0bc(export) \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export function useTasks() {\n  return useContext(TasksContext);\n}\n\nexport function useTasksDispatch() {\n  return useContext(TasksDispatchContext);\n}\n")),(0,r.kt)("p",null,"\ub9cc\uc57d \ucef4\ud3ec\ub10c\ud2b8\uac00 context\ub85c\ubd80\ud130 \uac12\uc744 \uc77d\uc5b4\uc57c \ud55c\ub2e4\uba74 \uc774 \ud568\uc218\ub4e4\uc744 \ud1b5\ud574 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const tasks = useTasks();\nconst dispatch = useTasksDispatch();\n")),(0,r.kt)("p",null,"\uc774 \ud568\uc218\ub4e4\uc740 \uc2e4\uc81c \ub85c\uc9c1\uc744 \ubc14\uafb8\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ud6c4\uc5d0 context\ub4e4\uc744 \ubd84\ub9ac\ud558\uac70\ub098 \uba87\uba87 \ub85c\uc9c1\ub4e4\uc744 \ud568\uc218\uc5d0 \ucd94\uac00\ud560\ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4.\n",(0,r.kt)("strong",{parentName:"p"},"\uc9c0\uae08\uc740 \ubaa8\ub4e0 context\uc640 reducer \uad00\ub828\ub41c \ucf54\ub4dc\ub4e4\uc774 ",(0,r.kt)("inlineCode",{parentName:"strong"},"TasksContext.js"),"\uc5d0\uc11c \uad00\ub9ac\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ucf54\ub4dc\ub97c \uae54\ub054\ud558\uace0 \ubcf5\uc7a1\ud558\uc9c0 \uc54a\uac8c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc5b4\ub514\uc11c \ub370\uc774\ud130\ub97c \uac00\uc838\uc640\uc57c \ud558\ub294\uc9c0\ubcf4\ub2e4 \ubb34\uc5c7\uc744 \ubcf4\uc5ec\uc918\uc57c \ud558\ub294\uc9c0\uc5d0 \ub354 \uc9d1\uc911\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.")),(0,r.kt)(o.E,{src:"https://codesandbox.io/embed/hopeful-panna-nc64qd?fontsize=14&hidenavigation=1&theme=dark",mdxType:"Code"}),(0,r.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc740 \uc544\ub9c8 ",(0,r.kt)("inlineCode",{parentName:"p"},"TasksProvider"),"\ub97c tasks\ub97c \uc5b4\ub5bb\uac8c \ub2e4\ub904\uc57c \ud560\uc9c0 \uc54c\uace0\uc788\ub294 '\ud654\uba74\uc758 \uc77c\ubd80'\ub77c\uace0 \uc0dd\uac01\ud560 \uac83\uc774\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"useTasks"),"\ub97c \uadf8 tasks\ub97c \uc77d\ub294 \ubc29\ubc95,\n\uadf8\ub9ac\uace0 ",(0,r.kt)("inlineCode",{parentName:"p"},"useTasksDispatch"),"\ub97c \ud2b8\ub9ac \uc544\ub798\uc5d0 \uc788\ub294 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub4e0 tasks\ub97c \uc5c5\ub370\uc774\ud2b8\uc2dc\ud0ac \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ubc29\ubc95\uc774\ub77c\uace0 \uc0dd\uac01\ud560 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useTasks"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"useTasksDispatch"),"\uac19\uc740 \ud568\uc218\ub4e4\uc744 ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks"},"custom Hooks")," \ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 \ud568\uc218\uc758 \uc774\ub984\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"use"),"\ub85c \uc2dc\uc791\ud55c\ub2e4\uba74 React\ub294 \uc774\ub97c custom hook\uc774\ub77c\uace0 \ubc1b\uc544\ub4e4\uc785\ub2c8\ub2e4. custom hook\uc758 \ub0b4\ubd80\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext"),"\uc640 \uac19\uc740 \ub2e4\ub978 hook\ub4e4\uc744 \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uc571\uc774 \ucee4\uc9c8\uc218\ub85d \uc774\uc640 \uac19\uc740 context-reducer \uc30d\uc774 \ub354 \ub9ce\uc774 \ud544\uc694\ud574\uc9c8 \uac83\uc785\ub2c8\ub2e4.\n\uc774\ub294 \ud2b8\ub9ac\uc758 \uae4a\uc740 \uacf3\uc5d0 \uc788\ub294 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud560 \ub54c\ub9c8\ub2e4 \ub9ce\uc740 \uc791\uc5c5 \uc5c6\uc774 \uc571\uc744 \ud655\uc7a5\ud558\uace0 \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \uac15\ub825\ud55c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\ub418\uc9da\uc5b4\ubcf4\uae30"},"\ub418\uc9da\uc5b4\ubcf4\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reducer\uc640 context\ub97c \uacb0\ud569\ud568\uc73c\ub85c\uc368 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub4e0 \uadf8 \uc0c1\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc\ub97c \uc77d\uac70\ub098 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc0c1\ud0dc\uc640 dispatch \ud568\uc218\ub97c \uc804\ub2ec\ud574\uc8fc\uae30 \uc704\ud574\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc740 \uc808\ucc28\ub97c \ub530\ub985\ub2c8\ub2e4.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\ub450 context\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. (\ud558\ub098\ub294 \uc0c1\ud0dc\ub97c \uc704\ud55c \uac83\uc774\uace0, \ub2e4\ub978 \ud558\ub098\ub294 dispatch \ud568\uc218\ub97c \uc704\ud55c \uac83\uc785\ub2c8\ub2e4.)"),(0,r.kt)("li",{parentName:"ol"},"Reducer\ub97c \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub450 context\ub85c \uac10\uc2f8\uc90d\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"\ub370\uc774\ud130\ub97c \uc77d\uace0\uc790 \ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c context\uc5d0 \uc811\uadfc\ud574 \ub370\uc774\ud130\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 \ud30c\uc77c\uc5d0\uc11c \ubc30\uc120\ub4e4\uc744 \uad00\ub9ac\ud568\uc73c\ub85c\uc368 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubcf5\uc7a1\uc131\uc744 \ub0ae\ucd9c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Context\ub97c \uc81c\uacf5\ud574\uc8fc\ub294 ",(0,r.kt)("inlineCode",{parentName:"li"},"TasksProvider"),"\uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub0b4\ubcf4\ub0bc(export) \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useTasks"),"\uc640 ",(0,r.kt)("inlineCode",{parentName:"li"},"useTasksDispatch"),"\uac19\uc740 custom hooks\ub97c \ub0b4\ubcf4\ub0bc(export) \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"Context-reducer \uc30d\uc744 \uc790\uc8fc \uc0ac\uc6a9\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.")))}k.isMDXComponent=!0}}]);