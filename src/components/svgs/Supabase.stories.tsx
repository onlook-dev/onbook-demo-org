import type { Meta, StoryObj } from '@storybook/react';
import { Supabase } from './supabase';

const meta = {
  component: Supabase,
  tags: ['autodocs'],
} satisfies Meta<typeof Supabase>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Fullscreen: Story = {
  parameters: { layout: 'fullscreen' },
};
