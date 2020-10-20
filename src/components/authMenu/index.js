import style from "./style.css"

//Не забыть подключить axios

const pagination = {
    pagesCount: 0,
    currentPage: 1,
    totalProducts: 8,
    productsPerPage: 2,
}

console.log(sdf);

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
