import React, { useState, useEffect } from 'react'
import ArtistSidebar from './ArtistSidebar'
import axios from 'axios';
import "../Pages/Artistworks.css"
import { useNavigate, useParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";

function Artistartworks() {
  const [artworks, setArtworks] = useState([])
  const { id } = useParams();
  const artistId = localStorage.getItem('artistid')
  const [data, setData] = useState({ name: '', rate: '', productimage: '',artistid:artistId })


  const func1 = (b) => {
    const { name, value, files } = b.target;
    if (b.target.name === "image") {

      setData({ ...data, productimage: b.target.files[0] });
    } else {
      setData({ ...data, [b.target.name]: b.target.value })
    }
  }
 

  const submitfn = (Event) => {
    Event.preventDefault()
    console.log("save")

    // axios.post("http://localhost:4001/addusers",data)
    axios.post("http://localhost:4001/addartworks", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then((result) => {
        console.log(result)
        if (result.data.status == 200) {
          alert("Product added successfully")
          setArtworks([...artworks, result.data.product]);
        }
      })
      .catch((err) => {
        console.log(err)
      })


    // console.log("Save")
  }

  useEffect(() => {
    axios.post(`http://localhost:4001/viewartworkbyartistid/${artistId}`)
      .then(response => {
        console.log("res",response.data);
        setArtworks(response.data.data);
      })
      .catch(err => {
        console.log('There was an error', err);
      });
  }, [artistId]);



  const deletefunc = (id) => {
    axios.post(`http://localhost:4001/deleteartworks/${id}`)
      .then((result) => {
        if (result.data.status === 200) {
          alert("Product deleted successfully");
          setArtworks(artworks.filter(artwork => artwork._id !== id));
          setData({ name: '', rate: '', productimage: '' });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="ArtistWorks">
        <div className="row">
          <div className="col-2">
            <ArtistSidebar />
          </div>

          <div className="col-10 works">
            <div className="works-form">
              <h1>Add Works</h1>
              <form onSubmit={submitfn} className='artworkform'>
                <div className="works-input">
                  <input
                    type="text"
                    className='artworkinput'
                    placeholder="Art Name"
                    name="name"
                    value={data.name}
                    onChange={func1}
                    required
                  />
                </div><br></br>
                <div className="works-input">
                  <input
                    type="number"
                    className='artworkinput'
                    placeholder="Price"
                    name="rate"
                    value={data.rate}
                    onChange={func1}
                    required
                  />
                </div><br></br>
                <div className="works-files">
                  <input
                    type="file"
                    className='artworkinput'
                    name="image"
                    onChange={func1}
                    required
                  />
                </div><br></br>
                <div className="works-btn">
                  <button type="submit" className='artworkaddbtn'>ADD</button>
                </div>
              </form>
            </div><br
            ></br>

            <div className="works-list">
              <h1>WORKS LIST</h1>

              <div className="works-table">
                <table
                  striped
                  bordered
                  hover
                  className="mt-5 ms-3"
                  style={{ width: "100%" }}
                >
                  <thead style={{ height: "50px" }}>
                    <tr>
                      <th>SL</th>
                      <th>Work</th>
                      <th>Price</th>
                      <th>Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    {artworks.map((artwork, index) => (
                      <tr key={artwork._id}>
                        <td>{index + 1}</td>
                        <td>{artwork.productimage && artwork.productimage.filename && (<img src={`http://localhost:4001/` + artwork.productimage?.filename} alt={`${artwork.name}`} style={{ height: '200px', width: "200px" }} />)}</td>
                        <td>{artwork.rate}</td>
                        <td>{artwork.name}</td>
                        <td>
                          <button onClick={() => deletefunc(artwork._id)} className='artworkremovebtn'>Remove</button>
                        </td>
                        <td>
                        </td>
                      </tr>
                    ))}
                  </tbody> */}
                  <tbody>
                    {Array.isArray(artworks) && artworks.map((artwork, index) => (
                      <tr key={artwork._id}>
                        <td>{index + 1}</td>
                        <td>{artwork.productimage && artwork.productimage.filename && (
                          <img src={`http://localhost:4001/` + artwork.productimage?.filename} alt={`${artwork.name}`} style={{ height: '200px', width: "200px" }} />
                        )}</td>
                        <td>{artwork.rate}</td>
                        <td>{artwork.name}</td>
                        <td>
                          <button onClick={deletefunc} className='artworkremovebtn'>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>







      </div>
    </div>
  )
}

export default Artistartworks