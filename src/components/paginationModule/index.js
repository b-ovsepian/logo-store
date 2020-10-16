import style from "./style.css"









{/* <script>
    var inputElem = document.getElementById("episode_paging").getElementsByTagName("a");
    for (var i = 0; i < inputElem.length; i++) {

        inputElem[i].addEventListener('click', function () {
            if (this.getAttribute("data-page"))
                alert(this.getAttribute("data-page"));
        }, false);
    }
</script> */}



// export const authMenuMarkUp = function () { return `   <div class=“auth-menu”>   <h4 class=“user-name”> ${userName}</h4 >   <ul class=“auth-menu__list”>     <li class=“auth-menu__list_item privateAccount” date-way=“privateaccount”> Личный кабинет</li>     <li class=“auth-menu__list_item favoritesAccount” date-way=“privatefavorites”> Избранное</li>     ${userData.user.role === “ADMIN” ?          `<li class=“auth-menu__list_item createAdAccount” date-way=“createad”> Создать объявление</li>`   : “”}   </ul>   <p class=“auth-menu__exit exitAccount” date-way=“exit”> Выход</p> </div> `;};
// export const authMenuMarkUpListener = function () { listenPrivateAccount = document.querySelector(‘.auth-menu__list’)};