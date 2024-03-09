const calculator = require('./calculator')

test('add', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test('subtract', () => {
  expect(calculator.subtract(2, 1)).toBe(1)
})

test('multiply', () => {
  expect(calculator.multiply(2, 2)).toBe(4)
})

test('divide', () => {
  expect(calculator.divide(2, 2)).toBe(1)
})