import type { Meta, StoryObj } from '@storybook/react';
import { Firebase } from './firebase';

const meta = {
  component: Firebase,
  tags: ['autodocs'],
} satisfies Meta<typeof Firebase>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
