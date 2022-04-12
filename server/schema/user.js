const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "Email is required"],
        max: 20,
        min: 6,
        unique: true,
        index: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
        max: 30,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please enter a valid Email"]
    },
    role: {
        type: String,
        enum: ["subscriber", 'admin'],
        default: 'subscriber'
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"],
        minlength: 6,
        select: false
    },
    resetPasswordLink: {
        type: String,
        default: ''
    }

}, { timestamps: true })


module.exports = mongoose.model("User", userSchema)