import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject = {
  path: "/",
  children: [
    {
      path: "public",
      element: "public",
      caseSensitive: true
    }
  ],
};