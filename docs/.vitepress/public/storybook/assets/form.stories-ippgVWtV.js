import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{u as F,a as x,F as j,b as n,c as m,d as l,e as a,g as i,f as t,o as B,s as c,i as V}from"./form-C2uRcm_L.js";import{I as d}from"./input-96f9qOh5.js";import{B as b}from"./button-WnlYhIif.js";import{C as k}from"./checkbox-CDZo1C4O.js";import{S as M,a as w,b as z,c as E,d as u}from"./select-B_zKb2Tv.js";import{T as R}from"./textarea-C_7t26eC.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./utils-BLSKlp9E.js";import"./label-BhlulYsX.js";import"./index-Bvak3XBe.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-BVduLaKl.js";import"./index-D-hjI41K.js";import"./index-Ck0Qw0kh.js";import"./index-xdNYasdH.js";import"./index-WyfESzTi.js";import"./index-n-b12q8t.js";import"./index-CbcPFHB_.js";import"./check--MVdLoPp.js";import"./index-BdQq_4o_.js";import"./index-CYVZouvf.js";import"./index-C7OyeuXp.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-BRAnmMrq.js";import"./index-Cb9tSa9l.js";import"./index-Cdr4akHR.js";import"./chevron-down-D-nzWkjq.js";const be={title:"Components/Forms/Form",parameters:{layout:"centered"},tags:["autodocs"]},T=B({username:c().min(2,{message:"Username must be at least 2 characters."}),email:c().email({message:"Please enter a valid email address."})}),p={render:()=>{const o=F({resolver:x(T),defaultValues:{username:"",email:""}});function s(r){console.log(r),alert(JSON.stringify(r,null,2))}return e.jsx(j,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(s),className:"space-y-6 w-[400px]",children:[e.jsx(n,{control:o.control,name:"username",render:({field:r})=>e.jsxs(m,{children:[e.jsx(l,{children:"Username"}),e.jsx(a,{children:e.jsx(d,{placeholder:"johndoe",...r})}),e.jsx(i,{children:"This is your public display name."}),e.jsx(t,{})]})}),e.jsx(n,{control:o.control,name:"email",render:({field:r})=>e.jsxs(m,{children:[e.jsx(l,{children:"Email"}),e.jsx(a,{children:e.jsx(d,{type:"email",placeholder:"john@example.com",...r})}),e.jsx(t,{})]})}),e.jsx(b,{type:"submit",children:"Submit"})]})})}},O=B({name:c().min(2,"Name must be at least 2 characters"),bio:c().max(200,"Bio must not exceed 200 characters").optional(),role:c({required_error:"Please select a role"}),marketing:V().default(!1)}),f={render:()=>{const o=F({resolver:x(O),defaultValues:{name:"",bio:"",marketing:!1}});function s(r){console.log(r),alert(JSON.stringify(r,null,2))}return e.jsx(j,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(s),className:"space-y-6 w-[500px]",children:[e.jsx(n,{control:o.control,name:"name",render:({field:r})=>e.jsxs(m,{children:[e.jsx(l,{children:"Name"}),e.jsx(a,{children:e.jsx(d,{placeholder:"John Doe",...r})}),e.jsx(i,{children:"Your full name as it appears on your profile."}),e.jsx(t,{})]})}),e.jsx(n,{control:o.control,name:"role",render:({field:r})=>e.jsxs(m,{children:[e.jsx(l,{children:"Role"}),e.jsxs(M,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(a,{children:e.jsx(w,{children:e.jsx(z,{placeholder:"Select your role"})})}),e.jsxs(E,{children:[e.jsx(u,{value:"developer",children:"Developer"}),e.jsx(u,{value:"designer",children:"Designer"}),e.jsx(u,{value:"manager",children:"Manager"}),e.jsx(u,{value:"other",children:"Other"})]})]}),e.jsx(t,{})]})}),e.jsx(n,{control:o.control,name:"bio",render:({field:r})=>e.jsxs(m,{children:[e.jsx(l,{children:"Bio"}),e.jsx(a,{children:e.jsx(R,{placeholder:"Tell us about yourself...",...r})}),e.jsx(i,{children:"Brief description about yourself (max 200 characters)."}),e.jsx(t,{})]})}),e.jsx(n,{control:o.control,name:"marketing",render:({field:r})=>e.jsxs(m,{className:"flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4",children:[e.jsx(a,{children:e.jsx(k,{checked:r.value,onCheckedChange:r.onChange})}),e.jsxs("div",{className:"space-y-1 leading-none",children:[e.jsx(l,{children:"Marketing emails"}),e.jsx(i,{children:"Receive emails about new products, features, and more."})]})]})}),e.jsx(b,{type:"submit",children:"Submit"})]})})}},h={render:()=>{const o=F({resolver:x(T),defaultValues:{username:"a",email:"invalid-email"}});function s(r){console.log(r)}return o.trigger(),e.jsx(j,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(s),className:"space-y-6 w-[400px]",children:[e.jsx(n,{control:o.control,name:"username",render:({field:r})=>e.jsxs(m,{children:[e.jsx(l,{children:"Username"}),e.jsx(a,{children:e.jsx(d,{placeholder:"johndoe",...r})}),e.jsx(i,{children:"This is your public display name."}),e.jsx(t,{})]})}),e.jsx(n,{control:o.control,name:"email",render:({field:r})=>e.jsxs(m,{children:[e.jsx(l,{children:"Email"}),e.jsx(a,{children:e.jsx(d,{type:"email",placeholder:"john@example.com",...r})}),e.jsx(t,{})]})}),e.jsx(b,{type:"submit",children:"Submit"})]})})}};var S,g,y;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: ""
      }
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[400px]">
          <FormField control={form.control} name="username" render={({
          field
        }) => <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>} />
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>;
  }
}`,...(y=(g=p.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,C,I;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof profileSchema>>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
        name: "",
        bio: "",
        marketing: false
      }
    });
    function onSubmit(values: z.infer<typeof profileSchema>) {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    }
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[500px]">
          <FormField control={form.control} name="name" render={({
          field
        }) => <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormDescription>Your full name as it appears on your profile.</FormDescription>
                <FormMessage />
              </FormItem>} />
          <FormField control={form.control} name="role" render={({
          field
        }) => <FormItem>
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>} />
          <FormField control={form.control} name="bio" render={({
          field
        }) => <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about yourself..." {...field} />
                </FormControl>
                <FormDescription>Brief description about yourself (max 200 characters).</FormDescription>
                <FormMessage />
              </FormItem>} />
          <FormField control={form.control} name="marketing" render={({
          field
        }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Marketing emails</FormLabel>
                  <FormDescription>Receive emails about new products, features, and more.</FormDescription>
                </div>
              </FormItem>} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>;
  }
}`,...(I=(C=f.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var D,L,N;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "a",
        // Too short
        email: "invalid-email" // Invalid format
      }
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }

    // Trigger validation
    form.trigger();
    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[400px]">
          <FormField control={form.control} name="username" render={({
          field
        }) => <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>} />
          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>;
  }
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const Se=["BasicForm","CompleteForm","WithValidationErrors"];export{p as BasicForm,f as CompleteForm,h as WithValidationErrors,Se as __namedExportsOrder,be as default};
