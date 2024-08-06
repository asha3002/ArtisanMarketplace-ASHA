import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./AdminDashboard.css"

function Adminpage() {
  const [user, setUser] = useState([])
  const [artist, setArtist] = useState([])
  const [artwork, setArtwork] = useState([])

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post("http://localhost:4001/approverequest")
        console.log(response)
        // console.log("Artist response data:", response.data.data);
        setArtist(response.data.data)
        // console.log("Artist count in state:", response.data.data.length);
      }
      catch (error) {
        console.error("Error fetching", error)
      }
    }
    fetchDetails()
  }, [])
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post("http://localhost:4001/viewuser")
        console.log(response)
        setUser(response.data.msg)
      }
      catch (error) {
        console.error("Error fetching", error)
      }
    }
    fetchDetails()
  }, [])
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.post("http://localhost:4001/viewartworks  ")
        console.log(response)
        setArtwork(response.data.msg)
      }
      catch (error) {
        console.error("Error fetching", error)
      }
    }
    fetchDetails()
  }, [])
  return (
    <div>
     
      <div className="countcard-container">

        <div class="main-content">
          <div className="card-wrapper">
            <div class="card1totaluser">
              <h3>Total Users</h3>

              {user.length ? (
                <h3>{user.length}</h3>
              ) : (
                <h3>No Data</h3>
              )}

            </div>&nbsp;&nbsp;
            <div className="card1totaluser">
              <h3>Total Artists</h3>
              <h3>{artist.length || 'No Data'}</h3>
            </div>&nbsp;&nbsp;
            {/* <div class="card1totaluser">
              <h3>Total Artists</h3>
              {artist.length ? (
                <h3>{artist.length}</h3>
              ) : (
                <h3>No Data</h3>
              )}

            </div> */}
            <div class="card1totaluser">
              <h3>Total Artworks</h3>
              {artwork.length ? (
                <h3>{artwork.length}</h3>
              ) : (
                <h3>No Data</h3>
              )}
            </div>
          </div>
         
        </div>
      </div>

    </div>
  )
}

export default Adminpage