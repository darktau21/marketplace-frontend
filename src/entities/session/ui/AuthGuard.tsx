import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { Routes } from "@/shared/config";
import { Spinner } from "@/shared/ui/Spinner";
import { AuthLoader } from "..";

type Props = PropsWithChildren;

export const AuthGuard = ({ children }: Props) => {
  return (
    <AuthLoader
      renderLoading={() => (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      )}
      renderUnauthenticated={() => (
        <Navigate replace={false} to={Routes.LOGIN} />
      )}
    >
      {children}
    </AuthLoader>
  );
};
