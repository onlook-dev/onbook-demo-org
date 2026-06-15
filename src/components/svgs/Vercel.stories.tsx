import type { Meta, StoryObj } from '@storybook/react';
import { Vercel } from './vercel';

const meta = {
  component: Vercel,
  tags: ['autodocs'],
} satisfies Meta<typeof Vercel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
