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
- **Internationalization (i18n)**: Configured `next-intl` to support multiple languages (Portuguese `pt` and English `en`). The root route automatically redirects to the default locale (`/pt`).
- **Hero Section**: Built an animated Hero component using `framer-motion`. It includes staggered reveal animations for the title, subtitle, location, university, and skill tags.
- **UI Components**: Integrated `shadcn/ui` and added the core `Button` component, which is used for calls-to-action in the Hero section.
- **TypeScript Fixes**: Resolved strict type constraints for Next.js routing and local module definitions.

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
