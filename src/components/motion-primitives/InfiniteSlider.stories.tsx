import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteSlider } from './infinite-slider';

const meta = {
  component: InfiniteSlider,
  tags: ['autodocs'],
  argTypes: {
    gap: { control: 'number' },
    speed: { control: 'number' },
    speedOnHover: { control: 'number' },
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    reverse: { control: 'boolean' },
  },
} satisfies Meta<typeof InfiniteSlider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <><div className='flex-shrink-0 w-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg h-40 flex items-center justify-center text-white font-bold'>Product 1</div><div className='flex-shrink-0 w-48 bg-gradient-to-br from-green-500 to-green-600 rounded-lg h-40 flex items-center justify-center text-white font-bold'>Product 2</div><div className='flex-shrink-0 w-48 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg h-40 flex items-center justify-center text-white font-bold'>Product 3</div><div className='flex-shrink-0 w-48 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg h-40 flex items-center justify-center text-white font-bold'>Product 4</div></>,
    gap: 16,
    speed: 80,
    speedOnHover: 40,
    direction: 'horizontal',
    reverse: false,
  },
};

export const Vertical: Story = {
  args: {
    children: <><div className='flex-shrink-0 h-24 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg w-full flex items-center justify-center text-white font-bold'>Slide 1</div><div className='flex-shrink-0 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg w-full flex items-center justify-center text-white font-bold'>Slide 2</div><div className='flex-shrink-0 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg w-full flex items-center justify-center text-white font-bold'>Slide 3</div><div className='flex-shrink-0 h-24 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg w-full flex items-center justify-center text-white font-bold'>Slide 4</div></>,
    gap: 20,
    speed: 100,
    speedOnHover: 50,
    direction: 'vertical',
    reverse: false,
  },
};
