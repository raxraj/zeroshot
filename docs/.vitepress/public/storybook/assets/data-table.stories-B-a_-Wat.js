import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T as x,b as y,c as m,d as f,e as T,f as w}from"./table-CT3DqNl1.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BLSKlp9E.js";function o({columns:a,data:l,getRowKey:d,className:p="",emptyMessage:b="No data available"}){const h=(r,n)=>d?d(r,n):n;return l.length===0?e.jsx("div",{className:"rounded-xl bg-card border border-border p-12 text-center",children:e.jsx("p",{className:"text-muted-foreground",children:b})}):e.jsx("div",{className:`rounded-xl bg-card border border-border overflow-hidden ${p}`,children:e.jsxs(x,{children:[e.jsx(y,{children:e.jsx(m,{children:a.map(r=>e.jsx(f,{className:r.headerClassName,children:r.header},r.key))})}),e.jsx(T,{children:l.map((r,n)=>e.jsx(m,{children:a.map(s=>e.jsx(w,{className:s.cellClassName,children:s.render(r,n)},s.key))},h(r,n)))})]})})}o.__docgenInfo={description:`Reusable data table component

@example
\`\`\`tsx
<DataTable
  columns={[
    {
      key: 'name',
      header: 'Name',
      render: (row) => row.name
    },
    {
      key: 'status',
      header: 'Status',
      render: (row) => <Badge>{row.status}</Badge>
    }
  ]}
  data={items}
  getRowKey={(row) => row.id}
/>
\`\`\``,methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataTableColumn",elements:[{name:"T"}],raw:"DataTableColumn<T>"}],raw:"DataTableColumn<T>[]"},description:"Array of column definitions"},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"Array of data rows"},getRowKey:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => string | number",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:`Optional function to get a unique key for each row
Defaults to using the row index`},className:{required:!1,tsType:{name:"string"},description:"Optional className for the table container",defaultValue:{value:"''",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Optional empty state message",defaultValue:{value:"'No data available'",computed:!1}}}};const q={title:"Components/Display/DataTable",component:o,parameters:{layout:"centered"},tags:["autodocs"]},g=[{key:"id",header:"ID",render:a=>a.id},{key:"name",header:"Name",render:a=>a.name},{key:"email",header:"Email",render:a=>a.email},{key:"role",header:"Role",render:a=>a.role}],j=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Editor"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Viewer"},{id:4,name:"Alice Williams",email:"alice@example.com",role:"Editor"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"Viewer"}],t={render:()=>e.jsx("div",{className:"w-[700px]",children:e.jsx(o,{columns:g,data:j})})};var i,c,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="w-[700px]">
      <DataTable columns={columns} data={data} />
    </div>
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,q as default};
