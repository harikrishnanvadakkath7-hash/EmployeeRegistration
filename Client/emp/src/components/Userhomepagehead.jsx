import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Userhomepagehead(){
  const navigate = useNavigate();
function logout()
{
  localStorage.removeItem("employeeID")
    navigate("/");
}

return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to ="/emphomepage" className="navbar-brand">Staffly</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/empdetails" className="nav-link" >Employee details</Link>
        </li>
        <li className="nav-item">
          <Link to= "/loginuser" className="nav-link">Profile</Link> 
        </li>
        <li className="nav-item">
          <a onClick={logout}  className="nav-link" href="#">Log out</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>)
}
export default Userhomepagehead