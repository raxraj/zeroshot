import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{r as u}from"./index-pP6CS22B.js";import{S as H}from"./index-cAPKYzjE.js";import{c as t}from"./utils-BLSKlp9E.js";import{C as W}from"./chevron-right-C_5x1iad.js";import{E as D}from"./ellipsis-irieReKa.js";import{c as v}from"./createLucideIcon-DEP7aKU9.js";import{H as w}from"./house-h79muh6i.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-x8NkB57A.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=v("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]),m=u.forwardRef(({...a},s)=>r.jsx("nav",{ref:s,"aria-label":"breadcrumb",...a}));m.displayName="Breadcrumb";const o=u.forwardRef(({className:a,...s},d)=>r.jsx("ol",{ref:d,className:t("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...s}));o.displayName="BreadcrumbList";const e=u.forwardRef(({className:a,...s},d)=>r.jsx("li",{ref:d,className:t("inline-flex items-center gap-1.5",a),...s}));e.displayName="BreadcrumbItem";const n=u.forwardRef(({asChild:a,className:s,...d},C)=>{const R=a?H:"a";return r.jsx(R,{ref:C,className:t("transition-colors hover:text-foreground",s),...d})});n.displayName="BreadcrumbLink";const i=u.forwardRef(({className:a,...s},d)=>r.jsx("span",{ref:d,role:"link","aria-disabled":"true","aria-current":"page",className:t("font-normal text-foreground",a),...s}));i.displayName="BreadcrumbPage";const c=({children:a,className:s,...d})=>r.jsx("li",{role:"presentation","aria-hidden":"true",className:t("[&>svg]:size-3.5",s),...d,children:a??r.jsx(W,{})});c.displayName="BreadcrumbSeparator";const h=({className:a,...s})=>r.jsxs("span",{role:"presentation","aria-hidden":"true",className:t("flex h-9 w-9 items-center justify-center",a),...s,children:[r.jsx(D,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"More"})]});h.displayName="BreadcrumbElipssis";m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};e.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};h.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbElipssis"};const Q={title:"Components/Display/Breadcrumb",component:m,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>r.jsx(m,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(n,{href:"/",children:"Home"})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(n,{href:"/components",children:"Components"})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})},p={render:()=>r.jsx(m,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(n,{href:"/",children:"Home"})}),r.jsx(c,{children:r.jsx(x,{})}),r.jsx(e,{children:r.jsx(n,{href:"/products",children:"Products"})}),r.jsx(c,{children:r.jsx(x,{})}),r.jsx(e,{children:r.jsx(i,{children:"Electronics"})})]})})},b={render:()=>r.jsx(m,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(n,{href:"/",children:r.jsx(w,{className:"h-4 w-4"})})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(n,{href:"/products",children:"Products"})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(h,{})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(n,{href:"/products/electronics",children:"Electronics"})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(i,{children:"Laptops"})})]})})},B={render:()=>r.jsx(m,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsxs(n,{href:"/",className:"flex items-center gap-2",children:[r.jsx(w,{className:"h-4 w-4"}),"Home"]})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(n,{href:"/docs",children:"Documentation"})}),r.jsx(c,{}),r.jsx(e,{children:r.jsx(i,{children:"Components"})})]})})};var j,f,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var g,L,N;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Electronics</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var S,k,y;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <Home className="h-4 w-4" />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Laptops</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(y=(k=b.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var _,E,P;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Components</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(P=(E=B.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const U=["Default","WithCustomSeparator","WithEllipsis","WithIcons"];export{l as Default,p as WithCustomSeparator,b as WithEllipsis,B as WithIcons,U as __namedExportsOrder,Q as default};
