const assert = require('assert');
const Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when you pass in 5', () => {
      const inputNumber = 5;
      const expectedResult = 120;

      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    });

    it('returns 6 when you pass in 3', () => {
      const inputNumber = 3;
      const expectedResult = 6;

      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    });

    it('returns 1 when you pass in 0', () => {
      const inputNumber = 0;
      const expectedResult = 1;

      const result = Calculate.factorial(inputNumber);

      assert.strictEqual(result, expectedResult);
    });
  });
});