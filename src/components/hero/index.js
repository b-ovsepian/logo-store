import './styles.css';
import slider from '../slider';


const main = document.querySelector(`main`);
const container = main.querySelector(`.container`);
const array = ['','','',''];

container.insertAdjacentHTML(`afterbegin`, `<section class="hero"></section>`);
const heroSection = document.querySelector(`.hero`);

slider(array, heroSection, 1, true);