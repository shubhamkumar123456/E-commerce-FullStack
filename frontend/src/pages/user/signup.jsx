import React, { useRef } from 'react'
import Classes from './Signup.module.css'
import { Link, useNavigate } from 'react-router-dom';

const signup = () => {
  const navigate=useNavigate()
    const nameRef=useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cpasswordRef = useRef();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let obj ={
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            cpassword:cpasswordRef.current.value,
        }
        console.log(obj);
        const response=await fetch('http://localhost:4000/api/users/signup',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({name:nameRef.current.value,email:emailRef.current.value,password:passwordRef.current.value,cpassword:cpasswordRef.current.value})
        })
        const result=await response.json();
        console.log(result);
        navigate('/userLogin')
    }
  return (
    <div className={Classes.signup}>
      <form action="" onSubmit={handleSubmit}>
       <center> <h2>User signup page</h2></center>
        <label htmlFor="">Name: </label>
        <input type="name" ref={nameRef}/>
        <label htmlFor="">Email:</label>
        <input type="email" ref={emailRef}/>
        <label htmlFor="">Password</label>
        <input type="password" ref={passwordRef}/>
        <label htmlFor="">Confirm password</label>
        <input type="password" ref={cpasswordRef}/>
        <button type='submit' className='btn btn-success'>Submit</button>
        <p>already have an accout ? <Link to="/userlogin">Login</Link></p>
      </form>
    </div>
  )
}

export default signup
