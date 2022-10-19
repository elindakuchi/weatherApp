import React, { useContext, useState } from "react";
import Context from "../Context";
import useWeatherData from "./useWeatherData";

const WeatherSearch = () => {
  const [location, setLocation] = useState();
  console.log("location", location);
  const state = useWeatherData(location);

  // console.log("state", state);

  // const { api_call } = useContext(Context);

  return (
    <div style={{ marginLeft: "30px" }}>
      {/* <form onSubmit={api_call}> */}
      <input
        name="location"
        autoComplete="off"
        type="text"
        onChange={(e) => setLocation(e.target.value)}
      />
      <div>
        <button>&rarr;</button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default WeatherSearch;
