import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{L as o}from"./label-BhlulYsX.js";import{I as d}from"./input-96f9qOh5.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";const D={title:"Components/Forms/Label",component:o,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{children:"Email address"}},s={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{htmlFor:"email",children:"Email address"}),e.jsx(d,{id:"email",type:"email",placeholder:"Enter your email"})]})},a={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs(o,{htmlFor:"required",children:["Username ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(d,{id:"required",placeholder:"Enter username"})]})},t={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{htmlFor:"password",children:"Password"}),e.jsx(d,{id:"password",type:"password",placeholder:"Enter password"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Must be at least 8 characters long"})]})};var n,c,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Email address"
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,l,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="required">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input id="required" placeholder="Enter username" />
    </div>
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,y,E;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter password" />
      <p className="text-sm text-muted-foreground">Must be at least 8 characters long</p>
    </div>
}`,...(E=(y=t.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const S=["Default","WithInput","Required","WithDescription"];export{r as Default,a as Required,t as WithDescription,s as WithInput,S as __namedExportsOrder,D as default};
