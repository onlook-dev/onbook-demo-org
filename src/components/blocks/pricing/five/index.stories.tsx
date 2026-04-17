import type { Meta, StoryObj } from '@storybook/react-vite'
import Block from './index'

const meta = {
  title: 'Marketing/Pricing/Five',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Block />,
}
