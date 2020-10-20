import './information.css';
import refs from '../../refs';
import infoData from './information.js';
import infoTmpl from '../../templates/information.hbs';

function renderInformation() {
  const ulList = document.createElement('ul');
  ulList.classList.add('information-list');
  ulList.classList.add('list');

  const markup = infoTmpl(infoData);
  ulList.insertAdjacentHTML('beforeend', markup);
  document
    .querySelector('.information')
    .insertAdjacentElement('beforeend', ulList);
}
export default renderInformation;
