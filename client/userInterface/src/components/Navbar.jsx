import React , {useEffect, useState} from 'react'
import {jwtDecode} from "jwt-decode"
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [user , setUser] = useState("");

    const getUsername = ()=>{
        const token = localStorage.getItem("authToken");
        const decoded_token = jwtDecode(token.split(" ")[1]);

        setUser(decoded_token.username);
   }
   useEffect(()=>{
        getUsername();
   },[user])
  return (
    <div className='wrapper h-[45px] bg-slate-400 p-2 mb-2'>
      <div className='flex justify-around pl-4 '>
        <div className='flex gap-5'>
   <NavLink 
    to="/Dashboard">Home</NavLink>
   <NavLink  to="/EmployeeList">EmployeeList</NavLink>
        </div>
    <div className='text-l flex gap-x-10'>
        <h3>{user}</h3>
        <button className='bg-blue-500 px-3 py-1 rounded-sm text-white' onClick={() => (handlerLogout())}>Logout</button>
    </div>
      </div>
        </div>
  )
}

export default Navbar
