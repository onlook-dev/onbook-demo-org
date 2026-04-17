import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

const meta = {
  title: 'UI/Sonner',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
    <Button variant="outline" onClick={() => toast('Event has been created')}>Show toast</Button>
    <Toaster />
  </>
  ),
}
