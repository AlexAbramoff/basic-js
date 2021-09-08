import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const sortArr = arr;
  let heights = [];
  arr.forEach((element) => {
    if (element !== -1) {
      heights.push(element);
    }
  });
  heights = heights.sort((a, b) => a - b);
  for (let i = sortArr.length - 1; i >= 0; i--) {
    if (sortArr[i] !== -1) {
      sortArr[i] = heights[heights.length - 1];
      heights.pop();
    }
  }

  return sortArr;
}
