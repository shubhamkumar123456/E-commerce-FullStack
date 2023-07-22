import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartState = (props) => {
  let email = localStorage.getItem("email");
  const [item, setItem] = useState([]);
  const [backendItem, setbackendItem] = useState([]);
  const [clicked, setclicked] = useState(false);
  const [total, setTotal] = useState(0);
  const [historyItem, sethistoryItem] = useState([]);

useEffect(()=>{
  const getTotal=async()=>{
    let price=0;
    item.forEach((items)=>{
      price+=+item.price
    })
    console.log(price)
    setTotal(price)
  }
  getTotal();
},[item])

  const addToCart = (newItem) => {
    setItem([...item, newItem]);
  };

  const deleteToCart = async(Itemid) => {
    console.log(Itemid);
    const filter = item.filter((items) => items._id != Itemid);
    const response=await fetch(`http://localhost:4000/api/cart/delCart/${Itemid}`,{
      method: 'DELETE',
      headers:{
        'content-type': 'application/json'
      }
    });
    const data=await response.json();
    console.log(data);

    setItem(filter);
    console.log(filter);
  };

  const updateCart = (obj) => {
    console.log(obj);
    const findItemIndex = item.findIndex((items) => items._id === obj._id);
    const findItem = item[findItemIndex];
    item[findItemIndex] = obj;
    let newArr = item.filter((items) => items._id != obj._id);
    newArr.push(obj);

    setItem(newArr);
    console.log(item);

    // const findItemIndex= item.findIndex(items=>items._id===obj._id);
    // const findItem= item[findItemIndex];
    //  item[findItemIndex]=obj;
    // //  let newArr=item;

    // //  setItem(newArr)
    //  console.log(item)
    //  setItem(item)
  };

  const getCart = async () => {
    const response = await fetch("http://localhost:4000/api/cart/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    let result = await response.json();
    console.log(result.cart);
    setbackendItem(result.cart);
  };
 
   useEffect(()=>{
    
    getCart()
   },[email,item,item.price])
 
  
  // item.find(item=>item.id===)
  return (
    <CartContext.Provider
      value={{ addToCart, item, deleteToCart, updateCart, backendItem,setclicked,getCart,setclicked,email,sethistoryItem,historyItem }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
