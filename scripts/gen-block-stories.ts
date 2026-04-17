import { existsSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BLOCKS = join(import.meta.dir, '..', 'src', 'components', 'blocks');

function titleCase(s: string) {
  return s
    .split('-')
    .map((p) => p[0]?.toUpperCase() + p.slice(1))
    .join(' ');
}

function storyForVariant(category: string, variant: string) {
  // Story file sits at src/components/blocks/<category>/<variant>/index.stories.tsx
  // Block entry is at src/components/blocks/<category>/<variant>/index.tsx (default export)
  return `import type { Meta, StoryObj } from '@storybook/react-vite'
import Block from './index'

const meta = {
  title: 'Marketing/${titleCase(category)}/${titleCase(variant)}',
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Block />,
}
`;
}

let count = 0;
for (const category of readdirSync(BLOCKS)) {
  const categoryPath = join(BLOCKS, category);
  if (!statSync(categoryPath).isDirectory()) continue;
  for (const variant of readdirSync(categoryPath)) {
    const variantPath = join(categoryPath, variant);
    if (!statSync(variantPath).isDirectory()) continue;
    const indexFile = join(variantPath, 'index.tsx');
    if (!existsSync(indexFile)) continue;
    const storyPath = join(variantPath, 'index.stories.tsx');
    writeFileSync(storyPath, storyForVariant(category, variant));
    count++;
  }
}
console.log(`wrote ${count} block stories`);
