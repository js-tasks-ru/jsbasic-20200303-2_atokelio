/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let bank = 0;

  for (let key in salaries) {
    if (typeof salaries[key] === 'number') {
      bank += salaries[key];
    }
  }

  return bank;
}
