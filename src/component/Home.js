import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import logo from "../image/blcis-logo.png";
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => { 
  const location = useLocation();
  const initialValues = { studentID: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     if(!location.state) {
      toast.warning("No Student Registered", {autoClose: 1000,hideProgressBar: true,})
     } else {
      const errors = validate(formValues);
      setFormErrors(errors);
      if(Object.keys(errors).length === 0) {
        e.target.reset();
        window.location.href = "http://localhost:3000/Welcome";
      }       
     }


  };


  const validate = (values) => {
    const errors = {};
    if (!values.studentID) {
      errors.studentID = "*Student ID is required";
    } else if ((values.studentID !== location.state.formValues.studentID)) {
      errors.studentID = "*Student ID does not exist";
    } 

    if (!values.password) {
      errors.password = "*Password is required";
    } else if (values.password !== location.state.formValues.password) {
      errors.password = "*Invalid password";
    } 

    if(Object.keys(errors).length === 0) {

    }
    return errors;
  };
    return (
      <>
        <ToastContainer />
        <div className="home-container">

          <div className="header">
            <h3 id="school-text"> <img src={logo} alt="logo-blcis" id="blcis-logo" />BLC International School </h3>
          </div>        

          <div className="row login-header">
            <h1 id="login-txt"> STUDENT PORTAL LOGIN </h1>
            <p> Sign in using your 10-digit student number. </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} >
            <label className="student-num"> Student Number </label> <br />
            <input className="sn-input" type="text" name="studentID" maxlength="10" placeholder="10-Digit Student Number" value={formValues.studentID} onChange={handleChange} />
            <p className="text-danger login-error">{formErrors.studentID}</p>

            <label className="pass-txt"> Password </label><br />
            <input className="pw-input" type="password" placeholder="Password" name="password" value={formValues.password} onChange={handleChange}/>
            <p className="text-danger login-error"> {formErrors.password} </p>

            <div className = "btn-container">
              <input type="submit" className="btn btn-primary" value="Login" id="login-btn" />
            </div>
          </form>

          <p id="new-user"> New user? Please sign up <strong><Link to = "/Registration" id="link">here</Link></strong>. </p>
        </div>
      </>
    );
  };
  
  export default Home;