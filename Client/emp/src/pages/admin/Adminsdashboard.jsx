import '../admin/Adminsdashboard.css'
import adminimg from '../../assets/construction1.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Adminsdashboard()
{
    const nav = useNavigate();
    function adminlogout()
    {
        localStorage.removeItem("usernameadmin")
        localStorage.removeItem("passwordadmin")
        nav("/adminlogin")
        
    }
    return(
<div className="admindashcontainer">
    <div className='mainhead'>
      <h1 className='h1dash'>Welcome Admin </h1>
    </div>
     <div className='dashboardcontent'>
    <div className='leftdashboard'>    
    <div className='dashboard1'> 
        <p className='dash1'>Dashboard</p>  
    </div>
    <div className='dashboard3'> 
        <Link to = '/allemp'><p  className='dash3'>Employee details</p></Link>  
    </div>
     <div className='dashboard3'> 
        <Link to = '/notification'><p  className='dash3'>Notification</p></Link>  
    </div>
    <div className='dashboard4'> 
        <p onClick={adminlogout} className='dash4'>Logout</p>  
    </div>
     </div>
     <div className='rightdashboard'>
     <img className='imgdash' src={adminimg} alt="" />
     </div>
     </div>
     </div>
    )
}
export default Adminsdashboard