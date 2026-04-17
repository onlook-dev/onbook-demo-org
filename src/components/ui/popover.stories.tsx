import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const meta = {
  title: 'UI/Popover',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
    <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
    <PopoverContent className="w-64">
      <h4 className="font-medium">Dimensions</h4>
      <p className="mt-2 text-sm text-muted-foreground">Set dimensions for the layer.</p>
    </PopoverContent>
  </Popover>
  ),
}
