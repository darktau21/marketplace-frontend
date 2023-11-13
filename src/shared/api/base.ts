import axios from "axios";
import { API_URL } from "@/shared/config";

export const apiClient = axios.create({
  baseURL: API_URL as string,
  withCredentials: true,
});

export type ResponseWrapper<TData, TType extends string> = {
  data: {
    field: TData;
    type_obj: TType;
  }[];
  errors: string[];
  response_status: 200 | 201 | 204 | 400 | 403 | 409 | 500;
};
