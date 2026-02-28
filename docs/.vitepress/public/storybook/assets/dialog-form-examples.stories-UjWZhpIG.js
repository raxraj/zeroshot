import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as g}from"./index-pP6CS22B.js";import{u as D,a as S,F as y,b as a,c as s,d as l,e as i,f as m,o as T,_ as G,s as d}from"./form-C2uRcm_L.js";import{D as v,a as N,b as k,c as A,d as I,e as O,f as w}from"./dialog-CCHRZT-h.js";import{A as Z,b as $,c as ee,d as ne,e as oe,f as re,g as te,h as ae}from"./alert-dialog-DK-utN3U.js";import{I as x}from"./input-96f9qOh5.js";import{B as p}from"./button-WnlYhIif.js";import{T as L}from"./textarea-C_7t26eC.js";import{S as K,a as U,b as X,c as Y,d as f}from"./select-B_zKb2Tv.js";import{C as se,a as le,b as ie,d as me}from"./card-BQxmGZtg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-cAPKYzjE.js";import"./index-x8NkB57A.js";import"./utils-BLSKlp9E.js";import"./label-BhlulYsX.js";import"./index-Bvak3XBe.js";import"./index-1evVQkiP.js";import"./index-Da0p-t-g.js";import"./index-D-hjI41K.js";import"./index-BVduLaKl.js";import"./index-BRAnmMrq.js";import"./index-xdNYasdH.js";import"./index-Ck0Qw0kh.js";import"./index-DIepWXwl.js";import"./index-DSMx10ar.js";import"./index-BKvsmN-_.js";import"./index-CbcPFHB_.js";import"./x-DFQ5vw_2.js";import"./createLucideIcon-DEP7aKU9.js";import"./index-BdQq_4o_.js";import"./index-CYVZouvf.js";import"./index-C7OyeuXp.js";import"./index-Cb9tSa9l.js";import"./index-n-b12q8t.js";import"./index-WyfESzTi.js";import"./index-Cdr4akHR.js";import"./chevron-down-D-nzWkjq.js";import"./check--MVdLoPp.js";const Ze={title:"Examples/Dialog Forms",parameters:{layout:"centered"},tags:["autodocs"]},ce=T({teamName:d().min(2,"Team name must be at least 2 characters"),description:d().optional(),visibility:G(["public","private"])}),j={render:()=>{const[u,r]=g.useState(!1),o=D({resolver:S(ce),defaultValues:{teamName:"",description:"",visibility:"private"}}),c=n=>{console.log(n),r(!1),o.reset()};return e.jsxs(v,{open:u,onOpenChange:r,children:[e.jsx(N,{asChild:!0,children:e.jsx(p,{children:"Create New Team"})}),e.jsxs(k,{className:"sm:max-w-[500px]",children:[e.jsxs(A,{children:[e.jsx(I,{children:"Create Team"}),e.jsx(O,{children:"Create a new team to collaborate with others."})]}),e.jsx(y,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(c),className:"space-y-4",children:[e.jsx(a,{control:o.control,name:"teamName",render:({field:n})=>e.jsxs(s,{children:[e.jsx(l,{children:"Team Name"}),e.jsx(i,{children:e.jsx(x,{placeholder:"Engineering Team",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:o.control,name:"description",render:({field:n})=>e.jsxs(s,{children:[e.jsx(l,{children:"Description (Optional)"}),e.jsx(i,{children:e.jsx(L,{placeholder:"What is this team about?",className:"resize-none",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:o.control,name:"visibility",render:({field:n})=>e.jsxs(s,{children:[e.jsx(l,{children:"Visibility"}),e.jsxs(K,{onValueChange:n.onChange,defaultValue:n.value,children:[e.jsx(i,{children:e.jsx(U,{children:e.jsx(X,{})})}),e.jsxs(Y,{children:[e.jsx(f,{value:"public",children:"Public"}),e.jsx(f,{value:"private",children:"Private"})]})]}),e.jsx(m,{})]})}),e.jsxs(w,{children:[e.jsx(p,{type:"button",variant:"outline",onClick:()=>r(!1),children:"Cancel"}),e.jsx(p,{type:"submit",children:"Create Team"})]})]})})]})]})}},de=T({name:d().min(2,"Name must be at least 2 characters"),email:d().email("Invalid email address"),bio:d().max(160).optional()}),F={render:()=>{const[u,r]=g.useState(!1),o=D({resolver:S(de),defaultValues:{name:"John Doe",email:"john@example.com",bio:"Software developer and designer"}}),c=n=>{console.log(n),r(!1)};return e.jsxs(v,{open:u,onOpenChange:r,children:[e.jsx(N,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"Edit Profile"})}),e.jsxs(k,{className:"sm:max-w-[500px]",children:[e.jsxs(A,{children:[e.jsx(I,{children:"Edit Profile"}),e.jsx(O,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsx(y,{...o,children:e.jsxs("form",{onSubmit:o.handleSubmit(c),className:"space-y-4",children:[e.jsx(a,{control:o.control,name:"name",render:({field:n})=>e.jsxs(s,{children:[e.jsx(l,{children:"Name"}),e.jsx(i,{children:e.jsx(x,{...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:o.control,name:"email",render:({field:n})=>e.jsxs(s,{children:[e.jsx(l,{children:"Email"}),e.jsx(i,{children:e.jsx(x,{type:"email",...n})}),e.jsx(m,{})]})}),e.jsx(a,{control:o.control,name:"bio",render:({field:n})=>e.jsxs(s,{children:[e.jsx(l,{children:"Bio"}),e.jsx(i,{children:e.jsx(L,{placeholder:"Tell us about yourself",className:"resize-none",...n})}),e.jsx(m,{})]})}),e.jsx(w,{children:e.jsx(p,{type:"submit",children:"Save Changes"})})]})})]})]})}},pe=T({recipient:d().email("Invalid email address"),subject:d().min(1,"Subject is required"),message:d().min(10,"Message must be at least 10 characters")}),C={render:()=>{const[u,r]=g.useState(!1),[o,c]=g.useState(!1),n=D({resolver:S(pe),defaultValues:{recipient:"",subject:"",message:""}}),M=h=>{console.log(h),c(!0)},t=()=>{c(!1),r(!1),n.reset()};return e.jsxs(e.Fragment,{children:[e.jsxs(v,{open:u,onOpenChange:r,children:[e.jsx(N,{asChild:!0,children:e.jsx(p,{children:"Compose Message"})}),e.jsxs(k,{className:"sm:max-w-[600px]",children:[e.jsxs(A,{children:[e.jsx(I,{children:"New Message"}),e.jsx(O,{children:"Send a message to a team member"})]}),e.jsx(y,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(M),className:"space-y-4",children:[e.jsx(a,{control:n.control,name:"recipient",render:({field:h})=>e.jsxs(s,{children:[e.jsx(l,{children:"To"}),e.jsx(i,{children:e.jsx(x,{type:"email",placeholder:"recipient@example.com",...h})}),e.jsx(m,{})]})}),e.jsx(a,{control:n.control,name:"subject",render:({field:h})=>e.jsxs(s,{children:[e.jsx(l,{children:"Subject"}),e.jsx(i,{children:e.jsx(x,{placeholder:"Message subject",...h})}),e.jsx(m,{})]})}),e.jsx(a,{control:n.control,name:"message",render:({field:h})=>e.jsxs(s,{children:[e.jsx(l,{children:"Message"}),e.jsx(i,{children:e.jsx(L,{placeholder:"Type your message here",className:"min-h-[150px]",...h})}),e.jsx(m,{})]})}),e.jsxs(w,{children:[e.jsx(p,{type:"button",variant:"outline",onClick:()=>r(!1),children:"Cancel"}),e.jsx(p,{type:"submit",children:"Send Message"})]})]})})]})]}),e.jsx(Z,{open:o,onOpenChange:c,children:e.jsxs($,{children:[e.jsxs(ee,{children:[e.jsx(ne,{children:"Confirm Send"}),e.jsx(oe,{children:"Are you sure you want to send this message? This action cannot be undone."})]}),e.jsxs(re,{children:[e.jsx(te,{children:"Cancel"}),e.jsx(ae,{onClick:t,children:"Send"})]})]})})]})}},ue=T({title:d().min(1,"Task title is required"),priority:G(["low","medium","high"]),dueDate:d().optional()}),b={render:()=>{const[u,r]=g.useState([]),[o,c]=g.useState(!1),n=D({resolver:S(ue),defaultValues:{title:"",priority:"medium"}}),M=t=>{r([...u,t]),c(!1),n.reset()};return e.jsx("div",{className:"w-[500px]",children:e.jsxs(se,{children:[e.jsx(le,{children:e.jsxs(ie,{className:"flex items-center justify-between",children:["Task List",e.jsxs(v,{open:o,onOpenChange:c,children:[e.jsx(N,{asChild:!0,children:e.jsx(p,{size:"sm",children:"Add Task"})}),e.jsxs(k,{children:[e.jsxs(A,{children:[e.jsx(I,{children:"Add New Task"}),e.jsx(O,{children:"Create a new task for your project"})]}),e.jsx(y,{...n,children:e.jsxs("form",{onSubmit:n.handleSubmit(M),className:"space-y-4",children:[e.jsx(a,{control:n.control,name:"title",render:({field:t})=>e.jsxs(s,{children:[e.jsx(l,{children:"Task Title"}),e.jsx(i,{children:e.jsx(x,{placeholder:"What needs to be done?",...t})}),e.jsx(m,{})]})}),e.jsx(a,{control:n.control,name:"priority",render:({field:t})=>e.jsxs(s,{children:[e.jsx(l,{children:"Priority"}),e.jsxs(K,{onValueChange:t.onChange,defaultValue:t.value,children:[e.jsx(i,{children:e.jsx(U,{children:e.jsx(X,{})})}),e.jsxs(Y,{children:[e.jsx(f,{value:"low",children:"Low"}),e.jsx(f,{value:"medium",children:"Medium"}),e.jsx(f,{value:"high",children:"High"})]})]}),e.jsx(m,{})]})}),e.jsx(w,{children:e.jsx(p,{type:"submit",children:"Add Task"})})]})})]})]})]})}),e.jsx(me,{children:u.length===0?e.jsx("p",{className:"text-sm text-muted-foreground text-center py-8",children:'No tasks yet. Click "Add Task" to get started.'}):e.jsx("div",{className:"space-y-2",children:u.map((t,h)=>e.jsx("div",{className:"flex items-center justify-between p-3 border rounded-md",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium",children:t.title}),e.jsxs("p",{className:"text-xs text-muted-foreground capitalize",children:["Priority: ",t.priority]})]})},h))})})]})})}};var B,z,V;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof teamFormSchema>>({
      resolver: zodResolver(teamFormSchema),
      defaultValues: {
        teamName: "",
        description: "",
        visibility: "private"
      }
    });
    const onSubmit = (values: z.infer<typeof teamFormSchema>) => {
      console.log(values);
      setOpen(false);
      form.reset();
    };
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Create New Team</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create Team</DialogTitle>
            <DialogDescription>
              Create a new team to collaborate with others.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="teamName" render={({
              field
            }) => <FormItem>
                    <FormLabel>Team Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Engineering Team" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="description" render={({
              field
            }) => <FormItem>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="What is this team about?" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="visibility" render={({
              field
            }) => <FormItem>
                    <FormLabel>Visibility</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>} />
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Team</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>;
  }
}`,...(V=(z=j.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var H,E,P;F.parameters={...F.parameters,docs:{...(H=F.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof profileFormSchema>>({
      resolver: zodResolver(profileFormSchema),
      defaultValues: {
        name: "John Doe",
        email: "john@example.com",
        bio: "Software developer and designer"
      }
    });
    const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
      console.log(values);
      setOpen(false);
    };
    return <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="name" render={({
              field
            }) => <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
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
                    <FormMessage />
                  </FormItem>} />
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>;
  }
}`,...(P=(E=F.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var W,R,_;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const form = useForm<z.infer<typeof messageFormSchema>>({
      resolver: zodResolver(messageFormSchema),
      defaultValues: {
        recipient: "",
        subject: "",
        message: ""
      }
    });
    const onSubmit = (values: z.infer<typeof messageFormSchema>) => {
      console.log(values);
      setAlertOpen(true);
    };
    const handleConfirmSend = () => {
      setAlertOpen(false);
      setDialogOpen(false);
      form.reset();
    };
    return <>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>Compose Message</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>New Message</DialogTitle>
              <DialogDescription>Send a message to a team member</DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="recipient" render={({
                field
              }) => <FormItem>
                      <FormLabel>To</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="recipient@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                <FormField control={form.control} name="subject" render={({
                field
              }) => <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Message subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Type your message here" className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">Send Message</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Send</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to send this message? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmSend}>Send</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>;
  }
}`,...(_=(R=C.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var q,J,Q;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [tasks, setTasks] = useState<z.infer<typeof taskFormSchema>[]>([]);
    const [open, setOpen] = useState(false);
    const form = useForm<z.infer<typeof taskFormSchema>>({
      resolver: zodResolver(taskFormSchema),
      defaultValues: {
        title: "",
        priority: "medium"
      }
    });
    const onSubmit = (values: z.infer<typeof taskFormSchema>) => {
      setTasks([...tasks, values]);
      setOpen(false);
      form.reset();
    };
    return <div className="w-[500px]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Task List
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">Add Task</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                    <DialogDescription>Create a new task for your project</DialogDescription>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField control={form.control} name="title" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Task Title</FormLabel>
                            <FormControl>
                              <Input placeholder="What needs to be done?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>} />
                      <FormField control={form.control} name="priority" render={({
                      field
                    }) => <FormItem>
                            <FormLabel>Priority</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>} />
                      <DialogFooter>
                        <Button type="submit">Add Task</Button>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {tasks.length === 0 ? <p className="text-sm text-muted-foreground text-center py-8">
                No tasks yet. Click "Add Task" to get started.
              </p> : <div className="space-y-2">
                {tasks.map((task, index) => <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="text-sm font-medium">{task.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        Priority: {task.priority}
                      </p>
                    </div>
                  </div>)}
              </div>}
          </CardContent>
        </Card>
      </div>;
  }
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const $e=["CreateTeamDialog","EditProfileDialog","SendMessageWithConfirmation","QuickAddTask"];export{j as CreateTeamDialog,F as EditProfileDialog,b as QuickAddTask,C as SendMessageWithConfirmation,$e as __namedExportsOrder,Ze as default};
