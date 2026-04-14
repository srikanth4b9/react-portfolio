# React Portfolio

A personal portfolio built with React, Vite, and TanStack Router.

## Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool with HMR
- **TypeScript 6** - Strict type-checking (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- **TanStack Router** - Type-safe, client-side routing
- **ESLint** - Code linting with `@typescript-eslint` (`no-explicit-any` enforced)
- **Prettier** - Code formatting (`bracketSpacing: false`, `semi: true`, `singleQuote: true`)
- **Husky + lint-staged** - Pre-commit hook runs Prettier on staged files
- **MUI (Material UI)** - React UI component library with Material Design
- **Emotion** - CSS-in-JS styling engine (required by MUI)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173`.

### Build

```bash
npm run build
```

Runs `tsc --noEmit` before `vite build` to catch type errors.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Type Check

```bash
npm run type-check
```

### Format

```bash
npm run format          # format all files
npm run format:check    # check formatting without writing
```

## Project Structure

```
src/
  main.tsx              # App entry point, mounts RouterProvider
  router.tsx            # Route definitions with type-safe registration
  vite-env.d.ts         # Vite client and asset type declarations
  App.css               # Global component styles
  index.css             # Base/reset styles
  routes/
    RootLayout.tsx      # Root layout with navigation bar
    Home.tsx            # Home page (/)
    About.tsx           # About page (/about)
  assets/
    hero.png
    react.svg
    vite.svg
tsconfig.json           # Strict TypeScript configuration
.prettierrc             # Prettier configuration
.husky/pre-commit       # Pre-commit hook (lint-staged)
```

## Routing

This project uses [TanStack Router](https://tanstack.com/router) for client-side routing. Routes are defined in `src/router.tsx` using code-based route configuration with full type registration.

### Current Routes

| Path     | Component | Description  |
| -------- | --------- | ------------ |
| `/`      | `Home`    | Landing page |
| `/about` | `About`   | About page   |

### Adding a New Route

1. Create a component in `src/routes/` (e.g., `Contact.tsx`)
2. In `src/router.tsx`, import the component and create a route:

   ```tsx
   import Contact from './routes/Contact';

   const contactRoute = createRoute({
     getParentRoute: () => rootRoute,
     path: '/contact',
     component: Contact,
   });
   ```

3. Add it to the route tree:
   ```tsx
   const routeTree = rootRoute.addChildren([
     indexRoute,
     aboutRoute,
     contactRoute,
   ]);
   ```
4. Optionally add a `<Link to="/contact">` in `RootLayout.tsx`

### Navigation

Use `<Link>` from `@tanstack/react-router` for client-side navigation:

```tsx
import {Link} from '@tanstack/react-router';

<Link to="/about">About</Link>;
```
