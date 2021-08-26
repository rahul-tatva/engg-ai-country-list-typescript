import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardMedia } from "@material-ui/core";
import WeatherInfoModal from "../weather/WeatherInfoModal";
import {
  WEATHER_API_ACCESS_KEY,
  WEATHER_API_BASE_URL,
} from "../../utils/constants";
import Axios, { AxiosResponse } from "axios";
import { ERROR_FETCHING_WEATHER } from "../../utils/messages";
import { CountriesData } from "../../App";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140,
  },
});

interface CountryCardProp {
  country: CountriesData;
}

export interface Request {
  type: string;
  query: string;
  language: string;
  unit: string;
}

export interface Location {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
}

export interface Current {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
}

export interface WeatherData {
  request: Request;
  location: Location;
  current: Current;
}

const CountryCard = (props: CountryCardProp) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [capitalWeatherInfo, setCapitalWeatherInfo] = useState<WeatherData>(
    {} as WeatherData
  );
  const { country } = props;
  const classes = useStyles();
  const handleClickOpen = (currentCountry: CountriesData) => {
    const apiEndpoint = `current?access_key=${WEATHER_API_ACCESS_KEY}&query=${currentCountry.capital}`;
    Axios.get(WEATHER_API_BASE_URL + apiEndpoint)
      .then((response: AxiosResponse<WeatherData>) => {
        const { data } = response;
        debugger;
        setCapitalWeatherInfo(data);
        setOpenModal(true);
      })
      .catch((error) => {
        alert(ERROR_FETCHING_WEATHER);
        console.log(error);
      });
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={country.flag}
            title={country.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {country.name}
              <Typography
                variant="subtitle1"
                component="p"
                color="textSecondary"
              >
                {country.capital}
              </Typography>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Population - {country.population}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Latitude, Longitude :{" "}
              {country.latlng[0] + "°  " + country.latlng[1] + "°"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => handleClickOpen(country)}
            variant="contained"
            color="primary"
            size="small"
          >
            Capital Weather
          </Button>
        </CardActions>
      </Card>
      {/* review this thing */}
      {openModal && (
        <WeatherInfoModal
          open={openModal}
          handleClose={handleClose}
          capitalWeatherInfo={capitalWeatherInfo}
        />
      )}
    </div>
  );
};

export default CountryCard;
