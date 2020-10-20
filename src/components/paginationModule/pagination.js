//Не забыть подключить axios

const pagination = {
    pagesCount: 0,
    currentPage: 1,
    totalProducts: 10,
    productsPerPage: 2,
}

// const products = [
//     { name: "qwerty" },
//     { name: "zxcvb" },

//     { name: "12qwerty" },
//     { name: "98zxcvb" },

//     { name: "jhjkjlklkljklkjkj" },
//     { name: "bnmnmnnmnm" },
// ]

const getPagesCount = () => {
    return pagination.totalProducts/pagination.productsPerPage
}

const getItemMarkup = (pageNumber) => {
return `<button class="button" data-page=${pageNumber}>${pageNumber}</button>`
}

const getLisItemsMarkup = () => {
    let markup = "";
    for (let i = 1; i <= getPagesCount(); i += 1) {
        markup += getItemMarkup(i)
    }
     return markup
}

const getProducts = (perPage = 9, page = 1, category = 'tv') => {
    axios.get(`https://goit-store.herokuapp.com/products?itemsPerPage=${perPage}&page=${page}&category=${category}`)
        .then(data => console.log(data.data))
}
    
    const list = document.querySelector('.pagination-list');
    console.log(list);
    list.innerHTML = getLisItemsMarkup();
    list.querySelector('button').classList.add('active');

    list.addEventListener('click', (e) => {
    console.log(e.target);
    list.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        getProducts(Number (e.target.dataset.page))
    })

//==================//





// const pagination = {
//     currentPage: 1,
//     pagesCount: 1,
//     countOfProducts: 0
// }
//  let elem;
//     if (viewport.isMobile) {
//             elem = 6
//         } else if (viewport.isTablet) {
//             elem = 9
//         }else if (viewport.isDesktop) {
//             elem = 10
//         }


// export async function createPagination(category) {
   
    
//     const list = document.querySelector('.pagination-list');

//     list.innerHTML = await getLisItemsMarkup(category);
//     list.querySelector('button').classList.add('active');

//     const showQuantity = document.querySelector('.show-quantity')
//     showQuantity.innerHTML = 

//     list.addEventListener('click', async (e) => {
   
//     list.querySelector('.active').classList.remove('active');
//         e.target.classList.add('active');
//         const data = await getProducts(Number(e.target.dataset.page), ) 
//         console.log(data.data);
//        return data.data;
//     })
    
// }


// const getItemMarkup = (pageNumber) => {
// return `<button class="button" data-page=${pageNumber}>${pageNumber}</button>`
// }
// console.log(viewport);
// const getLisItemsMarkup = async (category) => {

//  let markup = "";
//     pagination.pagesCount = await countOfProducts(category);
//     for (let i = 1; i <= Math.ceil(pagination.pagesCount / elem); i += 1) {
//         markup += getItemMarkup(i)
//     }
 
//     return markup
// }


// const getProducts = async ( page = 1, perPage = elem, category = 'ref') => {
//    return await axios.get(`https://goit-store.herokuapp.com/products?itemsPerPage=${perPage}&page=${page}&category=${category}`)
        
// }
    
// const countOfProducts = async (category)=> {
//     const result = await axios.get(
//         `https://goit-store.herokuapp.com/products/getCategories?category=${category}`);
//     pagination.countOfProducts = result.data.countOfProducts
//     return result.data.countOfProducts
// } 

// createPagination("ref")


