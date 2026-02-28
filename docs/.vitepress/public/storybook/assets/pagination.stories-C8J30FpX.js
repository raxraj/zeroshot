import{j as n}from"./jsx-runtime-Z5uAzocK.js";import{r as A}from"./index-pP6CS22B.js";import{c as o}from"./utils-BLSKlp9E.js";import{b as R}from"./button-WnlYhIif.js";import{c as D}from"./createLucideIcon-DEP7aKU9.js";import{C as q}from"./chevron-right-C_5x1iad.js";import{E as F}from"./ellipsis-irieReKa.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./index-1evVQkiP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=D("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),s=({className:t,...a})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:o("mx-auto flex w-full justify-center",t),...a});s.displayName="Pagination";const r=A.forwardRef(({className:t,...a},g)=>n.jsx("ul",{ref:g,className:o("flex flex-row items-center gap-1",t),...a}));r.displayName="PaginationContent";const i=A.forwardRef(({className:t,...a},g)=>n.jsx("li",{ref:g,className:o("",t),...a}));i.displayName="PaginationItem";const e=({className:t,isActive:a,size:g="icon",...S})=>n.jsx("a",{"aria-current":a?"page":void 0,className:o(R({variant:a?"outline":"ghost",size:g}),t),...S});e.displayName="PaginationLink";const l=({className:t,...a})=>n.jsxs(e,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 pl-2.5",t),...a,children:[n.jsx(G,{className:"h-4 w-4"}),n.jsx("span",{children:"Previous"})]});l.displayName="PaginationPrevious";const d=({className:t,...a})=>n.jsxs(e,{"aria-label":"Go to next page",size:"default",className:o("gap-1 pr-2.5",t),...a,children:[n.jsx("span",{children:"Next"}),n.jsx(q,{className:"h-4 w-4"})]});d.displayName="PaginationNext";const u=({className:t,...a})=>n.jsxs("span",{"aria-hidden":!0,className:o("flex h-9 w-9 items-center justify-center",t),...a,children:[n.jsx(F,{className:"h-4 w-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]});u.displayName="PaginationEllipsis";s.__docgenInfo={description:"",methods:[],displayName:"Pagination"};r.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};u.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};i.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};e.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const X={title:"Components/Display/Pagination",component:s,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>n.jsx(s,{children:n.jsxs(r,{children:[n.jsx(i,{children:n.jsx(l,{href:"#",size:"default"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"1"})}),n.jsx(i,{children:n.jsx(e,{href:"#",isActive:!0,size:"default",children:"2"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"3"})}),n.jsx(i,{children:n.jsx(d,{href:"#",size:"default"})})]})})},P={render:()=>n.jsx(s,{children:n.jsxs(r,{children:[n.jsx(i,{children:n.jsx(l,{href:"#",size:"default"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"1"})}),n.jsx(i,{children:n.jsx(u,{})}),n.jsx(i,{children:n.jsx(e,{href:"#",isActive:!0,size:"default",children:"5"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"6"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"7"})}),n.jsx(i,{children:n.jsx(u,{})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"20"})}),n.jsx(i,{children:n.jsx(d,{href:"#",size:"default"})})]})})},m={render:()=>n.jsx(s,{children:n.jsxs(r,{children:[n.jsx(i,{children:n.jsx(l,{href:"#",size:"default"})}),n.jsx(i,{children:n.jsx(d,{href:"#",size:"default"})})]})})},f={render:()=>n.jsx(s,{children:n.jsxs(r,{children:[n.jsx(i,{children:n.jsx(l,{href:"#","aria-disabled":"true",className:"pointer-events-none opacity-50",size:"default"})}),n.jsx(i,{children:n.jsx(e,{href:"#",isActive:!0,size:"default",children:"1"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"2"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"3"})}),n.jsx(i,{children:n.jsx(d,{href:"#",size:"default"})})]})})},h={render:()=>n.jsx(s,{children:n.jsxs(r,{children:[n.jsx(i,{children:n.jsx(l,{href:"#",size:"default"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"8"})}),n.jsx(i,{children:n.jsx(e,{href:"#",size:"default",children:"9"})}),n.jsx(i,{children:n.jsx(e,{href:"#",isActive:!0,size:"default",children:"10"})}),n.jsx(i,{children:n.jsx(d,{href:"#","aria-disabled":"true",className:"pointer-events-none opacity-50",size:"default"})})]})})};var p,x,j;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size="default" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size="default">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" size="default" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(j=(x=c.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,z,N;P.parameters={...P.parameters,docs:{...(I=P.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size="default" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size="default">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">7</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" size="default" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(N=(z=P.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var L,k,v;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size="default" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" size="default" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(v=(k=m.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,C,_;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" aria-disabled="true" className="pointer-events-none opacity-50" size="default" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size="default">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" size="default" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(_=(C=f.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var E,b,w;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size="default" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" size="default">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive size="default">
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" aria-disabled="true" className="pointer-events-none opacity-50" size="default" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(w=(b=h.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const Y=["Default","WithEllipsis","Simple","FirstPage","LastPage"];export{c as Default,f as FirstPage,h as LastPage,m as Simple,P as WithEllipsis,Y as __namedExportsOrder,X as default};
