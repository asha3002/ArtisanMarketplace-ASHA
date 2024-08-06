import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "./AdminDashboard.css"
import img from "../Assets/bg2.jpg"
import Adminpage from './Adminpage'
import { Icon } from '@iconify/react';
import artIcon from '@iconify-icons/dashicons/art';

import { FaSignOutAlt } from 'react-icons/fa';

function AdminDashboard() {
  const navigate = useNavigate()
  const [readerid, setReaderid] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("adminid");
    setReaderid(null);
    navigate("/adminlogin")
  };

  return (
    <div className='adminpage'>
      {/* <img src={img}/> */}
        <nav>
          <div className="sidebar">
            <div className="avatar"></div>
            <ul className="sidebar-list">
            <div className='sidebar-logo'>
            {/* <Icon icon="dashicons:art" className="sidebar-logo-icon" /> */}
            <Icon icon={artIcon} className="sidebar-logo-icon" />
            <h1>Handizen</h1>
            <p>The art of connection</p>
          </div>
              <li><a href="/adminviewusers">Users</a></li>
              <li><a href="/adminviewartist">Artists</a></li>

              <li><a href="/adminviewartworks">Artworks</a></li>
              <Link to='/adminviewrequest'>  <button type='button' className='requestbtn'>  Requests</button></Link><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <li>
                <button className='adminlogout' onClick={handleLogout}><FaSignOutAlt></FaSignOutAlt>Logout</button>
              </li>
            </ul>
          </div>




        </nav>
      

    </div>
  )
}

export default AdminDashboard