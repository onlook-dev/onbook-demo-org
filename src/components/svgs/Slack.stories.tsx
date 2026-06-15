import type { Meta, StoryObj } from '@storybook/react';
import { Slack } from './slack';

const meta = {
  component: Slack,
  tags: ['autodocs'],
} satisfies Meta<typeof Slack>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
