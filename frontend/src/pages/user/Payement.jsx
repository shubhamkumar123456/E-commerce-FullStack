import React, { useContext, useRef, useState } from 'react'
import Classes from './Payement.module.css'
import { Link } from 'react-router-dom'
import CartContext from '../../store/CartContext';

const Payement = () => {
  const ctx=useContext(CartContext);
  const nameRef=useRef();
  const email=localStorage.getItem('email')
  const addressRef=useRef();
  const deliverTimeRef=useRef();
  const phoneNoRef=useRef();
  const payementOptionRef=useRef()

  const history=ctx.backendItem;


const [clicked, setclicked] = useState(false);
    const handleSubmit=()=>{
        console.log("your order is booked successfully")
    }

    const handleClick=async(e)=>{
        e.preventDefault()
        // setclicked(!clicked)
        const obj={
          name:nameRef.current.value,
          email:email,
          address:addressRef.current.value,
          deliveryTime:deliverTimeRef.current.value,
          phoneNo:phoneNoRef.current.value,
          payementOption:payementOptionRef.current.value,
          history:ctx.backendItem
          
        }
        console.log(obj)
        const response=await fetch('https://e-commerce-full-stack-livid.vercel.app/api/payement',{
          method:"POST",
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify({name:nameRef.current.value,
            email:email,
            address:addressRef.current.value,
            deliveryTime:deliverTimeRef.current.value,
            phoneNo:phoneNoRef.current.value,
            payementOption:payementOptionRef.current.value,
            history:ctx.backendItem})
        })
        const result =await response.json();
        console.log(result);
        setclicked(true)
    }
  return (
    <div className={Classes.payement}>
      <form action="" onSubmit={handleSubmit}>
        <h2>Payement page</h2>
      <div>
      <label htmlFor="payement" className='m-3'>payement option</label>
      <select name="payement" id="pay" ref={payementOptionRef}>
        <option value="COD" >cash on delivery</option>
        <option value="online" >Online</option>
      </select>
      </div>

        <label htmlFor="">name</label>
        <input type="text"  ref={nameRef}/>
        <label htmlFor="">address</label>
        <input type="text" ref={addressRef}/>
        <label htmlFor="">Phone No</label>
        <input type="text" ref={phoneNoRef}/>
        <p>Expected delivery time : <input style={{border:"none"}} type="text" value="tuesday" ref={deliverTimeRef} /></p>
        <button type='submit' className='btn btn-primary' onClick={handleClick}>submit</button>
        
      </form>
      {clicked && <div className={Classes.orderConfirmation}>
        <p>Your order is booked successfully. thanks</p>
        <Link to="/home" className='btn btn-success'>Home</Link>
      </div>}
    </div>
  )
}

export default Payement
