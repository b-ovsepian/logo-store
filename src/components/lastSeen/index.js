import refs from '../../refs/';
import './styles.css';
import getSlider from '../slider';

// const exclusiveArreyItems = [];
// function getSessionStorage() {
//   return JSON.parse(sessionStorage.getItem('lastSeen'));
// }
// // function setSessionStorage(arrey) {
// //     return sessionStorage.setItem('lastSeen', JSON.stringify(arrey))
// // };
// getSessionStorage('lastSeen');
// const arrItemsSessionStorage = getSessionStorage('lastSeen');

// function exclusiveArr(arr, ...elem) {
//   const longitude = arr.length; //длина масива

//   if (arr.includes(elem)) {
//     return arr; //нет элемента
//   } else if (!arr.includes(elem) && longitude < 10) {
//     arr.unshift(elem);
//     return arr; //нет элемента и длина меньше 10
//   } else {
//     arr.unshift(elem);
//     arr.pop();
//     return arr; //нет элемента и длина больше 10
//   }
// }

// exclusiveArr(exclusiveArreyItems, arrItemsSessionStorage); //принимает масив и елемент на котором кликнули

// function setLocalStorage(arrey) {
//   return localStorage.setItem('lastSeen', JSON.stringify(arrey));
// }

// function getLocalStorage() {
//   return JSON.parse(localStorage.getItem('lastSeen'));
// }

// setLocalStorage(exclusiveArreyItems);

// getLocalStorage('lastSeen');
// const lastSeenArr = getLocalStorage('lastSeen');

// getSlider(lastSeenArr, lastSeenSection, 2, false, true);

// const sliderTrack = nprefs.npdiv.querySelector('.slider-track');
// function trackWidth() {
//   let trackWidth;
//   return window.innerWidth < 768
//     ? (trackWidth = 135 * newArr.length + (newArr.length - 1) * 10 + 100)
//     : (trackWidth = 204 * newArr.length + (newArr.length - 1) * 15 + 250);
// }
// let widthList = trackWidth();
// sliderTrack.style.width = `${widthList}px`;
// const sliderItem = sliderTrack.querySelectorAll('.card-item');
// sliderItem.forEach(el => {
//   el.classList.add('new-item');
// });

// function renderlastSeen() {
//   const div = document.querySelector('div');
//   div.classList.add('lastSeen-section');

//   const h2 = document.querySelector('h2');
//   h2.classList.add('lastSeen-title');
//   h2.textContent = 'Недавно просматривали';

//   div.insertAdjacentElement('beforeend', h2);
//   refs.mainContainer.insertAdjacentElement('beforeend', div);
// }

// export default renderlastSeen;

function renderNewProducts() {
  const div = document.createElement('div');
  div.classList.add('lastSeen');
  const h2 = document.createElement('h2');
  h2.classList.add('lastSeen-title');
  h2.textContent = 'Недавно просматривали';
  div.insertAdjacentElement('beforeend', h2);
  refs.mainContainer.insertAdjacentElement('beforeend', div);

  const npdiv = document.querySelector('.lastSeen');

  function getLocalStorage() {
    return JSON.parse(localStorage.getItem('lastSeen'));
  }

  const lastSeenArr = [...getLocalStorage('lastSeen')];
  if (lastSeenArr.length > 0) {
    getSlider(lastSeenArr, npdiv, 2, false, true);

    const sliderTrack = npdiv.querySelector('.slider-track');

    function trackWidth() {
      let trackWidth;
      return window.innerWidth < 768
        ? (trackWidth =
            135 * lastSeenArr.length + (lastSeenArr.length - 1) * 10 + 100)
        : (trackWidth =
            204 * lastSeenArr.length + (lastSeenArr.length - 1) * 15 + 250);
    }

    let widthList = trackWidth();

    sliderTrack.style.width = `${widthList}px`;

    const sliderItem = sliderTrack.querySelectorAll('.card-item');

    sliderItem.forEach(el => {
      el.classList.add('new-item');
    });
  }
}

export default renderNewProducts;
