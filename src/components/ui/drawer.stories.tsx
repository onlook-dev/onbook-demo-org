import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'

const meta = {
  title: 'UI/Drawer',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Drawer>
    <DrawerTrigger asChild><Button variant="outline">Open drawer</Button></DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer title</DrawerTitle>
        <DrawerDescription>Drawer description.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  ),
}
