import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewDetailscard() {
    const[artworks,setArtworks]=useState
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.post('http://localhost:4001/viewartworkbyid');
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
         <div className="artworks-container">
                {artworks.map((artwork) => (
                    <div className="artwork-card" key={artwork._id}>
                        <img
                            src={`http://localhost:4001/${artwork.productimage.filename}`}
                            alt={artwork.name}
                            className="artwork-image"
                        />
                        <h2 className="artwork-name">{artwork.name}</h2>
                        <p className="artwork-rate">{artwork.rate}</p>
                        </div>
                        ))}
                        </div>
    </div>
  )
}

export default ViewDetailscard