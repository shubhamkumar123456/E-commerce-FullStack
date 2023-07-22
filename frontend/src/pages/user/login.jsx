import React, { useContext, useRef } from 'react'
import Classes from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../../store/CartContext';

const Login = () => {
  const navigate=useNavigate();
    const emailRef=useRef();
    const passwordRef = useRef();
    const ctx=useContext(CartContext)

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let obj ={
           
            email:emailRef.current.value,
            password:passwordRef.current.value,
       
        }
        console.log(obj);
        const response=await fetch('https://e-commerce-full-stack-livid.vercel.app/api/users/login',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({email:emailRef.current.value,password:passwordRef.current.value,})
        })
        const result=await response.json();
        console.log(result);
        if(result.success==true){
          localStorage.setItem('email',obj.email);
          navigate('/home')
        }
        else{
          alert(result.msg)
        }
        
        ctx.getCart();
        
    }
  return (
    <div className={Classes.loginpage}>
      <form action="" >
        <center><h2>User Login Page</h2></center>
        <label htmlFor="">Email:</label>
        <input type="email" ref={emailRef} />
        <label htmlFor="">password</label>
        <input type="password" ref={passwordRef}/>
        <button type='submit' className='btn btn-success' onClick={handleSubmit}>submit</button>
        <p>do not have an account? <Link to='/userSignup'>Signup</Link></p>
      </form>
    </div>
  )
}

export default Login
