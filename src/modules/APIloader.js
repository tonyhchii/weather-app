import { weatherObj } from "./weatherObj";

const API_KEY = "LUSXK5PNNESM78KH6PXY7TYY7";
const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const API_CONTENT_TYPE = "json";

const loadAPI = async (location) => {
  try {
    const url = `${API_URL}${location}/today?unitGroup=metric&key=${API_KEY}&contenttype=${API_CONTENT_TYPE}`;
    console.log(url);
    const response = await fetch(url, { mode: "cors" });
    const weatherJSON = await response.json();
    return weatherJSON;
  } catch {
    console.error("Fetch Error");
  }
};

export const loadWeatherObject = async () => {
  const weatherJSON = await loadAPI('New%20York');
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
