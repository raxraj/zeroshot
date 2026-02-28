import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{C as s}from"./checkbox-CDZo1C4O.js";import{L as r}from"./label-BhlulYsX.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-x8NkB57A.js";import"./index-BVduLaKl.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./index-Ck0Qw0kh.js";import"./index-xdNYasdH.js";import"./index-WyfESzTi.js";import"./index-n-b12q8t.js";import"./index-CbcPFHB_.js";import"./utils-BLSKlp9E.js";import"./check--MVdLoPp.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";const P={title:"Components/Forms/Checkbox",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"The checked state of the checkbox"},disabled:{control:"boolean",description:"Whether the checkbox is disabled"}}},a={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"terms"}),e.jsx(r,{htmlFor:"terms",children:"Accept terms and conditions"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"checked",defaultChecked:!0}),e.jsx(r,{htmlFor:"checked",children:"Checked by default"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled",disabled:!0}),e.jsx(r,{htmlFor:"disabled",children:"Disabled checkbox"})]})},d={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"disabled-checked",disabled:!0,defaultChecked:!0}),e.jsx(r,{htmlFor:"disabled-checked",children:"Disabled and checked"})]})},i={args:{}},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"item1",defaultChecked:!0}),e.jsx(r,{htmlFor:"item1",children:"Item 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"item2"}),e.jsx(r,{htmlFor:"item2",children:"Item 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(s,{id:"item3",defaultChecked:!0}),e.jsx(r,{htmlFor:"item3",children:"Item 3"})]})]})};var o,m,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var h,p,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Checked by default</Label>
    </div>
}`,...(x=(p=c.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var b,u,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled">Disabled checkbox</Label>
    </div>
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var f,C,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" disabled defaultChecked />
      <Label htmlFor="disabled-checked">Disabled and checked</Label>
    </div>
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,L,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {}
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var F,g,D;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="item1" defaultChecked />
        <Label htmlFor="item1">Item 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="item2" />
        <Label htmlFor="item2">Item 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="item3" defaultChecked />
        <Label htmlFor="item3">Item 3</Label>
      </div>
    </div>
}`,...(D=(g=l.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const Q=["Default","Checked","Disabled","DisabledChecked","WithoutLabel","Multiple"];export{c as Checked,a as Default,t as Disabled,d as DisabledChecked,l as Multiple,i as WithoutLabel,Q as __namedExportsOrder,P as default};
