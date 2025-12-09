import React, { useState, useEffect } from "react";
import "./Empdetails.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Empdetails() {
    const [employees, setEmployees] = useState([]);

    function deleteuser(employeeid) {
        axios.post(`http://localhost:3002/deletedata/${employeeid}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        axios
            .get("http://localhost:3002/finddata")
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="containerempdata">
            <div className="employeelistheading">
                <h2 className="headingemplist">Employee List</h2>
            </div>
            <div className="contentpage">
            <div className="contentleft">
                <div className='leftdashboardnotification'>
                    <div className='dashboard1'>
                        <p className='dash1'>Dashboard</p>
                    </div>
                    <div className='dashboard3'>
                        <Link to='/admindshboard'><p className='dash3'>Home</p></Link>
                    </div>
                </div>
            </div>
            <div className="contentright">
                <table className="employee-table">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Designation</th>
                            <th>Delete</th>
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
                                <td> <button onClick={() => deleteuser(emp._id)}>Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default Empdetails;
