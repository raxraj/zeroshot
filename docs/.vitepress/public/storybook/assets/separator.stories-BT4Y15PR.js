import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{S as s}from"./separator-DezdiHno.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./utils-BLSKlp9E.js";const P={title:"Components/Layout/Separator",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the separator"}}},r={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Radix Primitives"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"An open-source UI component library."})]}),e.jsx(s,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Source"})]})]})},a={render:()=>e.jsxs("div",{className:"w-[300px] space-y-4",children:[e.jsx("div",{children:"Section 1"}),e.jsx(s,{}),e.jsx("div",{children:"Section 2"}),e.jsx(s,{}),e.jsx("div",{children:"Section 3"})]})},t={render:()=>e.jsxs("div",{className:"flex h-20 items-center space-x-4",children:[e.jsx("div",{children:"Item 1"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Item 2"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Item 3"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"Item 4"})]})},i={render:()=>e.jsxs("div",{className:"w-[350px] rounded-lg border p-6",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"font-semibold",children:"Account Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Manage your account preferences"})]}),e.jsx(s,{className:"my-4"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"text-sm",children:"Profile Information"}),e.jsx("div",{className:"text-sm",children:"Password & Security"}),e.jsx("div",{className:"text-sm",children:"Notifications"})]})]})};var n,o,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-4">
      <div>Section 1</div>
      <Separator />
      <div>Section 2</div>
      <Separator />
      <div>Section 3</div>
    </div>
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,v,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex h-20 items-center space-x-4">
      <div>Item 1</div>
      <Separator orientation="vertical" />
      <div>Item 2</div>
      <Separator orientation="vertical" />
      <div>Item 3</div>
      <Separator orientation="vertical" />
      <div>Item 4</div>
    </div>
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var u,h,j;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="w-[350px] rounded-lg border p-6">
      <div className="space-y-1">
        <h3 className="font-semibold">Account Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your account preferences</p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-3">
        <div className="text-sm">Profile Information</div>
        <div className="text-sm">Password & Security</div>
        <div className="text-sm">Notifications</div>
      </div>
    </div>
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const A=["Default","Horizontal","Vertical","InCard"];export{r as Default,a as Horizontal,i as InCard,t as Vertical,A as __namedExportsOrder,P as default};
