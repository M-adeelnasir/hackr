const jwt = require('express-jwt');
const User = require('../models/user');

const { body } = require('express-validator');
exports.checkUserValidation =
    [body('name')
        .not()
        .isEmpty()
        .withMessage("Name Is Required"),
    body('email')
        .isEmail()
        .withMessage("Email Is Required"),
    body('password')
        .isLength({ min: 6 })
        .withMessage("Password must 6 char long")]

exports.checkUserLoginValidation = [
    body('email')
        .isEmail()
        .withMessage('Email is required')
]


//check if the user have the token 
exports.requireSignin = jwt({ secret: process.env.JWT_LOGIN_SECRET, algorithms: ['RS256'], })  //req.user



//authCheck for user and admin
exports.checkAuth = async (req, res, next) => {
    const UserId = req.user._id
    try {
        const user = await User.findOne({ _id: UserId })
        if (!user) {
            return res.status(404).json({
                success: false,
                data: "User Not found"
            })
        }

        req.profile = user
        next()

    } catch (err) {
        // console.log(err);
        return res.status(404).json({
            success: false,
            data: "User Not found"
        })
    }
}


//admin check auth
exports.checkAdmin = async (req, res, next) => {
    const userId = req.user;
    try {
        const user = await User.findOne({ _id: req.user })
        if (!user) {
            return res.status(404).json({
                success: false,
                data: "User Not found"
            })
        }

        const isAdmin = user.role;

        if (isAdmin !== "admin") {
            return res.status(404).json({
                success: false,
                data: "This user is not an admin"
            })
        }

        req.profile = user;
        next();


    } catch (err) {
        return res.status(404).json({
            success: false,
            data: "User Not found"
        })
    }
}