import './developers.css';
import developersTmpl from '../../templates/developers.hbs';
import devJson from './developers.json';
import refs from '../../refs';

const markup = developersTmpl(devJson);
refs.developersList.insertAdjacentHTML('beforeend', markup);
