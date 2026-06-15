import type { Meta, StoryObj } from '@storybook/react';
import { Cisco } from './cisco';

const meta = {
  component: Cisco,
  tags: ['autodocs'],
} satisfies Meta<typeof Cisco>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
