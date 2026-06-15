import type { Meta, StoryObj } from '@storybook/react';
import { Bolt } from './bolt';

const meta = {
  component: Bolt,
  tags: ['autodocs'],
} satisfies Meta<typeof Bolt>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
