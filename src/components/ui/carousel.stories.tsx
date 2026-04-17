import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const meta = {
  title: 'UI/Carousel',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Carousel className="w-64">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, i) => (
        <CarouselItem key={i}>
          <Card><CardContent className="flex aspect-square items-center justify-center p-6 text-4xl">{i + 1}</CardContent></Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  ),
}
