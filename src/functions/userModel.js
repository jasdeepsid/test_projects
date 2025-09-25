const mongoose = require('mongoose');

//Creating a user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    age: {type: Number, min: 7, max: 120}
});

const User = mongoose.model('Users', userSchema);