import type { Meta, StoryObj } from '@storybook/react';
import Spotify from './spotify';

const meta = {
  component: Spotify,
  tags: ['autodocs'],
} satisfies Meta<typeof Spotify>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
