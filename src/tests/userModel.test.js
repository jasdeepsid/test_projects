 const mongoose = require('mongoose');
 const {createUser, User} = require('../functions/userModel.js');


 //test suite

 describe('User Model Testing',() => {
    ///AAA pattern - Arrange, Act, Assert
    //jest hook
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const mockUser = {
        name: "jasdeep",
        email:"sidhu.jass@example.com",
        password: "password",
        age: 20
    }
    
 });