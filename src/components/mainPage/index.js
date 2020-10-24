import refs from '../../refs';
import renderTelephoneTrigger from '../telephoneTrigger';
import renderHero from '../hero';
import renderNewProducts from '../newproducts';

function renderMainPage() {
  //   refs.mainContainer.innerHTML = '';
  renderTelephoneTrigger();
  renderHero();
  renderNewProducts();
}

export default renderMainPage;
