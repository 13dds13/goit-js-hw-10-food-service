import foodCardsTpl from './templates/food-cards.hbs';
import foods from './menu.json'
import './sass/main.scss';

const refs = {
    list: document.querySelector('.js-menu'),
};

const foodCardsMarkUp = foodCardsMarkUpCreate(foods);

refs.list.insertAdjacentHTML('beforeend', foodCardsMarkUp);

function foodCardsMarkUpCreate(arr) {
    return arr.map(foodCardsTpl).join('');
};