import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircleIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const meta = {
  title: 'UI/Alert',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
    <AlertCircleIcon />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components using the CLI.</AlertDescription>
  </Alert>
  ),
}
