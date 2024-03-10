const caesarImport = require('./caesarcipher')

test('first shift', () => {
  expect(caesarImport(2, 'hello')).toBe('jgnnq')
})
