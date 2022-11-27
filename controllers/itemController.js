const ItemModel = require('../models/items.js');

const getMeals = async(req,res,next)=>{
    try{
        let items = await ItemModel.find({})
        let totalItems = items.length
       return res.json({success:true,items:items,totalItems:totalItems})
    }
    catch(err){
        // console.log(">>>>>>>>>>",err)
        next()
    }
    next()
}
module.exports ={
    getMeals:getMeals,
}