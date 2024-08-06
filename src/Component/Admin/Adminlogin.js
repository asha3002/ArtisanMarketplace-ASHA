import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import './AdminLogin.css'

function Adminlogin() {
  const navigate=useNavigate()
  const [a, seta] = useState({ email: "", password: "" })
    const func1 = (b) => {
        console.log(a)
        seta({...a,[b.target.name]: b.target.value })
    }
        
    const submitfn=(Event)=>{
        Event.preventDefault()
        if(a.email=="admin"&a.password=="admin123"){
          console.log("sucess");
          alert("loged In")
          navigate('/adminmain')
             }
             else {
             if(a.email!=="admin"){
              console.log("User Not Found")
              alert("User Not Found")
             }
            
           if(a.password!=="admin123") {
              
              console.log("Password Error");
              alert("Password Incorect")
          }
          console.log("Login Falied")
              alert("Login Falied")
        
    }
  }
        
    
  return (
    <div>
      
      <section class="vh-100" className='adminloginsect'>
        
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="btn-group groupbtn2">
                
              </div>
             
              <div class="card-1">
              <h1 className='adminloginheading'>Hello Admin! Welcome...</h1>
                <div class="card-body" className='adminlogin'>
                <form onSubmit={submitfn}>
                  <h3 class="mb-5">Login</h3>
                  <div class="input-group">
                  <span class="input-group-text"><FaUserAlt /></span>
                  <input type="text" class="form-control" id="floatingInput" placeholder="email" name='email' value={a.email} onChange={func1} />
                    {/* <input type="email" class="form-control"  placeholder="email" onChange={func1} value={a.email}/> */}
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  <span class="input-group-text"><FaLock /></span>
                    {/* <input type="password" class="form-control"  placeholder="Password" onChange={func1} value={a.password}/> */}
                    <input type="password" class="form-control" id="floatingInput" placeholder="password" name='password' value={a.password} onChange={func1}/>
                    {/* <label for="floatingPassword">Password</label> */}
                  </div><br></br>
                  

                  
                  

                  <button class="btn btn-outline-primary" className='adminloginbutton' type="submit"> &nbsp; &nbsp; Log in &nbsp; &nbsp; </button>


                  <hr class="my-4" />

                  {/* <p class="small mb-5 pb-lg-2" ><a href="" className='forgotpwd'>Lost your password?</a></p> */}
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

export default Adminlogin