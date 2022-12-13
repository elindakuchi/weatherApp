import React, { useState } from "react";
import useWeatherData from "../useWeatherData";

const WeatherData = () => {
  const [citySearched, setCitySearched] = useState("");
  const state = useWeatherData(citySearched);

  if (state.type === "loading") {
    return <div>loading...</div>;
  }
  if (state.type === "error") {
    return <div>Something went wrong...</div>;
  }
  const { temp, humidity, pressure } = state.data.main;

  const tempCelcius = (temp) => Math.round(temp - 273.15) + " °C";

  return (
    <>
      <h1>Search For Weather</h1>
      <input
        type="text"
        placeholder="City name..."
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      {/* <button onClick={() => state.data.main}> Search</button> */}
      {state.type === "data" && (
        <div>
          <p style={{ color: "palevioletred", marginLeft: "30px" }}>
            Weather forecast for <span>{state.data.name}</span>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "500px",
              marginLeft: "30px",
            }}
          >
            <span>
              <p>Temperature</p>
              <p style={{ color: "palevioletred" }}>{tempCelcius(temp)}</p>
            </span>
            <span>
              <p>Humidity</p>
              <p style={{ color: "palevioletred" }}>{humidity}</p>
            </span>
            <span>
              <p>Pressure</p>
              <p style={{ color: "palevioletred" }}>{pressure}</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherData;
