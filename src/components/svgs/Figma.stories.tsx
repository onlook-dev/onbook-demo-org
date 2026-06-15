import type { Meta, StoryObj } from '@storybook/react';
import { Figma } from './figma';

const meta = {
  component: Figma,
  tags: ['autodocs'],
} satisfies Meta<typeof Figma>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
