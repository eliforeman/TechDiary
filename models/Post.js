const {Schema, model} = require('mongoose')


const PostSchema = new Schema({
    description:{
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
})