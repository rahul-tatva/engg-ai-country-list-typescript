import { AxiosResponse } from "axios"
import { countryHttpClient, weatherHttpClient } from "./http.service"

const getByName = (
    id: string | number
): Promise<AxiosResponse> =>
    weatherHttpClient.get(`name/`);

export const countryService = {
    getByName,
}
export default countryService