function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = capitalizeFirstLetter

const inputString = 'hello world'
const capitalizedString = capitalizeFirstLetter(inputString)
console.log(capitalizedString) // Output: "Hello world"
