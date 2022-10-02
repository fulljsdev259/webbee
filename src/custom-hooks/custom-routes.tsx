import React, { useMemo } from "react";
import { routes } from "../routes";
import { Routes, Route } from "react-router-dom";

export function useCustomRoutes() {

  const router = useMemo(() => {
    const route = routes.root;
    return (
      <Routes>
        <Route path={route.path} element={route.element} /> {/* //default path */}
        {route.children.map((child, index) => {
          return (
            <Route
              key={String(index)}
              path={child.path}
              element={child.element}
            />
          );
        })}
      </Routes>
    );
  }, [routes]);
  // based on user auth we can render dynamic routes for security purposes

  return {
    router,
  };
}
