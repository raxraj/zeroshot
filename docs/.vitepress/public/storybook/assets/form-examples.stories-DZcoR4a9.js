import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{u as j,a as f,F as C,b as a,c as l,d as t,e as s,f as m,g as y,o as g,s as i,h as H,_ as O,l as _,i as J,j as Z}from"./form-C2uRcm_L.js";import{I as c}from"./input-96f9qOh5.js";import{B as u}from"./button-WnlYhIif.js";import{T as E}from"./textarea-C_7t26eC.js";import{S as U,a as A,b as Y,c as $,d as p}from"./select-B_zKb2Tv.js";import{C as K}from"./checkbox-CDZo1C4O.js";import{C as S,a as v,b as I,c as N,d as T}from"./card-BQxmGZtg.js";import{T as W,a as G,b as L,c as P}from"./tabs-BwcaaAiF.js";import{P as Q,a as X,f as ee,b as ne,C as re}from"./popover-9iU4ChZv.js";import{C as oe}from"./calendar-y9rfTC-H.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./utils-BLSKlp9E.js";import"./label-BhlulYsX.js";import"./index-Bvak3XBe.js";import"./index-1evVQkiP.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-BdQq_4o_.js";import"./index-D-hjI41K.js";import"./index-CYVZouvf.js";import"./index-BVduLaKl.js";import"./index-C7OyeuXp.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-xdNYasdH.js";import"./index-BRAnmMrq.js";import"./index-Cb9tSa9l.js";import"./index-n-b12q8t.js";import"./index-Ck0Qw0kh.js";import"./index-WyfESzTi.js";import"./index-Cdr4akHR.js";import"./chevron-down-D-nzWkjq.js";import"./check--MVdLoPp.js";import"./index-CbcPFHB_.js";import"./index-CkPwm_CN.js";const Je={title:"Examples/Complex Forms",parameters:{layout:"centered"},tags:["autodocs"]},ae=g({username:i().min(2,"Username must be at least 2 characters"),email:i().email("Invalid email address"),bio:i().max(160,"Bio must be at most 160 characters").optional(),website:i().url("Invalid URL").optional().or(_("")),notifications:J()}),h={render:()=>{const r=j({resolver:f(ae),defaultValues:{username:"",email:"",bio:"",website:"",notifications:!0}}),d=n=>{console.log(n)};return e.jsxs(S,{className:"w-[600px]",children:[e.jsxs(v,{children:[e.jsx(I,{children:"Profile Settings"}),e.jsx(N,{children:"Update your account profile information"})]}),e.jsx(T,{children:e.jsx(C,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(d),className:"space-y-6",children:[e.jsx(a,{control:r.control,name:"username",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Username"}),e.jsx(s,{children:e.jsx(c,{placeholder:"johndoe",...n})}),e.jsx(y,{children:"Your public display name"}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"email",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Email"}),e.jsx(s,{children:e.jsx(c,{type:"email",placeholder:"john@example.com",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"bio",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Bio"}),e.jsx(s,{children:e.jsx(E,{placeholder:"Tell us about yourself",className:"resize-none",...n})}),e.jsx(y,{children:"Brief description for your profile. Max 160 characters."}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"website",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Website"}),e.jsx(s,{children:e.jsx(c,{placeholder:"https://example.com",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"notifications",render:({field:n})=>e.jsxs(l,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(s,{children:e.jsx(K,{checked:n.value,onCheckedChange:n.onChange})}),e.jsxs("div",{className:"space-y-1 leading-none",children:[e.jsx(t,{children:"Enable email notifications"}),e.jsx(y,{children:"Receive emails about account activity"})]})]})}),e.jsx(u,{type:"submit",children:"Update Profile"})]})})})]})}},le=g({firstName:i().min(2,"First name is required"),lastName:i().min(2,"Last name is required"),email:i().email("Invalid email"),phone:i().min(10,"Phone number must be at least 10 digits"),ticketType:O(["standard","vip","student"],{required_error:"Please select a ticket type"}),dietaryRestrictions:H(i()).optional(),attendanceDate:Z({required_error:"Please select a date"}),specialRequests:i().optional()}),F={render:()=>{const r=j({resolver:f(le)}),d=n=>{console.log(n)};return e.jsxs(S,{className:"w-[700px]",children:[e.jsxs(v,{children:[e.jsx(I,{children:"Event Registration"}),e.jsx(N,{children:"Register for the Annual Tech Conference 2024"})]}),e.jsx(T,{children:e.jsx(C,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(d),className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{control:r.control,name:"firstName",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"First Name"}),e.jsx(s,{children:e.jsx(c,{placeholder:"John",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"lastName",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Last Name"}),e.jsx(s,{children:e.jsx(c,{placeholder:"Doe",...n})}),e.jsx(m,{})]})})]}),e.jsx(a,{control:r.control,name:"email",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Email"}),e.jsx(s,{children:e.jsx(c,{type:"email",placeholder:"john@example.com",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"phone",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Phone Number"}),e.jsx(s,{children:e.jsx(c,{placeholder:"+1 (555) 000-0000",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"ticketType",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Ticket Type"}),e.jsxs(U,{onValueChange:n.onChange,defaultValue:n.value,children:[e.jsx(s,{children:e.jsx(A,{children:e.jsx(Y,{placeholder:"Select a ticket type"})})}),e.jsxs($,{children:[e.jsx(p,{value:"standard",children:"Standard - $99"}),e.jsx(p,{value:"vip",children:"VIP - $299"}),e.jsx(p,{value:"student",children:"Student - $49"})]})]}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"attendanceDate",render:({field:n})=>e.jsxs(l,{className:"flex flex-col",children:[e.jsx(t,{children:"Attendance Date"}),e.jsxs(Q,{children:[e.jsx(X,{asChild:!0,children:e.jsx(s,{children:e.jsxs(u,{variant:"outline",className:`w-full pl-3 text-left font-normal ${!n.value&&"text-muted-foreground"}`,children:[n.value?ee(n.value,"PPP"):"Pick a date",e.jsx(oe,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),e.jsx(ne,{className:"w-auto p-0",align:"start",children:e.jsx(re,{mode:"single",selected:n.value,onSelect:n.onChange,disabled:b=>b<new Date})})]}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"specialRequests",render:({field:n})=>e.jsxs(l,{children:[e.jsx(t,{children:"Special Requests (Optional)"}),e.jsx(s,{children:e.jsx(E,{placeholder:"Any special requirements or requests?",className:"resize-none",...n})}),e.jsx(m,{})]})}),e.jsx(u,{type:"submit",className:"w-full",children:"Complete Registration"})]})})})]})}},te=g({address:i().min(5,"Address is required"),city:i().min(2,"City is required"),zipCode:i().min(5,"ZIP code is required"),country:i().min(2,"Country is required")}),se=g({cardNumber:i().min(16,"Card number must be 16 digits"),expiryDate:i().regex(/^\d{2}\/\d{2}$/,"Format: MM/YY"),cvv:i().min(3,"CVV must be 3 digits"),cardholderName:i().min(2,"Cardholder name is required")}),x={render:()=>{const r=j({resolver:f(te),defaultValues:{address:"",city:"",zipCode:"",country:""}}),d=j({resolver:f(se),defaultValues:{cardNumber:"",expiryDate:"",cvv:"",cardholderName:""}}),n=o=>{console.log("Shipping:",o)},b=o=>{console.log("Payment:",o)};return e.jsxs(S,{className:"w-[600px]",children:[e.jsxs(v,{children:[e.jsx(I,{children:"Checkout"}),e.jsx(N,{children:"Complete your purchase"})]}),e.jsx(T,{children:e.jsxs(W,{defaultValue:"shipping",className:"w-full",children:[e.jsxs(G,{className:"grid w-full grid-cols-2",children:[e.jsx(L,{value:"shipping",children:"Shipping"}),e.jsx(L,{value:"payment",children:"Payment"})]}),e.jsx(P,{value:"shipping",children:e.jsx(C,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(n),className:"space-y-4",children:[e.jsx(a,{control:r.control,name:"address",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"Street Address"}),e.jsx(s,{children:e.jsx(c,{placeholder:"123 Main St",...o})}),e.jsx(m,{})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{control:r.control,name:"city",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"City"}),e.jsx(s,{children:e.jsx(c,{placeholder:"New York",...o})}),e.jsx(m,{})]})}),e.jsx(a,{control:r.control,name:"zipCode",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"ZIP Code"}),e.jsx(s,{children:e.jsx(c,{placeholder:"10001",...o})}),e.jsx(m,{})]})})]}),e.jsx(a,{control:r.control,name:"country",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"Country"}),e.jsxs(U,{onValueChange:o.onChange,defaultValue:o.value,children:[e.jsx(s,{children:e.jsx(A,{children:e.jsx(Y,{placeholder:"Select country"})})}),e.jsxs($,{children:[e.jsx(p,{value:"us",children:"United States"}),e.jsx(p,{value:"ca",children:"Canada"}),e.jsx(p,{value:"uk",children:"United Kingdom"}),e.jsx(p,{value:"au",children:"Australia"})]})]}),e.jsx(m,{})]})}),e.jsx(u,{type:"submit",className:"w-full",children:"Continue to Payment"})]})})}),e.jsx(P,{value:"payment",children:e.jsx(C,{...d,children:e.jsxs("form",{onSubmit:d.handleSubmit(b),className:"space-y-4",children:[e.jsx(a,{control:d.control,name:"cardNumber",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"Card Number"}),e.jsx(s,{children:e.jsx(c,{placeholder:"1234 5678 9012 3456",...o})}),e.jsx(m,{})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(a,{control:d.control,name:"expiryDate",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"Expiry Date"}),e.jsx(s,{children:e.jsx(c,{placeholder:"MM/YY",...o})}),e.jsx(m,{})]})}),e.jsx(a,{control:d.control,name:"cvv",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"CVV"}),e.jsx(s,{children:e.jsx(c,{placeholder:"123",type:"password",...o})}),e.jsx(m,{})]})})]}),e.jsx(a,{control:d.control,name:"cardholderName",render:({field:o})=>e.jsxs(l,{children:[e.jsx(t,{children:"Cardholder Name"}),e.jsx(s,{children:e.jsx(c,{placeholder:"JOHN DOE",...o})}),e.jsx(m,{})]})}),e.jsx(u,{type:"submit",className:"w-full",children:"Complete Purchase"})]})})})]})})]})}};var w,D,M;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof profileFormSchema>>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: {
        username: "",
        email: "",
        bio: "",
        website: "",
        notifications: true
      }
    });
    const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
      console.log(values);
    };
    return <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>Update your account profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField control={form.control} name="username" render={({
              field
            }) => <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe" {...field} />
                    </FormControl>
                    <FormDescription>Your public display name</FormDescription>
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
              <FormField control={form.control} name="bio" render={({
              field
            }) => <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about yourself" className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>
                      Brief description for your profile. Max 160 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="website" render={({
              field
            }) => <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="notifications" render={({
              field
            }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Enable email notifications</FormLabel>
                      <FormDescription>
                        Receive emails about account activity
                      </FormDescription>
                    </div>
                  </FormItem>} />
              <Button type="submit">Update Profile</Button>
            </form>
          </Form>
        </CardContent>
      </Card>;
  }
}`,...(M=(D=h.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var V,k,R;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<z.infer<typeof eventFormSchema>>({
      resolver: zodResolver(eventFormSchema)
    });
    const onSubmit = (values: z.infer<typeof eventFormSchema>) => {
      console.log(values);
    };
    return <Card className="w-[700px]">
        <CardHeader>
          <CardTitle>Event Registration</CardTitle>
          <CardDescription>Register for the Annual Tech Conference 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({
                field
              }) => <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                <FormField control={form.control} name="lastName" render={({
                field
              }) => <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
              </div>

              <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="phone" render={({
              field
            }) => <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="ticketType" render={({
              field
            }) => <FormItem>
                    <FormLabel>Ticket Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a ticket type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="standard">Standard - $99</SelectItem>
                        <SelectItem value="vip">VIP - $299</SelectItem>
                        <SelectItem value="student">Student - $49</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="attendanceDate" render={({
              field
            }) => <FormItem className="flex flex-col">
                    <FormLabel>Attendance Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={\`w-full pl-3 text-left font-normal \${!field.value && "text-muted-foreground"}\`}>
                            {field.value ? format(field.value, "PPP") : "Pick a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={date => date < new Date()} />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>} />

              <FormField control={form.control} name="specialRequests" render={({
              field
            }) => <FormItem>
                    <FormLabel>Special Requests (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any special requirements or requests?" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />

              <Button type="submit" className="w-full">
                Complete Registration
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>;
  }
}`,...(R=(k=F.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var z,q,B;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const shippingForm = useForm<z.infer<typeof shippingSchema>>({
      resolver: zodResolver(shippingSchema),
      defaultValues: {
        address: "",
        city: "",
        zipCode: "",
        country: ""
      }
    });
    const paymentForm = useForm<z.infer<typeof paymentSchema>>({
      resolver: zodResolver(paymentSchema),
      defaultValues: {
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: ""
      }
    });
    const onShippingSubmit = (values: z.infer<typeof shippingSchema>) => {
      console.log("Shipping:", values);
    };
    const onPaymentSubmit = (values: z.infer<typeof paymentSchema>) => {
      console.log("Payment:", values);
    };
    return <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          <CardDescription>Complete your purchase</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="shipping" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            <TabsContent value="shipping">
              <Form {...shippingForm}>
                <form onSubmit={shippingForm.handleSubmit(onShippingSubmit)} className="space-y-4">
                  <FormField control={shippingForm.control} name="address" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={shippingForm.control} name="city" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={shippingForm.control} name="zipCode" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="10001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  <FormField control={shippingForm.control} name="country" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>} />
                  <Button type="submit" className="w-full">
                    Continue to Payment
                  </Button>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="payment">
              <Form {...paymentForm}>
                <form onSubmit={paymentForm.handleSubmit(onPaymentSubmit)} className="space-y-4">
                  <FormField control={paymentForm.control} name="cardNumber" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234 5678 9012 3456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={paymentForm.control} name="expiryDate" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                    <FormField control={paymentForm.control} name="cvv" render={({
                    field
                  }) => <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input placeholder="123" type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>} />
                  </div>
                  <FormField control={paymentForm.control} name="cardholderName" render={({
                  field
                }) => <FormItem>
                        <FormLabel>Cardholder Name</FormLabel>
                        <FormControl>
                          <Input placeholder="JOHN DOE" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <Button type="submit" className="w-full">
                    Complete Purchase
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>;
  }
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Ze=["UserProfileForm","EventRegistrationForm","MultiStepCheckoutForm"];export{F as EventRegistrationForm,x as MultiStepCheckoutForm,h as UserProfileForm,Ze as __namedExportsOrder,Je as default};
