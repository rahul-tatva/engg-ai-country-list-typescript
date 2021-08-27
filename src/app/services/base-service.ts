import { HttpStatusCodes } from "app/utils/enums/http-status-codes";
import axios, { AxiosError, AxiosResponse } from "axios";

const httpClient = axios;

httpClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    switch (error.response?.status) {
      case HttpStatusCodes.Unauthorized:
      case HttpStatusCodes.BadRequest:
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
