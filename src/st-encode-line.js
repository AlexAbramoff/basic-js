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
  const encodeArr = [];
  let countChar = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      countChar++;
    } else {
      if (countChar === 1) {
        encodeArr.push(str[i]);
      } else {
        encodeArr.push(countChar + str[i]);
      }
      countChar = 1;
    }
  }
  return encodeArr.join('');
}
