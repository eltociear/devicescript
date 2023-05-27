"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6869],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(v,a(a({ref:t},p),{},{components:r})):n.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(25773),i=(r(27378),r(35318));const s={sidebar_position:200},a="Custom Services",o={unversionedId:"developer/servers/custom-services",id:"developer/servers/custom-services",title:"Custom Services",description:"Custom service definition files can be added to the ./services/ folder as markdown file.",source:"@site/docs/developer/servers/custom-services.mdx",sourceDirName:"developer/servers",slug:"/developer/servers/custom-services",permalink:"/devicescript/developer/servers/custom-services",draft:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"SPI",permalink:"/devicescript/developer/servers/spi"},next:{title:"Drivers",permalink:"/devicescript/developer/servers/drivers"}},c={},l=[{value:"Getting started",id:"getting-started",level:3},{value:"DeviceScript support",id:"devicescript-support",level:3},{value:"Node sim support",id:"node-sim-support",level:3},{value:"Dashboard support",id:"dashboard-support",level:3},{value:"Example",id:"example",level:2},{value:"Service specification",id:"service-specification",level:3},{value:"DeviceScript program",id:"devicescript-program",level:3},{value:"Node simulator",id:"node-simulator",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"custom-services"},"Custom Services"),(0,i.kt)("p",null,"Custom service definition files can be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"./services/")," folder as markdown file.\n",(0,i.kt)("a",{parentName:"p",href:"https://microsoft.github.io/jacdac-docs/reference/service-specification/"},"Read about the service specification markdown"),"."),(0,i.kt)("p",null,"The service specifications are compiled by the DeviceScript compiler as part of the build."),(0,i.kt)("h3",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Let's define a custom service for a ",(0,i.kt)("inlineCode",{parentName:"p"},"psychomagnothericenergy")," sensor (Ghostbuster ghost detector).\nStart by configuring your project for simulation by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"devs add service psychomagnothericenergy\n")),(0,i.kt)("p",null,"or in Visual Studio Code, using the ",(0,i.kt)("strong",{parentName:"p"},"DeviceScript: Add Service...")," in the command palette."),(0,i.kt)("p",null,"Then update ",(0,i.kt)("inlineCode",{parentName:"p"},"./services/psychomagnothericenergy.md")," with a basic sensor definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="./services/psychomagnothericenergy.md"',title:'"./services/psychomagnothericenergy.md"'},"# Psychomagnotheric Energy\n\n    identifier: 0x1f1dc7d5\n    extends: _sensor\n\nMeasures the presence of ghosts in Ghostbusters.\n...\n")),(0,i.kt)("h3",{id:"devicescript-support"},"DeviceScript support"),(0,i.kt)("p",null,"The generated DeviceClient client are automatically added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"@devicescript/core")," module,\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"./node_module/@devicescript/core/src/devicescript-spec.d.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./main.ts" skip',title:'"./main.ts"',skip:!0},'// highlight-next-line\nimport { PsychomagnothericEnergy } from "@devicescript/core"\n\nconst gigameter = new PsychomagnothericEnergy()\n...\n')),(0,i.kt)("h3",{id:"node-sim-support"},"Node sim support"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"./sim/runtime.ts")," scafolding will automaticlly pick up\nthe generated files to support node.js. See ",(0,i.kt)("a",{parentName:"p",href:"/developer/simulation"},"simulation")," to configure your project for simulation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The generated TypeScript constants are generated at ",(0,i.kt)("inlineCode",{parentName:"li"},"./.devicescript/ts/constants.ts"),"."),(0,i.kt)("li",{parentName:"ul"},"The generated JSON are at ",(0,i.kt)("inlineCode",{parentName:"li"},"./.devicescript/services.json"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./sim/app.ts" skip',title:'"./sim/app.ts"',skip:!0},'// highlight-next-line\nimport { SRV_PSYCHOMAGNOTHERIC_ENERGY } from "../.devicescript/ts/constants"\n\nconst server = new AnalogSensorServer(SRV_PSYCHOMAGNOTHERIC_ENERGY, {\n    ...\n})\n...\n')),(0,i.kt)("h3",{id:"dashboard-support"},"Dashboard support"),(0,i.kt)("p",null,"The DeviceScript simulators dashboard has a limited support for rendering custom services.\nFor sensors, it will be able to render sliders as long as ",(0,i.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," values are provided for the ",(0,i.kt)("inlineCode",{parentName:"p"},"reading")," register."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"aurascope")," is some kind of ghost detector in the Ghost Busters movie. Let's create a service for it."),(0,i.kt)("h3",{id:"service-specification"},"Service specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="./services/psychomagnothericenergy.md"',title:'"./services/psychomagnothericenergy.md"'},"# Psychomagnotheric Energy\n\n    identifier: 0x1f1dc7d5\n    extends: _sensor\n\nMeasures the presence of ghosts in Ghostbusters.\n\n## Registers\n\n    ro energy_level: u0.16 / @ reading\n\nA measure of the presence of ghosts.\n\n    ro energy_level_error: u0.16 / @ reading_error\n\nError on the measure.\n")),(0,i.kt)("h3",{id:"devicescript-program"},"DeviceScript program"),(0,i.kt)("p",null,"This DeviceScript program creates a client for the aurascope and prints the currently energly level to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./main.ts" skip',title:'"./main.ts"',skip:!0},'import { PsychomagnothericEnergy } from "@devicescript/core"\n\nconst gigameter = new PsychomagnothericEnergy()\ngigameter.energyLevel.subscribe(async (energyLevel) => {\n    console.log(energyLevel)\n})\n')),(0,i.kt)("h3",{id:"node-simulator"},"Node simulator"),(0,i.kt)("p",null,"The node.js simulator script mounts a aurascope simulator, with an interval that randomly changes the energy level value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./sim/app.ts" skip',title:'"./sim/app.ts"',skip:!0},'import { addServer, AnalogSensorServer } from "jacdac-ts"\nimport { bus } from "./runtime"\nimport { SRV_PSYCHOMAGNOTHERIC_ENERGY } from "../.devicescript/ts/constants"\n\n// simulator a customer service\nconst server = new AnalogSensorServer(SRV_PSYCHOMAGNOTHERIC_ENERGY, {\n    readingValues: [0.5],\n    readingError: [0.1],\n    streamingInterval: 500,\n})\n// randomly change the reading value\nsetInterval(() => {\n    const value = server.reading.values()[0]\n    const newValue = value + (0.5 - Math.random()) / 10\n    server.reading.setValues([newValue])\n    console.debug(`psycho value: ${newValue}`)\n}, 100)\n\n// mount server on bus to make it visible\n// to DeviceScript\naddServer(bus, "aurascope", server)\n')))}u.isMDXComponent=!0}}]);