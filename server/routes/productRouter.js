const Router = require('express')
const router = new Router()

const ProductController = require('../controllers/productController')
const CategoryController = require('../controllers/categoryController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRole = require('../middleware/roleMiddleware')


router.get('/all', ProductController.get_all)
router.post('/create', ProductController.create)
router.get('/category', CategoryController.get)
router.post('/category/create', checkRole(), CategoryController.create)

module.exports = router