import './telephone-trigger.css';
import { modalModule } from '../modalmodule/modal';

function renderTelephoneTrigger() {
  const infoBtn = document.querySelector('.telephoneTrigger-btn');
  infoBtn.addEventListener('click', showTelephoneTrigger);

  function showTelephoneTrigger() {
    function telephoneMarkup() {
      const div = document.createElement('div');
      const markup = `<div class="telephone-trigger">
  <a
    href="tel:+380503333796"
    class="telephone-trigger__link"
    aria-label="call by vodafone"
  >
    <img
      class="telephone-trigger__logo"
      src="./components/telephone-trigger/images/vodafone.svg"
      alt="vodafone"
      width="14"
      height="14"
    />
    +38 (050) 333-37-96
  </a>
  <a
    href="tel:+380738373737"
    class="telephone-trigger__link"
    aria-label="call by lifecell"
  >
    <img
      class="telephone-trigger__logo"
      src="./components/telephone-trigger/images/lifecell.svg"
      alt="lifecell"
      width="14"
      height="14"
    />
    +38 (073) 837-37-37
  </a>
  <a
    href="tel:+380688773737"
    class="telephone-trigger__link"
    aria-label="call by kyivstar"
  >
    <img
      class="telephone-trigger__logo"
      src="./components/telephone-trigger/images/kyivstar.svg"
      alt="kyivstar"
      width="14"
      height="14"
    />
    +38 (068) 877-37-37
  </a>
</div>;`;

      div.insertAdjacentHTML('beforeend', markup);
      div.innerHTML += `<div class="icon-wrapper">
<svg class="close-icon">
<use href="./components/modalmodule/symbol-defs.svg#iconVector-16"></use>
</svg>
</div>`;
      return div.innerHTML;
    }
    function createListeners(closebackdrop) {
      const myButton = document.querySelector('.icon-wrapper');
      myButton.addEventListener('click', closebackdrop);
    }
    modalModule(telephoneMarkup, createListeners);
  }
}

export default renderTelephoneTrigger;
