import React from 'react'
import { FaAccusoft, FaLock, FaUser, FaShoppingCart } from 'react-icons/fa';

function Usernav() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 " className='brndname'> HandiZen {/*<img src={logo} className='logo1'></img>*/}

          </span>
          <form class="d-flex" role="search">


          </form>

        </div>


      </nav>
      <hr></hr>
      <ul class="nav justify-content-center">
        <li class="nav-item" >
          <a class="nav-link active" className='navcontent' aria-current="page" href="/home" >Home</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="/shop">Shop</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link" className='navcontent' href="/about">About us</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <li class="nav-item">
          <a class="nav-link" className='navcontent' href="/contact">Contact</a>
        </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        {/* <li class="nav-item">
          <a class="nav-link" className='navcontent' href="./Gallery">Gallery</a>
        </li> */}
        <a href='./userlogin' className='icnloglink'>
          Login&nbsp;&nbsp;<FaUser></FaUser></a>&nbsp;&nbsp;
      </ul>
      <ul className='justify-content-end'>

      </ul>
    </div>
  )
}

export default Usernav