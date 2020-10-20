import style from "./style.css"
import refs from "../../refs/index.js"
























// export default {
//   _query: "",
//   page: 1,
//   perPage: 9,

//   async fetchProducts() {
//     const ApiKey = "";
//     const baseUrl = ``;

//     let url = `${baseUrl}?image_type=photo&orientation=horizontal&q=${this._query}&page=${this.page}&per_page=${this.perPage}&key=${ApiKey}`;

//     try {
//       const response = await fetch(url);
//       const getResponse = await response.json();
//       return getResponse.hits;
//     } catch (error) {
//       throw error;
//     }
//   },

//   setPage() {
//     return this.page++;
//   },
//   get query() {
//     return this._query;
//   },
//   set query(newQuery) {
//     this._query = newQuery;
//   },
// };
























// const allElements = 100
// const elemsPerPage = 9
// const pagesQuantity = Math.ceil(allElements / elemsPerPage)

// let elements = document.querySelectorAll('#pagination-list');
// let paginationPage = document.querySelector('')
    
    
// for (let element of elements) {
//     element.
// }












// var count = 10; //всего записей
// var cnt = 5; //сколько отображаем сначала
// var cnt_page = Math.ceil(count / cnt); //кол-во страниц

// //выводим список страниц
// var paginator = document.querySelector(".paginator");
// var page = "";
// for (var i = 0; i < cnt_page; i++) {
//   page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
// }
// paginator.innerHTML = page;

// //выводим первые записи {cnt}
// var div_num = document.querySelectorAll(".num");
// for (var i = 0; i < div_num.length; i++) {
//   if (i < cnt) {
//     div_num[i].style.display = "block";
//   }
// }

// var main_page = document.getElementById("page1");
// main_page.classList.add("paginator_active");

// //листаем
// function pagination(event) {
//   var e = event || window.event;
//   var target = e.target;
//   var id = target.id;
  
//   if (target.tagName.toLowerCase() != "span") return;
  
//   var num_ = id.substr(4);
//   var data_page = +target.dataset.page;
//   main_page.classList.remove("paginator_active");
//   main_page = document.getElementById(id);
//   main_page.classList.add("paginator_active");

//   var j = 0;
//   for (var i = 0; i < div_num.length; i++) {
//     var data_num = div_num[i].dataset.num;
//     if (data_num <= data_page || data_num >= data_page)
//       div_num[i].style.display = "none";

//   }
//   for (var i = data_page; i < div_num.length; i++) {
//     if (j >= cnt) break;
//     div_num[i].style.display = "block";
//     j++;
//   }
// }












{/* <script>
    // var inputElem = document.getElementById("episode_paging").getElementsByTagName("a");
    // for (var i = 0; i < inputElem.length; i++) {

    //     inputElem[i].addEventListener('click', function () {
    //         if (this.getAttribute("data-page"))
    //             alert(this.getAttribute("data-page"));
    //     }, false);
    // }
</script> */}



// export const authMenuMarkUp = function () { return `   <div class=“auth-menu”>   <h4 class=“user-name”> ${userName}</h4 >   <ul class=“auth-menu__list”>     <li class=“auth-menu__list_item privateAccount” date-way=“privateaccount”> Личный кабинет</li>     <li class=“auth-menu__list_item favoritesAccount” date-way=“privatefavorites”> Избранное</li>     ${userData.user.role === “ADMIN” ?          `<li class=“auth-menu__list_item createAdAccount” date-way=“createad”> Создать объявление</li>`   : “”}   </ul>   <p class=“auth-menu__exit exitAccount” date-way=“exit”> Выход</p> </div> `;};
// export const authMenuMarkUpListener = function () { listenPrivateAccount = document.querySelector(‘.auth-menu__list’)};