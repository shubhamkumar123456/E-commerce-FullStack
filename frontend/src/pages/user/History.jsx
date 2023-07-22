import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import CartContext from '../../store/CartContext';
import Classes from './History.module.css'

const History = () => {
  const ctx=useContext(CartContext);
  const email=localStorage.getItem('email')

    const history=ctx.backendItem

    const [allItem, setallItem] = useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        const response=await fetch('http://localhost:4000/api/history',{
          method:"POST",
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify({email:email})
        })
        const result=await response.json();
        // console.log(result);
        setallItem(result.user)
      }
      fetchData();
    },[email,history]);
    console.log(allItem)
  return (
    <div className={Classes.history}>
      <Navbar/>
      {allItem.map((item) => {
       return <div className={Classes.payementDetails}>
          {item.history.map((items)=>{
           return <div className={Classes.productDetails}>
            <div className={Classes.productDetailsTop}> 
            <img src={items.img} alt="" />
              <span>{items.productName}</span>
              <span>Price: {items.price}</span>
              <span>Quantity: {items.quantity}</span>
              <span>Description: {items.desc}</span>
            </div>
             <div className={Classes.payementHistory}>
             <span>Name:{item.name}</span>
          <span>Address:{item.address}</span>
          <span>Delivery Time:{item.deliveryTime}</span>
          <span>Phone NO:{item.phoneNo}</span>
             </div>
            </div>
          })}
        
        </div>
      })}
    </div>
  )
}

export default History
