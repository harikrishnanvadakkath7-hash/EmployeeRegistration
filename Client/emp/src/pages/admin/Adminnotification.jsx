import React, { useState, useEffect } from "react";
import "./Adminnotification.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Adminnotification() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3002/findliked")
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="notificationpage">
            <div className="notificationhead">
              <h2 className="notificationh2">Notification</h2>  
            </div>
            <div className="notificationcontent">
            <div className='dashboardcontent'>
                <div className='leftdashboardnotification'>
                    <div className='dashboard1'>
                        <p className='dash1'>Dashboard</p>
                    </div>
                    <div className='dashboard3'>
                        <Link to='/admindshboard'><p className='dash3'>Home</p></Link>
                    </div>
                </div>
            </div>
            <div className="adminnotification2">
                <div className="card w-75 mb-3 notificationcard">
                    <div className="card-body">
                        <h5 className="card-title notificationtxt"></h5>
                        {employees.map((emp) => (
                            <p className="card-text notification notificationbox" key={emp._id}>
                                {emp.likegiven.firstname} likes {emp.likegot.firstname}'s profile.
                            </p>
                        ))}

                    </div>
                </div>


            </div>
            </div>
        </div>
    );
}

export default Adminnotification;
