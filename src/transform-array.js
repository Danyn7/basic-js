const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    if (Boolean(arr == '') !== true){
      for (i = 0; i < arr.length; i++) {
        if(arr[i] === '--discard-next') {
        if(i === arr.length - 1) {
        let arr1 = arr.slice(0, i);
        return arr1;
        } else {
        let arr2 = arr.concat();
        arr2.splice(i, 2);
        return arr2;
        }
        } else if (arr[i] === '--discard-prev') {
        if(i === 0) {
        let arr3 = arr.concat();
        arr3.splice(i, 1)
        return arr3;
        } else {
        let arr4 = arr.concat();
        arr4.splice(i - 1, 2)
        return arr4;  
        }
        } else if(arr[i] === '--double-next') {
        if(i === arr.length - 1){
        let arr5 =arr.concat();
        arr5.splice(i, 1);
        return arr5;
        }else{
        let arr6 = arr.concat();
        arr6.splice(i, 1, arr6[i + 1])
        return arr6;
        }
        } else if (arr[i] === '--double-prev') {
        if (i === 0) {
        let arr7 = arr.concat();
        arr7.splice(i, 1);
        return arr7;
        } else {
        let arr8 = arr.concat();
        arr8.splice(i, 1, i)  
        return arr8;
        }
        } else {
          return arr;
        }
    }
    } else {
      return arr;
    }
    } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
    }
}

module.exports = {
  transform
};
