# onbook-demo-org

Template repo for the Onbook demo organization. Ships a populated shadcn component library and a set of marketing-section blocks, all exposed as Storybook stories so the Onbook canvas can render them.

## What's in here

### UI primitives — `src/components/ui/`

55 shadcn components (Nova preset, Radix base, Tailwind v4), one `Default` story per component under the `UI/*` Storybook section.

### Marketing blocks — `src/components/blocks/`

79 blocks adapted from [Tailark's dusk-kit](https://github.com/tailark/blocks) (MIT), organized by category:

| Category | Variants |
|---|---|
| hero-section | 9 |
| features | 12 |
| content | 7 |
| testimonials | 6 |
| footer | 5 |
| pricing | 5 |
| integrations | 8 |
| faqs | 4 |
| stats | 4 |
| call-to-action | 3 |
| logo-cloud | 3 |
| login · sign-up · forgot-password | 8 |
| contact · team · comparator | 5 |

Each block lives at `blocks/<category>/<variant>/index.tsx` with a sibling `index.stories.tsx` rendering it under `Marketing/<Category>/<Variant>`.

### Supporting pieces

- `src/components/motion-primitives/` — `AnimatedGroup`, `InfiniteSlider`, `ProgressiveBlur`, `TextEffect`
- `src/components/magicui/` — `BorderBeam`
- `src/components/svgs/` — 20 brand logos (Vercel, Supabase, Linear, Claude, Spotify, etc.)
- `src/lib/next-shim.tsx` — drop-in replacement for `next/image` + `next/link` so the Next-authored Tailark blocks run under plain Vite

## Commands

```bash
bun install
bun run storybook        # dev server at http://localhost:6006
bun run build-storybook  # static export to storybook-static/
bun run typecheck        # tsc --noEmit -p tsconfig.app.json
bun run dev              # app shell on :5173 (rarely needed; Storybook is the primary surface)
```

## Integration with Onbook

`.storybook/main.ts` wires `@onlook/storybook-plugin` via `viteFinal`, which adds:
- `data-component-file` attributes for click-to-source in the canvas
- Screenshot capture endpoint (`/api/capture-screenshot`) used by the Onbook extended index
- E2B sandbox HMR routing

Light/dark mode is toggled via `@storybook/addon-themes` using the `.dark` class on `html`, matching the shadcn theme setup in `src/index.css`.

## Conventions

- Stories: **one `Default` export per component or block.** No variants, no controls beyond whatever `autodocs` infers. Add more only if the canvas actually needs them.
- Path alias: `@/*` → `src/*`.
- Images: absolute paths (`/payments-light.png`) resolved from `public/`.
- Fonts: Geist Variable loaded via `@fontsource-variable/geist` in `index.css`.

## Attribution

- shadcn components: MIT — [shadcn/ui](https://ui.shadcn.com)
- Marketing blocks: MIT — [Tailark](https://github.com/tailark/blocks) by Méschac Irung. Icons: [Lucide](https://lucide.dev).
