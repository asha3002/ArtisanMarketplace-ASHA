import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import "../Admin/AdminViewuser.css"
import AdminDashboard from './AdminDashboard';

function AdminViewUser() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('http://localhost:4001/viewuser');
        console.log(response);
        setUsers(response.data.msg);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <AdminDashboard />
      <div class="table-container">
        {/* <div class="sidebar">
    <h2>User</h2>
    <ul>
      <li><a href="#">Artists</a></li>
      <li><a href="#">Delivery Agent</a></li>
    </ul>
  </div> */}
        <div class="content">
          <h1 className='artistlabel'>Users</h1>
          <table striped
            bordered
            hover
            className="mt-3 ms-9"
            style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>View More</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>


                  <td><Link to={`/adminindiviaualviewuser/${user._id}`}>click here for further details...</Link></td>
                </tr>
              ))}
              {/* <!-- Populate this with your user data --> */}
            </tbody>
          </table>
        </div>
      </div>


      {/* <div className="user-list">
        <h1>User</h1>
        <table striped
          bordered
          hover
          className="mt-5 ms-3"
          style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>


              <th>View More</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div> */}
    </div>
  )
}

export default AdminViewUser