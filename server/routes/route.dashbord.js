import express from "express";
import EmployeeData from "../controllers/EmployeeDataControllers.js";
import upload from "../middlewares/multerConfig.js";
import Employee from "../models/t_employee.js";
// import userMiddleware from "../middlewares/usermiddleware.js";
const router = express.Router();


router.post("/createEmployee" ,upload.single('image') ,  EmployeeData);

router.get("/getEmployee" , async(req,res)=>{
    try{
        const allEmployee = await Employee.find({});
        res.status(200).json(allEmployee);

    }
    catch(err){
        console.log(err);
        return res.status(500).json("Error fetching employee");
    }

})

router.get("/getEmployee/:id" , async(req,res)=>{
    try{
        const {id} = req.params;
        const data = await Employee.findById(id);
        if(!data){
            return res.status(404).json({msg : "no data is found"});
        }
        return res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        return res.status(500).json("Error fetching employee");
    }

})

router.put("/updateEmployee/:id", upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    if (req.file) {
        updatedData.image = req.file.path; 
    }

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, updatedData);
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        return res.status(200).json({ message: "Employee updated successfully", updatedEmployee });
    } catch (err) {
       return  res.status(500).json({ message: "Error updating employee", err});
    }
})

router.delete("/deleteEmployee/:id " , async( req  , res)=>{
    const {id} = req.params;

    try{
        const EmployeeDeleted = await Employee.findByIdAndDelete(id);

        if(!EmployeeDeleted){
            return res.status(404).json({msg : "Employee not found"});
        }
        return res.status(200).json({msg : "sucessfully deleted"})

    }
    catch(err){
        return  res.status(500).json({ message: "Error deleting employee", err });

    }
} )
    
    


export default router;