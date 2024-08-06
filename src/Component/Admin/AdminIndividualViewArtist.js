import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ArtistSidebar from '../Artist/Pages/ArtistSidebar'
import AdminDashboard from './AdminDashboard'

function AdminIndividualViewArtist() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios.post(`http://localhost:4001/viewoneartist/${id}`)
      .then(response => {
        console.log(response);
        setUser(response.data.msg);
      })
      .catch(error => {
        console.error('There was an error', error);
      });
  }, [id]);

  const deletefunc = (() => {
    axios.post(`http://localhost:4001/deleteartist/${id}`)
      .then((result) => {
        console.log(result)



        alert("delete successfull")
        navigate('/adminviewartist')


      })
      .catch((error) => {
        console.log(error)
      })
  })
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
        <button className='btn btn-primary' onClick={deletefunc}>Remove</button>
      </div>
    </div>
  )
}

export default AdminIndividualViewArtist