import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{D as i,a as c,b as d,c as m,d as p,e as g,f as h}from"./dialog-CCHRZT-h.js";import{B as a}from"./button-WnlYhIif.js";import{I as r}from"./input-96f9qOh5.js";import{L as s}from"./label-BhlulYsX.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Da0p-t-g.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./index-x8NkB57A.js";import"./index-BVduLaKl.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-Ck0Qw0kh.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-CbcPFHB_.js";import"./utils-BLSKlp9E.js";import"./x-DFQ5vw_2.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";const Y={title:"Components/Overlays/Dialog",component:i,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsxs(i,{children:[e.jsx(c,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Open Dialog"})}),e.jsxs(d,{children:[e.jsxs(m,{children:[e.jsx(p,{children:"Edit profile"}),e.jsx(g,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(r,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(s,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(r,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(h,{children:e.jsx(a,{type:"submit",children:"Save changes"})})]})]})},t={render:()=>e.jsxs(i,{children:[e.jsx(c,{asChild:!0,children:e.jsx(a,{children:"Create Account"})}),e.jsxs(d,{className:"sm:max-w-[425px]",children:[e.jsxs(m,{children:[e.jsx(p,{children:"Create Account"}),e.jsx(g,{children:"Enter your details to create a new account."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(s,{htmlFor:"email",children:"Email"}),e.jsx(r,{id:"email",type:"email",placeholder:"john@example.com"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(s,{htmlFor:"password",children:"Password"}),e.jsx(r,{id:"password",type:"password",placeholder:"••••••••"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(s,{htmlFor:"confirm",children:"Confirm Password"}),e.jsx(r,{id:"confirm",type:"password",placeholder:"••••••••"})]})]}),e.jsx(h,{children:e.jsx(a,{type:"submit",children:"Create Account"})})]})]})},n={render:()=>e.jsxs(i,{children:[e.jsx(c,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Show Info"})}),e.jsx(d,{children:e.jsxs(m,{children:[e.jsx(p,{children:"About This Feature"}),e.jsx(g,{children:"This feature allows you to customize your experience. Learn more in our documentation."})]})})]})},l={render:()=>e.jsxs(i,{children:[e.jsx(c,{asChild:!0,children:e.jsx(a,{variant:"outline",children:"Terms & Conditions"})}),e.jsxs(d,{className:"max-w-3xl max-h-[80vh] overflow-y-auto",children:[e.jsxs(m,{children:[e.jsx(p,{children:"Terms and Conditions"}),e.jsx(g,{children:"Please read these terms carefully before using our service."})]}),e.jsxs("div",{className:"space-y-4 py-4",children:[e.jsxs("section",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"1. Acceptance of Terms"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"2. Use License"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Permission is granted to temporarily download one copy of the materials on our service for personal, non-commercial transitory viewing only."})]}),e.jsxs("section",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"3. Disclaimer"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"The materials on our service are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties."})]})]}),e.jsx(h,{children:e.jsx(a,{children:"I Agree"})})]})]})};var u,x,D;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var j,f,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Create Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
          <DialogDescription>Enter your details to create a new account.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input id="confirm" type="password" placeholder="••••••••" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,b,N;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Info</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About This Feature</DialogTitle>
          <DialogDescription>
            This feature allows you to customize your experience. Learn more in our documentation.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
}`,...(N=(b=n.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,C,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms & Conditions</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>Please read these terms carefully before using our service.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <section>
            <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
            <p className="text-sm text-muted-foreground">
              By accessing and using this service, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">2. Use License</h3>
            <p className="text-sm text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials on our service for personal,
              non-commercial transitory viewing only.
            </p>
          </section>
          <section>
            <h3 className="font-semibold mb-2">3. Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              The materials on our service are provided on an 'as is' basis. We make no warranties, expressed or
              implied, and hereby disclaim and negate all other warranties.
            </p>
          </section>
        </div>
        <DialogFooter>
          <Button>I Agree</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Z=["Default","WithForm","Simple","LargeContent"];export{o as Default,l as LargeContent,n as Simple,t as WithForm,Z as __namedExportsOrder,Y as default};
