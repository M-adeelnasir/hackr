const express = require('express');
const router = express.Router();

//middleware
const { checkUserValidation, checkUserLoginValidation } = require('../middlewares/auth')
const { runValidator } = require('../validators')
//contollers
const { createUser, activateUer, loginUser } = require('../controllers/user')

router.post('/register', checkUserValidation, runValidator, createUser)
router.post('/register/activate', activateUer)
router.post('/login', checkUserLoginValidation, runValidator, loginUser)

module.exports = router
