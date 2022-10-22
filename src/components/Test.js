import React from "react";
import useWeatherData from "../useWeatherData";

export default function Test() {
  const state = useWeatherData("London");
  const { loading, success, error } = state;
  const { main } = success;
  const { temp, pressure, humidity } = main;

  const tempCelcius = (temp) => Math.round(temp - 273.15) + " °C";

  console.log("temp", temp);

  console.log("success", success);
  return (
    <>
      <div>{"Loading..." && loading}</div>
      <div>
        {success && (
          <div>
            <p style={{ color: "palevioletred", marginLeft: "30px" }}>
              Weather forecast for <span>{"London"}</span>
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
      </div>
      <div>{"Something went wrong" && error}</div>
    </>
  );
}
