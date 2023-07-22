import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Classes from './Home.module.css'
import CartContext from '../../store/CartContext'

const Home = () => {
    const ctx=useContext(CartContext)
    const [products, setproducts] = useState([]);
    const [clicked, setclicked] = useState(false);
    let email=localStorage.getItem('email');

    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch('http://localhost:4000/api/posts/');
            const result=await response.json();
            // console.log(result.post);
            setproducts(result.post)
        }
        fetchData()
    },[])
// console.log(products)

const handleClick=async(item)=>{
    // console.log(item)
    ctx.addToCart(item)
    const response=await fetch('http://localhost:4000/api/cart/add',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        productName:item.productName,
        price:item.price,
        desc:item.desc,
        quantity:item.quantity,
        img:item.img
      })
    })
    const result=await response.json();
    console.log(result);
    ctx.setclicked(!clicked);
    ctx.getCart();
}


  return (
    <div>
        <Navbar/>
      <div className={Classes.products}>
      {products.map((item)=>{
return <div key={item._id} className={`${Classes.productContainer } card`} style={{width: "18rem"}}>
<img src={item.img} className="card-img-top" style={{height: "18rem"}} alt="..."/>
<div className="card-body">
  <h5 className="card-title">{item.productName}</h5>
  <p className="card-text">Price: {item.price}</p>
  <p className="card-text">Quantity: {item.quantity}</p>
  <p className="card-text">Desctiption: {item.desc}</p>
  <button className="btn btn-success" onClick={()=>{handleClick(item)}}>Add to Cart</button>
</div>
</div>
})}
      </div>
    </div>
  )
}

export default Home
