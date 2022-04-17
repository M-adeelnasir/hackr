const express = require('express');
const router = express.Router();

//middlewarer
const { checkAdmin, checkAuth, requireSignin } = require('../middlewares/auth')
const { thisAuth } = require('../middlewares/user')


//controllers
const { read } = require('../controllers/user')

router.get('/user', requireSignin, checkAuth, checkAdmin, read);

module.exports = router