import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T as c}from"./textarea-C_7t26eC.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BLSKlp9E.js";const L={title:"Components/Forms/Textarea",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Whether the textarea is disabled"}}},r={args:{placeholder:"Type your message here..."}},s={args:{defaultValue:"This is a sample text in the textarea.",placeholder:"Type your message here..."}},a={args:{placeholder:"This textarea is disabled",disabled:!0}},t={args:{placeholder:"Larger textarea with 10 rows",rows:10}},o={render:()=>e.jsxs("div",{className:"space-y-2 w-[400px]",children:[e.jsx("label",{htmlFor:"message",className:"text-sm font-medium",children:"Your message"}),e.jsx(c,{id:"message",placeholder:"Tell us what you think..."})]})},l={render:()=>e.jsxs("div",{className:"space-y-2 w-[400px]",children:[e.jsx("label",{htmlFor:"error-message",className:"text-sm font-medium",children:"Feedback"}),e.jsx(c,{id:"error-message",placeholder:"Your feedback...",className:"border-destructive"}),e.jsx("p",{className:"text-sm text-destructive",children:"This field is required"})]})};var d,i,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Type your message here..."
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,p,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    defaultValue: "This is a sample text in the textarea.",
    placeholder: "Type your message here..."
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,x,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: "This textarea is disabled",
    disabled: true
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var b,T,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Larger textarea with 10 rows",
    rows: 10
  }
}`,...(y=(T=t.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var f,w,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-[400px]">
      <label htmlFor="message" className="text-sm font-medium">
        Your message
      </label>
      <Textarea id="message" placeholder="Tell us what you think..." />
    </div>
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var v,j,W;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-[400px]">
      <label htmlFor="error-message" className="text-sm font-medium">
        Feedback
      </label>
      <Textarea id="error-message" placeholder="Your feedback..." className="border-destructive" />
      <p className="text-sm text-destructive">This field is required</p>
    </div>
}`,...(W=(j=l.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};const V=["Default","WithValue","Disabled","WithRows","WithLabel","WithError"];export{r as Default,a as Disabled,l as WithError,o as WithLabel,t as WithRows,s as WithValue,V as __namedExportsOrder,L as default};
