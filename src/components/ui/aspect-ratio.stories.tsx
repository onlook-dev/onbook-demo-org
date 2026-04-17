import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const meta = {
  title: 'UI/Aspect Ratio',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-80">
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md" />
  </div>
  ),
}
