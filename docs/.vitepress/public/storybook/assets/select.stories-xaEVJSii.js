import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{S as t,a as l,b as r,c as n,d as a,e as d,f as u,g as B}from"./select-B_zKb2Tv.js";import{L as M}from"./label-BhlulYsX.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-BdQq_4o_.js";import"./index-D-hjI41K.js";import"./index-x8NkB57A.js";import"./index-CYVZouvf.js";import"./index-BVduLaKl.js";import"./index-C7OyeuXp.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-xdNYasdH.js";import"./index-BRAnmMrq.js";import"./index-Cb9tSa9l.js";import"./index-n-b12q8t.js";import"./index-Ck0Qw0kh.js";import"./index-WyfESzTi.js";import"./index-Cdr4akHR.js";import"./utils-BLSKlp9E.js";import"./chevron-down-D-nzWkjq.js";import"./createLucideIcon-DEP7aKU9.js";import"./check--MVdLoPp.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";const oe={title:"Components/Forms/Select",component:t,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsxs(t,{children:[e.jsx(l,{className:"w-[180px]",children:e.jsx(r,{placeholder:"Select a fruit"})}),e.jsxs(n,{children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"orange",children:"Orange"}),e.jsx(a,{value:"grape",children:"Grape"}),e.jsx(a,{value:"pineapple",children:"Pineapple"})]})]})},s={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(M,{htmlFor:"fruit-select",children:"Choose your favorite fruit"}),e.jsxs(t,{children:[e.jsx(l,{className:"w-[240px]",id:"fruit-select",children:e.jsx(r,{placeholder:"Select a fruit"})}),e.jsxs(n,{children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"orange",children:"Orange"})]})]})]})},i={render:()=>e.jsxs(t,{children:[e.jsx(l,{className:"w-[240px]",children:e.jsx(r,{placeholder:"Select a timezone"})}),e.jsxs(n,{children:[e.jsxs(d,{children:[e.jsx(u,{children:"North America"}),e.jsx(a,{value:"est",children:"Eastern Standard Time (EST)"}),e.jsx(a,{value:"cst",children:"Central Standard Time (CST)"}),e.jsx(a,{value:"mst",children:"Mountain Standard Time (MST)"}),e.jsx(a,{value:"pst",children:"Pacific Standard Time (PST)"})]}),e.jsx(B,{}),e.jsxs(d,{children:[e.jsx(u,{children:"Europe"}),e.jsx(a,{value:"gmt",children:"Greenwich Mean Time (GMT)"}),e.jsx(a,{value:"cet",children:"Central European Time (CET)"}),e.jsx(a,{value:"eet",children:"Eastern European Time (EET)"})]})]})]})},o={render:()=>e.jsxs(t,{disabled:!0,children:[e.jsx(l,{className:"w-[180px]",children:e.jsx(r,{placeholder:"Select a fruit"})}),e.jsxs(n,{children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"banana",children:"Banana"})]})]})},p={render:()=>e.jsxs(t,{defaultValue:"banana",children:[e.jsx(l,{className:"w-[180px]",children:e.jsx(r,{placeholder:"Select a fruit"})}),e.jsxs(n,{children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"orange",children:"Orange"})]})]})},m={render:()=>e.jsxs(t,{children:[e.jsx(l,{className:"w-[240px]",children:e.jsx(r,{placeholder:"Select a country"})}),e.jsx(n,{children:["United States","United Kingdom","Canada","Australia","Germany","France","Japan","China","India","Brazil","Mexico","Spain","Italy","Netherlands","Sweden"].map(S=>e.jsx(a,{value:S.toLowerCase().replace(" ","-"),children:S},S))})]})};var h,x,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
}`,...(g=(x=c.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,v,I;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="fruit-select">Choose your favorite fruit</Label>
      <Select>
        <SelectTrigger className="w-[240px]" id="fruit-select">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var T,C,f;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var b,E,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
      </SelectContent>
    </Select>
}`,...(w=(E=o.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var N,L,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Select defaultValue="banana">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
}`,...(G=(L=p.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var y,A,V;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        {["United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Japan", "China", "India", "Brazil", "Mexico", "Spain", "Italy", "Netherlands", "Sweden"].map(country => <SelectItem key={country} value={country.toLowerCase().replace(" ", "-")}>
            {country}
          </SelectItem>)}
      </SelectContent>
    </Select>
}`,...(V=(A=m.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};const pe=["Default","WithLabel","WithGroups","Disabled","WithDefaultValue","LongList"];export{c as Default,o as Disabled,m as LongList,p as WithDefaultValue,i as WithGroups,s as WithLabel,pe as __namedExportsOrder,oe as default};
