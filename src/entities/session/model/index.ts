import { userApi } from "@/shared/api";
import { configureAuth } from "../lib";

export const { AuthLoader, useLogin, useRegister, useUser } = configureAuth({
  loginFn: userApi.login,
  registerFn: userApi.register,
  userFn: userApi.getCurrentUser,
});
