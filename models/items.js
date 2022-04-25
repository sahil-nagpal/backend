const mongoose = require("mongoose");
const Schema = mongoose.Schema
const Random = require('meteor-random');

let itemSchema = new Schema({
    _id:{
        type:String,
        default:() => `meal_${Random.id()}`,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        default:13.98,
        required:true,
    }
    
})

module.exports = mongoose.model('Items',itemSchema)