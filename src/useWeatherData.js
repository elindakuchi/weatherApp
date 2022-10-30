import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
  loading: true,
  error: "",
  success: {},
};
const weatherReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.ERROR:
      return {
        loading: false,
        success: {},
        error: "Something went wrong!",
      };
    case ACTIONS.SUCCESS:
      console.log("action.payload", action.payload);
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    default:
      return state;
  }
};

const useWeatherData = (location) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  useEffect(() => {
    const API_KEY = "808564eb9e08185721a0b6990b924b08";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    axios.get(URL).then((response) => {
      console.log("response", response);
      dispatch({ type: ACTIONS.SUCCESS, payload: response.data });
    });
  }, [location]);

  return state;
};

export default useWeatherData;
