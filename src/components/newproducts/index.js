import nprefs from './nprefs';
import {cardItem} from '../carditem/index';
import searchObj from '../services';
import css from './styles.css';
import getSlider from '../slider/index';


console.log(nprefs.nplist);

searchObj.searchProducts("",'new','100').then(data=>{
  let newArr= data.data;

getSlider(newArr, nprefs.npdiv, 2, false, true);

const sliderTrack=nprefs.npdiv.querySelector('.slider-track');
sliderTrack.classList.add('np-track');

const trackWidth=135*newArr.length+(newArr.length-1)*10+100;
// const trackWidth=204*newArr.length+(newArr.length-1)*15;

console.log(trackWidth);

sliderTrack.style.width=`${trackWidth}px`;

const sliderItem=sliderTrack.querySelectorAll('.card-item');

sliderItem.forEach(el=>{
  console.log(el);
  el.classList.add('new-item');
  // el.style.marginRight="10px"
});


// if(window.innerWidth < 768){
//   elem = 6
//  } else if(window.innerWidth < 1200 && window.innerWidth >= 768){
//   elem = 9
//  } else if(window.innerWidth >= 1200){
//   elem = 10
//  }

});