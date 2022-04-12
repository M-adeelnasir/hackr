const express = require('express');
const router = express.Router();

const { createUser } = require('../controllers/user')

router.get('/register', createUser)


module.exports = router
