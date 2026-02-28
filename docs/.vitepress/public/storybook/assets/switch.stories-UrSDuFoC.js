import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{within as fe,userEvent as B,expect as M,fn as be}from"./index-DgAF9SIF.js";import{r as n}from"./index-pP6CS22B.js";import{P as ne,c as xe}from"./index-D-hjI41K.js";import{u as ce}from"./index-x8NkB57A.js";import{c as ve}from"./index-BVduLaKl.js";import{u as we}from"./index-Ck0Qw0kh.js";import{u as ge}from"./index-WyfESzTi.js";import{u as ke}from"./index-n-b12q8t.js";import{c as F}from"./utils-BLSKlp9E.js";import{L as p}from"./label-BhlulYsX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-xdNYasdH.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";var y="Switch",[Ce]=ve(y),[Se,je]=Ce(y),oe=n.forwardRef((t,a)=>{const{__scopeSwitch:s,name:r,checked:o,defaultChecked:N,required:l,disabled:i,value:m="on",onCheckedChange:E,form:d,...L}=t,[u,h]=n.useState(null),R=ce(a,b=>h(b)),P=n.useRef(!1),_=u?d||!!u.closest("form"):!0,[f,ue]=we({prop:o,defaultProp:N??!1,onChange:E,caller:y});return e.jsxs(Se,{scope:s,checked:f,disabled:i,children:[e.jsx(ne.button,{type:"button",role:"switch","aria-checked":f,"aria-required":l,"data-state":me(f),"data-disabled":i?"":void 0,disabled:i,value:m,...L,ref:R,onClick:xe(t.onClick,b=>{ue(he=>!he),_&&(P.current=b.isPropagationStopped(),P.current||b.stopPropagation())})}),_&&e.jsx(le,{control:u,bubbles:!P.current,name:r,value:m,checked:f,required:l,disabled:i,form:d,style:{transform:"translateX(-100%)"}})]})});oe.displayName=y;var ie="SwitchThumb",de=n.forwardRef((t,a)=>{const{__scopeSwitch:s,...r}=t,o=je(ie,s);return e.jsx(ne.span,{"data-state":me(o.checked),"data-disabled":o.disabled?"":void 0,...r,ref:a})});de.displayName=ie;var ye="SwitchBubbleInput",le=n.forwardRef(({__scopeSwitch:t,control:a,checked:s,bubbles:r=!0,...o},N)=>{const l=n.useRef(null),i=ce(l,N),m=ge(s),E=ke(a);return n.useEffect(()=>{const d=l.current;if(!d)return;const L=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(L,"checked").set;if(m!==s&&h){const R=new Event("click",{bubbles:r});h.call(d,s),d.dispatchEvent(R)}},[m,s,r]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s,...o,tabIndex:-1,ref:i,style:{...o.style,...E,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});le.displayName=ye;function me(t){return t?"checked":"unchecked"}var pe=oe,Ne=de;const c=n.forwardRef(({className:t,...a},s)=>e.jsx(pe,{className:F("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",t),...a,ref:s,children:e.jsx(Ne,{className:F("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));c.displayName=pe.displayName;c.__docgenInfo={description:"",methods:[]};const qe={title:"Components/Forms/Switch",component:c,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{}},v={args:{checked:!0}},w={args:{disabled:!0}},g={args:{disabled:!0,checked:!0}},k={render:()=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(c,{id:"airplane-mode"}),e.jsx(p,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},C={render:()=>e.jsxs("div",{className:"flex items-center justify-between space-x-4 w-[350px]",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(p,{htmlFor:"marketing",children:"Marketing emails"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Receive emails about new products and features."})]}),e.jsx(c,{id:"marketing"})]})},S={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(p,{htmlFor:"s1",children:"Notifications"}),e.jsx(c,{id:"s1"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(p,{htmlFor:"s2",children:"Email Updates"}),e.jsx(c,{id:"s2",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(p,{htmlFor:"s3",children:"SMS Alerts"}),e.jsx(c,{id:"s3"})]})]})},j={args:{onCheckedChange:be()},play:async({args:t,canvasElement:a})=>{const r=fe(a).getByRole("switch");await B.click(r),await M(t.onCheckedChange).toHaveBeenCalledWith(!0),await B.click(r),await M(t.onCheckedChange).toHaveBeenCalledWith(!1)}};var W,D,I;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {}
}`,...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var H,A,T;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(T=(A=v.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var U,O,q;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(q=(O=w.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var z,X,$;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var G,J,K;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,V,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-between space-x-4 w-[350px]">
      <div className="space-y-0.5">
        <Label htmlFor="marketing">Marketing emails</Label>
        <p className="text-sm text-muted-foreground">
          Receive emails about new products and features.
        </p>
      </div>
      <Switch id="marketing" />
    </div>
}`,...(Y=(V=C.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,ee,te;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">
      <div className="flex items-center justify-between">
        <Label htmlFor="s1">Notifications</Label>
        <Switch id="s1" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="s2">Email Updates</Label>
        <Switch id="s2" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="s3">SMS Alerts</Label>
        <Switch id="s3" />
      </div>
    </div>
}`,...(te=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,re;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    onCheckedChange: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    await userEvent.click(switchElement);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
    await userEvent.click(switchElement);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(false);
  }
}`,...(re=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const ze=["Default","Checked","Disabled","DisabledChecked","WithLabel","WithDescription","Multiple","WithInteraction"];export{v as Checked,x as Default,w as Disabled,g as DisabledChecked,S as Multiple,C as WithDescription,j as WithInteraction,k as WithLabel,ze as __namedExportsOrder,qe as default};
