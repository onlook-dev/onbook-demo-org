import type { Meta, StoryObj } from '@storybook/react';
import { ProgressiveBlur } from './progressive-blur';

const meta = {
  component: ProgressiveBlur,
  tags: ['autodocs'],
  argTypes: {
    blurLayers: { control: 'number' },
    blurIntensity: { control: 'number' },
  },
} satisfies Meta<typeof ProgressiveBlur>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blurLayers: 6,
    blurIntensity: 0.4,
  },
};
