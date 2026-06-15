# onbook-demo-org · Onlook playbook

Onlook AI agents read this file as project intelligence. Keep it short and concrete —
it's prepended to the agent's system prompt every turn.

## Stack

- Framework: vite-react
- Storybook config: `.storybook/main.ts`
- Components are rendered through Storybook stories. Add a `*.stories.tsx`
  next to any component you want to edit in the Onlook canvas.

## Components

Onlook discovers components in these locations:

- `src/components/**/*.{tsx,jsx}`
- `components/**/*.{tsx,jsx}`
- `app/components/**/*.{tsx,jsx}`
- `src/app/components/**/*.{tsx,jsx}`

## Styling

- Tailwind CSS v4
- Global stylesheet: `src/index.css`

## Extending this playbook

This file ships with detected facts only. Add your own design-system
conventions — colors, typography, spacing, component patterns, and any
guardrails the agent must follow — to sharpen how Onlook edits this codebase.
