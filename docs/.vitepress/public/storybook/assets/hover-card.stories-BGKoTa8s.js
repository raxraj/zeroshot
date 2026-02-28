import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as n}from"./index-pP6CS22B.js";import{P as ee,c as l}from"./index-D-hjI41K.js";import{c as re}from"./index-BVduLaKl.js";import{u as te}from"./index-Ck0Qw0kh.js";import{u as ne}from"./index-x8NkB57A.js";import{R as ae,A as se,c as G,C as oe,a as ie}from"./index-Cb9tSa9l.js";import{P as ce}from"./index-CbcPFHB_.js";import{D as de}from"./index-DIepWXwl.js";import{c as le}from"./utils-BLSKlp9E.js";import{B as T}from"./button-WnlYhIif.js";import{A as me,a as pe,b as ue}from"./avatar-Bm8ckjvU.js";import{c as ve}from"./createLucideIcon-DEP7aKU9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-xdNYasdH.js";import"./index-DSMx10ar.js";import"./index-n-b12q8t.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=ve("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);var E,k="HoverCard",[q]=re(k,[G]),D=G(),[fe,O]=q(k),J=r=>{const{__scopeHoverCard:a,children:s,open:i,defaultOpen:o,onOpenChange:d,openDelay:v=700,closeDelay:h=300}=r,c=D(a),x=n.useRef(0),m=n.useRef(0),g=n.useRef(!1),p=n.useRef(!1),[N,t]=te({prop:i,defaultProp:o??!1,onChange:d,caller:k}),j=n.useCallback(()=>{clearTimeout(m.current),x.current=window.setTimeout(()=>t(!0),v)},[v,t]),y=n.useCallback(()=>{clearTimeout(x.current),!g.current&&!p.current&&(m.current=window.setTimeout(()=>t(!1),h))},[h,t]),Z=n.useCallback(()=>t(!1),[t]);return n.useEffect(()=>()=>{clearTimeout(x.current),clearTimeout(m.current)},[]),e.jsx(fe,{scope:a,open:N,onOpenChange:t,onOpen:j,onClose:y,onDismiss:Z,hasSelectionRef:g,isPointerDownOnContentRef:p,children:e.jsx(ae,{...c,children:s})})};J.displayName=k;var K="HoverCardTrigger",Q=n.forwardRef((r,a)=>{const{__scopeHoverCard:s,...i}=r,o=O(K,s),d=D(s);return e.jsx(se,{asChild:!0,...d,children:e.jsx(ee.a,{"data-state":o.open?"open":"closed",...i,ref:a,onPointerEnter:l(r.onPointerEnter,R(o.onOpen)),onPointerLeave:l(r.onPointerLeave,R(o.onClose)),onFocus:l(r.onFocus,o.onOpen),onBlur:l(r.onBlur,o.onClose),onTouchStart:l(r.onTouchStart,v=>v.preventDefault())})})});Q.displayName=K;var xe="HoverCardPortal",[ze,Ce]=q(xe,{forceMount:void 0}),S="HoverCardContent",X=n.forwardRef((r,a)=>{const s=Ce(S,r.__scopeHoverCard),{forceMount:i=s.forceMount,...o}=r,d=O(S,r.__scopeHoverCard);return e.jsx(ce,{present:i||d.open,children:e.jsx(ge,{"data-state":d.open?"open":"closed",...o,onPointerEnter:l(r.onPointerEnter,R(d.onOpen)),onPointerLeave:l(r.onPointerLeave,R(d.onClose)),ref:a})})});X.displayName=S;var ge=n.forwardRef((r,a)=>{const{__scopeHoverCard:s,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:d,onInteractOutside:v,...h}=r,c=O(S,s),x=D(s),m=n.useRef(null),g=ne(a,m),[p,N]=n.useState(!1);return n.useEffect(()=>{if(p){const t=document.body;return E=t.style.userSelect||t.style.webkitUserSelect,t.style.userSelect="none",t.style.webkitUserSelect="none",()=>{t.style.userSelect=E,t.style.webkitUserSelect=E}}},[p]),n.useEffect(()=>{if(m.current){const t=()=>{N(!1),c.isPointerDownOnContentRef.current=!1,setTimeout(()=>{var y;((y=document.getSelection())==null?void 0:y.toString())!==""&&(c.hasSelectionRef.current=!0)})};return document.addEventListener("pointerup",t),()=>{document.removeEventListener("pointerup",t),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!1}}},[c.isPointerDownOnContentRef,c.hasSelectionRef]),n.useEffect(()=>{m.current&&ye(m.current).forEach(j=>j.setAttribute("tabindex","-1"))}),e.jsx(de,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:v,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:l(d,t=>{t.preventDefault()}),onDismiss:c.onDismiss,children:e.jsx(oe,{...x,...h,onPointerDown:l(h.onPointerDown,t=>{t.currentTarget.contains(t.target)&&N(!0),c.hasSelectionRef.current=!1,c.isPointerDownOnContentRef.current=!0}),ref:g,style:{...h.style,userSelect:p?"text":void 0,WebkitUserSelect:p?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})})}),Ne="HoverCardArrow",je=n.forwardRef((r,a)=>{const{__scopeHoverCard:s,...i}=r,o=D(s);return e.jsx(ie,{...o,...i,ref:a})});je.displayName=Ne;function R(r){return a=>a.pointerType==="touch"?void 0:r()}function ye(r){const a=[],s=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;s.nextNode();)a.push(s.currentNode);return a}var He=J,be=Q,Y=X;const f=He,C=be,u=n.forwardRef(({className:r,align:a="center",sideOffset:s=4,...i},o)=>e.jsx(Y,{ref:o,align:a,sideOffset:s,className:le("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...i}));u.displayName=Y.displayName;u.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};const Ge={title:"Components/Overlays/HoverCard",component:f,parameters:{layout:"centered"},tags:["autodocs"]},H={render:()=>e.jsxs(f,{children:[e.jsx(C,{asChild:!0,children:e.jsx(T,{variant:"link",children:"@nextjs"})}),e.jsx(u,{className:"w-80",children:e.jsxs("div",{className:"flex justify-between space-x-4",children:[e.jsxs(me,{children:[e.jsx(pe,{src:"https://github.com/vercel.png"}),e.jsx(ue,{children:"VC"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@nextjs"}),e.jsx("p",{className:"text-sm",children:"The React Framework – created and maintained by @vercel."}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx(he,{className:"mr-2 h-4 w-4 opacity-70"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Joined December 2021"})]})]})]})})]})},b={render:()=>e.jsxs(f,{children:[e.jsx(C,{asChild:!0,children:e.jsx("span",{className:"underline cursor-pointer",children:"Hover over me"})}),e.jsx(u,{children:e.jsx("p",{className:"text-sm",children:"This is additional information that appears on hover."})})]})},P={render:()=>e.jsxs(f,{children:[e.jsx(C,{asChild:!0,children:e.jsx(T,{variant:"outline",children:"Product Info"})}),e.jsx(u,{className:"w-80",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold",children:"Premium Plan"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Get access to all premium features including:"}),e.jsxs("ul",{className:"text-sm list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Unlimited projects"}),e.jsx("li",{children:"Priority support"}),e.jsx("li",{children:"Advanced analytics"}),e.jsx("li",{children:"Custom integrations"})]}),e.jsxs("div",{className:"pt-2",children:[e.jsx("span",{className:"text-2xl font-bold",children:"$29"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"/month"})]})]})})]})},w={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(f,{children:[e.jsx(C,{asChild:!0,children:e.jsx(T,{variant:"link",children:"@shadcn"})}),e.jsx(u,{children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@shadcn"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Creator of shadcn/ui."})]})})]}),e.jsxs(f,{children:[e.jsx(C,{asChild:!0,children:e.jsx(T,{variant:"link",children:"@vercel"})}),e.jsx(u,{children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@vercel"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Develop. Preview. Ship."})]})})]})]})};var A,_,M;H.parameters={...H.parameters,docs:{...(A=H.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...(M=(_=H.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var F,B,I;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <span className="underline cursor-pointer">Hover over me</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This is additional information that appears on hover.</p>
      </HoverCardContent>
    </HoverCard>
}`,...(I=(B=b.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var L,U,W;P.parameters={...P.parameters,docs:{...(L=P.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Product Info</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-semibold">Premium Plan</h4>
          <p className="text-sm text-muted-foreground">Get access to all premium features including:</p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
            <li>Custom integrations</li>
          </ul>
          <div className="pt-2">
            <span className="text-2xl font-bold">$29</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
}`,...(W=(U=P.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var $,V,z;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@shadcn</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm text-muted-foreground">Creator of shadcn/ui.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@vercel</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@vercel</h4>
            <p className="text-sm text-muted-foreground">Develop. Preview. Ship.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
}`,...(z=(V=w.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const qe=["Default","Simple","WithDetails","Multiple"];export{H as Default,w as Multiple,b as Simple,P as WithDetails,qe as __namedExportsOrder,Ge as default};
