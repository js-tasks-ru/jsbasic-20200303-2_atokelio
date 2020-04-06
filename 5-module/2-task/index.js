class SortableTable {
  constructor(props) {
    this.items = props;
    this.el = document.createElement('table');
    this.el.innerHTML = `<thead><tr><td>Name</td>
    <td>Age</td><td>Salary</td><td>City</td></tr>
    </thead><tbody></tbody>`

    for (let item of this.items) {
      let row = document.createElement('tr');
      row.insertAdjacentHTML('beforeend', `<td>${item.name}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.age}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.salary}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.city}</td>`);
      this.el.tBodies[0].append(row);
    }
  }

  sort(column, desc) {
    const compareProp = this.el.tHead.rows[0].cells[column].textContent.toLowerCase();

    this.items.sort( (a, b) => a[compareProp] - b[compareProp] );

    if (desc) {
      this.items.reverse();
    }

    let body = document.createElement('tbody');

    for (let item of this.items) {
      let row = document.createElement('tr');
      row.insertAdjacentHTML('beforeend', `<td>${item.name}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.age}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.salary}</td>`);
      row.insertAdjacentHTML('beforeend', `<td>${item.city}</td>`);
      body.append(row);
    }

    this.el.tBodies[0].replaceWith(body);
  }
}
