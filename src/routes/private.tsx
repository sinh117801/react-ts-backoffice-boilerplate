import { RouteObject } from 'react-router-dom';

export const privateRoutes: RouteObject = {
  path: "/",
  children: [
    {
      path: "private",
      element: 'private',
      caseSensitive: true
    }
  ],
};