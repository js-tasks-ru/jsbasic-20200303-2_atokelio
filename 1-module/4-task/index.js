/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const newStr = str.toLowerCase();

  return newStr.includes("1xbet") || newStr.includes("xxx");
}
