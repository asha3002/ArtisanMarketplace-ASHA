import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./AdminIndividualviewUser.css"
import AdminDashboard from './AdminDashboard';
import { useParams, useNavigate } from 'react-router-dom';

function AdminIndividualviewUser() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const { id } = useParams();


  useEffect(() => {
    axios.post(`http://localhost:4001/viewoneuser/${id}`)
      .then(response => {
        console.log(response);
        setUser(response.data.msg);
      })
      .catch(error => {
        console.error('There was an error', error);
      });
  }, [id]);

  const deletefunc = (() => {
    axios.post(`http://localhost:4001/deleteusers/${id}`)
      .then((result) => {
        console.log(result)


        alert("delete successfull")
        navigate('/adminviewusers')


      })
      .catch((error) => {
        console.log(error)
      })
  })

  // Debugging: Check user object
  console.log('User object:', user);

  return (
    <div>
      <AdminDashboard />
      <div className="user-profile">
        <div className="profile-header">
          {/* Debugging: Check if the image URL is correct */}
          {user.image && <img src={`http://localhost:4001/` + user.image?.filename} alt={`${user.firstname} ${user.lastname}`} />}
          <h1>{`${user.firstname} ${user.lastname}`}</h1>

        </div>
        <div className="profile-details">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
        <button onClick={deletefunc}>Remove</button>
      </div>
    </div>
  )
}

export default AdminIndividualviewUser