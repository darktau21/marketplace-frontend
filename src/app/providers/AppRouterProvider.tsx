import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AccountPage } from "@/pages/AccountPage";
import { CleanLayout } from "@/pages/CleanLayout";
import { EditRolePage } from "@/pages/EditRolePage/EditRolePage";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import { Layout } from "@/pages/Layout";
import { LoginPage } from "@/pages/LoginPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { AuthGuard } from "@/entities/session";
import { Routes } from "@/shared/config";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <HomePage />,
        path: Routes.HOME,
      },
      {
        element: (
          <AuthGuard>
            <AccountPage />
          </AuthGuard>
        ),
        path: Routes.ACCOUNT,
      },
      {
        element: <ServicesPage />,
        path: Routes.SERVICES,
      },
    ],
    element: <Layout />,
  },
  {
    children: [
      {
        element: <LoginPage />,
        path: Routes.LOGIN,
      },
      {
        element: <RegistrationPage />,
        path: Routes.REGISTER,
      },
      {
        element: (
          <AuthGuard>
            <EditRolePage />
          </AuthGuard>
        ),
        path: Routes.EDIT_ROLE,
      },
    ],
    element: <CleanLayout />,
  },
  {
    element: <ErrorPage code={404} message={"Страница не найдена"} />,
    path: "*",
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
