const { Category }  = require('../models/product-model')
const { Op } = require('sequelize')
class CategoryController {
    async create(req, res, next) {
        try {
            const { title } = req.body
            console.log(title)
            const category = await Category.create({
                title: title,
                createdAt: Date.now(),
                updatedAt: Date.now()
            })
            return res.json(category)
        } catch (e) {
            next()
        }
    }

    async get(req, res, next) {
        try{
            const category = await Category.findAll()
            return res.json(category)
        }catch(e){
            next(e)
        }
    }

}


module.exports = new CategoryController()