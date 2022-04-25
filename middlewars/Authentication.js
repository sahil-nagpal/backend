const  passport = require('passport');

const handleJwT   =  (req,res,next) => (err,user,info)=>  {
    let error = err || info
    if (error){
       return res.json({"success":false,"message":"Your are not authorised"}) 
    }
    if(!user){
        return res.json({"success":false,"message":"Your are not authorised"})
    }
    return next()
}
const authentication = (req,res,next)=>{
    try{
        passport.authenticate('jwt',{"session":false},
        handleJwT(req,res,next))(req,res,next)
    }
    catch(err){
        res.json({"succes":false,"message":err.message})
    }
    
}


module.exports = {
    authentication : authentication
}