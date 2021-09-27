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
export default function transform (array){
if (array.includes("--discard-next"))
  return array
    .filter((x) => array.indexOf(x) != array.indexOf("--discard-next") + 1)
    .filter((x) => x != "--discard-next");
if (array.includes("--discard-prev"))
  return array
    .filter((x) => array.indexOf(x) != array.indexOf("--discard-prev") - 1)
    .filter((x) => x != "--discard-prev");
array.splice(
  array.indexOf("--double-next") + 1,
  0,
  array[array.indexOf("--double-next")+1]
);

if (array.includes("--double-next"))
      return array.filter((x) => x != "--double-next");

array.splice(
  0,1
);
array.splice(
  
    array.indexOf("--double-prev") - 1,
    0,
    array[array.indexOf("--double-prev") - 1]
  
);
if (array.includes("--double-prev"))
  return array.filter((x) => x != "--double-prev");

}
