/*
  take array of 26 letters
  find the amount to be shifted from the start
  start from that letter and append each to the new sharr
  once it reaches 26 start appending from the beginning
  take the inputted word and spread into an array
  loop through the "proper" array until finding value match
  get the index of the value
  find the same index in the second array
  take the value of the second array index and append the letter to a variable
  continue with last few steps until complete
  function for shifting and creating new array
  function for spreading word into array
  function for finding each letters index, then appending that value to a new array
  function for condensing that array into new word
*/

function caesarCipher (shift, word) {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let sharr = []
  const shiftArray = (function () {
    for (let i = 0; i < arr.length; i++) {
      let j = 0
      if (arr.indexOf(shift) === 26) {
        sharr.push(arr[j++])
      } else {
        sharr.push(arr[shift + i])
      }
    }
  })()

  let letterArray = []

  const splitWord = (function () {
    word.toLowerCase()
    letterArray = word.split('')
    return letterArray
  })()
  return letterArray

  /*let cipherArray = []

  const cipherFunction = (function () {
    /* create for loop that loops over the length of the word array
    in this loop is another for loop that loops over the regular array
    when the index of the matching letter is found find the value of the corresponding index position in sharr
    push that value to a new array
    condense the array into a string
    */
    /*
   trying to find the index of the first letter in the regular array
   after, find the value of the same index position in the shifted array
   push that value to the cipherarray
   */
    /*for (let i = 0; i < letterArray.length; i++) {
      let letterValue = letterArray[i++]
      let regIndex = arr.indexOf(letterValue)
      let shiftValue = sharr[regIndex]
      cipherArray.push(shiftValue)
    }
    return cipherArray
  })()*/

  /*word = cipherArray.join('')
  return word*/
}

module.exports = caesarCipher
