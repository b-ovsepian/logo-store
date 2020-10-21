import './telephoneTrigger.css';
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
    +38 (050) 333-37-96
  </a>
  <a
    href="tel:+380738373737"
    class="telephone-trigger__link"
    aria-label="call by lifecell"
  >
    +38 (073) 837-37-37
  </a>
  <a
    href="tel:+380688773737"
    class="telephone-trigger__link"
    aria-label="call by kyivstar"
  >
    +38 (068) 877-37-37
  </a>
  <div class="telephoneTrigger-icon"></div>
</div>
`;

      div.insertAdjacentHTML('beforeend', markup);
      return div.innerHTML;
    }
    function createListeners(closebackdrop) {
      const myButton = document.querySelector('.telephoneTrigger-icon');
      myButton.addEventListener('click', closebackdrop);
    }
    modalModule(telephoneMarkup, createListeners);
  }
}

export default renderTelephoneTrigger;
