import type { Meta, StoryObj } from '@storybook/react';
import { Twilio } from './twilio';

const meta = {
  component: Twilio,
  tags: ['autodocs'],
} satisfies Meta<typeof Twilio>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
