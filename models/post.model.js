const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required:true
    },
    time: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    image_body: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Post', postSchema)