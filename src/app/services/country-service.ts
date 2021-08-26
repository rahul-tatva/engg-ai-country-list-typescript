import { AxiosResponse } from "axios"
import { countryHttpClient } from "./http.service"

const getAll = (
    id: string | number
): Promise<AxiosResponse> =>
    countryHttpClient.get(`/all`);

const getByName = (
    countryName: string
): Promise<AxiosResponse> =>
    countryHttpClient.get(`/name/${countryName}`);

export const countryService = {
    getByName,
    getAll,
}
export default countryService