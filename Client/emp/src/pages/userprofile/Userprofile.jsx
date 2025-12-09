import React,{useState,useEffect} from 'react'
import './Userprofile.css'
import landimg from '../../assets/construction3.jpg'
import {Link , useNavigate} from 'react-router-dom'
function Userprofile()
{
  const navigate = useNavigate()
  const empid = localStorage.getItem("employeeID");
  useEffect (()=>
  {
     if(!empid)
     {
      navigate("/");
     }
  })
  return(
<div className='containeruserwelcome'>
    
<div className='userwelcomeleftside'>
   <img className='landingimg' src={landimg} alt="" /> 

</div>
<div className='userwelcomerightside'>
    <div className='heading'>
    <h2 className='userwelcomeheadingh1'>Welcome to</h2>
    <h1 className='userwelcomeheadingh2'>Staffly</h1>
    </div> <br />
    <div>
        <p className='welcomepara'>A digital workspace crafted for modern employees <br />
It brings together company news, HR services, and work tools. <br />
Teams can collaborate, plan projects, and access documents. <br />
The platform boosts engagement and keeps everyone connected.</p>
</div>
</div>
</div>
)
}
export default Userprofile
