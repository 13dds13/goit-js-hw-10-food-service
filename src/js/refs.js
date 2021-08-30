export const refs = {
    list: document.querySelector('.js-menu'),
    themeSwitchDiv: document.querySelector('.theme-switch'),
    input: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

let currentTheme = localStorage.getItem('currentTheme')

setBodyTheme(currentTheme);

refs.themeSwitchDiv.addEventListener('click', onThemeSwitchClick);

function onThemeSwitchClick(e) {
    if (e.target !== refs.input) return;
    
    changeBodyTheme(currentTheme)
    console.log('click');
    };

function changeBodyTheme(theme) {
    let tempTheme = theme

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
    
    console.log(currentTheme);
};
    
function setBodyTheme(theme) {
    const changeTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    changeBodyTheme(changeTheme);
    
}