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
  const checkNums = [];
  const num = String(n).split('');
  let copyNum = [];
  for (let i = 0; i < num.length; i++) {
    copyNum = String(n).split('');
    copyNum.splice(i, 1);
    checkNums.push(+copyNum.join(''));
  }
  return Math.max.apply(null, checkNums);
}
