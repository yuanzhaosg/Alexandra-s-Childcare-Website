# Alexandra's Childcare Centre — Website

A marketing site for a Melbourne childcare centre built on play-based,
inquiry-led learning. Built with [Astro](https://astro.build) — a fast,
file-based static site framework that generates plain HTML.

---

## What's in this repo

```
alexandras-childcare/
├─ src/
│  ├─ components/
│  │  ├─ ArrowIcon.astro       Small arrow used in CTAs
│  │  ├─ Footer.astro          Site-wide footer
│  │  ├─ Nav.astro             Site-wide top nav with "Book a Tour"
│  │  └─ SectionEyebrow.astro  The "01 · Our approach" pattern
│  ├─ layouts/
│  │  └─ BaseLayout.astro      HTML shell, fonts, nav, footer wrapper
│  ├─ pages/
│  │  ├─ index.astro           Home page
│  │  └─ 404.astro             "Still being built" fallback
│  └─ styles/
│     └─ global.css            All design tokens + section styles
├─ public/                     Static files (favicons, robots.txt, etc.)
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
└─ README.md
```

The design system lives entirely in `src/styles/global.css` —
colours, fonts, spacing tokens, and per-section styles. Editing copy happens
inside each `.astro` file in `src/pages/`.

---

## Running locally

You'll need [Node.js](https://nodejs.org/) 18.17+ installed.

```bash
npm install        # one-time, downloads dependencies
npm run dev        # starts the dev server, usually at http://localhost:4321
```

The dev server auto-reloads when you save a file. Stop it with Ctrl-C.

To build the production version (a `dist/` folder of plain HTML):

```bash
npm run build
npm run preview    # serves the production build locally to check it
```

---

## Editing copy

All home page copy is inside `src/pages/index.astro`. Each section is wrapped
in a comment like `{/* ── Hero ── */}` so it's easy to find what to edit.

Text between tags is editable directly — for example:

```astro
<h1 class="display">
  Two ways of learning.<br />
  <em>Three things</em> every child<br />
  takes with them.
</h1>
```

Anything inside `<em>` gets the italic terracotta treatment. Anything inside
`<strong>` gets weight + darker ink. The `<br />` tags force line breaks where
the design calls for them — remove if you change the headline length.

---

## Adding new pages

Drop a file in `src/pages/`. The filename becomes the URL:

- `src/pages/philosophy.astro` → `/philosophy`
- `src/pages/book-a-tour.astro` → `/book-a-tour`

Use the existing pattern:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Our Philosophy" navCurrent="philosophy">
  <!-- your page content -->
</BaseLayout>
```

The `navCurrent` prop highlights that page's link in the nav.

---

## Deploying

This is a static Astro build, so it deploys to any static host. The plan is
Vercel:

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the GitHub repo.
3. Vercel auto-detects Astro and uses the right build settings (`npm run
   build`, output `dist/`). No configuration needed for the first deploy.
4. Repoint `alexandral.com.au` at the Vercel deployment.

For preview deployments, every push to a non-main branch gets its own URL —
useful for sharing in-progress work.

---

## Still to come

These were specified in the brief but haven't been built yet:

- Pages: Philosophy, Curriculum, Daily Life, Environments, Team, Parent
  Partnerships, Resources, Practical Info, Book a Tour, Blog.
- Tour booking form wired to Formspree (or equivalent) so submissions
  actually arrive somewhere.
- CMS integration (TinaCMS or Storyblok) for non-technical editing of page
  content and the blog.
- Real photography to replace the gradient placeholders in the hero and the
  "A day here" section.

Each of these is on the roadmap; clicking a nav link to an unbuilt page lands
on the friendly 404.

---

## Stack and decisions

- **Framework:** Astro 5, static output. Fast, minimal JS, file-based routing.
  Easy to add interactive bits later (React, Svelte) without rewriting.
- **Type system:** TypeScript via Astro's strict preset, mostly used inside
  component frontmatter for prop types.
- **Fonts:** Fraunces (display, with the SOFT and WONK axes turned up for the
  slightly hand-drawn italics) and DM Sans (body), both loaded from Google
  Fonts.
- **No CSS framework:** Tailwind, Bootstrap, etc. were skipped. The design is
  specific enough that a hand-tuned stylesheet is easier to evolve than
  fighting utility classes.
- **No build-time image processing yet:** placeholder gradients are inline
  CSS. When real photography arrives, Astro's `<Image />` component will
  handle resizing and modern formats.
