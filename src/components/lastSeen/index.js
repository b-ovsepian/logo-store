import refs from '../../refs/index.js';
import './styles.css';
import store from '../store/index.js';
import getSlider from '../slider/index.js';
import { userSetter } from 'core-js/fn/symbol';

const exclusiveArreyItems = [];
function exclusiveArr(arr, elem) {
const longitude = arr.length //длина масива

  if(arr.includes(elem)) {
    return arr//нет элемента

  }else if(!arr.includes(elem) && longitude < 10 ) {
    arr.unshift(elem)
    return arr //нет элемента и длина меньше 10

  }else{
    arr.unshift(elem)
    arr.pop()
    return arr //нет элемента и длина больше 10
  };
};
exclusiveArr(exclusiveArreyItems, ...user.lastSeen);//принимает масив и елемент на котором кликнули
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('lastSeen'))
};
function setLocalStorage(arrey) {
  return localStorage.setItem('lastSeen', JSON.stringify(arrey))
};
setLocalStorage(exclusiveArreyItems);
getLocalStorage('lastSeen');
const lastSeenArr = getLocalStorage('lastSeen');
// getSlider()
getSlider(lastSeenArr, lastSeenSection, 2, false, true);


