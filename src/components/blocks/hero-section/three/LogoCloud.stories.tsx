import type { Meta, StoryObj } from '@storybook/react';
import { LogoCloud } from './logo-cloud';

const meta = {
  component: LogoCloud,
  tags: ['autodocs'],
} satisfies Meta<typeof LogoCloud>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
