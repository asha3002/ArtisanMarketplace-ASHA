import React from 'react'
import { FaAmazonPay, FaCcAmazonPay, FaCcApplePay, FaCcPaypal, FaCcVisa, FaClock,FaEnvelope,FaFacebook,FaGooglePay,FaInstagram,FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import "../Footer/Footer.css"
import footerimg from "../Assets/budha.jpg"

function Footer() {
  return (
    <div>
        <div class="container my-5" className='containerfooter'>

<footer className='footer'/*style="background-color: #ffede7;"*/>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="mb-3" className='footer-heading'/*style="letter-spacing: 2px; color: #7f4722;"*/>Have a Question?</h5>
        <ul class="list-unstyled mb-0"><br></br>
          <li class="mb-1">
            <label className='footer-col1'><FaClock></FaClock>&nbsp;Monday-Friday:9.00am-8.00pm</label>
          </li>
          <li class="mb-1">
            <label className='footer-col1'/*style="color: #4f4f4f;"*/><FaMapMarkerAlt></FaMapMarkerAlt>&nbsp; Marthandam 629153</label>
          </li>
          <li class="mb-1">
            <label className='footer-col1'><FaPhone></FaPhone>&nbsp;9876547865</label>
          </li>
          <li>
            <label className='footer-col1'><FaEnvelope></FaEnvelope>&nbsp;artisanmarketplace@gmail.com</label>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="mb-3" className='footer-heading'/*style="letter-spacing: 2px; color: #7f4722;"*/>Information</h5>
        <ul class="list-unstyled mb-0"><br></br>
          <li class="mb-1">
            <a href="" className='footer-col2'>About us</a>
          </li>
          <li class="mb-1">
            <a href="#!" className='footer-col2'>Delivery Information</a>
          </li>
          <li class="mb-1">
            <a href="#!" className='footer-col2'>Terms & Conditions</a>
          </li>
          <li>
            <a href="#!" className='footer-col2'>Contact us</a>
          </li>
        </ul>
      </div>
      {/* */}
      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="mb-3" className='footer-heading'/*style="letter-spacing: 2px; color: #7f4722;"*/>Payment Options</h5>
        <ul class="list-unstyled mb-0">
          <li class="mb-1">
            <label className='footer-col4'>&nbsp;&nbsp;<FaCcAmazonPay></FaCcAmazonPay> &nbsp; &nbsp;<FaCcVisa></FaCcVisa></label>
          </li>
          
          <li class="mb-1">
            <label className='footer-col4'>&nbsp;&nbsp;<FaCcPaypal></FaCcPaypal> &nbsp; &nbsp;<FaCcApplePay></FaCcApplePay></label>
          </li>
          <li>
            <label></label>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
       
        <ul class="list-unstyled mb-0">
          <li class="mb-1">
          <img src={footerimg} className='footerimage' alt="..." />
          </li>
         
        </ul>
      </div> 
    </div>
  </div>
  <div class="text-center p-3" /*style="background-color: rgba(0, 0, 0, 0.2);"*/>
<label className='footer-label'>Follow Us</label><br></br>
    <label> <FaFacebook></FaFacebook> <FaTwitter></FaTwitter> <FaInstagram></FaInstagram></label>HandiZen
  </div>
  {/* <!-- Copyright --> */}
</footer>

</div>
    </div>
  )
}

export default Footer