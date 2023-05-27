"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9302],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(25773),a=(r(27378),r(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Barcode reader service"},o="BarcodeReader",c={unversionedId:"api/clients/barcodereader",id:"api/clients/barcodereader",title:"BarcodeReader",description:"DeviceScript client for Jacdac Barcode reader service",source:"@site/docs/api/clients/barcodereader.md",sourceDirName:"api/clients",slug:"/api/clients/barcodereader",permalink:"/devicescript/api/clients/barcodereader",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Barcode reader service"},sidebar:"tutorialSidebar"},l={},d=[{value:"Registers",id:"registers",level:2},{value:"enabled",id:"rw:enabled",level:3},{value:"formats",id:"const:formats",level:3},{value:"Events",id:"events",level:2},{value:"detect",id:"detect",level:3}],p={toc:d},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"barcodereader"},"BarcodeReader"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,a.kt)("p",null,"A device that reads various barcodes, like QR codes. For the web, see ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector"},"BarcodeDetector"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client for ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/barcodereader/"},"Barcode reader service")),(0,a.kt)("li",{parentName:"ul"},"inherits Role")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { BarcodeReader } from "@devicescript/core"\n\nconst barcodeReader = new BarcodeReader()\n')),(0,a.kt)("h2",{id:"registers"},"Registers"),(0,a.kt)("h3",{id:"rw:enabled"},"enabled"),(0,a.kt)("p",null,"Turns on or off the detection of barcodes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { BarcodeReader } from "@devicescript/core"\n\nconst barcodeReader = new BarcodeReader()\n// ...\nconst value = await barcodeReader.enabled.read()\nawait barcodeReader.enabled.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { BarcodeReader } from "@devicescript/core"\n\nconst barcodeReader = new BarcodeReader()\n// ...\nbarcodeReader.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:formats"},"formats"),(0,a.kt)("p",null,"Reports the list of supported barcode formats, as documented in ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API"},"https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Register<any[]>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"li"},"r: u8"),")"),(0,a.kt)("li",{parentName:"ul"},"optional: this register may not be implemented"),(0,a.kt)("li",{parentName:"ul"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"detect"},"detect"),(0,a.kt)("p",null,"Raised when a bar code is detected and decoded. If the reader detects multiple codes, it will issue multiple events.\nIn case of numeric barcodes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," field should contain the ASCII (which is the same as UTF8 in that case) representation of the number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"barcodeReader.detect.subscribe(() => {\n\n})\n")),(0,a.kt)("p",null))}u.isMDXComponent=!0}}]);