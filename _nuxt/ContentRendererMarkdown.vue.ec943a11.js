import{_ as p}from"./MDCRenderer.3eec35da.js";import{u as l}from"./preview.3e8c622f.js";import{d as m,B as o,b as i,H as v,I as b}from"./entry.f3c24f41.js";const x=m({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(a){const e=a,d=l().isEnabled(),r=o(()=>{let t=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(t=e.value.excerpt),t}),c=o(()=>{const{body:t,excerpt:s,...n}=e.value;return{...n,...e.data}}),u=o(()=>({...e.components,...c.value._components||{}}));return(t,s)=>{const n=p;return i(),v(n,{body:r.value,data:c.value,tag:a.tag,components:u.value,"data-content-id":b(d)?a.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{x as _};