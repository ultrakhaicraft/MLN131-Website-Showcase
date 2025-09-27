import { BrowserRouter, useRoutes } from "react-router-dom";
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
      <RoutesRenderer />
    </BrowserRouter>
  );
}
