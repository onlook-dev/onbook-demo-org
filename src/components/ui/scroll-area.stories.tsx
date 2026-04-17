import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'UI/Scroll Area',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-64 rounded-md border p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i}>
        <div className="text-sm">v1.2.0-beta.{i + 1}</div>
        <Separator className="my-2" />
      </div>
    ))}
  </ScrollArea>
  ),
}
