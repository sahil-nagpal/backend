let express = require('express');
let router = require('./routes');
let passport = require('passport');
let {jwt} = require('./passport-config');
const bodyParser = require("body-parser")
let app = express()
let PORT = process.env.PORT || 8000;
let cors = require("cors")
const moongoose = require('mongoose');
moongoose.connect("mongodb://localhost:27017/userTable")
app.use(cors())
app.use(passport.initialize())
passport.use('jwt',jwt)
app.use(bodyParser.json());
app.use("/api",router)


app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})