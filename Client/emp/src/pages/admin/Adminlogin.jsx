import React,{useState,useEffect} from 'react'
import '../admin/Adminlogin.css'
import homeimg from '../../assets/employee.jpg'
import {Link , useNavigate} from 'react-router-dom'
function Adminlogin()
{

  const navigate = useNavigate();

  function subitform(event) {
    event.preventDefault(); 

    const adminusername = document.getElementById("username").value;
    const adminpassword = document.getElementById("password").value;
    localStorage.setItem("usernameadmin", adminusername)
    localStorage.setItem("passwordadmin" , adminpassword)
    if (adminusername === "admin123" && adminpassword === "admin321") {
      alert("Login Successful!");
      navigate("/admindshboard");
    } else {
      alert("Incorrect email or password.");
    }
  }

  return(

<div className='admincontainer'>
    <div className="adminhomeleft">
        <img className='homeimg' src={homeimg} alt="" />
    </div>
    <div className="adminhomeright">
    <div className='adminloginbox'>
       <div className='headingh2homepage'>
              <h2 className='homepageh2'>Admin Login</h2>
              </div>
      <div className='logindata'>
        <form onSubmit={subitform}>
          <div className='registrationBox'>
        <label>User name</label>
          <input placeholder='Enter your username' id='username' type="text" className='form-control' required />
          <label>Password</label>
          <input placeholder='Enter your password' id='password' type="password" className='form-control' required />
          </div>
          <div id='loginbutton'>
            <div className='singnuplink'>
            <button className='btn btn-primary' type="submit">Login</button>
            </div>
          </div>
        </form>
     </div>
    </div>
  </div>
</div>
)
}

export default Adminlogin