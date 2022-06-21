"use strict";(self.webpackChunktutorials=self.webpackChunktutorials||[]).push([[865],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},u="2. Motoko backend",l={unversionedId:"step2",id:"step2",title:"2. Motoko backend",description:"The backend functions are located in the src/persistent_storage/main.mo Motoko file. The backend stores the counter value, and has functions to get, increment and reset the counter value. Furthermore the backend insures the counter value persists upgrades of the dapp.",source:"@site/docs/step2.md",sourceDirName:".",slug:"/step2",permalink:"/tutorial-demo/step2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"1. Installation",permalink:"/tutorial-demo/step1"},next:{title:"3. Deployment",permalink:"/tutorial-demo/step3"}},s={},p=[{value:"2.1. Counter variable",id:"21-counter-variable",level:2},{value:"2.2. increment()",id:"22-increment",level:2},{value:"2.3. get()",id:"23-get",level:2},{value:"2.4. reset()",id:"24-reset",level:2},{value:"2.5. Candid interface",id:"25-candid-interface",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-motoko-backend"},"2. Motoko backend"),(0,o.kt)("p",null,"The backend functions are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/persistent_storage/main.mo")," Motoko file. The backend stores the counter value, and has functions to get, increment and reset the counter value. Furthermore the backend insures the counter value persists upgrades of the dapp."),(0,o.kt)("h2",{id:"21-counter-variable"},"2.1. Counter variable"),(0,o.kt)("p",null,"The current counter value is stored as a number in the actor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"actor {\n    stable var counter : Nat = 0;\n}\n")),(0,o.kt)("h2",{id:"22-increment"},"2.2. increment()"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"increment()")," function increments the counter variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"public func increment() : async Nat {\n    counter += 1;\n    return counter;\n};\n")),(0,o.kt)("p",null,"The function is returning the incremented counter variable."),(0,o.kt)("h2",{id:"23-get"},"2.3. get()"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," function returns the current counter value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"public query func get() : async Nat {\n    return counter;\n};\n")),(0,o.kt)("h2",{id:"24-reset"},"2.4. reset()"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"reset()")," function resets the counter value to 0 and returns the value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"public func reset() : async Nat {\n    counter := 0;\n    return counter;\n};\n")),(0,o.kt)("h2",{id:"25-candid-interface"},"2.5. Candid interface"),(0,o.kt)("p",null,"The Candid interface is automatically created, and it has a convenient UI, which provides an easy, user-friendly way to test the backend."))}f.isMDXComponent=!0}}]);