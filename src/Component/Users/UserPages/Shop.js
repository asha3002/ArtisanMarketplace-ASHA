import React from 'react'
import "../UserPages/Shop.css"
import "../UserPages/Gallery.css"
function Shop() {
  return (
    <div>
      <section>
        <div class="card">

          <div class="card-body" className='Userprofilehomeimage1'>
          <div class='center-button-container' className='shopcontainer'>
          <a href='/artistreg'>
            <button type="button" class="center-button" className='shopbtn'>Sell Your Product</button>
          </a>
        </div>

            {/* <h5 class="card-title" className='userprofileheading'>GALLERY</h5> */}
            {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        
      </section>
      <hr></hr>
    </div>
  )
}

export default Shop