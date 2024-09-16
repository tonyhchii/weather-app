import './style.css';
const API_KEY = 'LUSXK5PNNESM78KH6PXY7TYY7';
const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const API_CONTENT_TYPE = 'json';
const loadAPI = async () => {
    try {
    const location = 'shanghai';
    const url = `${API_URL}${location}/today?unitGroup=metric&key=${API_KEY}&contenttype=${API_CONTENT_TYPE}`;
    console.log(url);
    const response = await fetch(url, {mode: "cors"});
    const weatherJSON = await response.json();
    return weatherJSON;
    }
    catch {
        console.error('Fetch Error');
    }
    
}

const loadObject = async () => {
    const weatherJSON = await loadAPI();
    const address = weatherJSON.address;
    const currDay = weatherJSON.days[0]
    const tempMin = currDay.tempmin;
    const tempMax = currDay.tempmax;
    const temp = currDay.temp;
    const humidity = currDay.humidity;
    const precip = currDay.precip;
    const precipProb = currDay.precipprob;
    const icon = currDay.icon;
}
