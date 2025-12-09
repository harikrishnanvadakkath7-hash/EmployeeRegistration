import React, { useState, useEffect } from "react";
import "./Employeedata.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Employeedata() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate()
    const empid = localStorage.getItem("employeeID")
    useEffect(() => {
        if(!empid)
            {
                navigate("/")
        }
        axios
            .get("http://localhost:3002/finddata")
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);
    function likeupdate(likegotid)
    {
        axios.post("http://localhost:3002/addlikedata",{likegot:likegotid , likegiven:empid})
        .then((res) =>
        {
            setEmployees(res.data)
        })
        .catch((err)=>
        {
            console.log(err)
        });
    }
    return (
        <div className="containeruserwelcome">
            <div>
                <h2>Employee List</h2>

                <table  className="employee-table">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Designation</th>
                            <th>View</th>
                            <th>Like</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp._id}>
                                <td>{emp.firstname}</td>
                                <td>{emp.lastname}</td>
                                <td>{emp.email}</td>
                                <td>{emp.contact}</td>
                                <td>{emp.designation}</td>
                                <td><Link to = {`/viewemp/${emp._id}`}><button >View</button></Link></td>
                                <td> <button onClick={()=>likeupdate(emp._id)}>Like</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Employeedata;
