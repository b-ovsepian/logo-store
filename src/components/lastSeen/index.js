import refs from '../../refs/index.js';
import './styles.css';
import getSlider from '../slider/index.js';
import { userSetter } from 'core-js/fn/symbol';

const exclusiveArreyItems = [];
function getSessionStorage() {
  return JSON.parse(localStorage.getItem('lastSeen'))
};
function setSessionStorage(arrey) {
    return localStorage.setItem('lastSeen', JSON.stringify(arrey))
};
getSessionStorage('lastSeen');
const arrItemsSessionStorage = getSessionStorage('lastSeen');
function exclusiveArr(arr, ...elem) {
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
exclusiveArr(exclusiveArreyItems, arrItemsSessionStorage);//принимает масив и елемент на котором кликнули
function setLocalStorage(arrey) {
  return localStorage.setItem('lastSeen', JSON.stringify(arrey))
};
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('lastSeen'))
};
setLocalStorage(exclusiveArreyItems);
getLocalStorage('lastSeen');
const lastSeenArr = getLocalStorage('lastSeen');
getSlider(lastSeenArr, lastSeenSection, 2, false, true);
const sliderTrack = nprefs.npdiv.querySelector('.slider-track');
  function trackWidth() {
    let trackWidth;
    return window.innerWidth < 768
      ? (trackWidth = 135 * newArr.length + (newArr.length - 1) * 10 + 100)
      : (trackWidth = 204 * newArr.length + (newArr.length - 1) * 15 + 250);
  }
  let widthList = trackWidth();
  sliderTrack.style.width = `${widthList}px`;
  const sliderItem = sliderTrack.querySelectorAll('.card-item');
  sliderItem.forEach(el => {
    el.classList.add('new-item');
  });

