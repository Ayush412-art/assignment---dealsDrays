
import  User  from "../models/t_login.js";
 const userSignin = async(req , res) => {
    console.log(req.body);
    const {username  , password} = req.body;
    try{
        const isUser = await User.find({
            f_username : username
        })
        if(isUser.length >= 1){
            return res.status(403).json({msg : "User already exists"});
        }
        const newUser = new User({
            f_username : username,
            f_pwd : password
        })
        await newUser.save();
        return res.status(201).json({msg : "User has been created sucessfully"});
    }
    catch(err){
        console.log(err);
    }

}
export default userSignin;   