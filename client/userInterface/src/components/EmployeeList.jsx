import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";
function EmployeeList() {
    const [employees ,setEmployee] = useState([]);
    const navigate = useNavigate();
    const handleEdit = (id)=>{
      
        navigate(`/updateEmployee/${id}`)
    
      }


    const getEmployeeData = async() =>{
        try{
            
            const res = await axios.get("http://localhost:8080/dashboard/getEmployee");
            setEmployee(res.data);
          
        }      
        catch(err){
            console.error(err);
        }
    

    }
    useEffect(()=>{
        getEmployeeData();
        
        
    },[])
  
  return (
   <>
      <Navbar />
   <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Employees List</h2>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Unique Id</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Mobile No</th>
            <th className="border border-gray-400 px-4 py-2">Designation</th>
            <th className="border border-gray-400 px-4 py-2">Gender</th>
            <th className="border border-gray-400 px-4 py-2">Course</th>
            <th className="border border-gray-400 px-4 py-2">Create Date</th>
            <th className="border border-gray-400 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? employees.map((employee , index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{index+1}</td>
              <td className="border border-gray-400 px-4 py-2">
                {employee.image ? (
                  <img
                    src={employee.image}
                    alt="Employee img"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  "null"
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2">{employee.name}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.email}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.mobile}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.designation}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.gender}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.course}</td>
              <td className="border border-gray-400 px-4 py-2">{employee.createDate}</td>
              <td className="border border-gray-400 px-4 py-2">
                <button
                  onClick={() => handleEdit(employee._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          )) : <h2>no employee found</h2>}
        </tbody>
        </table>
        </div>
        <div onClick={() => (navigate("/CreateEmployee"))} className="py-1 px-3 bg-yellow-200 mx-auto w-[20%] text-center rounded-lg font-medium cursor-pointer">
            Create Employee
        </div>
   </>
  )
}

export default EmployeeList
