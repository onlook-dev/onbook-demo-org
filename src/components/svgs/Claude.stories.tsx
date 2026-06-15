import type { Meta, StoryObj } from '@storybook/react';
import { Claude } from './claude';

const meta = {
  component: Claude,
  tags: ['autodocs'],
} satisfies Meta<typeof Claude>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
