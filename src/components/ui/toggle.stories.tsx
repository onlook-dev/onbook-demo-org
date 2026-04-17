import type { Meta, StoryObj } from '@storybook/react-vite'
import { BoldIcon } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

const meta = {
  title: 'UI/Toggle',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Bold"><BoldIcon /></Toggle>
  ),
}
