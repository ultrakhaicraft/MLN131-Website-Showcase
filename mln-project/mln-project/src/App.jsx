import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import { routes } from "@/routes";

function RoutesRenderer() {
  const elements = routes.map((r) => ({
    path: r.path,
    element: r.element,
  }));
  return useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: elements,
    },
  ]);
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <RoutesRenderer />
      </Suspense>
    </BrowserRouter>
  );
}
