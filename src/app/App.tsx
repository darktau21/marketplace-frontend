// import { AppRouterProvider } from "./providers/RouterProvider";

import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { LoadingPage } from "@/pages/LoadingPage";
import { AppQueryClientProvider } from "./providers/AppQueryClientProvider";

const AppRouterProvider = lazy(() => import("./providers/AppRouterProvider"));

export const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <AppQueryClientProvider>
        <AppRouterProvider />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1e3859",
              color: "#ffffff",
              padding: "1rem 2rem",
            },
          }}
        />
      </AppQueryClientProvider>
    </Suspense>

    // <LoadingPage />
  );
};
