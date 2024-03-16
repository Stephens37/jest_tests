const arrProperties = require('./analyzearray')

test('object', () => {
  expect(arrProperties).toStrictEqual({ average: 2, min: 1, max: 3, length: 3 })
})
