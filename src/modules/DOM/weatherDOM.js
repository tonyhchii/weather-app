import { loadWeatherObject } from "../APIloader";

const todayObj = await loadWeatherObject();
const cardGrid = document.querySelector("[data-cards]");
const cardTemplate = document.getElementById("card-template");

const loadCard = (cardTitle, cardDes) => {
  const cardElement = document.importNode(cardTemplate.content, true);
  const cardCondition = cardElement.querySelector(".condition");
  const cardConDescription = cardElement.querySelector(".con-description");

  cardCondition.textContent = cardTitle;
  cardConDescription.textContent = cardDes;
  cardGrid.appendChild(cardElement);
}

const loadCards = () => {
    cardGrid.innerHTML = "";
    loadCard('Precipitation:', `${todayObj.precip}"`);
    loadCard('Wind:', `${todayObj.windSpeed} mph` );
    loadCard('Feels Like:', `${todayObj.feelsLike}°`);
    loadCard('Humidity', `${todayObj.humidity}%`);
}


export const loadPage = () => {
    loadCards();
}