import{r as d,j as e,y as v,a as k,b as w}from"./app-CdyAb62z.js";import{L as C}from"./Layout-B-QGFrgH.js";import S from"./Product-Or_elBDK.js";import"./Footer-CkGs-GPJ.js";import"./PrimaryButton-CnHliKmR.js";import"./product-Bp7SpGmX.js";const F=({cart:j})=>{const{items:u}=j,[i,o]=d.useState(u),[x,g]=d.useState(null),[f,p]=d.useState(null),c=(a,l)=>{console.log(a),o(s=>s.map(t=>t.product_id===a?{...t,quantity:l}:t))},N=async a=>w.get(route("product.get",a)).then(l=>g(l.data)),m=()=>i.reduce((a,{product:l,quantity:s})=>a+l.price*s,0);return e.jsx(C,{children:e.jsxs("div",{className:"relative container mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Shopping Cart"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"col-span-2",children:[i.length>0?i.map(({id:a,product_id:l,product:s,picks:t,quantity:r},y)=>e.jsxs("div",{className:"flex justify-between items-center mb-4 border-b pb-4",children:[e.jsx("img",{src:(s==null?void 0:s.images)&&s.images[0].image_url,alt:s==null?void 0:s.name,className:"w-24 h-24 object-cover"}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsx("h2",{className:"text-lg font-semibold",children:s==null?void 0:s.name}),e.jsxs("p",{className:"text-sm",children:["Price: $",s==null?void 0:s.price]}),e.jsx("div",{className:"flex items-center gap-1 text-sm font-semibold bg-gray-200 dark:bg-gray-900 max-w-fit min-w-20 p-1 rounded-full hover:bg-gray-300 hover:dark:bg-gray-950 cursor-pointer",onClick:()=>{p(a),N(s.id)},children:t.map(({name:n,value:b},h)=>n.toLowerCase()==="colors"?e.jsx("span",{className:"block w-4 aspect-square rounded-full",style:{backgroundColor:b}},h):e.jsx("span",{children:b},h))}),e.jsxs("div",{className:"flex items-center mt-2",children:[e.jsx("button",{className:"px-2 py-1 text-sm bg-gray-300 dark:bg-gray-900 rounded-l",onClick:()=>c(l,r-1),disabled:r===1,children:"-"}),e.jsx("input",{type:"number",value:r,onChange:n=>c(l,Number(n.target.value)),className:"w-12 text-center border-gray-900 rounded-md bg-white dark:bg-gray-800"}),e.jsx("button",{className:"px-2 py-1 text-sm bg-gray-300 rounded-r dark:bg-gray-900",onClick:()=>c(l,r+1),children:"+"})]})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("p",{className:"font-semibold",children:["$",s.price*r]}),e.jsx("button",{className:"ml-4 text-red-500",onClick:()=>v.delete(route("cart.remove_item",a),{onSuccess:()=>o(i.filter(n=>n.product_id!==s.id))}),children:e.jsx("i",{className:"bx bx-trash"})})]})]},y)):e.jsx("p",{children:"Your cart is empty."}),e.jsx(k,{href:"/marketplace",className:"mt-4 text-blue-500 hover:underline",children:"Continue Shopping"})]}),e.jsxs("div",{className:"p-4 bg-gray-100 dark:bg-gray-900 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Order Summary"}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("p",{children:"Subtotal"}),e.jsxs("p",{children:["$",m()]})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("p",{children:"Tax (10%)"}),e.jsxs("p",{children:["$",(m()*.1).toFixed(2)]})]}),e.jsxs("div",{className:"flex justify-between font-bold text-lg",children:[e.jsx("p",{children:"Total"}),e.jsxs("p",{children:["$",(m()*1.1).toFixed(2)]})]}),e.jsx("button",{className:"w-full bg-blue-500 text-white py-2 mt-4 rounded-lg",children:"Proceed to Checkout"})]})]}),x&&e.jsx(S,{itemId:f,product:x,setProduct:g})]})})};export{F as default};
