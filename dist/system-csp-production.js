/*
 * SystemJS v0.18.15
 */
!function(){function e(){!function(e){function t(e,t){var n;if(e instanceof Error){var n=new Error(e.message,e.fileName,e.lineNumber);b?(n.message=e.message+"\n	"+t,n.stack=e.stack):(n.message=e.message,n.stack=e.stack+"\n	"+t)}else n=e+"\n	"+t;return n}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},w(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function s(e,t){var n,r="",a=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o){r=o;break}}else{var i=o.split("/").length;i>=a&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(a=i,r=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[r]||t;return n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),O.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e])}function c(e){O=e(O||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=S.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(D){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&w(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,w(t,"__useDefault",{value:!0}),t}function h(e,t,n){for(var r in t)n&&r in e||(e[r]=t[r]);return e}function p(e,t,n){for(var r in t){var a=t[r];r in e?a instanceof Array&&e[r]instanceof Array?e[r]=[].concat(n?a:e[r]).concat(n?e[r]:a):"object"==typeof a&&"object"==typeof e[r]?e[r]=h(h({},e[r]),a,n):n||(e[r]=a):e[r]=a}}function v(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function g(){if(L[this.baseURL])return L[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new j(this.baseURL,k);return this.baseURL=e.href,L[this.baseURL]=e}var y="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,b="undefined"!=typeof window&&"undefined"!=typeof document,x="undefined"!=typeof process&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var w,S=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(w=Object.defineProperty)}catch(e){w=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var k;if("undefined"!=typeof document&&document.getElementsByTagName){if(k=document.baseURI,!k){var E=document.getElementsByTagName("base");k=E[0]&&E[0].href||window.location.href}k=k.split("#")[0].split("?")[0],k=k.substr(0,k.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)k="file://"+(x?"/":"")+process.cwd()+"/",x&&(k=k.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");k=e.location.href}var j=e.URLPolyfill||e.URL;w(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++P+">",r.isDeclarative=!0,j.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(i(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)p(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)v(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,s=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var i,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(i=r.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(r,i,Promise.resolve(e.moduleSource))),i.linkSets.length))return i.linkSets[0].done.then(function(){t(i)});var h=i||o(a);h.metadata=e.moduleMetadata;var p=f(r,h);r.loads.push(h),t(p.done),"locate"==s?l(r,h):"fetch"==s?u(r,h,Promise.resolve(e.moduleAddress)):(h.address=e.moduleAddress,d(r,h,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){m(e,a.loads[s]);break}}}}function h(e){var t=!1;try{x(e,function(n,r){v(e,n,r),t=!0})}catch(n){v(e,null,n),t=!0}return t}function p(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:O({}),evaluated:!0}:{module:O({})},t.status="linked",g(e.loader,t)}return e.resolve(n)}var s=h(e);s||e.resolve(n)}}function v(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var l=s.dependencies[i];if(l.value==n.name){r=t(r,"Error loading "+n.name+' as "'+l.key+'" from '+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d>o;o++){var n=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==S.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=S.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=S.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function g(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=S.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=S.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function b(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function x(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=y(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",g(n,o)}}function k(e,t){return t.module.module}function E(){}function j(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var P=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return b(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(E(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(E(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||b(r,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],k(t,n)}))})},load:function(e,t){var n=this._loader;return n.modules[e]?(E(n.modules[e],[],n),Promise.resolve(n.modules[e].module)):n.importPromises[e]||b(this,e,s(n,e,{}).then(function(t){return delete n.importPromises[e],k(n,t)}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),s=this._loader,i=r.done.then(function(){return k(s,n)});return d(s,n,a),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t,n=new r;if(Object.getOwnPropertyNames&&null!=e)t=Object.getOwnPropertyNames(e);else{t=[];for(var a in e)t.push(a)}for(var o=0;o<t.length;o++)(function(t){w(n,t,{configurable:!1,enumerable:!0,get:function(){return e[t]}})})(t[o]);return Object.preventExtensions&&Object.preventExtensions(n),n},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var O=a.prototype.newModule}();var P;i.prototype=a.prototype,o.prototype=new i,u.prototype=o.prototype,l.prototype=new u;var O,D=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(_){D=!1}var z=/^[^\/]+:\/\//,L={},M=new j(k);!function(){c(function(e){return function(){e.call(this),this.baseURL=k.substr(0,k.lastIndexOf("/")+1),this.set("@empty",this.newModule({}))}}),d("normalize",function(){return function(e,t){return"."==e[0]||"/"==e[0]?new j(e,t||M).href:e}}),d("import",function(e){return function(t,n,r){return e.call(this,t,n,r).then(function(e){return e.__useDefault?e["default"]:e})}});var e=["main","format","defaultExtension","meta","map"];l.prototype.config=function(t){function n(e){for(var t in e)return!0}if(t.baseURL){if(n(this.packages)||n(this.meta)||n(this.depCache)||n(this.bundles))throw new TypeError("baseURL should only be configured once and must be configured first.");this.baseURL=t.baseURL,g.call(this)}if(t.defaultJSExtensions&&(this.defaultJSExtensions=t.defaultJSExtensions),t.pluginFirst&&(this.pluginFirst=t.pluginFirst),t.paths)for(var r in t.paths)this.paths[r]=t.paths[r];if(t.map)for(var r in t.map){var a=t.map[r];if("string"!=typeof a){var o=this.normalizeSync(r);this.defaultJSExtensions&&".js"!=r.substr(r.length-3,3)&&(o=o.substr(0,o.length-3));var s="";for(var i in this.packages)o.substr(0,i.length)==i&&(!o[i.length]||"/"==o[i.length])&&s.split("/").length<i.split("/").length&&(s=i);s&&this.packages[s].main&&(o=o.substr(0,o.length-this.packages[s].main.length-1));var i=this.packages[o]=this.packages[o]||{};i.map=a}else this.map[r]=a}if(t.packagePaths)for(var l=0;l<t.packagePaths.length;l++){var u=t.packagePaths[l],o=this.normalizeSync(u);this.defaultJSExtensions&&".js"!=u.substr(u.length-3,3)&&(o=o.substr(0,o.length-3)),t.packagePaths[l]=o}if(t.packages)for(var r in t.packages){var d=this.normalizeSync(r+"/");d=d.substr(0,d.length-1),this.defaultJSExtensions&&".js"!=r.substr(r.length-3,3)&&(d=d.substr(0,d.length-3)),this.packages[d]=this.packages[d]||{};for(var c in t.packages[r])-1==S.call(e,c)&&"undefined"!=typeof console&&console.warn;p(this.packages[d],t.packages[r])}if(t.bundles)for(var r in t.bundles){for(var f=[],l=0;l<t.bundles[r].length;l++)f.push(this.normalizeSync(t.bundles[r][l]));this.bundles[r]=f}for(var m in t){var a=t[m],h=!1;if("baseURL"!=m&&"map"!=m&&"packages"!=m&&"bundles"!=m&&"paths"!=m)if("object"!=typeof a||a instanceof Array)this[m]=a;else{this[m]=this[m]||{},("meta"==m||"depCache"==m)&&(h=!0);for(var r in a)"meta"==m&&"*"==r[0]?this[m][r]=a[r]:h?this[m][this.normalizeSync(r)]=a[r]:this[m][r]=a[r]}}}}(),function(){function t(e,t){return new Promise(function(n,r){t.metadata.integrity&&r(new Error("Subresource integrity checking is not supported in web workers."));try{importScripts(t.address)}catch(a){r(a)}e.onScriptLoad(t),t.metadata.registered||r(t.address+" did not call System.register or AMD define"),n("")})}if("undefined"!=typeof document)var n=document.getElementsByTagName("head")[0];var r;l.prototype.onScriptLoad=function(){e.System=r},d("fetch",function(a){return function(o){var s=this;return o.metadata.scriptLoad&&(b||y)?y?t(s,o):new Promise(function(t,a){function i(e){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(u(),s.onScriptLoad(o),o.metadata.registered||a(o.address+" did not call System.register or AMD define"),t(""))}function l(e){u(),a(new Error("Unable to load script "+o.address))}function u(){d.detachEvent?d.detachEvent("onreadystatechange",i):(d.removeEventListener("load",i,!1),d.removeEventListener("error",l,!1)),n.removeChild(d)}var d=document.createElement("script");d.async=!0,d.attachEvent?d.attachEvent("onreadystatechange",i):(d.addEventListener("load",i,!1),d.addEventListener("error",l,!1)),r=e.System,e.System=s,d.src=o.address,o.metadata.integrity&&d.setAttribute("integrity",o.metadata.integrity),n.appendChild(d)}):a.call(this,o)}})}(),d("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,this.has("@@amd-helpers")&&this.get("@@amd-helpers").createDefine(this),e.call(this,t)}}),d("onScriptLoad",function(e){return function(t){if(e.call(this,t),this.has("@@amd-helpers")){var n=this.get("@@amd-helpers").lastModule;(n.anonDefine||n.isBundle)&&(t.metadata.format="defined",t.metadata.registered=!0,n.isBundle=!1),n.anonDefine&&(t.metadata.deps=t.metadata.deps?t.metadata.deps.concat(n.anonDefine.deps):n.anonDefine.deps,t.metadata.execute=n.anonDefine.execute,n.anonDefine=null)}}}),function(){function t(e,t,n){if(v=!0,t)t=(e.normalizeSync||e.normalize).call(e,t),n.name=t,t in e.defined||(e.defined[t]=n);else{if(p)throw new TypeError("Invalid anonymous System.register module load. If loading a single module, ensure anonymous System.register is loaded via System.import. If loading a bundle, ensure all the System.register calls are named.");p=n}}function n(e,t,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==S.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=t.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(void 0===i.groupIndex||i.groupIndex<l){if(void 0!==i.groupIndex&&(r[i.groupIndex].splice(S.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");i.groupIndex=l}n(i,t,r)}}}}function r(e,t){var r=t.defined[e];if(!r.module){r.groupIndex=0;var a=[];n(r,t,a);for(var o=!!r.declarative==a.length%2,i=a.length-1;i>=0;i--){for(var l=a[i],d=0;d<l.length;d++){var c=l[d];o?s(c,t):u(c,t)}o=!o}}}function a(){}function o(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new a,importers:[]})}function s(t,n){if(!t.module){var r=n._loader.moduleRecords,a=t.module=o(t.name,r),i=t.module.exports,l=t.declare.call(e,function(e,t){if(a.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var r=0,o=a.importers.length;o>r;r++){var s=a.importers[r];if(!s.locked){var l=S.call(s.dependencies,a);s.setters[l](i)}}return a.locked=!1,t});if(a.setters=l.setters,a.execute=l.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],h=r[f];h?c=h.exports:m&&!m.declarative?c=m.esModule:m?(s(m,n),h=m.module,c=h.exports):c=n.get(f),h&&h.importers?(h.importers.push(a),a.dependencies.push(h)):a.dependencies.push(null);for(var p=t.originalIndices[u],v=0,g=p.length;g>v;++v){var y=p[v];a.setters[y]&&a.setters[y](c)}}}}function i(e,t){var n,r=t.defined[e];if(r)r.declarative?h(e,[],t):r.evaluated||u(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function u(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,s=t.normalizedDeps.length;s>o;o++){var l=t.normalizedDeps[o],d=n.defined[l];d&&u(d,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return i(t.normalizedDeps[r],n);throw new TypeError("Module "+e+" not declared as a dependency.")},r,a);c&&(a.exports=c),r=a.exports,r&&r.__esModule?t.esModule=r:t.esModule=m(r)}}function h(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,s=a.normalizedDeps.length;s>o;o++){var i=a.normalizedDeps[o];-1==S.call(n,i)&&(r.defined[i]?h(i,n,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}var p,v=!1;l.prototype.register=function(e,n,r){return"string"!=typeof e&&(r=n,n=e,e=null),"boolean"==typeof r?this.registerDynamic.apply(this,arguments):void t(this,e,{declarative:!0,deps:n,declare:r})},l.prototype.registerDynamic=function(e,n,r,a){"string"!=typeof e&&(a=r,r=n,n=e,e=null),t(this,e,{declarative:!1,deps:n,execute:a,executingRequire:r})},c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),d("onScriptLoad",function(e){return function(t){e.call(this,t),v&&(p&&(t.metadata.entry=p),t.metadata.format=t.metadata.format||"defined",t.metadata.registered=!0,v=!1,p=null)}}),w(a,"toString",{value:function(){return"Module"}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}});var g=/^\s*(\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*System\.register(Dynamic)?\s*\(/;d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(p=null,v=!1,"register"==t.metadata.format&&(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return"string"==typeof t.metadata.deps&&(t.metadata.deps=t.metadata.deps.split(",")),t.metadata.deps=t.metadata.deps||[],("register"==t.metadata.format||t.metadata.bundle||!t.metadata.format&&t.source.match(g))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(e){var t,n=this;if(n.defined[e.name])t=n.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format||"esm"==e.metadata.format||"es6"==e.metadata.format){if(p=null,v=!1,"undefined"!=typeof __exec&&__exec.call(n,e),!v&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.");p?t=p:e.metadata.bundle=!0,!t&&n.defined[e.name]&&(t=n.defined[e.name]),p=null,v=!1}t||(t={declarative:!1,deps:e.metadata.deps,execute:function(){return n.newModule({})}}),n.defined[e.name]=t;var a=f(t.deps);t.deps=a.names,t.originalIndices=a.indices,t.name=e.name;for(var o=[],s=0,i=t.deps.length;i>s;s++)o.push(Promise.resolve(n.normalize(t.deps[s],e.name)));return Promise.all(o).then(function(a){return t.normalizedDeps=a,{deps:t.deps,execute:function(){return r(e.name,n),h(e.name,[],n),n.defined[e.name]=void 0,n.newModule(t.declarative?t.module.exports:t.esModule)}}})}})}(),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function r(t){n(function(n){if(-1==S.call(i,n)){try{var r=e[n]}catch(a){i.push(n)}t(n,r)}})}var a=this;t.call(a);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB"];a.set("@@global-helpers",a.newModule({prepareGlobal:function(t,n,a){var s=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var i;if(a){i={};for(var l in a)i[l]=a[l],e[l]=a[l]}return n||(o={},r(function(e,t){o[e]=t})),function(){var t;if(n)t=v(n,e);else{var a,l,u={};r(function(e,t){o[e]!==t&&"undefined"!=typeof t&&(u[e]=t,"undefined"!=typeof a?l||a===t||(l=!0):a=t)}),t=l?u:a}if(i)for(var d in i)e[d]=i[d];return e.define=s,t}}}))}}),c(function(t){return function(){function n(e,t){e=e.replace(i,"");var n=e.match(d),r=(n[1].split(",")[t]||"require").replace(c,""),a=f[r]||(f[r]=new RegExp(l+r+u,"g"));a.lastIndex=0;for(var o,s=[];o=a.exec(e);)s.push(o[2]||o[3]);return s}function r(e,t,n,a){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var o=s.get(s.normalizeSync(e,a));if(!o)throw new Error('Module not already loaded loading "'+e+'" from "'+a+'".');return o.__useDefault?o["default"]:o}throw new TypeError("Invalid require")}for(var i=[],l=0;l<e.length;l++)i.push(s["import"](e[l],a));Promise.all(i).then(function(e){t&&t.apply(null,e)},n)}function a(t,a,o){"string"!=typeof t&&(o=a,a=t,t=null),a instanceof Array||(o=a,a=["require","exports","module"].splice(0,o.length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===a[a.length-1]&&a.pop();var i,l,u;-1!=(i=S.call(a,"require"))&&(a.splice(i,1),t||(a=a.concat(n(o.toString(),i)))),-1!=(l=S.call(a,"exports"))&&a.splice(l,1),-1!=(u=S.call(a,"module"))&&a.splice(u,1);var d={name:t,deps:a,execute:function(t,n,d){function c(e,n,a){return"string"==typeof e&&"function"!=typeof n?t(e):r.call(s,e,n,a,d.id)}for(var f=[],m=0;m<a.length;m++)f.push(t(a[m]));d.uri=d.id,d.config=function(){},-1!=u&&f.splice(u,0,d),-1!=l&&f.splice(l,0,n),-1!=i&&(c.toUrl=function(e){var t=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),n=s.normalizeSync(e,d.id);return t&&".js"==n.substr(n.length-3,3)&&(n=n.substr(0,n.length-3)),n},f.splice(i,0,c));var h=e.require;e.require=r;var p=o.apply(-1==l?e:n,f);return e.require=h,"undefined"==typeof p&&d&&(p=d.exports),"undefined"!=typeof p?p:void 0}};if(t)m.anonDefine||m.isBundle?(m.anonDefine&&m.anonDefine.name&&s.registerDynamic(m.anonDefine.name,m.anonDefine.deps,!1,m.anonDefine.execute),m.anonDefine=null):m.anonDefine=d,m.isBundle=!0,s.registerDynamic(t,d.deps,!1,d.execute);else{if(m.anonDefine)throw new TypeError("Multiple defines for anonymous module");m.anonDefine=d}}function o(t){m.anonDefine=null,m.isBundle=!1;var n=e.module,r=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=a,function(){e.define=o,e.module=n,e.exports=r}}var s=this;t.call(this);var i=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,l="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",u="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",d=/\(([^\)]*)\)/,c=/^\s+|\s+$/g,f={};a.amd={};var m={isBundle:!1,anonDefine:null};s.set("@@amd-helpers",s.newModule({createDefine:o,require:r,define:a,lastModule:m})),s.amdDefine=a,s.amdRequire=r}}),c(function(e){return function(){e.call(this),this.map={}}}),d("normalize",function(e){return function(t,n,r){if("."!=t.substr(0,1)&&"/"!=t.substr(0,1)&&!t.match(z)){var a,o=0;for(var s in this.map)if(t.substr(0,s.length)==s&&(t.length==s.length||"/"==t[s.length])){var i=s.split("/").length;if(o>=i)continue;a=s,o=i}a&&(t=this.map[a]+t.substr(a.length))}return e.call(this,t,n,r)}}),d("normalize",function(e){return function(t,n){var r=e.call(this,t,n);return this.has(r)?r:(b&&(r=r.replace(/#/g,"%23")),r.match(z)?(this.defaultJSExtensions&&".js"!=r.substr(r.length-3,3)&&(r+=".js"),r):(r=s(this.paths,r)||r,this.defaultJSExtensions&&".js"!=r.substr(r.length-3,3)&&(r+=".js"),"."==r[0]||"/"==r[0]?new j(r,M).href:new j(r,g.call(this)).href))}}),function(){function e(e){for(var t in this.packages)if(e.substr(0,t.length)===t&&(e.length===t.length||"/"===e[t.length]))return t}function t(e,t){var n,r=0;for(var a in e)if(t.substr(0,a.length)==a&&(t.length==a.length||"/"==t[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}return n}function n(e,n,r,a){var o=t(r,a),s=r[o];return s?"object"==typeof s?e["import"](r["@env"]||"@system-env",n).then(function(e){for(var t in s){var n="~"==t[0],r=v(n?t.substr(1):t,e);if(!n&&r||n&&!r)return s[t]+a.substr(o.length)}}):s+a.substr(o.length):void 0}function r(e){var t=e.basePath&&"."!=e.basePath?e.basePath:"";return t&&("./"==t.substr(0,2)&&(t=t.substr(2)),"/"!=t[t.length-1]&&(t+="/")),t}function a(e,t,a,o){var s=this,i=s.packages[t],l=r(i);if(t===e&&i.main&&(e+="/"+("./"==i.main.substr(0,2)?i.main.substr(2):i.main)),e.length==t.length+1&&"/"==e[t.length])return e+(o&&".js"!=e.substr(e.length-3,3)?".js":"");var u="";if(i.meta&&(i.meta[e.substr(t.length+1)]||i.meta["./"+e.substr(t.length+1)])||("defaultExtension"in i&&t!==e?i.defaultExtension!==!1&&-1==e.split("/").pop().lastIndexOf(".")&&(u="."+i.defaultExtension):o&&(u=".js")),e.length==t.length)return e+u;if(a||!i.map)return t+"/"+l+e.substr(t.length+1)+u;var d="."+e.substr(t.length);return Promise.resolve(n(s,t,i.map,d)).then(function(e){return e?e:u?n(s,t,i.map,d+u):void 0}).then(function(n){return n?"."==n?s.normalizeSync(t):"./"==n.substr(0,2)?t+"/"+l+n.substr(2):s.normalize.call(s,n):t+"/"+l+e.substr(t.length+1)+u})}function o(n,r){return function(o,l){if(l)var u=e.call(this,l)||this.defaultJSExtensions&&".js"==l.substr(l.length-3,3)&&e.call(this,l.substr(0,l.length-3));if(u&&"."!==o[0]){var d=this.packages[u].map;if(d){var c=t(d,o);c&&(o=d[c]+o.substr(c.length),"."===o[0]&&(l=u+"/"))}}var f=this.defaultJSExtensions&&".js"!=o.substr(o.length-3,3),m=n.call(this,o,l);".js"!=m.substr(m.length-3,3)&&(f=!1),f&&(m=m.substr(0,m.length-3));var h=e.call(this,m),v=this;if(!r){for(var g,y=0;y<this.packagePaths.length;y++){var b=m.match(s[this.packagePaths[y]]||(s[this.packagePaths[y]]=new RegExp("^"+this.packagePaths[y].replace(/\*/g,"[^\\/]+"))));if(b){g=b[0];break}}if(g&&(!h||h!=g||v.packages[h].loadConfig!==!1))return(i[g]||(i[g]=v.fetch({name:g+".json",address:g+".json",metadata:{}}).then(function(e){try{return JSON.parse(e)}catch(t){throw new Error("Invalid JSON in package configuration file "+g)}}).then(function(e){h&&h==g&&p(e,v.packages[g]),v.packages[g]=e}))).then(function(){return a.call(v,m,g,r,f)})}return h?a.call(v,m,h,r,f):(f&&(m+=".js"),m)}}c(function(e){return function(){e.call(this),this.packages={},this.packagePaths={}}});var s={},i={};l.prototype.normalizeSync=l.prototype.normalize,d("normalizeSync",function(e){return o(e,!0)}),d("normalize",function(e){return o(e,!1)}),d("locate",function(t){return function(n){var a=this;return Promise.resolve(t.call(this,n)).then(function(t){var o=e.call(a,n.name);if(o){var s=a.packages[o],i=r(s);if(s.format&&(n.metadata.format=n.metadata.format||s.format),s.loader&&(n.metadata.loader=n.metadata.loader||s.loader),s.meta){var l,u={},d=0;for(var c in s.meta){var f="./"==c.substr(0,2)?"./":"";if(f&&(c=c.substr(2)),l=c.indexOf("*"),-1!==l&&i+c.substr(0,l)===n.name.substr(o.length+1,l+i.length)&&c.substr(l+1)===n.name.substr(n.name.length-c.length+l+1)){var m=c.split("/").length;m>d&&(bestDetph=m),p(u,s.meta[f+c],d!=m)}}var h=n.name.substr(o.length+i.length+1),v=s.meta[h]||s.meta["./"+h];v&&n.name.substr(o.length+1,i.length)==i&&p(u,v),u.alias&&"./"==u.alias.substr(0,2)&&(u.alias=o+u.alias.substr(1)),u.loader&&"./"==u.loader.substr(0,2)&&(u.loader=o+u.loader.substr(1)),p(n.metadata,u)}}return t})}})}(),function(){function e(e,t,n,r){function a(e,t){return d&&".js"==e.substr(e.length-3,3)&&(e=e.substr(0,e.length-3)),o.pluginFirst?t+"!"+e:e+"!"+t}var o=this;if(n){var s;o.pluginFirst?-1!=(s=n.lastIndexOf("!"))&&(n=n.substr(s+1)):-1!=(s=n.indexOf("!"))&&(n=n.substr(0,s))}var i=t.lastIndexOf("!");if(-1!=i){var l,u;o.pluginFirst?(l=t.substr(i+1),u=t.substr(0,i)):(l=t.substr(0,i),u=t.substr(i+1)||l.substr(l.lastIndexOf(".")+1));var d=o.defaultJSExtensions&&".js"!=l.substr(l.length-3,3);return r?(l=o.normalizeSync(l,n),u=o.normalizeSync(u,n),a(l,u)):Promise.all([o.normalize(l,n),o.normalize(u,n)]).then(function(e){return a(e[0],e[1])})}return e.call(o,t,n)}d("normalize",function(t){return function(n,r){return e.call(this,t,n,r,!1)}}),d("normalizeSync",function(t){return function(n,r){return e.call(this,t,n,r,!0)}}),d("locate",function(e){return function(t){var n,r=this,a=t.name;return r.pluginFirst?-1!=(n=a.indexOf("!"))&&(t.metadata.loader=a.substr(0,n),t.name=a.substr(n+1)):-1!=(n=a.lastIndexOf("!"))&&(t.metadata.loader=a.substr(n+1),t.name=a.substr(0,n)),e.call(r,t).then(function(e){var n=t.metadata.loader;if(!n)return e;if(r.defined&&r.defined[a])return e;var o=r.pluginLoader||r;return o["import"](n).then(function(n){return t.metadata.loaderModule=n,t.address=e,n.locate?n.locate.call(r,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate?Promise.resolve(t.metadata.loaderModule.translate.call(n,t)).then(function(r){return"string"==typeof r&&(t.source=r),e.call(n,t)}):e.call(n,t)}}),d("instantiate",function(e){return function(t){var n=this,r=t.metadata.sourceMap;if(r&&"object"==typeof r){var a=t.name.split("!")[0];r.file=a+"!transpiled",r.sources&&1!=r.sources.length||(r.sources=[a]),t.metadata.sourceMap=JSON.stringify(r)}return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t)).then(function(r){return t.metadata.format="defined",t.metadata.execute=function(){return r},e.call(n,t)}):e.call(n,t)}})}(),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias,r=t.metadata.deps||[];return n?(t.metadata.format="defined",this.defined[t.name]={declarative:!0,deps:r.concat([n]),declare:function(e){return{setters:[function(t){for(var n in t)e(n,t[n])}],execute:function(){}}}},""):e.call(this,t)}})}(),function(){function e(e,t,n){for(var r,a=t.split(".");a.length>1;)r=a.shift(),e=e[r]=e[r]||{};r=a.shift(),r in e||(e[r]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,r=this.meta,a=t.name,o=0;for(var s in r)if(n=s.indexOf("*"),-1!==n&&s.substr(0,n)===a.substr(0,n)&&s.substr(n+1)===a.substr(a.length-s.length+n+1)){var i=s.split("/").length;i>o&&(bestDetph=i),p(t.metadata,r[s],o!=i)}return r[a]&&p(t.metadata,r[a]),
e.call(this,t)}});var t=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,n=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;d("translate",function(r){return function(a){var o=a.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,'"'==d||"'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)&&(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[]),a.metadata[f]instanceof Array?a.metadata[f].push(m):e(a.metadata,f,m)}else a.metadata[c]=!0}}return r.call(this,a)}})}(),function(){function e(e,t){return Promise.resolve(e.normalize(t)).then(function(n){return e.loadedBundles_[n]=!0,e.bundles[n]=e.bundles[n]||e.bundles[t],e.load(n)}).then(function(){return""})}c(function(e){return function(){e.call(this),this.bundles={},this.loadedBundles_={}}}),d("locate",function(e){return function(t){return(t.name in this.loadedBundles_||t.name in this.bundles)&&(t.metadata.bundle=!0),e.call(this,t)}}),d("fetch",function(t){return function(n){var r=this;if(r.trace||r.builder)return t.call(r,n);if(n.name in r.defined)return"";for(var a in r.loadedBundles_)if(-1!=S.call(r.bundles[a],n.name))return e(r,a);for(var a in r.bundles)if(-1!=S.call(r.bundles[a],n.name))return e(r,a);return t.call(r,n)}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,r=n.depCache[t.name];if(r)for(var a=0;a<r.length;a++)n["import"](r[a]);return e.call(n,t)}})}(),function(){var e=/#\{[^\}]+\}|#\?.+$/;c(function(e){return function(){e.call(this),this.set("@system-env",this.newModule({browser:b,node:!!this._nodeRequire}))}}),d("normalize",function(t){return function(n,r,a){var o=this,s=n.match(e);if(s){var i="?"!=s[0][1],l=i?s[0].substr(2,s[0].length-3):s[0].substr(2);if("."==l[0]||-1!=l.indexOf("/"))throw new TypeError("Invalid condition "+s[0]+"\n	Condition modules cannot contain . or / in the name.");var u,d=l.indexOf(".");-1!=d&&(u=l.substr(d+1),l=l.substr(0,d));var c=!i&&"~"==l[0];c&&(l=l.substr(1));var f=o.pluginLoader||o;return f["import"](l,r,a).then(function(e){return void 0===u?"string"==typeof e?e:e["default"]:v(u,e)}).then(function(s){if(i){if("string"!=typeof s)throw new TypeError("The condition value for "+l+" doesn't resolve to a string.");n=n.replace(e,s)}else{if("boolean"!=typeof s)throw new TypeError("The condition value for "+l+" isn't resolving to a boolean.");c&&(s=!s),n=s?n.replace(e,""):"@empty"}return t.call(o,n,r,a)})}return Promise.resolve(t.call(o,n,r,a))}})}(),P=new l,P.constructor=l,"object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,P||(P=new o,P.constructor=o),"object"==typeof exports&&(module.exports=P),e.System=P}("undefined"!=typeof self?self:global)}try{var t="undefined"!=typeof URLPolyfill||"test:"==new URL("test:///").protocol}catch(n){}if("undefined"!=typeof Promise&&t)e();else if("undefined"!=typeof document){var r=document.getElementsByTagName("script");$__curScript=r[r.length-1];var a=$__curScript.src,o=a.substr(0,a.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write('<script type="text/javascript" src="'+o+'system-polyfills.js"></script>')}else if("undefined"!=typeof importScripts){var o="";try{throw new Error("_")}catch(n){n.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){o=t.replace(/\/[^\/]*$/,"/")})}importScripts(o+"system-polyfills.js"),e()}else e()}();
//# sourceMappingURL=system-csp-production.js.map
