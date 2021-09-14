import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  let stringArray = members.filter((x) => typeof x === "string");
  if (
    (members.isArray =
      true && members.filter((x) => typeof x === "string").length !== 0)
  )
    return stringArray
      .map(function (e) {
        return e.trim();
      })
      .map(function (e) {
        return e.substring(0, 1);
      })
      .map(function (e) {
        return e.toUpperCase();
      })
      .sort()
      .join("");
  else return false;
};
