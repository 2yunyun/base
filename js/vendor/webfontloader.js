!function(){function t(t,n,i){return t.call.apply(t.bind,arguments)}function n(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function i(e,o,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:n).apply(null,arguments)}var e=Date.now||function(){return+new Date};var o=!!window.FontFace;function a(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function s(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function c(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function h(t,n,i){function e(){h&&r&&f&&(h(c),h=null)}n=a(t,"link",{rel:"stylesheet",href:n,media:"all"});var r=!1,f=!0,c=null,h=i||null;o?(n.onload=function(){r=!0,e()},n.onerror=function(){r=!0,c=Error("Stylesheet failed to load"),e()}):setTimeout(function(){r=!0,e()},0),s(t,"head",n)}function l(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=a(t,"script",{src:n}),r=!1;return s.onload=s.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){r||(r=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function u(){this.a=0,this.c=null}function p(t){return t.a++,function(){t.a--,g(t)}}function d(t,n){t.c=n,g(t)}function g(t){0==t.a&&t.c&&(t.c(),t.c=null)}function v(t){this.a=t||"-"}function w(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function m(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function y(t){return t.a+t.f}function b(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function x(t){if(t.g){var n=c(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),f(t.f,i,e)}j(t,"inactive")}function j(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,y(i)):t.h[n]())}function _(t,n){this.c=t,this.f=n,this.a=a(this.c,"span",{"aria-hidden":"true"},this.f)}function k(t){s(t.c,"body",t.a)}function T(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+m(t.c)+";font-style:"+b(t)+";font-weight:"+t.f+"00;"}function S(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function C(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new _(this.c,this.s),this.h=new _(this.c,this.s),this.j=new _(this.c,this.s),this.m=new _(this.c,this.s),t=T(t=new w(this.a.c+",serif",y(this.a))),this.g.a.style.cssText=t,t=T(t=new w(this.a.c+",sans-serif",y(this.a))),this.h.a.style.cssText=t,t=T(t=new w("serif",y(this.a))),this.j.a.style.cssText=t,t=T(t=new w("sans-serif",y(this.a))),this.m.a.style.cssText=t,k(this.g),k(this.h),k(this.j),k(this.m)}v.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},S.prototype.start=function(){var t=this.c.o.document,n=this,i=e(),o=new Promise(function(o,a){!function s(){var r;e()-i>=n.f?a():t.fonts.load((r=n.a,b(r)+" "+r.f+"00 300px "+m(r.c)),n.h).then(function(t){1<=t.length?o():setTimeout(s,25)},function(){a()})}()}),a=null,s=new Promise(function(t,i){a=setTimeout(i,n.f)});Promise.race([s,o]).then(function(){a&&(clearTimeout(a),a=null),n.g(n.a)},function(){n.j(n.a)})};var A={D:"serif",C:"sans-serif"},N=null;function E(){if(null===N){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return N}function W(t,n,i){for(var e in A)if(A.hasOwnProperty(e)&&n===t.f[A[e]]&&i===t.f[A[e]])return!0;return!1}function F(t){var n,o=t.g.a.offsetWidth,a=t.h.a.offsetWidth;(n=o===t.f.serif&&a===t.f["sans-serif"])||(n=E()&&W(t,o,a)),n?e()-t.A>=t.w?E()&&W(t,o,a)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):setTimeout(i(function(){F(this)},t),50):I(t,t.v)}function I(t,n){setTimeout(i(function(){r(this.g.a),r(this.h.a),r(this.j.a),r(this.m.a),n(this.a)},t),0)}function O(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}C.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=e(),F(this)};var P=null;function B(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&f(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),j(t,"active")):x(t.a))}function L(t){this.j=t,this.a=new function(){this.c={}},this.h=0,this.f=this.g=!0}function D(t,n){this.c=t,this.a=n}function $(t,n){this.c=t,this.a=n}O.prototype.g=function(t){var n=this.a;n.g&&f(n.f,[n.a.c("wf",t.c,y(t).toString(),"active")],[n.a.c("wf",t.c,y(t).toString(),"loading"),n.a.c("wf",t.c,y(t).toString(),"inactive")]),j(n,"fontactive",t),this.m=!0,B(this)},O.prototype.h=function(t){var n=this.a;if(n.g){var i=c(n.f,n.a.c("wf",t.c,y(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,y(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,y(t).toString(),"inactive")),f(n.f,e,o)}j(n,"fontinactive",t),B(this)},L.prototype.load=function(t){this.c=new function(t,n){this.a=t,this.o=n||t,this.c=this.o.document}(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,e){var o=[],a=e.timeout;s=n,s.g&&f(s.f,[s.a.c("wf","loading")]),j(s,"loading");var s;var o=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}(t.a,e,t.c),r=new O(t.c,n,a);for(t.h=o.length,n=0,e=o.length;n<e;n++)o[n].load(function(n,e,o){var a,s,c,h,l,u;s=r,c=n,h=e,l=o,u=0==--(a=t).h,(a.f||a.g)&&setTimeout(function(){var t=l||null,n=h||{};if(0===c.length&&u)x(s.a);else{s.f+=c.length,u&&(s.j=u);var e,o=[];for(e=0;e<c.length;e++){var a=c[e],r=n[a.c],p=s.a,d=a;if(p.g&&f(p.f,[p.a.c("wf",d.c,y(d).toString(),"loading")]),j(p,"fontloading",d),p=null,null===P)if(window.FontFace){var d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);P=d?42<parseInt(d[1],10):!g}else P=!1;p=P?new S(i(s.g,s),i(s.h,s),s.c,a,s.s,r):new C(i(s.g,s),i(s.h,s),s.c,a,s.s,t,r),o.push(p)}for(e=0;e<o.length;e++)o[e].start()}},0)})}(this,new function(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new v("-"),this.j=!1!==n.events,this.g=!1!==n.classes}(this.c,t),t)},D.prototype.load=function(t){var n=this,i=n.a.projectId,e=n.a.version;if(i){var o=n.c.o;l(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(e?"?v="+e:""),function(e){e?t([]):(o["__MonotypeConfiguration__"+i]=function(){return n.a},function n(){if(o["__mti_fntLst"+i]){var e,a=o["__mti_fntLst"+i](),s=[];if(a)for(var r=0;r<a.length;r++){var f=a[r].fontfamily;void 0!=a[r].fontStyle&&void 0!=a[r].fontWeight?(e=a[r].fontStyle+a[r].fontWeight,s.push(new w(f,e))):s.push(new w(f))}t(s)}else setTimeout(function(){n()},50)}())}).id="__MonotypeAPIScript__"+i}else t([])},$.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new u;for(n=0,i=e.length;n<i;n++)h(this.c,e[n],p(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var f=e[1].split(","),c=0;c<f.length;c+=1)r.push(new w(e[0],f[c]));else r.push(new w(e[0]));d(s,function(){t(r,a)})};var q="https://fonts.googleapis.com/css";var H={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},M={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},z={i:"i",italic:"i",n:"n",normal:"n"},G=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function K(t,n){this.c=t,this.a=n}var R={Arimo:!0,Cousine:!0,Tinos:!0};function U(t,n){this.c=t,this.a=n}function V(t,n){this.c=t,this.f=n,this.a=[]}K.prototype.load=function(t){var n=new u,i=this.c,e=new function(t,n){this.c=t||q,this.a=[],this.f=[],this.g=n||""}(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(e,o);var a=new function(t){this.f=t,this.a=[],this.c={}}(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s;if(s=[],r=e[1])for(var r,f=(r=r.split(",")).length,c=0;c<f;c++){var h;if((h=r[c]).match(/^[\w-]+$/))if(null==(u=G.exec(h.toLowerCase())))h="";else{if(h=null==(h=u[2])||""==h?"n":z[h],null==(u=u[1])||""==u)u="4";else var l=M[u],u=l||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}else h="";h&&s.push(h)}0<s.length&&(a=s),3==e.length&&(s=[],0<(e=(e=e[2])?e.split(","):s).length&&(e=H[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=H[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new w(o,a[e]))}}(a),h(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),p(n)),d(n,function(){t(a.a,a.c,R)})},U.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?l(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new w(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(e)}},2e3):t([])},V.prototype.load=function(t){var n,i=this.f.id,e=this.c.o,o=this;i?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[i]=function(n,i){for(var e=0,a=i.fonts.length;e<a;++e){var s=i.fonts[e];o.a.push(new w(s.name,(r="font-weight:"+s.weight+";font-style:"+s.style,f=void 0,c=void 0,h=void 0,f=4,c="n",h=null,r&&((h=r.match(/(normal|oblique|italic)/i))&&h[1]&&(c=h[1].substr(0,1).toLowerCase()),(h=r.match(/([1-9]00|normal|bold)/i))&&h[1]&&(/bold/i.test(h[1])?f=7:/[1-9]00/.test(h[1])&&(f=parseInt(h[1].substr(0,1),10)))),c+f)))}var r,f,c,h;t(o.a)},l(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+((n=this.c).o.location.hostname||n.a.location.hostname)+"/"+i+".js",function(n){n&&t([])})):t([])};var X=new L(window);X.a.c.custom=function(t,n){return new $(n,t)},X.a.c.fontdeck=function(t,n){return new V(n,t)},X.a.c.monotype=function(t,n){return new D(n,t)},X.a.c.typekit=function(t,n){return new U(n,t)},X.a.c.google=function(t,n){return new K(n,t)};var J={load:i(X.load,X)};"function"==typeof define&&define.amd?define(function(){return J}):"undefined"!=typeof module&&module.exports?module.exports=J:(window.WebFont=J,window.WebFontConfig&&X.load(window.WebFontConfig))}();