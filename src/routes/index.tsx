import { useRoutes } from "react-router-dom";
import { privateRoutes } from './private';
import { publicRoutes } from './public';

export function Routes() {
  return useRoutes([publicRoutes, privateRoutes]);
}
