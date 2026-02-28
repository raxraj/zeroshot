import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{P as s}from"./progress-CAaWFMt8.js";import{r as d}from"./index-pP6CS22B.js";import"./index-Bvak3XBe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./utils-BLSKlp9E.js";const O={title:"Components/Display/Progress",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"The progress value (0-100)"}}},r={args:{value:50,className:"w-[400px]"}},a={args:{value:0,className:"w-[400px]"}},n={args:{value:100,className:"w-[400px]"}},t={render:()=>e.jsxs("div",{className:"w-[400px] space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Uploading..."}),e.jsxs("span",{className:"text-muted-foreground",children:[60,"%"]})]}),e.jsx(s,{value:60})]})},o={render:()=>{const[p,U]=d.useState(0);return d.useEffect(()=>{const C=setInterval(()=>{U(l=>l>=100?0:l+10)},500);return()=>clearInterval(C)},[]),e.jsxs("div",{className:"w-[400px] space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{className:"text-muted-foreground",children:[p,"%"]})]}),e.jsx(s,{value:p})]})}},c={render:()=>e.jsxs("div",{className:"w-[400px] space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Video Processing"}),e.jsx("span",{className:"text-muted-foreground",children:"75%"})]}),e.jsx(s,{value:75})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Image Upload"}),e.jsx("span",{className:"text-muted-foreground",children:"45%"})]}),e.jsx(s,{value:45})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Data Sync"}),e.jsx("span",{className:"text-muted-foreground",children:"90%"})]}),e.jsx(s,{value:90})]})]})};var m,i,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 50,
    className: "w-[400px]"
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var x,v,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 0,
    className: "w-[400px]"
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,j,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 100,
    className: "w-[400px]"
  }
}`,...(N=(j=n.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,h,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const progress = 60;
    return <div className="w-[400px] space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading...</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>;
  }
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var P,b,S;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 10;
        });
      }, 500);
      return () => clearInterval(timer);
    }, []);
    return <div className="w-[400px] space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>;
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,D,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Video Processing</span>
          <span className="text-muted-foreground">75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Image Upload</span>
          <span className="text-muted-foreground">45%</span>
        </div>
        <Progress value={45} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Data Sync</span>
          <span className="text-muted-foreground">90%</span>
        </div>
        <Progress value={90} />
      </div>
    </div>
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const R=["Default","Zero","Complete","WithLabel","Animated","Multiple"];export{o as Animated,n as Complete,r as Default,c as Multiple,t as WithLabel,a as Zero,R as __namedExportsOrder,O as default};
