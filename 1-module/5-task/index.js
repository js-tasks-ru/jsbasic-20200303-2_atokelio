/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  const strLength = str.length;

  if (strLength <= maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength - 1) + '…';
  }
}
