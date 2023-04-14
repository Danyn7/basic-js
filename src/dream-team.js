const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = [];
    let Irr = members;
    let first = [];
    let goodString = [];
    if (Boolean(Irr == "") !== true && Irr !== 0 && Irr !== null && Irr !== undefined) {
    for (let i = 0; i < Irr.length; i++) {
    if (typeof(Irr[i]) == "string") {
    name.push(Irr[i]);
    }
    }
    for (let y = 0; y < name.length; y++) {
    goodString.push(name[y].trim());
    }
    
    for (let u = 0; u < goodString.length; u++) {
      first.push(goodString[u][0].toUpperCase());
    }
    
    let alphabet = first.sort();
  
    return alphabet.join('');
    
    } else {
      return false;
    }
}

module.exports = {
  createDreamTeam
};
