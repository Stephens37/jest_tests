export function capitalizeLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const inputString = 'hello world'
const capitalizedString = capitalizeLetter(inputString)
console.log(capitalizedString) // Output: "Hello world"
