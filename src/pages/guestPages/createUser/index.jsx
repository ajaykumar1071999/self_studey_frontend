import { useEffect, useState } from "react";
import { fieldValidation } from "../../../utils/fieldValidator";
import "./index.css";
import {
  CREATE_USER_API,
  GET_USER_LIST_API,
} from "../../../constants/apiConstants";
// import { getMethodApi, postMethodApi } from "../../../api";
import { useNavigate } from "react-router-dom";

const initialFormValues = {
  userName: "",
  age: "",
  email: "",
  password: "",
  mobile: "",
  street: "",
  city: "",
  salary: "",
  work: "",
};

function CreateUser() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);


  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = fieldValidation(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  const clearAll = () => {
    setFormValues(initialFormValues);
  };

  const handleSubmit = async () => {
    const { userName, age, email, password, mobile, salary, work } = formValues;

    const payload = {
      userName,
      age,
      email,
      password,
      mobile,
      salary,
      work,
      address: [{ street: formValues?.street, city: formValues?.city }],
    };

    // postMethodApi(CREATE_USER_API, payload, setData, clearAll, navigate);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="input-container">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Enter username"
            value={formValues.userName}
            onChange={handleChange}
          />
          {errors.userName && <p className="error">{errors.userName}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter age"
            value={formValues.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formValues.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile"
            value={formValues.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Enter street"
            value={formValues.street}
            onChange={handleChange}
          />
          {errors.street && <p className="error">{errors.street}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city"
            value={formValues.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter salary"
            value={formValues.salary}
            onChange={handleChange}
          />
          {errors.salary && <p className="error">{errors.salary}</p>}
        </div>

        <div className="input-container">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            id="work"
            name="work"
            placeholder="Enter work"
            value={formValues.work}
            onChange={handleChange}
          />
          {errors.work && <p className="error">{errors.work}</p>}
        </div>
        <div className="button-container">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
