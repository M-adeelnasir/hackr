const express = require('express');
const router = express.Router();

//middlewarer
const { checkAdmin, checkAuth, requireSignin } = require('../middlewares/auth')



//controllers
const { read } = require('../controllers/user')

router.get('/user', requireSignin, checkAuth, checkAdmin, read);

module.exports = router