import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let res = {};
  let domArr = [];
  for (let i = 0; i < domains.length; i++){
    domains[i] = domains[i].split('.').reverse();
    for (let j = 0; j < domains[i].length; j++){
      if (domains[i][j - 1] !== undefined) {
        domains[i][j]=domains[i][j-1]+`.${domains[i][j]}`
      } else {
        domains[i][j] = '.' + domains[i][j];
      }
      domArr.push(domains[i][j])
    }
  }
  domArr.forEach(function (elem) {
    if (res[elem]===undefined) {
      res[elem]=1
    } else {
      res[elem]++
    }
  })
  return res
}
