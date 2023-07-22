import React, { useRef } from 'react'
import Classes from './AdminLogin.module.css'
import {useNavigate} from 'react-router-dom'

const AdminLogin = () => {
    const navigate=useNavigate();
    const emaiRef=useRef();
    const passworddRef=useRef();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const response=await fetch('https://e-commerce-full-stack-livid.vercel.app/api',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({admin:emaiRef.current.value,password:passworddRef.current.value})
        })
      const result =await response.json();
      console.log(result);
      if(result.succsess==true) {
        navigate('/adminForm');
      }else{
        alert(result.msg);
      }
        } catch (error) {
          console.log(error);
        }
      
    }

  return (
    <div className={Classes.adminlogin}>
      <form action="" onSubmit={handleSubmit}>
        <center><h2>Admin login</h2></center>
        <label htmlFor="">Email</label>
        <input type="email" ref={emaiRef}/>
        <label htmlFor="">Password</label>
        <input type="password" ref={passworddRef}/>
        <button type='submit' className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default AdminLogin
