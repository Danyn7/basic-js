const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arrayEmail = email.split('');
    let arrayEmail2;
    for (i = 0; i < arrayEmail.length; i++){
        if(arrayEmail[i] === '@') {
        arrayEmail2 = email.slice(i + 1);
        }
    }

    if (arrayEmail2.at(0) === '@'){
        return 1;
        } else {
        return arrayEmail2;   
    }
}

module.exports = {
  getEmailDomain
};
