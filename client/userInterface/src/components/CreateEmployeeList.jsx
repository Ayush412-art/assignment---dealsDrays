import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function CreateEmployeeList() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const mobRef = useRef("");
  const genRef = useRef("");
  const designationRef = useRef("");
  const courseRef = useRef("");
  const imgRef = useRef("");
  const navigate  = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    if (!nameRef.current.value) {
      alert("Please enter employee username");
      nameRef.current.focus();
      return;
    }
    if (!emailRef.current.value) {
      alert("Please enter employee Email");
      emailRef.current.focus();
      return;
    }
    if (!mobRef.current.value) {
      alert("Please enter employee number");
      mobRef.current.focus();
      return;
    }
    if (!genRef.current.value) {
      alert("Please select employee gender");
      genRef.current.focus();
      return;
    }
    if (!designationRef.current.value) {
      alert("Please enter employee designation");
      designationRef.current.focus();
      return;
    }
    if (!courseRef.current.value) {
      alert("Please enter employee's course");
      designationRef.current.focus();
      return;
    }

    try {
      const formdata = new FormData();
      formdata.append("name", nameRef.current.value);
      formdata.append("email", emailRef.current.value);
      formdata.append("mobile", mobRef.current.value);
      formdata.append("gender", genRef.current.value);
      formdata.append("designation", designationRef.current.value);
      formdata.append("course", courseRef.current.value);
      formdata.append("image", imgRef.current.files[0]);
      const response = await axios.post(
        "http://localhost:8080/dashboard/createEmployee",
        formdata
      );
      if (response.status === 201) {
        alert("data created");
        navigate("/EmployeeList")

      }
    } catch (err) {
      console.log(err);
      alert("Failed to create the data");
    }
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md m-5">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Employee{" "}
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                ref={nameRef}
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                ref={emailRef}
                type="email"
                placeholder="email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                Moblie
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                ref={mobRef}
                type="text"
                placeholder="number"
                maxLength={10}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="designation"
              >
                Designation
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ref={designationRef}
                required
              >
                <option value="">Select designation</option>
                <option value="manager">Manager</option>
                <option value="hr">HR</option>
                <option value="sales">Sales</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    className="form-radio h-5 w-5 text-blue-600"
                    type="radio"
                    name="gender"
                    value="Male"
                    ref={genRef}
                    required
                  />
                  <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    className="form-radio h-5 w-5 text-blue-600"
                    type="radio"
                    name="gender"
                    value="Female"
                    ref={genRef}
                    required
                  />
                  <span className="ml-2 text-gray-700">Female</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="course"
              >
                Course
              </label>
              <div className="flex  gap-5">
                <label className="inline-flex items-center">
                  <input
                    ref={courseRef}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    value="MCA"
                    name="course"
                  />
                  <span className="ml-2 text-gray-700">MCA</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    ref={courseRef}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    value="BCA"
                    name="course"
                  />
                  <span className="ml-2 text-gray-700">BCA</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    ref={courseRef}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    value="BSC"
                    name="course"
                  />
                  <span className="ml-2 text-gray-700">BSC</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
              image
              </label>
         <input 
            ref={imgRef}
            type="file"
            accept="image/*"
         >
         </input>
            </div>
            

            <div className="flex items-center justify-between mx-auto">
              <button
                onClick={submitForm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateEmployeeList;
