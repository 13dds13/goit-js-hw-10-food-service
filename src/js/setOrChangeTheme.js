import { refs } from './refs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

let currentTheme = localStorage.getItem('currentTheme');

setBodyTheme(currentTheme);

refs.themeSwitchDiv.addEventListener('change', onThemeSwitchChange);

function onThemeSwitchChange(e) {
    if (e.target !== refs.input) return;
    
    changeBodyTheme(currentTheme);
    };

function changeBodyTheme(theme) {
    let tempTheme = theme;

    if (!tempTheme) {
        tempTheme = Theme.DARK;
    };

    const newTheme = tempTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    document.body.classList.remove(tempTheme);
    document.body.classList.add(newTheme);
    refs.input.checked = tempTheme !== Theme.DARK;
    localStorage.removeItem(tempTheme);
    localStorage.setItem('currentTheme', newTheme);
    currentTheme = localStorage.getItem('currentTheme', newTheme);
};
    
function setBodyTheme(theme) {
    const changeTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    changeBodyTheme(changeTheme);
};