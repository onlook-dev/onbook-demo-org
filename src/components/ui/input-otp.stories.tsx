import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

const meta = {
  title: 'UI/Input Otp',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
    <InputOTPGroup>
      {[0, 1, 2, 3, 4, 5].map((i) => <InputOTPSlot key={i} index={i} />)}
    </InputOTPGroup>
  </InputOTP>
  ),
}
