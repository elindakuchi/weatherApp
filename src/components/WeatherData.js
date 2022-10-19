import React, { useContext } from "react";
import Context from "../Context";

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const { temp, humidity, pressure } = weather;
  const tempCelcius = (temp) => Math.round(temp - 273.15) + " °C";

  return (
    <div>
      <p style={{ color: "palevioletred", marginLeft: "30px" }}>
        Weather forecast for <span>{city}</span>
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
  );
};

export default WeatherData;
