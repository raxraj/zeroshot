import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as x}from"./index-pP6CS22B.js";import{c as G}from"./index-1evVQkiP.js";import{c as m}from"./utils-BLSKlp9E.js";import{X as j}from"./x-DFQ5vw_2.js";import{I as h}from"./info-Sqrj91zD.js";import{c as g}from"./createLucideIcon-DEP7aKU9.js";import{C as B}from"./circle-alert-CpVRAWZS.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=g("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=g("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=g("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),b=G("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",success:"border-success/50 text-success dark:border-success [&>svg]:text-success",warning:"border-warning/50 text-warning dark:border-warning [&>svg]:text-warning",info:"border-info/50 text-info dark:border-info [&>svg]:text-info"}},defaultVariants:{variant:"default"}}),K={default:e.jsx(h,{className:"h-4 w-4"}),destructive:e.jsx(B,{className:"h-4 w-4"}),success:e.jsx(H,{className:"h-4 w-4"}),warning:e.jsx(J,{className:"h-4 w-4"}),info:e.jsx(h,{className:"h-4 w-4"})},r=x.forwardRef(({className:n,variant:a,title:i,description:f,icon:X,closable:v,onClose:A,children:w,...y},N)=>{if(i&&!w){const F=X??K[a||"default"];return e.jsxs("div",{ref:N,role:"alert",className:m(b({variant:a}),n),...y,children:[F,e.jsxs("div",{children:[e.jsx("h5",{className:"mb-1 font-medium leading-none tracking-tight",children:i}),f&&e.jsx("div",{className:"text-sm [&_p]:leading-relaxed",children:f})]}),v&&e.jsx("button",{onClick:A,className:"absolute right-2 top-2 rounded-sm p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring","aria-label":"Close alert",children:e.jsx(j,{className:"h-3.5 w-3.5"})})]})}return e.jsxs("div",{ref:N,role:"alert",className:m(b({variant:a}),n),...y,children:[w,v&&e.jsx("button",{onClick:A,className:"absolute right-2 top-2 rounded-sm p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring","aria-label":"Close alert",children:e.jsx(j,{className:"h-3.5 w-3.5"})})]})});r.displayName="Alert";const s=x.forwardRef(({className:n,...a},i)=>e.jsx("h5",{ref:i,className:m("mb-1 font-medium leading-none tracking-tight",n),...a}));s.displayName="AlertTitle";const t=x.forwardRef(({className:n,...a},i)=>e.jsx("div",{ref:i,className:m("text-sm [&_p]:leading-relaxed",n),...a}));t.displayName="AlertDescription";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{title:{required:!1,tsType:{name:"string"},description:`Config API: Alert title text.
When provided, auto-renders an AlertTitle with appropriate icon.
@example <Alert variant="success" title="Saved!" />`},description:{required:!1,tsType:{name:"string"},description:`Config API: Alert description text.
@example <Alert variant="info" title="Note" description="This action is irreversible." />`},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Custom icon to override the auto-selected variant icon.\nOnly used in Config API mode (when `title` is provided).\n@example <Alert variant="info" title="Tip" icon={<Lightbulb />} />'},closable:{required:!1,tsType:{name:"boolean"},description:`When true, renders a close button in the top-right corner.
@default false`},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the close button is clicked.\nOnly relevant when `closable` is true."}},composes:["VariantProps"]};s.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};t.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const ie={title:"Components/Overlays/Alert",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"],description:"Visual style variant"}}},o={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(M,{className:"h-4 w-4"}),e.jsx(s,{children:"Heads up!"}),e.jsx(t,{children:"You can add components to your app using the cli."})]})},l={render:()=>e.jsxs(r,{variant:"destructive",className:"w-[500px]",children:[e.jsx(B,{className:"h-4 w-4"}),e.jsx(s,{children:"Error"}),e.jsx(t,{children:"Your session has expired. Please log in again."})]})},c={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx(s,{children:"Information"}),e.jsx(t,{children:"This feature will be available in the next update."})]})},d={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(H,{className:"h-4 w-4"}),e.jsx(s,{children:"Success"}),e.jsx(t,{children:"Your changes have been saved successfully."})]})},p={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(s,{children:"Update Available"}),e.jsx(t,{children:"A new version of the application is available for download."})]})},u={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(M,{className:"h-4 w-4"}),e.jsx(s,{children:"Terms and Conditions Update"}),e.jsx(t,{children:"We've updated our terms and conditions. Please review the changes carefully. By continuing to use our service, you agree to the updated terms. If you have any questions, please contact our support team."})]})};var T,C,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,D,q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[500px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var S,_,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This feature will be available in the next update.</AlertDescription>
    </Alert>
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,V,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,E,L;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>A new version of the application is available for download.</AlertDescription>
    </Alert>
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,U,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Terms and Conditions Update</AlertTitle>
      <AlertDescription>
        We've updated our terms and conditions. Please review the changes carefully. By continuing to use our service,
        you agree to the updated terms. If you have any questions, please contact our support team.
      </AlertDescription>
    </Alert>
}`,...(z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const oe=["Default","Destructive","InfoVariant","Success","WithoutIcon","LongContent"];export{o as Default,l as Destructive,c as InfoVariant,u as LongContent,d as Success,p as WithoutIcon,oe as __namedExportsOrder,ie as default};
