import{k as g,Z as p,$ as c,d as m,J as f,K as v,B as u,a0 as b,a1 as k,b as x,c as y,G as h,L as S,t as _,N as z,r as A,o as C}from"./entry.f3c24f41.js";import{c as w,b as E}from"./index.6d1f5417.js";const $={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},r=p(c.ui.strategy,c.ui.kbd,$),I=m({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>r.default.size,validator(e){return Object.keys(r.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:a}=f("kbd",v(e,"ui"),r),s=u(()=>b(k(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:a,kbdClass:s}}});function N(e,t,a,s,d,n){return x(),y("kbd",z({class:e.kbdClass},e.attrs),[h(e.$slots,"default",{},()=>[S(_(e.value),1)])],16)}const B=g(I,[["render",N]]),j=()=>{const e=u(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),t=A(" "),a=E(),s=u(()=>{var n,o,i,l;return((n=a.value)==null?void 0:n.tagName)==="INPUT"||((o=a.value)==null?void 0:o.tagName)==="TEXTAREA"||((i=a.value)==null?void 0:i.contentEditable)==="true"?((l=a.value)==null?void 0:l.name)||!0:!1});return C(()=>{t.value=e.value?"⌘":"Ctrl"}),{macOS:e,metaSymbol:t,activeElement:a,usingInput:s}},M=w(j);export{B as _,M as u};
