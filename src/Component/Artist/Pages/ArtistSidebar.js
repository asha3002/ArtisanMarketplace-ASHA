import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import "../Pages/ArtistSidebar.css"
import { Icon } from '@iconify/react';
import artIcon from '@iconify-icons/dashicons/art';
import axios from 'axios';


function ArtistSidebar() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.post(`http://localhost:4001/viewoneartist/${id}`)
      .then(result => {
        setUser(result.data.msg);
      })
      .catch(err => {
        console.log('There was an error', err);
        setUser({});
      });
  }, [id]);


  return (
    <div>
      <div id="wrapper">
        <div id="sidebar-wrapper">
          

          <ul className="sidebar-nav" id="menu">
          <div className='sidebar-logo'>
            {/* <Icon icon="dashicons:art" className="sidebar-logo-icon" /> */}
            <Icon icon={artIcon} className="sidebar-logo-icon" />
            <h1>Handizen</h1>
            <p>The art of connection</p>
          </div>
            <li className="active">
              <Link to="/artist_orders"></Link>
            </li>
            <li>
              <Link to="/artistartworks">Works</Link>
            </li>
            {/* <li>
              <Link to={`/artistprofile/${user?._id}`}>Profile</Link>
            </li> */}
            <li>
              {/* <Link to="/artist_chatmainpage">Chat</Link> */}
            </li>
            <li>
              <Link to='/artistlogin'>Logout</Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default ArtistSidebar