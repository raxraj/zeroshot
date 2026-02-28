import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{C as r,a,b as n,c as p,d as t,e as x}from"./card-BQxmGZtg.js";import{B as C}from"./button-WnlYhIif.js";import{B as m}from"./badge-Blho3Tj4.js";import{A as W,b as R}from"./avatar-Bm8ckjvU.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BLSKlp9E.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEP7aKU9.js";import"./x-DFQ5vw_2.js";import"./index-DSMx10ar.js";import"./index-xdNYasdH.js";import"./index-Bvak3XBe.js";const X={title:"Components/Display/Card",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(a,{children:[e.jsx(n,{children:"Card Title"}),e.jsx(p,{children:"Card description goes here"})]}),e.jsx(t,{children:e.jsx("p",{children:"This is the main content of the card component."})}),e.jsx(x,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Footer content"})})]})},d={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsx(a,{children:e.jsx(n,{children:"Simple Card"})}),e.jsx(t,{children:e.jsx("p",{children:"A simple card with just a title and content."})})]})},o={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsx(a,{children:e.jsx(n,{children:"Card Without Description"})}),e.jsx(t,{children:e.jsx("p",{children:"This card doesn't have a description in the header."})})]})},i={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(a,{children:[e.jsx(n,{children:"Confirm Action"}),e.jsx(p,{children:"Are you sure you want to proceed?"})]}),e.jsx(t,{children:e.jsx("p",{className:"text-sm",children:"This action cannot be undone. Please review carefully."})}),e.jsxs(x,{className:"flex justify-end gap-2",children:[e.jsx(C,{variant:"outline",children:"Cancel"}),e.jsx(C,{children:"Confirm"})]})]})},c={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsx(a,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(W,{children:e.jsx(R,{children:"JD"})}),e.jsxs("div",{children:[e.jsx(n,{children:"John Doe"}),e.jsx(p,{children:"@johndoe"})]})]})}),e.jsxs(t,{children:[e.jsx("p",{className:"text-sm",children:"Software Engineer • San Francisco"}),e.jsxs("div",{className:"flex gap-2 mt-4",children:[e.jsx(m,{children:"React"}),e.jsx(m,{variant:"secondary",children:"TypeScript"}),e.jsx(m,{variant:"outline",children:"Node.js"})]})]}),e.jsx(x,{children:e.jsx(C,{className:"w-full",children:"View Profile"})})]})},l={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(a,{children:[e.jsx(n,{children:"Total Revenue"}),e.jsx(p,{children:"Last 30 days"})]}),e.jsxs(t,{children:[e.jsx("div",{className:"text-3xl font-bold",children:"$45,231.89"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"+20.1% from last month"})]})]})};var h,u,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card component.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Footer content</p>
      </CardFooter>
    </Card>
}`,...(j=(u=s.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var f,N,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A simple card with just a title and content.</p>
      </CardContent>
    </Card>
}`,...(v=(N=d.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var g,T,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Without Description</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card doesn't have a description in the header.</p>
      </CardContent>
    </Card>
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var D,B,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Confirm Action</CardTitle>
        <CardDescription>Are you sure you want to proceed?</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This action cannot be undone. Please review carefully.</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var y,F,A;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>@johndoe</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Software Engineer • San Francisco</p>
        <div className="flex gap-2 mt-4">
          <Badge>React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Node.js</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
}`,...(A=(F=c.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var H,b,P;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground mt-1">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};const Y=["Default","Simple","WithoutDescription","WithButtons","UserProfile","Statistics"];export{s as Default,d as Simple,l as Statistics,c as UserProfile,i as WithButtons,o as WithoutDescription,Y as __namedExportsOrder,X as default};
