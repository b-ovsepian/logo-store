import './developers.css';
import developersTmpl from '../../templates/developers.hbs';
import devJson from './developers.json';
import refs from '../../refs';

function renderDevelopers() {
  const markup = developersTmpl(devJson);
  const developersList = document.createElement('ul');
  const div = document.createElement('div');
  div.classList.add('developers');
  developersList.classList.add('developers-list');
  developersList.classList.add('list');
  developersList.insertAdjacentHTML('beforeend', markup);
  div.insertAdjacentElement('beforeend', developersList);
}

export default renderDevelopers;
