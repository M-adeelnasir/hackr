const express = require('express');
const router = express.Router();

//middleware
const { checkUserValidation, checkUserLoginValidation, forgotPasswordValidator, resetPasswordValidator } = require('../middlewares/auth')
const { runValidator } = require('../validators')
//contollers
const { createUser, activateUer, loginUser, forgotPassword, resetPassword } = require('../controllers/auth')

router.post('/register', checkUserValidation, runValidator, createUser)
router.post('/register/activate', activateUer)
router.post('/login', checkUserLoginValidation, runValidator, loginUser)
router.put('/forgot-password', forgotPasswordValidator, runValidator, forgotPassword)
router.put('/reset-password', resetPasswordValidator, runValidator, resetPassword)

module.exports = router
