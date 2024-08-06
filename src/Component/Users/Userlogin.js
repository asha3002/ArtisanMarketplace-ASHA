import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import "../Users/Userlogin.css"

function Userlogin() {
  const navigate=useNavigate()
  const[data,setData]=useState({email:'',password:''})
  const func1=((a)=>{
    setData({...data,[a.target.name]:a.target.value})
  })

  const submitfn=(Event)=>{
    Event.preventDefault()
    axios.post("http://localhost:4001/login",data)
    .then((result)=>{
      if(result.data.status==200){
      alert("login successfully")
      localStorage.setItem("userId",result.data.data._id)
      navigate('/userhome')
      // console.log(result)
      }
      else if(result.data.status==500){
          alert("Password error")
      }
      else if(result.data.status==400){
          alert("User not found")}
  })
  .catch((error)=>{
   console.log(error)
 
  
  })
  }
  
  return (
    <div>
        {/* <section class="vh-100" className='sect1' >
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center">
          <div class="col col-xl-10" >
            <div class="card" className='logcard' >
              <div class="row g-0">
                <div class="col-md-6" >
                  <div className='col1'>
                     <img src={pic} alt='icon image' className='logicn' /><br></br> 
                    <label className='labellogpage'>Museofire</label><br></br>
                    <span className='labeltagline'>The art of connection</span>
                  </div>
                </div>
                <div class=" col-md-6">
                  <div className='col2'>
                    <div class="card text-center" className='card1'>
                      <h5 class="card-header">
                        <label className='loglabel'>Sign in as:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='./adminlog' className='loglinkuser'>Admin</a>&nbsp;&nbsp;&nbsp;
                        <a href='./logpage' className='loglinkuser'>Artist</a>&nbsp;&nbsp;&nbsp;
                        <a href='' className='loglinkuser'>User</a>&nbsp;&nbsp;&nbsp;
                        
                        <a href='' className='loglinkda'>Delivery Agent</a>
                        
                      </h5>
                      <div class="card-body" className='logcardbody'>
                        <br></br>
                        <h5 class="card-title">Sign in as User</h5><hr className='hrlogpage'></hr>
                        <form>
                        <div class="input-group flex-nowrap">
                          
                          <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span>
                          <input type="email" class="form-control"  name='email'  placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <div class="input-group flex-nowrap">
                          <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                          <input type="text" class="form-control" name='password'  placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br></br>
                        <a href="#!" className='forgotpassword'>Forgot password?</a><br></br><br></br>
                        <button class="btn btn-outline-success" type="submit">Login</button><br></br><br></br>
                        </form>
                        <p class="mb-0">Don't have an account? <a href="./userreg" class="text-white-50 fw-bold" className='signup'>Sign Up</a>
                        </p>
                        
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <section class="vh-100" className='sect1'>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              {/* <div class="btn-group groupbtn2">
                <a href="#" aria-current="page" className='groupbtn1'>Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='/register'  >Registration</a>

              </div><br></br><br></br> */}
              <div class="card">
                <div class="card-body">
                  <form onSubmit={submitfn}>
                  <h3 class="mb-5">Login</h3>
                  <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span>
                    <input type="email" class="form-control" id="floatingInput" name='email' value={data.email} onChange={func1} placeholder="name@example.com" />
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                    <input type="password" class="form-control" name='password' value={data.password} id="floatingPassword" onChange={func1} placeholder="Password" />
                    {/* <label for="floatingPassword">Password</label> */}
                  </div><br></br>
                  

                  
                  {/* <div class="form-check d-flex justify-content-start mb-4"> */}
                    {/* <input class="form-check-input" type="checkbox" value="" id="form1Example3" /> */}
                    {/* <label class="form-check-label" for="form1Example3"> Remember password </label> */}
                  {/* </div> */}

                  <button class="btn btn-outline-primary" className='loginbutton' type="submit"> &nbsp; &nbsp; Log in &nbsp; &nbsp; </button>


                  <hr class="my-4" />

                  <p class="small mb-5 pb-lg-2" ><a href="/userforgotpassword" className='forgotpwd'>Lost your password?</a></p>
                  <p class="small mb-5 pb-lg-2" ><a href="/userreg" className='forgotpwd'>Don't have an Account?Sign UP</a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Userlogin