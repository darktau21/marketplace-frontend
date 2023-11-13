import { ResponseWrapper, apiClient } from "./base";
import { LoginDto, RegisterDto } from "./userApi.dto";

export const QUERY_KEY = "user";
export const LOGGED_KEY = "logged";

export type User = {
  birthday: string;
  email: string;
  id: number;
  name: string;
  phone?: string;
  role?: string;
  state_number?: number;
  surname: string;
};

type UserResponse = ResponseWrapper<User, "users">;

export async function register(user: RegisterDto) {
  const res = await apiClient.post<UserResponse>("/reg", user);
  return res.data.data[0].field;
}

export async function login(user: LoginDto) {
  const res = await apiClient.post<UserResponse>("/login", user);
  return res.data.data[0].field;
}

export async function logout(user: LoginDto) {
  await apiClient.post<UserResponse>("/login", user);
}

export async function getCurrentUser() {
  try {
    const res = await apiClient.get<UserResponse>("/session_to_user");
    return res.data.data[0].field;
  } catch (_) {
    return null;
  }
}

// export async function editUser(newData: EditDto) {
//   const res = await apiClient.patch<UserResponse>("/", user);
//   return res.data.data[0].field;
// }
