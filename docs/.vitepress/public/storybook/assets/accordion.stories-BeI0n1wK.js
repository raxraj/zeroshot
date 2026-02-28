import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{R as l,r as N}from"./index-pP6CS22B.js";import{c as Ce}from"./index-BVduLaKl.js";import{c as je}from"./index-CYVZouvf.js";import{u as be}from"./index-x8NkB57A.js";import{P as te,c as ye}from"./index-D-hjI41K.js";import{u as ne}from"./index-Ck0Qw0kh.js";import{R as we,T as Ne,C as _e,c as re}from"./index-DBD2AnOC.js";import{u as Re}from"./index-BRAnmMrq.js";import{u as Te}from"./index-C7OyeuXp.js";import{c as H}from"./utils-BLSKlp9E.js";import{C as ce}from"./chevron-down-D-nzWkjq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-xdNYasdH.js";import"./index-CbcPFHB_.js";import"./createLucideIcon-DEP7aKU9.js";var u="Accordion",Pe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Y,Se,ke]=je(u),[_]=Ce(u,[ke,re]),V=re(),ie=l.forwardRef((t,r)=>{const{type:o,...n}=t,i=n,c=n;return e.jsx(Y.Provider,{scope:t.__scopeAccordion,children:o==="multiple"?e.jsx(Me,{...c,ref:r}):e.jsx(Oe,{...i,ref:r})})});ie.displayName=u;var[se,Ee]=_(u),[ae,De]=_(u,{collapsible:!1}),Oe=l.forwardRef((t,r)=>{const{value:o,defaultValue:n,onValueChange:i=()=>{},collapsible:c=!1,...a}=t,[s,A]=ne({prop:o,defaultProp:n??"",onChange:i,caller:u});return e.jsx(se,{scope:t.__scopeAccordion,value:l.useMemo(()=>s?[s]:[],[s]),onItemOpen:A,onItemClose:l.useCallback(()=>c&&A(""),[c,A]),children:e.jsx(ae,{scope:t.__scopeAccordion,collapsible:c,children:e.jsx(le,{...a,ref:r})})})}),Me=l.forwardRef((t,r)=>{const{value:o,defaultValue:n,onValueChange:i=()=>{},...c}=t,[a,s]=ne({prop:o,defaultProp:n??[],onChange:i,caller:u}),A=l.useCallback(g=>s((x=[])=>[...x,g]),[s]),f=l.useCallback(g=>s((x=[])=>x.filter(T=>T!==g)),[s]);return e.jsx(se,{scope:t.__scopeAccordion,value:a,onItemOpen:A,onItemClose:f,children:e.jsx(ae,{scope:t.__scopeAccordion,collapsible:!0,children:e.jsx(le,{...c,ref:r})})})}),[He,R]=_(u),le=l.forwardRef((t,r)=>{const{__scopeAccordion:o,disabled:n,dir:i,orientation:c="vertical",...a}=t,s=l.useRef(null),A=be(s,r),f=Se(o),x=Te(i)==="ltr",T=ye(t.onKeyDown,I=>{var U;if(!Pe.includes(I.key))return;const ve=I.target,P=f().filter(O=>{var $;return!(($=O.ref.current)!=null&&$.disabled)}),C=P.findIndex(O=>O.ref.current===ve),L=P.length;if(C===-1)return;I.preventDefault();let h=C;const S=0,k=L-1,E=()=>{h=C+1,h>k&&(h=S)},D=()=>{h=C-1,h<S&&(h=k)};switch(I.key){case"Home":h=S;break;case"End":h=k;break;case"ArrowRight":c==="horizontal"&&(x?E():D());break;case"ArrowDown":c==="vertical"&&E();break;case"ArrowLeft":c==="horizontal"&&(x?D():E());break;case"ArrowUp":c==="vertical"&&D();break}const Ie=h%L;(U=P[Ie].ref.current)==null||U.focus()});return e.jsx(He,{scope:o,disabled:n,direction:i,orientation:c,children:e.jsx(Y.Slot,{scope:o,children:e.jsx(te.div,{...a,"data-orientation":c,ref:A,onKeyDown:n?void 0:T})})})}),w="AccordionItem",[Ye,K]=_(w),de=l.forwardRef((t,r)=>{const{__scopeAccordion:o,value:n,...i}=t,c=R(w,o),a=Ee(w,o),s=V(o),A=Re(),f=n&&a.value.includes(n)||!1,g=c.disabled||t.disabled;return e.jsx(Ye,{scope:o,open:f,disabled:g,triggerId:A,children:e.jsx(we,{"data-orientation":c.orientation,"data-state":xe(f),...s,...i,ref:r,disabled:g,open:f,onOpenChange:x=>{x?a.onItemOpen(n):a.onItemClose(n)}})})});de.displayName=w;var me="AccordionHeader",pe=l.forwardRef((t,r)=>{const{__scopeAccordion:o,...n}=t,i=R(u,o),c=K(me,o);return e.jsx(te.h3,{"data-orientation":i.orientation,"data-state":xe(c.open),"data-disabled":c.disabled?"":void 0,...n,ref:r})});pe.displayName=me;var M="AccordionTrigger",ue=l.forwardRef((t,r)=>{const{__scopeAccordion:o,...n}=t,i=R(u,o),c=K(M,o),a=De(M,o),s=V(o);return e.jsx(Y.ItemSlot,{scope:o,children:e.jsx(Ne,{"aria-disabled":c.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:c.triggerId,...s,...n,ref:r})})});ue.displayName=M;var Ae="AccordionContent",he=l.forwardRef((t,r)=>{const{__scopeAccordion:o,...n}=t,i=R(u,o),c=K(Ae,o),a=V(o);return e.jsx(_e,{role:"region","aria-labelledby":c.triggerId,"data-orientation":i.orientation,...a,...n,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...t.style}})});he.displayName=Ae;function xe(t){return t?"open":"closed"}var W=ie,fe=de,ge=pe,z=ue,F=he;const v=N.forwardRef(({items:t,children:r,...o},n)=>t&&!r?e.jsx(W,{ref:n,...o,children:t.map(i=>e.jsxs(fe,{value:i.value,disabled:i.disabled,className:"border-b",children:[e.jsx(ge,{className:"flex",children:e.jsxs(z,{className:"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",children:[i.trigger,e.jsx(ce,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}),e.jsx(F,{className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",children:e.jsx("div",{className:"pb-4 pt-0",children:i.content})})]},i.value))}):e.jsx(W,{ref:n,...o,children:r}));v.displayName="Accordion";const d=N.forwardRef(({className:t,...r},o)=>e.jsx(fe,{ref:o,className:H("border-b",t),...r}));d.displayName="AccordionItem";const m=N.forwardRef(({className:t,children:r,...o},n)=>e.jsx(ge,{className:"flex",children:e.jsxs(z,{ref:n,className:H("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...o,children:[r,e.jsx(ce,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));m.displayName=z.displayName;const p=N.forwardRef(({className:t,children:r,...o},n)=>e.jsx(F,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...o,children:e.jsx("div",{className:H("pb-4 pt-0",t),children:r})}));p.displayName=F.displayName;v.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"AccordionItemDef"}],raw:"AccordionItemDef[]"},description:"Config API: Array of accordion items to render.\nWhen provided, auto-generates AccordionItem, AccordionTrigger, and AccordionContent.\nIf `children` is also provided, `children` takes precedence."}}};d.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};m.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const to={title:"Components/Layout/Accordion",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"],description:"The type of accordion"}}},j={render:()=>e.jsxs(v,{type:"single",collapsible:!0,className:"w-[450px]",children:[e.jsxs(d,{value:"item-1",children:[e.jsx(m,{children:"Is it accessible?"}),e.jsx(p,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(d,{value:"item-2",children:[e.jsx(m,{children:"Is it styled?"}),e.jsx(p,{children:"Yes. It comes with default styles that match the other components' aesthetic."})]}),e.jsxs(d,{value:"item-3",children:[e.jsx(m,{children:"Is it animated?"}),e.jsx(p,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})},b={render:()=>e.jsxs(v,{type:"multiple",className:"w-[450px]",children:[e.jsxs(d,{value:"item-1",children:[e.jsx(m,{children:"Can I open multiple items?"}),e.jsx(p,{children:"Yes! This accordion allows multiple items to be open at the same time."})]}),e.jsxs(d,{value:"item-2",children:[e.jsx(m,{children:"How does it work?"}),e.jsx(p,{children:'Set the type prop to "multiple" to enable this behavior.'})]}),e.jsxs(d,{value:"item-3",children:[e.jsx(m,{children:"Any limitations?"}),e.jsx(p,{children:"No limitations! Open as many items as you'd like."})]})]})},y={render:()=>e.jsxs(v,{type:"single",collapsible:!0,className:"w-[500px]",children:[e.jsxs(d,{value:"item-1",children:[e.jsx(m,{children:"Features"}),e.jsx(p,{children:e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-sm",children:[e.jsx("li",{children:"Keyboard navigation support"}),e.jsx("li",{children:"Fully customizable with CSS"}),e.jsx("li",{children:"Animated transitions"}),e.jsx("li",{children:"Accessible by default"})]})})]}),e.jsxs(d,{value:"item-2",children:[e.jsx(m,{children:"Installation"}),e.jsx(p,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Install the component using your package manager:"}),e.jsx("code",{className:"block bg-muted p-2 rounded text-sm",children:"npm install @radix-ui/react-accordion"})]})})]}),e.jsxs(d,{value:"item-3",children:[e.jsx(m,{children:"Usage"}),e.jsx(p,{children:e.jsx("p",{className:"text-sm",children:"Import and use the accordion components in your React application."})})]})]})};var G,q,B;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(B=(q=j.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>Yes! This accordion allows multiple items to be open at the same time.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>Set the type prop to "multiple" to enable this behavior.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Any limitations?</AccordionTrigger>
        <AccordionContent>No limitations! Open as many items as you'd like.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,oe;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Keyboard navigation support</li>
            <li>Fully customizable with CSS</li>
            <li>Animated transitions</li>
            <li>Accessible by default</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Installation</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p className="text-sm">Install the component using your package manager:</p>
            <code className="block bg-muted p-2 rounded text-sm">npm install @radix-ui/react-accordion</code>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Usage</AccordionTrigger>
        <AccordionContent>
          <p className="text-sm">Import and use the accordion components in your React application.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(oe=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const no=["Default","Multiple","RichContent"];export{j as Default,b as Multiple,y as RichContent,no as __namedExportsOrder,to as default};
