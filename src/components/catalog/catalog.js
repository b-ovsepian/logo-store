import css from "./styles.css"

const titleKbt = document.getElementById("kbtTitle")
const listKbt = document.getElementById("kbtList")
const titleIt = document.getElementById("itTitle")
const listIt = document.getElementById("itList")
const titleHome = document.getElementById("homeTitle")
const listHome = document.getElementById("homeList")
const titleKitchen = document.getElementById("inTitle")
const listKitchen = document.getElementById("inList")
const span1 = document.querySelector("#titleIcon1")
const span2 = document.querySelector("#titleIcon2")
const span3 = document.querySelector("#titleIcon3")
const span4 = document.querySelector("#titleIcon4")

titleKbt.addEventListener("click", () => {
  update(listKbt, span1)
})

titleIt.addEventListener("click", () => {
  update(listIt, span2)
})

titleHome.addEventListener("click", () => {
  update(listHome, span3)
})

titleKitchen.addEventListener("click", () => {
  update(listKitchen, span4)
})

function update(list,el) {
  list.classList.toggle('isHidden')
  if (el.textContent === "▼") {
    el.textContent = "►"
  } else {
    el.textContent = "▼"
  }
}
