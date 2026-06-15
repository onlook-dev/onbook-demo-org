import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedGroup } from './animated-group';

const meta = {
  component: AnimatedGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedGroup>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <><div className='bg-blue-100 px-4 py-3 rounded'>Feature One</div><div className='bg-green-100 px-4 py-3 rounded'>Feature Two</div><div className='bg-purple-100 px-4 py-3 rounded'>Feature Three</div></>,
  },};

export const Fullscreen: Story = {
  args: {
    children: <div className='grid grid-cols-4 gap-4 p-8'><div className='bg-gradient-to-br from-blue-400 to-blue-600 h-32 rounded-lg'></div><div className='bg-gradient-to-br from-green-400 to-green-600 h-32 rounded-lg'></div><div className='bg-gradient-to-br from-purple-400 to-purple-600 h-32 rounded-lg'></div><div className='bg-gradient-to-br from-pink-400 to-pink-600 h-32 rounded-lg'></div><div className='bg-gradient-to-br from-yellow-400 to-yellow-600 h-32 rounded-lg'></div><div className='bg-gradient-to-br from-indigo-400 to-indigo-600 h-32 rounded-lg'></div><div className='bg-gradient-to-br from-red-400 to-red-600 h-32 rounded-lg'></div><div className='bg-gradient-to-br from-cyan-400 to-cyan-600 h-32 rounded-lg'></div></div>,
  },
  parameters: { layout: 'fullscreen' },
};
