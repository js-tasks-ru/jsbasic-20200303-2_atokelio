/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let res = 1;

  for (let i = n; i > 0; i--) {
    res *= i;
  }

  return res;
}
