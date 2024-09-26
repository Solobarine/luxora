import{r as x,W as p,j as e}from"./app-CdyAb62z.js";import{L as d}from"./Layout-B-QGFrgH.js";import{I as r}from"./InputLabel-BTl4UXfk.js";import{T as g,I as f}from"./TextInput-C7J51bPa.js";import{P as j}from"./PrimaryButton-CnHliKmR.js";import{X as y}from"./transition-C5EDH36f.js";import"./Footer-CkGs-GPJ.js";const E=()=>{const s=x.useRef(null),{data:o,setData:n,errors:m,post:i,processing:t,reset:l,recentlySuccessful:c}=p({name:"",image:null}),u=a=>{a.preventDefault(),i(route("category.create"),{preserveScroll:!0,onSuccess:()=>l()})};return e.jsx(d,{children:e.jsxs("form",{onSubmit:u,className:"grid gap-3 max-w-5xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-semibold text-center",children:"Create a new Category"}),e.jsx(y,{show:c,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Category Saved Successfully"})}),e.jsxs("div",{children:[e.jsx(r,{htmlFor:"image",value:"Select a Category Image"}),e.jsx("input",{type:"file",name:"image",id:"image",ref:s})]}),e.jsxs("div",{className:"grid gap-1",children:[e.jsx(r,{htmlFor:"name",value:"Enter a Category Name"}),e.jsx(g,{id:"name",value:o.name,onChange:a=>n("name",a.target.value)}),e.jsx(f,{id:"name",message:m.name})]}),e.jsx(j,{disabled:t,className:"ml-auto block",children:t?"Please Wait...":"Create Category"})]})})};export{E as default};
