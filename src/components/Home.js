import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "./graphql/queries";

function Home() {
  const [citySearched, setCitySearched] = useState("");
  const [getWeather, { data, error, loading }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: citySearched },
    }
  );
  // const tempCelcius = (temp) => Math.round(temp - 273.15) + " °C";

  if (error) return <h1> Something went wrong...</h1>;

  if (loading) return <h1> Loading..</h1>;

  return (
    <div className="home">
      <h1>Search For Weather</h1>
      <input
        type="text"
        placeholder="City name..."
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}> Search</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "500px",
          marginLeft: "30px",
        }}
      >
        {data && (
          <>
            <h1> {data.getCityByName.name} </h1>

            <span>
              <p>Temperature</p>
              <p style={{ color: "palevioletred" }}>
                {data.getCityByName.weather.temperature.actual}
              </p>
            </span>

            <span>
              <p>Description</p>
              <p style={{ color: "palevioletred" }}>
                {data.getCityByName.weather.summary.description}
              </p>
            </span>
            <span>
              <p>Wind Speed:</p>
              <p style={{ color: "palevioletred" }}>
                {data.getCityByName.weather.wind.speed}
              </p>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
