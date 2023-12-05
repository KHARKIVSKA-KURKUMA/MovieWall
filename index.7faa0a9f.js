function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},s=n.parcelRequireb66a;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},n.parcelRequireb66a=s),s.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.7faa0a9f.js","h3zzN":"poster-not-available.24997f22.jpg","j8dOp":"photo_clear-watched.af6fb89b.png","7jW4b":"poster-not-available-dark.f3d01abc.png","bCtM5":"not-available-result.d9052dfa.png","5UbS1":"index.a6cb3760.css"}'));const o={upBtn:document.querySelector(".btn-up"),homeGalleryList:document.querySelector(".gallery-list"),headerContainer:document.querySelector(".header-container"),movieModal:document.querySelector("[data-modal]"),movieModalContainer:document.querySelector(".js-modal-wrap"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-no-scroll]"),searchQuery:document.querySelector(".search-input"),searchForm:document.getElementById("search-form"),backdrop:document.querySelector(".backdrop"),teamModal:document.querySelector("[data-team-modal]"),closeTeamModalBtn:document.querySelector("[data-team-modal-close]"),teamBackdrop:document.querySelector(".team-backdrop"),teamModalBtn:document.querySelector("[data-mod]"),galleryBgImg:document.querySelector(".gallery-holder"),paginationEl:document.getElementById("pagination"),closeSignInModal:document.querySelector(".modal-SignIn-close"),signInBackdrop:document.querySelector(".signIn"),openSignInModal:document.querySelector(".js-signIn"),openSignInModalNd:document.querySelector(".signIn-open"),openSignUpModal:document.querySelector(".signUp-open"),signUpBackdrop:document.querySelector(".signUp"),closeSignUpModal:document.querySelector(".modal-signUp-close"),formSignIn:document.querySelector(".sign-in"),formSignUp:document.querySelector(".sign-up"),exitBtn:document.querySelector('[data-target="logout"]'),SignInWithGoogle:document.querySelector(".google-button"),SignUpWithGoogle:document.querySelector(".button-google"),form:document.querySelector(".search"),listEl:document.querySelectorAll(".js-btn-list"),libraryEl:document.querySelector(".library"),library:document.querySelector(".library-btn"),linkEl:document.querySelector(".header__link"),activeClass:"nav-list__button--active",libraryJs:document.querySelector(".js-library"),activeClass:"nav-list__button--active",home:document.querySelector(".js-home"),targetsList:{home:"home",library:"library"},filterByGenres:document.querySelector(".filter-by-genres"),filterByLanguage:document.querySelector(".filter-by-lang"),filter:document.querySelector(".filter"),openFilter:document.querySelector(".filter__btn"),closeFilter:document.querySelector(".filter-close"),languagesBox:document.querySelector(".languages"),watchedBtn:document.querySelector(".button-watched"),queuedBtn:document.querySelector(".button-queue"),galleryContainer:document.querySelector(".gallery-holder"),homeBtn:document.querySelector(".js-home"),ourTeamHead:document.querySelector(".teammate__header"),signInTitle:document.querySelector(".signIn-title"),signInLabel:document.querySelector(".signIn-label"),signInPassword:document.querySelector(".signIn-password"),signInSubmitBtn:document.querySelector(".signIn-btn-submit"),signInGoogleBtn:document.querySelector(".continue-with"),signInNoAcc:document.querySelector(".no-account-desk"),signUpTitle:document.querySelector(".SignUp-title"),signUpName:document.querySelector(".SignUp-name"),signUpEmail:document.querySelector(".SignUp-email"),signUpPassword:document.querySelector(".SignUp-password"),signUpSubmitBtn:document.querySelector(".SignUp-btn-submit"),signUpDesc:document.querySelector(".sign-up-text"),swiper:document.querySelector(".swiper"),slider:document.querySelector(".swiper-wrapper"),exitBtn:document.querySelector('[data-target="logout"]'),anonBtn:document.querySelector(".js-anon")};function a(e,t){return function(){return e.apply(t,arguments)}}const{toString:l}=Object.prototype,{getPrototypeOf:c}=Object,u=(d=Object.create(null),e=>{const t=l.call(e);return d[t]||(d[t]=t.slice(8,-1).toLowerCase())});var d;const h=e=>(e=e.toLowerCase(),t=>u(t)===e),p=e=>t=>typeof t===e,{isArray:f}=Array,m=p("undefined");const g=h("ArrayBuffer");const y=p("string"),v=p("function"),_=p("number"),w=e=>null!==e&&"object"==typeof e,b=e=>{if("object"!==u(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},E=h("Date"),T=h("File"),C=h("Blob"),S=h("FileList"),x=h("URLSearchParams");function I(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),f(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function k(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n,P=e=>!m(e)&&e!==N;const L=(O="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>O&&e instanceof O);var O;const A=h("HTMLFormElement"),R=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),M=h("RegExp"),D=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};I(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},B={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var F={isArray:f,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!m(e)&&null!==e.constructor&&!m(e.constructor)&&v(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||l.call(e)===t||v(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:y,isNumber:_,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:b,isUndefined:m,isDate:E,isFile:T,isBlob:C,isRegExp:M,isFunction:v,isStream:e=>w(e)&&v(e.pipe),isURLSearchParams:x,isTypedArray:L,isFileList:S,forEach:I,merge:function e(){const{caseless:t}=P(this)&&this||{},n={},i=(i,r)=>{const s=t&&k(n,r)||r;b(n[s])&&b(i)?n[s]=e(n[s],i):b(i)?n[s]=e({},i):f(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&I(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(I(t,((t,i)=>{n&&v(t)?e[i]=a(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:h,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!_(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:A,hasOwnProperty:R,hasOwnProp:R,reduceDescriptors:D,freezeMethods:e=>{D(e,((t,n)=>{if(v(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];v(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:k,global:N,isContextDefined:P,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&v(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=f(e)?[]:{};return I(e,((e,t)=>{const s=n(e,i+1);!m(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function U(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}F.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const j=U.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{z[e]={value:e}})),Object.defineProperties(U,z),Object.defineProperty(j,"isAxiosError",{value:!0}),U.from=(e,t,n,i,r,s)=>{const o=Object.create(j);return F.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),U.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var q,H,W,$=U;H=function(e){var t,n,i=ee(e),r=i[0],s=i[1],o=new J(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)t=Y[e.charCodeAt(n)]<<18|Y[e.charCodeAt(n+1)]<<12|Y[e.charCodeAt(n+2)]<<6|Y[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=Y[e.charCodeAt(n)]<<2|Y[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=Y[e.charCodeAt(n)]<<10|Y[e.charCodeAt(n+1)]<<4|Y[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},W=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(te(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(K[t>>2]+K[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(K[t>>10]+K[t>>4&63]+K[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var V,G,K=[],Y=[],J="undefined"!=typeof Uint8Array?Uint8Array:Array,X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q=0,Z=X.length;Q<Z;++Q)K[Q]=X[Q],Y[X.charCodeAt(Q)]=Q;function ee(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function te(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(K[(r=i)>>18&63]+K[r>>12&63]+K[r>>6&63]+K[63&r]);return s.join("")}Y["-".charCodeAt(0)]=62,Y["_".charCodeAt(0)]=63,V=function(e,t,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?r-1:0,h=n?-1:1,p=e[t+d];for(d+=h,s=p&(1<<-u)-1,p>>=-u,u+=a;u>0;s=256*s+e[t+d],d+=h,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+d],d+=h,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,i),s-=c}return(p?-1:1)*o*Math.pow(2,s-i)},G=function(e,t,n,i,r,s){var o,a,l,c=8*s-r-1,u=(1<<c)-1,d=u>>1,h=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:s-1,f=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(o++,l/=2),o+d>=u?(a=0,o=u):o+d>=1?(a=(t*l-1)*Math.pow(2,r),o+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,r),o=0));r>=8;e[n+p]=255&a,p+=f,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+p]=255&o,p+=f,o/=256,c-=8);e[n+p-f]|=128*m};const ne="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;q=re;function ie(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,re.prototype),t}function re(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return ae(e)}return se(e,t,n)}function se(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!re.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|de(e,t);let i=ie(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(We(e,Uint8Array)){const t=new Uint8Array(e);return ce(t.buffer,t.byteOffset,t.byteLength)}return le(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(We(e,ArrayBuffer)||e&&We(e.buffer,ArrayBuffer))return ce(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(We(e,SharedArrayBuffer)||e&&We(e.buffer,SharedArrayBuffer)))return ce(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return re.from(i,t,n);const r=function(e){if(re.isBuffer(e)){const t=0|ue(e.length),n=ie(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||$e(e.length)?ie(0):le(e);if("Buffer"===e.type&&Array.isArray(e.data))return le(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return re.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function oe(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ae(e){return oe(e),ie(e<0?0:0|ue(e))}function le(e){const t=e.length<0?0:0|ue(e.length),n=ie(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function ce(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,re.prototype),i}function ue(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function de(e,t){if(re.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||We(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ze(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return qe(e).length;default:if(r)return i?-1:ze(e).length;t=(""+t).toLowerCase(),r=!0}}function he(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Se(this,t,n);case"utf8":case"utf-8":return Ee(this,t,n);case"ascii":return Te(this,t,n);case"latin1":case"binary":return Ce(this,t,n);case"base64":return be(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xe(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function pe(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function fe(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),$e(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=re.from(t,i)),re.isBuffer(t))return 0===t.length?-1:me(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):me(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function me(e,t,n,i,r){let s,o=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(e,s+i)!==c(t,i)){n=!1;break}if(n)return s}return-1}function ge(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if($e(i))return o;e[n+o]=i}return o}function ye(e,t,n,i){return He(ze(t,e.length-n),e,n,i)}function ve(e,t,n,i){return He(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function _e(e,t,n,i){return He(qe(t),e,n,i)}function we(e,t,n,i){return He(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function be(e,t,n){return 0===t&&n===e.length?W(e):W(e.slice(t,n))}function Ee(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}re.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),re.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(re.prototype,"parent",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.buffer}}),Object.defineProperty(re.prototype,"offset",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.byteOffset}}),re.poolSize=8192,re.from=function(e,t,n){return se(e,t,n)},Object.setPrototypeOf(re.prototype,Uint8Array.prototype),Object.setPrototypeOf(re,Uint8Array),re.alloc=function(e,t,n){return function(e,t,n){return oe(e),e<=0?ie(e):void 0!==t?"string"==typeof n?ie(e).fill(t,n):ie(e).fill(t):ie(e)}(e,t,n)},re.allocUnsafe=function(e){return ae(e)},re.allocUnsafeSlow=function(e){return ae(e)},re.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==re.prototype},re.compare=function(e,t){if(We(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),We(t,Uint8Array)&&(t=re.from(t,t.offset,t.byteLength)),!re.isBuffer(e)||!re.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},re.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},re.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return re.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=re.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(We(t,Uint8Array))r+t.length>i.length?(re.isBuffer(t)||(t=re.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!re.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},re.byteLength=de,re.prototype._isBuffer=!0,re.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)pe(this,t,t+1);return this},re.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)pe(this,t,t+3),pe(this,t+1,t+2);return this},re.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)pe(this,t,t+7),pe(this,t+1,t+6),pe(this,t+2,t+5),pe(this,t+3,t+4);return this},re.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Ee(this,0,e):he.apply(this,arguments)},re.prototype.toLocaleString=re.prototype.toString,re.prototype.equals=function(e){if(!re.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===re.compare(this,e)},re.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ne&&(re.prototype[ne]=re.prototype.inspect),re.prototype.compare=function(e,t,n,i,r){if(We(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),!re.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},re.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},re.prototype.indexOf=function(e,t,n){return fe(this,e,t,n,!0)},re.prototype.lastIndexOf=function(e,t,n){return fe(this,e,t,n,!1)},re.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return ge(this,e,t,n);case"utf8":case"utf-8":return ye(this,e,t,n);case"ascii":case"latin1":case"binary":return ve(this,e,t,n);case"base64":return _e(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},re.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Te(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Ce(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Se(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=Ve[e[i]];return r}function xe(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Ie(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function ke(e,t,n,i,r,s){if(!re.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Ne(e,t,n,i,r){Be(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Pe(e,t,n,i,r){Be(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Le(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Oe(e,t,n,i,r){return t=+t,n>>>=0,r||Le(e,0,n,4),G(e,t,n,i,23,4),n+4}function Ae(e,t,n,i,r){return t=+t,n>>>=0,r||Le(e,0,n,8),G(e,t,n,i,52,8),n+8}re.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,re.prototype),i},re.prototype.readUintLE=re.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},re.prototype.readUintBE=re.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},re.prototype.readUint8=re.prototype.readUInt8=function(e,t){return e>>>=0,t||Ie(e,1,this.length),this[e]},re.prototype.readUint16LE=re.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ie(e,2,this.length),this[e]|this[e+1]<<8},re.prototype.readUint16BE=re.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ie(e,2,this.length),this[e]<<8|this[e+1]},re.prototype.readUint32LE=re.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},re.prototype.readUint32BE=re.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},re.prototype.readBigUInt64LE=Ge((function(e){Fe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ue(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),re.prototype.readBigUInt64BE=Ge((function(e){Fe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ue(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),re.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},re.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},re.prototype.readInt8=function(e,t){return e>>>=0,t||Ie(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},re.prototype.readInt16LE=function(e,t){e>>>=0,t||Ie(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt16BE=function(e,t){e>>>=0,t||Ie(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},re.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},re.prototype.readBigInt64LE=Ge((function(e){Fe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ue(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),re.prototype.readBigInt64BE=Ge((function(e){Fe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Ue(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),re.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),V(this,e,!0,23,4)},re.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),V(this,e,!1,23,4)},re.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ie(e,8,this.length),V(this,e,!0,52,8)},re.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ie(e,8,this.length),V(this,e,!1,52,8)},re.prototype.writeUintLE=re.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){ke(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},re.prototype.writeUintBE=re.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){ke(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},re.prototype.writeUint8=re.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,1,255,0),this[t]=255&e,t+1},re.prototype.writeUint16LE=re.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeUint16BE=re.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeUint32LE=re.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},re.prototype.writeUint32BE=re.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigUInt64LE=Ge((function(e,t=0){return Ne(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeBigUInt64BE=Ge((function(e,t=0){return Pe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);ke(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},re.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);ke(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},re.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},re.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},re.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||ke(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigInt64LE=Ge((function(e,t=0){return Ne(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeBigInt64BE=Ge((function(e,t=0){return Pe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeFloatLE=function(e,t,n){return Oe(this,e,t,!0,n)},re.prototype.writeFloatBE=function(e,t,n){return Oe(this,e,t,!1,n)},re.prototype.writeDoubleLE=function(e,t,n){return Ae(this,e,t,!0,n)},re.prototype.writeDoubleBE=function(e,t,n){return Ae(this,e,t,!1,n)},re.prototype.copy=function(e,t,n,i){if(!re.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},re.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!re.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=re.isBuffer(e)?e:re.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const Re={};function Me(e,t,n){Re[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function De(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Be(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new Re.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Fe(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Ue(t,e.length-(n+1))}(i,r,s)}function Fe(e,t){if("number"!=typeof e)throw new Re.ERR_INVALID_ARG_TYPE(t,"number",e)}function Ue(e,t,n){if(Math.floor(e)!==e)throw Fe(e,n),new Re.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Re.ERR_BUFFER_OUT_OF_BOUNDS;throw new Re.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Me("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Me("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Me("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=De(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=De(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const je=/[^+/0-9A-Za-z-_]/g;function ze(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function qe(e){return H(function(e){if((e=(e=e.split("=")[0]).trim().replace(je,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function He(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function We(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function $e(e){return e!=e}const Ve=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function Ge(e){return"undefined"==typeof BigInt?Ke:e}function Ke(){throw new Error("BigInt not supported")}var Ye=q;function Je(e){return F.isPlainObject(e)||F.isArray(e)}function Xe(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function Qe(e,t,n){return e?e.concat(t).map((function(e,t){return e=Xe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Ze=F.toFlatObject(F,{},null,(function(e){return/^is[A-Z]/.test(e)}));var et=function(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!F.isUndefined(t[e])}))).metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&F.isSpecCompliantForm(t);if(!F.isFunction(r))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(F.isDate(e))return e.toISOString();if(!a&&F.isBlob(e))throw new $("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(e)||F.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Ye.from(e):e}function c(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(F.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(F.isArray(e)&&function(e){return F.isArray(e)&&!e.some(Je)}(e)||(F.isFileList(e)||F.endsWith(n,"[]"))&&(a=F.toArray(e)))return n=Xe(n),a.forEach((function(e,i){!F.isUndefined(e)&&null!==e&&t.append(!0===o?Qe([n],i,s):null===o?n:n+"[]",l(e))})),!1;return!!Je(e)||(t.append(Qe(r,n,s),l(e)),!1)}const u=[],d=Object.assign(Ze,{defaultVisitor:c,convertValue:l,isVisitable:Je});if(!F.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!F.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),F.forEach(n,(function(n,s){!0===(!(F.isUndefined(n)||null===n)&&r.call(t,n,F.isString(s)?s.trim():s,i,d))&&e(n,i?i.concat(s):[s])})),u.pop()}}(e),t};function tt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function nt(e,t){this._pairs=[],e&&et(e,this,t)}const it=nt.prototype;it.append=function(e,t){this._pairs.push([e,t])},it.toString=function(e){const t=e?function(t){return e.call(this,t,tt)}:tt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var rt=nt;function st(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ot(e,t,n){if(!t)return e;const i=n&&n.encode||st,r=n&&n.serialize;let s;if(s=r?r(t,n):F.isURLSearchParams(t)?t.toString():new rt(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var at=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},lt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ct={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:rt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ut(e,t){return et(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return ct.isNode&&F.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var dt=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&F.isArray(i)?i.length:s,a)return F.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&F.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&F.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(F.isFormData(e)&&F.isFunction(e.entries)){const n={};return F.forEachEntry(e,((e,i)=>{t(function(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const ht={"Content-Type":void 0};const pt={transitional:lt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=F.isObject(e);r&&F.isHTMLForm(e)&&(e=new FormData(e));if(F.isFormData(e))return i&&i?JSON.stringify(dt(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ut(e,this.formSerializer).toString();if((s=F.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return et(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||pt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&F.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw $.from(e,$.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};F.forEach(["delete","get","head"],(function(e){pt.headers[e]={}})),F.forEach(["post","put","patch"],(function(e){pt.headers[e]=F.merge(ht)}));var ft=pt;const mt=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var gt=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&mt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const yt=Symbol("internals");function vt(e){return e&&String(e).trim().toLowerCase()}function _t(e){return!1===e||null==e?e:F.isArray(e)?e.map(_t):String(e)}function wt(e,t,n,i,r){return F.isFunction(i)?i.call(this,t,n):(r&&(t=n),F.isString(t)?F.isString(i)?-1!==t.indexOf(i):F.isRegExp(i)?i.test(t):void 0:void 0)}class bt{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(e,t,n){const r=vt(t);if(!r)throw new Error("header name must be a non-empty string");const s=F.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=_t(e))}const s=(e,t)=>F.forEach(e,((e,n)=>r(e,n,t)));return F.isPlainObject(e)||e instanceof this.constructor?s(e,t):F.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(gt(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=vt(e)){const n=F.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(F.isFunction(t))return t.call(this,e,n);if(F.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=vt(e)){const n=F.findKey(this,e);return!(!n||void 0===this[n]||t&&!wt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=vt(e)){const r=F.findKey(n,e);!r||t&&!wt(0,n[r],r,t)||(delete n[r],i=!0)}}return F.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!wt(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return F.forEach(this,((i,r)=>{const s=F.findKey(n,r);if(s)return t[s]=_t(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=_t(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return F.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&F.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[yt]=this[yt]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=vt(e);t[i]||(!function(e,t){const n=F.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return F.isArray(e)?e.forEach(i):i(e),this}}bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),F.freezeMethods(bt.prototype),F.freezeMethods(bt);var Et=bt;function Tt(e,t){const n=this||ft,i=t||n,r=Et.from(i.headers);let s=i.data;return F.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function Ct(e){return!(!e||!e.__CANCEL__)}function St(e,t,n){$.call(this,null==e?"canceled":e,$.ERR_CANCELED,t,n),this.name="CanceledError"}F.inherits(St,$,{__CANCEL__:!0});var xt=St;function It(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var kt=ct.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),F.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),F.isString(i)&&o.push("path="+i),F.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Nt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Pt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Nt(e,t):t}var Lt=ct.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=F.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Ot(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var At=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let u=o,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-r<t)return;const h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function Rt(e,t){let n=0;const i=At(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var Mt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Et.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}F.isFormData(i)&&(ct.isStandardBrowserEnv||ct.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const c=Pt(e.baseURL,e.url);function u(){if(!l)return;const i=Et.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());It((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),ot(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new $("Request aborted",$.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new $("Network Error",$.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||lt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new $(t,i.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,l)),l=null},ct.isStandardBrowserEnv){const t=(e.withCredentials||Lt(c))&&e.xsrfCookieName&&kt.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&F.forEach(r.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),F.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Rt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Rt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new xt(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const d=Ot(c);d&&-1===ct.protocols.indexOf(d)?n(new $("Unsupported protocol "+d+":",$.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const Dt={http:null,xhr:Mt};F.forEach(Dt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Bt={getAdapter:e=>{e=F.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=F.isString(n)?Dt[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new $(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(F.hasOwnProp(Dt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!F.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Dt};function Ft(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xt(null,e)}function Ut(e){Ft(e),e.headers=Et.from(e.headers),e.data=Tt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Bt.getAdapter(e.adapter||ft.adapter)(e).then((function(t){return Ft(e),t.data=Tt.call(e,e.transformResponse,t),t.headers=Et.from(t.headers),t}),(function(t){return Ct(t)||(Ft(e),t&&t.response&&(t.response.data=Tt.call(e,e.transformResponse,t.response),t.response.headers=Et.from(t.response.headers))),Promise.reject(t)}))}const jt=e=>e instanceof Et?e.toJSON():e;function zt(e,t){t=t||{};const n={};function i(e,t,n){return F.isPlainObject(e)&&F.isPlainObject(t)?F.merge.call({caseless:n},e,t):F.isPlainObject(t)?F.merge({},t):F.isArray(t)?t.slice():t}function r(e,t,n){return F.isUndefined(t)?F.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!F.isUndefined(t))return i(void 0,t)}function o(e,t){return F.isUndefined(t)?F.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(jt(e),jt(t),!0)};return F.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=l[i]||r,o=s(e[i],t[i],i);F.isUndefined(o)&&s!==a||(n[i]=o)})),n}const qt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{qt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ht={};qt.transitional=function(e,t,n){function i(e,t){return"[Axios v1.3.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new $(i(r," has been removed"+(t?" in "+t:"")),$.ERR_DEPRECATED);return t&&!Ht[r]&&(Ht[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var Wt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new $("option "+s+" must be "+n,$.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new $("Unknown option "+s,$.ERR_BAD_OPTION)}},validators:qt};const $t=Wt.validators;class Vt{constructor(e){this.defaults=e,this.interceptors={request:new at,response:new at}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=zt(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&Wt.assertOptions(n,{silentJSONParsing:$t.transitional($t.boolean),forcedJSONParsing:$t.transitional($t.boolean),clarifyTimeoutError:$t.transitional($t.boolean)},!1),null!=i&&(F.isFunction(i)?t.paramsSerializer={serialize:i}:Wt.assertOptions(i,{encode:$t.function,serialize:$t.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&F.merge(r.common,r[t.method]),s&&F.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Et.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Ut.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=o.length;let h=t;for(d=0;d<u;){const e=o[d++],t=o[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{c=Ut.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return ot(Pt((e=zt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}F.forEach(["delete","get","head","options"],(function(e){Vt.prototype[e]=function(t,n){return this.request(zt(n||{},{method:e,url:t,data:(n||{}).data}))}})),F.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(zt(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Vt.prototype[e]=t(),Vt.prototype[e+"Form"]=t(!0)}));var Gt=Vt;class Kt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new xt(e,i,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Kt((function(t){e=t})),cancel:e}}}var Yt=Kt;const Jt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jt).forEach((([e,t])=>{Jt[t]=e}));var Xt=Jt;const Qt=function e(t){const n=new Gt(t),i=a(Gt.prototype.request,n);return F.extend(i,Gt.prototype,n,{allOwnKeys:!0}),F.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(zt(t,n))},i}(ft);Qt.Axios=Gt,Qt.CanceledError=xt,Qt.CancelToken=Yt,Qt.isCancel=Ct,Qt.VERSION="1.3.5",Qt.toFormData=et,Qt.AxiosError=$,Qt.Cancel=Qt.CanceledError,Qt.all=function(e){return Promise.all(e)},Qt.spread=function(e){return function(t){return e.apply(null,t)}},Qt.isAxiosError=function(e){return F.isObject(e)&&!0===e.isAxiosError},Qt.mergeConfig=zt,Qt.AxiosHeaders=Et,Qt.formToJSON=e=>dt(F.isHTMLForm(e)?new FormData(e):e),Qt.HttpStatusCode=Xt,Qt.default=Qt;var Zt=Qt;const{Axios:en,AxiosError:tn,CanceledError:nn,isCancel:rn,CancelToken:sn,VERSION:on,all:an,Cancel:ln,isAxiosError:cn,spread:un,toFormData:dn,AxiosHeaders:hn,HttpStatusCode:pn,formToJSON:fn,mergeConfig:mn}=Zt;var gn,yn,vn={};gn=void 0!==n?n:"undefined"!=typeof window?window:vn,yn=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",r="Warning",s="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=c(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,h=function(a,u,h,f){if(!l("body"))return!1;t||p.Notify.init({});var m=c(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof f&&!Array.isArray(f)){var g={};"object"==typeof h?g=h:"object"==typeof f&&(g=f),t=c(!0,t,g)}var y,v,_=t[a.toLocaleLowerCase("en")];d++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(y=u,(v=e.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(_.fontAwesomeIconColor=_.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(w.id=o.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var b=e.document.getElementById(o.overlayID)||e.document.createElement("div");b.id=o.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=t.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=_.backOverlayColor||t.backOverlayColor,b.className=t.cssAnimation?"nx-with-animation":"",b.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(b)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(w);var E=e.document.createElement("div");E.id=t.ID+"-"+d,E.className=t.className+" "+_.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),E.style.fontSize=t.fontSize,E.style.color=_.textColor,E.style.background=_.background,E.style.borderRadius=t.borderRadius,E.style.pointerEvents="all",t.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(E.style.animationDuration=t.cssAnimationDuration+"ms");var T="";if(t.closeButton&&"function"!=typeof h&&(T='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+_.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)E.innerHTML='<i style="color:'+_.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+_.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?T:"");else{var C="";a===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===s&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),E.innerHTML=C+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?T:"")}else E.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?T:"");if("left-bottom"===t.position||"right-bottom"===t.position){var S=e.document.getElementById(o.wrapID);S.insertBefore(E,S.firstChild)}else e.document.getElementById(o.wrapID).appendChild(E);var x=e.document.getElementById(E.id);if(x){var I,k,N=function(){x.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(I)},P=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(E.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var e=setTimeout((function(){P(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof h||t.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof h&&h(),N();var e=setTimeout((function(){P(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var L=function(){I=setTimeout((function(){N()}),t.timeout),k=setTimeout((function(){P()}),t.timeout+t.cssAnimationDuration)};L(),t.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(I),clearTimeout(k)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),L()})))}}if(t.showOnlyTheLastOne&&d>0)for(var O=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+d+"])"),A=0;A<O.length;A++){var R=O[A];null!==R.parentNode&&R.parentNode.removeChild(R)}t=c(!0,t,m)},p={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,i){h(n,e,t,i)},failure:function(e,t,n){h(i,e,t,n)},warning:function(e,t,n){h(r,e,t,n)},info:function(e,t,n){h(s,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return yn(gn)})):"object"==typeof vn?vn=yn(gn):gn.Notiflix=yn(gn);var _n={};function wn(){_n.Loading.circle({svgColor:"#B92F2C"})}function bn(){_n.Loading.remove()}!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof _n?_n=t(e):e.Notiflix=t(e)}(void 0!==n?n:"undefined"!=typeof window?window:_n,(function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",r="Circle",s="Arrows",o="Dots",a="Pulse",l="Custom",c="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},d=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},h=function(t){return t||(t="head"),null!==e.document[t]||(d('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},p=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=p(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},f=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(c,m,g,v,_){if(!h("body"))return!1;t||y.Loading.init({});var w=p(!0,t,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var b={};"object"==typeof m?b=m:"object"==typeof g&&(b=g),t=p(!0,t,b)}var E,T,C="";if("string"==typeof m&&m.length>0&&(C=m),v){var S="";(C=C.length>t.messageMaxLength?f(C).toString().substring(0,t.messageMaxLength)+"...":f(C).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+C+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var x="";if(c===n)E=t.svgSize,T=t.svgColor,E||(E="60px"),T||(T="#32c682"),x='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+T+'" width="'+E+'" height="'+E+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)x=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)x=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===s)x=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)x=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)x=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)x=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)x='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return d('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;x=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var I=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),k=e.innerWidth,N=I>=k?k-40+"px":I+"px",P='<div style="width:'+N+"; height:"+N+';" class="'+t.className+"-icon"+(C.length>0?" nx-with-message":"")+'">'+x+"</div>",L=e.document.createElement("div");if(L.id=u.ID,L.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),L.style.zIndex=t.zindex,L.style.background=t.backgroundColor,L.style.animationDuration=t.cssAnimationDuration+"ms",L.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',L.style.display="flex",L.style.flexWrap="wrap",L.style.flexDirection="column",L.style.alignItems="center",L.style.justifyContent="center",t.rtl&&(L.setAttribute("dir","rtl"),L.classList.add("nx-rtl-on")),L.innerHTML=P+S,!e.document.getElementById(L.id))if(e.document.body.appendChild(L),t.clickToClose)e.document.getElementById(L.id).addEventListener("click",(function(){L.classList.add("nx-remove");var e=setTimeout((function(){null!==L.parentNode&&(L.parentNode.removeChild(L),clearTimeout(e))}),t.cssAnimationDuration)}))}else if(e.document.getElementById(u.ID))var O=e.document.getElementById(u.ID),A=setTimeout((function(){O.classList.add("nx-remove");var e=setTimeout((function(){null!==O.parentNode&&(O.parentNode.removeChild(O),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(A)}),_);t=p(!0,t,w)},y={Loading:{init:function(n){t=p(!0,u,n),function(t,n){if(!h("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(m,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return d("You have to initialize the Loading module before call Merge function."),!1;t=p(!0,t,e)},standard:function(e,t){g(n,e,t,!0,0)},hourglass:function(e,t){g(i,e,t,!0,0)},circle:function(e,t){g(r,e,t,!0,0)},arrows:function(e,t){g(s,e,t,!0,0)},dots:function(e,t){g(o,e,t,!0,0)},pulse:function(e,t){g(a,e,t,!0,0)},custom:function(e,t){g(l,e,t,!0,0)},notiflix:function(e,t){g(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),g(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(u.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?f(n).substring(0,t.messageMaxLength)+"...":f(n);var r=i.getElementsByTagName("p")[0];if(r)r.innerHTML=n;else{var s=e.document.createElement("p");s.id=t.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=t.messageColor,s.style.fontSize=t.messageFontSize,s.innerHTML=n,i.appendChild(s)}}else d("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?p(!0,e.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}}));async function En(e,t){try{const n=`https://api.themoviedb.org/3/movie/popular?api_key=dd2eacab57962d131eb2537d52aeafc3&language=${e}&page=${t}`;wn();return(await Zt.get(n)).data}catch(e){vn.Notify.failure("Oops, an error occurred")}finally{bn()}}async function Tn(e,t){try{wn();const n=`https://api.themoviedb.org/3//movie/${e}?api_key=dd2eacab57962d131eb2537d52aeafc3&language=${t}`;return(await Zt.get(n)).data}catch(e){vn.Notify.failure("Oops, an error occurred")}finally{bn()}}async function Cn(e,t,n){try{wn();const i=`https://api.themoviedb.org/3/search/movie?api_key=dd2eacab57962d131eb2537d52aeafc3&language=${n}&page=${t}&include_adult=false&query=${e}`,r=await Zt.get(i);return await r.data}catch(e){vn.Notify.failure("Oops, an error occurred")}finally{bn()}}async function Sn(e,t){return wn(),await fetch(`https://api.themoviedb.org/3//movie/${e}?api_key=dd2eacab57962d131eb2537d52aeafc3&language=${t}`).then((e=>(e.ok||vn.Notify.failure("Oops, an error occurred"),e.json()))).then((e=>(bn(),e))).catch((e=>{vn.Notify.failure("Oops, an error occurred")}))}async function xn(e,t){try{wn();const n=`https://api.themoviedb.org/3//movie/${e}/videos?api_key=dd2eacab57962d131eb2537d52aeafc3&language=${t}`;return(await Zt.get(n)).data}catch(e){vn.Notify.failure("Oops, an error occurred")}finally{bn()}}async function In(e,t,n){try{wn();const i=`https://api.themoviedb.org/3/discover/movie?api_key=dd2eacab57962d131eb2537d52aeafc3&sort_by=popularity.desc&language=${t}&with_genres=${e}&page=${n}`,r=await Zt.get(i);return await r.data}catch(e){vn.Notify.failure("Oops, an error occurred")}finally{bn()}}async function kn(e,t){try{wn();const n=`https://api.themoviedb.org/3/discover/movie?api_key=dd2eacab57962d131eb2537d52aeafc3&language=${e}&page=1&with_original_language=${e}&page=${t}`,i=await Zt.get(n);return await i.data}catch(e){vn.Notify.failure("Oops, an error occurred")}finally{bn()}}var Nn;Nn=new URL(s("kyEFX").resolve("h3zzN"),import.meta.url).toString();var Pn;Pn=new URL(s("kyEFX").resolve("j8dOp"),import.meta.url).toString();const Ln=()=>{let e=null;try{e=JSON.parse(localStorage.getItem("Watched movies"))}catch{return}return e},On=()=>{let e=null;try{e=JSON.parse(localStorage.getItem("Queue movies"))}catch{return}return e};function An(e){for(let t=0;t<e.length;t+=1){let n=localStorage.getItem("lang");Sn(e[t],n).then((e=>{o.homeGalleryList.insertAdjacentHTML("beforeend",Bn(e))}))}}const Rn=e=>{e.preventDefault(),o.queuedBtn.classList.remove("is-active"),o.watchedBtn.classList.add("is-active"),Mn();let t=Ln();null==t||0===t.length?(o.homeGalleryList.innerHTML="",o.paginationEl.style.display="none",o.homeGalleryList.classList.add("clear-watched"),Dn()):t.length>0&&(o.homeGalleryList.innerHTML="",o.paginationEl.style.display="none",o.homeGalleryList.classList.remove("clear-watched"),An(t))};function Mn(){o.homeGalleryList.innerHTML=""}function Dn(){"uk"===localStorage.getItem("lang")?o.homeGalleryList.insertAdjacentHTML("beforeend",`<li ">\n  <div class="clear-watched">\n      <div>\n    <img  src="${t(Pn)}" alt="title"loading="lazy"/>\n    <div class="movie-info" >\n      <p class="filmcard-name clear-watched-name" >НІЧОГО!!</p>\n      <p class="filmcard-genre clear-watched-problems">Ваша колекція пуста.</p>\n    </div>\n</div>\n</div>\n</li>\n      `):o.homeGalleryList.insertAdjacentHTML("beforeend",`\n  <li >\n  <div class="clear-watched">\n      <div>\n    <img  src="${t(Pn)}" alt="title"loading="lazy"/>\n    <div class="movie-info" >\n      <p class="filmcard-name clear-watched-name" >NOTHING!!</p>\n      <p class="filmcard-genre clear-watched-problems">Your collection list is empty.</p>\n    </div>\n</div>\n</div>\n</li>\n      `)}function Bn(e){let n=Ln(),i=On();if(!(null!=n&&0!==n.length||null!=i&&0!==i.length))return;const{id:r,title:s,overview:o,poster_path:a,release_date:l,genres:c,original_title:u,popularity:d,vote_average:h,vote_count:p}=e,f=a?`https://image.tmdb.org/t/p/w500/${a}`:t(Nn),m=e.genres.map((e=>e.name)),g=m.join(", ")?m.slice(0,2).join(", "):"Unknown genres";let y=null;y=m.length>2?`${g}...`:`${g}`;const v=l??null,_=v?v.slice(0,4):"Unknown year";return`<li class="filmcard" data-movie="${e.id}">\n  <a href="#" class="filmcard-link link">      \n        <img class="filmcard-img"\n        src="${f}"\n        alt=${e.title}\n        loading="lazy"\n        />      \n    <div class="movie-info">\n      <p class="filmcard-name">${e.title}</p>\n      <p class="filmcard-genre"> ${y} | ${_}</p> \n    </div>\n    </a>\n  </li>`}o.watchedBtn.addEventListener("click",Rn),o.queuedBtn.addEventListener("click",(e=>{o.queuedBtn.classList.add("is-active"),o.watchedBtn.classList.remove("is-active"),Mn();let t=On();null==t||0===t.length?(o.homeGalleryList.innerHTML="",o.paginationEl.style.display="none",o.homeGalleryList.classList.add("clear-watched"),Dn()):t.length>0&&(o.homeGalleryList.innerHTML="",o.paginationEl.style.display="none",o.homeGalleryList.classList.remove("clear-watched"),An(t))})),o.homeBtn.addEventListener("click",(e=>{location.reload()})),o.libraryJs.addEventListener("click",Rn);const Fn=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],Un=[{id:28,name:"Бойовик"},{id:12,name:"Пригоди"},{id:16,name:"Мультфільм"},{id:35,name:"Комедія"},{id:80,name:"Кримінал"},{id:99,name:"Документальний"},{id:18,name:"Драма"},{id:10751,name:"Сімейний"},{id:14,name:"Фентезі"},{id:36,name:"Історичний"},{id:27,name:"Жахи"},{id:10402,name:"Музика"},{id:9648,name:"Детектив"},{id:10749,name:"Мелодрама"},{id:878,name:"Фантастика"},{id:10770,name:"Телефільм"},{id:53,name:"Трилер"},{id:10752,name:"Військовий"},{id:37,name:"Вестерн"}];function jn(e){const t=Fn.reduce(((t,n)=>(Array.isArray(e)&&e.includes(n.id)&&t.push(n.name),t)),[]);return t.length?t.length>2?`${t[0]}, ${t[1]}, ...`:t.join(", "):"Unknown genre"}function zn(e){const t=Un.reduce(((t,n)=>(Array.isArray(e)&&e.includes(n.id)&&t.push(n.name),t)),[]);return t.length?t.length>2?`${t[0]}, ${t[1]}, ...`:t.join(", "):"Невідомий жанр"}new URL(s("kyEFX").resolve("7jW4b"),import.meta.url).toString();let qn=localStorage.getItem("lang");function Hn(e){return e?"uk"===qn?e.map((e=>{const n=zn(e.genre_ids),i=e.release_date??e.first_air_date??null,r=i?i.slice(0,4):"Невідомий рік",s=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(Nn);return`\n      <li class="filmcard" data-movie="${e.id}">\n      <a href="#" class="filmcard-link link">      \n            <img class="filmcard-img"\n            src="${s}"\n            alt=${e.title}\n            loading="lazy"\n            />      \n        <div class="movie-info">\n          <p class="filmcard-name">${e.title}</p>\n          <p class="filmcard-genre"> ${n} | ${r}</p> \n        </div>\n        </a>\n      </li>`})).join(""):e.map((e=>{const n=jn(e.genre_ids),i=e.release_date??e.first_air_date??null,r=i?i.slice(0,4):"Unknown year",s=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(Nn);return`\n      <li class="filmcard" data-movie="${e.id}">\n      <a href="#" class="filmcard-link link">      \n            <img class="filmcard-img"\n            src="${s}"\n            alt=${e.title}\n            loading="lazy"\n            />      \n        <div class="movie-info">\n          <p class="filmcard-name">${e.title}</p>\n          <p class="filmcard-genre"> ${n} | ${r}</p> \n        </div>\n        </a>\n      </li>`})).join(""):""}var Wn={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */function $n(e,n){const i=n<5?n:5,r={totalItems:e,itemsPerPage:20,page:1,visiblePages:i,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},s=new(t(Wn))(o.paginationEl,r);return o.paginationEl.style.display=i<=1?"none":"block",s}!function(e,t){Wn=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,r,s,o=Object.prototype.hasOwnProperty;for(r=1,s=arguments.length;r<s;r+=1)for(i in n=arguments[r])o.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),r=n(17),s=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var r,s;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,r=n;n>=0&&r<s;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){var i=n(29),r=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=s(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),r=n(7),s=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(e,t){this._options=s({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(s/2),(n=(t=Math.max(e-i,1))+s-1)>r&&(t=Math.max(r-s+1,1),n=r)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),e.exports=u},function(e,t,n){var i=n(0),r=n(14),s=n(4),o=n(16),a=n(2),l=n(5),c=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){i(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var i=this;s(e)?(e=e.split(u),c(e,(function(e){i._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){i.on(t,e,n)})))},d.prototype.once=function(e,t,n){var i=this;if(o(e))return n=t,void c(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},d.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},d.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},d.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,s=t===i.context,o=r&&s;return o&&n._forgetContext(i.context),o}},d.prototype._offByEventName=function(e,t){var n=this,i=l(t),r=n._matchHandler(t);e=e.split(u),c(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?c(e,(function(e,t){i.off(t,e)})):s(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},d.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,n){var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),r=n(7),s=n(21),o=n(22),a=n(24),l=n(25),c=n(0),u=n(4),d=n(28),h=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],m=["prev","next"],g=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(f,(function(e){this._buttons[e]=h.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(f,(function(e){var t="disabled"+h.capitalizeFirstLetter(e);this._buttons[t]=h.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=h.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=h.createElementByTemplate(this._template.currentPage,{page:n}):(t=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||l(t,this._firstItemClassName),n!==r||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,i,r=s(t);a(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!h.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],h.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),r=n(3),s=n(23);function o(e,t,n,i){function o(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,i){var o=s(e,t),a=!1;r(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:i})}(e,t,n,o)}e.exports=function(e,t,n,s){i(t)?r(t.split(/\s+/g),(function(t){o(e,t,n,s)})):r(t,(function(t,i){o(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),r=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?i(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),r=n(3),s=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,p=/^["']\w+["']$/,f=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],s=0,o=0;return r(t,(function(e,r){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(o,r)),o=r+1)})),i.push(t.slice(o)),{exps:n,sourcesInsideIf:i}}(e,t),s=!1,o="";return r(i.exps,(function(e,t){return(s=w(e,n))&&(o=b(i.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var i=w(e,n),o=s(i)?"@index":"@key",l={},c="";return r(i,(function(e,i){l[o]=i,l["@this"]=e,a(n,l),c+=b(t.slice(),n)})),c},with:function(e,t,n){var r=i("as",e),s=e[r+1],o=w(e.slice(0,r),n),l={};return l[s]=o,b(t,a(n,l))||""}},y=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(s,i)),s=i+n[0].length,n=t.exec(e);return r.push(e.slice(s)),r};function v(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:p.test(e)?i=e.replace(f,""):c.test(e)?i=v((n=e.split(u))[0],t)[v(n[1],t)]:d.test(e)?i=v((n=e.split(h))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function _(e,t,n){for(var i,r,s,a,l=g[e],c=1,u=2,d=t[u];c&&o(d);)0===d.indexOf(e)?c+=1:0===d.indexOf("/"+e)&&(c-=1,i=u),d=t[u+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(r=0,s=i,(a=t.splice(r+1,s-r)).pop(),a),n),t}function w(e,t){var n=v(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(v(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function b(e,t){for(var n,i,r,s=1,a=e[s];o(a);)i=(n=a.split(" "))[0],g[i]?(r=_(i,e.splice(s,e.length-s),t),e=e.concat(r)):e[s]=w(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return b(y(e,l),t)}},function(e,t,n){var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}));function Vn(){document.body.scrollTop=0,document.documentElement.scrollTop=0}let Gn,Kn=1,Yn=0;function Jn(e){En(e,Kn).then((t=>{o.homeGalleryList.innerHTML="",o.homeGalleryList.insertAdjacentHTML("beforeend",Hn(t.results)),Yn=t.total_pages,Gn||(Gn=$n(t.total_results,Yn),Gn.on("beforeMove",(t=>{var n;n=t.page,o.homeGalleryList.innerHTML="",En(e,n).then((e=>{o.homeGalleryList.innerHTML="",o.homeGalleryList.insertAdjacentHTML("beforeend",Hn(e.results)),Vn()})),Kn=t.page})))}))}var Xn;function Qn(){o.homeGalleryList.innerHTML="",o.galleryBgImg.style="none";const e=o.searchForm.querySelector(".search-notification");e&&e.remove();const t=o.galleryBgImg.querySelector(".text-notification");t&&t.remove()}function Zn(){o.galleryBgImg.style.height="280px",o.galleryBgImg.style.backgroundRepeat="no-repeat",o.galleryBgImg.style.backgroundPosition="center",o.galleryBgImg.style.backgroundImage=`url(${t(Xn)})`;const e=document.createElement("p");e.textContent="OOPS! nothing found",o.galleryBgImg.append(e),e.classList.add("text-notification")}let ei;Xn=new URL(s("kyEFX").resolve("bCtM5"),import.meta.url).toString();let ti,ni=0;let ii=localStorage.getItem("lang");async function ri(e,t){await Cn(e,t,ii).then((e=>{e.results&&0!==e.results.length||(Zn(),"uk"===ii?o.searchForm.insertAdjacentHTML("beforeend","<p class='search-notification'>Результат пошуку невдалий. Введіть правильну назву фільму.</p>"):o.searchForm.insertAdjacentHTML("beforeend","<p class='search-notification'>Search result not successful. Enter the correct movie name.</p>")),o.homeGalleryList.insertAdjacentHTML("beforeend",Hn(e.results)),ni=e.total_pages,ti||(ti=$n(e.total_results,ni),ti.on("beforeMove",(e=>{var n;n=e.page,Vn(),o.homeGalleryList.innerHTML="",ri(ei,n),t=e.page})))}))}function si(){o.libraryEl.hidden=!0,o.listEl.forEach((e=>{let t;e.querySelectorAll("button").forEach((e=>{e.classList.contains(o.activeClass)&&(t=e),e.addEventListener("click",(n=>{n.preventDefault(),t=((e,t)=>(e.classList.remove(o.activeClass),t.classList.add(o.activeClass),t))(t,e),n.target.dataset.target==o.targetsList.library&&(o.form.hidden=!0,o.libraryEl.style.display="flex"),n.target.dataset.target==o.targetsList.home&&(o.form.hidden=!1,o.libraryEl.style.display="none")}))}))}))}var oi,ai,li,ci=oi={};function ui(){throw new Error("setTimeout has not been defined")}function di(){throw new Error("clearTimeout has not been defined")}function hi(e){if(ai===setTimeout)return setTimeout(e,0);if((ai===ui||!ai)&&setTimeout)return ai=setTimeout,setTimeout(e,0);try{return ai(e,0)}catch(t){try{return ai.call(null,e,0)}catch(t){return ai.call(this,e,0)}}}!function(){try{ai="function"==typeof setTimeout?setTimeout:ui}catch(e){ai=ui}try{li="function"==typeof clearTimeout?clearTimeout:di}catch(e){li=di}}();var pi,fi=[],mi=!1,gi=-1;function yi(){mi&&pi&&(mi=!1,pi.length?fi=pi.concat(fi):gi=-1,fi.length&&vi())}function vi(){if(!mi){var e=hi(yi);mi=!0;for(var t=fi.length;t;){for(pi=fi,fi=[];++gi<t;)pi&&pi[gi].run();gi=-1,t=fi.length}pi=null,mi=!1,function(e){if(li===clearTimeout)return clearTimeout(e);if((li===di||!li)&&clearTimeout)return li=clearTimeout,clearTimeout(e);try{li(e)}catch(t){try{return li.call(null,e)}catch(t){return li.call(this,e)}}}(e)}}function _i(e,t){this.fun=e,this.array=t}function wi(){}ci.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];fi.push(new _i(e,t)),1!==fi.length||mi||hi(vi)},_i.prototype.run=function(){this.fun.apply(null,this.array)},ci.title="browser",ci.browser=!0,ci.env={},ci.argv=[],ci.version="",ci.versions={},ci.on=wi,ci.addListener=wi,ci.once=wi,ci.off=wi,ci.removeListener=wi,ci.removeAllListeners=wi,ci.emit=wi,ci.prependListener=wi,ci.prependOnceListener=wi,ci.listeners=function(e){return[]},ci.binding=function(e){throw new Error("process.binding is not supported")},ci.cwd=function(){return"/"},ci.chdir=function(e){throw new Error("process.chdir is not supported")},ci.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bi=!1,Ei=!1,Ti="${JSCORE_VERSION}",Ci=function(e,t){if(!e)throw Si(t)},Si=function(e){return new Error("Firebase Database ("+Ti+") INTERNAL ASSERT FAILED: "+e)},xi=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Ii={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),i.push(n[c],n[u],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new ki;const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ni=function(e){const t=xi(e);return Ii.encodeByteArray(t,!0)},Pi=function(e){return Ni(e).replace(/\./g,"")},Li=function(e){try{return Ii.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oi(e){return Ai(void 0,e)}function Ai(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ai(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ri=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Mi=()=>{try{return Ri()||(()=>{if(void 0===oi||void 0===oi.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Li(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Di=e=>{var t,n;return null===(n=null===(t=Mi())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Bi=e=>{const t=Di(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},Fi=e=>{var t;return null===(t=Mi())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Pi(JSON.stringify({alg:"none",type:"JWT"})),Pi(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function qi(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zi())}function Hi(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Wi(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function $i(){const e=zi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vi(){return!0===bi||!0===Ei}function Gi(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Ki extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Ji,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Ki(i,o,n)}}const Ji=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){return JSON.parse(e)}function Qi(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Xi(Li(s[0])||""),n=Xi(Li(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},er=function(e){const t=Zi(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},tr=function(e){const t=Zi(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ir(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function rr(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function sr(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function or(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(ar(n)&&ar(s)){if(!or(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function ar(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lr(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function cr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ur(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function hr(e,t){const n=new pr(e,t);return n.subscribe.bind(n)}class pr{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=fr),void 0===i.error&&(i.error=fr),void 0===i.complete&&(i.complete=fr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function fr(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gr=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Ci(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},yr=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vr(e){return e&&e._delegate?e._delegate:e}class _r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ui;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class br{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=[];var Tr,Cr;(Cr=Tr||(Tr={}))[Cr.DEBUG=0]="DEBUG",Cr[Cr.VERBOSE=1]="VERBOSE",Cr[Cr.INFO=2]="INFO",Cr[Cr.WARN=3]="WARN",Cr[Cr.ERROR=4]="ERROR",Cr[Cr.SILENT=5]="SILENT";const Sr={debug:Tr.DEBUG,verbose:Tr.VERBOSE,info:Tr.INFO,warn:Tr.WARN,error:Tr.ERROR,silent:Tr.SILENT},xr=Tr.INFO,Ir={[Tr.DEBUG]:"log",[Tr.VERBOSE]:"log",[Tr.INFO]:"info",[Tr.WARN]:"warn",[Tr.ERROR]:"error"},kr=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Ir[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Nr{constructor(e){this.name=e,this._logLevel=xr,this._logHandler=kr,this._userLogHandler=null,Er.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Tr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Sr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Tr.DEBUG,...e),this._logHandler(this,Tr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Tr.VERBOSE,...e),this._logHandler(this,Tr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Tr.INFO,...e),this._logHandler(this,Tr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Tr.WARN,...e),this._logHandler(this,Tr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Tr.ERROR,...e),this._logHandler(this,Tr.ERROR,...e)}}let Pr,Lr;const Or=new WeakMap,Ar=new WeakMap,Rr=new WeakMap,Mr=new WeakMap,Dr=new WeakMap;let Br={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ar.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Rr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Lr||(Lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(zr(this),t),jr(Or.get(this))}:function(...t){return jr(e.apply(zr(this),t))}:function(t,...n){const i=e.call(zr(this),t,...n);return Rr.set(i,t.sort?t.sort():[t]),jr(i)}}function Ur(e){return"function"==typeof e?Fr(e):(e instanceof IDBTransaction&&function(e){if(Ar.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ar.set(e,t)}(e),t=e,(Pr||(Pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Br):e);var t}function jr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(jr(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Or.set(t,e)})).catch((()=>{})),Dr.set(t,e),t}(e);if(Mr.has(e))return Mr.get(e);const t=Ur(e);return t!==e&&(Mr.set(e,t),Dr.set(t,e)),t}const zr=e=>Dr.get(e);function qr(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=jr(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(jr(o.result),e.oldVersion,e.newVersion,jr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Hr=["get","getKey","getAll","getAllKeys","count"],Wr=["put","add","delete","clear"],$r=new Map;function Vr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if($r.get(t))return $r.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Wr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Hr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return $r.set(t,s),s}Br=(e=>({...e,get:(t,n,i)=>Vr(t,n)||e.get(t,n,i),has:(t,n)=>!!Vr(t,n)||e.has(t,n)}))(Br);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Kr=new Nr("@firebase/app"),Yr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Jr=new Map,Xr=new Map;function Qr(e,t){try{e.container.addComponent(t)}catch(n){Kr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zr(e){const t=e.name;if(Xr.has(t))return Kr.debug(`There were multiple attempts to register component ${t}.`),!1;Xr.set(t,e);for(const t of Jr.values())Qr(t,e);return!0}function es(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ts=new Yi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _r("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw ts.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=Mi())||void 0===s?void 0:s.config),!n)throw ts.create("no-options");const o=Jr.get(r);if(o){if(or(n,o.options)&&or(i,o.config))return o;throw ts.create("duplicate-app",{appName:r})}const a=new br(r);for(const e of Xr.values())a.addComponent(e);const l=new ns(n,i,a);return Jr.set(r,l),l}function rs(e="[DEFAULT]"){const t=Jr.get(e);if(!t&&"[DEFAULT]"===e)return is();if(!t)throw ts.create("no-app",{appName:e});return t}function ss(e,t,n){var i;let r=null!==(i=Yr[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Kr.warn(e.join(" "))}Zr(new _r(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let os=null;function as(){return os||(os=qr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ts.create("idb-open",{originalErrorMessage:e.message})}))),os}async function ls(e,t){try{const n=(await as()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,cs(e)),n.done}catch(e){if(e instanceof Ki)Kr.warn(e.message);else{const t=ts.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Kr.warn(t.message)}}}function cs(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hs(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ds();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ds(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ps(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ps(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Pi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ds(){return(new Date).toISOString().substring(0,10)}class hs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Gi()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await as()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(cs(e))}catch(e){if(e instanceof Ki)Kr.warn(e.message);else{const t=ts.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Kr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ls(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ls(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ps(e){return Pi(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fs;fs="",Zr(new _r("platform-logger",(e=>new Gr(e)),"PRIVATE")),Zr(new _r("heartbeat",(e=>new us(e)),"PRIVATE")),ss("@firebase/app","0.9.7",fs),ss("@firebase/app","0.9.7","esm2017"),ss("fire-js","");function ms(){o.modal.classList.add("is-hidden"),o.movieModalContainer.innerHTML="",o.body.classList.remove("no-scroll"),window.removeEventListener("keydown",_s)}function gs(){o.teamModal.classList.add("is-hidden"),o.body.classList.remove("no-scroll"),window.removeEventListener("keydown",ws)}function ys(){o.signInBackdrop.classList.add("is-hidden"),o.body.classList.remove("no-scroll"),window.removeEventListener("keydown",bs)}function vs(){o.signUpBackdrop.classList.add("is-hidden"),o.body.classList.remove("no-scroll"),window.removeEventListener("keydown",Es)}function _s(e){"Escape"===e.code&&ms()}function ws(e){"Escape"===e.code&&gs()}function bs(e){"Escape"===e.code&&ys()}function Es(e){"Escape"===e.code&&vs()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ss("firebase","9.19.1","app");function Ts(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Cs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ss=Cs,xs=new Yi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Is=new Nr("@firebase/auth");function ks(e,...t){Is.logLevel<=Tr.ERROR&&Is.error(`Auth (9.19.1): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,...t){throw As(e,...t)}function Ps(e,...t){return As(e,...t)}function Ls(e,t,n){const i=Object.assign(Object.assign({},Ss()),{[t]:n});return new Yi("auth","Firebase",i).create(t,{appName:e.name})}function Os(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Ns(e,"argument-error"),Ls(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function As(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return xs.create(e,...t)}function Rs(e,t,...n){if(!e)throw As(t,...n)}function Ms(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ks(t),new Error(t)}function Ds(e,t){e||Ms(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map;function Fs(e){Ds(e instanceof Function,"Expected a class definition");let t=Bs.get(e);return t?(Ds(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bs.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Us(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function js(){return"http:"===zs()||"https:"===zs()}function zs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(js()||Hi()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ds(t>e,"Short delay should be less than long delay!"),this.isMobile=qi()||Wi()}get(){return qs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(e,t){Ds(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ms("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ms("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ms("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Gs=new Hs(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ys(e,t,n,i,r={}){return Js(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=lr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),$s.fetch()(Qs(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Js(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Vs),t);try{const t=new Zs(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw eo(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw eo(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw eo(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw eo(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ls(e,a,o);Ns(e,a)}}catch(t){if(t instanceof Ki)throw t;Ns(e,"network-request-failed",{message:String(t)})}}async function Xs(e,t,n,i,r={}){const s=await Ys(e,t,n,i,r);return"mfaPendingCredential"in s&&Ns(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Qs(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Ws(e.config,r):`${e.config.apiScheme}://${r}`}class Zs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ps(this.auth,"network-request-failed"))),Gs.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Ps(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function to(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e){return 1e3*Number(e)}function io(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const e=Li(n);return e?JSON.parse(e):(ks("Failed to decode base64 JWT payload"),null)}catch(e){return ks("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ro(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ki&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class so{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ro(e,async function(e,t){return Ys(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Rs(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ts(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Rs(e.idToken,"internal-error"),Rs(void 0!==e.idToken,"internal-error"),Rs(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=io(e);return Rs(t,"internal-error"),Rs(void 0!==t.exp,"internal-error"),Rs(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Rs(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Js(e,{},(async()=>{const n=lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Qs(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$s.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new lo;return n&&(Rs("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Rs("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Rs("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Ms("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t){Rs("string"==typeof e||void 0===e,"internal-error",{appName:t})}class uo{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Ts(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new so(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new oo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ro(this,this.stsTokenManager.getToken(this.auth,e));return Rs(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=vr(e),i=await n.getIdToken(t),r=io(i);Rs(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:to(no(r.auth_time)),issuedAtTime:to(no(r.iat)),expirationTime:to(no(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=vr(e);await ao(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Rs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new uo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Rs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ao(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ro(this,async function(e,t){return Ys(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:E}=t;Rs(v&&E,e,"internal-error");const T=lo.fromJSON(this.name,E);Rs("string"==typeof v,e,"internal-error"),co(u,e.name),co(d,e.name),Rs("boolean"==typeof _,e,"internal-error"),Rs("boolean"==typeof w,e,"internal-error"),co(h,e.name),co(p,e.name),co(f,e.name),co(m,e.name),co(g,e.name),co(y,e.name);const C=new uo({uid:v,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(C.providerData=b.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new lo;i.updateFromServerResponse(t);const r=new uo({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ao(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ho.type="NONE";const po=ho;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e,t,n){return`firebase:${e}:${t}:${n}`}class mo{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=fo(this.userKey,i.apiKey,r),this.fullPersistenceKey=fo("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?uo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new mo(Fs(po),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Fs(po);const s=fo(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=uo._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new mo(r,e,n)):new mo(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Eo(t))return"Blackberry";if(To(t))return"Webos";if(vo(t))return"Safari";if((t.includes("chrome/")||_o(t))&&!t.includes("edge/"))return"Chrome";if(bo(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function yo(e=zi()){return/firefox\//i.test(e)}function vo(e=zi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _o(e=zi()){return/crios\//i.test(e)}function wo(e=zi()){return/iemobile/i.test(e)}function bo(e=zi()){return/android/i.test(e)}function Eo(e=zi()){return/blackberry/i.test(e)}function To(e=zi()){return/webos/i.test(e)}function Co(e=zi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function So(){return $i()&&10===document.documentMode}function xo(e=zi()){return Co(e)||bo(e)||To(e)||Eo(e)||/windows phone/i.test(e)||wo(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Io(e,t=[]){let n;switch(e){case"Browser":n=go(zi());break;case"Worker":n=`${go(zi())}-${e}`;break;default:n=e}return`${n}/JsCore/9.19.1/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lo(this),this.idTokenSubscription=new Lo(this),this.beforeStateQueue=new ko(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xs,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fs(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await mo.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Rs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ao(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?vr(e):null;return t&&Rs(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Rs(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Fs(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fs(e)||this._popupRedirectResolver;Rs(t,this,"argument-error"),this.redirectPersistenceManager=await mo.create(this,[Fs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Rs(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Rs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Io(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Po(e){return vr(e)}class Lo{constructor(e){this.auth=e,this.observer=null,this.addObserver=hr((e=>this.observer=e))}get next(){return Rs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Oo(e,t,n){const i=Po(e);Rs(i._canInitEmulator,i,"emulator-config-failed"),Rs(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Ao(t),{host:o,port:a}=function(e){const t=Ao(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ro(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ro(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ao(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ro(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Mo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ms("not implemented")}_getIdTokenResponse(e){return Ms("not implemented")}_linkToIdToken(e,t){return Ms("not implemented")}_getReauthenticationResolver(e){return Ms("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(e,t){return Ys(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo extends Mo{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Bo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Xs(e,"POST","/v1/accounts:signInWithPassword",Ks(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Xs(e,"POST","/v1/accounts:signInWithEmailLink",Ks(e,t))}(e,{email:this._email,oobCode:this._password});default:Ns(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Do(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Xs(e,"POST","/v1/accounts:signInWithEmailLink",Ks(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ns(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(e,t){return Xs(e,"POST","/v1/accounts:signInWithIdp",Ks(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends Mo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Uo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ns("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Ts(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Uo(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Fo(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fo(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fo(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lr(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zo extends Mo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new zo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new zo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Xs(e,"POST","/v1/accounts:signInWithPhoneNumber",Ks(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Xs(e,"POST","/v1/accounts:signInWithPhoneNumber",Ks(e,t));if(n.temporaryProof)throw eo(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Xs(e,"POST","/v1/accounts:signInWithPhoneNumber",Ks(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),jo)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new zo({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){var t,n,i,r,s,o;const a=cr(ur(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Rs(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=cr(ur(e)).link,n=t?cr(ur(t)).deep_link_id:null,i=cr(ur(e)).deep_link_id;return(i?cr(ur(i)).link:null)||i||n||t||e}(e);try{return new qo(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,t){return Bo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=qo.parseLink(t);return Rs(n,"argument-error"),Bo._fromEmailAndCode(e,n.code,n.tenantId)}}Ho.PROVIDER_ID="password",Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Wo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo extends $o{constructor(){super("facebook.com")}static credential(e){return Uo._fromParams({providerId:Vo.PROVIDER_ID,signInMethod:Vo.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vo.credentialFromTaggedObject(e)}static credentialFromError(e){return Vo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Vo.credential(e.oauthAccessToken)}catch(e){return null}}}Vo.FACEBOOK_SIGN_IN_METHOD="facebook.com",Vo.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Uo._fromParams({providerId:Go.PROVIDER_ID,signInMethod:Go.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Go.credentialFromTaggedObject(e)}static credentialFromError(e){return Go.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Go.credential(t,n)}catch(e){return null}}}Go.GOOGLE_SIGN_IN_METHOD="google.com",Go.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko extends $o{constructor(){super("github.com")}static credential(e){return Uo._fromParams({providerId:Ko.PROVIDER_ID,signInMethod:Ko.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ko.credentialFromTaggedObject(e)}static credentialFromError(e){return Ko.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ko.credential(e.oauthAccessToken)}catch(e){return null}}}Ko.GITHUB_SIGN_IN_METHOD="github.com",Ko.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yo extends $o{constructor(){super("twitter.com")}static credential(e,t){return Uo._fromParams({providerId:Yo.PROVIDER_ID,signInMethod:Yo.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yo.credentialFromTaggedObject(e)}static credentialFromError(e){return Yo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Yo.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jo(e,t){return Xs(e,"POST","/v1/accounts:signUp",Ks(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yo.TWITTER_SIGN_IN_METHOD="twitter.com",Yo.PROVIDER_ID="twitter.com";class Xo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await uo._fromIdTokenResponse(e,n,i),s=Qo(n);return new Xo({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qo(n);return new Xo({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Qo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(e){var t;const n=Po(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Xo({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Jo(n,{returnSecureToken:!0}),r=await Xo._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Ki{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new ea(e,t,n,i)}}function ta(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ea._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(e,t,n=!1){const i=await ro(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xo._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ia(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await ro(e,ta(i,r,t,e),n);Rs(s.idToken,i,"internal-error");const o=io(s.idToken);Rs(o,i,"internal-error");const{sub:a}=o;return Rs(e.uid===a,i,"user-mismatch"),Xo._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ns(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(e,t,n=!1){const i="signIn",r=await ta(e,i,t),s=await Xo._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function sa(e,t){return ra(Po(e),t)}async function oa(e,t,n){const i=Po(e),r=await Jo(i,{returnSecureToken:!0,email:t,password:n}),s=await Xo._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function aa(e,t,n){return sa(vr(e),Ho.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends la{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=zi();return vo(e)||Co(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=xo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);So()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ca.type="LOCAL";const ua=ca;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends la{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}da.type="SESSION";const ha=da;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new pa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fa(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pa.receivers=[];class ma{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=fa("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ya(){return void 0!==ga().WorkerGlobalScope&&"function"==typeof ga().importScripts}class va{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function _a(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function wa(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new va(e).toPromise()}(),t(await wa()))}))}))}async function ba(e,t,n){const i=_a(e,!0).put({fbase_key:t,value:n});return new va(i).toPromise()}function Ea(e,t){const n=_a(e,!0).delete(t);return new va(n).toPromise()}class Ta{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await wa()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ya()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(ya()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ma(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wa();return await ba(e,"__sak","1"),await Ea(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ba(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=_a(e,!1).get(t),i=await new va(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ea(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=_a(e,!1).getAll();return new va(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ta.type="LOCAL";const Ca=Ta;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Ps("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function xa(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xa("rcb"),new Hs(3e4,6e4);async function Ia(e,t,n){var i;const r=await n.verify();try{let s;if(Rs("string"==typeof r,e,"argument-error"),Rs("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Rs("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Ys(e,"POST","/v2/accounts/mfaEnrollment:start",Ks(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Rs("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Rs(n,e,"missing-multi-factor-info");const o=await function(e,t){return Ys(e,"POST","/v2/accounts/mfaSignIn:start",Ks(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ys(e,"POST","/v1/accounts:sendVerificationCode",Ks(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka{constructor(e){this.providerId=ka.PROVIDER_ID,this.auth=Po(e)}verifyPhoneNumber(e,t){return Ia(this.auth,e,vr(t))}static credential(e,t){return zo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ka.credentialFromTaggedObject(t)}static credentialFromError(e){return ka.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?zo._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Na(e,t){return t?Fs(t):(Rs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ka.PROVIDER_ID="phone",ka.PHONE_SIGN_IN_METHOD="phone";class Pa extends Mo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function La(e){return ra(e.auth,new Pa(e),e.bypassAuthState)}function Oa(e){const{auth:t,user:n}=e;return Rs(n,t,"internal-error"),ia(n,new Pa(e),e.bypassAuthState)}async function Aa(e){const{auth:t,user:n}=e;return Rs(n,t,"internal-error"),na(n,new Pa(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return La;case"linkViaPopup":case"linkViaRedirect":return Aa;case"reauthViaPopup":case"reauthViaRedirect":return Oa;default:Ns(this.auth,"internal-error")}}resolve(e){Ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Hs(2e3,1e4);async function Da(e,t,n){const i=Po(e);Os(e,t,Wo);const r=Na(i,n);return new Ba(i,"signInViaPopup",t,r).executeNotNull()}class Ba extends Ra{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Ba.currentPopupAction&&Ba.currentPopupAction.cancel(),Ba.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Rs(e,this.auth,"internal-error"),e}async onExecution(){Ds(1===this.filter.length,"Popup operations only handle one event");const e=fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ps(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ps(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ba.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ps(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ma.get())};e()}}Ba.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fa=new Map;class Ua extends Ra{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Fa.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=qa(t),i=za(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Fa.set(this.auth._key(),e)}return this.bypassAuthState||Fa.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ja(e,t){Fa.set(e._key(),t)}function za(e){return Fs(e._redirectPersistence)}function qa(e){return fo("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(e,t,n=!1){const i=Po(e),r=Na(i,t),s=new Ua(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Wa{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Va(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Va(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ps(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($a(e))}saveEventToCache(e){this.cachedEventUids.add($a(e)),this.lastProcessedEventTime=Date.now()}}function $a(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Va({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ga=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ka=/^https?/;async function Ya(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ys(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ja(e))return}catch(e){}Ns(e,"unauthorized-domain")}function Ja(e){const t=Us(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Ka.test(n))return!1;if(Ga.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Hs(3e4,6e4);function Qa(){const e=ga().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Za=null;function el(e){return Za=Za||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){Qa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qa(),n(Ps(e,"network-request-failed"))},timeout:Xa.get()})}if(null===(r=null===(i=ga().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ga().gapi)||void 0===s?void 0:s.load)){const t=xa("iframefcb");return ga()[t]=()=>{gapi.load?o():n(Ps(e,"network-request-failed"))},Sa(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Za=null,e}))}(e),Za}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new Hs(5e3,15e3),nl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},il=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rl(e){const t=e.config;Rs(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ws(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.19.1"},r=il.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${lr(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function al(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sl),{width:i.toString(),height:r.toString(),top:s,left:o}),c=zi().toLowerCase();n&&(a=_o(c)?"_blank":n),yo(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=zi()){var t;return Co(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new ol(null);const d=window.open(t||"",a,u);Rs(d,e,"popup-blocked");try{d.focus()}catch(e){}return new ol(d)}function ll(e,t,n,i,r,s){Rs(e.config.authDomain,e,"auth-domain-config-required"),Rs(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.19.1",eventId:r};if(t instanceof Wo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",rr(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof $o){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ws(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${lr(a).slice(1)}`}const cl=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ha,this._completeRedirectFn=Ha,this._overrideRedirectResult=ja}async _openPopup(e,t,n,i){var r;Ds(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return al(e,ll(e,t,n,Us(),i),fa())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=ll(e,t,n,Us(),i),ga().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ds(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await el(e),n=ga().gapi;return Rs(n,e,"internal-error"),t.open({where:document.body,url:rl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nl,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Ps(e,"network-request-failed"),s=ga().setTimeout((()=>{i(r)}),tl.get());function o(){ga().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Wa(e);return t.register("authEvent",(t=>{Rs(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Ns(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ya(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xo()||vo()||Co()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Rs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dl=Fi("authIdTokenMaxAge")||300;let hl=null;function pl(e=rs()){const t=es(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=es(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(or(n.getOptions(),null!=t?t:{}))return e;Ns(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:cl,persistence:[Ca,ua,ha]}),i=Fi("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>dl)return;const i=null==t?void 0:t.token;hl!==i&&(hl=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){vr(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){vr(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=Di("auth");return s&&Oo(n,`http://${s}`),n}var fl;fl="Browser",Zr(new _r("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{Rs(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Rs(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:fl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Io(fl)},o=new No(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Fs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Zr(new _r("auth-internal",(e=>{const t=Po(e.getProvider("auth").getImmediate());return new ul(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ss("@firebase/auth","0.22.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(fl)),ss("@firebase/auth","0.22.0","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qi(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Xi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return nr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new gl(t)}}catch(e){}return new yl},_l=vl("localStorage"),wl=vl("sessionStorage"),bl=new Nr("@firebase/database"),El=function(){let e=1;return function(){return e++}}(),Tl=function(e){const t=gr(e),n=new dr;n.update(t);const i=n.digest();return Ii.encodeByteArray(i)},Cl=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Cl.apply(null,i):t+="object"==typeof i?Qi(i):i,t+=" "}return t};let Sl=null,xl=!0;const Il=function(e,t){Ci(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(bl.logLevel=Tr.VERBOSE,Sl=bl.log.bind(bl),t&&wl.set("logging_enabled",!0)):"function"==typeof e?Sl=e:(Sl=null,wl.remove("logging_enabled"))},kl=function(...e){if(!0===xl&&(xl=!1,null===Sl&&!0===wl.get("logging_enabled")&&Il(!0)),Sl){const t=Cl.apply(null,e);Sl(t)}},Nl=function(e){return function(...t){kl(e,...t)}},Pl=function(...e){const t="FIREBASE INTERNAL ERROR: "+Cl(...e);bl.error(t)},Ll=function(...e){const t=`FIREBASE FATAL ERROR: ${Cl(...e)}`;throw bl.error(t),new Error(t)},Ol=function(...e){const t="FIREBASE WARNING: "+Cl(...e);bl.warn(t)},Al=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Rl=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=ql(e),i=ql(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Ml=function(e,t){return e===t?0:e<t?-1:1},Dl=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Qi(t))},Bl=function(e){if("object"!=typeof e||null===e)return Qi(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Qi(t[i]),n+=":",n+=Bl(e[t[i]]);return n+="}",n},Fl=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ul(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const jl=function(e){Ci(!Al(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const zl=new RegExp("^-?(0*)\\d{1,10}$"),ql=function(e){if(zl.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Hl=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ol("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Wl=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $l{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ol(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(kl("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ol(e)}}class Gl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Gl.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yl{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_l.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_l.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Jl(e,t,n){let i;if(Ci("string"==typeof t,"typeof type must == string"),Ci("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Ul(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.counters_={}}incrementCounter(e,t=1){nr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Oi(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={},Zl={};function ec(e){const t=e.toString();return Ql[t]||(Ql[t]=new Xl),Ql[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Hl((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nl(e),this.stats_=ec(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Jl(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new tc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Vi()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ic(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Kl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nc.forceAllow_=!0}static forceDisallow(){nc.forceDisallow_=!0}static isAvailable(){return!Vi()&&(!!nc.forceAllow_||!(nc.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Qi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ni(t),i=Fl(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Vi())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Qi(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ic{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Vi())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=El(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ic.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){kl("frame writing exception"),e.stack&&kl(e.stack),kl(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||kl("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Vi()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{kl("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc=null;"undefined"!=typeof MozWebSocket?rc=MozWebSocket:"undefined"!=typeof WebSocket&&(rc=WebSocket);class sc{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nl(this.connId),this.stats_=ec(t),this.connURL=sc.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={v:"5"};return!Vi()&&"undefined"!=typeof location&&location.hostname&&Kl.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),Jl(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_l.set("previous_websocket_failure",!0);try{let e;if(Vi()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ml}/${oi.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new rc(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){sc.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==rc&&!sc.forceDisallow_}static previouslyFailed(){return _l.isInMemoryStorage||!0===_l.get("previous_websocket_failure")}markConnectionHealthy(){_l.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Xi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Ci(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Qi(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Fl(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sc.responsesRequiredToBeHealthy=2,sc.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nc,sc]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=sc&&sc.isAvailable();let n=t&&!sc.previouslyFailed();if(e.webSocketOnly&&(t||Ol("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[sc];else{const e=this.transports_=[];for(const t of oc.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);oc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oc.globalTransportInitialized_=!1;class ac{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nl("c:"+this.id+":"),this.transportManager_=new oc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wl((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Dl("t",e),n=Dl("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Dl("t",e),n=Dl("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Dl("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Pl("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Pl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Ol("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Wl((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wl((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_l.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.allowedEvents_=e,this.listeners_={},Ci(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Ci(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends cc{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||qi()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new uc}getInitialEvent(e){return Ci("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function hc(){return new dc("")}function pc(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function fc(e){return e.pieces_.length-e.pieceNum_}function mc(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new dc(e.pieces_,t)}function gc(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function yc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vc(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new dc(t,0)}function _c(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof dc)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new dc(n,0)}function wc(e){return e.pieceNum_>=e.pieces_.length}function bc(e,t){const n=pc(e),i=pc(t);if(null===n)return t;if(n===i)return bc(mc(e),mc(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ec(e,t){if(fc(e)!==fc(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Tc(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(fc(e)>fc(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Cc{constructor(e,t){this.errorPrefix_=t,this.parts_=yc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=yr(this.parts_[e]);Sc(this)}}function Sc(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+xc(e))}function xc(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends cc{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ic}getInitialEvent(e){return Ci("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends lc{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=kc.nextPersistentConnectionId_++,this.log_=Nl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Vi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ic.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&uc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Qi(r)),Ci(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Ui,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Ci(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Ci(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;kc.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&nr(e,"w")){const n=ir(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ol(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||tr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=er(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Ci(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qi(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Pl("Unrecognized action received from server: "+Qi(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Ci(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kc.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){Ci(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?kl("getToken() completed but was canceled"):(kl("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new ac(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ol(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Ol(e),a())}}}interrupt(e){kl("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){kl("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rr(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Bl(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new dc(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){kl("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){kl("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Vi()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ml.replace(/\./g,"-")]=1,qi()?e["framework.cordova"]=1:Wi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=uc.getInstance().currentlyOnline();return rr(this.interruptReasons_)&&e}}kc.nextPersistentConnectionId_=0,kc.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Nc(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Nc("[MIN_NAME]",e),i=new Nc("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Nc.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;class Oc extends Pc{static get __EMPTY_NODE(){return Lc}static set __EMPTY_NODE(e){Lc=e}compare(e,t){return Rl(e.name,t.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Nc.MIN}maxPost(){return new Nc("[MAX_NAME]",Lc)}makePost(e,t){return Ci("string"==typeof e,"KeyIndex indexValue must always be a string."),new Nc(e,Lc)}toString(){return".key"}}const Ac=new Oc;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Mc{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Mc.RED,this.left=null!=i?i:Dc.EMPTY_NODE,this.right=null!=r?r:Dc.EMPTY_NODE}copy(e,t,n,i,r){return new Mc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dc.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Dc.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Mc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Mc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Mc.RED=!0,Mc.BLACK=!1;class Dc{constructor(e,t=Dc.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Dc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Mc.BLACK,null,null))}remove(e){return new Dc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mc.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rc(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bc(e,t){return Rl(e.name,t.name)}function Fc(e,t){return Rl(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc;Dc.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Mc(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const jc=function(e){return"number"==typeof e?"number:"+jl(e):"string:"+e},zc=function(e){if(e.isLeafNode()){const t=e.val();Ci("string"==typeof t||"number"==typeof t||"object"==typeof t&&nr(t,".sv"),"Priority must be a string or number.")}else Ci(e===Uc||e.isEmpty(),"priority of unexpected type.");Ci(e===Uc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qc,Hc,Wc;class $c{constructor(e,t=$c.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Ci(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),zc(this.priorityNode_)}static set __childrenNodeConstructor(e){qc=e}static get __childrenNodeConstructor(){return qc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $c(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:$c.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return wc(e)?this:".priority"===pc(e)?this.priorityNode_:$c.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:$c.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=pc(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Ci(".priority"!==n||1===fc(e),".priority must be the last token in a path"),this.updateImmediateChild(n,$c.__childrenNodeConstructor.EMPTY_NODE.updateChild(mc(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?jl(this.value_):this.value_,this.lazyHash_=Tl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$c.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $c.__childrenNodeConstructor?-1:(Ci(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=$c.VALUE_TYPE_ORDER.indexOf(t),r=$c.VALUE_TYPE_ORDER.indexOf(n);return Ci(i>=0,"Unknown leaf type: "+t),Ci(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}$c.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Vc=new class extends Pc{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Rl(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Nc.MIN}maxPost(){return new Nc("[MAX_NAME]",new $c("[PRIORITY-POST]",Wc))}makePost(e,t){const n=Hc(e);return new Nc(t,new $c("[PRIORITY-POST]",n))}toString(){return".priority"}},Gc=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Gc,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yc=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Mc(a,o.node,Mc.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new Mc(a,o.node,Mc.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],d=n?n(u):u;l(new Mc(d,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Mc.BLACK):(a(i,Mc.BLACK),a(i,Mc.RED))}return s}(new Kc(e.length));return new Dc(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc;const Xc={};class Qc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Ci(Xc&&Vc,"ChildrenNode.ts has not been loaded"),Jc=Jc||new Qc({".priority":Xc},{".priority":Vc}),Jc}get(e){const t=ir(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Dc?t:null}hasIndex(e){return nr(this.indexSet_,e.toString())}addIndex(e,t){Ci(e!==Ac,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Nc.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Yc(n,e.getCompare()):Xc;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new Qc(c,l)}addToIndexes(e,t){const n=sr(this.indexes_,((n,i)=>{const r=ir(this.indexSet_,i);if(Ci(r,"Missing index implementation for "+i),n===Xc){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Nc.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Yc(n,r.getCompare())}return Xc}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Nc(e.name,i))),r.insert(e,e.node)}}));return new Qc(n,this.indexSet_)}removeFromIndexes(e,t){const n=sr(this.indexes_,(n=>{if(n===Xc)return n;{const i=t.get(e.name);return i?n.remove(new Nc(e.name,i)):n}}));return new Qc(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;class eu{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&zc(this.priorityNode_),this.children_.isEmpty()&&Ci(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Zc||(Zc=new eu(new Dc(Fc),null,Qc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zc}updatePriority(e){return this.children_.isEmpty()?this:new eu(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Zc:t}}getChild(e){const t=pc(e);return null===t?this:this.getImmediateChild(t).getChild(mc(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Ci(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Nc(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Zc:this.priorityNode_;return new eu(i,s,r)}}updateChild(e,t){const n=pc(e);if(null===n)return t;{Ci(".priority"!==pc(e)||1===fc(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(mc(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Vc,((s,o)=>{t[s]=o.val(e),n++,r&&eu.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+jc(this.getPriority().val())+":"),this.forEachChild(Vc,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Tl(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Nc(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Nc(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Nc(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Nc.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Nc.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tu?-1:0}withIndex(e){if(e===Ac||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new eu(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ac||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Vc),n=t.getIterator(Vc);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ac?null:this.indexMap_.get(e.toString())}}eu.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const tu=new class extends eu{constructor(){super(new Dc(Fc),eu.EMPTY_NODE,Qc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return eu.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Nc,{MIN:{value:new Nc("[MIN_NAME]",eu.EMPTY_NODE)},MAX:{value:new Nc("[MAX_NAME]",tu)}}),Oc.__EMPTY_NODE=eu.EMPTY_NODE,$c.__childrenNodeConstructor=eu,Uc=tu,function(e){Wc=e}(tu);function nu(e,t=null){if(null===e)return eu.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Ci(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new $c(e,nu(t))}if(e instanceof Array){let n=eu.EMPTY_NODE;return Ul(e,((t,i)=>{if(nr(e,t)&&"."!==t.substring(0,1)){const e=nu(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(nu(t))}{const n=[];let i=!1;if(Ul(e,((e,t)=>{if("."!==e.substring(0,1)){const r=nu(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Nc(e,r)))}})),0===n.length)return eu.EMPTY_NODE;const r=Yc(n,Bc,(e=>e.name),Fc);if(i){const e=Yc(n,Vc.getCompare());return new eu(r,nu(t),new Qc({".priority":e},{".priority":Vc}))}return new eu(r,nu(t),Qc.Default)}}!function(e){Hc=e}(nu);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iu extends Pc{constructor(e){super(),this.indexPath_=e,Ci(!wc(e)&&".priority"!==pc(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Rl(e.name,t.name):r}makePost(e,t){const n=nu(e),i=eu.EMPTY_NODE.updateChild(this.indexPath_,n);return new Nc(t,i)}maxPost(){const e=eu.EMPTY_NODE.updateChild(this.indexPath_,tu);return new Nc("[MAX_NAME]",e)}toString(){return yc(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new class extends Pc{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Rl(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Nc.MIN}maxPost(){return Nc.MAX}makePost(e,t){const n=nu(e);return new Nc(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e){return{type:"value",snapshotNode:e}}function ou(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function au(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function lu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){Ci(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(au(t,o)):Ci(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(ou(t,n)):s.trackChildChange(lu(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Vc,((e,i)=>{t.hasChild(e)||n.trackChildChange(au(e,i))})),t.isLeafNode()||t.forEachChild(Vc,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(lu(t,i,r))}else n.trackChildChange(ou(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?eu.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.indexedFilter_=new cu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=uu.getStartPost_(e),this.endPost_=uu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Nc(t,n))||(n=eu.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=eu.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(eu.EMPTY_NODE);const r=this;return t.forEachChild(Vc,((e,t)=>{r.matches(new Nc(e,t))||(i=i.updateImmediateChild(e,eu.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new uu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Nc(t,n))||(n=eu.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=eu.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=eu.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(eu.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,eu.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Ci(o.numChildren()===this.limit_,"");const a=new Nc(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const d=null==u?1:s(u,a);if(c&&!n.isEmpty()&&d>=0)return null!=r&&r.trackChildChange(lu(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(au(t,e));const n=o.updateImmediateChild(t,eu.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(ou(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(au(l.name,l.node)),r.trackChildChange(ou(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,eu.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Vc}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Ci(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Ci(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return Ci(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Ci(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Ci(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Vc}copy(){const e=new hu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pu(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Vc?n="$priority":e.index_===ru?n="$value":e.index_===Ac?n="$key":(Ci(e.index_ instanceof iu,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Qi(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Qi(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Qi(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Qi(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Qi(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function fu(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Vc&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends lc{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Nl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Ci(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=mu.getListenId_(e,n),o={};this.listens_[s]=o;const a=pu(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ir(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=mu.getListenId_(e,t);delete this.listens_[n]}get(e){const t=pu(e._queryParams),n=e._path.toString(),i=new Ui;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lr(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Xi(o.responseText)}catch(e){Ol("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Ol("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){this.rootNode_=eu.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){return{value:null,children:new Map}}function vu(e,t,n){if(wc(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=pc(t);e.children.has(i)||e.children.set(i,yu());vu(e.children.get(i),t=mc(t),n)}}function _u(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{_u(i,new dc(t.toString()+"/"+e),n)}))}class wu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ul(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new wu(e);const n=1e4+2e4*Math.random();Wl(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ul(e,((e,i)=>{i>0&&nr(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Wl(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eu,Tu;function Cu(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Tu=Eu||(Eu={}))[Tu.OVERWRITE=0]="OVERWRITE",Tu[Tu.MERGE=1]="MERGE",Tu[Tu.ACK_USER_WRITE=2]="ACK_USER_WRITE",Tu[Tu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Su{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Eu.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(wc(this.path)){if(null!=this.affectedTree.value)return Ci(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new dc(e));return new Su(hc(),t,this.revert)}}return Ci(pc(this.path)===e,"operationForChild called for unrelated child."),new Su(mc(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t){this.source=e,this.path=t,this.type=Eu.LISTEN_COMPLETE}operationForChild(e){return wc(this.path)?new xu(this.source,hc()):new xu(this.source,mc(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Eu.OVERWRITE}operationForChild(e){return wc(this.path)?new Iu(this.source,hc(),this.snap.getImmediateChild(e)):new Iu(this.source,mc(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Eu.MERGE}operationForChild(e){if(wc(this.path)){const t=this.children.subtree(new dc(e));return t.isEmpty()?null:t.value?new Iu(this.source,hc(),t.value):new ku(this.source,hc(),t)}return Ci(pc(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ku(this.source,mc(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(wc(e))return this.isFullyInitialized()&&!this.filtered_;const t=pc(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lu(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Si("Should only compare child_ events.");const i=new Nc(t.childName,t.snapshotNode),r=new Nc(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Ou(e,t){return{eventCache:e,serverCache:t}}function Au(e,t,n,i){return Ou(new Nu(t,n,i),e.serverCache)}function Ru(e,t,n,i){return Ou(e.eventCache,new Nu(t,n,i))}function Mu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Du(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;class Fu{constructor(e,t=(()=>(Bu||(Bu=new Dc(Ml)),Bu))()){this.value=e,this.children=t}static fromObject(e){let t=new Fu(null);return Ul(e,((e,n)=>{t=t.set(new dc(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:hc(),value:this.value};if(wc(e))return null;{const n=pc(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(mc(e),t);if(null!=r){return{path:_c(new dc(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(wc(e))return this;{const t=pc(e),n=this.children.get(t);return null!==n?n.subtree(mc(e)):new Fu(null)}}set(e,t){if(wc(e))return new Fu(t,this.children);{const n=pc(e),i=(this.children.get(n)||new Fu(null)).set(mc(e),t),r=this.children.insert(n,i);return new Fu(this.value,r)}}remove(e){if(wc(e))return this.children.isEmpty()?new Fu(null):new Fu(null,this.children);{const t=pc(e),n=this.children.get(t);if(n){const i=n.remove(mc(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Fu(null):new Fu(this.value,r)}return this}}get(e){if(wc(e))return this.value;{const t=pc(e),n=this.children.get(t);return n?n.get(mc(e)):null}}setTree(e,t){if(wc(e))return t;{const n=pc(e),i=(this.children.get(n)||new Fu(null)).setTree(mc(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Fu(this.value,r)}}fold(e){return this.fold_(hc(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(_c(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,hc(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(wc(e))return null;{const i=pc(e),r=this.children.get(i);return r?r.findOnPath_(mc(e),_c(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,hc(),t)}foreachOnPath_(e,t,n){if(wc(e))return this;{this.value&&n(t,this.value);const i=pc(e),r=this.children.get(i);return r?r.foreachOnPath_(mc(e),_c(t,i),n):new Fu(null)}}foreach(e){this.foreach_(hc(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(_c(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.writeTree_=e}static empty(){return new Uu(new Fu(null))}}function ju(e,t,n){if(wc(t))return new Uu(new Fu(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bc(r,t);return s=s.updateChild(o,n),new Uu(e.writeTree_.set(r,s))}{const i=new Fu(n),r=e.writeTree_.setTree(t,i);return new Uu(r)}}}function zu(e,t,n){let i=e;return Ul(n,((e,n)=>{i=ju(i,_c(t,e),n)})),i}function qu(e,t){if(wc(t))return Uu.empty();{const n=e.writeTree_.setTree(t,new Fu(null));return new Uu(n)}}function Hu(e,t){return null!=Wu(e,t)}function Wu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bc(n.path,t)):null}function $u(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Vc,((e,n)=>{t.push(new Nc(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Nc(e,n.value))})),t}function Vu(e,t){if(wc(t))return e;{const n=Wu(e,t);return new Uu(null!=n?new Fu(n):e.writeTree_.subtree(t))}}function Gu(e){return e.writeTree_.isEmpty()}function Ku(e,t){return Yu(hc(),e.writeTree_,t)}function Yu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Ci(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Yu(_c(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(_c(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(e,t){return cd(t,e)}function Xu(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Ci(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Qu(t,i.path)?r=!1:Tc(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=ed(e.allWrites,Zu,hc()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=qu(e.visibleWrites,i.path);else{Ul(i.children,(t=>{e.visibleWrites=qu(e.visibleWrites,_c(i.path,t))}))}return!0}return!1}function Qu(e,t){if(e.snap)return Tc(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Tc(_c(e.path,n),t))return!0;return!1}function Zu(e){return e.visible}function ed(e,t,n){let i=Uu.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Tc(n,e)?(t=bc(n,e),i=ju(i,t,s.snap)):Tc(e,n)&&(t=bc(e,n),i=ju(i,hc(),s.snap.getChild(t)));else{if(!s.children)throw Si("WriteRecord should have .snap or .children");if(Tc(n,e))t=bc(n,e),i=zu(i,t,s.children);else if(Tc(e,n))if(t=bc(e,n),wc(t))i=zu(i,hc(),s.children);else{const e=ir(s.children,pc(t));if(e){const n=e.getChild(mc(t));i=ju(i,hc(),n)}}}}}return i}function td(e,t,n,i,r){if(i||r){const s=Vu(e.visibleWrites,t);if(!r&&Gu(s))return n;if(r||null!=n||Hu(s,hc())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Tc(e.path,t)||Tc(t,e.path))};return Ku(ed(e.allWrites,s,t),n||eu.EMPTY_NODE)}return null}{const i=Wu(e.visibleWrites,t);if(null!=i)return i;{const i=Vu(e.visibleWrites,t);if(Gu(i))return n;if(null!=n||Hu(i,hc())){return Ku(i,n||eu.EMPTY_NODE)}return null}}}function nd(e,t,n,i){return td(e.writeTree,e.treePath,t,n,i)}function id(e,t){return function(e,t,n){let i=eu.EMPTY_NODE;const r=Wu(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Vc,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Vu(e.visibleWrites,t);return n.forEachChild(Vc,((e,t)=>{const n=Ku(Vu(r,new dc(e)),t);i=i.updateImmediateChild(e,n)})),$u(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return $u(Vu(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function rd(e,t,n,i){return function(e,t,n,i,r){Ci(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=_c(t,n);if(Hu(e.visibleWrites,s))return null;{const t=Vu(e.visibleWrites,s);return Gu(t)?r.getChild(n):Ku(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function sd(e,t){return function(e,t){return Wu(e.visibleWrites,t)}(e.writeTree,_c(e.treePath,t))}function od(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=Vu(e.visibleWrites,t),c=Wu(l,hc());if(null!=c)a=c;else{if(null==n)return[];a=Ku(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function ad(e,t,n){return function(e,t,n,i){const r=_c(t,n),s=Wu(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Ku(Vu(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ld(e,t){return cd(_c(e.treePath,t),e.writeTree)}function cd(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Ci("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Ci(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,lu(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,au(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,ou(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Si("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,lu(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class hd{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Nu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ad(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Du(this.viewCache_),r=od(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e,t,n,i,r){const s=new ud;let o,a;if(n.type===Eu.OVERWRITE){const l=n;l.source.fromUser?o=gd(e,t,l.path,l.snap,i,r,s):(Ci(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!wc(l.path),o=md(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Eu.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=_c(n,i);yd(t,pc(c))&&(a=gd(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=_c(n,i);yd(t,pc(c))||(a=gd(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(Ci(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=_d(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Eu.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=sd(i,n))return t;{const a=new hd(i,t,r),l=t.eventCache.getNode();let c;if(wc(n)||".priority"===pc(n)){let n;if(t.serverCache.isFullyInitialized())n=nd(i,Du(t));else{const e=t.serverCache.getNode();Ci(e instanceof eu,"serverChildren would be complete if leaf node"),n=id(i,e)}c=e.filter.updateFullNode(l,n,s)}else{const r=pc(n);let u=ad(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,mc(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,eu.EMPTY_NODE,mc(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=nd(i,Du(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=sd(i,hc()),Au(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=sd(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(wc(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return md(e,t,n,l.getNode().getChild(n),r,s,a,o);if(wc(n)){let i=new Fu(null);return l.getNode().forEachChild(Ac,((e,t)=>{i=i.set(new dc(e),t)})),_d(e,t,n,i,r,s,a,o)}return t}{let c=new Fu(null);return i.foreach(((e,t)=>{const i=_c(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),_d(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Eu.LISTEN_COMPLETE)throw Si("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Ru(t,s.getNode(),s.isFullyInitialized()||wc(n),s.isFiltered());return fd(e,o,n,i,dd,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Mu(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(su(Mu(t)))}}(t,o,l),{viewCache:o,changes:l}}function fd(e,t,n,i,r,s){const o=t.eventCache;if(null!=sd(i,n))return t;{let a,l;if(wc(n))if(Ci(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Du(t),r=id(i,n instanceof eu?n:eu.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=nd(i,Du(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=pc(n);if(".priority"===c){Ci(1===fc(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=rd(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=mc(n);let d;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=rd(i,n,o.getNode(),l);d=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else d=ad(i,c,t.serverCache);a=null!=d?e.filter.updateChild(o.getNode(),c,d,u,r,s):o.getNode()}}return Au(t,a,o.isFullyInitialized()||wc(n),e.filter.filtersNodes())}}function md(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(wc(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=pc(n);if(!l.isCompleteForPath(n)&&fc(n)>1)return t;const r=mc(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,r,dd,null)}const d=Ru(t,c,l.isFullyInitialized()||wc(n),u.filtersNodes());return fd(e,d,n,r,new hd(r,d,s),a)}function gd(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new hd(r,t,s);if(wc(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Au(t,c,!0,e.filter.filtersNodes());else{const r=pc(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Au(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=mc(n),c=a.getNode().getImmediateChild(r);let d;if(wc(s))d=i;else{const e=u.getCompleteChild(r);d=null!=e?".priority"===gc(s)&&e.getChild(vc(s)).isEmpty()?e:e.updateChild(s,i):eu.EMPTY_NODE}if(c.equals(d))l=t;else{l=Au(t,e.filter.updateChild(a.getNode(),r,d,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function yd(e,t){return e.eventCache.isCompleteForChild(t)}function vd(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function _d(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=wc(n)?i:new Fu(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=vd(0,t.serverCache.getNode().getImmediateChild(n),i);c=md(e,c,new dc(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=vd(0,t.serverCache.getNode().getImmediateChild(n),i);c=md(e,c,new dc(n),l,r,s,o,a)}})),c}class wd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new cu(n.getIndex()),r=(s=n).loadsAllData()?new cu(s.getIndex()):s.hasLimit()?new du(s):new uu(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(eu.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(eu.EMPTY_NODE,a.getNode(),null),u=new Nu(l,o.isFullyInitialized(),i.filtersNodes()),d=new Nu(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ou(d,u),this.eventGenerator_=new Pu(this.query_)}get query(){return this.query_}}function bd(e,t){const n=Du(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!wc(t)&&!n.getImmediateChild(pc(t)).isEmpty())?n.getChild(t):null}function Ed(e){return 0===e.eventRegistrations_.length}function Td(e,t,n){const i=[];if(n){Ci(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Cd(e,t,n,i){t.type===Eu.MERGE&&null!==t.source.queryId&&(Ci(Du(e.viewCache_),"We should always have a full cache before handling merges"),Ci(Mu(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=pd(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Ci(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Ci(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Ci(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Sd(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Sd(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Lu(e,r,"child_removed",t,i,n),Lu(e,r,"child_added",t,i,n),Lu(e,r,"child_moved",s,i,n),Lu(e,r,"child_changed",t,i,n),Lu(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xd,Id;class kd{constructor(){this.views=new Map}}function Nd(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Ci(null!=s,"SyncTree gave us an op for an invalid query."),Cd(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Cd(s,t,n,i));return r}}function Pd(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=nd(n,r?i:null),s=!1;e?s=!0:i instanceof eu?(e=id(n,i),s=!1):(e=eu.EMPTY_NODE,s=!1);const o=Ou(new Nu(e,s,!1),new Nu(i,r,!1));return new wd(t,o)}return o}function Ld(e,t,n,i,r,s){const o=Pd(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Vc,((e,t)=>{i.push(ou(e,t))}));return n.isFullyInitialized()&&i.push(su(n.getNode())),Sd(e,i,n.getNode(),t)}(o,n)}function Od(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Bd(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Td(r,n,i)),Ed(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Td(t,n,i)),Ed(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Bd(e)&&s.push(new(Ci(xd,"Reference.ts has not been loaded"),xd)(t._repo,t._path)),{removed:s,events:o}}function Ad(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Rd(e,t){let n=null;for(const i of e.views.values())n=n||bd(i,t);return n}function Md(e,t){if(t._queryParams.loadsAllData())return Fd(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Dd(e,t){return null!=Md(e,t)}function Bd(e){return null!=Fd(e)}function Fd(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud=1;class jd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Fu(null),this.pendingWriteTree_={visibleWrites:Uu.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zd(e,t,n,i,r){return function(e,t,n,i,r){Ci(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ju(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Yd(e,new Iu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function qd(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Xu(e.pendingWriteTree_,t)){let t=new Fu(null);return null!=i.snap?t=t.set(hc(),!0):Ul(i.children,(e=>{t=t.set(new dc(e),!0)})),Yd(e,new Su(i.path,t,n))}return[]}function Hd(e,t,n){return Yd(e,new Iu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Wd(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Dd(o,t))){const l=Od(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Bd(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Bd(t)){return[Fd(t)]}{let e=[];return t&&(e=Ad(t)),Ul(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Qd(e,i);e.listenProvider_.startListening(rh(r),Zd(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(rh(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(eh(t));e.listenProvider_.stopListening(rh(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=eh(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function $d(e,t,n,i){const r=th(e,i);if(null!=r){const i=nh(r),s=i.path,o=i.queryId,a=bc(s,t);return ih(e,s,new Iu(Cu(o),a,n))}return[]}function Vd(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=bc(e,r);s=s||Rd(t,n),o=o||Bd(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||Bd(l),s=s||Rd(l,hc())):(l=new kd,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=s)a=!0;else{a=!1,s=eu.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Rd(t,hc());n&&(s=s.updateImmediateChild(e,n))}))}const c=Dd(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=eh(t);Ci(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ud++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=Ld(l,t,n,Ju(e.pendingWriteTree_,r),s,a);if(!c&&!o&&!i){const n=Md(l,t);u=u.concat(function(e,t,n){const i=t._path,r=Zd(e,t),s=Qd(e,n),o=e.listenProvider_.startListening(rh(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)Ci(!Bd(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!wc(e)&&t&&Bd(t))return[Fd(t).query];{let e=[];return t&&(e=e.concat(Ad(t).map((e=>e.query)))),Ul(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(rh(i),Zd(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function Gd(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Rd(n,bc(e,t));if(i)return i}));return td(i,t,r,n,!0)}function Kd(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=bc(e,n);i=i||Rd(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Rd(r,hc()):(r=new kd,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Nu(i,!0,!1):null;return function(e){return Mu(e.viewCache_)}(Pd(r,t,Ju(e.pendingWriteTree_,t._path),s?o.getNode():eu.EMPTY_NODE,s))}function Yd(e,t){return Jd(t,e.syncPointTree_,null,Ju(e.pendingWriteTree_,hc()))}function Jd(e,t,n,i){if(wc(e.path))return Xd(e,t,n,i);{const r=t.get(hc());null==n&&null!=r&&(n=Rd(r,hc()));let s=[];const o=pc(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=ld(i,o);s=s.concat(Jd(a,l,e,t))}return r&&(s=s.concat(Nd(r,e,i,n))),s}}function Xd(e,t,n,i){const r=t.get(hc());null==n&&null!=r&&(n=Rd(r,hc()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=ld(i,t),l=e.operationForChild(t);l&&(s=s.concat(Xd(l,r,o,a)))})),r&&(s=s.concat(Nd(r,e,i,n))),s}function Qd(e,t){const n=t.query,i=Zd(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||eu.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=th(e,n);if(i){const n=nh(i),r=n.path,s=n.queryId,o=bc(r,t);return ih(e,r,new xu(Cu(s),o))}return[]}(e,n._path,i):function(e,t){return Yd(e,new xu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Wd(e,n,null,i)}}}}function Zd(e,t){const n=eh(t);return e.queryToTagMap.get(n)}function eh(e){return e._path.toString()+"$"+e._queryIdentifier}function th(e,t){return e.tagToQueryMap.get(t)}function nh(e){const t=e.indexOf("$");return Ci(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new dc(e.substr(0,t))}}function ih(e,t,n){const i=e.syncPointTree_.get(t);Ci(i,"Missing sync point for query tag that we're tracking");return Nd(i,n,Ju(e.pendingWriteTree_,t),null)}function rh(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ci(Id,"Reference.ts has not been loaded"),Id)(e._repo,e._path):e}class sh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new sh(t)}node(){return this.node_}}class oh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_c(this.path_,e);return new oh(this.syncTree_,t)}node(){return Gd(this.syncTree_,this.path_)}}const ah=function(e,t,n){return e&&"object"==typeof e?(Ci(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?lh(e[".sv"],t,n):"object"==typeof e[".sv"]?ch(e[".sv"],t):void Ci(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},lh=function(e,t,n){if("timestamp"===e)return n.timestamp;Ci(!1,"Unexpected server value: "+e)},ch=function(e,t,n){e.hasOwnProperty("increment")||Ci(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Ci(!1,"Unexpected increment value: "+i);const r=t.node();if(Ci(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},uh=function(e,t,n,i){return hh(t,new oh(n,e),i)},dh=function(e,t,n){return hh(e,new sh(t),n)};function hh(e,t,n){const i=e.getPriority().val(),r=ah(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ah(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new $c(s,nu(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new $c(r))),i.forEachChild(Vc,((e,i)=>{const r=hh(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function fh(e,t){let n=t instanceof dc?t:new dc(t),i=e,r=pc(n);for(;null!==r;){const e=ir(i.node.children,r)||{children:{},childCount:0};i=new ph(r,i,e),n=mc(n),r=pc(n)}return i}function mh(e){return e.node.value}function gh(e,t){e.node.value=t,bh(e)}function yh(e){return e.node.childCount>0}function vh(e,t){Ul(e.node.children,((n,i)=>{t(new ph(n,e,i))}))}function _h(e,t,n,i){n&&!i&&t(e),vh(e,(e=>{_h(e,t,!0,i)})),n&&i&&t(e)}function wh(e){return new dc(null===e.parent?e.name:wh(e.parent)+"/"+e.name)}function bh(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===mh(e)&&!yh(e)}(n),r=nr(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,bh(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,bh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Eh=/[\[\].#$\/\u0000-\u001F\u007F]/,Th=/[\[\].#$\u0000-\u001F\u007F]/,Ch=function(e){return"string"==typeof e&&0!==e.length&&!Eh.test(e)},Sh=function(e){return"string"==typeof e&&0!==e.length&&!Th.test(e)},xh=function(e,t,n,i){i&&void 0===t||Ih(mr(e,"value"),t,n)},Ih=function(e,t,n){const i=n instanceof dc?new Cc(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+xc(i));if("function"==typeof t)throw new Error(e+"contains a function "+xc(i)+" with contents = "+t.toString());if(Al(t))throw new Error(e+"contains "+t.toString()+" "+xc(i));if("string"==typeof t&&t.length>10485760/3&&yr(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+xc(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Ul(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ch(t)))throw new Error(e+" contains an invalid key ("+t+") "+xc(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=yr(a),Sc(o),Ih(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=yr(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+xc(i)+" in addition to actual children.")}},kh=function(e,t,n,i){if(!(i&&void 0===n||Sh(n)))throw new Error(mr(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Nh=function(e,t){if(".info"===pc(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ph=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ch(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Sh(e)}(n))throw new Error(mr(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Oh(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ec(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ah(e,t,n){Oh(e,n),Rh(e,(e=>Tc(e,t)||Tc(t,e)))}function Rh(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Mh(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Mh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Sl&&kl("event: "+n.toString()),Hl(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yu(),this.transactionQueueTree_=new ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Bh(e,t,n){if(e.stats_=ec(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new mu(e.repoInfo_,((t,n,i,r)=>{jh(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>zh(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qi(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new kc(e.repoInfo_,t,((t,n,i,r)=>{jh(e,t,n,i,r)}),(t=>{zh(e,t)}),(t=>{!function(e,t){Ul(t,((t,n)=>{qh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Zl[n]||(Zl[n]=t()),Zl[n]}(e.repoInfo_,(()=>new bu(e.stats_,e.server_))),e.infoData_=new gu,e.infoSyncTree_=new jd({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Hd(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),qh(e,"connected",!1),e.serverSyncTree_=new jd({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Ah(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Fh(e){const t=e.infoData_.getNode(new dc(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Uh(e){return(t=(t={timestamp:Fh(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function jh(e,t,n,i,r){e.dataUpdateCount++;const s=new dc(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=sr(n,(e=>nu(e)));o=function(e,t,n,i){const r=th(e,i);if(r){const i=nh(r),s=i.path,o=i.queryId,a=bc(s,t),l=Fu.fromObject(n);return ih(e,s,new ku(Cu(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=nu(n);o=$d(e.serverSyncTree_,s,t,r)}else if(i){const t=sr(n,(e=>nu(e)));o=function(e,t,n){const i=Fu.fromObject(n);return Yd(e,new ku({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=nu(n);o=Hd(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Jh(e,s)),Ah(e.eventQueue_,a,o)}function zh(e,t){qh(e,"connected",t),!1===t&&function(e){Vh(e,"onDisconnectEvents");const t=Uh(e),n=yu();_u(e.onDisconnect_,hc(),((i,r)=>{const s=uh(i,r,e.serverSyncTree_,t);vu(n,i,s)}));let i=[];_u(n,hc(),((t,n)=>{i=i.concat(Hd(e.serverSyncTree_,t,n));const r=tp(e,t);Jh(e,r)})),e.onDisconnect_=yu(),Ah(e.eventQueue_,hc(),i)}(e)}function qh(e,t,n){const i=new dc("/.info/"+t),r=nu(n);e.infoData_.updateSnapshot(i,r);const s=Hd(e.infoSyncTree_,i,r);Ah(e.eventQueue_,i,s)}function Hh(e){return e.nextWriteId_++}function Wh(e,t,n,i,r){Vh(e,"set",{path:t.toString(),value:n,priority:i});const s=Uh(e),o=nu(n,i),a=Gd(e.serverSyncTree_,t),l=dh(o,a,s),c=Hh(e),u=zd(e.serverSyncTree_,t,l,c,!0);Oh(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Ol("set at "+t+" failed: "+n);const o=qd(e.serverSyncTree_,c,!s);Ah(e.eventQueue_,t,o),Gh(e,r,n,i)}));const d=tp(e,t);Jh(e,d),Ah(e.eventQueue_,d,[])}function $h(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function Vh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),kl(n,...t)}function Gh(e,t,n,i){t&&Hl((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Kh(e,t,n){return Gd(e.serverSyncTree_,t,n)||eu.EMPTY_NODE}function Yh(e,t=e.transactionQueueTree_){if(t||ep(e,t),mh(t)){const n=Qh(e,t);Ci(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Kh(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Ci(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=bc(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Vh(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(qd(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ep(e,fh(e.transactionQueueTree_,t)),Yh(e,e.transactionQueueTree_),Ah(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Hl(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ol("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Jh(e,t)}}),o)}(e,wh(t),n)}else yh(t)&&vh(t,(t=>{Yh(e,t)}))}function Jh(e,t){const n=Xh(e,t),i=wh(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=bc(n,l.path);let u,d=!1;if(Ci(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,r=r.concat(qd(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,u="maxretry",r=r.concat(qd(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Kh(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Ih("transaction failed: Data returned ",i,l.path);let t=nu(i);"object"==typeof i&&null!=i&&nr(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Uh(e),c=dh(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Hh(e),s.splice(s.indexOf(o),1),r=r.concat(zd(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(qd(e.serverSyncTree_,o,!0))}else d=!0,u="nodata",r=r.concat(qd(e.serverSyncTree_,l.currentWriteId,!0))}Ah(e.eventQueue_,n,r),r=[],d&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;ep(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Hl(i[e]);Yh(e,e.transactionQueueTree_)}(e,Qh(e,n),i),i}function Xh(e,t){let n,i=e.transactionQueueTree_;for(n=pc(t);null!==n&&void 0===mh(i);)i=fh(i,n),n=pc(t=mc(t));return i}function Qh(e,t){const n=[];return Zh(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Zh(e,t,n){const i=mh(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);vh(t,(t=>{Zh(e,t,n)}))}function ep(e,t){const n=mh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,gh(t,n.length>0?n:void 0)}vh(t,(t=>{ep(e,t)}))}function tp(e,t){const n=wh(Xh(e,t)),i=fh(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{np(e,t)})),np(e,i),_h(i,(t=>{np(e,t)})),n}function np(e,t){const n=mh(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Ci(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Ci(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(qd(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?gh(t,void 0):n.length=s+1,Ah(e.eventQueue_,wh(t),r);for(let e=0;e<i.length;e++)Hl(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=function(e,t){const n=rp(e),i=n.namespace;"firebase.com"===n.domain&&Ll(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Ll("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ol("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Yl(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new dc(n.pathString)}},rp=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ol(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sp{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qi(this.snapshot.exportVal())}}class op{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Ci(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lp{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return wc(this._path)?null:gc(this._path)}get ref(){return new cp(this._repo,this._path)}get _queryIdentifier(){const e=fu(this._queryParams),t=Bl(e);return"{}"===t?"default":t}get _queryObject(){return fu(this._queryParams)}isEqual(e){if(!((e=vr(e))instanceof lp))return!1;const t=this._repo===e._repo,n=Ec(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class cp extends lp{constructor(e,t){super(e,t,new hu,!1)}get parent(){const e=vc(this._path);return null===e?null:new cp(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class up{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new dc(e),n=hp(this.ref,e);return new up(this._node.getChild(t),n,Vc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new up(n,hp(this.ref,t),Vc))))}hasChild(e){const t=new dc(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dp(e,t){return(e=vr(e))._checkNotDeleted("ref"),void 0!==t?hp(e._root,t):e._root}function hp(e,t){var n,i,r,s;return null===pc((e=vr(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),kh(n,i,r,s)):kh("child","path",t,!1),new cp(e._repo,_c(e._path,t))}function pp(e,t){e=vr(e),Nh("set",e._path),xh("set",t,e._path,!1);const n=new Ui;return Wh(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class fp{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new sp("value",this,new up(e.snapshotNode,new cp(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new op(this,e,t):null}matches(e){return e instanceof fp&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){Ci(!xd,"__referenceConstructor has already been defined"),xd=e}(cp),function(e){Ci(!Id,"__referenceConstructor has already been defined"),Id=e}(cp);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mp={};let gp=!1;function yp(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Ll("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),kl("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=ip(s,r),c=l.repoInfo;void 0!==oi&&oi.env&&(a=oi.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=ip(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new Gl(Gl.OWNER):new Vl(e.name,e.options,t);Ph("Invalid Firebase Database URL",l),wc(l.path)||Ll("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=mp[t.name];r||(r={},mp[t.name]=r);let s=r[e.toURLString()];s&&Ll("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Dh(e,gp,n,i),r[e.toURLString()]=s,s}(c,e,u,new $l(e.name,n));return new vp(d,e)}class vp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Bh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cp(this._repo,hc())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=mp[t];n&&n[e.key]===e||Ll(`Database ${t}(${e.repoInfo_}) has already been deleted.`),$h(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ll("Cannot call "+e+" on a deleted database.")}}kc.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},kc.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ml="9.19.1",Zr(new _r("database",((e,{instanceIdentifier:t})=>yp(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ss("@firebase/database","0.14.4",e),ss("@firebase/database","0.14.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const _p=new Go;let wp=localStorage.getItem("lang");is({apiKey:"AIzaSyAU7wH85_udF-Qb2LdQkjbDtUFIVHR9oMA",authDomain:"moviewall-aa6f6.firebaseapp.com",projectId:"moviewall-aa6f6",storageBucket:"moviewall-aa6f6.appspot.com",messagingSenderId:"494361865300",appId:"1:494361865300:web:fdc756003c02226f9a91c1",measurementId:"G-FTSJCJXBR8",databaseURL:"https://moviewall-aa6f6-default-rtdb.europe-west1.firebasedatabase.app/"});const bp=pl(),Ep=dp(function(e=rs(),t){const n=es(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Bi("database");e&&function(e,t,n,i={}){(e=vr(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Ll("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ll('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Gl(Gl.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:ji(i.mockUserToken,e.app.options.projectId);s=new Gl(t)}!function(e,t,n,i){e.repoInfo_=new Yl(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...e)}return n}(),"User");(function(e){e=vr(e);const t=new ap((()=>{})),n=new fp(t);return function(e,t,n){const i=Kd(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=nu(i).withIndex(t._queryParams.getIndex());let s;if(Vd(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Hd(e.serverSyncTree_,t._path,r);else{const n=Zd(e.serverSyncTree_,t);s=$d(e.serverSyncTree_,t._path,r,n)}return Ah(e.eventQueue_,t._path,s),Wd(e.serverSyncTree_,t,n,null,!0),r}),(n=>(Vh(e,"get for query "+Qi(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new up(t,new cp(e._repo,e._path),e._queryParams.getIndex())))})(Ep).then((e=>{const t=e.val();t?"firebase"===t?(o.openSignInModal.disabled=!0,o.openSignInModal.textContent="uk"===wp?"Невизначений":"Anonymous"):(o.openSignInModal.disabled=!0,o.openSignInModal.textContent=t):o.openSignInModal.textContent="uk"===wp?"ВXІД":"SIGN IN"})).catch((e=>{}));function Tp(){"flex"===o.libraryEl.style.display?(o.library.classList.add(o.activeClass),o.home.classList.remove(o.activeClass)):(o.home.classList.add(o.activeClass),o.library.classList.remove(o.activeClass))}const Cp=document.getElementById("en"),Sp=document.getElementById("uk"),xp=document.querySelector(".filter-item");let Ip=localStorage.getItem("lang");function kp(){xp.textContent="За мовою оригіналу:",o.ourTeamHead.textContent="Наша команда",o.homeBtn.textContent="ГОЛОВНА",o.libraryJs.textContent="МОЯ БІБЛІОТЕКА",o.queuedBtn.textContent="ЧЕРГА",o.watchedBtn.textContent="ПЕРЕГЛЯНУТІ",o.signInTitle.textContent="Авторизація",o.signInLabel.textContent="Пошта",o.signInPassword.textContent="Пароль",o.signInSubmitBtn.textContent="Вхід",o.signInNoAcc.textContent="Немає акаунта?",o.openSignUpModal.textContent="Зареєструватись",o.signUpTitle.textContent="Створити обліковий запис",o.signUpName.textContent="Ім`я",o.signUpEmail.textContent="Пошта",o.signUpPassword.textContent="Пароль",o.signUpSubmitBtn.textContent="Зареєструватись",o.openSignInModalNd.textContent="Вхід",o.signUpDesc.textContent="з вашим MovieWall акаунтом",o.SignInWithGoogle.innerHTML='<svg class="google-icon" width="18" height="18" viewBox="0 0 18 18">\n  <path\n    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#4285f4"\n    stroke="none"\n  ></path>\n  <path\n    d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#34a853"\n    stroke="none"\n  ></path>\n  <path\n    d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#fbbc05"\n    stroke="none"\n  ></path>\n  <path\n    d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#ea4335"\n    stroke="none"\n  ></path>\n</svg> Продовжити з Google'}function Np(){xp.textContent="Filter by Original Language:",o.ourTeamHead.textContent="Our Team",o.homeBtn.textContent="HOME",o.libraryJs.textContent="MY LIBRARY",o.queuedBtn.textContent="QUEUE",o.watchedBtn.textContent="WATCHED",o.signInTitle.textContent="Authorization",o.signInLabel.textContent="Email",o.signInPassword.textContent="Password",o.signInSubmitBtn.textContent="Sign In",o.signInNoAcc.textContent="No account?",o.openSignUpModal.textContent="Sign Up",o.signUpTitle.textContent="Create an account",o.signUpName.textContent="Name",o.signUpEmail.textContent="Email",o.signUpPassword.textContent="Password",o.signUpSubmitBtn.textContent="Sign Up",o.openSignInModalNd.textContent="Sign In",o.signUpDesc.textContent="with your MovieWall account",o.SignInWithGoogle.innerHTML='<svg class="google-icon" width="18" height="18" viewBox="0 0 18 18">\n  <path\n    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#4285f4"\n    stroke="none"\n  ></path>\n  <path\n    d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#34a853"\n    stroke="none"\n  ></path>\n  <path\n    d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#fbbc05"\n    stroke="none"\n  ></path>\n  <path\n    d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"\n    fill-rule="evenodd"\n    fill-opacity="1"\n    fill="#ea4335"\n    stroke="none"\n  ></path>\n</svg> Continue with Google'}function Pp(){const e=document.querySelectorAll(".filter-item-genre"),t=Op(Un);for(let n=0;n<e.length-1;n++)e[0].textContent="За жанром:",e[n+1].textContent=t[n]}function Lp(){const e=document.querySelectorAll(".filter-item-genre"),t=Op(Fn);for(let n=0;n<e.length-1;n++)e[0].textContent="Filter by Genre:",e[n+1].textContent=t[n]}function Op(e){return e.map((e=>e.name))}"en"===Ip||null===Ip?(Cp.classList.add("is-hidden"),Sp.classList.remove("is-hidden"),Lp(),Np()):(Sp.classList.add("is-hidden"),Cp.classList.remove("is-hidden"),Pp(),kp()),Jn(Ip);var Ap={};function Rp(e){return e.map((e=>e.name)).join(", ")}Ap=function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var l=void 0;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};t[o][0].call(u.exports,(function(e){return r(t[o][1][e]||e)}),u,u.exports,e,t,n,i)}return n[o].exports}for(var s=void 0,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var o=r(s,"IMG"),a=r(s,"VIDEO"),l=r(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1);let Mp=localStorage.getItem("lang");function Dp(e){if(!e)return"";if("uk"===Mp){const n=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(Nn),i=Rp(e.genres),r=`\n      <div class="modal-wrap">\n        <img\n            class="modal-img"\n            src="${n}"\n            alt="${e.original_title}" \n        />\n        <div class="params">\n          <h2 class="params__title">${e.title}</h2>\n          <div class="params__wrap">\n            <div class="params__key">\n              <p class="params__key__text">Рейтинг/Голосів</p>\n              <p class="params__key__text">Популярність</p>\n              <p class="params__key__text">Оригінальна назва</p>\n              <p class="params__key__text">Жанри</p>\n            </div>\n\n            <div class="params__value">\n              <p class="">\n                <span class="params__vote">${e.vote_average.toFixed(2)} </span> \n                <span class="params__slash">/</span>\n                <span class="params__vote_count">${e.vote_count}</span></p>\n              <p class="params__popularity">${e.popularity.toFixed(1)}</p>\n              <p class="params__text-font">${e.original_title}</p>\n              <p class="params__text-font params__text-retreat">${i}</p>              \n            </div>\n          </div>\n        \n          <div class="about">\n            <h3 class="about__title">Про фільм</h2>\n            <p class="about__overview">${e.overview}</p>\n          </div>\n          <div class="modal-buttons">\n            <button class="modal-buttons__watched add-to-watched-btn" data-modal-watched>додати до Переглянутих</button>\n            <button class="modal-buttons__queue add-to-queue-btn" data-modal-watched>додати до Черги</button>\n          </div>\n        </div>\n      </div>`;o.movieModalContainer.innerHTML=r}else{const n=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(Nn),i=Rp(e.genres),r=`\n    <div class="modal-wrap">\n      <img\n          class="modal-img"\n          src="${n}"\n          alt="${e.original_title}" \n      />\n      <div class="params">\n        <h2 class="params__title">${e.title}</h2>\n        <div class="params__wrap">\n          <div class="params__key">\n            <p class="params__key__text">Vote/Votes</p>\n            <p class="params__key__text">Popularity</p>\n            <p class="params__key__text">Original Title</p>\n            <p class="params__key__text">Genre</p>\n          </div>\n\n          <div class="params__value">\n            <p class="">\n              <span class="params__vote">${e.vote_average.toFixed(2)} </span> \n              <span class="params__slash">/</span>\n              <span class="params__vote_count">${e.vote_count}</span></p>\n            <p class="params__popularity">${e.popularity.toFixed(1)}</p>\n            <p class="params__text-font">${e.original_title}</p>\n            <p class="params__text-font params__text-retreat">${i}</p>              \n          </div>\n        </div>\n        <div class="about">\n          <h3 class="about__title">About</h2>\n          <p class="about__overview">${e.overview}</p>\n        </div>\n        <div class="modal-buttons">\n          <button class="modal-buttons__watched add-to-watched-btn" data-modal-watched>add to Watched</button>\n          <button class="modal-buttons__queue add-to-queue-btn" data-modal-watched>add to queue</button>\n        </div>\n      </div>\n    </div>`;o.movieModalContainer.innerHTML=r}!function(e){const t=document.querySelector(".params__vote");e>1&&e<5&&t.classList.add("red"),e>5&&e<8&&t.classList.add("yellow"),e>=8&&t.classList.add("green")}(e.vote_average),function(e){const t=document.querySelector(".params__text-font"),n=e.length>=20?e.slice(0,20)+"...":e;t.textContent=`${n}`}(e.original_title)}async function Bp(e){!function(e){if("uk"===Mp){const e='\n    <button type= "button" class="modal-buttons__watched button-trailer">\n     Дивитись трейлер\n    </button>\n    <div class="white"></div>';o.movieModalContainer.insertAdjacentHTML("beforeend",e)}else{const e='\n    <button type= "button" class="modal-buttons__watched button-trailer">\n     Watch a trailer\n    </button>\n    <div class="white"></div>';o.movieModalContainer.insertAdjacentHTML("beforeend",e)}const t=document.querySelector(".button-trailer");e||t.classList.add("is-hidden");t.onclick=()=>{Ap.create(`  <iframe\n        width="650"\n        height="400"\n        class="trailer__video"\n        src="${e}?rel=0&showinfo=0&autoplay=1"\n        frameborder="0"\n        loading="lazy"\n      </iframe>`).show()}}((await xn(e,Mp).then((({results:e})=>e.map((e=>{if("YouTube"===e.site)return`https://www.youtube.com/embed/${e.key}`})))).catch((e=>console.log(e))))[0])}function Fp(e){const t=document.querySelector(".add-to-watched-btn");const n=(JSON.parse(localStorage.getItem("Watched movies"))||[]).includes(e.id);let i=localStorage.getItem("lang");n?(console.log(i),t.textContent="uk"===i?"Прибрати з переглянутих":"Remove from watched"):t.textContent="uk"===i?"Додати до переглянутих":"Add to watched",t.addEventListener("click",(function(t){let n=JSON.parse(localStorage.getItem("Watched movies"))||[];if(n.includes(e.id)){const r=n.indexOf(e.id);n.splice(r,1),t.target.textContent="uk"===i?"Додати до переглянутих":"Add to watched"}else n.push(e.id),t.target.textContent="uk"===i?"Прибрати з переглянутих":"Remove from watched";localStorage.setItem("Watched movies",JSON.stringify(n))}))}function Up(e){let t=localStorage.getItem("lang");const n=document.querySelector(".add-to-queue-btn");const i=(JSON.parse(localStorage.getItem("Queue movies"))||[]).includes(e.id);n.textContent=i?"uk"===t?"Прибрати з черги":"Remove from queue":"uk"===t?"Додати до черги":"Add to queue",n.addEventListener("click",(function(n){let i=JSON.parse(localStorage.getItem("Queue movies"))||[];if(i.includes(e.id)){const r=i.indexOf(e.id);i.splice(r,1),n.target.textContent="uk"===t?"Додати до черги":"Add to queue"}else i.push(e.id),n.target.textContent="uk"===t?"Прибрати з черги":"Remove from queue";localStorage.setItem("Queue movies",JSON.stringify(i))}))}function jp(e,t){Tn(e,t).then((t=>{o.movieModalContainer.innerHTML="",Dp(t),Bp(e),Fp(t),Up(t)}))}let zp=localStorage.getItem("lang");function qp(e){const t=e.target.closest(".filmcard");if(!t)return;jp(t.dataset.movie,zp),o.movieModal.classList.remove("is-hidden"),window.addEventListener("keydown",_s),o.body.classList.add("no-scroll")}function Hp(){o.signInBackdrop.classList.remove("is-hidden"),window.addEventListener("keydown",bs),o.body.classList.add("no-scroll"),o.signUpBackdrop.classList.add("is-hidden"),window.removeEventListener("keydown",Es)}let Wp,$p="",Vp=1,Gp=0;let Kp=localStorage.getItem("lang");let Yp,Jp="",Xp=1,Qp=0;let Zp=!1;const ef=window.matchMedia("(min-width: 768px)");function tf(){o.filter.classList.add("is-hidden"),o.filter.style.marginBottom="-106px",ef.matches&&(o.filter.style.marginBottom="-53px")}function nf(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function rf(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:nf(t[n])&&nf(e[n])&&Object.keys(t[n]).length>0&&rf(e[n],t[n])}))}const sf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function of(){const e="undefined"!=typeof document?document:{};return rf(e,sf),e}const af={document:sf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function lf(){const e="undefined"!=typeof window?window:{};return rf(e,af),e}function cf(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function uf(e,t=0){return setTimeout(e,t)}function df(){return Date.now()}function hf(e,t="x"){const n=lf();let i,r,s;const o=function(e){const t=lf();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map((e=>e.replace(",","."))).join(", ")),s=new n.WebKitCSSMatrix("none"===r?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),"x"===t&&(r=n.WebKitCSSMatrix?s.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(r=n.WebKitCSSMatrix?s.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),r||0}function pf(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function ff(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const s=e[r];if(null!=s&&(i=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?i instanceof HTMLElement:i&&(1===i.nodeType||11===i.nodeType)))){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,i=e.length;n<i;n+=1){const i=e[n],r=Object.getOwnPropertyDescriptor(s,i);void 0!==r&&r.enumerable&&(pf(t[i])&&pf(s[i])?s[i].__swiper__?t[i]=s[i]:ff(t[i],s[i]):!pf(t[i])&&pf(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:ff(t[i],s[i])):t[i]=s[i])}}}var i;return t}function mf(e,t,n){e.style.setProperty(t,n)}function gf({swiper:e,targetPosition:t,side:n}){const i=lf(),r=-e.translate;let s,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const l=t>r?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,u=()=>{s=(new Date).getTime(),null===o&&(o=s);const l=Math.max(Math.min((s-o)/a,1),0),d=.5-Math.cos(l*Math.PI)/2;let h=r+d*(t-r);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),c(h,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})})),void i.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=i.requestAnimationFrame(u)};u()}function yf(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function vf(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function _f(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function wf(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function bf(e,t){return lf().getComputedStyle(e,null).getPropertyValue(t)}function Ef(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function Tf(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function Cf(e,t,n){const i=lf();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let Sf,xf,If;function kf(){return Sf||(Sf=function(){const e=lf(),t=of();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),Sf}function Nf(e={}){return xf||(xf=function({userAgent:e}={}){const t=kf(),n=lf(),i=n.navigator.platform,r=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let p="MacIntel"===i;return!c&&p&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),l&&!h&&(s.os="android",s.android=!0),(c||d||u)&&(s.os="ios",s.ios=!0),s}(e)),xf}function Pf(){return If||(If=function(){const e=lf();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,i]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),If}const Lf=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},Of=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Af=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex,s=r+i-1;if(e.params.rewind)for(let i=r-t;i<=s+t;i+=1){const t=(i%n+n)%n;t!==r&&t>s&&Of(e,t)}else for(let i=Math.max(s-t,0);i<=Math.min(s+t,n-1);i+=1)i!==r&&i>s&&Of(e,i)};function Rf({swiper:e,runCallbacks:t,direction:n,step:i}){const{activeIndex:r,previousIndex:s}=e;let o=n;if(o||(o=r>s?"next":r<s?"prev":"reset"),e.emit(`transition${i}`),t&&r!==s){if("reset"===o)return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),"next"===o?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}var Mf={slideTo:function(e=0,t=this.params.speed,n=!0,i,r){"string"==typeof e&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:p,enabled:f}=s;if(s.animating&&a.preventInteractionOnTransition||!f&&!i&&!r)return!1;const m=Math.min(s.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const y=-l[g];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*y),n=Math.floor(100*c[e]),i=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<i-(i-n)/2?o=e:t>=n&&t<i&&(o=e+1):t>=n&&(o=e)}if(s.initialized&&o!==d){if(!s.allowSlideNext&&y<s.translate&&y<s.minTranslate())return!1;if(!s.allowSlidePrev&&y>s.translate&&y>s.maxTranslate()&&(d||0)!==o)return!1}let v;if(o!==(u||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(y),v=o>d?"next":o<d?"prev":"reset",h&&-y===s.translate||!h&&y===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==a.effect&&s.setTranslate(y),"reset"!==v&&(s.transitionStart(n,v),s.transitionEnd(n,v)),!1;if(a.cssMode){const e=s.isHorizontal(),n=h?y:-y;if(0===t){const t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),t&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1}))}else{if(!s.support.smoothScroll)return gf({swiper:s,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(y),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(n,v),0===t?s.transitionEnd(n,v):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,v))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,i){if("string"==typeof e){e=parseInt(e,10)}const r=this;let s=e;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?s+=r.virtual.slidesBefore:s=r.getSlideIndexByData(s)),r.slideTo(s,t,n,i)},slideNext:function(e=this.params.speed,t=!0,n){const i=this,{enabled:r,params:s,animating:o}=i;if(!r)return i;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft}return s.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)},slidePrev:function(e=this.params.speed,t=!0,n){const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l)return i;const u=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const h=d(a?i.translate:-i.translate),p=s.map((e=>d(e)));let f=s[p.indexOf(h)-1];if(void 0===f&&r.cssMode){let e;s.forEach(((t,n)=>{h>=t&&(e=n)})),void 0!==e&&(f=s[e>0?e-1:e])}let m=0;if(void 0!==f&&(m=o.indexOf(f),m<0&&(m=i.activeIndex-1),"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),r.rewind&&i.isBeginning){const r=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(r,e,t,n)}return i.slideTo(m,e,t,n)},slideReset:function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e=this.params.speed,t=!0,n,i=.5){const r=this;let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const e=r.snapGrid[a];l-e>(r.snapGrid[a+1]-e)*i&&(s+=r.params.slidesPerGroup)}else{const e=r.snapGrid[a-1];l-e<=(r.snapGrid[a]-e)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let r,s=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?s<e.loopedSlides-i/2||s>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),s=e.getSlideIndex(yf(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),uf((()=>{e.slideTo(s)}))):e.slideTo(s):s>e.slides.length-i?(e.loopFix(),s=e.getSlideIndex(yf(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),uf((()=>{e.slideTo(s)}))):e.slideTo(s)}else e.slideTo(s)}};function Df(e){const t=this,n=of(),i=lf(),r=t.touchEventsData;r.evCache.push(e);const{params:s,touches:o,enabled:a}=t;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===s.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(r.isTouched&&r.isMoved)return;const u=!!s.noSwipingClass&&""!==s.noSwipingClass,d=e.composedPath?e.composedPath():e.path;u&&l.target&&l.target.shadowRoot&&d&&(c=d[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,p=!(!l.target||!l.target.shadowRoot);if(s.noSwiping&&(p?function(e,t=this){return function t(n){if(!n||n===of()||n===lf())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return i||n.getRootNode?i||t(n.getRootNode().host):null}(t)}(h,c):c.closest(h)))return void(t.allowClick=!0);if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const f=o.currentX,m=o.currentY,g=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,y=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(g&&(f<=y||f>=i.innerWidth-y)){if("prevent"!==g)return;e.preventDefault()}Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=m,r.touchStartTime=df(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let v=!0;c.matches(r.focusableElements)&&(v=!1,"SELECT"===c.nodeName&&(r.isTouched=!1)),n.activeElement&&n.activeElement.matches(r.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const _=v&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!_||c.isContentEditable||l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function Bf(e){const t=of(),n=this,i=n.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=n;if(!a)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l));const c=i.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(i.evCache[c]=l);const u=i.evCache.length>1?i.evCache[0]:l,d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper)return s.startX=d,void(s.startY=h);if(!n.allowTouchMove)return l.target.matches(i.focusableElements)||(n.allowClick=!1),void(i.isTouched&&(Object.assign(s,{startX:d,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:h}),i.touchStartTime=df()));if(r.touchReleaseOnEdges&&!r.loop)if(n.isVertical()){if(h<s.startY&&n.translate<=n.maxTranslate()||h>s.startY&&n.translate>=n.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(i.focusableElements))return i.isMoved=!0,void(n.allowClick=!1);if(i.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=d,s.currentY=h;const p=s.currentX-s.startX,f=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(p**2+f**2)<n.params.threshold)return;if(void 0===i.isScrolling){let e;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:p*p+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(p))/Math.PI,i.isScrolling=n.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),void 0===i.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(i.startMoving=!0)),i.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let m=n.isHorizontal()?p:f,g=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),s.diff=m,m*=r.touchRatio,o&&(m=-m,g=-g);const y=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const v=n.params.loop&&!r.cssMode;if(!i.isMoved){if(v&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let _;i.isMoved&&y!==n.touchesDirection&&v&&Math.abs(m)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),_=!0),n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),m>0?(v&&!_&&i.currentTranslate>(r.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+m)**b))):m<0&&(v&&!_&&i.currentTranslate<(r.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===r.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-m)**b))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),n.allowSlidePrev||n.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(m)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,void(s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function Ff(e){const t=this,n=t.touchEventsData,i=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(i>=0&&n.evCache.splice(i,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:r,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);r.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=df(),d=u-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),d<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=df(),uf((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let h;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,h=r.followFinger?o?t.translate:-t.translate:-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let p=0,f=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==a[e+t]?h>=a[e]&&h<a[e+t]&&(p=e,f=a[e+t]-a[e]):h>=a[e]&&(p=e,f=a[a.length-1]-a[a.length-2])}let m=null,g=null;r.rewind&&(t.isBeginning?g=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const y=(h-a[p])/f,v=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(d>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?m:p+v):t.slideTo(p)),"prev"===t.swipeDirection&&(y>1-r.longSwipesRatio?t.slideTo(p+v):null!==g&&y<0&&Math.abs(y)>r.longSwipesRatio?t.slideTo(g):t.slideTo(p))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(p+v):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==m?m:p+v),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:p))}}let Uf;function jf(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(Uf),Uf=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function zf(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function qf(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let r;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();r=0===s?0:(e.translate-e.minTranslate())/s,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Hf(e){Lf(this,e.target),this.update()}let Wf=!1;function $f(){}const Vf=(e,t)=>{const n=of(),{params:i,el:r,wrapperEl:s,device:o}=e,a=!!i.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;r[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",e.onClick,!0),i.cssMode&&s[l]("scroll",e.onScroll),i.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",jf,!0):e[c]("observerUpdate",jf,!0),r[l]("load",e.onLoad,{capture:!0})};const Gf=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var Kf={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Yf(e,t){return function(n={}){const i=Object.keys(n)[0],r=n[i];"object"==typeof r&&null!==r?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in r?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),ff(t,n)):ff(t,n)):ff(t,n)}}const Jf={eventsEmitter:{on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const r=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function r(...n){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(i,n)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,r)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(r,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,i,r;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),r=t):(n=e[0].events,i=e[0].data,r=e[0].context||t),i.unshift(r);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(r,[e,...i])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(r,i)}))})),t}},update:{updateSize:function(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(bf(i,"padding-left")||0,10)-parseInt(bf(i,"padding-right")||0,10),n=n-parseInt(bf(i,"padding-top")||0,10)-parseInt(bf(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{wrapperEl:r,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&i.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,d=yf(s,`.${e.params.slideClass}, swiper-slide`),h=c?e.virtual.slides.length:d.length;let p=[];const f=[],m=[];let g=i.slidesOffsetBefore;"function"==typeof g&&(g=i.slidesOffsetBefore.call(e));let y=i.slidesOffsetAfter;"function"==typeof y&&(y=i.slidesOffsetAfter.call(e));const v=e.snapGrid.length,_=e.slidesGrid.length;let w=i.spaceBetween,b=-g,E=0,T=0;if(void 0===o)return;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*o),e.virtualSize=-w,d.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),i.centeredSlides&&i.cssMode&&(mf(r,"--swiper-centered-offset-before",""),mf(r,"--swiper-centered-offset-after",""));const C=i.grid&&i.grid.rows>1&&e.grid;let S;C&&e.grid.initSlides(h);const x="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let r=0;r<h;r+=1){let s;if(S=0,d[r]&&(s=d[r]),C&&e.grid.updateSlide(r,s,h,t),!d[r]||"none"!==bf(s,"display")){if("auto"===i.slidesPerView){x&&(d[r].style[t("width")]="");const o=getComputedStyle(s),a=s.style.transform,l=s.style.webkitTransform;if(a&&(s.style.transform="none"),l&&(s.style.webkitTransform="none"),i.roundLengths)S=e.isHorizontal()?Cf(s,"width",!0):Cf(s,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),i=n(o,"padding-right"),r=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)S=e+r+a;else{const{clientWidth:n,offsetWidth:o}=s;S=e+t+i+r+a+(o-n)}}a&&(s.style.transform=a),l&&(s.style.webkitTransform=l),i.roundLengths&&(S=Math.floor(S))}else S=(o-(i.slidesPerView-1)*w)/i.slidesPerView,i.roundLengths&&(S=Math.floor(S)),d[r]&&(d[r].style[t("width")]=`${S}px`);d[r]&&(d[r].swiperSlideSize=S),m.push(S),i.centeredSlides?(b=b+S/2+E/2+w,0===E&&0!==r&&(b=b-o/2-w),0===r&&(b=b-o/2-w),Math.abs(b)<.001&&(b=0),i.roundLengths&&(b=Math.floor(b)),T%i.slidesPerGroup==0&&p.push(b),f.push(b)):(i.roundLengths&&(b=Math.floor(b)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&p.push(b),f.push(b),b=b+S+w),e.virtualSize+=S+w,E=S,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+y,a&&l&&("slide"===i.effect||"coverflow"===i.effect)&&(r.style.width=`${e.virtualSize+i.spaceBetween}px`),i.setWrapperSize&&(r.style[t("width")]=`${e.virtualSize+i.spaceBetween}px`),C&&e.grid.updateWrapperSize(S,p,t),!i.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let r=p[n];i.roundLengths&&(r=Math.floor(r)),p[n]<=e.virtualSize-o&&t.push(r)}p=t,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(c&&i.loop){const t=m[0]+w;if(i.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),r=t*i.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+r)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&p.push(p[p.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==i.spaceBetween){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");d.filter(((e,t)=>!(i.cssMode&&!i.loop)||t!==d.length-1)).forEach((e=>{e.style[n]=`${w}px`}))}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(i.spaceBetween?i.spaceBetween:0)})),e-=i.spaceBetween;const t=e-o;p=p.map((e=>e<0?-g:e>t?t+y:e))}if(i.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(i.spaceBetween?i.spaceBetween:0)})),e-=i.spaceBetween,e<o){const t=(o-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),f.forEach(((e,n)=>{f[n]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:f,slidesSizesGrid:m}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){mf(r,"--swiper-centered-offset-before",-p[0]+"px"),mf(r,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(h!==u&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==_&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(c||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);h<=i.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let r,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.getSlideIndexByData(e):t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const e=t.activeIndex+r;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(r=0;r<n.length;r+=1)if(void 0!==n[r]){const e=n[r].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,n=t.params,{slides:i,rtlTranslate:r,snapGrid:s}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;r&&(o=e),i.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<i.length;e+=1){const a=i[e];let l=a.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=i[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-l)/(a.swiperSlideSize+n.spaceBetween),u=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-l)/(a.swiperSlideSize+n.spaceBetween),d=-(o-l),h=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||h>1&&h<=t.size||d<=0&&h>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(e),i[e].classList.add(n.slideVisibleClass)),a.progress=r?-c:c,a.originalProgress=r?-u:u}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===i)r=0,s=!0,o=!0;else{r=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||r<=0,o=a||r>=1,n&&(r=0),a&&(r=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),r=t.slidesGrid[n],s=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=r?(l-r)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:r}=e,s=e.virtual&&n.virtual.enabled,o=e=>yf(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),s)if(n.loop){let t=r-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${r}"]`);else a=t[r];if(a){a.classList.add(n.slideActiveClass);let e=wf(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let i=_f(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,i&&i.classList.add(n.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let r;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?i>=t[e]&&i<t[e+1]-(t[e+1]-t[e])/2?r=e:i>=t[e]&&i<t[e+1]&&(r=e+1):i>=t[e]&&(r=e);return n.normalizeSlideIndex&&(r<0||void 0===r)&&(r=0),r}(t)),i.indexOf(n)>=0)l=i.indexOf(n);else{const e=Math.min(r.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/r.slidesPerGroup)}if(l>=i.length&&(l=i.length-1),c===s)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let d;d=t.virtual&&r.virtual.enabled&&r.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{snapIndex:l,realIndex:d,previousIndex:s,activeIndex:c}),t.initialized&&Af(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,i=e.closest(`.${n.slideClass}, swiper-slide`);let r,s=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){s=!0,r=e;break}if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=r,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:i,wrapperEl:r}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let s=hf(r,e);return s+=this.cssOverflowAdjustment(),n&&(s=-s),s||0},setTranslate:function(e,t){const n=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=i?-e:e:c=e,r.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,r.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:r.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();a=0===u?0:(e-n.minTranslate())/u,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,i=!0,r){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(u=i&&e>l?l:i&&e<c?c:e,s.updateProgress(u),o.cssMode){const e=s.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return gf({swiper:s,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),Rf({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),Rf({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:Mf,loop:{loopCreate:function(e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;yf(i,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:r,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled)return t&&(h.centeredSlides||0!==a.snapIndex?h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const p="auto"===h.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let f=h.loopedSlides||p;f%h.slidesPerGroup!=0&&(f+=h.slidesPerGroup-f%h.slidesPerGroup),a.loopedSlides=f;const m=[],g=[];let y=a.activeIndex;void 0===r?r=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(h.slideActiveClass)))[0]):y=r;const v="next"===n||!n,_="prev"===n||!n;let w=0,b=0;if(r<f){w=Math.max(f-r,h.slidesPerGroup);for(let e=0;e<f-r;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(l.length-t-1)}}else if(r>a.slides.length-2*f){b=Math.max(r-(a.slides.length-2*f),h.slidesPerGroup);for(let e=0;e<b;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(t)}}if(_&&m.forEach((e=>{d.prepend(a.slides[e])})),v&&g.forEach((e=>{d.append(a.slides[e])})),a.recalcSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&_)if(void 0===e){const e=a.slidesGrid[y],t=a.slidesGrid[y+w]-e;o?a.setTranslate(a.translate-t):(a.slideTo(y+w,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else i&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&v)if(void 0===e){const e=a.slidesGrid[y],t=a.slidesGrid[y-b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(y-b,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=of(),{params:n}=e;e.onTouchStart=Df.bind(e),e.onTouchMove=Bf.bind(e),e.onTouchEnd=Ff.bind(e),n.cssMode&&(e.onScroll=qf.bind(e)),e.onClick=zf.bind(e),e.onLoad=Hf.bind(e),Wf||(t.addEventListener("touchstart",$f),Wf=!0),Vf(e,"on")},detachEvents:function(){Vf(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:i,el:r}=e,s=i.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in s?s[o]:void 0)||e.originalParams,l=Gf(e,i),c=Gf(e,a),u=i.enabled;l&&!c?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(r.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===i.grid.fill)&&r.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=i[t]&&i[t].enabled,r=a[t]&&a[t].enabled;n&&!r&&e[t].disable(),!n&&r&&e[t].enable()}));const d=a.direction&&a.direction!==i.direction,h=i.loop&&(a.slidesPerView!==i.slidesPerView||d);d&&n&&e.changeDirection(),ff(e.params,a);const p=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!p?e.disable():!u&&p&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),h&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let i=!1;const r=lf(),s="window"===t?r.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:s,value:a}=o[e];"window"===t?r.matchMedia(`(min-width: ${a}px)`).matches&&(i=s):a<=n.clientWidth&&(i=s)}return i||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:i,el:r,device:s}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},Xf={};class Qf{constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=ff({},n),t&&!n.el&&(n.el=t);const i=of();if(n.el&&"string"==typeof n.el&&i.querySelectorAll(n.el).length>1){const e=[];return i.querySelectorAll(n.el).forEach((t=>{const i=ff({},n,{el:t});e.push(new Qf(i))})),e}const r=this;r.__swiper__=!0,r.support=kf(),r.device=Nf({userAgent:n.userAgent}),r.browser=Pf(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],n.modules&&Array.isArray(n.modules)&&r.modules.push(...n.modules);const s={};r.modules.forEach((e=>{e({params:n,swiper:r,extendParams:Yf(n,s),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const o=ff({},Kf,s);return r.params=ff({},o,Xf,n),r.originalParams=ff({},r.params),r.passedParams=ff({},n),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=Ef(yf(t,`.${n.slideClass}, swiper-slide`)[0]);return Ef(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=yf(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),r=(n.maxTranslate()-i)*e+i;n.translateTo(r,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:i,slidesGrid:r,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1){(t?r[e]+s[e]-r[a]<o:r[e]-r[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){r[a]-r[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let r;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&Lf(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):(r=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),r||i()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(i())}return yf(n,i())[0]})();return!r&&t.params.createElements&&(r=vf("div",t.params.wrapperClass),n.append(r),yf(n,`.${t.params.slideClass}`).forEach((e=>{r.append(e)}))),Object.assign(t,{el:n,wrapperEl:r,slidesEl:t.isElement?n:r,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===bf(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===bf(n,"direction")),wrongRTL:"-webkit-box"===bf(r,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?Lf(t,e):e.addEventListener("load",(e=>{Lf(t,e.target)}))})),Af(t),t.initialized=!0,Af(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,el:r,wrapperEl:s,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r.removeAttribute("style"),s.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,cf(n)),n.destroyed=!0),null}static extendDefaults(e){ff(Xf,e)}static get extendedDefaults(){return Xf}static get defaults(){return Kf}static installModule(e){Qf.prototype.__modules__||(Qf.prototype.__modules__=[]);const t=Qf.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Qf.installModule(e))),Qf):(Qf.installModule(e),Qf)}}function Zf(e,t,n,i){return e.params.createElements&&Object.keys(i).forEach((r=>{if(!n[r]&&!0===n.auto){let s=yf(e.el,`.${i[r]}`)[0];s||(s=vf("div",i[r]),s.className=i[r],e.el.append(s)),n[r]=s,t[r]=s}})),n}Object.keys(Jf).forEach((e=>{Object.keys(Jf[e]).forEach((t=>{Qf.prototype[t]=Jf[e][t]}))})),Qf.use([function({swiper:e,on:t,emit:n}){const i=lf();let r=null,s=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==i.ResizeObserver?e&&!e.destroyed&&e.initialized&&(r=new ResizeObserver((t=>{s=i.requestAnimationFrame((()=>{const{width:n,height:i}=e;let r=n,s=i;t.forEach((({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(r=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),r===n&&s===i||o()}))})),r.observe(e.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",a))})),t("destroy",(()=>{s&&i.cancelAnimationFrame(s),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:n,emit:i}){const r=[],s=lf(),o=(t,n={})=>{const o=new(s.MutationObserver||s.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void i("observerUpdate",t[0]);const n=function(){i("observerUpdate",t[0])};s.requestAnimationFrame?s.requestAnimationFrame(n):s.setTimeout(n,0)}));o.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),r.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=Tf(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{r.forEach((e=>{e.disconnect()})),r.splice(0,r.length)}))}]);new Qf(o.swiper,{modules:[function({swiper:e,extendParams:t,on:n,emit:i}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const r=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function s(t){let n;return t&&"string"==typeof t&&e.isElement&&(n=e.el.shadowRoot.querySelector(t),n)?n:(t&&("string"==typeof t&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&n.length>1&&1===e.el.querySelectorAll(t).length&&(n=e.el.querySelector(t))),t&&!n?t:n)}function o(t,n){const i=e.params.navigation;(t=r(t)).forEach((t=>{t&&(t.classList[n?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass))}))}function a(){const{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop)return o(n,!1),void o(t,!1);o(n,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function l(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function c(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function u(){const t=e.params.navigation;if(e.params.navigation=Zf(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let n=s(t.nextEl),i=s(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:i}),n=r(n),i=r(i);const o=(n,i)=>{n&&n.addEventListener("click","next"===i?c:l),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};n.forEach((e=>o(e,"next"))),i.forEach((e=>o(e,"prev")))}function d(){let{nextEl:t,prevEl:n}=e.navigation;t=r(t),n=r(n);const i=(t,n)=>{t.removeEventListener("click","next"===n?c:l),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>i(e,"next"))),n.forEach((e=>i(e,"prev")))}n("init",(()=>{!1===e.params.navigation.enabled?h():(u(),a())})),n("toEdge fromEdge lock unlock",(()=>{a()})),n("destroy",(()=>{d()})),n("enable disable",(()=>{let{nextEl:t,prevEl:n}=e.navigation;t=r(t),n=r(n),[...t,...n].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),n("click",((t,n)=>{let{nextEl:s,prevEl:o}=e.navigation;s=r(s),o=r(o);const a=n.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!s.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;s.length?t=s[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),i(!0===t?"navigationShow":"navigationHide"),[...s,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},disable:h,update:a,init:u,destroy:d})},function({swiper:e,extendParams:t,on:n,emit:i,params:r}){let s,o;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,l,c,u,d,h,p,f=r&&r.autoplay?r.autoplay.delay:3e3,m=r&&r.autoplay?r.autoplay.delay:3e3,g=(new Date).getTime;function y(t){e&&!e.destroyed&&e.wrapperEl&&t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",y),T())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?l=!0:l&&(m=a,l=!1);const t=e.autoplay.paused?a:g+m-(new Date).getTime();e.autoplay.timeLeft=t,i("autoplayTimeLeft",t,t/f),o=requestAnimationFrame((()=>{v()}))},_=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),v();let n=void 0===t?e.params.autoplay.delay:t;f=e.params.autoplay.delay,m=e.params.autoplay.delay;const r=(()=>{let t;if(t=e.virtual&&e.params.virtual.enabled?e.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:e.slides[e.activeIndex],!t)return;return parseInt(t.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(r)&&r>0&&void 0===t&&(n=r,f=r,m=r),a=n;const l=e.params.speed,c=()=>{e&&!e.destroyed&&(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(l,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,l,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(l,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,l,!0,!0),i("autoplay")),e.params.cssMode&&(g=(new Date).getTime(),requestAnimationFrame((()=>{_()}))))};return n>0?(clearTimeout(s),s=setTimeout((()=>{c()}),n)):requestAnimationFrame((()=>{c()})),n},w=()=>{e.autoplay.running=!0,_(),i("autoplayStart")},b=()=>{e.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(o),i("autoplayStop")},E=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(s),t||(p=!0);const r=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",y):T()};if(e.autoplay.paused=!0,n)return h&&(a=e.params.autoplay.delay),h=!1,void r();const o=a||e.params.autoplay.delay;a=o-((new Date).getTime()-g),e.isEnd&&a<0&&!e.params.loop||(a<0&&(a=0),r())},T=()=>{e.isEnd&&a<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=(new Date).getTime(),p?(p=!1,_(a)):_(),e.autoplay.paused=!1,i("autoplayResume"))},C=()=>{if(e.destroyed||!e.autoplay.running)return;const t=of();"hidden"===t.visibilityState&&(p=!0,E(!0)),"visible"===t.visibilityState&&T()},S=e=>{"mouse"===e.pointerType&&(p=!0,E(!0))},x=t=>{"mouse"===t.pointerType&&e.autoplay.paused&&T()};n("init",(()=>{e.params.autoplay.enabled&&(e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",S),e.el.addEventListener("pointerleave",x)),of().addEventListener("visibilitychange",C),g=(new Date).getTime(),w())})),n("destroy",(()=>{e.el.removeEventListener("pointerenter",S),e.el.removeEventListener("pointerleave",x),of().removeEventListener("visibilitychange",C),e.autoplay.running&&b()})),n("beforeTransitionStart",((t,n,i)=>{!e.destroyed&&e.autoplay.running&&(i||!e.params.autoplay.disableOnInteraction?E(!0,!0):b())})),n("sliderFirstMove",(()=>{!e.destroyed&&e.autoplay.running&&(e.params.autoplay.disableOnInteraction?b():(c=!0,u=!1,p=!1,d=setTimeout((()=>{p=!0,u=!0,E(!0)}),200)))})),n("touchEnd",(()=>{if(!e.destroyed&&e.autoplay.running&&c){if(clearTimeout(d),clearTimeout(s),e.params.autoplay.disableOnInteraction)return u=!1,void(c=!1);u&&e.params.cssMode&&T(),u=!1,c=!1}})),n("slideChange",(()=>{!e.destroyed&&e.autoplay.running&&(h=!0)})),Object.assign(e.autoplay,{start:w,stop:b,pause:E,resume:T})}],slidesPerView:8,spaceBetween:8,loop:!0,autoplay:{enabled:!0,delay:1500},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:3,spaceBetween:2},768:{slidesPerView:6,spaceBetween:4},1278:{slidesPerView:8,spaceBetween:8}}});let em=localStorage.getItem("lang");si(),function(){const e=document.querySelector("body");function t(){e.classList.toggle("dark-theme")}document.querySelectorAll(".change-theme").forEach((e=>{e.addEventListener("click",(function(){t(),localStorage.setItem("theme",this.dataset.theme)}))})),"dark"===localStorage.getItem("theme")&&t()}(),document.querySelectorAll(".change-lang").forEach((e=>{e.addEventListener("click",(function(){var t;localStorage.setItem("lang",this.dataset.lang),t=e.id,localStorage.setItem("lang",t),location.reload(),Jn(t),"en"===t?(Cp.classList.toggle("is-hidden"),Sp.classList.remove("is-hidden"),Lp(),Np()):(Pp(),kp(),Sp.classList.toggle("is-hidden"),Cp.classList.remove("is-hidden"))}))})),async function(e){try{wn();const t=`https://api.themoviedb.org/3//movie/top_rated?api_key=dd2eacab57962d131eb2537d52aeafc3&language=${e}&page=1`;return(await Zt.get(t)).data}catch(e){vn.Notify.failure("Oops, an error occurred")}finally{bn()}}(em).then((e=>{var n;o.slider.insertAdjacentHTML("beforeend",(n=e.results)?n.map((e=>{const n=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(Nn);return`\n        <li class="filmcard swiper-slide" data-movie="${e.id}">\n        <a href="#" class="filmcard-link swiper-link link">      \n              <img class="filmcard-img"\n              src="${n}"\n              alt=${e.title}\n              loading="lazy"\n              />      \n\n          </a>\n        </li>`})).join(""):"")})),o.linkEl.addEventListener("click",(function(e){e.preventDefault(),o.home.click()})),o.homeGalleryList.addEventListener("click",qp),o.closeModalBtn.addEventListener("click",ms),o.searchForm.addEventListener("submit",(function(e){e.preventDefault(),Qn(),ei=e.currentTarget.searchQuery.value.trim(),""!==ei?(ri(ei,1),ti&&ti.reset()):Jn(ei)})),o.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&ms()})),o.closeTeamModalBtn.addEventListener("click",gs),o.closeSignInModal.addEventListener("click",ys),o.closeSignUpModal.addEventListener("click",vs),o.teamModalBtn.addEventListener("click",(function(){o.teamModal.classList.remove("is-hidden"),window.addEventListener("keydown",ws),o.body.classList.add("no-scroll")})),o.teamBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&gs()})),o.openSignInModal.addEventListener("click",Hp),o.openSignInModalNd.addEventListener("click",Hp),o.openSignUpModal.addEventListener("click",(function(){o.signUpBackdrop.classList.remove("is-hidden"),window.addEventListener("keydown",Es),o.body.classList.add("no-scroll"),o.signInBackdrop.classList.add("is-hidden"),window.removeEventListener("keydown",bs)})),o.formSignIn.addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("email").value,n=document.getElementById("password").value;aa(bp,t,n).then((e=>{e.user;vn.Notify.success(`The user has been successfully login! Hello ${t}`),ys(),pp(Ep,t),o.openSignInModal.textContent=t,o.openSignInModal.disabled=!0,Tp(),si()})).catch((e=>{e.code,e.message}))})),o.formSignUp.addEventListener("submit",(function(e){e.preventDefault();const t=document.querySelector(".sign-up-mail").value,n=document.querySelector(".sign-up-password").value,i=document.querySelector(".sign-up-name").value;oa(pl(),t,n).then((e=>{e.user;vn.Notify.success(`The user has been successfully registered! Hello ${i}`),pp(Ep,i),o.openSignInModal.textContent=i,o.openSignInModal.disabled=!0,vs(),Tp(),si()})).catch((e=>{e.code,e.message}))})),o.SignInWithGoogle.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(".sign-up-name"),Da(bp,_p).then((e=>{Go.credentialFromResult(e).accessToken;const t=e.user.displayName;vn.Notify.success(`The user has been successfully registered! Hello ${t}`),o.openSignInModal.textContent=t,pp(Ep,t),o.openSignInModal.disabled=!0,ys(),Tp(),si()})).catch((e=>{e.code,e.message,Go.credentialFromError(e)}))})),o.filterByGenres.addEventListener("change",(function(e){Qn(),$p=e.target.value,async function(e){await In(e,Kp).then((t=>{function n(t){o.homeGalleryList.innerHTML="",In(e,Kp,t).then((e=>{o.homeGalleryList.innerHTML="",o.homeGalleryList.insertAdjacentHTML("beforeend",Hn(e.results)),Vn()}))}t.results&&0!==t.results.length||(o.searchForm.insertAdjacentHTML("beforeend","<p class='search-notification'>OOps. Something going wrong. Try one more time</p>"),Zn()),o.homeGalleryList.insertAdjacentHTML("beforeend",Hn(t.results)),Gp=t.total_pages,Wp||(Wp=$n(t.total_results,Gp),Wp.on("beforeMove",(e=>{n(e.page),Vp=e.page})))}))}($p)})),o.filterByLanguage.addEventListener("change",(function(e){Qn(),Jp=e.target.value,async function(e){await kn(e).then((t=>{function n(t){o.homeGalleryList.innerHTML="",kn(e,t).then((e=>{o.homeGalleryList.innerHTML="",o.homeGalleryList.insertAdjacentHTML("beforeend",Hn(e.results)),Vn()}))}t.results&&0!==t.results.length||(o.searchForm.insertAdjacentHTML("beforeend","<p class='search-notification'>OOps. Something going wrong. Try one more time</p>"),Zn()),o.homeGalleryList.insertAdjacentHTML("beforeend",Hn(t.results)),Qp=t.total_pages,Yp||(Yp=$n(t.total_results,Qp),Yp.on("beforeMove",(e=>{n(e.page),Xp=e.page})))}))}(Jp)})),o.openFilter.addEventListener("click",(function(e){Zp?tf():(o.filter.classList.remove("is-hidden"),o.filter.style.marginBottom="0"),Zp=!Zp})),o.closeFilter.addEventListener("click",tf),window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>400?o.upBtn.classList.remove("btn-up_hide"):o.upBtn.classList.add("btn-up_hide"),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}})),o.slider.addEventListener("click",qp),o.exitBtn.addEventListener("click",(function(){var e;Ep&&(Nh("remove",(e=Ep)._path),pp(e,null),location.reload())})),o.anonBtn.addEventListener("click",(function(e){e.preventDefault(),Zo(bp).then((function(e){var t=e.user;pp(Ep,t.providerId),o.openSignInModal.textContent="uk"===wp?"Невизначений":"Anonymous",o.openSignInModal.disabled=!0,ys(),Tp(),si()})).catch((function(e){e.code,e.message}))}));
//# sourceMappingURL=index.7faa0a9f.js.map
