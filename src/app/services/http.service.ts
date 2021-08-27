import { COUNTRIES_API_BASE_URL, WEATHER_API_BASE_URL } from "app/utils/constants";
import axios, { AxiosError, AxiosResponse } from "axios";

const httpClient = axios;

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    switch (error.response?.status) {
      case HttpStatusCodes.Unauthorized:
      case HttpStatusCodes.BadRequest:
      case HttpStatusCodes.ConflictError:
        break;
      case HttpStatusCodes.InternalServerError:
        if (process.env.NODE_ENV === "development") {
          console.log("Internal Server Error");
        } else {
          console.log("Something went wrong");
        }
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default httpClient;

export const weatherHttpClient = httpClient.create({
  baseURL: WEATHER_API_BASE_URL,
});