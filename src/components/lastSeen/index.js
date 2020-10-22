import refs from '../../refs/index.js';
import './styles.css';
import store from '../store/index.js';
import getSlider from '../slider/index.js';

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
exclusiveArr(exclusiveArreyItems, {elem});//принимает масив и елемент на котором кликнули
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('lastSeen'))
};
function setLocalStorage(arrey) {
  return localStorage.setItem('lastSeen', JSON.stringify(arrey))
};
setLocalStorage(exclusiveArreyItems)

const lastSeenArr = getLocalStorage('lastSeen');
console.log(lastSeenArr);
// getSlider()
getSlider(lastSeenArr, lastSeenSection, 2, false, true);
