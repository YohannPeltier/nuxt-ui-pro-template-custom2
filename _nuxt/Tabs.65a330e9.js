import{d as _,R as k,J as w,K as C,r as I,B,b as s,c as o,e as m,n as l,I as e,F as v,M as y,H as f,f as D,t as N,aa as S,ab as V,a9 as z,N as F,V as R}from"./entry.f3c24f41.js";const U=["onClick"],E=_({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{},class:{}},setup(g){const h={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},u=g,i=k(),{ui:r,attrs:x}=w("content.codeGroup",void 0,h,C(u,"class"),!0),p=I(u.selectedIndex||0),b=B(()=>{var d;return((d=i.default)==null?void 0:d.call(i).map((n,c)=>{var t,a;return{index:c,label:((t=n.props)==null?void 0:t.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return(d,n)=>{const c=R;return s(),o("div",F({class:e(r).wrapper},e(x)),[m("div",{class:l(e(r).header)},[m("div",{class:l(e(r).border)},null,2),(s(!0),o(v,null,y(e(b),(t,a)=>(s(),o("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:$=>p.value=a},[t.icon?(s(),f(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):D("",!0),m("span",null,N(t.label),1)],10,U))),128))],2),(s(!0),o(v,null,y(e(b),(t,a)=>S((s(),o("div",{key:a},[(s(),f(z(t.component)))])),[[V,e(p)===a]])),128))],16)}}});export{E as default};
