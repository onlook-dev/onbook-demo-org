import type { Meta, StoryObj } from '@storybook/react-vite'
import { DirectionProvider } from '@/components/ui/direction'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'UI/Direction',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DirectionProvider dir="ltr"><Button>LTR button</Button></DirectionProvider>
  ),
}
