import React,{useState} from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Artistlogin() {
  const[data,setData]=useState({email:'',password:''})
const navigate=useNavigate()

  const func1=((a)=>{
    setData({...data,[a.target.name]:a.target.value})
  })
  const submitfn=(Event)=>{
    Event.preventDefault()
    axios.post("http://localhost:4001/loginartist",data)
    .then((result)=>{
      if(result.data.status==200){
      alert("login successfully")
      
      localStorage.setItem("artistid",result.data.data._id)
      navigate('/artistdashboard')
      console.log(result.data.data._id)
      // }
      // console.log(result)
      }
      else if(result.data.status===403){
        alert("Artist is not approved yet")
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
                    <input type="password" class="form-control" id="floatingPassword" name='password' value={data.password} onChange={func1} placeholder="Password" />
                    {/* <label for="floatingPassword">Password</label> */}
                  </div><br></br>
                  

                  
                  {/* <div class="form-check d-flex justify-content-start mb-4"> */}
                    {/* <input class="form-check-input" type="checkbox" value="" id="form1Example3" /> */}
                    {/* <label class="form-check-label" for="form1Example3"> Remember password </label> */}
                  {/* </div> */}

                  <button class="btn btn-outline-primary" className='loginbutton' type="submit"> &nbsp; &nbsp; Log in &nbsp; &nbsp; </button>


                  <hr class="my-4" />

                  <p class="small mb-5 pb-lg-2" ><a href="" className='forgotpwd'>Lost your password?</a></p>
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

export default Artistlogin