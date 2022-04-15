const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


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


//encypt the password
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})



// compare the password from client enter and the password in DB
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}





// //genrate user jwt token
// userSchema.methods.getSignedJwtToken = function () {
//     return jwt.sign({ name: this.name, email: this.email, password: this.password }, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_TOKEN_EXPIRES
//     })
// }


module.exports = mongoose.model("User", userSchema)