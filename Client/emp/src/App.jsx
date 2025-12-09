import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './pages/homepage/Homepage'
import EmpRegistration from './pages/registration/EmpRegistration'
import Adminlogin from './pages/admin/Adminlogin'
import Headpart from './components/Headpart'
import Landingpage from './pages/landingpage/Landingpage'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Userprofile from './pages/userprofile/Userprofile'
import Homepagehead from './components/Homepagehead'
import Userhomepagehead from './components/Userhomepagehead'
import Employeedata from './pages/employeedata/Employeedata'
import Loginuserprofile from './pages/loginuserprofile/Loginuserprofile'
import Viewempdata from './pages/viewemployee/Viewempdata'
import Registrationhead from './components/Registrationhead'
import EmpDetailshead from './components/EmpDetailshead'
import LongInuserData from './components/LongInuserData'
import Loginuserhead from './components/Loginuserhead'
import Adminloginhead from './components/Adminloginhead'
import Adminsdashboard from './pages/admin/Adminsdashboard'
import Admindashboardhead from './components/Admindashboardhead'
import Singleempdata from './pages/admin/Singleempdata'
import Empdetails from './pages/admin/Empdetails'
import Adminprofile from './pages/admin/Adminprofile'
import Adminnotification from './pages/admin/Adminnotification'
function App()
{
    return(
<BrowserRouter>
<Routes>
<Route path='/' element={[<Homepagehead/>,<Homepage/>]}></Route>
<Route path='/registration' element={[<Registrationhead/>,<EmpRegistration/>]}></Route>
<Route path='/adminlogin' element={[<Adminloginhead/>,<Adminlogin/>]}></Route>
<Route path='/userprofile' element={[<Userhomepagehead/>,<Userprofile/>]}></Route>
<Route path='/home' element={[<Homepagehead/>,<Landingpage/>]}></Route>
<Route path='/empdetails' element={[<EmpDetailshead/>,<Employeedata/>]}></Route>
<Route path='/loginuser' element={[<Loginuserhead/>,<Loginuserprofile/>]}></Route>
<Route path='/viewemp/:id' element={[<LongInuserData/>,<Viewempdata/>]}></Route>
<Route path='/admindshboard' element={[<Admindashboardhead/>,<Adminsdashboard/>]}></Route>
<Route path='/singleemp/:id' element={[<Admindashboardhead/>,<Singleempdata/>]}></Route>
<Route path='/allemp' element={[<Admindashboardhead/>,<Empdetails/>]}></Route>
<Route path='/adminprofile' element={[<Admindashboardhead/>,<Adminprofile/>]}></Route>
<Route path='/notification' element={[<Admindashboardhead/>,<Adminnotification/>]}></Route>
</Routes>
</BrowserRouter>
)
}
export default App
