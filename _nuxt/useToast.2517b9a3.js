import{m as a}from"./entry.f3c24f41.js";function r(){const i=a("notifications",()=>[]);function e(n){const t={id:new Date().getTime().toString(),...n};return i.value.findIndex(u=>u.id===t.id)===-1&&i.value.push(t),t}function o(n){i.value=i.value.filter(t=>t.id!==n)}return{add:e,remove:o}}export{r as u};
