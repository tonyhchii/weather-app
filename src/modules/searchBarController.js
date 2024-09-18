import { loadWeatherObject, setLocation } from "./APIloader";
import { loadPage } from "./DOM/weatherDOM";

const searchBtn = document.querySelector('.search-btn');
const searchBar = document.querySelector('.search-bar');
const searchForm = document.getElementById('search-form');

export const loadSearch = () => {
    const addEvents = () => {
        searchForm.addEventListener('submit', async (e)=>{
            e.preventDefault();
            const arr = searchBar.value.split(' ');
            const location = arr.join('%20');
            setLocation(location);
            try{
                const todayObj = await loadWeatherObject();
                loadPage(todayObj)
            }
            catch {
                console.error('Invalid Location');
            }
            searchBar.value = "";
        })
    }

    const create = () => {
        addEvents();
    }

    return { create };
}