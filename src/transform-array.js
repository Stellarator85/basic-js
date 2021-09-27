import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (arr.includes("--discard-next"))
    return arr
      .filter((x) => arr.indexOf(x) != arr.indexOf("--discard-next") + 1)
      .filter((x) => x != "--discard-next");
  if (arr.includes("--discard-prev"))
    return arr
      .filter((x) => arr.indexOf(x) != arr.indexOf("--discard-prev") - 1)
      .filter((x) => x != "--discard-prev");
  arr.splice(
    arr.indexOf("--double-next") + 1,
    0,
    arr[arr.indexOf("--double-next") + 1]
  );
  if (arr.includes("--double-next"))
    return arr.filter((x) => x != "--double-next");
  arr.splice(0, 1);
  arr.splice(
    arr.indexOf("--double-prev") - 1,
    0,
    arr[arr.indexOf("--double-prev") - 1]
  );
  if (arr.includes("--double-prev"))
    return arr.filter((x) => x != "--double-prev");
}
;
