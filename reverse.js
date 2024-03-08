/*
for (i less than str.length ++) {
  i.charAt(0 + i) = i.charAt(i.length - (1 + i))
}
*/

export function reverse (str) {
  for (let i = 0; i < str.length; i++) {
  let reverseString = ''
  reverseString = reverseString + str.charAt(str.length - (1 + i))
  }
}