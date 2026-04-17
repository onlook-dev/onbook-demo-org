import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronsUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const meta = {
  title: 'UI/Collapsible',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72 space-y-2">
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
  </Collapsible>
  ),
}
