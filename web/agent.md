# Gemini Agent Instructions — Landing-Page-FM

> These instructions are read by Gemini in OpenCode before making any change to this repository. Follow them strictly.

---

## Project Overview

**Landing-Page-FM** is a Next.js 16 + TypeScript landing page for a men's discipleship ministry called **Forming Men**. The site recreates a bold, editorial, poster-like aesthetic — paper tones, distressed typography, monochrome photography, and strong rectangular composition.

**Stack:**

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4 (utility layer only — most styling is done in SCSS)
- SASS/SCSS (primary styling system)
- pnpm (package manager)

**Project root for source code:** `web/`

---

## Repository Structure

```
Landing-Page-FM/
├── web/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/        # Header, Footer, Main wrappers
│   │   │   ├── sections/      # Page sections (Hero, Intro, CTA)
│   │   │   │   ├── CTA/
│   │   │   │   │   └── CTASection.tsx      # CTA section — renders CtaFeature rows
│   │   │   │   ├── Hero/
│   │   │   │   └── Intro/
│   │   │   └── shared/
│   │   │       └── CtaFeature.tsx          # Reusable split-layout feature row
│   │   ├── style/
│   │   │   ├── variables/     # _colors.scss, _fonts.scss, _spacing.scss
│   │   │   ├── shared/        # _mixins.scss, _reset.scss, _base.scss
│   │   │   ├── utilities/     # _container.scss, _buttons.scss
│   │   │   ├── components/    # _cta-feature.scss, _header.scss, _footer.scss
│   │   │   └── sections/      # _cta.scss, _hero.scss, _intro.scss
│   │   ├── types/
│   │   ├── global.scss        # SCSS entry — imports all partials
│   │   ├── layout.tsx         # Root layout — fonts loaded here
│   │   └── page.tsx           # Home page — composes all sections
│   ├── public/
│   │   ├── fonts/             # Local fonts (InputMono, Akzidenz Grotesk, Chainprinter)
│   │   └── images/            # Section images
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
```

---

## Design System

### Colors (`web/app/style/variables/_colors.scss`)

```scss
--color-paper: #eae8dc; // warm off-white — page background
--color-ink: #282828; // near-black — primary text and borders
--color-accent: #497782; // muted teal — CTA buttons only
--color-accent-border: #282828;
--color-white: #ffffff;
```

**Rules:**

- Never introduce new colors outside these variables.
- `--color-accent` is used ONLY for interactive CTA buttons.
- All text is `--color-ink`. All backgrounds use `--color-paper` or transparent.
- Never add gradients, glows, or colorful backgrounds.

### Typography (`web/app/style/variables/_fonts.scss`)

Three custom local fonts loaded in `layout.tsx`:

| CSS Variable                           | Font File                               | Usage                              |
| -------------------------------------- | --------------------------------------- | ---------------------------------- |
| `--font-heading` / `--font-display`    | Berthold Akzidenz Grotesk Bold Extended | All headings — `h1`, `h2`, `h3`    |
| `--font-body` / `--font-mono`          | InputMono Regular                       | All body text, descriptions, dates |
| `--font-accent-text` / `--font-accent` | Chainprinter W00 Regular                | Decorative / accent text only      |

**Rules:**

- Always use `var(--font-heading)` for headings, `var(--font-body)` for body text.
- Never import or reference Google Fonts or Fontshare.
- Use SCSS mixins (`heading-text`, `mono-text`) — never write raw font-family declarations in component styles.

### Spacing (`web/app/style/variables/_spacing.scss`)

Custom spacing scale. Use SCSS variables only:

```scss
--space-1: 6px --space-4: 16px --space-8: 32px --space-12: 48px --space-16: 64px --space-2: 8px
	--space-5: 20px --space-9: 36px --space-13: 52px --space-3: 12px --space-6: 24px --space-10: 40px
	--space-7: 28px --space-11: 44px;
```

Container widths:

```scss
--container-width: 1319px --container-narrow: 980px --container-feature: 1272px
	--container-text: 760px --section-space-y: 120px;
```

**Rules:**

- Never use arbitrary pixel values in SCSS. Always reference a spacing variable.
- Never add Tailwind spacing utilities to layout elements — keep spacing in SCSS.

---

## Component Architecture

### `CtaFeature.tsx` — Reusable split-layout row

**Location:** `web/app/components/shared/CtaFeature.tsx`

**Props:**

```ts
type CtaFeatureProps = {
	title: string;
	date?: string;
	description: string;
	image: string;
	imageAlt: string;
	imageLeft?: boolean; // true = image on left, text on right
	href?: string;
	buttonLabel?: string;
};
```

