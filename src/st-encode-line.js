import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str.length === 0) return str;
  let count = 1;
  let result = [];
  result.push(str[0]);

  for (let i = 1; i < str.length; i++) {
    if (str[i] === result[result.length - 1]) {
      count++;
    }
    else {
      if (count > 1) result[result.length - 1] = String(count) + String(result[result.length - 1]);
      result.push(str[i]);
      count = 1;
    }
  }

  if (count > 1) result[result.length - 1] = String(count) + String(result[result.length - 1]);

  return result.join('');
}
