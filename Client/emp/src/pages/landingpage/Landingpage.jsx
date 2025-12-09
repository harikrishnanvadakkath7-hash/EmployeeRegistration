import React,{useState,useEffect} from 'react'
import './Landingpage.css'
import landimg from '../../assets/employee2.jpg'
import {Link , useNavigate} from 'react-router-dom'
import Headpart from '../../components/Headpart'
function Landingpage()
{
  return(
<div className='containerlandingpage'>
    
<div>
   <img className='landingimg' src={landimg} alt="" /> 

</div>
<div className='contentlandingpage'>
    <div className='heading'>
    <h2 className='landingpageheadingh1'>Welcome to</h2>
    <h1 className='landingpageheadingh2'>Staffly</h1>
    </div>
</div>
</div>
)
}

export default Landingpage