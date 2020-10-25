import './developers.css';
import developersTmpl from '../../templates/developers.hbs';
import devJson from './developers.json';
import refs from '../../refs';

function renderDevelopers() {
  function developersMarkup() {
    const markup = developersTmpl(devJson);
    const developersList = document.createElement('ul');
    const div = document.createElement('div');
    div.classList.add('developers');
    developersList.classList.add('developers-list');
    developersList.classList.add('list');
    developersList.insertAdjacentHTML('beforeend', markup);
    div.insertAdjacentElement('beforeend', developersList);
    refs.mainContainer.innerHTML = '';
    refs.mainContainer.insertAdjacentElement('beforeend', div);
  }
  const devBtn = document.querySelector('.js-developers');
  devBtn.addEventListener('click', event => {
    event.preventDefault();
    developersMarkup();
  });
}

export default renderDevelopers;
