import React, { useState, useEffect } from 'react';
import './Loginuserprofile.css';
import landimg from '../../assets/construction3.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loginuserprofile() {
  const navigate = useNavigate()
  const [data, setData] = useState({})
  const empid = localStorage.getItem("employeeID");

  function apicall()
  {
        axios
      .get(`http://localhost:3002/findempbyid/${empid}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    apicall()
    if(!empid)
        {
           navigate("/")
        }
  }, []);


  return (
    <div className='containeruserwelcome'>
      <div className='userwelcomeleftside'>
        <img className='landingimg' src={landimg} alt="Landing" />
      </div>
      <div className='userwelcomerightside'>
        <div className='welcomemsg'>
          <div className='heading'>
            <h2 className='userwelcomeheadingh1'>Welcome </h2>
            <h1 className='userwelcomeheadingh2'>User</h1>
          </div>
          <div>
            <div className="containeruserwelcome">
              <div>
                <h2>Employee Details</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>Name :</td>
                      <td>{data.firstname + " " + data.lastname}</td>
                    </tr>
                    <tr>
                      <td>Email :</td>
                      <td>{data.email}</td>
                    </tr>
                    <tr>
                      <td>Contact :</td>
                      <td>{data.contact}</td>
                    </tr>
                    <tr>
                      <td>Designation :</td>
                      <td>{data.designation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginuserprofile;
