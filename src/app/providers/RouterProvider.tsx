import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { Layout } from "@/pages/Layout";
import { Routes } from "@/shared/config";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <HomePage />,
        path: Routes.HOME,
      },
    ],
    element: <Layout />,
  },
]);

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
