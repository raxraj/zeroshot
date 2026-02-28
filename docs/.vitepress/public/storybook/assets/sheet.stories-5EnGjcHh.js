import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{S as s,a as r,b as n,c as a,d as i,e as o,f as O,g as P}from"./sheet-HA9myL09.js";import{B as t}from"./button-WnlYhIif.js";import{I as u}from"./input-96f9qOh5.js";import{L as g}from"./label-BhlulYsX.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Da0p-t-g.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./index-x8NkB57A.js";import"./index-BVduLaKl.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-Ck0Qw0kh.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-CbcPFHB_.js";import"./index-1evVQkiP.js";import"./utils-BLSKlp9E.js";import"./x-DFQ5vw_2.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-cAPKYzjE.js";const ne={title:"Components/Overlays/Sheet",component:s,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.jsxs(s,{children:[e.jsx(r,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open"})}),e.jsxs(n,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"Edit profile"}),e.jsx(o,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(g,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(u,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(g,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(u,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(O,{children:e.jsx(P,{asChild:!0,children:e.jsx(t,{type:"submit",children:"Save changes"})})})]})]})},l={render:()=>e.jsxs(s,{children:[e.jsx(r,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Left"})}),e.jsxs(n,{side:"left",children:[e.jsxs(a,{children:[e.jsx(i,{children:"Navigation"}),e.jsx(o,{children:"Navigate through the application"})]}),e.jsxs("div",{className:"py-4 space-y-2",children:[e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Dashboard"}),e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Projects"}),e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Team"}),e.jsx(t,{variant:"ghost",className:"w-full justify-start",children:"Settings"})]})]})]})},c={render:()=>e.jsxs(s,{children:[e.jsx(r,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Top"})}),e.jsxs(n,{side:"top",children:[e.jsxs(a,{children:[e.jsx(i,{children:"Notification Center"}),e.jsx(o,{children:"You have 3 unread notifications"})]}),e.jsxs("div",{className:"py-4 space-y-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"New message from John"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"2 minutes ago"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"Your report is ready"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"1 hour ago"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("p",{className:"font-medium",children:"System update completed"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"3 hours ago"})]})]})]})]})},h={render:()=>e.jsxs(s,{children:[e.jsx(r,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Bottom"})}),e.jsxs(n,{side:"bottom",children:[e.jsxs(a,{children:[e.jsx(i,{children:"Quick Actions"}),e.jsx(o,{children:"Perform common actions quickly"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 py-4",children:[e.jsx(t,{children:"New Project"}),e.jsx(t,{children:"Upload"}),e.jsx(t,{children:"Share"})]})]})]})},m={render:()=>e.jsxs(s,{children:[e.jsx(r,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"View Details"})}),e.jsxs(n,{className:"overflow-y-auto",children:[e.jsxs(a,{children:[e.jsx(i,{children:"Product Details"}),e.jsx(o,{children:"Complete information about this product"})]}),e.jsx("div",{className:"py-4 space-y-4",children:Array.from({length:20}).map((k,p)=>e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsxs("p",{className:"font-medium",children:["Section ",p+1]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["This is some content for section ",p+1,". You can add any content here."]})]},p))})]})]})};var x,S,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,N,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Navigate through the application</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Team
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Settings
          </Button>
        </div>
      </SheetContent>
    </Sheet>
}`,...(f=(N=l.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var y,C,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification Center</SheetTitle>
          <SheetDescription>You have 3 unread notifications</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          <div className="p-4 border rounded-lg">
            <p className="font-medium">New message from John</p>
            <p className="text-sm text-muted-foreground">2 minutes ago</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Your report is ready</p>
            <p className="text-sm text-muted-foreground">1 hour ago</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">System update completed</p>
            <p className="text-sm text-muted-foreground">3 hours ago</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var T,b,D;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>Perform common actions quickly</SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-3 gap-4 py-4">
          <Button>New Project</Button>
          <Button>Upload</Button>
          <Button>Share</Button>
        </div>
      </SheetContent>
    </Sheet>
}`,...(D=(b=h.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var w,H,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Details</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Product Details</SheetTitle>
          <SheetDescription>Complete information about this product</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          {Array.from({
          length: 20
        }).map((_, i) => <div key={i} className="p-4 border rounded-lg">
              <p className="font-medium">Section {i + 1}</p>
              <p className="text-sm text-muted-foreground">
                This is some content for section {i + 1}. You can add any content here.
              </p>
            </div>)}
        </div>
      </SheetContent>
    </Sheet>
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ae=["Default","Left","Top","Bottom","WithScrollableContent"];export{h as Bottom,d as Default,l as Left,c as Top,m as WithScrollableContent,ae as __namedExportsOrder,ne as default};
