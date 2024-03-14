const analyzeImport = require('./analyzearray')

test('object', () => {
  expect(analyzeImport([1, 2, 3])).toBe({ average: 2, min: 1, max: 2, length: 3 })
})