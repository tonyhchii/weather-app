import cloudy from "../../images/weather-cloudy.svg";
import fog from "../../images/weather-fog.svg";
import night from "../../images/weather-night.svg";
import cloudyNight from "../../images/weather-night-partly-cloudy.svg";
import day from "../../images/white-balance-sunny.svg";
import partlyCloudy from "../../images/weather-partly-cloudy.svg";
import rain from "../../images/weather-pouring.svg";
import windy from "../../images/weather-windy.svg";
import snow from "../../images/weather-snowy-heavy.svg";

const cardGrid = document.querySelector("[data-cards]");
const cardTemplate = document.getElementById("card-template");
const todayLocation = document.querySelector(".location");
const todayTemp = document.querySelector(".temperature");
const todayWeather = document.querySelector(".weather");
const todayMinTemp = document.querySelector(".low-temp");
const todayMaxTemp = document.querySelector(".high-temp");
const todayDescription = document.querySelector(".description");
const todayIcon = document.querySelector(".weather-icon");

const loadCard = (cardTitle, cardDes) => {
  const cardElement = document.importNode(cardTemplate.content, true);
  const cardCondition = cardElement.querySelector(".condition");
  const cardConDescription = cardElement.querySelector(".con-description");

  cardCondition.textContent = cardTitle;
  cardConDescription.textContent = cardDes;
  cardGrid.appendChild(cardElement);
};

const loadCards = (todayObj) => {
  cardGrid.innerHTML = "";
  loadCard("Precipitation:", `${todayObj.precip}"`);
  loadCard("Wind:", `${todayObj.windSpeed} mph`);
  loadCard("Feels Like:", `${todayObj.feelsLike}°`);
  loadCard("Humidity", `${todayObj.humidity}%`);
};

const loadToday = (todayObj) => {
  todayLocation.textContent = `${todayObj.address.toUpperCase()}`;
  todayTemp.textContent = `${todayObj.temp}°`;
  todayMinTemp.textContent = `L: ${todayObj.tempMin}°`;
  todayMaxTemp.textContent = `H: ${todayObj.tempMax}°`;
  todayDescription.textContent = `${todayObj.description}`;
  todayWeather.textContent = `${todayObj.conditions}`;
};

const loadIcon = (todayObj) => {
  const icon = todayObj.icon;
  switch (icon) {
    case "snow":
      todayIcon.src = snow;
      break;
    case "rain":
      todayIcon.src = rain;
      break;
    case "fog":
      todayIcon.src = fog;
      break;
    case "wind":
      todayIcon.src = windy;
      break;
    case "cloudy":
      todayIcon.src = cloudy;
      break;
    case "partly-cloudy-day":
      todayIcon.src = partlyCloudy;
      break;
    case "partly-cloudy-night":
      todayIcon.src = cloudyNight;
      break;
    case "clear-night":
      todayIcon.src = night;
      break;
    default:
      todayIcon.src = day;
  }
};

export const loadPage = (todayObj) => {
  loadIcon(todayObj);
  loadToday(todayObj);
  loadCards(todayObj);
};
