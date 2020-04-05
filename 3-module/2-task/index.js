/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbers = str.match(/-\d+\.\d+|\d+\.\d+|-\d+|\d+/g);

  return { min: Math.min(...numbers), max: Math.max(...numbers) };
}
