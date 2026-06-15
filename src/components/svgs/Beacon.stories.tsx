import type { Meta, StoryObj } from '@storybook/react';
import { Beacon } from './beacon';

const meta = {
  component: Beacon,
  tags: ['autodocs'],
} satisfies Meta<typeof Beacon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
