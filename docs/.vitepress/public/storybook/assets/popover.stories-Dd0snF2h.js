import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{P as r,a as t,b as o,C as S}from"./popover-9iU4ChZv.js";import{B as n}from"./button-WnlYhIif.js";import{I as l}from"./input-96f9qOh5.js";import{L as p}from"./label-BhlulYsX.js";import{r as b}from"./index-pP6CS22B.js";import"./utils-BLSKlp9E.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-x8NkB57A.js";import"./index-BVduLaKl.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-xdNYasdH.js";import"./index-BRAnmMrq.js";import"./index-Cb9tSa9l.js";import"./index-n-b12q8t.js";import"./index-CbcPFHB_.js";import"./index-Ck0Qw0kh.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEP7aKU9.js";const Y={title:"Components/Overlays/Popover",component:r,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(r,{children:[e.jsx(t,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Open Popover"})}),e.jsx(o,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]})})]})},a={render:()=>e.jsxs(r,{children:[e.jsx(t,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Settings"})}),e.jsx(o,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Settings"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Configure your preferences."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(p,{htmlFor:"width",children:"Width"}),e.jsx(l,{id:"width",defaultValue:"100%",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(p,{htmlFor:"maxWidth",children:"Max width"}),e.jsx(l,{id:"maxWidth",defaultValue:"300px",className:"col-span-2 h-8"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(p,{htmlFor:"height",children:"Height"}),e.jsx(l,{id:"height",defaultValue:"25px",className:"col-span-2 h-8"})]})]})]})})]})},i={render:()=>{const[T,B]=b.useState(new Date);return e.jsxs(r,{children:[e.jsx(t,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Pick a date"})}),e.jsx(o,{className:"w-auto p-0",children:e.jsx(S,{mode:"single",selected:T,onSelect:B})})]})}},d={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(r,{children:[e.jsx(t,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Top"})}),e.jsx(o,{side:"top",children:e.jsx("p",{children:"This popover appears on top"})})]}),e.jsxs(r,{children:[e.jsx(t,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Bottom"})}),e.jsx(o,{side:"bottom",children:e.jsx("p",{children:"This popover appears on bottom"})})]})]})};var c,m,h;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,g,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Settings</h4>
            <p className="text-sm text-muted-foreground">Configure your preferences.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,j,P;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Pick a date</Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>;
  }
}`,...(P=(j=i.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var N,f,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p>This popover appears on top</p>
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p>This popover appears on bottom</p>
        </PopoverContent>
      </Popover>
    </div>
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const Z=["Default","WithForm","WithCalendar","Positions"];export{s as Default,d as Positions,i as WithCalendar,a as WithForm,Z as __namedExportsOrder,Y as default};
