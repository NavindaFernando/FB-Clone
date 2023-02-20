const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    sur_name: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    date_of_birth: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    phone_number: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)