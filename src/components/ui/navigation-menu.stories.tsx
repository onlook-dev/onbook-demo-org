import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

const meta = {
  title: 'UI/Navigation Menu',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-72 gap-2 p-4">
            <NavigationMenuLink className="rounded-md p-3 hover:bg-accent">Introduction</NavigationMenuLink>
            <NavigationMenuLink className="rounded-md p-3 hover:bg-accent">Installation</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  ),
}
