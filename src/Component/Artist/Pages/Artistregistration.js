import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Artistregistration() {
const[data,setData]=useState({firstname:'',lastname:'',age:'',address:'',email:'',password:'',image:''})
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
      // console.log("save")
      
      
      axios.post("http://localhost:4001/addartist",data,{
        headers: {
          "Content-Type": "multipart/form-data",
        }})
      .then((result)=>{
          console.log(result)
          alert("save")
          if(result.data.status==200){
            alert("Registration successfull")
            navigate("/artistlogin")
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
              <br></br><br></br>
              <div class="card-1">
                <div class="card-body">
             <form onSubmit={submitfn}>
                  <h3 class="mb-5">Registration</h3>
                  <div class="input-group flex-nowrap">
                  
                    <input type="text" class="form-control" id="floatingInput" name='firstname' onChange={func1} value={data.firstname} placeholder="Firstname" />
                   
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  
                    <input type="text" class="form-control" id="floatingInput" name='lastname' onChange={func1} value={data.lastname} placeholder="Lastname" />
                
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                 
                    <input type="number" class="form-control" id="floatingInput" name='age' onChange={func1} value={data.age} placeholder="Age" />
            
                  </div><br></br>
                  <div class="input-group flex-nowrap">
               
                    <input type="text" class="form-control" id="floatingInput" name='address' onChange={func1} value={data.address} placeholder="Address" />
                   
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                  
                    <input type="email" class="form-control" id="floatingInput" name='email' onChange={func1} value={data.email} placeholder="name@example.com" />
              
                  </div><br></br>
                  <div class="input-group flex-nowrap">
                    <input type="password" class="form-control" id="floatingPassword" name='password' onChange={func1} value={data.password} placeholder="Password" />
                
                  </div><br></br>
                  <div class="input-group flex-nowrap">
               
                    <input type="file" class="form-control" id="floatingInput" name='image' onChange={func1} placeholder="Upload your image" />
                   
                  </div><br></br>
                  

                  
                  

                  <button class="btn btn-outline-primary" className='loginbutton' type="submit"> &nbsp; &nbsp; Submit &nbsp; &nbsp; </button>


                  <hr class="my-4" />

                  <p class="small mb-5 pb-lg-2" ><a href="/artistlogin" className='forgotpwd'>Already have an Account? Log in</a></p>
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

export default Artistregistration