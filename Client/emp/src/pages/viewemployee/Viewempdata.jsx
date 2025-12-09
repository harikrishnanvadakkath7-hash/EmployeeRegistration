import React, { useState, useEffect } from "react";
import "./Viewempdata.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Viewempdata() {
    const navigate = useNavigate()
    const empid = localStorage.getItem("employeeID");
    const { id } = useParams();
    const [data , setData] = useState({})
    useEffect(() => {
        if(!empid)
        {
           navigate("/"); 
        }
        axios
            .get(`http://localhost:3002/findempbyid/${id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
            },[]);
    
    return (
        <div className="containeruserwelcome">
            <div>
                <h2>Employee Details</h2>
                <p>{data.firstname} {data.lastname}</p>
            </div>
        </div>
    );
}

export default Viewempdata;
