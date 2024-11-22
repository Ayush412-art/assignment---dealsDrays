
import CreateEmployeeList from "./components/CreateEmployeeList"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import UpdateEmployee from "./components/updateEmployee"
import EmployeeList from "./components/EmployeeList"
import { BrowserRouter , Routes ,Route } from "react-router-dom"
function App() {
 

  return (
    <>
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/CreateEmployee" element = {<CreateEmployeeList />} ></Route>
        <Route path="/EmployeeList" element = {<EmployeeList />} ></Route>
        <Route path="/updateEmployee/:id" element = {<UpdateEmployee />} ></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
