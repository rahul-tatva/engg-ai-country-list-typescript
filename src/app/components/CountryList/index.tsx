import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { CountriesData } from "../../App";
import http from "../../services/http.service";
import CountryCard from "../CountryCard";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

interface CountryListProp {
  countriesList: CountriesData[];
}

// const CountryList = (props: CountryListProp) => {
const CountryList = () => {
  const classes = useStyles();
  debugger;
  const locationParams = useParams<{
    countryName: string;
  }>();
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<any[]>([]);
  console.log(locationParams);

  useEffect(() => {
    // call api with country name
    http
      .get(`name/all`)
      .then((response: AxiosResponse<CountriesData[]>) => {
        debugger;
        setLoading(true);
        setCountries(response.data);
      })
      .catch((error: any) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} justify="center">
          {/* {loading && <CircularProgress size={60} />}
          <Typography gutterBottom variant="h6">
            No data found!
          </Typography> */}
          {countries.map((country) => {
            return (
              <Grid item key={country.alpha2Code} xs={12} sm={6} md={4}>
                <CountryCard country={country} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default CountryList;
