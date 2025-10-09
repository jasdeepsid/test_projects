const mongoose = require('mongoose');
const {createUser, User} = require('../functions/userModel.js');


//test suite
describe('User Model Testing', () => {
    ///AAA Pattern - Arrange, Act, Assert
    //jest hook
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    it('should create a new user', async ()=>{

    //arrange by setting up mock object literal
    const mockUser = {
        name: "jasdeep",
        email: "sidhu.jass@example.com",
        password: "password",
        age: 20
    }

    //Action
    jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);
    var result = await createUser('jasdeep', 'sidhu.jass@example.com', 'password', 20);

    //Assert
    expect(result).toEqual(expect.objectContaining(mockUser));
    expect(User.prototype.save).toHaveBeenCalledTimes(1);
    });
});