import { storybookOnlookPlugin } from '@onlook/storybook-plugin';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      plugins: [storybookOnlookPlugin()],
      // lucide-react 1.8.0 has ~5.8k icon re-exports. When lucide-react/dynamic
      // is also imported (faqs/three uses DynamicIcon), both become dep-scan
      // entries and esbuild's splitting promotes every shared icon into its own
      // chunk — Storybook's iframe fans out to ~1700 requests.
      //
      // Force lucide-react to prebundle as the sole entry, and exclude /dynamic
      // so they aren't co-bundled. Request count drops to ~70.
      optimizeDeps: {
        include: ['lucide-react'],
        exclude: ['lucide-react/dynamic'],
      },
    });
  },
};
export default config;
