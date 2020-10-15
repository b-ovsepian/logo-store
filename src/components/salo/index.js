const constructor = document.querySelector('.container')
constructor.innerHTML = `
<h1 class="sale-title">Акции</h1>
<div>
  <label for="sale-sort">Сортировка:</label>
  <input list="products" id="sale-sort" name="sale-sort" />
  <datalist id="sale-sorts">
    <option value="По умолчанию">
  </datalist>
</div>
<ul></ul>`