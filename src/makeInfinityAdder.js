'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(number) {
    if (number === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (typeof number !== 'number') {
      throw new TypeError('Argument must be a number');
    }

    sum += number;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
