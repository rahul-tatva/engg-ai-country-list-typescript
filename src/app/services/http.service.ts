import axios from 'axios';
import { COUNTRIES_API_BASE_URL } from '../utils/constants';

const axiosInstance = axios.create({
    baseURL: COUNTRIES_API_BASE_URL,
});

export const countryHttpClient = axios.create({
    baseURL: process.env.REACT_APP_COUNTRY_API,
});

export const weatherHttpClient = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API,
});

const http = {
    get: axiosInstance.get,
    post: axiosInstance.post
};

export default http;
