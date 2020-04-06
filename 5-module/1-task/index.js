/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let rows = table.querySelectorAll('tbody tr');

  for (let item of rows) {
    let available = item.lastElementChild.dataset.available;
    let sex = item.lastElementChild.previousElementSibling.innerHTML;
    let age = +item.firstElementChild.nextElementSibling.innerHTML;

    if (available === 'true') {
      item.classList.add('available');
    } else if (available === 'false') {
      item.classList.add('unavailable');
    } else if (available === undefined) {
      item.hidden = true;
    }

    if (sex === 'm') {
      item.classList.add('male');
    } else if (sex === 'f') {
      item.classList.add('female');
    }

    if (age < 18) {
      item.style.textDecoration = 'line-through';
    }
  }
}
