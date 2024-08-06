import React from 'react'
import "../UserPages/About.css"

function About() {
  return (
    <div>
     
      <div className='about-container' >
        <div className='container-fluid text-center'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card about-card'  id='aboutcard'>
                <div className='row no-gutters'>
                  <div className='col-md-4'>
                    <img
                      src='https://img.freepik.com/free-photo/high-angle-woman-wrapping-bowl_23-2149480234.jpg?t=st=1709197752~exp=1709201352~hmac=e836a590163f41df6ee77fc70bd7236f86178d340e0a72ac7392d0a0e503de3c&w=360'
                      className='card-img aboutimage'
                      alt='Artisan at work'
                    />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <p className='card-text aboutparagraph'>
                        At this place, we are dedicated to showcasing the creativity and craftsmanship of artisans from around the world. Our mission is to provide a platform where artisans can share their unique talents and creations with a global audience, while also giving customers the opportunity to discover and support handmade products that reflect individuality and style.
                        <br />
                        &nbsp; &nbsp; &nbsp; Founded on the principles of authenticity and community, This marketplace celebrates the art of craftsmanship and the stories behind each handmade piece. We believe in the power of human connection and the importance of preserving traditional techniques in a modern world. Whether you're an artisan looking to share your work or a customer in search of something special, we invite you to join us in our journey of creativity, passion, and discovery.
                      </p>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default About