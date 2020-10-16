import css from "./styles.css"

const titleKbt = document.getElementById("kbtTitle")
console.dir(titleKbt);
const listKbt = document.getElementById("kbtList")
console.dir(listKbt);

const span = document.getElementById("titleIcon")
console.dir(span);

titleKbt.addEventListener("click", () => {
  listKbt.classList.toggle('isHidden')
  span.classList.toggle('rotate')
})

const titleIt = document.getElementById("itTitle")
console.dir(titleIt);
const listIt = document.getElementById("itList")
console.dir(listIt);

 titleIt.addEventListener("click", () => {
  listIt.classList.toggle('isHidden')
})

const titleHome = document.getElementById("homeTitle")
console.dir(titleHome);
const listHome = document.getElementById("homeList")
console.dir(listHome);

titleHome.addEventListener("click", () => {
  listHome.classList.toggle('isHidden')
})
const titleKitchen = document.getElementById("inTitle")
console.dir(titleKitchen);
const listKitchen = document.getElementById("inList")
console.dir(listKitchen);


titleKitchen.addEventListener("click", () => {
  listKitchen.classList.toggle('isHidden')
})
