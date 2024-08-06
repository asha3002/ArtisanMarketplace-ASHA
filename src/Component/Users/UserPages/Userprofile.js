import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Userprofile.css"
import { useParams } from 'react-router-dom';

function Userprofile() {
    const [user, setUser] = useState({});
    const { id } = useParams();
   
    const userid=localStorage.getItem("userid")
    console.log(userid);

    useEffect(() => {
        axios.post(`http://localhost:4001/viewoneuser/${id}`)
            .then(result => {
                console.log(result);
                setUser(result.data.msg);
            })
            .catch(err => {
                console.log('There was an error', err);
                setUser({});
            });
    }, [id]);
    
    return (
        <div>
            <div class="card">
               
                <div class="card-body" className='Userprofilehomeimage'>
                    <h5 class="card-title" className='userprofileheading'>PROFILE</h5>
                    
                </div>
            </div>
            <hr></hr>
            <div className="userprofiledetailcard">
                <div className="profile-header">
                    {/* Debugging: Check if the image URL is correct */}
                    {user?.image && <img src={`http://localhost:4001/` + user?.image.filename} alt={`${user.firstname} ${user.lastname}`} />}
                    <h1 className='userprofileheadingname'>{`${user?.firstname} ${user?.lastname}`}</h1>
  
                </div>
                <div className="profile-details">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                </div>
                {/* <button onClick={deletefunc}>Remove</button> */}
            </div>
            <hr></hr>
        </div>
    )
}

export default Userprofile