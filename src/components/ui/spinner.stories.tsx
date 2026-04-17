import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'UI/Spinner',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Spinner />
  ),
}
