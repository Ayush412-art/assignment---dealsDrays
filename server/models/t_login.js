import mongoose from 'mongoose'


const userLoginSchema = new mongoose.Schema({
        f_username : {
            type : String,
            required : true
        },
        f_pwd : {
            type : String,
            required : true
        }
}, {timestamps : true})

 const User = mongoose.model("User" , userLoginSchema);
 
export default User;