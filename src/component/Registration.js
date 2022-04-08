import React from "react";
import logo from "../image/blcis-logo.png";
import { Link } from "react-router-dom";

import '../css/registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
  
    return (
      <>
         <div className="reg-container">
        
        <div className="header">
          <h3 id="school-text"> <img src={logo} alt="logo-blcis" id="blcis-logo" />BLC International School </h3>
        </div>       

        <div className="row">
          <h1> STUDENT PORTAL REGISTRATION </h1>
          <p> Create an account. </p>
        </div>

        <form className="signup-form">

          <div className="row">
            <div className="col-lg-4">
              <label> Given Name </label><br/>
              <input id="giv-name" type="text" placeholder="Given Name" required />
            </div>

            <div className="col-lg-4">
              <label> Middle Name </label><br/>
              <input id="mid-name" type="text" placeholder="Middle Name" />
            </div>

            <div className="col-lg-4">
              <label> Last Name </label><br/>
              <input id="last-name" type="text" placeholder="Last Name" required />            
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <label> Student Number </label><br/>
              <input id="student-no" type="text" placeholder="10-Digit Student Number" maxlength="10" required/>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <label> College </label><br/>
              <input id="college" type="text" placeholder="College" required />
            </div>

            <div className="col-lg-4">
              <label> Program Enrolled </label><br/>
              <input id="program" type="text" placeholder="Program Enrolled" required />            
            </div>

            <div className="col-lg-4">
              <label id="yr-lvl"> Year Level </label><br/>
              <select required>
                <option disabled> Select One </option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
              </select>            
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <label id="pass"> Password </label><br/>
              <input type="password" placeholder="Password" required/>
            </div>

            <div className="col-lg-6">
              <label id="confirm-pass"> Confirm Password </label><br/>
              <input type="password" placeholder="Confirm Password" required/>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <input type="submit" value="Sign Up" />
            </div>

            <div className="col-lg-3">
              <input type="reset" value="Cancel" />              
            </div>
          </div>

        </form>

        <p id="existing-user"> Existing user? Please log in <strong><Link to = "/">here</Link></strong>. </p>

      </div>
    </>
    );
  };
  
  export default Registration;