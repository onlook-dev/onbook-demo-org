import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'

const meta = {
  title: 'UI/Input',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Input placeholder="Email" className="w-72" />
  ),
}
