const fetch = require('./functions/apiData.js');

//Mock this global fetch function
global.fetch = jest.fn(); 

//test suite
describe('fetchData', () => {
    beforeEach(() => {
        //clear the object before running the test again
        fetch.mockClear();
    })
    
    

});