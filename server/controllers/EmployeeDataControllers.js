import Employee from "../models/t_employee.js";
const EmployeeData = async (req, res) => {
  const { name, email, mobile, designation, gender, course } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const isEmployee = await Employee.findOne({
      email: email,
    });

    if (isEmployee) {
      return res.status(403).json({ msg: "email already exists" });
    }

    const setEmployee = new Employee({
      name,
      email,
      designation,
      mobile,
      gender,
      course,
      image: image,
    });
    await setEmployee.save();
    return res.status(201).json({msg : "Employee has been created sucessfully"})

  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error", error: err.message });
  }
};
export default EmployeeData;
