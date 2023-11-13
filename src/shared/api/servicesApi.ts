import { ResponseWrapper, apiClient } from "./base";

export const QUERY_KEY = "service";

export type Service = {
  about: string;
  id: number;
  image_url: string;
  name_sector: string;
  slug: string;
};

type ServiceResponse = ResponseWrapper<Service, "services_sector">;

export async function getServices() {
  const res = await apiClient.get<ServiceResponse>("/services_sector");
  return res.data.data.map(({ field }) => field);
}
