import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Userregistration() {
  const[data,setData]=useState({firstname:'',lastname:'',email:'',age:'' ,address:'',password:'',image:''})
  const func1=(b)=>{
    const { name, value ,files} = b.target;
    if(b.target.name === "image"){
      // handleImageUpload(e);
      setData({...data,image:b.target.files[0]});
  }else {
      setData({...data,[b.target.name]:b.target.value})
  }}
  console.log(data) 
 
  const navigate=useNavigate()

  const submitfn=(Event)=>{
      Event.preventDefault()
      console.log("save")
      
      // axios.post("http://localhost:4001/addusers",data)
      axios.post("http://localhost:4001/addusers",data,{
        headers: {
          "Content-Type": "multipart/form-data",
        }})
      .then((result)=>{
          console.log(result)
          // alert("save")
          if(result.data.status==200){
            alert("Registration successfull")
            navigate("/userlogin")
          }
      })
      .catch((error)=>{
       console.log(error)
      })
      // console.log("Save")
    }

  return (
    <div>
        <section class="vh-100" className='sect1'>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              {/* <div class="btn-group groupbtn2">
                <a href="#" aria-current="page" className='groupbtn1'>Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='/register'>Registration</a>

              </div><br></br><br></br> */}
              <div class="card">
                <div class="card-body">
<form onSubmit={submitfn}>
                  <h3 class="mb-5">Registration</h3>
                  <div class="input-group flex-nowrap">
                  {/* <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span> */}
                    <input type="text" class="form-control" id="floatingInput" name='firstname' value={data.firstname} onChange={func1} placeholder="Firstname" />
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  {/* <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span> */}
                    <input type="text" class="form-control" id="floatingInput" name='lastname' value={data.lastname} onChange={func1} placeholder="Lastname" />
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  {/* <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span> */}
                    <input type="number" class="form-control" id="floatingInput" name='age' value={data.age} onChange={func1} placeholder="Age" />
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  {/* <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span> */}
                    <input type="text" class="form-control" id="floatingInput" name='address' value={data.address} onChange={func1} placeholder="Address" />
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  {/* <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span> */}
                    <input type="email" class="form-control" id="floatingInput" name='email' value={data.email} onChange={func1} placeholder="name@example.com" />
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  {/* <span class="input-group-text" id="addon-wrapping"><FaLock /></span> */}
                    <input type="password" class="form-control" id="floatingPassword" name='password' value={data.password} onChange={func1} placeholder="Password" />
                    {/* <label for="floatingPassword">Password</label> */}
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  {/* <span class="input-group-text" id="addon-wrapping"><FaUserAlt /></span> */}
                    <input type="file" class="form-control" id="floatingInput" name='image' onChange={func1} placeholder="Upload your image" />
                    {/* <label for="floatingInput">Email address</label> */}
                  </div><br></br>
                  

                  
                  {/* <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                  </div> */}

                  <button class="btn btn-outline-primary" className='loginbutton' type="submit"> &nbsp; &nbsp; Submit &nbsp; &nbsp; </button>


                  <hr class="my-4" />

                  <p class="small mb-5 pb-lg-2" ><a href="/userlogin" className='forgotpwd'>Already have an Account? Log in</a></p>
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

export default Userregistration