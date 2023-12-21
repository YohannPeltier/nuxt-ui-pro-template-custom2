import{ar as I,as as H,at as B,I as N,r as h,au as _,E as W,av as V,aw as X,B as $,ax as Y,aj as k,o as G}from"./entry.b0d557ad.js";function Q(e,n){let t,u,r;const o=h(!0),s=()=>{o.value=!0,r()};W(e,s,{flush:"sync"});const i=typeof n=="function"?n:n.get,a=typeof n=="function"?void 0:n.set,l=V((c,f)=>(u=c,r=f,{get(){return o.value&&(t=i(),o.value=!1),u(),t},set(d){a==null||a(d)}}));return Object.isExtensible(l)&&(l.trigger=s),l}function E(e){return H()?(B(e),!0):!1}function ce(e){let n=0,t,u;const r=()=>{n-=1,u&&n<=0&&(u.stop(),t=void 0,u=void 0)};return(...o)=>(n+=1,t||(u=I(!0),t=u.run(()=>e(...o))),E(r),t)}function g(e){return typeof e=="function"?e():N(e)}const O=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const U=Object.prototype.toString,z=e=>U.call(e)==="[object Object]",L=()=>+Date.now(),M=()=>{};function P(e,n){function t(...u){return new Promise((r,o)=>{Promise.resolve(e(()=>n.apply(this,u),{fn:n,thisArg:this,args:u})).then(r).catch(o)})}return t}const J=e=>e();function K(e,n={}){let t,u,r=M;const o=i=>{clearTimeout(i),r(),r=M};return i=>{const a=g(e),l=g(n.maxWait);return t&&o(t),a<=0||l!==void 0&&l<=0?(u&&(o(u),u=null),Promise.resolve(i())):new Promise((c,f)=>{r=n.rejectOnCancel?f:c,l&&!u&&(u=setTimeout(()=>{t&&o(t),u=null,c(i())},l)),t=setTimeout(()=>{u&&o(u),u=null,c(i())},a)})}}function Z(e,n=!0,t=!0,u=!1){let r=0,o,s=!0,i=M,a;const l=()=>{o&&(clearTimeout(o),o=void 0,i(),i=M)};return f=>{const d=g(e),p=Date.now()-r,y=()=>a=f();return l(),d<=0?(r=Date.now(),y()):(p>d&&(t||!s)?(r=Date.now(),y()):n&&(a=new Promise((x,T)=>{i=u?T:x,o=setTimeout(()=>{r=Date.now(),s=!0,x(y()),l()},Math.max(0,d-p))})),!t&&!o&&(o=setTimeout(()=>s=!0,d)),s=!1,a)}}function ee(e){let n;function t(){return n||(n=e()),n}return t.reset=async()=>{const u=n;n=void 0,u&&await u},t}function te(e,n){var t;if(typeof e=="number")return e+n;const u=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",r=e.slice(u.length),o=Number.parseFloat(u)+n;return Number.isNaN(o)?e:o+r}function fe(e,n=200,t={}){return P(K(n,t),e)}function ne(e,n,t={}){const{eventFilter:u=J,...r}=t;return W(e,P(u,n),r)}function re(e,n=1e3,t={}){const{immediate:u=!0,immediateCallback:r=!1}=t;let o=null;const s=h(!1);function i(){o&&(clearInterval(o),o=null)}function a(){s.value=!1,i()}function l(){const c=g(n);c<=0||(s.value=!0,r&&e(),i(),o=setInterval(e,c))}if(u&&O&&l(),X(n)||typeof n=="function"){const c=W(n,()=>{s.value&&O&&l()});E(c)}return E(a),{isActive:s,pause:a,resume:l}}function oe(e,n,t={}){const{immediate:u=!0}=t,r=h(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function i(){r.value=!1,s()}function a(...l){s(),r.value=!0,o=setTimeout(()=>{r.value=!1,o=null,e(...l)},g(n))}return u&&(r.value=!0,O&&a()),E(i),{isPending:_(r),start:a,stop:i}}function de(e,n,t={}){const{throttle:u=0,trailing:r=!0,leading:o=!0,...s}=t;return ne(e,n,{...s,eventFilter:Z(u,r,o)})}function ie(e){var n;const t=g(e);return(n=t==null?void 0:t.$el)!=null?n:t}const F=O?window:void 0,D=O?window.navigator:void 0;function b(...e){let n,t,u,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,u,r]=e,n=F):[n,t,u,r]=e,!n)return M;Array.isArray(t)||(t=[t]),Array.isArray(u)||(u=[u]);const o=[],s=()=>{o.forEach(c=>c()),o.length=0},i=(c,f,d,p)=>(c.addEventListener(f,d,p),()=>c.removeEventListener(f,d,p)),a=W(()=>[ie(n),g(r)],([c,f])=>{if(s(),!c)return;const d=z(f)?{...f}:f;o.push(...t.flatMap(p=>u.map(y=>i(c,p,y,d))))},{immediate:!0,flush:"post"}),l=()=>{a(),s()};return E(l),l}function me(e={}){var n;const{window:t=F,deep:u=!0}=e,r=(n=e.document)!=null?n:t==null?void 0:t.document,o=()=>{var i;let a=r==null?void 0:r.activeElement;if(u)for(;a!=null&&a.shadowRoot;)a=(i=a==null?void 0:a.shadowRoot)==null?void 0:i.activeElement;return a},s=Q(()=>null,()=>o());return t&&(b(t,"blur",i=>{i.relatedTarget===null&&s.trigger()},!0),b(t,"focus",s.trigger,!0)),s}function ue(){const e=h(!1);return k()&&G(()=>{e.value=!0}),e}function j(e){const n=ue();return $(()=>(n.value,!!e()))}function ae(e,n={}){const{immediate:t=!0,fpsLimit:u=void 0,window:r=F}=n,o=h(!1),s=u?1e3/u:null;let i=0,a=null;function l(d){if(!o.value||!r)return;const p=d-(i||d);if(s&&p<s){a=r.requestAnimationFrame(l);return}e({delta:p,timestamp:d}),i=d,a=r.requestAnimationFrame(l)}function c(){!o.value&&r&&(o.value=!0,a=r.requestAnimationFrame(l))}function f(){o.value=!1,a!=null&&r&&(r.cancelAnimationFrame(a),a=null)}return t&&c(),E(f),{isActive:_(o),pause:f,resume:c}}function A(e,n={}){const{window:t=F}=n,u=j(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const o=h(!1),s=l=>{o.value=l.matches},i=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},a=Y(()=>{u.value&&(i(),r=t.matchMedia(g(e)),"addEventListener"in r?r.addEventListener("change",s):r.addListener(s),o.value=r.matches)});return E(()=>{a(),i(),r=void 0}),o}function pe(e,n={}){function t(i,a){let l=g(e[i]);return a!=null&&(l=te(l,a)),typeof l=="number"&&(l=`${l}px`),l}const{window:u=F}=n;function r(i){return u?u.matchMedia(i).matches:!1}const o=i=>A(()=>`(min-width: ${t(i)})`,n),s=Object.keys(e).reduce((i,a)=>(Object.defineProperty(i,a,{get:()=>o(a),enumerable:!0,configurable:!0}),i),{});return Object.assign(s,{greater(i){return A(()=>`(min-width: ${t(i,.1)})`,n)},greaterOrEqual:o,smaller(i){return A(()=>`(max-width: ${t(i,-.1)})`,n)},smallerOrEqual(i){return A(()=>`(max-width: ${t(i)})`,n)},between(i,a){return A(()=>`(min-width: ${t(i)}) and (max-width: ${t(a,-.1)})`,n)},isGreater(i){return r(`(min-width: ${t(i,.1)})`)},isGreaterOrEqual(i){return r(`(min-width: ${t(i)})`)},isSmaller(i){return r(`(max-width: ${t(i,-.1)})`)},isSmallerOrEqual(i){return r(`(max-width: ${t(i)})`)},isInBetween(i,a){return r(`(min-width: ${t(i)}) and (max-width: ${t(a,-.1)})`)},current(){const i=Object.keys(e).map(a=>[a,o(a)]);return $(()=>i.filter(([,a])=>a.value).map(([a])=>a))}})}function q(e,n={}){const{controls:t=!1,navigator:u=D}=n,r=j(()=>u&&"permissions"in u);let o;const s=typeof e=="string"?{name:e}:e,i=h(),a=()=>{o&&(i.value=o.state)},l=ee(async()=>{if(r.value){if(!o)try{o=await u.permissions.query(s),b(o,"change",a),a()}catch{i.value="prompt"}return o}});return l(),t?{state:i,isSupported:r,query:l}:i}function ve(e={}){const{navigator:n=D,read:t=!1,source:u,copiedDuring:r=1500,legacy:o=!1}=e,s=j(()=>n&&"clipboard"in n),i=q("clipboard-read"),a=q("clipboard-write"),l=$(()=>s.value||o),c=h(""),f=h(!1),d=oe(()=>f.value=!1,r);function p(){s.value&&i.value!=="denied"?n.clipboard.readText().then(v=>{c.value=v}):c.value=T()}l.value&&t&&b(["copy","cut"],p);async function y(v=g(u)){l.value&&v!=null&&(s.value&&a.value!=="denied"?await n.clipboard.writeText(v):x(v),c.value=v,f.value=!0,d.start())}function x(v){const w=document.createElement("textarea");w.value=v??"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function T(){var v,w,C;return(C=(w=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:w.toString())!=null?C:""}return{isSupported:l,text:c,copied:f,copy:y}}const se={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function he(e={}){const{type:n="page",touch:t=!0,resetOnTouchEnds:u=!1,initialValue:r={x:0,y:0},window:o=F,target:s=o,scroll:i=!0,eventFilter:a}=e;let l=null;const c=h(r.x),f=h(r.y),d=h(null),p=typeof n=="function"?n:se[n],y=m=>{const S=p(m);l=m,S&&([c.value,f.value]=S,d.value="mouse")},x=m=>{if(m.touches.length>0){const S=p(m.touches[0]);S&&([c.value,f.value]=S,d.value="touch")}},T=()=>{if(!l||!o)return;const m=p(l);l instanceof MouseEvent&&m&&(c.value=m[0]+o.scrollX,f.value=m[1]+o.scrollY)},v=()=>{c.value=r.x,f.value=r.y},w=a?m=>a(()=>y(m),{}):m=>y(m),C=a?m=>a(()=>x(m),{}):m=>x(m),R=a?()=>a(()=>T(),{}):()=>T();if(s){const m={passive:!0};b(s,["mousemove","dragover"],w,m),t&&n!=="movement"&&(b(s,["touchstart","touchmove"],C,m),u&&b(s,"touchend",v,m)),i&&n==="page"&&b(o,"scroll",R,{passive:!0})}return{x:c,y:f,sourceType:d}}function we(e={}){const{controls:n=!1,offset:t=0,immediate:u=!0,interval:r="requestAnimationFrame",callback:o}=e,s=h(L()+t),i=()=>s.value=L()+t,a=o?()=>{i(),o(s.value)}:i,l=r==="requestAnimationFrame"?ae(a,{immediate:u}):re(a,r,{immediate:u});return n?{timestamp:s,...l}:s}export{ie as a,me as b,ce as c,F as d,ve as e,we as f,fe as g,b as h,pe as i,g as t,he as u,de as w};