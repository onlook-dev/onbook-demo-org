import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarIcon, SmileIcon, CalculatorIcon } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'

const meta = {
  title: 'UI/Command',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="w-80 rounded-lg border shadow-md">
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem><CalendarIcon /> Calendar</CommandItem>
        <CommandItem><SmileIcon /> Search Emoji</CommandItem>
        <CommandItem><CalculatorIcon /> Calculator</CommandItem>
      </CommandGroup>
      <CommandSeparator />
    </CommandList>
  </Command>
  ),
}
