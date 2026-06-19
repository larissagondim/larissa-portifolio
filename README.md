# Larissa's Portfolio

A modern, responsive, and animated personal portfolio built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Shadcn UI
- **Internationalization**: `next-intl`

## Current Progress

Here is what has been implemented so far:

- **Project Setup**: Initialized Next.js project with Tailwind CSS.
- **Dynamic Background**: Added a custom `GradientBackground` layered behind the content using Tailwind's stacking context (`isolate` and negative `z-index`), allowing the colorful gradient to wrapper the interface cleanly and fixed across the entire page.
- **Hero Section**: Built an animated Hero component using `framer-motion`. It includes staggered reveal animations for the title, subtitle, location, university, and skill tags.
- **GitHub Integration**: Integrated a visual contributions calendar widget (`GithubActivity`) aligned to the main page layout.
- **Locale Switcher**: Includes a button which makes the portifolio fully in english.
- **Featured Projects**: Developed a responsive projects section displaying detailed cards for "Pauta", "Pokémon ADT", "Java Tech Wordle", and "Beecrowd". Included smooth hover animations and expandable details for key contributions.
- **Translation & i18n Fixes**: Successfully wired up `next-intl` to translate UI elements and project data. Fixed Next.js 15 async `params` logic to correctly switch languages dynamically across the entire app.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can switch the locale by navigating to `/en` or `/pt`.
