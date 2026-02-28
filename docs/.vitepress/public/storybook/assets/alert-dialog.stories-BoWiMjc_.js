import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{A as r,a,b as i,c as s,d as c,e as g,f as d,g as D,h as u}from"./alert-dialog-DK-utN3U.js";import{B as A}from"./button-WnlYhIif.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BVduLaKl.js";import"./index-x8NkB57A.js";import"./index-Da0p-t-g.js";import"./index-D-hjI41K.js";import"./index-Bvak3XBe.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-Ck0Qw0kh.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-CbcPFHB_.js";import"./utils-BLSKlp9E.js";import"./index-cAPKYzjE.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEP7aKU9.js";const Q={title:"Components/Overlays/AlertDialog",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(A,{variant:"outline",children:"Show Dialog"})}),e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Are you absolutely sure?"}),e.jsx(g,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(d,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(u,{children:"Continue"})]})]})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(A,{variant:"destructive",children:"Delete Account"})}),e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Delete Account"}),e.jsx(g,{children:"Are you sure you want to delete your account? This action is permanent and cannot be undone. All your data will be permanently removed."})]}),e.jsxs(d,{children:[e.jsx(D,{children:"Cancel"}),e.jsx(u,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})]})]})]})},n={render:()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(A,{children:"Exit"})}),e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Unsaved Changes"}),e.jsx(g,{children:"You have unsaved changes. Do you want to save them before leaving?"})]}),e.jsxs(d,{children:[e.jsx(D,{children:"Don't Save"}),e.jsx(u,{children:"Save Changes"})]})]})]})},l={render:()=>e.jsxs(r,{children:[e.jsx(a,{asChild:!0,children:e.jsx(A,{variant:"ghost",children:"Logout"})}),e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Logout"}),e.jsx(g,{children:"Are you sure you want to logout from your account?"})]}),e.jsxs(d,{children:[e.jsx(D,{children:"Stay Logged In"}),e.jsx(u,{children:"Logout"})]})]})]})};var h,m,p;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,C,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? This action is permanent and cannot be undone. All your data
            will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(j=(C=o.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,y,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Exit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
          <AlertDialogDescription>
            You have unsaved changes. Do you want to save them before leaving?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don't Save</AlertDialogCancel>
          <AlertDialogAction>Save Changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,b,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">Logout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription>Are you sure you want to logout from your account?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
          <AlertDialogAction>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const V=["Default","DeleteConfirmation","SaveChanges","LogoutConfirmation"];export{t as Default,o as DeleteConfirmation,l as LogoutConfirmation,n as SaveChanges,V as __namedExportsOrder,Q as default};
