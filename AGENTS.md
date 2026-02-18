## Project Overview

This is a Next.js 16 portfolio project using React 19, Tailwind CSS v4, shadcn/ui components, and Yarn as the package manager.

## Key Technologies

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **UI Components**: shadcn/ui + Radix UI primitives
- **Package Manager**: Yarn

## Important Notes

- **Do not run `yarn build`** to verify changes during development. The dev server is always running with hot-reload.
- The project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax
- Components are styled with Tailwind utility classes
- shadcn/ui components are in `components/ui/`

## Code Style

- Use TypeScript for all new files
- Follow existing component patterns in `components/ui/`
- Use `cn()` utility (from `clsx` + `tailwind-merge`) for conditional class merging
- Prefer server components unless client interactivity is needed
- Use `lucide-react` for icons

## File Structure

```
src/
  app/              # Next.js App Router pages
    projects/
      [slug]/       # Dynamic project pages
  components/       # React components
    ui/             # shadcn/ui components
  lib/              # Utility functions (cn, etc.)
public/             # Static assets
```

## Adding shadcn Components

```bash
yarn dlx shadcn add <component-name>
```
