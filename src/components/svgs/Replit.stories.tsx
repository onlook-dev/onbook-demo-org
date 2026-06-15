import type { Meta, StoryObj } from '@storybook/react';
import { Replit } from './replit';

const meta = {
  component: Replit,
  tags: ['autodocs'],
} satisfies Meta<typeof Replit>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
