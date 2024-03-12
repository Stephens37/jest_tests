const caesarImport = require('./caesarcipher')

test('first shift', () => {
  expect(caesarImport(2, 'hello')).toBe('jgnnq')
})

test('second shift', () => {
  expect(caesarImport(2, 'yo.')).toBe('aq.')
})

test('third shift', () => {
  expect(caesarImport(2, 'Hi')).toBe('Jk')
})
