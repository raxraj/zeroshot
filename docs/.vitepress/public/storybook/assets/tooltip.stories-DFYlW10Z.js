import{j as o}from"./jsx-runtime-Z5uAzocK.js";import{T as t,a as n,b as e,c as R}from"./tooltip-C3uRVUP5.js";import{B as i}from"./button-WnlYhIif.js";import{c as k}from"./createLucideIcon-DEP7aKU9.js";import{I as M}from"./info-Sqrj91zD.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./index-x8NkB57A.js";import"./index-BVduLaKl.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-Cb9tSa9l.js";import"./index-n-b12q8t.js";import"./index-CbcPFHB_.js";import"./index-Ck0Qw0kh.js";import"./index-Cdr4akHR.js";import"./utils-BLSKlp9E.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=k("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=k("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),io={title:"Components/Overlays/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"],decorators:[H=>o.jsx(R,{children:o.jsx(H,{})})]},r={render:()=>o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Hover me"})}),o.jsx(e,{children:o.jsx("p",{children:"This is a tooltip"})})]})},s={render:()=>o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"ghost",size:"icon",children:o.jsx(M,{className:"h-4 w-4"})})}),o.jsx(e,{children:o.jsx("p",{children:"Additional information about this feature"})})]})},l={render:()=>o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsxs(i,{variant:"outline",children:[o.jsx(P,{className:"h-4 w-4 mr-2"}),"Help"]})}),o.jsx(e,{className:"max-w-xs",children:o.jsx("p",{children:"This feature helps you manage your data more efficiently. Click to learn more about how it works and see examples."})})]})},a={render:()=>o.jsxs("div",{className:"flex gap-4 items-center justify-center",children:[o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Top"})}),o.jsx(e,{side:"top",children:o.jsx("p",{children:"Tooltip on top"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Right"})}),o.jsx(e,{side:"right",children:o.jsx("p",{children:"Tooltip on right"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Bottom"})}),o.jsx(e,{side:"bottom",children:o.jsx("p",{children:"Tooltip on bottom"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Left"})}),o.jsx(e,{side:"left",children:o.jsx("p",{children:"Tooltip on left"})})]})]})},p={render:()=>o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx("span",{tabIndex:0,children:o.jsxs(i,{disabled:!0,children:[o.jsx(L,{className:"h-4 w-4 mr-2"}),"Add Item"]})})}),o.jsx(e,{children:o.jsx("p",{children:"You need to select a category first"})})]})},d={render:()=>o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Save"})}),o.jsx(e,{children:o.jsx("p",{children:"Save your changes (Ctrl+S)"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Undo"})}),o.jsx(e,{children:o.jsx("p",{children:"Undo last action (Ctrl+Z)"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Redo"})}),o.jsx(e,{children:o.jsx("p",{children:"Redo last action (Ctrl+Y)"})})]})]})};var c,h,T;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var u,m,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Additional information about this feature</p>
      </TooltipContent>
    </Tooltip>
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,j,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <HelpCircle className="h-4 w-4 mr-2" />
          Help
        </Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This feature helps you manage your data more efficiently. Click to learn more about how it works and see
          examples.
        </p>
      </TooltipContent>
    </Tooltip>
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var v,f,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var y,b,w;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button disabled>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>You need to select a category first</p>
      </TooltipContent>
    </Tooltip>
}`,...(w=(b=p.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var N,S,I;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Save</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Save your changes (Ctrl+S)</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Undo</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Undo last action (Ctrl+Z)</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Redo</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Redo last action (Ctrl+Y)</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const ro=["Default","WithIcon","LongContent","Positions","OnDisabledButton","Multiple"];export{r as Default,l as LongContent,d as Multiple,p as OnDisabledButton,a as Positions,s as WithIcon,ro as __namedExportsOrder,io as default};
