import searchObj from '../services';
import css from './styles.css';
import getSlider from '../slider/index';
import refs from '../../refs';

function renderNewProducts() {
  const div = document.createElement('div');
  div.classList.add('new-products');
  const h2 = document.createElement('h2');
  h2.classList.add('np-title');
  h2.textContent = 'Новые поступления';
  div.insertAdjacentElement('beforeend', h2);
  refs.mainContainer.insertAdjacentElement('beforeend', div);

  const npdiv = document.querySelector('.new-products');

  searchObj.searchProducts('', 'new', '100').then(data => {
    let newArr = data.data;

    getSlider(newArr, npdiv, 2, false, true);

    const sliderTrack = npdiv.querySelector('.slider-track');

    function trackWidth() {
      let trackWidth;
      return window.innerWidth < 768
        ? (trackWidth = 135 * newArr.length + (newArr.length - 1) * 10 + 100)
        : (trackWidth = 204 * newArr.length + (newArr.length - 1) * 15 + 250);
    }

    let widthList = trackWidth();

    sliderTrack.style.width = `${widthList}px`;

    const sliderItem = sliderTrack.querySelectorAll('.card-item');

    sliderItem.forEach(el => {
      el.classList.add('new-item');
    });
  });
}

export default renderNewProducts;
