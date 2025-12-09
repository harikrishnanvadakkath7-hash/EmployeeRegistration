import React, { useState, useEffect } from 'react'
import './Homepage.css'
import homeimg from '../../assets/construction2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Homepage() {
  const [data, setData] = useState({ empusername: "", emppassword: "" })
  const [error, setError] = useState({})
  const navigate = useNavigate();

  function validateform() {
    let valid = true;
    let newErrors = {};

    if (!data.empusername) {
      newErrors.empusername = "Enter a valid Username";
      valid = false;
    }
    if (!data.emppassword) {
      newErrors.emppassword = "Enter a valid Password";
      valid = false;
    }
    setError(newErrors);
    return valid;
  }
  function handlechange(e) {
    const { name, value } = e.target
    // Use spread operator to update only one field in state
    setData((data) => ({
      ...data,
      [name]: value
    }));
  }
  function SubmitRegform(event) {
    event.preventDefault();

    const isValid = validateform();

    if (isValid) {
      axios.post("http://127.0.0.1:3002/findemp", data).then((result) =>
         {
         if (result.data.status == 200) 
          { 
          alert(result.data.message)
          localStorage.setItem("employeeID", result.data.data._id);
          console.log(result.data.data);
          navigate("/userprofile"); 
        } 
        else 
          { alert("User not found !!") } 
        }).catch((error) => { console.log(error) })
      setError({});

    } else {
      alert("Error in Validating Form");
    }
  }
  return (

      <div className='containerhome'> 
      <div className='containerhomeleft'> 
            <img className='homeimg' src={homeimg} alt="" />
          </div>
          <div className='containerhomeright'>
            <div className='loginbox'>
              <div className='headingh2homepage'>
              <h2 className='homepageh2'>Employee Login</h2>
              </div>
              <div className='logindata'>
                <form onSubmit={SubmitRegform}>
                  <div className='registrationBox'>
                  <label>User name</label>
                  <input placeholder='Enter your username' id='username' type="text" className='form-control' name="empusername" onChange={(e) => handlechange(e)} />
                  <label>Password</label>
                  <input placeholder='Enter your password' id='password' type="password" className='form-control' name="emppassword" onChange={(e) => handlechange(e)} />
                  </div>
                  <div className='loginbutton'>
                    <button className='btn btn-primary' type="submit">Login</button>
                    </div>
                     <div className='singnuplink'>
                    <Link id='signup' to="/registration">Sign Up</Link> <br />
                  </div>
                </form>
              </div>
              </div>
          </div>
        </div>
  )
}
export default Homepage