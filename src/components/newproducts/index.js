import nprefs from './nprefs';
import {cardItem} from '../carditem/index';
import searchObj from '../services';
// import css from '../newproducts/styles.css';
import getSlider from '../slider/index';


console.log(nprefs.nplist);
searchObj.searchProducts("",'new','100').then(data=>{
  let newArr= data.data;
// //   cardItem(data, nprefs.nplist);
// //   const arr=document.querySelectorAll('.card-item');
// //   const itemArr=[...arr];
// //   console.log(itemArr);
// //   getSlider(itemArr, nprefs.npdiv, 2, false);
// // });


getSlider(newArr, nprefs.npdiv, 2, false, true)

});

