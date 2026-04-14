import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import RootLayout from './routes/RootLayout';
import Home from './routes/Home';
import About from './routes/About';

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({routeTree});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
