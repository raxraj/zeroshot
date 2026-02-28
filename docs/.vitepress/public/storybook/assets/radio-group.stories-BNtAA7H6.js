import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as n}from"./index-pP6CS22B.js";import{P as I,c as L}from"./index-D-hjI41K.js";import{u as C}from"./index-x8NkB57A.js";import{c as q}from"./index-BVduLaKl.js";import{R as ie,I as ne,c as W}from"./index-CkPwm_CN.js";import{u as ce}from"./index-Ck0Qw0kh.js";import{u as de}from"./index-C7OyeuXp.js";import{u as le}from"./index-n-b12q8t.js";import{u as pe}from"./index-WyfESzTi.js";import{P as me}from"./index-CbcPFHB_.js";import{c as K}from"./utils-BLSKlp9E.js";import{C as ue}from"./circle-BSMPx0LR.js";import{L as u}from"./label-BhlulYsX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-CYVZouvf.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-DSMx10ar.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";var _="Radio",[fe,U]=q(_),[xe,ve]=fe(_),z=n.forwardRef((a,t)=>{const{__scopeRadio:o,name:l,checked:r=!1,required:s,disabled:c,value:x="on",onCheck:p,form:v,...h}=a,[f,R]=n.useState(null),i=C(t,j=>R(j)),m=n.useRef(!1),N=f?v||!!f.closest("form"):!0;return e.jsxs(xe,{scope:o,checked:r,disabled:c,children:[e.jsx(I.button,{type:"button",role:"radio","aria-checked":r,"data-state":J(r),"data-disabled":c?"":void 0,disabled:c,value:x,...h,ref:i,onClick:L(a.onClick,j=>{r||p==null||p(),N&&(m.current=j.isPropagationStopped(),m.current||j.stopPropagation())})}),N&&e.jsx(Y,{control:f,bubbles:!m.current,name:l,value:x,checked:r,required:s,disabled:c,form:v,style:{transform:"translateX(-100%)"}})]})});z.displayName=_;var H="RadioIndicator",X=n.forwardRef((a,t)=>{const{__scopeRadio:o,forceMount:l,...r}=a,s=ve(H,o);return e.jsx(me,{present:l||s.checked,children:e.jsx(I.span,{"data-state":J(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:t})})});X.displayName=H;var he="RadioBubbleInput",Y=n.forwardRef(({__scopeRadio:a,control:t,checked:o,bubbles:l=!0,...r},s)=>{const c=n.useRef(null),x=C(c,s),p=pe(o),v=le(t);return n.useEffect(()=>{const h=c.current;if(!h)return;const f=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(f,"checked").set;if(p!==o&&i){const m=new Event("click",{bubbles:l});i.call(h,o),h.dispatchEvent(m)}},[p,o,l]),e.jsx(I.input,{type:"radio","aria-hidden":!0,defaultChecked:o,...r,tabIndex:-1,ref:x,style:{...r.style,...v,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});Y.displayName=he;function J(a){return a?"checked":"unchecked"}var Re=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],F="RadioGroup",[be]=q(F,[W,U]),Q=W(),Z=U(),[Ne,je]=be(F),ee=n.forwardRef((a,t)=>{const{__scopeRadioGroup:o,name:l,defaultValue:r,value:s,required:c=!1,disabled:x=!1,orientation:p,dir:v,loop:h=!0,onValueChange:f,...R}=a,i=Q(o),m=de(v),[N,j]=ce({prop:s,defaultProp:r??null,onChange:f,caller:F});return e.jsx(Ne,{scope:o,name:l,required:c,disabled:x,value:N,onValueChange:j,children:e.jsx(ie,{asChild:!0,...i,orientation:p,dir:m,loop:h,children:e.jsx(I.div,{role:"radiogroup","aria-required":c,"aria-orientation":p,"data-disabled":x?"":void 0,dir:m,...R,ref:t})})})});ee.displayName=F;var oe="RadioGroupItem",re=n.forwardRef((a,t)=>{const{__scopeRadioGroup:o,disabled:l,...r}=a,s=je(oe,o),c=s.disabled||l,x=Q(o),p=Z(o),v=n.useRef(null),h=C(t,v),f=s.value===r.value,R=n.useRef(!1);return n.useEffect(()=>{const i=N=>{Re.includes(N.key)&&(R.current=!0)},m=()=>R.current=!1;return document.addEventListener("keydown",i),document.addEventListener("keyup",m),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keyup",m)}},[]),e.jsx(ne,{asChild:!0,...x,focusable:!c,active:f,children:e.jsx(z,{disabled:c,required:s.required,checked:f,...p,...r,name:s.name,ref:h,onCheck:()=>s.onValueChange(r.value),onKeyDown:L(i=>{i.key==="Enter"&&i.preventDefault()}),onFocus:L(r.onFocus,()=>{var i;R.current&&((i=v.current)==null||i.click())})})})});re.displayName=oe;var ye="RadioGroupIndicator",ae=n.forwardRef((a,t)=>{const{__scopeRadioGroup:o,...l}=a,r=Z(o);return e.jsx(X,{...r,...l,ref:t})});ae.displayName=ye;var te=ee,se=re,ge=ae;const b=n.forwardRef(({className:a,...t},o)=>e.jsx(te,{className:K("grid gap-2",a),...t,ref:o}));b.displayName=te.displayName;const d=n.forwardRef(({className:a,...t},o)=>e.jsx(se,{ref:o,className:K("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),...t,children:e.jsx(ge,{className:"flex items-center justify-center",children:e.jsx(ue,{className:"h-2.5 w-2.5 fill-current text-current"})})}));d.displayName=se.displayName;b.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[]};const ze={title:"Components/Forms/RadioGroup",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Whether the radio group is disabled"}}},y={render:()=>e.jsxs(b,{defaultValue:"option-one",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"option-one",id:"option-one"}),e.jsx(u,{htmlFor:"option-one",children:"Option One"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"option-two",id:"option-two"}),e.jsx(u,{htmlFor:"option-two",children:"Option Two"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"option-three",id:"option-three"}),e.jsx(u,{htmlFor:"option-three",children:"Option Three"})]})]})},g={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{children:e.jsx("label",{className:"text-sm font-medium",children:"Choose your plan"})}),e.jsxs(b,{defaultValue:"pro",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"free",id:"free"}),e.jsx(u,{htmlFor:"free",children:"Free - $0/month"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"pro",id:"pro"}),e.jsx(u,{htmlFor:"pro",children:"Pro - $10/month"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"enterprise",id:"enterprise"}),e.jsx(u,{htmlFor:"enterprise",children:"Enterprise - $50/month"})]})]})]})},w={render:()=>e.jsxs(b,{defaultValue:"option-one",disabled:!0,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"option-one",id:"d-option-one"}),e.jsx(u,{htmlFor:"d-option-one",children:"Option One"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{value:"option-two",id:"d-option-two"}),e.jsx(u,{htmlFor:"d-option-two",children:"Option Two"})]})]})},G={render:()=>e.jsxs(b,{defaultValue:"comfortable",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(d,{value:"compact",id:"compact",className:"mt-1"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(u,{htmlFor:"compact",children:"Compact"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Fits more content on screen"})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(d,{value:"comfortable",id:"comfortable",className:"mt-1"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(u,{htmlFor:"comfortable",children:"Comfortable"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Balanced spacing and readability"})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(d,{value:"spacious",id:"spacious",className:"mt-1"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(u,{htmlFor:"spacious",children:"Spacious"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Maximum spacing for clarity"})]})]})]})};var E,P,O;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
}`,...(O=(P=y.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var S,k,D;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <div>
        <label className="text-sm font-medium">Choose your plan</label>
      </div>
      <RadioGroup defaultValue="pro">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="free" id="free" />
          <Label htmlFor="free">Free - $0/month</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pro" id="pro" />
          <Label htmlFor="pro">Pro - $10/month</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label htmlFor="enterprise">Enterprise - $50/month</Label>
        </div>
      </RadioGroup>
    </div>
}`,...(D=(k=g.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var A,V,T;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d-option-one" />
        <Label htmlFor="d-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d-option-two" />
        <Label htmlFor="d-option-two">Option Two</Label>
      </div>
    </RadioGroup>
}`,...(T=(V=w.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var M,B,$;G.parameters={...G.parameters,docs:{...(M=G.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="comfortable">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="compact" id="compact" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="compact">Compact</Label>
          <p className="text-sm text-muted-foreground">Fits more content on screen</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="comfortable" id="comfortable" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="comfortable">Comfortable</Label>
          <p className="text-sm text-muted-foreground">Balanced spacing and readability</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="spacious" id="spacious" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="spacious">Spacious</Label>
          <p className="text-sm text-muted-foreground">Maximum spacing for clarity</p>
        </div>
      </div>
    </RadioGroup>
}`,...($=(B=G.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};const He=["Default","WithLabel","Disabled","WithDescriptions"];export{y as Default,w as Disabled,G as WithDescriptions,g as WithLabel,He as __namedExportsOrder,ze as default};
