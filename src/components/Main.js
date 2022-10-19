import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Context from "../Context";
import Error from "./Error";
import axios from "axios";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location) {
      return setError("Please enter the name of city"), setWeather(null);
    }

    const API_KEY = "808564eb9e08185721a0b6990b924b08";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    const request = axios.get(URL);
    const response = await request;
    setWeather(response.data.main);
    setCity(response.data.name);
  };
  return (
    <>
      <Header />
      <Content>
        <Context.Provider value={{ api_call, weather, city }}>
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error error={error} />}
        </Context.Provider>
      </Content>
    </>
  );
};

export default Main;
