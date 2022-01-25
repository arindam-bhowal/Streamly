const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: { type: String, max: 20, required: true },
    desc: { type: String, max: 100 },
    thumbnail: { type: String },
    coverImg: { type: String },
    imgTitle: { type: String },
    video: { type: String },
    year: { type: Number },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean }
}, { timestamps: true })

module.exports = mongoose.model('movies', movieSchema)