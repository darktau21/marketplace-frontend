import { useCallback } from "react";
import {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export interface ReactQueryAuthConfig<
  User,
  LoginCredentials,
  RegisterCredentials
> {
  loginFn: MutationFunction<User, LoginCredentials>;
  // logoutFn: MutationFunction<unknown, unknown>;
  registerFn: MutationFunction<User, RegisterCredentials>;
  userFn: QueryFunction<User, QueryKey>;
  userKey?: QueryKey;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function configureAuth<
  User,
  Error,
  LoginCredentials,
  RegisterCredentials
>(config: ReactQueryAuthConfig<User, LoginCredentials, RegisterCredentials>) {
  const {
    loginFn,
    // logoutFn,
    registerFn,
    userFn,
    userKey = ["authenticated-user"],
  } = config;

  const useUser = (
    options?: Omit<
      UseQueryOptions<User, Error, User, QueryKey>,
      "queryFn" | "queryKey"
    >
  ) => useQuery({ queryFn: userFn, queryKey: userKey, ...options });

  const useLogin = (
    options?: Omit<
      UseMutationOptions<User, Error, LoginCredentials>,
      "mutationFn"
    >
  ) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data: User) => queryClient.setQueryData(userKey, data),
      [queryClient]
    );

    return useMutation({
      mutationFn: loginFn,
      ...options,
      onSuccess: (user, ...rest) => {
        setUser(user);
        options?.onSuccess?.(user, ...rest);
      },
    });
  };

  const useRegister = (
    options?: Omit<
      UseMutationOptions<User, Error, RegisterCredentials>,
      "mutationFn"
    >
  ) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data: User) => queryClient.setQueryData(userKey, data),
      [queryClient]
    );

    return useMutation({
      mutationFn: registerFn,
      ...options,
      onSuccess: (user, ...rest) => {
        setUser(user);
        options?.onSuccess?.(user, ...rest);
      },
    });
  };

  // const useLogout = (options?: UseMutationOptions<unknown, Error, unknown>) => {
  //   const queryClient = useQueryClient();

  //   const setUser = useCallback(
  //     (data: User | null) => queryClient.setQueryData(userKey, data),
  //     [queryClient]
  //   );

  //   return useMutation({
  //     mutationFn: logoutFn,
  //     ...options,
  //     onSuccess: (...args) => {
  //       setUser(null);
  //       options?.onSuccess?.(...args);
  //     },
  //   });
  // };

  function AuthLoader({
    children,
    renderError = (error: Error) => <>{JSON.stringify(error)}</>,
    renderLoading,
    renderUnauthenticated,
  }: {
    children: React.ReactNode;
    renderError?: (error: Error) => JSX.Element;
    renderLoading: () => JSX.Element;
    renderUnauthenticated?: () => JSX.Element;
  }) {
    const { data, error, isFetched, isSuccess, status } = useUser();

    if (isSuccess) {
      if (renderUnauthenticated && !data) {
        return renderUnauthenticated();
      }
      return <>{children}</>;
    }

    if (!isFetched) {
      return renderLoading();
    }

    if (status === "error") {
      return renderError(error);
    }

    return null;
  }

  return {
    AuthLoader,
    useLogin,
    // useLogout,
    useRegister,
    useUser,
  };
}
