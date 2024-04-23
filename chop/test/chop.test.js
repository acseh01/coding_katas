const { chop } = require('../src/chop')

test('Returns -1 in case of an empty array', () => {
    const result = chop(3, []);
    
    const expected = -1;
    expect(result).toBe(expected);
});

test('Returns -1 when the number is not available in the array', () => {
    const result = chop(3, [1, 2]);
    
    const expected = -1;
    expect(result).toBe(expected);
});

test('Returns 0 when the number is in the first position in the array', () => {
    expect(chop(1, [1, 2, 3])).toBe(0);
    expect(chop(1, [1, 3, 5, 7])).toBe(0);
});

test('Returns 2 when the number is in the third position in the array', () => {
    expect(chop(5, [1, 3, 5, 7])).toBe(2);
});