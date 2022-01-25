const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    title: {type: String, max: 20, required: true},
    type: {type: String},
    genre: String,
    content: {type:Array}
},{timestamps: true})

module.exports = mongoose.model('lists', ListSchema)