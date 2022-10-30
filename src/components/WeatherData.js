import React from "react";
import useWeatherData from "../useWeatherData";

const WeatherData = () => {
  const state = useWeatherData("Berlin");
  console.log("state", state);

  if (state.type === "Loading") {
    return <div>loading...</div>;
  }
  if (state.type === "Error") {
    return <div>Something went wrong...</div>;
  }
  const { temp, humidity, pressure } = state.success.main;

  const tempCelcius = (temp) => Math.round(temp - 273.15) + " °C";

  return (
    <>
      {state.type === "success" && (
        <div>
          <p style={{ color: "palevioletred", marginLeft: "30px" }}>
            Weather forecast for <span>{"Berlin"}</span>
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
