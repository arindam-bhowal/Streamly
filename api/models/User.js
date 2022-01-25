const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, max: 20 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
    profilePicture: { type: String },
    isAdmin: { type: Boolean, default: false }

}, {
    timestamps: true
});

module.exports = mongoose.model('Users', userSchema)