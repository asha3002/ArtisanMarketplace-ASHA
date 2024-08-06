import React, { useState, useEffect } from 'react'
import { FaAccusoft, FaLock, FaUser, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import "./Navbar.css"
import { useParams, Link, useNavigate } from 'react-router-dom';


function UserLoginedNav() {
  const [user, setUser] = useState({})
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  // const { id } = useParams();
  const navigate = useNavigate()

  
  useEffect(() => {
    const userId = localStorage.getItem('userId')
    console.log("ppp");
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post(`http://localhost:4001/viewoneuser/${userId}`);
        console.log(response);
        setUser(response.data.msg);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };
    fetchUserProfile();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/userlogin');
  };


  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid d-flex justify-content-between">
          <span className="navbar-brand mb-0 h1 brndname">HandiZen</span>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            &#9776;
          </button>
          <div className={`nav-items ${menuVisible ? 'active' : ''}`}>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active navcontent" to="/userhome">Home</Link>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link navcontent" to="/about">About us</Link>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link navcontent" to="/contact">Contact</Link>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <Link className="nav-link navcontent" to="/gallery">Gallery</Link>
              </li>
            </ul>
            {user && user.image && (
              <div className="profile-container">
                <li className="nav-item loginprofileimg">
                  <img
                    src={`http://localhost:4001/${user.image?.filename}`}
                    alt={`${user.firstname} ${user.lastname}`}
                    className="profile-img"
                    onClick={toggleDropdown}
                  />
                  {dropdownVisible && (
                    <div className="dropdown-menu show">
                      <Link className="dropdown-item" to={`/userprofile/${user?._id}`}>Profile</Link>
                      <Link className="dropdown-item" to="">Dashboard</Link>
                      <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </li>
              </div>
            )}
          </div>
        </div>
      </nav>

      
    </div>
  )
}

export default UserLoginedNav