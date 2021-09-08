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
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let copyArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == `--discard-next`) {
      copyArr.push(undefined)
      i++
    } else if (arr[i] == `--discard-prev`) {
      copyArr.pop()
    } else if (arr[i] == `--double-next`) {
      if (i + 1 < arr.length) {
        copyArr.push(arr[i + 1])
      }
    } else if (arr[i] == `--double-prev`) {
      if (copyArr.length != 0) {
        copyArr.push(copyArr[copyArr.length - 1])
      }
    } else {
      copyArr.push(arr[i])
    }
  }
  let newArr = []
  for (let i = 0; i < copyArr.length; i++) {
    if (copyArr[i] != undefined) {
      newArr.push(copyArr[i])
    }
  }
  return newArr
}
