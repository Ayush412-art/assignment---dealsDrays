import User from "../models/t_login.js";
import jwt from "jsonwebtoken";

const userLogin = async(req , res) =>{
    const {username , password} = req.body;
try{

    const isUser = await User.find({
        f_username : username,
        f_pwd : password
    })
    if(isUser.length < 1){
           return res.status(404).json({msg  : "Invalid username or password"})
    }
    
        const secret_key = process.env.SECRET_KEY || "12345";
        
        const token =  jwt.sign({"username" : username} , secret_key , {
            expiresIn : '24h'
        } );

      return res.status(201).json({token});

}
catch(err){
    console.log(err);
}

}
export default userLogin;

