import React,{useState,useEffect} from 'react'
import '../registration/EmpRegistration.css'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
function EmpRegistration()
{
const [data , setData] = useState({firstname:"",lastname:"",email:"",contact:"",regimage:"",designation:"",regusername:"",regpassword:""})
const [error, setError] = useState({});
const navigate = useNavigate();

  function validateForm() {
    let valid = true;
    let newErrors = {};
    if (!data.firstname) {
      newErrors.firstname = "Enter a valid First Name";
      valid = false;
    }
    if (!data.lastname) {
      newErrors.lastname = "Enter a valid Last Name";
      valid = false;
    }
    if (!data.regusername) {
      newErrors.regusername = "Enter a valid Username";
      valid = false;
    }
    if (!data.regpassword) {
      newErrors.regpassword = "Enter a valid Password";
      valid = false;
    }
    if (!data.email) {
      newErrors.email = "Enter a valid Email";
      valid = false;
    }
    if (!data.contact) {
      newErrors.contact = "Enter a Contact Number";
      valid = false;
    }
    if (!data.designation) {
      newErrors.designation = "Enter your designation";
      valid = false;
    }
     if (!data.regimage) {
      newErrors.regimage = "Upload an Image";
      valid = false;
    }

    setError(newErrors);
    return valid;
  }
  function handlechange(e) {
    const { name, value , type } = e.target 
    if(type=="file")
    {
      setData((data) => ({
      ...data,
      [name]: e.target.files[0]
    }));
    }
    else
    {
      setData((data) => ({
      ...data,
      [name]: value
    }));
    }
  }
function submitregform(event) {
  const formdata = new FormData()
  formdata.append("firstname",data.firstname)
  formdata.append("lastname",data.lastname)
  formdata.append("email",data.email)
  formdata.append("contact",data.contact)
  formdata.append("regimage",data.regimage)
  formdata.append("designation",data.designation)
  formdata.append("regusername",data.regusername)
  formdata.append("regpassword",data.regpassword)
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // console.log("Form Submitted");
      // console.log("fname:", data.firstname, "lname:", data.lastname,"username:", data.regusername, "password:", data.regpassword);

      // Save data to localStorage
      // localStorage.setItem("employeeusername", data.regusername);
      // localStorage.setItem("employeepassword", data.regpassword);

      // alert("Registration successful!");
      axios.post("http://127.0.0.1:3002/adduserdata",formdata).then((result)=>
        {
          if(result.status==200) 
          {
            alert(result.data.message) , navigate("/emphomepage");
          } 
      else
        {
          alert("Error")
        }
      }).catch((error)=>{console.log(error)})
      setError({});

      
    } else {
      console.log("Error in Validating Form");
    }
  }

return(
<div className='containertregistration'>
    <div className="container text-center">
        <div className='regpage'>
          <div className='datarow'>
    <div className="row datarow">
    <div className='data'>
        <form   onSubmit={submitregform}>
      <h2>Employee Register</h2>
      <div className='regdata'>
        <label>First name</label>
        <input placeholder='Enter your First name' id='firstname' type="text" className='form-control' name='firstname' onChange={(e) => handlechange(e)} />
        <p className='errorpara'>{error.firstname}</p>
        <label>Last name</label>
        <input placeholder='Enter your Last name' id='lastname' type="text" className='form-control' name='lastname'  onChange={(e) => handlechange(e)}/>
        <p className='errorpara'>{error.lastname}</p>
        <label>Email</label>
        <input placeholder='Enter your username' id='regemail' type="email" className='form-control' name='email'  onChange={(e) => handlechange(e)}/>
        <p className='errorpara'>{error.email}</p>
        <label>Contact</label>
        <input placeholder='Enter your username' id='regcontact' type="number" className='form-control' name='contact'  onChange={(e) => handlechange(e)}/>
        <p className='errorpara'>{error.contact}</p>
        <label>Image</label>
        <input placeholder='Enter your username' id='regimage' type="file" className='form-control' name='regimage'  onChange={(e) => handlechange(e)}/>
        <p className='errorpara'>{error.regimage}</p>
        <label>Designation</label>
        <input placeholder='Enter your username' id='regdesignation' type="text" className='form-control' name='designation'  onChange={(e) => handlechange(e)}/>
        <p className='errorpara'>{error.designation}</p>
        <label>User name</label>
        <input placeholder='Enter your username' id='regusername' type="text" className='form-control' name='regusername'  onChange={(e) => handlechange(e)}/>
        <p className='errorpara'>{error.regusername}</p>
        <label>Password</label>
        <input placeholder='Enter your Password' id='regpassword' type="password" className='form-control' name='regpassword'  onChange={(e) => handlechange(e)}/>
        <p className='errorpara'>{error.regpassword}</p>
        <div className='createbtnreg'>
         <button className='btn btn-primary' type="submit">Create Account</button> <br />
        </div>
        <div className='cancelbtnreg'>
        <Link to="/"><button className='btn btn-primary' type="button">Cancel</button></Link>
       </div>
       </div>
        </form>
     </div>
    </div>
    </div>
  </div>
  </div>
</div>
)
}

export default EmpRegistration