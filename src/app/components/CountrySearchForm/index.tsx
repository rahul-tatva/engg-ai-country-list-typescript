import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import http from "../../services/http.service";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import { CountriesData } from "../../App";
import { AxiosResponse } from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CountrySearchForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [countryNameInput, setCountryNameInput] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            history.push(`/country-list/${countryNameInput}`);
          }}
        >
          <TextField
            value={countryNameInput}
            required
            fullWidth
            autoFocus
            label="Enter Country"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setCountryNameInput(value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={countryNameInput === ""}
            type="submit"
            fullWidth
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CountrySearchForm;