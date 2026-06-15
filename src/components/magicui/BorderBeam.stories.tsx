import type { Meta, StoryObj } from '@storybook/react';
import { BorderBeam } from './border-beam';

const meta = {
  component: BorderBeam,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'number' },
    duration: { control: 'number' },
    delay: { control: 'number' },
    colorFrom: { control: 'text' },
    colorTo: { control: 'text' },
    reverse: { control: 'boolean' },
    initialOffset: { control: 'number' },
  },
} satisfies Meta<typeof BorderBeam>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 60,
    duration: 8,
    delay: 0,
    colorFrom: '#00ff88',
    colorTo: '#0088ff',
    reverse: false,
    initialOffset: 0,
  },
};
