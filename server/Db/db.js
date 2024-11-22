import mongoose  from "mongoose";

 const connection = async() =>{
    try{
        const url = process.env.MONGO_URL;
        
        if(!url){
            throw new console.error("Db url did not found");
            
        }
           await mongoose.connect(url, {
                dbName : process.env.DB_NAME
            })
    }
    catch(e){
        console.log("connection failed : " , e);
    }
}
export default connection;