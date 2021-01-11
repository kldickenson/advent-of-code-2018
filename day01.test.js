const day01 = require('./day01');

// test('check if sum of 3 nums is working', () => {
//   const testArray = [1, 2, 3];
//   expect(day01.sum(testArray)).toEqual(6);
// });

// test('check if sum of 20 nums is working', () => {
//   const testArray = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     -1,
//     -2,
//     -3,
//     -4,
//     -5,
//     -6,
//     -7,
//     -8,
//     -9,
//     -10,
//   ];
//   expect(day01.sum(testArray)).toEqual(0);
// });

test('Repeated frequency exists', () => {
  const testArray = [7, 7, -2, -7, -4];
  expect(day01.frequency(testArray)).toBe(14);
});
