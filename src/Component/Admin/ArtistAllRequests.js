import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import "../Admin/AdminAllrequest.css"

function ArtistAllRequests() {
  const [users, setUsers] = useState([]);
  const [details, setDetails] = useState([])
  const [detail, setDetail] = useState([])
  const navigate=useNavigate()

  const getAllArtistReqs = () => {
    axios.post('http://localhost:4001/requestartist')
      .then((result) => {
        console.log(result)
        setDetails(result.data.data)
        console.log(result.data.data)

      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {

    getAllArtistReqs()


  }, []);
  const approveartist = (id) => {
    axios.post(`http://localhost:4001/approveartist/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Approved")
          navigate('/adminviewartist')
          getAllArtistReqs()
        }
        if (res.data.status == 400) {
          alert(res.data.msg)
        }
      })
      .catch((err) => {
        console.log(err);
        alert("approved Failed")
      })
  }
  // axios.post('http://localhost:4001/')
  //   .then((result) => {
  //     console.log(result)
  //     setDetail(result.data.data)
  //     console.log(result.data.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })

  const handleReject = (id) => {
    axios.post(`http://localhost:4001/rejectartist/${id}`)
        .then(response => {
            // Update UI after rejection
            setDetails(detail.filter(artist => artist._id !== id));
        })
        .catch(error => {
            console.log('Error rejecting artist', error);
        });
};

  return (
    <div>
      
      
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {details.map((a) => (
        <div className="col" key={a._id}>
          <div className="cardrequest" style={{ width: "20rem", textAlign: "center" }}>
            <div className="requestcard">
              <p className="card-text"><b>{a.firstname}</b></p>
              <p className="card-text">
                <img
                  src={`http://localhost:4001/${a.image?.filename}`}
                  className="requestuserimage"
                  alt="User"
                  style={{ width: "300px", height: "300px" }}
                />
              </p>
              <p className="card-text">Password: {a.password}</p>
              <p className="card-text">Email: {a.email}</p>
              <p className="card-text">DOB: {a.DOB}</p>
              <p className="card-text">Age: {a.age}</p>
              <p className="card-text">Address: {a.address}</p>
              <button
                onClick={() => approveartist(a._id)}
                className="btn btn-primary"
                type="button"
              >
                Approve Request
              </button>
              <button onClick={() => handleReject(a._id)}>Reject</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  )
}

export default ArtistAllRequests