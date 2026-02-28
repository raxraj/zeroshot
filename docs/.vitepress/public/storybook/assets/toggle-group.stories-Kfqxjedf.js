import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{R as u,r as w}from"./index-pP6CS22B.js";import{c as ie}from"./index-BVduLaKl.js";import{P as _}from"./index-D-hjI41K.js";import{I as ge,c as q,R as ue}from"./index-CkPwm_CN.js";import{a as ce,t as pe,B as v,I as T,U as G}from"./toggle-ZnJ32AD2.js";import{u as W}from"./index-Ck0Qw0kh.js";import{u as me}from"./index-C7OyeuXp.js";import{c as J}from"./utils-BLSKlp9E.js";import{c as C}from"./createLucideIcon-DEP7aKU9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bvak3XBe.js";import"./index-x8NkB57A.js";import"./index-CYVZouvf.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-DSMx10ar.js";import"./index-1evVQkiP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=C("AlignCenter",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=C("AlignLeft",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=C("AlignRight",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);var p="ToggleGroup",[Y]=ie(p,[q]),Z=q(),A=u.forwardRef((l,r)=>{const{type:t,...a}=l;if(t==="single"){const s=a;return e.jsx(de,{...s,ref:r})}if(t==="multiple"){const s=a;return e.jsx(he,{...s,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${p}\``)});A.displayName=p;var[ee,le]=Y(p),de=u.forwardRef((l,r)=>{const{value:t,defaultValue:a,onValueChange:s=()=>{},...n}=l,[i,g]=W({prop:t,defaultProp:a??"",onChange:s,caller:p});return e.jsx(ee,{scope:l.__scopeToggleGroup,type:"single",value:u.useMemo(()=>i?[i]:[],[i]),onItemActivate:g,onItemDeactivate:u.useCallback(()=>g(""),[g]),children:e.jsx(oe,{...n,ref:r})})}),he=u.forwardRef((l,r)=>{const{value:t,defaultValue:a,onValueChange:s=()=>{},...n}=l,[i,g]=W({prop:t,defaultProp:a??[],onChange:s,caller:p}),m=u.useCallback(d=>g((h=[])=>[...h,d]),[g]),b=u.useCallback(d=>g((h=[])=>h.filter(ne=>ne!==d)),[g]);return e.jsx(ee,{scope:l.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:m,onItemDeactivate:b,children:e.jsx(oe,{...n,ref:r})})});A.displayName=p;var[ve,Te]=Y(p),oe=u.forwardRef((l,r)=>{const{__scopeToggleGroup:t,disabled:a=!1,rovingFocus:s=!0,orientation:n,dir:i,loop:g=!0,...m}=l,b=Z(t),d=me(i),h={role:"group",dir:d,...m};return e.jsx(ve,{scope:t,rovingFocus:s,disabled:a,children:s?e.jsx(ue,{asChild:!0,...b,orientation:n,dir:d,loop:g,children:e.jsx(_.div,{...h,ref:r})}):e.jsx(_.div,{...h,ref:r})})}),y="ToggleGroupItem",re=u.forwardRef((l,r)=>{const t=le(y,l.__scopeToggleGroup),a=Te(y,l.__scopeToggleGroup),s=Z(l.__scopeToggleGroup),n=t.value.includes(l.value),i=a.disabled||l.disabled,g={...l,pressed:n,disabled:i},m=u.useRef(null);return a.rovingFocus?e.jsx(ge,{asChild:!0,...s,focusable:!i,active:n,ref:m,children:e.jsx(P,{...g,ref:r})}):e.jsx(P,{...g,ref:r})});re.displayName=y;var P=u.forwardRef((l,r)=>{const{__scopeToggleGroup:t,value:a,...s}=l,n=le(y,t),i={role:"radio","aria-checked":l.pressed,"aria-pressed":void 0},g=n.type==="single"?i:void 0;return e.jsx(ce,{...g,...s,ref:r,onPressedChange:m=>{m?n.onItemActivate(a):n.onItemDeactivate(a)}})}),ae=A,se=re;const te=w.createContext({size:"default",variant:"default"}),c=w.forwardRef(({className:l,variant:r,size:t,children:a,...s},n)=>e.jsx(ae,{ref:n,className:J("flex items-center justify-center gap-1",l),...s,children:e.jsx(te.Provider,{value:{variant:r,size:t},children:a})}));c.displayName=ae.displayName;const o=w.forwardRef(({className:l,children:r,variant:t,size:a,...s},n)=>{const i=w.useContext(te);return e.jsx(se,{ref:n,className:J(pe({variant:i.variant||t,size:i.size||a}),l),...s,children:r})});o.displayName=se.displayName;c.__docgenInfo={description:"",methods:[]};o.__docgenInfo={description:"",methods:[]};const Be={title:"Components/Layout/ToggleGroup",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["single","multiple"],description:"Whether single or multiple items can be pressed"},variant:{control:"select",options:["default","outline"],description:"The visual style variant"},size:{control:"select",options:["default","sm","lg"],description:"The size of the toggle items"}}},x={render:()=>e.jsxs(c,{type:"multiple",children:[e.jsx(o,{value:"bold","aria-label":"Toggle bold",children:e.jsx(v,{className:"h-4 w-4"})}),e.jsx(o,{value:"italic","aria-label":"Toggle italic",children:e.jsx(T,{className:"h-4 w-4"})}),e.jsx(o,{value:"underline","aria-label":"Toggle underline",children:e.jsx(G,{className:"h-4 w-4"})})]})},j={render:()=>e.jsxs(c,{type:"single",children:[e.jsx(o,{value:"left","aria-label":"Align left",children:e.jsx(Q,{className:"h-4 w-4"})}),e.jsx(o,{value:"center","aria-label":"Align center",children:e.jsx(K,{className:"h-4 w-4"})}),e.jsx(o,{value:"right","aria-label":"Align right",children:e.jsx(X,{className:"h-4 w-4"})})]})},I={render:()=>e.jsxs(c,{type:"multiple",variant:"outline",children:[e.jsx(o,{value:"bold",children:e.jsx(v,{className:"h-4 w-4"})}),e.jsx(o,{value:"italic",children:e.jsx(T,{className:"h-4 w-4"})}),e.jsx(o,{value:"underline",children:e.jsx(G,{className:"h-4 w-4"})})]})},f={render:()=>e.jsxs(c,{type:"single",children:[e.jsxs(o,{value:"left",children:[e.jsx(Q,{className:"h-4 w-4 mr-2"}),"Left"]}),e.jsxs(o,{value:"center",children:[e.jsx(K,{className:"h-4 w-4 mr-2"}),"Center"]}),e.jsxs(o,{value:"right",children:[e.jsx(X,{className:"h-4 w-4 mr-2"}),"Right"]})]})},N={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(c,{type:"multiple",size:"sm",children:[e.jsx(o,{value:"bold",children:e.jsx(v,{className:"h-3 w-3"})}),e.jsx(o,{value:"italic",children:e.jsx(T,{className:"h-3 w-3"})}),e.jsx(o,{value:"underline",children:e.jsx(G,{className:"h-3 w-3"})})]}),e.jsxs(c,{type:"multiple",size:"default",children:[e.jsx(o,{value:"bold",children:e.jsx(v,{className:"h-4 w-4"})}),e.jsx(o,{value:"italic",children:e.jsx(T,{className:"h-4 w-4"})}),e.jsx(o,{value:"underline",children:e.jsx(G,{className:"h-4 w-4"})})]}),e.jsxs(c,{type:"multiple",size:"lg",children:[e.jsx(o,{value:"bold",children:e.jsx(v,{className:"h-5 w-5"})}),e.jsx(o,{value:"italic",children:e.jsx(T,{className:"h-5 w-5"})}),e.jsx(o,{value:"underline",children:e.jsx(G,{className:"h-5 w-5"})})]})]})};var R,S,M;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(M=(S=x.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var k,z,B;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(B=(z=j.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,L,V;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(V=(L=I.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var E,U,D;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single">
      <ToggleGroupItem value="left">
        <AlignLeft className="h-4 w-4 mr-2" />
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="h-4 w-4 mr-2" />
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="h-4 w-4 mr-2" />
        Right
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(D=(U=f.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var F,O,$;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <ToggleGroup type="multiple" size="sm">
        <ToggleGroupItem value="bold">
          <Bold className="h-3 w-3" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-3 w-3" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-3 w-3" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="multiple" size="default">
        <ToggleGroupItem value="bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="multiple" size="lg">
        <ToggleGroupItem value="bold">
          <Bold className="h-5 w-5" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-5 w-5" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-5 w-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...($=(O=N.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const He=["Default","Single","Outline","WithText","Sizes"];export{x as Default,I as Outline,j as Single,N as Sizes,f as WithText,He as __namedExportsOrder,Be as default};
