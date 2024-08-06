import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AdminDashboard from './AdminDashboard';
import "../Admin/Adminviewartworks.css"

function AdminViewArtworks() {
  const [artworks, setArtworks] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('http://localhost:4001/viewartworks');
        console.log(response);
        setArtworks(response.data.data);
      } catch (err) {
        console.log('Error fetching users', err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <AdminDashboard />
      <div class="container">

        <div class="content">
          <h1 className='artistlabel'>Artworks</h1>
          <table striped
            bordered
            hover
            className="mt-3 ms-9"
            style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Rate</th>
                <th>Product Image</th>
                <th>Artist Name</th>
                <th>Artist Profile</th>

              </tr>
            </thead>
            <tbody>
              {artworks?.length ? (
                artworks.map((artwork, index) => (
                  <tr key={artwork?._id}>
                    <td>{index + 1}</td>
                    <td>{artwork?.name}</td>
                    <td>{artwork?.rate}</td>
                    <td>
                      {artwork?.productimage && artwork?.productimage?.filename && (
                        <img
                          src={`http://localhost:4001/${artwork?.productimage?.filename}`}
                          alt={`${artwork.name}`}
                          style={{ height: '100px', width: '100px' }}
                        />
                      )}
                    </td>
                    <td>
                      {artwork.artistid?.firstname}</td>
                      <td>
                      {artwork.artistid?.image?.filename && (
                        <img
                        className="adminviewartworkartistimage"
                          src={`http://localhost:4001/${artwork?.artistid?.image.filename}`}
                          alt={`${artwork.artistid?.firstname}`}
                          style={{ height: '100px', width: '100px' }}
                        />
                      )}
                    </td>
                   
                   
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No artworks available</td>
                </tr>
              )}
              {/* <!-- Populate this with your user data --> */}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminViewArtworks