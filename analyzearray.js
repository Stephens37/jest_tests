/*
avg: add all the numbers and divide them by array.length + 1
min/max: perform a mergesort and take the numbers at beginning and end of the array
length: array.length
*/


function analyzeArray (arr) {
  let sum = arr[0]
  function average () {
    if (arr.length = 1) {
      let arrAvg = sum / arr.length
      return arrAvg
    }
    let num = arr
    let i = 0
    sum = average(num[i] + num[i + 1])
  }
  average()
  function min () {
    let minNum = 0
    for (let i = 0; i < minNum; i++) {
      for (let k = 0; k < arr.length; k++) {
        let j = 0
        if (j === arr.length && arr[j] !== minNum) {
          minNum++
          return
        } else if (arr[j] === minNum) {
          return minNum
        } else if (arr[j] !== minNum) {
          j++
        }
      }
    }
    return minNum
  }
  min()
  const maxNum = Math.max(...arr)
  const length = arr.length()

  const obj == {
    average: arrAvg,
    min: minNum,
    max: maxNum,
    length: length
  }
  return obj
}

module.exports = analyzeArray
