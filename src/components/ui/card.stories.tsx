import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const meta = {
  title: 'UI/Card',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
    <CardHeader>
      <CardTitle>Card title</CardTitle>
      <CardDescription>Card description goes here.</CardDescription>
      <CardAction><Button size="sm" variant="outline">Action</Button></CardAction>
    </CardHeader>
    <CardContent>Card content.</CardContent>
    <CardFooter><Button>Confirm</Button></CardFooter>
  </Card>
  ),
}
