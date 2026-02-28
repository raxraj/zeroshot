import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as o}from"./index-pP6CS22B.js";import{R as D,T as R,C as z}from"./index-DBD2AnOC.js";import{c as I}from"./utils-BLSKlp9E.js";import{C as d}from"./chevron-down-D-nzWkjq.js";import{B as h}from"./button-WnlYhIif.js";import{C as x}from"./chevron-right-C_5x1iad.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./index-x8NkB57A.js";import"./index-BVduLaKl.js";import"./index-Ck0Qw0kh.js";import"./index-xdNYasdH.js";import"./index-CbcPFHB_.js";import"./index-BRAnmMrq.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";const t=o.forwardRef(({children:s,...a},n)=>e.jsx(D,{ref:n,...a,children:s}));t.displayName="Collapsible";const r=o.forwardRef(({children:s,className:a,...n},l)=>e.jsxs(R,{ref:l,className:I("inline-flex items-center",a),...n,children:[s,e.jsx(d,{className:"ml-2 h-4 w-4"})]}));r.displayName="CollapsibleTrigger";const i=o.forwardRef(({children:s,className:a,...n},l)=>e.jsx(z,{ref:l,className:I("mt-2",a),...n,children:s}));i.displayName="CollapsibleContent";t.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};r.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};i.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const V={title:"Components/Overlays/Collapsible",component:t,parameters:{layout:"centered"},tags:["autodocs"]},m={render:()=>{const[s,a]=o.useState(!1);return e.jsxs(t,{open:s,onOpenChange:a,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@peduarte starred 3 repositories"}),e.jsx(r,{asChild:!0,children:e.jsxs(h,{variant:"ghost",size:"sm",children:[s?e.jsx(d,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/primitives"}),e.jsxs(i,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@stitches/react"})]})]})}},p={render:()=>{const[s,a]=o.useState(!1);return e.jsxs(t,{open:s,onOpenChange:a,className:"w-[400px] space-y-2",children:[e.jsx(r,{asChild:!0,children:e.jsxs(h,{variant:"outline",className:"w-full justify-between",children:["Show Details",s?e.jsx(d,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})]})}),e.jsx(i,{className:"space-y-2",children:e.jsxs("div",{className:"rounded-md border p-4",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Additional Information"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"This is some additional information that was hidden. You can put any content here including forms, images, or other components."})]})})]})}},c={render:()=>e.jsx("div",{className:"w-[500px] space-y-4",children:[{question:"What is ZeroShot?",answer:"This is a collection of reusable UI components built with React, TypeScript, and Tailwind CSS. It's designed to help you build applications faster."},{question:"How do I install it?",answer:"You can install it using npm or yarn. Simply run: npm install zero-shot"},{question:"Is it customizable?",answer:"Yes! All components are fully customizable using Tailwind CSS classes and CSS variables. You can easily adapt them to match your brand."}].map((s,a)=>{const[n,l]=o.useState(!1);return e.jsxs(t,{open:n,onOpenChange:l,className:"border rounded-lg p-4",children:[e.jsxs(r,{className:"flex items-center justify-between w-full text-left",children:[e.jsx("h3",{className:"font-semibold",children:s.question}),n?e.jsx(d,{className:"h-4 w-4"}):e.jsx(x,{className:"h-4 w-4"})]}),e.jsx(i,{className:"mt-2",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:s.answer})})]},a)})})},u={render:()=>e.jsxs(t,{defaultOpen:!0,className:"w-[350px] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"Settings"}),e.jsx(r,{asChild:!0,children:e.jsx(h,{variant:"ghost",size:"sm",children:e.jsx(d,{className:"h-4 w-4"})})})]}),e.jsxs(i,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"Notifications: Enabled"}),e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"Theme: Dark Mode"}),e.jsx("div",{className:"rounded-md border px-4 py-2 text-sm",children:"Language: English"})]})]})};var b,f,N;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/primitives</div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...(N=(f=m.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var C,g,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[400px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Show Details
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border p-4">
            <h4 className="font-semibold mb-2">Additional Information</h4>
            <p className="text-sm text-muted-foreground">
              This is some additional information that was hidden. You can put any content here including forms,
              images, or other components.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...(w=(g=p.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,j,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-[500px] space-y-4">
        {[{
        question: "What is ZeroShot?",
        answer: "This is a collection of reusable UI components built with React, TypeScript, and Tailwind CSS. It's designed to help you build applications faster."
      }, {
        question: "How do I install it?",
        answer: "You can install it using npm or yarn. Simply run: npm install zero-shot"
      }, {
        question: "Is it customizable?",
        answer: "Yes! All components are fully customizable using Tailwind CSS classes and CSS variables. You can easily adapt them to match your brand."
      }].map((item, index) => {
        const [isOpen, setIsOpen] = useState(false);
        return <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen} className="border rounded-lg p-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <h3 className="font-semibold">{item.question}</h3>
                {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </CollapsibleContent>
            </Collapsible>;
      })}
      </div>;
  }
}`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var O,S,T;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    return <Collapsible defaultOpen className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Settings</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm">Notifications: Enabled</div>
          <div className="rounded-md border px-4 py-2 text-sm">Theme: Dark Mode</div>
          <div className="rounded-md border px-4 py-2 text-sm">Language: English</div>
        </CollapsibleContent>
      </Collapsible>;
  }
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const X=["Default","WithButton","FAQ","DefaultOpen"];export{m as Default,u as DefaultOpen,c as FAQ,p as WithButton,X as __namedExportsOrder,V as default};
