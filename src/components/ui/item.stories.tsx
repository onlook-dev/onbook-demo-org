import type { Meta, StoryObj } from '@storybook/react-vite'
import { UserIcon } from 'lucide-react'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'

const meta = {
  title: 'UI/Item',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Item className="w-80 rounded-md border">
    <ItemMedia><UserIcon /></ItemMedia>
    <ItemContent>
      <ItemTitle>Jane Doe</ItemTitle>
      <ItemDescription>jane@example.com</ItemDescription>
    </ItemContent>
  </Item>
  ),
}
