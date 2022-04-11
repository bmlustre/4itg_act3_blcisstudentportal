import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/blcis-logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const  handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Successful LogIn", {autoClose: 1000,hideProgressBar: true,})
}

const Home = () => { 
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

          <form className="login-form" onSubmit={ handleFormSubmit }>
            <label className="student-num"> Student Number </label> <br />
            <input className="sn-input" type="text" placeholder="10-Digit Student Number" maxlength="10" required/>


            <br /><br />

            <label className="pass-txt"> Password </label><br />
            <input className="pw-input" type="password" placeholder="Password" required/>

            <br /><br />

            <input type="submit" className="btn btn-primary" value="Login" id="login-btn" />
          </form>

          <p id="new-user"> New user? Please sign up <strong><Link to = "/Registration" id="link">here</Link></strong>. </p>

        </div>
      </>
    );
  };
  
  export default Home;