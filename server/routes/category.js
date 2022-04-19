const express = require('express');
const router = express.Router();

//middlewarer
const { requireSignin, categoryCreateValidator, categoryUpdateValidator } = require('../middlewares/auth')

const { runValidator } = require('../validators')

//controllers
const { createCategory, deleteCategory, getCategories, getCategory, updateCategory } = require('../controllers/category')



router.post('/category/create', requireSignin, createCategory)
router.get('/categories', getCategories)
router.get('/category/:slug', getCategory)
router.delete('/category/delete/:slug', requireSignin, deleteCategory)
router.put('/category/:slug', requireSignin, categoryUpdateValidator, runValidator, updateCategory)


module.exports = router