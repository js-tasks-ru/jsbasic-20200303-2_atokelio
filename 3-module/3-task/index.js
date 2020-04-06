/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split('-');

  return arr.reduce(function(value, item, index) {
    return index === 0 ? item : value + item[0].toUpperCase() + item.slice(1);
  }, '');
}
