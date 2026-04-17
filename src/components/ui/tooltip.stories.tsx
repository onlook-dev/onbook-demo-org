import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const meta = {
  title: 'UI/Tooltip',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  </TooltipProvider>
  ),
}
