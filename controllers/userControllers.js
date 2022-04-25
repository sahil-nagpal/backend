const UserModel = require('../models/User')


const register =async (req,res,next)=>{
    try{
        console.log("req.body:::::",req.body)
        let user =await new UserModel(req.body)
        let token = user.token()
        if (user){

            await user.save((err)=>{
               if (err){
                   console.log("3")
                 res.json({success:false,"message":err.message})
               }
               else{
                return res.json({"success":true,"token":token,"user":user})
               }
            })
            //
            
        }
        else{
            return res.json({success:false,"message":"Some error occured"})
        }
        
    }
    catch(err){
       return res.json({success:false,"message":err.message})
    }
   
}
const login = async (req,res,next)=>{
    try{
        console.log("body:::",req.body)
        const {username,password} = req.body
        let response = await UserModel.findAndGenerateToken(username,password)
        if (response.success){
            return res.json({"success":true,"user":response.user,"token":response.token})
        }
        return res.json({"success":false,"message":response.message})
    }
    catch(err){
        console.log("Err:::::",err)
       return res.json({success:false,"message":err})
    }   
}


module.exports = {
    register : register,
    login:login,
}