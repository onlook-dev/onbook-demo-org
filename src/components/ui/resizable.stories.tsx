import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

const meta = {
  title: 'UI/Resizable',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="h-40 w-96 rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-sm">One</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 text-sm">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
