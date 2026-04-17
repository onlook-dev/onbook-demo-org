import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const meta = {
  title: 'UI/Dialog',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
    <DialogTrigger asChild><Button variant="outline">Open dialog</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogDescription>Dialog description goes here.</DialogDescription>
      </DialogHeader>
      <DialogFooter><Button>Save</Button></DialogFooter>
    </DialogContent>
  </Dialog>
  ),
}
