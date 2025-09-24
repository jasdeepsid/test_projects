//import the function to be tested
const { fetchData } = require('../functions/apiData.js');

//Mock this global fetch function
global.fetch = jest.fn();

//test suite
describe('fetchData',  () => {
    beforeEach(() => {
        //clear the object before running the test again.  
        fetch.mockClear();
    });

    test('fetches data from the API endpoint and returns it as JSON', async () =>{

        /*AAA pattern
          Arrange
          Mock response*/
        const mockResponse = {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse)
        });

        //Action
        const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');

        //Assert
        expect(data).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    });

});