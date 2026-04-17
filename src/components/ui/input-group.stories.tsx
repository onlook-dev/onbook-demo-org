import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchIcon } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

const meta = {
  title: 'UI/Input Group',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup className="w-72">
    <InputGroupAddon><SearchIcon /></InputGroupAddon>
    <InputGroupInput placeholder="Search..." />
  </InputGroup>
  ),
}
