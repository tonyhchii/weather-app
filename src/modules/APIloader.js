import { weatherObj } from "./weatherObj";

const API_KEY = "LUSXK5PNNESM78KH6PXY7TYY7";
const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_CONTENT_TYPE = "json";
let location = "New%20York";
let unit = "us";

const loadAPI = async () => {
  const url = `${API_URL}${location}/today?unitGroup=${unit}&key=${API_KEY}&contenttype=${API_CONTENT_TYPE}`;
  console.log(url);
  const response = await fetch(url, { mode: "cors" });
  const weatherJSON = await response.json();
  return weatherJSON;
};

export const loadWeatherObject = async () => {
  const weatherJSON = await loadAPI();
  const address = weatherJSON.address;
  const currDay = weatherJSON.days[0];
  const tempMin = currDay.tempmin;
  const tempMax = currDay.tempmax;
  const temp = currDay.temp;
  const humidity = currDay.humidity;
  const precip = currDay.precip;
  const precipProb = currDay.precipprob;
  const feelsLike = currDay.feelslike;
  const icon = currDay.icon;
  const windSpeed = currDay.windspeed;
  const conditions = currDay.conditions;
  const description = currDay.description;

  return new weatherObj(
    address,
    temp,
    tempMin,
    tempMax,
    humidity,
    precip,
    precipProb,
    feelsLike,
    icon,
    windSpeed,
    conditions,
    description
  );
};

export const setLocation = (loc) => {
  location = loc;
};

export const setUnit = (u) => {
  unit = u;
};
