import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

interface Route {
  path: string;
  element: ReactNode;
}
interface AppRoutesProps {
  routes: Route[];
}

export const AppRoutes = ({ routes }: AppRoutesProps) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
