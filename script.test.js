const { shiftLetter, encryptMessage } = require('./script');

test('shifts a letter forward by 1', () => {
  expect(shiftLetter('a', 1)).toBe('b');
});

test('wraps from z to a', () => {
  expect(shiftLetter('z', 1)).toBe('a');
});

test('shifts with a negative value', () => {
  expect(shiftLetter('a', -1)).toBe('z');
});

test('encrypts a full string', () => {
  expect(encryptMessage('abc', 1)).toBe('bcd');
});

test('ignores non-letter characters', () => {
  expect(encryptMessage('a!b c.', 1)).toBe('bc');
});