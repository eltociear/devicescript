"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3485],{35318:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(27378);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=d(a),k=n,c=s["".concat(o,".").concat(k)]||s[k]||g[k]||i;return a?r.createElement(c,p(p({ref:e},m),{},{components:a})):r.createElement(c,p({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,p=new Array(i);p[0]=k;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[s]="string"==typeof t?t:n,p[1]=l;for(var d=2;d<i;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},11135:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(25773),n=(a(27378),a(35318));const i={description:"Unexpected Maker FeatherS2 ESP32-S2"},p="Unexpected Maker FeatherS2 ESP32-S2",l={unversionedId:"devices/esp32/feather-s2",id:"devices/esp32/feather-s2",title:"Unexpected Maker FeatherS2 ESP32-S2",description:"Unexpected Maker FeatherS2 ESP32-S2",source:"@site/docs/devices/esp32/feather-s2.mdx",sourceDirName:"devices/esp32",slug:"/devices/esp32/feather-s2",permalink:"/devicescript/devices/esp32/feather-s2",draft:!1,tags:[],version:"current",frontMatter:{description:"Unexpected Maker FeatherS2 ESP32-S2"},sidebar:"tutorialSidebar",previous:{title:"Espressif ESP32-S2 (bare)",permalink:"/devicescript/devices/esp32/esp32s2-bare"},next:{title:"MSR JM Brain S2-mini 207 v4.2",permalink:"/devicescript/devices/esp32/msr207-v42"}},o={},d=[{value:"Features",id:"features",level:2},{value:"Stores",id:"stores",level:2},{value:"Pins",id:"pins",level:2},{value:"Firmware update",id:"firmware-update",level:2},{value:"Configuration",id:"configuration",level:2}],m={toc:d},s="wrapper";function g(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"unexpected-maker-feathers2-esp32-s2"},"Unexpected Maker FeatherS2 ESP32-S2"),(0,n.kt)("p",null,"ESP32-S2 based development board in a Feather format."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://microsoft.github.io/jacdac-docs/images/devices/unexpected-maker/feathers2esp32s2v20.catalog.jpg",alt:"Unexpected Maker FeatherS2 ESP32-S2 picture"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I2C on SDA/SCL: 8/9 using Qwiic connector"),(0,n.kt)("li",{parentName:"ul"},"LED on pin 40  (use ",(0,n.kt)("a",{parentName:"li",href:"/developer/status-light"},"setStatusLight")," to control)"),(0,n.kt)("li",{parentName:"ul"},"Service: buttonBOOT (button)"),(0,n.kt)("li",{parentName:"ul"},"Service: ambientLight (analog:lightLevel)")),(0,n.kt)("h2",{id:"stores"},"Stores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://unexpectedmaker.com/shop/feathers2-esp32-s2"},"https://unexpectedmaker.com/shop/feathers2-esp32-s2"))),(0,n.kt)("h2",{id:"pins"},"Pins"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"pin name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"hardware id"),(0,n.kt)("th",{parentName:"tr",align:"right"},"features"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"LED0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"LED_PWR")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO21"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"MISO")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO37"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"MOSI")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P14")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P17")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogOut,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogOut,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P33")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO33"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P38")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO5"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"P7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"RX")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"SCK")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO36"),(0,n.kt)("td",{parentName:"tr",align:"right"},"io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"$services.buttonBOOT","[0]",".pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"$services.ambientLight","[1]",".pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO4"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"i2c.pinSCL")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO9"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"i2c.pinSDA")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO8"),(0,n.kt)("td",{parentName:"tr",align:"right"},"analogIn,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"led.pin")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO40"),(0,n.kt)("td",{parentName:"tr",align:"right"},"debug,  io")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"led.pinCLK")),(0,n.kt)("td",{parentName:"tr",align:"left"},"GPIO45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"boot,  io")))),(0,n.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/vscode"},"Visual Studio Code"),",\nselect ",(0,n.kt)("strong",{parentName:"p"},"DeviceScript: Flash Firmware...")," from the command palette."),(0,n.kt)("p",null,"Run this ",(0,n.kt)("a",{parentName:"p",href:"/api/cli"},"command line")," command and follow the instructions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"devicescript flash --board feather_s2\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/devicescript-esp32/releases/latest/download/devicescript-esp32s2-feather_s2-0x1000.bin"},"Firmware"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="feather_s2.json"',title:'"feather_s2.json"'},'{\n    "$schema": "https://raw.githubusercontent.com/microsoft/devicescript-esp32/main/boards/esp32deviceconfig.schema.json",\n    "id": "feather_s2",\n    "devName": "Unexpected Maker FeatherS2 ESP32-S2",\n    "productId": "0x3126f707",\n    "$description": "ESP32-S2 based development board in a Feather format.",\n    "archId": "esp32s2",\n    "url": "https://unexpectedmaker.com/shop/feathers2-esp32-s2",\n    "$services": [\n        {\n            "name": "buttonBOOT",\n            "pin": 0,\n            "service": "button"\n        },\n        {\n            "name": "ambientLight",\n            "pin": 4,\n            "service": "analog:lightLevel"\n        }\n    ],\n    "i2c": {\n        "$connector": "Qwiic",\n        "pinSCL": 9,\n        "pinSDA": 8\n    },\n    "led": {\n        "pin": 40,\n        "pinCLK": 45,\n        "type": 2\n    },\n    "pins": {\n        "@TX": 43,\n        "LED0": 13,\n        "LED_PWR": 21,\n        "MISO": 37,\n        "MOSI": 35,\n        "P1": 1,\n        "P10": 10,\n        "P11": 11,\n        "P12": 12,\n        "P14": 14,\n        "P17": 17,\n        "P18": 18,\n        "P3": 3,\n        "P33": 33,\n        "P38": 38,\n        "P5": 5,\n        "P6": 6,\n        "P7": 7,\n        "RX": 44,\n        "SCK": 36\n    },\n    "sPin": {\n        "LED_PWR": 1\n    },\n    "uartLog": true\n}\n')))}g.isMDXComponent=!0}}]);