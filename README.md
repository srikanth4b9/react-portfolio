# React Portfolio

A personal portfolio built with React, Vite, and TanStack Router.

## Tech Stack

- **React 19** - UI library
- **Vite 8** - Build tool with HMR
- **TanStack Router** - Type-safe, client-side routing
- **ESLint** - Code linting

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

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  main.jsx          # App entry point, mounts RouterProvider
  router.jsx        # Route definitions (TanStack Router)
  App.css           # Global component styles
  index.css         # Base/reset styles
  routes/
    RootLayout.jsx  # Root layout with navigation bar
    Home.jsx        # Home page (/)
    About.jsx       # About page (/about)
  assets/
    hero.png
    react.svg
    vite.svg
```

## Routing

This project uses [TanStack Router](https://tanstack.com/router) for client-side routing. Routes are defined in `src/router.jsx` using code-based route configuration.

### Current Routes

| Path     | Component   | Description          |
| -------- | ----------- | -------------------- |
| `/`      | `Home`      | Landing page         |
| `/about` | `About`     | About page           |

### Adding a New Route

1. Create a component in `src/routes/` (e.g., `Contact.jsx`)
2. In `src/router.jsx`, import the component and create a route:
   ```jsx
   import Contact from './routes/Contact'

   const contactRoute = createRoute({
     getParentRoute: () => rootRoute,
     path: '/contact',
     component: Contact,
   })
   ```
3. Add it to the route tree:
   ```jsx
   const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute])
   ```
4. Optionally add a `<Link to="/contact">` in `RootLayout.jsx`

### Navigation

Use `<Link>` from `@tanstack/react-router` for client-side navigation:

```jsx
import { Link } from '@tanstack/react-router'

<Link to="/about">About</Link>
```

## Expanding the ESLint Configuration

For production apps, we recommend TypeScript with type-aware lint rules. See the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for integration details.
