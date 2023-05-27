"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8053],{35318:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>c});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,c=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(c,s(s({ref:t},g),{},{components:r})):a.createElement(c,s({ref:t},g))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(25773),n=(r(27378),r(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Timeseries Aggregator service"},s="TimeseriesAggregator",l={unversionedId:"api/clients/timeseriesaggregator",id:"api/clients/timeseriesaggregator",title:"TimeseriesAggregator",description:"DeviceScript client for Jacdac Timeseries Aggregator service",source:"@site/docs/api/clients/timeseriesaggregator.md",sourceDirName:"api/clients",slug:"/api/clients/timeseriesaggregator",permalink:"/devicescript/api/clients/timeseriesaggregator",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Timeseries Aggregator service"},sidebar:"tutorialSidebar"},o={},p=[{value:"Commands",id:"commands",level:2},{value:"clear",id:"clear",level:3},{value:"update",id:"update",level:3},{value:"setWindow",id:"setwindow",level:3},{value:"setUpload",id:"setupload",level:3},{value:"Registers",id:"registers",level:2},{value:"now",id:"ro:now",level:3},{value:"fastStart",id:"rw:fastStart",level:3},{value:"defaultWindow",id:"rw:defaultWindow",level:3},{value:"defaultUpload",id:"rw:defaultUpload",level:3},{value:"uploadUnlabelled",id:"rw:uploadUnlabelled",level:3},{value:"sensorWatchdogPeriod",id:"rw:sensorWatchdogPeriod",level:3}],g={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"timeseriesaggregator"},"TimeseriesAggregator"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,n.kt)("p",null,"Supports aggregating timeseries data (especially sensor readings)\nand sending them to a cloud/storage service.\nUsed in DeviceScript."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"f64")," values are not necessarily aligned."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"client for ",(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/timeseriesaggregator/"},"Timeseries Aggregator service")),(0,n.kt)("li",{parentName:"ul"},"inherits Role")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n')),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("h3",{id:"clear"},"clear"),(0,n.kt)("p",null,"Remove all pending timeseries."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"timeseriesAggregator.clear(): Promise<void>\n")),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"Add a data point to a timeseries."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"timeseriesAggregator.update(value: number, label: string): Promise<void>\n")),(0,n.kt)("h3",{id:"setwindow"},"setWindow"),(0,n.kt)("p",null,"Set aggregation window.\nSetting to ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," will restore default."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"timeseriesAggregator.setWindow(duration: number, label: string): Promise<void>\n")),(0,n.kt)("h3",{id:"setupload"},"setUpload"),(0,n.kt)("p",null,"Set whether or not the timeseries will be uploaded to the cloud.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"stored")," reports are generated regardless."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"timeseriesAggregator.setUpload(upload: boolean, label: string): Promise<void>\n")),(0,n.kt)("h2",{id:"registers"},"Registers"),(0,n.kt)("h3",{id:"ro:now"},"now"),(0,n.kt)("p",null,"This can queried to establish local time on the device."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"type: ",(0,n.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,n.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"read only"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\nconst value = await timeseriesAggregator.now.read()\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"track incoming values")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\ntimeseriesAggregator.now.subscribe(async (value) => {\n    ...\n})\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,n.kt)("h3",{id:"rw:fastStart"},"fastStart"),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", the windows will be shorter after service reset and gradually extend to requested length.\nThis is ensure valid data is being streamed in program development."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"type: ",(0,n.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,n.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"read and write"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\nconst value = await timeseriesAggregator.fastStart.read()\nawait timeseriesAggregator.fastStart.write(value)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"track incoming values")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\ntimeseriesAggregator.fastStart.subscribe(async (value) => {\n    ...\n})\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,n.kt)("h3",{id:"rw:defaultWindow"},"defaultWindow"),(0,n.kt)("p",null,"Window for timeseries for which ",(0,n.kt)("inlineCode",{parentName:"p"},"set_window")," was never called.\nNote that windows returned initially may be shorter if ",(0,n.kt)("inlineCode",{parentName:"p"},"fast_start")," is enabled."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"type: ",(0,n.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,n.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"read and write"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\nconst value = await timeseriesAggregator.defaultWindow.read()\nawait timeseriesAggregator.defaultWindow.write(value)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"track incoming values")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\ntimeseriesAggregator.defaultWindow.subscribe(async (value) => {\n    ...\n})\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,n.kt)("h3",{id:"rw:defaultUpload"},"defaultUpload"),(0,n.kt)("p",null,"Whether labelled timeseries for which ",(0,n.kt)("inlineCode",{parentName:"p"},"set_upload")," was never called should be automatically uploaded."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"type: ",(0,n.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,n.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"read and write"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\nconst value = await timeseriesAggregator.defaultUpload.read()\nawait timeseriesAggregator.defaultUpload.write(value)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"track incoming values")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\ntimeseriesAggregator.defaultUpload.subscribe(async (value) => {\n    ...\n})\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,n.kt)("h3",{id:"rw:uploadUnlabelled"},"uploadUnlabelled"),(0,n.kt)("p",null,"Whether automatically created timeseries not bound in role manager should be uploaded."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"type: ",(0,n.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,n.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"read and write"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\nconst value = await timeseriesAggregator.uploadUnlabelled.read()\nawait timeseriesAggregator.uploadUnlabelled.write(value)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"track incoming values")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\ntimeseriesAggregator.uploadUnlabelled.subscribe(async (value) => {\n    ...\n})\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,n.kt)("h3",{id:"rw:sensorWatchdogPeriod"},"sensorWatchdogPeriod"),(0,n.kt)("p",null,"If no data is received from any sensor within given period, the device is rebooted.\nSet to ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," to disable (default).\nUpdating user-provided timeseries does not reset the watchdog."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"type: ",(0,n.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,n.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"read and write"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\nconst value = await timeseriesAggregator.sensorWatchdogPeriod.read()\nawait timeseriesAggregator.sensorWatchdogPeriod.write(value)\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"track incoming values")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { TimeseriesAggregator } from "@devicescript/core"\n\nconst timeseriesAggregator = new TimeseriesAggregator()\n// ...\ntimeseriesAggregator.sensorWatchdogPeriod.subscribe(async (value) => {\n    ...\n})\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,n.kt)("p",null))}d.isMDXComponent=!0}}]);