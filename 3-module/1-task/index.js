/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let adultUsers = data.filter(item => item.age <= age);
  let result = '';

  adultUsers.forEach( (item, index) => {
    if (index !== adultUsers.length - 1) {
      result += item.name + ', ' + item.balance + '\n';
    } else {
      result += item.name + ', ' + item.balance;
    }
  });

  return result;
}
