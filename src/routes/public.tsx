// import Login from 'pages/public/login';
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Login = lazy(() => import("pages/public/login"));

export const publicRoutes: RouteObject = {
  path: "/",
  children: [
    {
      path: "login",
      element: <Login />,
      caseSensitive: true,
    },
  ],
};
