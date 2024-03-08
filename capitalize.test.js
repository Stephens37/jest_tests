import { capitalizeLetter } from "./capitalize"

test('capitalize first letter', () => {
  expect(capitalizeLetter('hi')).toBe('Hi')
})