import nprefs from './nprefs';
// import {cardItem} from '../carditem/index';
import searchObj from '../services';
import css from './styles.css';
import getSlider from '../slider/index';


searchObj.searchProducts("",'new','100').then(data=>{
let newArr= data.data;

getSlider(newArr, nprefs.npdiv, 2, false, true);

const sliderTrack=nprefs.npdiv.querySelector('.slider-track');

function trackWidth(){
  let trackWidth;
 return window.innerWidth < 768 ?
 trackWidth=135*newArr.length+(newArr.length-1)*10+100 :
trackWidth=204*newArr.length+(newArr.length-1)*15+250;
}

let widthList=trackWidth();

sliderTrack.style.width=`${widthList}px`;

const sliderItem=sliderTrack.querySelectorAll('.card-item');

sliderItem.forEach(el=>{
  console.log(el);
  el.classList.add('new-item');
});

});