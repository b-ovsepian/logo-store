import nprefs from './nprefs';
import {cardItem} from '../carditem/index';
import searchObj from '../services';
// import css from '../newproducts/styles.css';
import getSlider from '../slider/index';


console.log(nprefs.nplist);
searchObj.searchProducts("",'new','100').then(data=>{
  console.log(data);
  cardItem(data, nprefs.nplist);
  const arr=document.querySelectorAll('.card-item');
  const itemArr=[...arr];
  console.log(itemArr);
  getSlider(itemArr, nprefs.npdiv, 2, false);
});


  // getSlider(itemArr, nprefs.npdiv, 2, false);



// const changePerPage=()=>{
// if (document.documentElement.clientWidth >= 320 && document.documentElement.clientWidth<=767) {
// return '2';
// } else if
//   (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth<=1199){
// return '3';
// } else { return '4'};
// }
// console.log(changePerPage())