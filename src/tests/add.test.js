const add = require('../functions/add');

//this is a test case
test('adds 1 + 2 is equal to 3', () => { 
    expect(add(1, 2)).toBe(3);
});