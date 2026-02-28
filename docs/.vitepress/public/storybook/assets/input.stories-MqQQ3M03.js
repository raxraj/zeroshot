import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{within as X,userEvent as Y,expect as h,fn as Z}from"./index-DgAF9SIF.js";import{I as a}from"./input-96f9qOh5.js";import{L as $}from"./label-BhlulYsX.js";import{S as ee}from"./search-C-UEa-iZ.js";import{M as ae}from"./mail-Ceh6d5_X.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BLSKlp9E.js";import"./index-Bvak3XBe.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEP7aKU9.js";const ye={title:"Components/Forms/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{placeholder:"Enter text..."}},s={args:{value:"Sample text",placeholder:"Enter text..."}},t={args:{placeholder:"Disabled input",disabled:!0}},o={args:{type:"email",placeholder:"Enter your email..."}},l={args:{type:"password",placeholder:"Enter password..."}},n={args:{type:"number",placeholder:"Enter a number..."}},p={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx($,{htmlFor:"email",children:"Email"}),e.jsx(a,{type:"email",id:"email",placeholder:"Email"})]})},c={render:()=>e.jsxs("div",{className:"relative w-full max-w-sm",children:[e.jsx(ee,{className:"absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"}),e.jsx(a,{placeholder:"Search...",className:"pl-8"})]})},m={render:()=>e.jsxs("div",{className:"relative w-full max-w-sm",children:[e.jsx(ae,{className:"absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"}),e.jsx(a,{type:"email",placeholder:"Email address",className:"pl-8"})]})},i={args:{placeholder:"Type something...",onChange:Z()},play:async({args:K,canvasElement:Q})=>{const u=X(Q).getByPlaceholderText("Type something...");await Y.type(u,"Hello World"),await h(u).toHaveValue("Hello World"),await h(K.onChange).toHaveBeenCalled()}},d={render:()=>e.jsxs("div",{className:"w-full max-w-sm space-y-4",children:[e.jsx(a,{type:"text",placeholder:"Text input"}),e.jsx(a,{type:"email",placeholder:"Email input"}),e.jsx(a,{type:"password",placeholder:"Password input"}),e.jsx(a,{type:"number",placeholder:"Number input"}),e.jsx(a,{type:"search",placeholder:"Search input"}),e.jsx(a,{type:"tel",placeholder:"Phone input"}),e.jsx(a,{type:"url",placeholder:"URL input"})]}),parameters:{layout:"centered"}};var x,g,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text..."
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,v,f;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: "Sample text",
    placeholder: "Enter text..."
  }
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var E,b,S;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var N,j,I;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Enter your email..."
  }
}`,...(I=(j=o.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var W,T,H;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password..."
  }
}`,...(H=(T=l.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,P,C;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "Enter a number..."
  }
}`,...(C=(P=n.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var D,B,V;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...(V=(B=p.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var F,M,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="relative w-full max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-8" />
    </div>
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var A,U,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="relative w-full max-w-sm">
      <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="email" placeholder="Email address" className="pl-8" />
    </div>
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var O,k,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: "Type something...",
    onChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Type something...");
    await userEvent.type(input, "Hello World");
    await expect(input).toHaveValue("Hello World");
    await expect(args.onChange).toHaveBeenCalled();
  }
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,G,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm space-y-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="search" placeholder="Search input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
    </div>,
  parameters: {
    layout: "centered"
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const we=["Default","WithValue","Disabled","Email","Password","Number","WithLabel","WithIcon","WithSearchIcon","WithInteraction","AllTypes"];export{d as AllTypes,r as Default,t as Disabled,o as Email,n as Number,l as Password,c as WithIcon,i as WithInteraction,p as WithLabel,m as WithSearchIcon,s as WithValue,we as __namedExportsOrder,ye as default};
