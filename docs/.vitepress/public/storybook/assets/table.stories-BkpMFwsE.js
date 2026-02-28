import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T as t,a as f,b as c,c as n,d as a,e as m,f as l,g as v}from"./table-CT3DqNl1.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BLSKlp9E.js";const $={title:"Components/Display/Table",component:t,parameters:{layout:"centered"},tags:["autodocs"]},H=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],o={render:()=>e.jsxs(t,{className:"w-[700px]",children:[e.jsx(f,{children:"A list of your recent invoices."}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(a,{className:"w-[100px]",children:"Invoice"}),e.jsx(a,{children:"Status"}),e.jsx(a,{children:"Method"}),e.jsx(a,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:H.map(s=>e.jsxs(n,{children:[e.jsx(l,{className:"font-medium",children:s.invoice}),e.jsx(l,{children:s.paymentStatus}),e.jsx(l,{children:s.paymentMethod}),e.jsx(l,{className:"text-right",children:s.totalAmount})]},s.invoice))})]})},i={render:()=>e.jsxs(t,{className:"w-[700px]",children:[e.jsx(f,{children:"A list of your recent invoices."}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(a,{className:"w-[100px]",children:"Invoice"}),e.jsx(a,{children:"Status"}),e.jsx(a,{children:"Method"}),e.jsx(a,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:H.slice(0,5).map(s=>e.jsxs(n,{children:[e.jsx(l,{className:"font-medium",children:s.invoice}),e.jsx(l,{children:s.paymentStatus}),e.jsx(l,{children:s.paymentMethod}),e.jsx(l,{className:"text-right",children:s.totalAmount})]},s.invoice))}),e.jsx(v,{children:e.jsxs(n,{children:[e.jsx(l,{colSpan:3,children:"Total"}),e.jsx(l,{className:"text-right",children:"$1,750.00"})]})})]})},r={render:()=>e.jsxs(t,{className:"w-[500px]",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Developer"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{children:"jane@example.com"}),e.jsx(l,{children:"Designer"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{children:"bob@example.com"}),e.jsx(l,{children:"Manager"})]})]})]})},d={render:()=>e.jsxs(t,{className:"w-[700px]",children:[e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(a,{children:"Order ID"}),e.jsx(a,{children:"Customer"}),e.jsx(a,{children:"Status"}),e.jsx(a,{className:"text-right",children:"Total"})]})}),e.jsxs(m,{children:[e.jsxs(n,{children:[e.jsx(l,{className:"font-medium",children:"#3210"}),e.jsx(l,{children:"Olivia Martin"}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500",children:"Completed"})}),e.jsx(l,{className:"text-right",children:"$1,999.00"})]}),e.jsxs(n,{children:[e.jsx(l,{className:"font-medium",children:"#3209"}),e.jsx(l,{children:"Noah Williams"}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500",children:"Pending"})}),e.jsx(l,{className:"text-right",children:"$39.00"})]}),e.jsxs(n,{children:[e.jsx(l,{className:"font-medium",children:"#3208"}),e.jsx(l,{children:"Emma Johnson"}),e.jsx(l,{children:e.jsx("span",{className:"inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-500/10 text-red-500",children:"Cancelled"})}),e.jsx(l,{className:"text-right",children:"$299.00"})]})]})]})};var b,T,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Table className="w-[700px]">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...(x=(T=o.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var h,p,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table className="w-[700px]">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 5).map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var j,C,N;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Table className="w-[500px]">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Developer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Designer</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Manager</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(N=(C=r.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var y,g,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Table className="w-[700px]">
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">#3210</TableCell>
          <TableCell>Olivia Martin</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500">
              Completed
            </span>
          </TableCell>
          <TableCell className="text-right">$1,999.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#3209</TableCell>
          <TableCell>Noah Williams</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-500">
              Pending
            </span>
          </TableCell>
          <TableCell className="text-right">$39.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#3208</TableCell>
          <TableCell>Emma Johnson</TableCell>
          <TableCell>
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-500/10 text-red-500">
              Cancelled
            </span>
          </TableCell>
          <TableCell className="text-right">$299.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(w=(g=d.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const I=["Default","WithFooter","Simple","WithStatusBadges"];export{o as Default,r as Simple,i as WithFooter,d as WithStatusBadges,I as __namedExportsOrder,$ as default};
