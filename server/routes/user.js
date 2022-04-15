const express = require('express');
const router = express.Router();

//middleware
const { checkUserValidation } = require('../middlewares/auth')
const { runValidator } = require('../validators')
//contollers
const { createUser, activateUer } = require('../controllers/user')

router.post('/register', checkUserValidation, runValidator, createUser)
router.post('/register/activate', activateUer)

module.exports = router
