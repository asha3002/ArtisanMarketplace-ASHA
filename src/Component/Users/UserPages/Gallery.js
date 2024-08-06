import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "../UserPages/Gallery.css"

function Gallery() {
    const [artworks, setArtworks] = useState([]);
    
    

    
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
            <div class="card">

                <div class="card-body" className='Userprofilehomeimage'>
                    <h5 class="card-title" className='userprofileheading'>GALLERY</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <p className='galleryquote'>

"Discover an exquisite collection of artworks, each piece uniquely crafted by our talented artists. Dive into the vibrant world of creativity and explore the stories behind every masterpiece."</p>
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
                        <div className="artist-info">
                            {artwork.artistid && (
                                <>
                                    <img
                                        src={`http://localhost:4001/${artwork.artistid.image.filename}`}
                                        alt={`${artwork.artistid.firstname} ${artwork.artistid.lastname}`}
                                        className="artist-image"
                                    />
                                    <p className="artist-name">{`${artwork.artistid.firstname} ${artwork.artistid.lastname}`}</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Gallery