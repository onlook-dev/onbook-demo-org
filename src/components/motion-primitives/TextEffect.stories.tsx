import type { Meta, StoryObj } from '@storybook/react';
import { TextEffect } from './text-effect';

const meta = {
  component: TextEffect,
  tags: ['autodocs'],
  argTypes: {
    delay: { control: 'number' },
    speedReveal: { control: 'number' },
    speedSegment: { control: 'number' },
    trigger: { control: 'boolean' },
    segmentWrapperClassName: { control: 'text' },
  },
} satisfies Meta<typeof TextEffect>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Animate your ideas into reality',
    delay: 0,
    speedReveal: 1,
    speedSegment: 1,
    trigger: true,
    segmentWrapperClassName: 'inline-block',
  },
};
