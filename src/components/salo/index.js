import templateSale from './../../templates/template-sale.hbs';

const a = [
  {
  }
];
const constructor = document.querySelector('.page-main .container');

function createSale() {
  constructor.innerHTML = "";
  const createHtml = templateSale(a);
  constructor.insertAdjacentHTML('beforeend', createHtml)
  //  const options = sort.querySelectorAll('option');
  //  console.log(options);
  //  const a = document.querySelectorAll('option');
  //  console.dir(a);
};
createSale(a)
function renderImages(data) {
  const galleryList = document.querySelector('.sale-sort-list')
  let newData = data.filter(item => item.category === sale)
  const item = template(newData);
  galleryList.insertAdjacentHTML('beforeend', item)

  const sort = document.querySelector('#sale-sorts');

// function sortSale (e){
// let list, i, switching, items, shouldSwitch, dir;
// let = switchcount = 0;
//   list = document.querySelector(".sale-sort-list");
//   switching = true;
//   // Устанавливаем направление сортировки по возрастанию:
//   dir = "asc";
//   // Создаем цикл, который будет продолжаться до тех пор, пока переключение не будет выполнено:
//   while (switching) {
//     // Начнем с того, что переключение не выполняется:
//     switching = false;
//     items = list.getElementsByTagName("LI");
//     // Перебираем все элементы списка:
//     for (i = 0; i < (items.length - 1); i++) {
//       // Начнем с того, что переключения быть не должно:
//       shouldSwitch = false;
//       /* Проверяем, должен ли следующий элемент поменяться местами с текущим,
//       в зависимости от направления сортировки (по возрастанию или по убыванию: */
//       if (dir == "asc") {
//         if (items[i].innerHTML.toLowerCase() > items[i + 1].innerHTML.toLowerCase()) {
//           /*  Если следующий элемент по алфавиту ниже текущего,
//           пометить как переключатель и остановить цикл: */
//           shouldSwitch = true;
//           break;
//         }
//       } else if (dir == "desc") {
//         if (items[i].innerHTML.toLowerCase() < items[i + 1].innerHTML.toLowerCase()) {
//           /* Если следующий элемент по алфавиту выше текущего,
//           пометить как переключатель и разорвать цикл: */
//           shouldSwitch= true;
//           break;
//         }
//       }
//     }
//     if (shouldSwitch) {
//       /* Если переключатель был отмечен, делаем переключатель
//       и отметьте, что переключение было выполнено: */
//       items[i].parentNode.insertBefore(items[i + 1], items[i]);
//       switching = true;
//       // Каждый раз, когда переключение выполняется, увеличивайте switchcount на 1:
//       switchcount ++;
//     } else {
//       /*  Если переключение не было выполнено И направление - "asc",
//       установите направление «desc» и снова запустите цикл while. */
//       if (switchcount == 0 && dir == "asc") {
//         dir = "desc";
//         switching = true;
//       }
//     }
//   }
// }