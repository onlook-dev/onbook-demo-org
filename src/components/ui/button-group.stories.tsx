import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'

const meta = {
  title: 'UI/Button Group',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
    <Button variant="outline">One</Button>
    <Button variant="outline">Two</Button>
    <Button variant="outline">Three</Button>
  </ButtonGroup>
  ),
}
