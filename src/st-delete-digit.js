import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let result = 0;
  n.toString().split('').forEach((item, index) => {
    const arr = n.toString().split('');
    arr.splice(index, 1);
    const count = Number(arr.join(''));
    if (count > result) {
      result = count;
    }
  });

  return result;
}
