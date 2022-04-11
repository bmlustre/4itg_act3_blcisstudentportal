import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/blcis-logo.png";

import '../css/welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = () => { 
    return (
      <>

        <div className="welc-container">

          <div className="header">
            <h3 id="welc-school-text"> <img src={logo} alt="logo-blcis" id="blcis-logo" />BLC International School </h3>
          </div>        

          <h1 id="welc-txt"> WELCOME TO OUR STUDENT PORTAL! </h1>
          
          <Link to="/"> <input type="submit" className="btn btn-danger" value="Logout" id="logout-btn" /> </Link>
        
        </div>

    </>
    );
};
  
  export default Welcome;