import style from "./style.css"
import refs from "../../refs/index.js"
import axios from "axios"
import viewport from "./viewport.js"

// // const pagination = {
// //     // pagesCount: 0,
// //     currentPage: 1,
// //     totalProducts: 30,
// //     productsPerPage: 6,
// // }

// const totalProducts = async () => {
//     return await getProducts()
// }

// totalProducts()
// const productsPerPage = () => {
//     return setTimeout(() => {
//         let elem, page
//         viewport.viewport.viewportFunction()
//         if (viewport.viewport.isMobile) {
//             elem = 6
//         } else if (viewport.viewport.isTablet) {
//             elem = 9
//         }else if (viewport.viewport.isDesktop) {
//             elem = 10
//         }
           
//         getProducts(elem , page);
//     }, 500);
// }

// const getPagesCount = (totalProducts , productsPerPage) => {
//     return totalProducts / productsPerPage
// }

// const getItemMarkup = (pageNumber) => {
// return `<button class="button" data-page=${pageNumber}>${pageNumber}</button>`
// }

// function getLisItemsMarkup () {
//     let markup = "";
//     for (let i = 1; i <= getPagesCount(totalProducts() , productsPerPage()); i += 1) {
//         markup += getItemMarkup(i)
//     }
//      return markup
     
// }


    
// //     const list = document.querySelector('.pagination-list');
// //     console.log(list);
// //     list.innerHTML = getLisItemsMarkup();
// //     list.querySelector('.button').classList.add('active');

// //     list.addEventListener('click', (e) => {
// //     console.log(e.target);
// //     list.querySelector('.active').classList.remove('active');
// //         e.target.classList.add('active');
// //         // console.log(e.target.dataset);
// //         // getProducts((Number(e.target.dataset)), 6)
        
// //     })

// function getProducts (perPage = 100, page = 1, category = 'ref') {
//     return fetch(`https://goit-store.herokuapp.com/products?itemsPerPage=${perPage}&page=${page}&category=${category}`)
//         .then(res => res.json())
//     }
// getProducts().then(data => data.length)
//     .then(data => console.log(data))
    










const pagination = {
    currentPage: 1,
    pagesCount: 1,
    countOfProducts: 0,
    minProducts: 1,
    maxProducts: 0
}
 let elem;
    if (viewport.isMobile) {
            elem = 6
        } else if (viewport.isTablet) {
            elem = 9
        }else if (viewport.isDesktop) {
            elem = 10
        }


export async function createPagination(category) {
   
    
    const list = document.querySelector('.pagination-list');

    list.innerHTML = await getLisItemsMarkup(category);
    list.querySelector('button').classList.add('active');

    const showQuantity = document.querySelector('.show-quantity')
    showQuantity.innerHTML = `Показано с ${pagination.minProducts} по ${elem} из ${pagination.countOfProducts}`
  
    

    list.addEventListener('click', async (e) => {
   
    list.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const data = await getProducts(Number(e.target.dataset.page), ) 
        console.log(data.data);
       return data.data;
    })
    
}


const getItemMarkup = (pageNumber) => {
return `<button class="button" data-page=${pageNumber}>${pageNumber}</button>`
}
console.log(viewport);
const getLisItemsMarkup = async (category) => {

 let markup = "";
    pagination.pagesCount = await countOfProducts(category);
    for (let i = 1; i <= Math.ceil(pagination.pagesCount / elem); i += 1) {
        markup += getItemMarkup(i)
    }
 
    return markup
}


const getProducts = async ( page = 1, perPage = elem, category = 'ref') => {
   return await axios.get(`https://goit-store.herokuapp.com/products?itemsPerPage=${perPage}&page=${page}&category=${category}`)
        
}
    
const countOfProducts = async (category)=> {
    const result = await axios.get(
        `https://goit-store.herokuapp.com/products/getCategories?category=${category}`);
    pagination.countOfProducts = result.data.countOfProducts
    return result.data.countOfProducts
} 

createPagination("ref")
