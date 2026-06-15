import type { Meta, StoryObj } from '@storybook/react';
import { Hulu } from './hulu';

const meta = {
  component: Hulu,
  tags: ['autodocs'],
} satisfies Meta<typeof Hulu>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
