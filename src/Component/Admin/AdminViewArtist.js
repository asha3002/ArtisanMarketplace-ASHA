import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./AdminViewArtist.css"
import { Link, useNavigate } from 'react-router-dom'
import AdminDashboard from './AdminDashboard';

function AdminViewArtist() {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);





  useEffect(() => {


    axios.post('http://localhost:4001/approverequest')
        .then((result) => {
      console.log(result);
      setUsers(result.data.data);
      console.log(result.data.msg);

    })

      .catch((error) => {
        console.log(error);
      })


  }, []);
  return (
    <div>
      <AdminDashboard />


      <div class="container">


        <div class="content">
          <h1 className='artistlabel'>Artists</h1>
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
                {/* <th>Approve</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>


                  <td><Link to={`/adminindividualviewartist/${user._id}`}>click here for further details...</Link></td>
                  {/* <button type='button' className='btn btn-outline-warning'>Requests</button> */}
                </tr>
              ))}
              {/* <!-- Populate this with your user data --> */}
            </tbody>
          </table>
        </div>
      </div>



    </div>
  )
}

export default AdminViewArtist