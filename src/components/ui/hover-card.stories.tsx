import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

const meta = {
  title: 'UI/Hover Card',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
    <HoverCardTrigger asChild><Button variant="link">@shadcn</Button></HoverCardTrigger>
    <HoverCardContent className="w-64">
      <div className="text-sm font-semibold">@shadcn</div>
      <p className="mt-2 text-sm text-muted-foreground">The React framework.</p>
    </HoverCardContent>
  </HoverCard>
  ),
}
