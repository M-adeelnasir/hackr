const express = require('express');
const router = express.Router();

//middleware
const { checkUserValidation, checkUserLoginValidation, forgotPasswordValidator } = require('../middlewares/auth')
const { runValidator } = require('../validators')
//contollers
const { createUser, activateUer, loginUser, forgotPassword } = require('../controllers/auth')

router.post('/register', checkUserValidation, runValidator, createUser)
router.post('/register/activate', activateUer)
router.post('/login', checkUserLoginValidation, runValidator, loginUser)
router.put('/forgot-password', forgotPasswordValidator, runValidator, forgotPassword)

module.exports = router
