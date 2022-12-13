import React, { useEffect, useState } from "react";
// import useWeatherData from './useWeatherData';
import { render, screen } from "@testing-library/react";
import * as OpenWeatherAPI from "./useWeatherData";
import WeatherData from "./components/WeatherData";

// Mock the OpenWeather API module
jest.mock("./useWeatherData", () => ({
  currentWeather: jest.fn(() =>
    Promise.resolve({
      main: {
        temp: "5°C",
      },
      city: "Berlin",
    })
  ),
}));

// function MyComponent() {
//   const [weather, setWeather] = useState("");

//   useEffect(() => {
//     OpenWeatherAPI.currentWeather().then((data) => {
//       setWeather(data);
//     });
//   }, []);

//   return (
//     <div>
//       {weather ? (
//         <p>The temperature is {weather.main.temp}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

it("renders correct weather info", async () => {
  render(<WeatherData />);

  // Wait for the component to update with the mocked API response
  const temperatureElement = await screen.findByText("Temperature 5°C");

  expect(temperatureElement).toBeInTheDocument();
});
