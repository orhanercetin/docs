(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var i=n(2),r=n(6),a=(n(0),n(168)),o={title:"FAQ"},l={unversionedId:"util-crypto/FAQ",id:"util-crypto/FAQ",isDocsHomePage:!1,title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common issues that util-crypto users find.",source:"@site/docs/util-crypto/FAQ.md",slug:"/util-crypto/FAQ",permalink:"/docs/util-crypto/FAQ",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/util-crypto/FAQ.md",version:"current",sidebar:"reference",previous:{title:"Generate a Multisig Account",permalink:"/docs/util-crypto/examples/create-multisig"},next:{title:"Overview",permalink:"/docs/ui-identicon"}},c=[{value:"I am having trouble initializing the wasm interface",id:"i-am-having-trouble-initializing-the-wasm-interface",children:[]},{value:"My React Native build runs out of memory",id:"my-react-native-build-runs-out-of-memory",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The list will be updated/expanded as questions come up, dealing with some common issues that util-crypto users find."),Object(a.b)("h2",{id:"i-am-having-trouble-initializing-the-wasm-interface"},"I am having trouble initializing the wasm interface"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@polkadot/util-crypto"),' libraries has a WASM backend but has JS fallbacks in place for most operations. This means that when the WASM has been initialized it will be used, alternatively the JS fallbacks will be utilized. Some interfaces, such as using sr25519 however are only available via WASM. When tyring to use these without a completed initialization and error such as "The WASM interface has not been initialized. Ensure that you wait for the initialization Promise before attempting to use WASM-only interfaces." will be thrown.'),Object(a.b)("p",null,"When using an import/require from the library the WASM async init will be automatically started. Due to the async nature of this process (which is also started automatically in the API) it may not have been completed before attempting to use. In these cases always use a ",Object(a.b)("inlineCode",{parentName:"p"},"await cryptoWaitReady()")," before attempting interfaces that required WASM."),Object(a.b)("h2",{id:"my-react-native-build-runs-out-of-memory"},"My React Native build runs out of memory"),Object(a.b)("p",null,"When using the util-crypto packages with RN, due to a lack of support, an ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/polkadot-js/wasm/issues/19"}),"asm.js fallback")," is provided since (most) React Native implementations does not have a native WASM executor."),Object(a.b)("p",null,"While the fallback is fully tested and equivalent to the WASM version, it does add some memory load to the application build process. Additionally simnce the asm.js bundle is quite large, the build process is by no means fast. Ensure that you adjust your build flags to include ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_OPTIONS=--max_old_space_size=8192"),", for instance doing ",Object(a.b)("inlineCode",{parentName:"p"},"NODE_OPTIONS=--max_old_space_size=8192 yarn run ios")))}u.isMDXComponent=!0}}]);