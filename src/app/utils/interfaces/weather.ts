export interface ILocation {
    name: string;
}

export interface ICurrentWeather {
    weather_icons: any[];
    temperature: string
    wind_speed: string;
    precip: string;
}

export interface ICapitalWeatherInfo {
    location: ILocation;
    current: ICurrentWeather;
}