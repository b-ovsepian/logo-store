import './styles.css';
import slider from '../slider';
import refs from '../../refs';

function renderHero() {
  const array = ['', '', '', ''];

  refs.mainContainer.insertAdjacentHTML(
    `afterbegin`,
    `<section class="hero"></section>`,
  );
  const heroSection = document.querySelector(`.hero`);

  slider(array, heroSection, 1, true, false);
}

export default renderHero;
