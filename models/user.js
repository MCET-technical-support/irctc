const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required:true
    },
    dob: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model('user', userSchema);