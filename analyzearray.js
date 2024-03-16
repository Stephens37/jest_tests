/*
avg: add all the numbers and divide them by array.length + 1
min/max: perform a mergesort and take the numbers at beginning and end of the array
length: array.length
*/

function analyzeArray (arr) {
  const arrAvg = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const avg = sum / arr.length
    return avg
  }
  // perhaps averageArr is the culprit?
  const minNum = Math.min(...arr)
  const maxNum = Math.max(...arr)
  const arrLength = arr.length

  let obj = {
    average: arrAvg(arr),
    min: minNum,
    max: maxNum,
    length: arrLength
  }
  return obj
}

const arrProperties = analyzeArray([1, 2, 3])

module.exports = arrProperties
