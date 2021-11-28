const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 12,
        max: 90,
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 120,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    // bestFriend: mongoose.SchemaType.ObjectId,
    hobbies: [], //array; if left blank, it can be array of anything
    address: {
        street: String,
        city: String,
    }
})

module.exports = mongoose.model("User", userSchema)