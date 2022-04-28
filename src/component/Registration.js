import React from "react";
import logo from "../image/blcis-logo.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../css/registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const Registration = () => {

const initialValues = { gName : "", lName:"", studentID: "", college: "", program: "", yearLevel: "", password: "" , cPassword: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validate(formValues);
  setFormErrors(errors);
  if(Object.keys(errors).length === 0) {
    e.target.reset();
    toast.success("Successful Registration", {autoClose: 1000,hideProgressBar: true,})
  }
};


const validate = (values) => {
  const errors = {};
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;
  if(!values.gName) {
    errors.gName = "Given name is required";
  }

  if(!values.lName) {
    errors.lName = "Last name is required";
  }
  if(!values.college) {
    errors.college = "College is required";
  }
  if(!values.program) {
    errors.program = "Program is required";
  }
  if(!values.yearLevel) {
    errors.yearLevel = "Year Level is required";
  }

  if (!values.studentID) {
    errors.studentID = "Student ID is required";
  } else if ((values.studentID.length !== 10) || isNaN(values.studentID)) {
    errors.studentID = "Student ID must be a 10 digit number";
  } 
  
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!passwordPattern.test(values.password)) {
    errors.password = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
  } 

  if (!values.cPassword) {
    errors.cPassword = "Confirm Password is required";
  } else if (values.cPassword !== values.password ) {
    errors.password = "Password does not match";
  } 

  return errors;
};

  
    return (
      <>
        <ToastContainer />
         <div className="reg-container">
        
        <div className="header">
          <h3 id="school-text"> <img src={logo} alt="logo-blcis" id="blcis-logo" />BLC International School </h3>
        </div>       

        <div className="row">
          <h1> STUDENT PORTAL REGISTRATION </h1>
          <p> Create an account. </p>
        </div>

        <form className="signup-form"  onSubmit={ handleSubmit }>

          <div className="row">
            <div className="col-lg-4">
              <label> Given Name </label><br/>
              <input id="giv-name" className="form-control" type="text" placeholder="Given Name"  name="gName"  value={formValues.gName}  onChange={handleChange} />
              <p className="text-danger">{formErrors.gName}</p>
            </div>

            <div className="col-lg-4">
              <label> Middle Name </label><br/>
              <input id="mid-name" type="text" className="form-control" placeholder="Middle Name" />
            </div>

            <div className="col-lg-4">
              <label> Last Name </label><br/>
              <input id="last-name" type="text" className="form-control" placeholder="Last Name" name="lName"  value={formValues.lName}  onChange={handleChange}  />            
              <p className="text-danger">{formErrors.lName}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <label> Student Number </label><br/>
              <input id="student-no" className="form-control" type="text" placeholder="10-Digit Student Number" maxlength="10" name="studentID"  value={formValues.studentID}  onChange={handleChange} />
              <p className="text-danger">{formErrors.studentID}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <label> College </label><br/>
              <input id="college" className="form-control" type="text" placeholder="College"  name="college"  value={formValues.college}  onChange={handleChange} />
              <p className="text-danger">{formErrors.college}</p>
            </div>

            <div className="col-lg-4">
              <label> Program Enrolled </label><br/>
              <input id="program" className="form-control" type="text" placeholder="Program Enrolled"  name="program"  value={formValues.program}  onChange={handleChange} />            
              <p className="text-danger">{formErrors.program}</p>
            </div>

            <div className="col-lg-4">
              <label id="yr-lvl"> Year Level </label><br/>
              <select className="form-select"  name="yearLevel"  value={formValues.yearLevel}  onChange={handleChange}>
                <option disabled selected> Select One </option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
              </select>
              <p className="text-danger">{formErrors.yearLevel}</p>            
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <label id="pass"> Password </label><br/>
              <input type="password" className="form-control" placeholder="Password"  name="password"  value={formValues.password}  onChange={handleChange}/>
              <p className="text-danger">{formErrors.password}</p>            
            </div>

            <div className="col-lg-6">
              <label id="confirm-pass"> Confirm Password </label><br/>
              <input type="password" className="form-control" placeholder="Confirm Password"  name="cPassword"  value={formValues.cPassword}  onChange={handleChange}/>
              <p className="text-danger">{formErrors.cPassword}</p>            
            </div>
          </div>

          <div className="text-center">
            <input type="submit" className="btn btn-success" id="submit-btn" value="Sign Up"/>
            <input type="reset" value="Cancel" className="m-3 btn btn-danger" id="cancel-btn" />              
          </div>

        </form>

        <p id="existing-user"> Existing user? Please log in <strong><Link to = "/"   state={{ formValues }}  id="link">here</Link></strong>. </p>

      </div>
    </>
    );
  };
  
  export default Registration;