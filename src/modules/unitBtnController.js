import { loadWeatherObject, setUnit } from "./APIloader";
import { loadPage } from "./DOM/weatherDOM";

const buttons = document.querySelectorAll('.button-container button')

export const loadButtons = () => {
    buttons.forEach(button => {
        button.addEventListener('click', async() => {
            const unit = button.dataset.unitId;
            setUnit(unit);
            try {
                loadPage(await loadWeatherObject());
            } catch {
                console.error('Unit Error');
            }
        })
    });
}