import type { Meta, StoryObj } from '@storybook/react';
import { Linear } from './linear';

const meta = {
  component: Linear,
  tags: ['autodocs'],
} satisfies Meta<typeof Linear>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
