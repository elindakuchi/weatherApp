import "./App.css";
import WeatherData from "./components/WeatherData";
import Test from "./components/Test";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper title="Weather App">
      <WeatherData />
    </Wrapper>
  );
}

export default App;
