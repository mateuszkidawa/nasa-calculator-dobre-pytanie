const action = require('../script'); 

const x = 5;
const y = 1;

test('adds 5 + 1 to equal 6', () => {
  expect(action(x,y)).toBe(6);
});

// test('adds 5 - 1 to equal 4', () => {
//   expect(action(x,y)).toBe(4);
// });