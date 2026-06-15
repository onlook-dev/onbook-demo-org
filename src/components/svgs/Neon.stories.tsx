import type { Meta, StoryObj } from '@storybook/react';
import { Neon } from './neon';

const meta = {
  component: Neon,
  tags: ['autodocs'],
} satisfies Meta<typeof Neon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
