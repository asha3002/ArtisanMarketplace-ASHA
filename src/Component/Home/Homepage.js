import React from 'react'

import "./Homepage.css"
import naviimg from "../Assets/homiebg.jpg"
import elephant from "../Assets/elephant.jpg"

import madha from "../Assets/madha.jpg"

function Homepage() {


  return (
    <div>



      <div className="card text-center mt-50">
        <img src={naviimg} className='homeimage' alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title" className='cardtle'>Handmade with love</h5>
          <p class="card-text" className='cardtxt'>Love-infused crafts, from our heart</p><br></br>
          <a href="/userreg" class="btn btn-primary" className='cardbtn'><b>Shop Now</b> </a>
        </div>
      </div>


      <p className='headers'>New Paintings & Sketches</p>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={elephant} class="img-fluid rounded-start" className='elephantimg' alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Elephant Pencil Sketch</h5><br></br><br></br>
              <p class="card-text" className='elephantcardtext'>This elephant sketch tells a story of beauty and wisdom. The artist used careful lines and shading to show the elephant's grace and strength. Look closely at its trunk and eyes—they hold the secrets of the wild. This drawing honors these amazing animals and invites us to imagine the jungle's wonders.</p>
              <p class="card-text"><small class="text-body-secondary">3 weeks ago</small></p>
            </div>
          </div>
        </div><br></br>
        <br></br>

      </div>
      <div class="card mb-3" className='elephantcard'/*style="max-width: 540px;"*/>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={madha} class="img-fluid rounded-start" className='elephantimg' alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Mother Mery Pencil Sketch</h5><br></br><br></br>
              <p class="card-text" className='elephantcardtext'>This pencil sketch of Mother Mary shows her calm and kind expression. The artist used light lines and shading to create a peaceful feeling. Looking at this sketch makes you feel comforted and hopeful.</p>
              <p class="card-text"><small class="text-body-secondary"> 3 mins ago</small></p>
            </div>
          </div>
        </div>

      </div>

      <hr></hr>

      {/* </div> */}
    </div>

  )
}

export default Homepage