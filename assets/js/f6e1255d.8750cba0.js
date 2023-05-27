"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3870],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(25773),a=(n(27378),n(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Sound Spectrum service"},o="SoundSpectrum",p={unversionedId:"api/clients/soundspectrum",id:"api/clients/soundspectrum",title:"SoundSpectrum",description:"DeviceScript client for Jacdac Sound Spectrum service",source:"@site/docs/api/clients/soundspectrum.md",sourceDirName:"api/clients",slug:"/api/clients/soundspectrum",permalink:"/devicescript/api/clients/soundspectrum",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Jacdac Sound Spectrum service"},sidebar:"tutorialSidebar"},l={},u=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"enabled",id:"rw:enabled",level:3},{value:"fftPow2Size",id:"rw:fftPow2Size",level:3},{value:"minDecibels",id:"rw:minDecibels",level:3},{value:"maxDecibels",id:"rw:maxDecibels",level:3},{value:"smoothingTimeConstant",id:"rw:smoothingTimeConstant",level:3}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"soundspectrum"},"SoundSpectrum"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,a.kt)("p",null,"A microphone that analyzes the sound specturm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"client for ",(0,a.kt)("a",{parentName:"li",href:"https://microsoft.github.io/jacdac-docs/services/soundspectrum/"},"Sound Spectrum service")),(0,a.kt)("li",{parentName:"ul"},"inherits Sensor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n')),(0,a.kt)("h2",{id:"registers"},"Registers"),(0,a.kt)("h3",{id:"ro:reading"},"reading"),(0,a.kt)("p",null,"The computed frequency data."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<Buffer>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"b"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"track incoming values"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nsoundSpectrum.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"rw:enabled"},"enabled"),(0,a.kt)("p",null,"Turns on/off the micropohone."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nconst value = await soundSpectrum.enabled.read()\nawait soundSpectrum.enabled.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nsoundSpectrum.enabled.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"rw:fftPow2Size"},"fftPow2Size"),(0,a.kt)("p",null,"The power of 2 used as the size of the FFT to be used to determine the frequency domain."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nconst value = await soundSpectrum.fftPow2Size.read()\nawait soundSpectrum.fftPow2Size.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nsoundSpectrum.fftPow2Size.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"rw:minDecibels"},"minDecibels"),(0,a.kt)("p",null,"The minimum power value in the scaling range for the FFT analysis data"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"i16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nconst value = await soundSpectrum.minDecibels.read()\nawait soundSpectrum.minDecibels.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nsoundSpectrum.minDecibels.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"rw:maxDecibels"},"maxDecibels"),(0,a.kt)("p",null,"The maximum power value in the scaling range for the FFT analysis data"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"i16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nconst value = await soundSpectrum.maxDecibels.read()\nawait soundSpectrum.maxDecibels.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nsoundSpectrum.maxDecibels.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"rw:smoothingTimeConstant"},"smoothingTimeConstant"),(0,a.kt)("p",null,"The averaging constant with the last analysis frame.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," is set, there is no averaging done, whereas a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),' means "overlap the previous and current buffer quite a lot while computing the value".'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u0.8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nconst value = await soundSpectrum.smoothingTimeConstant.read()\nawait soundSpectrum.smoothingTimeConstant.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { SoundSpectrum } from "@devicescript/core"\n\nconst soundSpectrum = new SoundSpectrum()\n// ...\nsoundSpectrum.smoothingTimeConstant.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("p",null))}m.isMDXComponent=!0}}]);