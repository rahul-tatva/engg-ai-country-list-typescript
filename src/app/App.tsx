import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountrySearchForm from "./components/country/CountrySearchForm";
import CountryList from "./components/country/CountryList";
import Navbar from "./components/navbar/Navbar";

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface CountriesData {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area?: number;
  gini?: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}

function App() {
  const [searchedCountries, SetSearchedCountries] = useState<CountriesData[]>([]);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={CountrySearchForm} />
          <Route exact path="/country-list/:countryName" component={CountryList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;