import refs from '../../refs';
import renderTelephoneTrigger from '../telephoneTrigger';
import renderHero from '../hero';
import renderNewProducts from '../newproducts';
import renderCategories from '../category/category.js';

function renderMainPage() {
  refs.mainContainer.innerHTML = '';
  renderTelephoneTrigger();
  renderHero();
  renderCategories();
  renderNewProducts();
}

export default renderMainPage;
