import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T as i,a as T,b as a,c as r}from"./tabs-BwcaaAiF.js";import{C as o,a as l,b as d,c,d as u}from"./card-BQxmGZtg.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./index-x8NkB57A.js";import"./index-BVduLaKl.js";import"./index-CkPwm_CN.js";import"./index-CYVZouvf.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-DSMx10ar.js";import"./index-Ck0Qw0kh.js";import"./index-C7OyeuXp.js";import"./index-CbcPFHB_.js";import"./utils-BLSKlp9E.js";const W={title:"Components/Layout/Tabs",component:i,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(i,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(T,{children:[e.jsx(a,{value:"account",children:"Account"}),e.jsx(a,{value:"password",children:"Password"})]}),e.jsx(r,{value:"account",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Make changes to your account here."})}),e.jsx(r,{value:"password",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Change your password here."})})]})},t={render:()=>e.jsxs(i,{defaultValue:"overview",className:"w-[500px]",children:[e.jsxs(T,{className:"grid w-full grid-cols-3",children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"analytics",children:"Analytics"}),e.jsx(a,{value:"reports",children:"Reports"})]}),e.jsx(r,{value:"overview",children:e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Overview"}),e.jsx(c,{children:"View your account overview and recent activity."})]}),e.jsxs(u,{className:"space-y-2",children:[e.jsx("div",{className:"text-sm",children:"Total Revenue: $12,234"}),e.jsx("div",{className:"text-sm",children:"Active Users: 1,234"})]})]})}),e.jsx(r,{value:"analytics",children:e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Analytics"}),e.jsx(c,{children:"Detailed analytics and insights."})]}),e.jsx(u,{children:e.jsx("div",{className:"text-sm text-muted-foreground",children:"Analytics data will appear here."})})]})}),e.jsx(r,{value:"reports",children:e.jsxs(o,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Reports"}),e.jsx(c,{children:"Generate and view reports."})]}),e.jsx(u,{children:e.jsx("div",{className:"text-sm text-muted-foreground",children:"Report generation tools will appear here."})})]})})]})},n={render:()=>e.jsxs(i,{defaultValue:"tab1",className:"w-[600px]",children:[e.jsxs(T,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"}),e.jsx(a,{value:"tab4",children:"Tab 4"}),e.jsx(a,{value:"tab5",children:"Tab 5"})]}),e.jsx(r,{value:"tab1",children:"Content for Tab 1"}),e.jsx(r,{value:"tab2",children:"Content for Tab 2"}),e.jsx(r,{value:"tab3",children:"Content for Tab 3"}),e.jsx(r,{value:"tab4",children:"Content for Tab 4"}),e.jsx(r,{value:"tab5",children:"Content for Tab 5"})]})};var b,p,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">Change your password here.</p>
      </TabsContent>
    </Tabs>
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var m,C,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>View your account overview and recent activity.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">Total Revenue: $12,234</div>
            <div className="text-sm">Active Users: 1,234</div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Detailed analytics and insights.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">Analytics data will appear here.</div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>Generate and view reports.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">Report generation tools will appear here.</div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var g,h,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
      <TabsContent value="tab4">Content for Tab 4</TabsContent>
      <TabsContent value="tab5">Content for Tab 5</TabsContent>
    </Tabs>
}`,...(j=(h=n.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const _=["Default","WithCards","Multiple"];export{s as Default,n as Multiple,t as WithCards,_ as __namedExportsOrder,W as default};
