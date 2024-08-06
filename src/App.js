import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Homepage from './Component/Home/Homepage';
import Footer from './Component/Footer/Footer';
import Usernav from './Component/Navbar/Usernav';
import Userlogin from './Component/Users/Userlogin';
import Userregistration from './Component/Users/Userregistration';
import Adminlogin from './Component/Admin/Adminlogin';
import Artistlogin from './Component/Artist/Pages/Artistlogin';
import Artistregistration from './Component/Artist/Pages/Artistregistration';
import AdminDashboard from './Component/Admin/AdminDashboard';
import Adminpage from './Component/Admin/Adminpage';
import AdminViewUser from './Component/Admin/AdminViewUser';
import AdminIndividualviewUser from './Component/Admin/AdminIndividualviewUser';
import ArtistProfile from './Component/Artist/Pages/ArtistProfile';
import ArtistSidebar from './Component/Artist/Pages/ArtistSidebar';
import Artistartworks from './Component/Artist/Pages/Artistartworks';
import About from './Component/Users/UserPages/About';
import Userforgotpassword from './Component/Users/Userforgotpassword';
import Shop from './Component/Users/UserPages/Shop';
import AdminViewArtist from './Component/Admin/AdminViewArtist';
import AdminIndividualViewArtist from './Component/Admin/AdminIndividualViewArtist';
import Contact from './Component/Users/UserPages/Contact';
import ArtistAllRequests from './Component/Admin/ArtistAllRequests';
import AdminViewArtworks from './Component/Admin/AdminViewArtworks';
import ArtistDashboard from './Component/Artist/Pages/ArtistDashboard';
import UserLoginedNav from './Component/Navbar/UserLoginedNav';
import UserHome from './Component/Home/UserHome';
import AdminMain from './Component/Admin/AdminMain';
import AdminViewArtistRequests from './Component/Admin/AdminViewArtistRequests';
import Userprofile from './Component/Users/UserPages/Userprofile';
import Gallery from './Component/Users/UserPages/Gallery';
import ViewDetailscard from './Component/Users/UserPages/ViewDetailscard';

function App() {
  return (
    <BrowserRouter>
  
    <div>
<Routes>

  {/* admin */}
<Route path="/adminlogin" element={[<Adminlogin/>]}/>
<Route path="/admindashboard" element={[<AdminDashboard/>]}/>
<Route path="/adminhome" element={[<Adminpage/>]}/>

<Route path="/adminviewusers" element={[<AdminViewUser/>]}/>
<Route path='/adminindiviaualviewuser/:id' element={[<AdminIndividualviewUser/>]}/>
<Route path="/adminviewartist" element={[<AdminViewArtist/>]}/>
<Route path='/adminindividualviewartist/:id' element={[<AdminIndividualViewArtist/>]}/>
<Route path='/artistrequest' element={<ArtistAllRequests/>}/>
<Route path='/adminviewartworks' element={<AdminViewArtworks/>}/>
<Route path='/adminmain' element={<AdminMain/>}/>
<Route path='/adminviewrequest' element={<AdminViewArtistRequests/>}/>







  <Route path='/navbar' element={<Usernav/>}/>
<Route path="/home" element={[<Usernav/>,<Homepage/>,<Footer/>]}/>
<Route path='/userhome' element={[<UserHome/>]}/>
<Route path="/footer" element={<Footer/>}/>

{/* user */}
<Route path='/userlogin' element={[<Usernav/>,<Userlogin/>,<Footer/>]}/>
<Route path='/userreg' element={[<Usernav/>,<Userregistration/>,<Footer/>]}/>
<Route path='/about' element={[<Usernav/>,<About/>,<Footer/>]}/>
<Route path='/contact' element={[<UserLoginedNav/>,<Contact/>,<Footer/>]}/>
<Route path='/loginednav' element={[<UserLoginedNav/>]}/>
<Route path='/userforgotpassword' element={[<Usernav/>,<Userforgotpassword/>,<Footer/>]}/>
<Route path='/shop' element={[<Usernav/>,<Shop/>,<Footer/>]}/>
<Route path='/userprofile/:id' element={[<UserLoginedNav/>,<Userprofile/>,<Footer/>]}/>
<Route path='/gallery' element={[<UserLoginedNav/>,<Gallery/>,<Footer/>]}/>
<Route path='/viewdetailscard' element={[<UserLoginedNav/>,<ViewDetailscard/>,<Footer/>]}/>



    

{/* Artist */}
<Route path='/artistlogin' element={[<Usernav/>,<Artistlogin/>,<Footer/>]}/>
<Route path='/artistreg' element={[<Usernav/>,<Artistregistration/>,<Footer/>]}/>
<Route path='/artistprofile' element={[<Usernav/>,<ArtistProfile/>,<Footer/>]}/>
<Route path='/artistsidebar' element={[<ArtistSidebar/>]}/>
<Route path='/artistartworks' element={[<Artistartworks/>]}/>
<Route path='/artistdashboard' element={<ArtistDashboard/>}/>





</Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App;
