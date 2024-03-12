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
  const capitalArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let sharr = []
  let capitalSharr = []

  const shiftArray = (function () {
    for (let i = 0; i < arr.length; i++) {
      let shiftedIndex = (i + shift) % arr.length
      sharr.push(arr[shiftedIndex])
      capitalSharr.push(capitalArr[shiftedIndex])
    }
  })()

  let letterArray = []

  const splitWord = (function () {
    letterArray = word.split('')
    return letterArray
  })()

  console.log(letterArray)

  let cipherArray = []

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

    for (let i = 0; i <= letterArray.length; i++) {
      if (/[a-zA-Z]/.test(letterArray[i])) {
        if (sharr.indexOf(letterArray[i]) !== -1) {
          let shiftValue = sharr[arr.indexOf(letterArray[i])]
          cipherArray.push(shiftValue)
        } else if (sharr.indexOf(letterArray[i]) === -1) {
          let capitalShiftValue = capitalSharr[capitalArr.indexOf(letterArray[i])]
          console.log(capitalShiftValue)
          cipherArray.push(capitalShiftValue)
        }
      } else {
        cipherArray.push(letterArray[i])
      }
    }
  })()

  word = cipherArray.join('')
  return word
}

module.exports = caesarCipher
