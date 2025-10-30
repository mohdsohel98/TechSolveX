import React, { useState } from 'react';
 import {useNavigate} from "react-router-dom";
 import { useAuth } from '../store/auth';
 import { toast } from 'react-toastify';
 const URL="http://localhost:5000/api/auth/login"
function Login() {
     const [user,setUser] = useState({ 
      email:"",
      password:"",
  
     });
  
 const navigate = useNavigate();

 const {storeTokenInLS} = useAuth();

    //  hndling the input value 
  
     const handleInput =(e)=>{
      console.log(e)
    let name = e.target.name;
    let value = e.target.value;
  
    setUser({
      ...user,
     [name]:value,
 
    });
     }
  
  //  handling the submit form  button 
  
   const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(user);
   try{
      const response = await fetch(URL,{
    method:'POST',
     headers:{
      "Content-Type": "application/json",
     },
     
     body:JSON.stringify(user)
      });
      
      console.log("login form ", response);

       if( response.ok){
        toast("Login Successful")
        const res_data = await response.json();

        //   storing token in local storage
        storeTokenInLS(res_data.token);

        setUser({email: "", password: "",})
        navigate('/');
       }
       else{
        toast.error("Invalid Credential")
        
        console("invalid credential")
       }

   }
   catch(err){
    console.log(err)
   }
  
  
   }
  return (
    <>
    
    <section>
      <main>
        <div className="section-registration">
          <div className='container grid grid-two'>
            <div className="registration-image">
              <img src="/images/login.png" 
              alt="Lets fill the login form "
              width="400" height="500"
              />

            </div>

            <div className="registration-from">
              <h1 className='main-heading mb-3'> Login Form </h1>
              <br />
              <form onSubmit={handleSubmit}>

                <div>
                  <label htmlFor="email">email</label>
                  <input type="text"  
                  name='email'
                   placeholder='Enter you email' 
                   id='email'
                   required
                   autoComplete='off'
                   value={user.email}
                   onChange={handleInput}
                   />
                </div>


                <div>
                  <label htmlFor="Password">password</label>
                  <input
                   type="text"
                  name='password'
                  placeholder="password"
                  id='password' required
                 autoComplete='off'
                 value={user.password}
                 onChange={handleInput}
                 />
                </div>

                <br />
                <button type='submit' className='btn btn-submit'> Login Now</button>

              </form>

             </div>

          </div>
        </div>
      </main>
    </section>
    
    </>

  )
}

export default Login