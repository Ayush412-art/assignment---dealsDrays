import express from 'express';
import dotenv from 'dotenv'
import  connection from './Db/db.js';
import userAuth from './routes/route.user.js';
import dashboard from "./routes/route.dashbord.js"
import cors from "cors"

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
console.log(process.env.PORT)
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extened : true}))
//routes 
app.use("/user" , userAuth)

app.use("/dashboard" , dashboard)

connection().then(()=>{
    console.log("Db connected sucessfully");

})
.catch((err) =>{
    console.log(err);
})

app.listen(port , () => {
    console.log(`Server is running at port ${port}`);
})
