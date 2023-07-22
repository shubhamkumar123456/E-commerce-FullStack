import React, { useContext } from 'react'
import Classes from './Navbar.module.css'
import {Link, useNavigate} from 'react-router-dom'
import CartContext from '../store/CartContext'


const Navbar = () => {
  const ctx=useContext(CartContext)
  let length=ctx.backendItem.length
  const navigate=useNavigate();

 const handleLogout=()=>{
  console.log("clicked")
  localStorage.removeItem("email");
  navigate('/userlogin');
 }
  
  return (
    <div className={Classes.navbar}>
      
        <li><Link to="/home" style={{color:"black"}}>YourShop</Link></li>
      <ul>
        <li onClick={handleLogout} style={{cursor:"pointer"}}>logout</li>
        <li ><Link to='/cart'  >Cart</Link> <i style={{cursor:"pointer"}} className='fas fa-shopping-cart'><span>{length}</span></i></li>
       <li><Link to="/history">Product history</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
