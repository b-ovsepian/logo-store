import './styles.css';
import slider from '../slider';

const main = document.querySelector(`main`);
const container = main.querySelector(`.container`);
const array = [1, 2, 3, 4];

container.insertAdjacentHTML(`afterbegin`, `<section class="hero"></section>`);
const heroSection = document.querySelector(`.hero`);

slider(array, heroSection, 1, true);