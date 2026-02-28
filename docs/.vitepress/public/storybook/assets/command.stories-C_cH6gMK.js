import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as o}from"./index-pP6CS22B.js";import{R as tn,P as rn,O as an,C as on}from"./index-Da0p-t-g.js";import{P as A}from"./index-D-hjI41K.js";import{u as K}from"./index-BRAnmMrq.js";import{c as Z}from"./index-x8NkB57A.js";import{c as L}from"./utils-BLSKlp9E.js";import{D as dn,b as mn}from"./dialog-CCHRZT-h.js";import{S as sn}from"./search-C-UEa-iZ.js";import{B as ln}from"./button-WnlYhIif.js";import{C as $e}from"./calendar-y9rfTC-H.js";import{c as Ke}from"./createLucideIcon-DEP7aKU9.js";import{U as Ue,C as Ve}from"./user-D9AISHxR.js";import{S as qe}from"./settings-Dfsd1c1S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BVduLaKl.js";import"./index-Ck0Qw0kh.js";import"./index-xdNYasdH.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-Bvak3XBe.js";import"./index-CbcPFHB_.js";import"./x-DFQ5vw_2.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=Ke("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=Ke("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);var be=1,cn=.9,un=.8,pn=.17,ue=.1,pe=.999,hn=.9999,fn=.99,Cn=/[\\\/_+.#"@\[\(\{&]/,xn=/[\\\/_+.#"@\[\(\{&]/g,gn=/[\s-]/,We=/[\s-]/g;function fe(n,a,r,h,m,i,u){if(i===a.length)return m===n.length?be:fn;var f=`${m},${i}`;if(u[f]!==void 0)return u[f];for(var j=h.charAt(i),s=r.indexOf(j,m),x=0,g,E,w,_;s>=0;)g=fe(n,a,r,h,s+1,i+1,u),g>x&&(s===m?g*=be:Cn.test(n.charAt(s-1))?(g*=un,w=n.slice(m,s-1).match(xn),w&&m>0&&(g*=Math.pow(pe,w.length))):gn.test(n.charAt(s-1))?(g*=cn,_=n.slice(m,s-1).match(We),_&&m>0&&(g*=Math.pow(pe,_.length))):(g*=pn,m>0&&(g*=Math.pow(pe,s-m))),n.charAt(s)!==a.charAt(i)&&(g*=hn)),(g<ue&&r.charAt(s-1)===h.charAt(i+1)||h.charAt(i+1)===h.charAt(i)&&r.charAt(s-1)!==h.charAt(i))&&(E=fe(n,a,r,h,s+1,i+2,u),E*ue>g&&(g=E*ue)),g>x&&(x=g),s=r.indexOf(j,s+1);return u[f]=x,x}function ke(n){return n.toLowerCase().replace(We," ")}function vn(n,a,r){return n=r&&r.length>0?`${n+" "+r.join(" ")}`:n,fe(n,a,ke(n),ke(a),0,0,{})}var W='[cmdk-group=""]',he='[cmdk-group-items=""]',jn='[cmdk-group-heading=""]',Ze='[cmdk-item=""]',Ne=`${Ze}:not([aria-disabled="true"])`,Ce="cmdk-item-select",F="data-value",yn=(n,a,r)=>vn(n,a,r),Je=o.createContext(void 0),J=()=>o.useContext(Je),Xe=o.createContext(void 0),xe=()=>o.useContext(Xe),He=o.createContext(void 0),Ye=o.forwardRef((n,a)=>{let r=$(()=>{var t,l;return{search:"",value:(l=(t=n.value)!=null?t:n.defaultValue)!=null?l:"",selectedItemId:void 0,filtered:{count:0,items:new Map,groups:new Set}}}),h=$(()=>new Set),m=$(()=>new Map),i=$(()=>new Map),u=$(()=>new Set),f=Qe(n),{label:j,children:s,value:x,onValueChange:g,filter:E,shouldFilter:w,loop:_,disablePointerSelection:re=!1,vimBindings:D=!0,...X}=n,ae=K(),ge=K(),oe=K(),G=o.useRef(null),y=An();P(()=>{if(x!==void 0){let t=x.trim();r.current.value=t,b.emit()}},[x]),P(()=>{y(6,je)},[]);let b=o.useMemo(()=>({subscribe:t=>(u.current.add(t),()=>u.current.delete(t)),snapshot:()=>r.current,setState:(t,l,p)=>{var d,C,v,N;if(!Object.is(r.current[t],l)){if(r.current[t]=l,t==="search")le(),me(),y(1,se);else if(t==="value"){if(document.activeElement.hasAttribute("cmdk-input")||document.activeElement.hasAttribute("cmdk-root")){let I=document.getElementById(oe);I?I.focus():(d=document.getElementById(ae))==null||d.focus()}if(y(7,()=>{var I;r.current.selectedItemId=(I=B())==null?void 0:I.id,b.emit()}),p||y(5,je),((C=f.current)==null?void 0:C.value)!==void 0){let I=l??"";(N=(v=f.current).onValueChange)==null||N.call(v,I);return}}b.emit()}},emit:()=>{u.current.forEach(t=>t())}}),[]),de=o.useMemo(()=>({value:(t,l,p)=>{var d;l!==((d=i.current.get(t))==null?void 0:d.value)&&(i.current.set(t,{value:l,keywords:p}),r.current.filtered.items.set(t,ve(l,p)),y(2,()=>{me(),b.emit()}))},item:(t,l)=>(h.current.add(t),l&&(m.current.has(l)?m.current.get(l).add(t):m.current.set(l,new Set([t]))),y(3,()=>{le(),me(),r.current.value||se(),b.emit()}),()=>{i.current.delete(t),h.current.delete(t),r.current.filtered.items.delete(t);let p=B();y(4,()=>{le(),(p==null?void 0:p.getAttribute("id"))===t&&se(),b.emit()})}),group:t=>(m.current.has(t)||m.current.set(t,new Set),()=>{i.current.delete(t),m.current.delete(t)}),filter:()=>f.current.shouldFilter,label:j||n["aria-label"],getDisablePointerSelection:()=>f.current.disablePointerSelection,listId:ae,inputId:oe,labelId:ge,listInnerRef:G}),[]);function ve(t,l){var p,d;let C=(d=(p=f.current)==null?void 0:p.filter)!=null?d:yn;return t?C(t,r.current.search,l):0}function me(){if(!r.current.search||f.current.shouldFilter===!1)return;let t=r.current.filtered.items,l=[];r.current.filtered.groups.forEach(d=>{let C=m.current.get(d),v=0;C.forEach(N=>{let I=t.get(N);v=Math.max(I,v)}),l.push([d,v])});let p=G.current;T().sort((d,C)=>{var v,N;let I=d.getAttribute("id"),H=C.getAttribute("id");return((v=t.get(H))!=null?v:0)-((N=t.get(I))!=null?N:0)}).forEach(d=>{let C=d.closest(he);C?C.appendChild(d.parentElement===C?d:d.closest(`${he} > *`)):p.appendChild(d.parentElement===p?d:d.closest(`${he} > *`))}),l.sort((d,C)=>C[1]-d[1]).forEach(d=>{var C;let v=(C=G.current)==null?void 0:C.querySelector(`${W}[${F}="${encodeURIComponent(d[0])}"]`);v==null||v.parentElement.appendChild(v)})}function se(){let t=T().find(p=>p.getAttribute("aria-disabled")!=="true"),l=t==null?void 0:t.getAttribute(F);b.setState("value",l||void 0)}function le(){var t,l,p,d;if(!r.current.search||f.current.shouldFilter===!1){r.current.filtered.count=h.current.size;return}r.current.filtered.groups=new Set;let C=0;for(let v of h.current){let N=(l=(t=i.current.get(v))==null?void 0:t.value)!=null?l:"",I=(d=(p=i.current.get(v))==null?void 0:p.keywords)!=null?d:[],H=ve(N,I);r.current.filtered.items.set(v,H),H>0&&C++}for(let[v,N]of m.current)for(let I of N)if(r.current.filtered.items.get(I)>0){r.current.filtered.groups.add(v);break}r.current.filtered.count=C}function je(){var t,l,p;let d=B();d&&(((t=d.parentElement)==null?void 0:t.firstChild)===d&&((p=(l=d.closest(W))==null?void 0:l.querySelector(jn))==null||p.scrollIntoView({block:"nearest"})),d.scrollIntoView({block:"nearest"}))}function B(){var t;return(t=G.current)==null?void 0:t.querySelector(`${Ze}[aria-selected="true"]`)}function T(){var t;return Array.from(((t=G.current)==null?void 0:t.querySelectorAll(Ne))||[])}function ie(t){let l=T()[t];l&&b.setState("value",l.getAttribute(F))}function ce(t){var l;let p=B(),d=T(),C=d.findIndex(N=>N===p),v=d[C+t];(l=f.current)!=null&&l.loop&&(v=C+t<0?d[d.length-1]:C+t===d.length?d[0]:d[C+t]),v&&b.setState("value",v.getAttribute(F))}function ye(t){let l=B(),p=l==null?void 0:l.closest(W),d;for(;p&&!d;)p=t>0?_n(p,W):Mn(p,W),d=p==null?void 0:p.querySelector(Ne);d?b.setState("value",d.getAttribute(F)):ce(t)}let Se=()=>ie(T().length-1),Ie=t=>{t.preventDefault(),t.metaKey?Se():t.altKey?ye(1):ce(1)},we=t=>{t.preventDefault(),t.metaKey?ie(0):t.altKey?ye(-1):ce(-1)};return o.createElement(A.div,{ref:a,tabIndex:-1,...X,"cmdk-root":"",onKeyDown:t=>{var l;(l=X.onKeyDown)==null||l.call(X,t);let p=t.nativeEvent.isComposing||t.keyCode===229;if(!(t.defaultPrevented||p))switch(t.key){case"n":case"j":{D&&t.ctrlKey&&Ie(t);break}case"ArrowDown":{Ie(t);break}case"p":case"k":{D&&t.ctrlKey&&we(t);break}case"ArrowUp":{we(t);break}case"Home":{t.preventDefault(),ie(0);break}case"End":{t.preventDefault(),Se();break}case"Enter":{t.preventDefault();let d=B();if(d){let C=new Event(Ce);d.dispatchEvent(C)}}}}},o.createElement("label",{"cmdk-label":"",htmlFor:de.inputId,id:de.labelId,style:Gn},j),te(n,t=>o.createElement(Xe.Provider,{value:b},o.createElement(Je.Provider,{value:de},t))))}),Sn=o.forwardRef((n,a)=>{var r,h;let m=K(),i=o.useRef(null),u=o.useContext(He),f=J(),j=Qe(n),s=(h=(r=j.current)==null?void 0:r.forceMount)!=null?h:u==null?void 0:u.forceMount;P(()=>{if(!s)return f.item(m,u==null?void 0:u.id)},[s]);let x=en(m,i,[n.value,n.children,i],n.keywords),g=xe(),E=M(y=>y.value&&y.value===x.current),w=M(y=>s||f.filter()===!1?!0:y.search?y.filtered.items.get(m)>0:!0);o.useEffect(()=>{let y=i.current;if(!(!y||n.disabled))return y.addEventListener(Ce,_),()=>y.removeEventListener(Ce,_)},[w,n.onSelect,n.disabled]);function _(){var y,b;re(),(b=(y=j.current).onSelect)==null||b.call(y,x.current)}function re(){g.setState("value",x.current,!0)}if(!w)return null;let{disabled:D,value:X,onSelect:ae,forceMount:ge,keywords:oe,...G}=n;return o.createElement(A.div,{ref:Z(i,a),...G,id:m,"cmdk-item":"",role:"option","aria-disabled":!!D,"aria-selected":!!E,"data-disabled":!!D,"data-selected":!!E,onPointerMove:D||f.getDisablePointerSelection()?void 0:re,onClick:D?void 0:_},n.children)}),In=o.forwardRef((n,a)=>{let{heading:r,children:h,forceMount:m,...i}=n,u=K(),f=o.useRef(null),j=o.useRef(null),s=K(),x=J(),g=M(w=>m||x.filter()===!1?!0:w.search?w.filtered.groups.has(u):!0);P(()=>x.group(u),[]),en(u,f,[n.value,n.heading,j]);let E=o.useMemo(()=>({id:u,forceMount:m}),[m]);return o.createElement(A.div,{ref:Z(f,a),...i,"cmdk-group":"",role:"presentation",hidden:g?void 0:!0},r&&o.createElement("div",{ref:j,"cmdk-group-heading":"","aria-hidden":!0,id:s},r),te(n,w=>o.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":r?s:void 0},o.createElement(He.Provider,{value:E},w))))}),wn=o.forwardRef((n,a)=>{let{alwaysRender:r,...h}=n,m=o.useRef(null),i=M(u=>!u.search);return!r&&!i?null:o.createElement(A.div,{ref:Z(m,a),...h,"cmdk-separator":"",role:"separator"})}),bn=o.forwardRef((n,a)=>{let{onValueChange:r,...h}=n,m=n.value!=null,i=xe(),u=M(s=>s.search),f=M(s=>s.selectedItemId),j=J();return o.useEffect(()=>{n.value!=null&&i.setState("search",n.value)},[n.value]),o.createElement(A.input,{ref:a,...h,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":j.listId,"aria-labelledby":j.labelId,"aria-activedescendant":f,id:j.inputId,type:"text",value:m?n.value:u,onChange:s=>{m||i.setState("search",s.target.value),r==null||r(s.target.value)}})}),kn=o.forwardRef((n,a)=>{let{children:r,label:h="Suggestions",...m}=n,i=o.useRef(null),u=o.useRef(null),f=M(s=>s.selectedItemId),j=J();return o.useEffect(()=>{if(u.current&&i.current){let s=u.current,x=i.current,g,E=new ResizeObserver(()=>{g=requestAnimationFrame(()=>{let w=s.offsetHeight;x.style.setProperty("--cmdk-list-height",w.toFixed(1)+"px")})});return E.observe(s),()=>{cancelAnimationFrame(g),E.unobserve(s)}}},[]),o.createElement(A.div,{ref:Z(i,a),...m,"cmdk-list":"",role:"listbox",tabIndex:-1,"aria-activedescendant":f,"aria-label":h,id:j.listId},te(n,s=>o.createElement("div",{ref:Z(u,j.listInnerRef),"cmdk-list-sizer":""},s)))}),Nn=o.forwardRef((n,a)=>{let{open:r,onOpenChange:h,overlayClassName:m,contentClassName:i,container:u,...f}=n;return o.createElement(tn,{open:r,onOpenChange:h},o.createElement(rn,{container:u},o.createElement(an,{"cmdk-overlay":"",className:m}),o.createElement(on,{"aria-label":n.label,"cmdk-dialog":"",className:i},o.createElement(Ye,{ref:a,...f}))))}),En=o.forwardRef((n,a)=>M(r=>r.filtered.count===0)?o.createElement(A.div,{ref:a,...n,"cmdk-empty":"",role:"presentation"}):null),Rn=o.forwardRef((n,a)=>{let{progress:r,children:h,label:m="Loading...",...i}=n;return o.createElement(A.div,{ref:a,...i,"cmdk-loading":"",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,"aria-label":m},te(n,u=>o.createElement("div",{"aria-hidden":!0},u)))}),k=Object.assign(Ye,{List:kn,Item:Sn,Input:bn,Group:In,Separator:wn,Dialog:Nn,Empty:En,Loading:Rn});function _n(n,a){let r=n.nextElementSibling;for(;r;){if(r.matches(a))return r;r=r.nextElementSibling}}function Mn(n,a){let r=n.previousElementSibling;for(;r;){if(r.matches(a))return r;r=r.previousElementSibling}}function Qe(n){let a=o.useRef(n);return P(()=>{a.current=n}),a}var P=typeof window>"u"?o.useEffect:o.useLayoutEffect;function $(n){let a=o.useRef();return a.current===void 0&&(a.current=n()),a}function M(n){let a=xe(),r=()=>n(a.snapshot());return o.useSyncExternalStore(a.subscribe,r,r)}function en(n,a,r,h=[]){let m=o.useRef(),i=J();return P(()=>{var u;let f=(()=>{var s;for(let x of r){if(typeof x=="string")return x.trim();if(typeof x=="object"&&"current"in x)return x.current?(s=x.current.textContent)==null?void 0:s.trim():m.current}})(),j=h.map(s=>s.trim());i.value(n,f,j),(u=a.current)==null||u.setAttribute(F,f),m.current=f}),m}var An=()=>{let[n,a]=o.useState(),r=$(()=>new Map);return P(()=>{r.current.forEach(h=>h()),r.current=new Map},[n]),(h,m)=>{r.current.set(h,m),a({})}};function Dn(n){let a=n.type;return typeof a=="function"?a(n.props):"render"in a?a.render(n.props):n}function te({asChild:n,children:a},r){return n&&o.isValidElement(a)?o.cloneElement(Dn(a),{ref:a.ref},r(a.props.children)):r(a)}var Gn={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const O=o.forwardRef(({className:n,...a},r)=>e.jsx(k,{ref:r,className:L("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",n),...a}));O.displayName=k.displayName;const nn=({children:n,...a})=>e.jsx(dn,{...a,children:e.jsx(mn,{className:"overflow-hidden p-0 shadow-lg",children:e.jsx(O,{className:"[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",children:n})})}),U=o.forwardRef(({className:n,...a},r)=>e.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[e.jsx(sn,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),e.jsx(k.Input,{ref:r,className:L("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",n),...a})]}));U.displayName=k.Input.displayName;const V=o.forwardRef(({className:n,...a},r)=>e.jsx(k.List,{ref:r,className:L("max-h-[300px] overflow-y-auto overflow-x-hidden",n),...a}));V.displayName=k.List.displayName;const q=o.forwardRef((n,a)=>e.jsx(k.Empty,{ref:a,className:"py-6 text-center text-sm",...n}));q.displayName=k.Empty.displayName;const R=o.forwardRef(({className:n,...a},r)=>e.jsx(k.Group,{ref:r,className:L("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",n),...a}));R.displayName=k.Group.displayName;const z=o.forwardRef(({className:n,...a},r)=>e.jsx(k.Separator,{ref:r,className:L("-mx-1 h-px bg-border",n),...a}));z.displayName=k.Separator.displayName;const c=o.forwardRef(({className:n,...a},r)=>e.jsx(k.Item,{ref:r,className:L("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",n),...a}));c.displayName=k.Item.displayName;const S=({className:n,...a})=>e.jsx("span",{className:L("ml-auto text-xs tracking-widest text-muted-foreground",n),...a});S.displayName="CommandShortcut";O.__docgenInfo={description:"",methods:[]};nn.__docgenInfo={description:"",methods:[],displayName:"CommandDialog",composes:["DialogProps"]};U.__docgenInfo={description:"",methods:[]};V.__docgenInfo={description:"",methods:[]};q.__docgenInfo={description:"",methods:[]};R.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[]};S.__docgenInfo={description:"",methods:[],displayName:"CommandShortcut"};z.__docgenInfo={description:"",methods:[]};const mt={title:"Components/Overlays/Command",component:O,parameters:{layout:"centered"},tags:["autodocs"]},Y={render:()=>e.jsxs(O,{className:"rounded-lg border shadow-md w-[450px]",children:[e.jsx(U,{placeholder:"Type a command or search..."}),e.jsxs(V,{children:[e.jsx(q,{children:"No results found."}),e.jsxs(R,{heading:"Suggestions",children:[e.jsxs(c,{children:[e.jsx($e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Calendar"})]}),e.jsxs(c,{children:[e.jsx(Te,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Search Emoji"})]}),e.jsxs(c,{children:[e.jsx(ze,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Calculator"})]})]}),e.jsx(z,{}),e.jsxs(R,{heading:"Settings",children:[e.jsxs(c,{children:[e.jsx(Ue,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Profile"}),e.jsx(S,{children:"⌘P"})]}),e.jsxs(c,{children:[e.jsx(Ve,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Billing"}),e.jsx(S,{children:"⌘B"})]}),e.jsxs(c,{children:[e.jsx(qe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Settings"}),e.jsx(S,{children:"⌘S"})]})]})]})]})},Q={render:()=>{const[n,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(ln,{variant:"outline",onClick:()=>a(!0),children:"Open Command Menu"}),e.jsxs(nn,{open:n,onOpenChange:a,children:[e.jsx(U,{placeholder:"Type a command or search..."}),e.jsxs(V,{children:[e.jsx(q,{children:"No results found."}),e.jsxs(R,{heading:"Suggestions",children:[e.jsxs(c,{children:[e.jsx($e,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Calendar"})]}),e.jsxs(c,{children:[e.jsx(Te,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Search Emoji"})]}),e.jsxs(c,{children:[e.jsx(ze,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Calculator"})]})]}),e.jsx(z,{}),e.jsxs(R,{heading:"Settings",children:[e.jsxs(c,{children:[e.jsx(Ue,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Profile"}),e.jsx(S,{children:"⌘P"})]}),e.jsxs(c,{children:[e.jsx(Ve,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Billing"}),e.jsx(S,{children:"⌘B"})]}),e.jsxs(c,{children:[e.jsx(qe,{className:"mr-2 h-4 w-4"}),e.jsx("span",{children:"Settings"}),e.jsx(S,{children:"⌘S"})]})]})]})]})]})}},ee={render:()=>e.jsxs(O,{className:"rounded-lg border shadow-md w-[450px]",children:[e.jsx(U,{placeholder:"Search commands..."}),e.jsxs(V,{children:[e.jsx(q,{children:"No results found."}),e.jsxs(R,{heading:"File",children:[e.jsxs(c,{children:[e.jsx("span",{children:"New File"}),e.jsx(S,{children:"⌘N"})]}),e.jsxs(c,{children:[e.jsx("span",{children:"Open File"}),e.jsx(S,{children:"⌘O"})]}),e.jsxs(c,{children:[e.jsx("span",{children:"Save"}),e.jsx(S,{children:"⌘S"})]})]}),e.jsx(z,{}),e.jsxs(R,{heading:"Edit",children:[e.jsxs(c,{children:[e.jsx("span",{children:"Undo"}),e.jsx(S,{children:"⌘Z"})]}),e.jsxs(c,{children:[e.jsx("span",{children:"Redo"}),e.jsx(S,{children:"⌘⇧Z"})]}),e.jsxs(c,{children:[e.jsx("span",{children:"Cut"}),e.jsx(S,{children:"⌘X"})]}),e.jsxs(c,{children:[e.jsx("span",{children:"Copy"}),e.jsx(S,{children:"⌘C"})]}),e.jsxs(c,{children:[e.jsx("span",{children:"Paste"}),e.jsx(S,{children:"⌘V"})]})]})]})]})},ne={render:()=>e.jsxs(O,{className:"rounded-lg border shadow-md w-[450px]",children:[e.jsx(U,{placeholder:"Search countries..."}),e.jsxs(V,{children:[e.jsx(q,{children:"No country found."}),e.jsxs(R,{heading:"Popular",children:[e.jsx(c,{children:"United States"}),e.jsx(c,{children:"United Kingdom"}),e.jsx(c,{children:"Canada"}),e.jsx(c,{children:"Australia"})]}),e.jsx(z,{}),e.jsxs(R,{heading:"All Countries",children:[e.jsx(c,{children:"France"}),e.jsx(c,{children:"Germany"}),e.jsx(c,{children:"Japan"}),e.jsx(c,{children:"China"}),e.jsx(c,{children:"India"}),e.jsx(c,{children:"Brazil"}),e.jsx(c,{children:"Mexico"}),e.jsx(c,{children:"Spain"}),e.jsx(c,{children:"Italy"})]})]})]})};var Ee,Re,_e;Y.parameters={...Y.parameters,docs:{...(Ee=Y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(_e=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var Me,Ae,De;Q.parameters={...Q.parameters,docs:{...(Me=Q.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Command Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>;
  }
}`,...(De=(Ae=Q.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Ge,Pe,Le;ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Search commands..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="File">
          <CommandItem>
            <span>New File</span>
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Open File</span>
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Save</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Edit">
          <CommandItem>
            <span>Undo</span>
            <CommandShortcut>⌘Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Redo</span>
            <CommandShortcut>⌘⇧Z</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Cut</span>
            <CommandShortcut>⌘X</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Copy</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Paste</span>
            <CommandShortcut>⌘V</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(Le=(Pe=ee.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var Oe,Be,Fe;ne.parameters={...ne.parameters,docs:{...(Oe=ne.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Search countries..." />
      <CommandList>
        <CommandEmpty>No country found.</CommandEmpty>
        <CommandGroup heading="Popular">
          <CommandItem>United States</CommandItem>
          <CommandItem>United Kingdom</CommandItem>
          <CommandItem>Canada</CommandItem>
          <CommandItem>Australia</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="All Countries">
          <CommandItem>France</CommandItem>
          <CommandItem>Germany</CommandItem>
          <CommandItem>Japan</CommandItem>
          <CommandItem>China</CommandItem>
          <CommandItem>India</CommandItem>
          <CommandItem>Brazil</CommandItem>
          <CommandItem>Mexico</CommandItem>
          <CommandItem>Spain</CommandItem>
          <CommandItem>Italy</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
}`,...(Fe=(Be=ne.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};const st=["Default","Dialog","WithKeyboardShortcuts","SearchableList"];export{Y as Default,Q as Dialog,ne as SearchableList,ee as WithKeyboardShortcuts,st as __namedExportsOrder,mt as default};
