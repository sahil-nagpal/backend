let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt  = require('passport-jwt').ExtractJwt;
let UserModel = require('./models/user.js');
let jwtOpts = {}
jwtOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOpts.secretOrKey = 'secret';
console.log("jwtoptions ",jwtOpts)
const jwt = (payload,done)=>{
    try{
        UserModel.findOne({_id:payload.sub},(err,user)=>{
            if (err){
                done(err,false)
            }
            if(user){
                let user_obj = JSON.parse(JSON.stringify(user))
                delete user_obj.password
                done(null,user_obj)
            }
        })
    }
    catch(err){
        console.log("thhis is the error")
        done(err,false)
    }
}
module.exports = {jwt:new JwtStrategy(jwtOpts,jwt)}