
import axios from "axios";
import {  useRef } from "react";
import {useNavigate} from "react-router-dom";
function App() {


  
  const nameref = useRef("");
  const pwdref = useRef("");
const navigate = useNavigate();
  const submitForm = async (e) => {

    e.preventDefault();

    if (!nameref.current.value) {
      alert("Please enter your username");
      nameref.current.focus();
      return;
    }
    if (!pwdref.current.value) {
      alert("Please enter your password");
      pwdref.current.focus();
      return;
    }
  try{
   
    const response = await axios.post("http://localhost:8080/user/login" , {
        username : nameref.current.value,
        password : pwdref.current.value
    } )
    const {token} = response.data;
    localStorage.setItem("authToken" , `Bearer ${token}`);
    alert("user login sucessfully");
    navigate("/Dashboard")

  }

 catch(err){
    console.log(err);
    alert("wrong username or password");
 }

    
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md m-5">
          <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                ref={nameref}
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                ref={pwdref}
                type="password"
                placeholder="password"
                maxLength={15}
                required
              />
            </div>
          
            <div className="flex items-center justify-between mx-auto">
              <button
                onClick={submitForm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
               login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;