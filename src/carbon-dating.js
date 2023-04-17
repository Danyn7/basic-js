const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(!isNaN(sampleActivity) == true && typeof(sampleActivity) == 'string') {
  if(arguments.length !== 0) {
  let ageYear = Number(sampleActivity); 
  let newAgeYear = Math.ceil(Math.log((MODERN_ACTIVITY / ageYear)) / (0.693 / HALF_LIFE_PERIOD));
  if (isFinite(newAgeYear) == false) {
    return false;
  } else if (typeof(newAgeYear) == 'number' && newAgeYear > 0) {
    return newAgeYear;
  }
  else {
    return false;
  }
  
  } else {
  return false;
  }

  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
