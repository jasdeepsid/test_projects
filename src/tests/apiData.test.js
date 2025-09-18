//import the function to be tested
const fetch = require('./functions/apiData.js');

//Mock this global fetch function
global.fetch = jest.fn(); 

//test suite
describe('fetchData',() => {
    beforeEach(() => {
        //clear the object before running the test again
        fetch.mockClear();
    });

    test('fetches data from API endpoint and returns it as JSON', async () =>{

        //AAA pattern
        //Arrange
        //Mock response
        const mockRwsponse = {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse)
    });

    //Action
    const data =  await fetch('https://jsonplaceholder.typicode.com/todos/1');


    
    

})