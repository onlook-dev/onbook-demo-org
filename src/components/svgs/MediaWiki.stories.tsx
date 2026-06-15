import type { Meta, StoryObj } from '@storybook/react';
import { MediaWiki } from './media-wiki';

const meta = {
  component: MediaWiki,
  tags: ['autodocs'],
} satisfies Meta<typeof MediaWiki>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
