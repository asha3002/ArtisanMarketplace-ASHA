import React from 'react'
import contactus from '../../Assets/contact.jpg'
import "../../Users/UserPages/Contact.css"

function Contact() {
  return (
    <div>
        <div class="card mb-3" className='contactcard' /*style="max-width: 540px;"*/>
                <div class="row g-0">
                    <div class="col-md-4"><br></br><br></br><br></br>
                        <img src={contactus} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">CONTACT US</h5>
                            <p class="card-text">"Drop us a line! Whether you have a question or just want to chat, we're here for you. Fill out the form below, and we'll be in touch soon."</p>
                            {/* <p class="card-text">

                            </p> */}
                            <br></br>
                            <div class="mb-3" className='contactform'>
                                <label for="exampleFormControlInput1" class="form-label" >Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3" className='contactform'>
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><br></br>
                                <button type="button" class="btn btn-primary" className='contactusbutton'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Contact