const mongoose = require("mongoose");
const Schema = mongoose.Schema
const Random = require('meteor-random');
const jwt = require('jwt-simple');
const moment = require('moment');
let userSchema = new Schema({
    _id:{
        type:String,
        default: () => `user_${Random.id()}`,
        required: true,
    },
    username :{
        type:String,
        required:true,
    },
    password:{
        type:String,
        requried :true,
    },
})
userSchema.statics = {
    async findAndGenerateToken(username,passoword){
     const user = await this.findOne({'username' :username,'password':passoword }).exec();
     if (user){
         let user_obj = JSON.parse(JSON.stringify(user))
         delete user_obj.password;
         return {success:true,user:user_obj,token:user.token()}
     }
     else{
         return {success:false,message:"No user found"}
     }
    }
}
userSchema.method({
    token(){
        const payload = {
            exp: moment().add(20, "minutes").unix(),
            iat: moment().unix(),
            sub: this._id,
          };
          return jwt.encode(payload,'secret')
    }
})
module.exports = mongoose.model('User', userSchema)