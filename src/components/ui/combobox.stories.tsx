import type { Meta, StoryObj } from '@storybook/react-vite'
import { Combobox } from '@/components/ui/combobox'

const meta = {
  title: 'UI/Combobox',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Combobox
    options={[
      { value: 'next', label: 'Next.js' },
      { value: 'svelte', label: 'SvelteKit' },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'remix', label: 'Remix' },
      { value: 'astro', label: 'Astro' },
    ]}
    placeholder="Select framework..."
    searchPlaceholder="Search framework..."
    emptyText="No framework found."
  />
  ),
}
