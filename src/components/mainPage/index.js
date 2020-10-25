import refs from '../../refs';
import renderTelephoneTrigger from '../telephoneTrigger';
import renderHero from '../hero';
import renderNewProducts from '../newproducts';
import renderCategories from '../category/category.js';
import renderlastSeen from '../lastSeen';

function renderMainPage() {
  refs.mainContainer.innerHTML = '';
  renderTelephoneTrigger();
  renderHero();
  renderCategories();
  renderNewProducts();
  renderlastSeen();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

export default renderMainPage;
