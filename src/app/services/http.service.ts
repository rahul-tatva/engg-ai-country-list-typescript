import axios from 'axios';

const httpInstance = axios.create();

export const countryHttpClient = axios.create({
    baseURL: process.env.REACT_APP_COUNTRY_API,
});

export const weatherHttpClient = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API,
});

const http = {
    get: httpInstance.get,
    post: httpInstance.post
};

export default http;
