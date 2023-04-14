const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length) {
    let amountEars = [];
    let numberamountEars = 0;
    for (let i = 0; i < matrix.length; i++){
      let ear = 0;
      for (let h = 0; h < matrix[i].length; h++) {
        if (matrix[i][h] == '^^') {
          ear += 1;
          }
      }
      amountEars.push(ear);
      }
      if (amountEars.length) {
        for (let p = 0; p < amountEars.length; p++) {
            numberamountEars += amountEars[p];
        }
        return numberamountEars;
      } else {
        return 0;
      }
  } else {
    return 0;
  }

}

module.exports = {
  countCats
};
