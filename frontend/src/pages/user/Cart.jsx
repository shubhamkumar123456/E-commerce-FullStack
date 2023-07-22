import React, { useContext, useState } from 'react'
import CartContext from '../../store/CartContext'
import Classes from './Cart.module.css'
import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate=useNavigate()
    const ctx=useContext(CartContext)
    const cartItems=ctx.backendItem;
    ctx.setclicked(true)

    console.log(cartItems)
    const [increment, setincrement] = useState(0);
    const [decrement, setdecrement] = useState(0);
    const [updateprice, setupdateprice] = useState(0);
    const [clicked, setclicked] = useState(false);
    const email=localStorage.getItem('email');
    console.log(email)
    let price=0;

    const handlePlus=async(items)=>{
       
        const response=await fetch(`https://e-commerce-full-stack-livid.vercel.app/api/cart/icrement/${items._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            }
        })
        const data=await response.json();
        console.log(data)
        ctx.getCart();
       
    }
 
    const handleMinus=async(items)=>{
        const response=await fetch(`https://e-commerce-full-stack-livid.vercel.app/api/cart/decrement/${items._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            }
        })
        const data=await response.json();
        console.log(data)
        ctx.getCart();
    }

    const deleteItem=(id)=>{
        // console.log(id);
        ctx.deleteToCart(id);
   
    }

    const handleBuy=(e)=>{
        e.preventDefault();
        navigate('/payement')
    }

  return (
    <div >
        <Navbar/>
        <div className={Classes.cartPage}>
        <h2>Cart Page</h2>
        <div className={Classes.names}>
            <p>Product Name</p>
            <p>Price</p>
            <p>Quantity</p>
        </div>
        {cartItems.map((items)=>{
            return <div className={Classes.cartItem}>
                <img src={items.img} alt="" />
                <span>{items.productName}</span>
                <span>{items.price}</span>
               <span> <button className='btn btn-primary' onClick={()=>{handlePlus(items)}}>+</button>{items.quantity}<button className='btn btn-primary m-1' onClick={()=>{handleMinus(items)}}>-</button></span>
               <button className='btn btn-danger' onClick={()=>{deleteItem(items._id)}}>delete item</button>
            </div>
        })}
        {cartItems.forEach(item=>{
            price+=+item.price
        })}
        <center><h4>Total Amount</h4> = {price}</center>
   <button className='btn btn-primary'onClick={handleBuy} >Buy Now</button>
        </div>
    </div>
  )
}

export default Cart