**Layout behavior:**

- Default (`imageLeft: false`): text panel left, image panel right
- `imageLeft: true`: image panel left, text panel right (CSS `order` swap)
- Two-column CSS Grid with `minmax(0, calc(var(--container-width) / 2))` for the text column
- Image bleeds to viewport edge on the outer side using negative margin
- On mobile: stack vertically, text first

**Styling:** `web/app/style/components/_cta-feature.scss`

### `CTASection.tsx` — Section wrapper

**Location:** `web/app/components/sections/CTA/CTASection.tsx`

- Renders a centered heading ("Come Hangout With Us") preceded by a decorative divider
- Maps over an `items` array and renders a `<CtaFeature />` for each
- The `items` array is defined inline in the component — no external data fetching
- Each item has `imageLeft: true/false` to alternate layout

**Current items:**

1. Men's Conference (`imageLeft: false`)
2. Retreats (`imageLeft: true`)
3. 3 Month Online Cohorts (`imageLeft: false`)
4. The Men's Council Mastermind (`imageLeft: true`)

---

## Coding Rules

### General

- Use TypeScript for all new files. No `any` types.
- All React components are functional components with explicit prop types.
- Use `next/image` for all images — never a raw `<img>` tag.
- Use `next/link` for all internal links — never `<a href>` for navigation.
- No client components (`"use client"`) unless absolutely necessary for interactivity.
- No external UI libraries (no shadcn, no radix, no MUI).

### SCSS

- All styles live in `web/app/style/`. Never write inline `style={}` props.
- Do not use Tailwind utility classes for layout, spacing, or typography — only for rare utility overrides.
- Always import new SCSS partials in `global.scss` using the correct category subfolder.
- Component styles go in `style/components/`. Section styles go in `style/sections/`.
- Use existing SCSS mixins (`heading-text`, `mono-text`) for all text styling.
- Use BEM-like flat class names (`.cta-feature`, `.title`, `.image-left`).

### Images

- Images live in `web/public/images/`.
- Use `next/image` with explicit `width` and `height` props.
- Always provide a meaningful `alt` string.

---

## What NOT to Do

- ❌ Do not add SaaS-style cards with colored side borders
- ❌ Do not add gradients, glows, or colorful backgrounds
- ❌ Do not use Google Fonts or Fontshare — only local fonts
- ❌ Do not use `<img>` tags — always `next/image`
- ❌ Do not hardcode pixel values in SCSS — use spacing variables
- ❌ Do not introduce new color values — use the 5 existing CSS color variables
- ❌ Do not center all text — headings center, body text left-aligns
- ❌ Do not add border-radius to images or CTA feature cards — keep sharp rectangular edges
- ❌ Do not use any icons-in-colored-circles decoration pattern
- ❌ Do not create `useEffect`/`useState` unless the user explicitly requests interactivity

---

## CTA Section — Specific Prompt

When asked to **build, update, or add to the CTA section**, follow this spec exactly:

### Task

Add a new CTA feature row to `CTASection.tsx` with alternating left/right layout.

### Layout

- Alternating split layout: even-indexed items → text left, image right; odd-indexed items → image left, text right
- Two-column CSS grid, text panel has constrained max-width using `--container-width`
- Image bleeds to the viewport edge on the outer side using negative margin trick from `_cta-feature.scss`
- Stack to single column on mobile (text always on top)

### Component to use

`CtaFeature` from `@/app/components/shared/CtaFeature`

### Props to fill

```ts
{
  title: string;          // Uppercase display headline
  date?: string;          // Optional — only if there's a date
  description: string;    // 2-4 sentence editorial body copy, InputMono style
  image: string;          // Path starting with /images/
  imageAlt: string;       // Descriptive alt text
  imageLeft: boolean;     // Alternate per item — false/true/false/true
  href?: string;          // Optional link
  buttonLabel?: string;   // Default: "Tell Me More!"
}
```

### Style

- Background: `--color-paper` (#eae8dc)
- Text: `--color-ink` (#282828)
- Button: `--color-accent` (#497782)
- Image: desaturated/monochrome treatment in CSS (`filter: grayscale(30%)` is acceptable)
- No rounded corners on images or cards
- Typography: `var(--font-heading)` for title, `var(--font-body)` for description

### Adding a new section SCSS file

If creating a new SCSS partial, place it in the correct folder and import it at the bottom of the correct category block in `global.scss`:

```scss
/* Sections */
@import "../app/style/sections/your-section";
```

---

## Running the project

```bash
cd web
pnpm install
pnpm dev
```

Site runs at `http://localhost:3000`.
