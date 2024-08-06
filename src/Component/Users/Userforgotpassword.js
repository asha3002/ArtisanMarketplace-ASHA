import React, { useState } from 'react'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import axios from 'axios'
import "../Users/Userlogin.css"

function Userforgotpassword() {
    const [data, setdata] = useState({ email: '', password: '' })

    const func1 = (a) => {
        setdata({ ...data, [a.target.name]: a.target.value })
        console.log(data)
    }
    const submitfn = (Event) => {
        Event.preventDefault()
        axios.post("http://localhost:4001/forgotpassword", data)
            .then((result) => {
                if (result.data.status == 200) {
                    alert("update successfully")
                }
                else if (result.data.status == 500) {
                    alert("User not found")
                }



            })
    }
    return (
        <div>
            <section class="vh-100" className='sect1'>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5"></div>
                        <div class="card">
                            <div class="card-body">
                                <fieldset>
                                    <legend><strong>Forgot Password</strong></legend><br></br><br></br>
                                <form onSubmit={submitfn}>
                                    {/* <h3 class="mb-5">Forgot Password</h3> */}
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

                                    {/* <p class="small mb-5 pb-lg-2" ><a href="" className='forgotpwd'>Lost your password?</a></p> */}
                                </form>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            </div>
            )
}

            export default Userforgotpassword