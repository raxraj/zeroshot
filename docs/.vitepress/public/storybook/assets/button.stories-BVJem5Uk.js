import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{within as ie,userEvent as le,expect as de,fn as ue}from"./index-DgAF9SIF.js";import{B as r,L as me}from"./button-WnlYhIif.js";import{M as te}from"./mail-Ceh6d5_X.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./createLucideIcon-DEP7aKU9.js";const je={title:"Components/Forms/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon"]}}},a={args:{children:"Button",variant:"default"}},n={args:{children:"Delete",variant:"destructive"}},t={args:{children:"Outline",variant:"outline"}},s={args:{children:"Secondary",variant:"secondary"}},o={args:{children:"Ghost",variant:"ghost"}},c={args:{children:"Link",variant:"link"}},i={args:{children:"Small Button",size:"sm"}},l={args:{children:"Large Button",size:"lg"}},d={args:{children:"Disabled",disabled:!0}},u={render:()=>e.jsxs(r,{children:[e.jsx(te,{className:"mr-2 h-4 w-4"}),"Login with Email"]})},m={render:()=>e.jsx(r,{size:"icon",children:e.jsx(te,{className:"h-4 w-4"})})},p={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(me,{className:"mr-2 h-4 w-4 animate-spin"}),"Please wait"]})},g={args:{children:"Click me",onClick:ue()},play:async({args:se,canvasElement:oe})=>{const ce=ie(oe).getByRole("button");await le.click(ce),await de(se.onClick).toHaveBeenCalledTimes(1)}},h={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"link",children:"Link"})]}),parameters:{layout:"centered"}};var v,B,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default"
  }
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var S,y,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Delete",
    variant: "destructive"
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var k,w,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: "Outline",
    variant: "outline"
  }
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var j,D,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Secondary",
    variant: "secondary"
  }
}`,...(b=(D=s.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var C,E,O;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Ghost",
    variant: "ghost"
  }
}`,...(O=(E=o.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var N,z,G;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Link",
    variant: "link"
  }
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,I,M;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: "Small Button",
    size: "sm"
  }
}`,...(M=(I=i.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var W,R,T;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Large Button",
    size: "lg"
  }
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var A,P,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var _,F,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Button>
      <Mail className="mr-2 h-4 w-4" />
      Login with Email
    </Button>
}`,...(q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Button size="icon">
      <Mail className="h-4 w-4" />
    </Button>
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: "Click me",
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>,
  parameters: {
    layout: "centered"
  }
}`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const De=["Default","Destructive","Outline","Secondary","Ghost","Link","Small","Large","Disabled","WithIcon","IconOnly","Loading","WithClickHandler","AllVariants"];export{h as AllVariants,a as Default,n as Destructive,d as Disabled,o as Ghost,m as IconOnly,l as Large,c as Link,p as Loading,t as Outline,s as Secondary,i as Small,g as WithClickHandler,u as WithIcon,De as __namedExportsOrder,je as default};
