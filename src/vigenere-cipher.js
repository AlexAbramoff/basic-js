import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(clas = true) {
    this.clas = clas
    if (this.clas == true) {
      this.encrypt = (message, key) => {
        if (message === undefined || key === undefined) {
          throw new Error('Incorrect arguments!')
        }
        let alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        alfa = alfa.split('')
        message = message.trim().toUpperCase().split('')
        key = key.trim().toUpperCase().split('')
        let answer = []
        if (key.length < message.length) {
          let j = key.length
          for (let i = key.length; i < message.length; i++) {
            key.push(key[i - j])
          }
        }
        for (let i = 0; i < message.length; i++) {
          if (alfa.indexOf(message[i]) == -1) {
            answer.push(message[i])
            message.splice(i, 1)
            i--
          } else {
            if (alfa.indexOf(message[i]) + alfa.indexOf(key[i]) > 25) {
              answer.push(
                alfa[alfa.indexOf(message[i]) + alfa.indexOf(key[i]) - 26],
              )
            } else {
              answer.push(alfa[alfa.indexOf(message[i]) + alfa.indexOf(key[i])])
            }
          }
        }
        return answer.join('')
      }
      this.decrypt = (message, key) => {
        if (message === undefined || key === undefined) {
          throw new Error('Incorrect arguments!')
        }
        let alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        alfa = alfa.split('')
        message = message.trim().toUpperCase().split('')
        key = key.trim().toUpperCase().split('')
        let answer = []
        if (key.length < message.length) {
          let j = key.length
          for (let i = key.length; i < message.length; i++) {
            key.push(key[i - j])
          }
        }
        for (let i = 0; i < message.length; i++) {
          if (alfa.indexOf(message[i]) == -1) {
            answer.push(message[i])
            message.splice(i, 1)
            i--
          } else {
            if (alfa.indexOf(message[i]) + 26 - alfa.indexOf(key[i]) > 25) {
              answer.push(
                alfa[alfa.indexOf(message[i]) + 26 - alfa.indexOf(key[i]) - 26],
              )
            } else {
              answer.push(
                alfa[alfa.indexOf(message[i]) + 26 - alfa.indexOf(key[i])],
              )
            }
          }
        }
        return answer.join('')
      }
    } else {
      this.encrypt = (message, key) => {
        if (message === undefined || key === undefined) {
          throw new Error('Incorrect arguments!')
        }
        let alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        alfa = alfa.split('')
        message = message.trim().toUpperCase().split('').reverse()
        key = key.trim().toUpperCase().split('')
        let answer = []
        if (key.length < message.length) {
          let j = key.length
          for (let i = key.length; i < message.length; i++) {
            key.push(key[i - j])
          }
        }
        for (let i = 0; i < message.length; i++) {
          if (alfa.indexOf(message[i]) == -1) {
            answer.push(message[i])
            message.splice(i, 1)
            i--
          } else {
            if (alfa.indexOf(message[i]) + alfa.indexOf(key[i]) > 25) {
              answer.push(
                alfa[alfa.indexOf(message[i]) + alfa.indexOf(key[i]) - 26],
              )
            } else {
              answer.push(alfa[alfa.indexOf(message[i]) + alfa.indexOf(key[i])])
            }
          }
        }
        return answer.join('')
      }
      this.decrypt = (message, key) => {
        if (message === undefined || key === undefined) {
          throw new Error('Incorrect arguments!')
        }
        let alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        alfa = alfa.split('')
        message = message.trim().toUpperCase().split('').reverse()
        key = key.trim().toUpperCase().split('')
        let answer = []
        if (key.length < message.length) {
          let j = key.length
          for (let i = key.length; i < message.length; i++) {
            key.push(key[i - j])
          }
        }
        for (let i = 0; i < message.length; i++) {
          if (alfa.indexOf(message[i]) == -1) {
            answer.push(message[i])
            message.splice(i, 1)
            i--
          } else {
            if (alfa.indexOf(message[i]) + 26 - alfa.indexOf(key[i]) > 25) {
              answer.push(
                alfa[alfa.indexOf(message[i]) + 26 - alfa.indexOf(key[i]) - 26],
              )
            } else {
              answer.push(
                alfa[alfa.indexOf(message[i]) + 26 - alfa.indexOf(key[i])],
              )
            }
          }
        }
        return answer.join('')
      }
    }
  }
}
