import { loadWeatherObject } from './APIloader';
import { loadPage } from './DOM/weatherDOM';
import { loadSearch } from './searchBarController';

export const loadApp = async () => {
    loadPage(await loadWeatherObject());
    const page = loadSearch();
    page.create();
}
