import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd } from '@/components/ui/kbd'

const meta = {
  title: 'UI/Kbd',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2 text-sm"><span>Press</span><Kbd>⌘</Kbd><Kbd>K</Kbd></div>
  ),
}
