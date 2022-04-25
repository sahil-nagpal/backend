let express = require("express");

let {userRouter} = require("./userRouter")
let {mealRouter} = require("./mealRouter")
let {authentication} = require('../middlewars/Authentication')
let router = express.Router()

router.use("/user",userRouter)
router.use("/meals",authentication,mealRouter)

module.exports = router