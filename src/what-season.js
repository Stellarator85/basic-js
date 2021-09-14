import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (
    (date.isArray =
      true &&
      date.length === 3 &&
      (date[1] === 12) ^ (date[1] === 1) ^ (date[1] === 2))
  )
    return "winter";
  else if (
    (date.isArray =
      true &&
      date.length === 3 &&
      (date[1] === 3) ^ (date[1] === 4) ^ (date[1] === 5))
  )
    return "spring";
  else if (
    (date.isArray =
      true &&
      date.length === 3 &&
      (date[1] === 6) ^ (date[1] === 7) ^ (date[1] === 8))
  )
    return "summer";
  else if (
    (date.isArray =
      true &&
      date.length === 3 &&
      (date[1] === 9) ^ (date[1] === 10) ^ (date[1] === 11))
  )
    return "autumn(fall)";
  else throw error("Invalid date!");
}
