const express = require('express');
const router = express.Router();

//middleware
const { checkUserValidation } = require('../middlewares/auth')
const { runValidator } = require('../validators')
//contollers
const { createUser } = require('../controllers/user')

router.post('/register', checkUserValidation, runValidator, createUser)


module.exports = router
