import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

type Story = {
  name: string;
  title?: string;
  imports: string;
  render: string;
};

const UI_DIR = join(import.meta.dir, '..', 'src', 'components', 'ui');

const stories: Story[] = [
  {
    name: 'accordion',
    imports: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'`,
    render: `<Accordion type="single" collapsible className="w-80">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to WAI-ARIA patterns.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>Yes. It comes with default styles.</AccordionContent>
    </AccordionItem>
  </Accordion>`,
  },
  {
    name: 'alert',
    imports: `import { AlertCircleIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'`,
    render: `<Alert className="w-96">
    <AlertCircleIcon />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components using the CLI.</AlertDescription>
  </Alert>`,
  },
  {
    name: 'alert-dialog',
    imports: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'`,
    render: `<AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>`,
  },
  {
    name: 'aspect-ratio',
    imports: `import { AspectRatio } from '@/components/ui/aspect-ratio'`,
    render: `<div className="w-80">
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md" />
  </div>`,
  },
  {
    name: 'avatar',
    imports: `import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'`,
    render: `<Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>`,
  },
  {
    name: 'badge',
    imports: `import { Badge } from '@/components/ui/badge'`,
    render: `<Badge>Badge</Badge>`,
  },
  {
    name: 'breadcrumb',
    imports: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'`,
    render: `<Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">Docs</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Components</BreadcrumbPage></BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`,
  },
  {
    name: 'button',
    imports: `import { Button } from '@/components/ui/button'`,
    render: `<Button>Button</Button>`,
  },
  {
    name: 'button-group',
    imports: `import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'`,
    render: `<ButtonGroup>
    <Button variant="outline">One</Button>
    <Button variant="outline">Two</Button>
    <Button variant="outline">Three</Button>
  </ButtonGroup>`,
  },
  {
    name: 'calendar',
    imports: `import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'`,
    render: `(() => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
  })()`,
  },
  {
    name: 'card',
    imports: `import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'`,
    render: `<Card className="w-80">
    <CardHeader>
      <CardTitle>Card title</CardTitle>
      <CardDescription>Card description goes here.</CardDescription>
      <CardAction><Button size="sm" variant="outline">Action</Button></CardAction>
    </CardHeader>
    <CardContent>Card content.</CardContent>
    <CardFooter><Button>Confirm</Button></CardFooter>
  </Card>`,
  },
  {
    name: 'carousel',
    imports: `import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'`,
    render: `<Carousel className="w-64">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, i) => (
        <CarouselItem key={i}>
          <Card><CardContent className="flex aspect-square items-center justify-center p-6 text-4xl">{i + 1}</CardContent></Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>`,
  },
  {
    name: 'chart',
    imports: `import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart'

const chartData = [
  { month: 'Jan', desktop: 186 },
  { month: 'Feb', desktop: 305 },
  { month: 'Mar', desktop: 237 },
  { month: 'Apr', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'Jun', desktop: 214 },
]

const chartConfig = { desktop: { label: 'Desktop', color: 'var(--chart-1)' } } satisfies ChartConfig`,
    render: `<ChartContainer config={chartConfig} className="h-64 w-96">
    <BarChart data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    </BarChart>
  </ChartContainer>`,
  },
  {
    name: 'checkbox',
    imports: `import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'`,
    render: `<div className="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>`,
  },
  {
    name: 'collapsible',
    imports: `import { ChevronsUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'`,
    render: `<Collapsible className="w-72 space-y-2">
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="icon"><ChevronsUpDownIcon /></Button>
      </CollapsibleTrigger>
    </div>
    <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/primitives</div>
    <CollapsibleContent className="space-y-2">
      <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/colors</div>
      <div className="rounded-md border px-4 py-2 text-sm">@stitches/react</div>
    </CollapsibleContent>
  </Collapsible>`,
  },
  {
    name: 'combobox',
    imports: `import { Combobox } from '@/components/ui/combobox'`,
    render: `<Combobox
    options={[
      { value: 'next', label: 'Next.js' },
      { value: 'svelte', label: 'SvelteKit' },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
    ]}
    placeholder="Select framework..."
    searchPlaceholder="Search framework..."
    emptyText="No framework found."
  />`,
  },
  {
    name: 'command',
    imports: `import { CalendarIcon, SmileIcon, CalculatorIcon } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'`,
    render: `<Command className="w-80 rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem><CalendarIcon /> Calendar</CommandItem>
        <CommandItem><SmileIcon /> Search Emoji</CommandItem>
        <CommandItem><CalculatorIcon /> Calculator</CommandItem>
      </CommandGroup>
      <CommandSeparator />
    </CommandList>
  </Command>`,
  },
  {
    name: 'context-menu',
    imports: `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from '@/components/ui/context-menu'`,
    render: `<ContextMenu>
    <ContextMenuTrigger className="flex h-40 w-80 items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuItem>Forward</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Reload</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>`,
  },
  {
    name: 'dialog',
    imports: `import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'`,
    render: `<Dialog>
    <DialogTrigger asChild><Button variant="outline">Open dialog</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogDescription>Dialog description goes here.</DialogDescription>
      </DialogHeader>
      <DialogFooter><Button>Save</Button></DialogFooter>
    </DialogContent>
  </Dialog>`,
  },
  {
    name: 'direction',
    imports: `import { DirectionProvider } from '@/components/ui/direction'
import { Button } from '@/components/ui/button'`,
    render: `<DirectionProvider dir="ltr"><Button>LTR button</Button></DirectionProvider>`,
  },
  {
    name: 'drawer',
    imports: `import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'`,
    render: `<Drawer>
    <DrawerTrigger asChild><Button variant="outline">Open drawer</Button></DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer title</DrawerTitle>
        <DrawerDescription>Drawer description.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>`,
  },
  {
    name: 'dropdown-menu',
    imports: `import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'`,
    render: `<DropdownMenu>
    <DropdownMenuTrigger asChild><Button variant="outline">Open</Button></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>`,
  },
  {
    name: 'empty',
    imports: `import { FileIcon } from 'lucide-react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'`,
    render: `<Empty className="w-80">
    <EmptyHeader>
      <EmptyMedia variant="icon"><FileIcon /></EmptyMedia>
      <EmptyTitle>No files yet</EmptyTitle>
      <EmptyDescription>Upload your first file to get started.</EmptyDescription>
    </EmptyHeader>
  </Empty>`,
  },
  {
    name: 'field',
    imports: `import { Field, FieldDescription, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'`,
    render: `<Field className="w-72">
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" placeholder="you@example.com" />
    <FieldDescription>We'll never share your email.</FieldDescription>
  </Field>`,
  },
  {
    name: 'hover-card',
    imports: `import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'`,
    render: `<HoverCard>
    <HoverCardTrigger asChild><Button variant="link">@shadcn</Button></HoverCardTrigger>
    <HoverCardContent className="w-64">
      <div className="text-sm font-semibold">@shadcn</div>
      <p className="mt-2 text-sm text-muted-foreground">The React framework.</p>
    </HoverCardContent>
  </HoverCard>`,
  },
  {
    name: 'input',
    imports: `import { Input } from '@/components/ui/input'`,
    render: `<Input placeholder="Email" className="w-72" />`,
  },
  {
    name: 'input-group',
    imports: `import { SearchIcon } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'`,
    render: `<InputGroup className="w-72">
    <InputGroupAddon><SearchIcon /></InputGroupAddon>
    <InputGroupInput placeholder="Search..." />
  </InputGroup>`,
  },
  {
    name: 'input-otp',
    imports: `import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'`,
    render: `<InputOTP maxLength={6}>
    <InputOTPGroup>
      {[0, 1, 2, 3, 4, 5].map((i) => <InputOTPSlot key={i} index={i} />)}
    </InputOTPGroup>
  </InputOTP>`,
  },
  {
    name: 'item',
    imports: `import { UserIcon } from 'lucide-react'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'`,
    render: `<Item className="w-80 rounded-md border">
    <ItemMedia><UserIcon /></ItemMedia>
    <ItemContent>
      <ItemTitle>Jane Doe</ItemTitle>
      <ItemDescription>jane@example.com</ItemDescription>
    </ItemContent>
  </Item>`,
  },
  {
    name: 'kbd',
    imports: `import { Kbd } from '@/components/ui/kbd'`,
    render: `<div className="flex items-center gap-2 text-sm"><span>Press</span><Kbd>⌘</Kbd><Kbd>K</Kbd></div>`,
  },
  {
    name: 'label',
    imports: `import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'`,
    render: `<div className="flex w-72 flex-col gap-2">
    <Label htmlFor="email-label">Email</Label>
    <Input id="email-label" placeholder="you@example.com" />
  </div>`,
  },
  {
    name: 'menubar',
    imports: `import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar'`,
    render: `<Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New Tab</MenubarItem>
        <MenubarItem>New Window</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Undo</MenubarItem>
        <MenubarItem>Redo</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>`,
  },
  {
    name: 'native-select',
    imports: `import { NativeSelect } from '@/components/ui/native-select'`,
    render: `<NativeSelect className="w-72">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="blueberry">Blueberry</option>
  </NativeSelect>`,
  },
  {
    name: 'navigation-menu',
    imports: `import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'`,
    render: `<NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-72 gap-2 p-4">
            <NavigationMenuLink className="rounded-md p-3 hover:bg-accent">Introduction</NavigationMenuLink>
            <NavigationMenuLink className="rounded-md p-3 hover:bg-accent">Installation</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>`,
  },
  {
    name: 'pagination',
    imports: `import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'`,
    render: `<Pagination>
    <PaginationContent>
      <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
      <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
      <PaginationItem><PaginationEllipsis /></PaginationItem>
      <PaginationItem><PaginationNext href="#" /></PaginationItem>
    </PaginationContent>
  </Pagination>`,
  },
  {
    name: 'popover',
    imports: `import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'`,
    render: `<Popover>
    <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
    <PopoverContent className="w-64">
      <h4 className="font-medium">Dimensions</h4>
      <p className="mt-2 text-sm text-muted-foreground">Set dimensions for the layer.</p>
    </PopoverContent>
  </Popover>`,
  },
  {
    name: 'progress',
    imports: `import { Progress } from '@/components/ui/progress'`,
    render: `<Progress value={60} className="w-72" />`,
  },
  {
    name: 'radio-group',
    imports: `import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'`,
    render: `<RadioGroup defaultValue="comfortable">
    <div className="flex items-center gap-2"><RadioGroupItem value="default" id="r1" /><Label htmlFor="r1">Default</Label></div>
    <div className="flex items-center gap-2"><RadioGroupItem value="comfortable" id="r2" /><Label htmlFor="r2">Comfortable</Label></div>
    <div className="flex items-center gap-2"><RadioGroupItem value="compact" id="r3" /><Label htmlFor="r3">Compact</Label></div>
  </RadioGroup>`,
  },
  {
    name: 'resizable',
    imports: `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'`,
    render: `<ResizablePanelGroup direction="horizontal" className="h-40 w-96 rounded-lg border">
    <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 text-sm">One</div></ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 text-sm">Two</div></ResizablePanel>
  </ResizablePanelGroup>`,
  },
  {
    name: 'scroll-area',
    imports: `import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'`,
    render: `<ScrollArea className="h-48 w-64 rounded-md border p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i}>
        <div className="text-sm">v1.2.0-beta.{i + 1}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </ScrollArea>`,
  },
  {
    name: 'select',
    imports: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'`,
    render: `<Select>
    <SelectTrigger className="w-60"><SelectValue placeholder="Select a fruit" /></SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
    </SelectContent>
  </Select>`,
  },
  {
    name: 'separator',
    imports: `import { Separator } from '@/components/ui/separator'`,
    render: `<div className="w-72">
    <div className="text-sm font-medium">Radix Primitives</div>
    <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
    <Separator className="my-4" />
    <div className="flex h-5 items-center gap-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div>
  </div>`,
  },
  {
    name: 'sheet',
    imports: `import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'`,
    render: `<Sheet>
    <SheetTrigger asChild><Button variant="outline">Open sheet</Button></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>Make changes to your profile here.</SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>`,
  },
  {
    name: 'sidebar',
    imports: `import { HomeIcon, InboxIcon, SearchIcon, SettingsIcon } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const items = [
  { title: 'Home', icon: HomeIcon },
  { title: 'Inbox', icon: InboxIcon },
  { title: 'Search', icon: SearchIcon },
  { title: 'Settings', icon: SettingsIcon },
]`,
    render: `<SidebarProvider>
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <div className="flex h-full items-center gap-2 p-4">
        <SidebarTrigger />
        <span className="text-sm">Main content</span>
      </div>
    </SidebarInset>
  </SidebarProvider>`,
  },
  {
    name: 'skeleton',
    imports: `import { Skeleton } from '@/components/ui/skeleton'`,
    render: `<div className="flex items-center gap-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-48" />
      <Skeleton className="h-4 w-32" />
    </div>
  </div>`,
  },
  {
    name: 'slider',
    imports: `import { Slider } from '@/components/ui/slider'`,
    render: `<Slider defaultValue={[50]} max={100} step={1} className="w-72" />`,
  },
  {
    name: 'sonner',
    imports: `import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'`,
    render: `<>
    <Button variant="outline" onClick={() => toast('Event has been created')}>Show toast</Button>
    <Toaster />
  </>`,
  },
  {
    name: 'spinner',
    imports: `import { Spinner } from '@/components/ui/spinner'`,
    render: `<Spinner />`,
  },
  {
    name: 'switch',
    imports: `import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'`,
    render: `<div className="flex items-center gap-2">
    <Switch id="airplane" />
    <Label htmlFor="airplane">Airplane mode</Label>
  </div>`,
  },
  {
    name: 'table',
    imports: `import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'`,
    render: `<Table className="w-96">
    <TableCaption>Recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow><TableCell>INV001</TableCell><TableCell>Paid</TableCell><TableCell className="text-right">$250.00</TableCell></TableRow>
      <TableRow><TableCell>INV002</TableCell><TableCell>Pending</TableCell><TableCell className="text-right">$150.00</TableCell></TableRow>
    </TableBody>
  </Table>`,
  },
  {
    name: 'tabs',
    imports: `import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'`,
    render: `<Tabs defaultValue="account" className="w-80">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">Account settings.</TabsContent>
    <TabsContent value="password">Change password.</TabsContent>
  </Tabs>`,
  },
  {
    name: 'textarea',
    imports: `import { Textarea } from '@/components/ui/textarea'`,
    render: `<Textarea placeholder="Type your message here." className="w-72" />`,
  },
  {
    name: 'toggle',
    imports: `import { BoldIcon } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'`,
    render: `<Toggle aria-label="Bold"><BoldIcon /></Toggle>`,
  },
  {
    name: 'toggle-group',
    imports: `import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'`,
    render: `<ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
  </ToggleGroup>`,
  },
  {
    name: 'tooltip',
    imports: `import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'`,
    render: `<TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  </TooltipProvider>`,
  },
];

function titleCase(s: string) {
  return s
    .split('-')
    .map((p) => p[0]?.toUpperCase() + p.slice(1))
    .join(' ');
}

function pascal(s: string) {
  return s
    .split('-')
    .map((p) => p[0]?.toUpperCase() + p.slice(1))
    .join('');
}

for (const s of stories) {
  const comp = pascal(s.name);
  const title = s.title ?? `UI/${titleCase(s.name)}`;
  const content = `import type { Meta, StoryObj } from '@storybook/react-vite'
${s.imports}

const meta = {
  title: '${title}',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    ${s.render}
  ),
}
`;
  writeFileSync(join(UI_DIR, `${s.name}.stories.tsx`), content);
  console.log(`wrote ${s.name}.stories.tsx (${comp})`);
}

console.log(`\nTotal: ${stories.length} stories`);
