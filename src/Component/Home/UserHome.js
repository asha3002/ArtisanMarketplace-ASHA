import React from 'react'
import UserLoginedNav from '../Navbar/UserLoginedNav'
import Homepage from './Homepage'
import Footer from '../Footer/Footer'
import doll from '../Assets/doll.jpg'
import woodlight1 from '../Assets/woodlight.jpg'
import brown from '../Assets/brownpainting.jpg'
import "./Homepage.css"

function UserHome() {
  return (
    <div>
        <UserLoginedNav/>
        
        <Homepage/>
        <p className='headers'>Popular Items</p>


      
        <div class="container" className='container1'>
        <div class="row justify-content-center">
          <div class="col-12 col-md-10">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={doll} class="card-img-top" className='cardimageset1' alt="..." />
                  <div class="card-body">
                    <h5 class="card-title" id='cardtitile'>Thread Doll</h5>
                    <p class="card-text">₹100</p></div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      {/* <a href='' className='card-viewdetails'>view details</a> */}
                    </small>
                  </div>
                  {/* <!-- Card 1 content --> */}
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={woodlight1} class="card-img-top" className='cardimageset1' alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Wooden lamp</h5>
                    <p class="card-text">₹500</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      {/* <a href='' className='card-viewdetails'>view details</a> */}
                    </small>
                  </div>
                  {/* <!-- Card 2 content --> */}
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <img src={brown} class="card-img-top" className='cardimageset1' alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Brown Painting</h5>
                    <p class="card-text">₹750</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">
                      {/* <a href='' className='card-viewdetails'>view details</a> */}
                      </small>
                  </div>
                  {/* <!-- Card 3 content --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default UserHome