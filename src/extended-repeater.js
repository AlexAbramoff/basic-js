import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str)
  let opt = {}
  for (let key in options) {
    opt[key] = options[key]
  }
  opt.repeatTimes = options.repeatTimes || 1
  opt.separator = options.separator || '+'
  if (options.addition !== undefined) {
    opt.addition = String(options.addition)
  } else {
    opt.addition = options.addition
  }
  opt.additionRepeatTimes = options.additionRepeatTimes || 1
  opt.additionSeparator = options.additionSeparator || '|'

  let additionStr = []
  let resStr = []
  for (let i = 0; i < opt.additionRepeatTimes; i++) {
    additionStr.push(opt.addition)
  }
  additionStr = additionStr.join(opt.additionSeparator)
  for (let i = 0; i < opt.repeatTimes; i++) {
    resStr.push(String(str) + String(additionStr))
  }
  resStr = resStr.join(opt.separator)
  return resStr
}
