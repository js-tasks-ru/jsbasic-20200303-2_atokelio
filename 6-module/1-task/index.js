/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.classList.add('pure-table');
    this.data = data;
    this.el.innerHTML = `<thead><tr><td>Name</td>
    <td>Age</td><td>Salary</td><td>City</td><td></td></tr>
    </thead><tbody></tbody>`

    for (let item of this.data) {
      let row = document.createElement('tr');
      row.insertAdjacentHTML('beforeend', `<td>${item.name}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.age}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.salary}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.city}</td>`);
      row.insertAdjacentHTML('beforeend', `<td><a href="#delete">X</a></td>`);

      row.querySelector('a[href="#delete"]').addEventListener('click', () => {
        this.onRemoved(item.id)
      });

      this.el.tBodies[0].append(row);
    }
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    this.data = this.data.filter( item => {
      return item.id != id;
    });

    this.render();
  }

  render() {
    this.el.tBodies[0].innerHTML = '';

    for (let item of this.data) {
      let row = document.createElement('tr');
      row.insertAdjacentHTML('beforeend', `<td>${item.name}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.age}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.salary}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.city}</td>`);
      row.insertAdjacentHTML('beforeend', `<td><a href="#delete">X</a></td>`);

      row.querySelector('a[href="#delete"]').addEventListener('click', () => {
        this.onRemoved(item.id)
      });

      this.el.tBodies[0].append(row);
    }
  }
}

window.ClearedTable = ClearedTable;
