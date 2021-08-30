import { refs } from './refs';
// import foodCardTpl from '../templates/food-card.hbs';
import foodCardsTpl from '../templates/food-cards.hbs';
import foods from '../menu.json'

// ====================================================================== //
// Вариант рендеринга с map'ом в js //

// const foodCardsMarkUpCreate = (arr) => arr.map(foodCardTpl).join('');

// const foodCardsMarkUp = foodCardsMarkUpCreate(foods);

// refs.list.insertAdjacentHTML('beforeend', foodCardsMarkUp);


// ====================================================================== //
// Вариант рендеринга с передачей всего массива //

refs.list.insertAdjacentHTML('beforeend', foodCardsTpl(foods));