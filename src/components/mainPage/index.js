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
}

export default renderMainPage;
