let express = require("express");
let {getMeals} = require('../controllers/itemController');
let mealRouter = express.Router()
mealRouter.get('/',getMeals)

module.exports = {
    mealRouter:mealRouter
}