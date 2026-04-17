import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const meta = {
  title: 'UI/Avatar',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  ),
}
