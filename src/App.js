import "./App.css";
// import Home from "./components/Home";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import WeatherData from "./components/WeatherData";
import Wrapper from "./components/Wrapper";

function App() {
  // make API calls
  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   uri: "https://cors-anywhere.herokuapp.com/https://graphql-weather-api.herokuapp.com/",
  // });
  return (
    // <ApolloProvider client={client}>
    //   <Home />
    // </ApolloProvider>
    <Wrapper>
      <WeatherData />
    </Wrapper>
  );
}

export default App;
