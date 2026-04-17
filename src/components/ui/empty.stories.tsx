import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileIcon } from 'lucide-react'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

const meta = {
  title: 'UI/Empty',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty className="w-80">
    <EmptyHeader>
      <EmptyMedia variant="icon"><FileIcon /></EmptyMedia>
      <EmptyTitle>No files yet</EmptyTitle>
      <EmptyDescription>Upload your first file to get started.</EmptyDescription>
    </EmptyHeader>
  </Empty>
  ),
}
