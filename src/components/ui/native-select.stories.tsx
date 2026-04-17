import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect } from '@/components/ui/native-select'

const meta = {
  title: 'UI/Native Select',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-72">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="blueberry">Blueberry</option>
  </NativeSelect>
  ),
}
