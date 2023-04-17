const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let stringFromN = String(n);
    let arrayFromN = stringFromN.split('');
    let sum = 0;
    for (i = 0; i < arrayFromN.length; i++) {
      sum += Number(arrayFromN[i])
    }
    if (String(sum).length == 1) {
        return sum;
    } else {
        let newSum = String(sum).split('');
        return Number(newSum[0]) + Number(newSum[1]);
    }
}

module.exports = {
  getSumOfDigits
};
