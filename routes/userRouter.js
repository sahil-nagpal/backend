let express = require("express");
let {register,login} = require('../controllers/userControllers')
let userRouter = express.Router()


userRouter.post('/register', register)
userRouter.post('/login',login)

module.exports = {
    userRouter:userRouter
}