# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bluebox AS is a Next.js 15 landing page for a Norwegian investment and consultancy firm. It is a single-page static site with no API routes, database, authentication, or CMS.

## Commands

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build
- `npm start` — Run production server
- `npm run lint` — ESLint with Next.js core-web-vitals and TypeScript rules

## Architecture

- **Next.js 15 App Router** with React 19, TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4 + CSS Modules (`page.module.css` for scoped styles, `globals.css` for Tailwind directives and CSS variables)
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`
- **Path alias**: `@/*` maps to `./src/*`

All app code lives in `src/app/`. The site is a single page (`page.tsx`) with a root layout (`layout.tsx`). Static assets are in `public/`.

## Key Patterns

- Page components are server components by default (no `'use client'` directive)
- Uses Next.js `Image` component for optimized image loading
- Dark mode support via CSS `prefers-color-scheme` media query in `globals.css`
- Responsive design with a mobile breakpoint at 600px in CSS Modules
- Brand colors: primary blue `#2AB7CA`, dark navy `#0A1F44`, slate grays for text
