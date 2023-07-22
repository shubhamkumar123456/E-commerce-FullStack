const Cart= require('../models/Cart');

const addToCart = async(req,res)=>{
    const {email,productName,quantity,price,desc,img}=req.body;
    const cart=await Cart.create({
        email,
        productName,
        quantity,
        price,
        desc,
        img
    })
    res.json({msg:"item added successfully", cart})
}

const removeFromCart = async(req,res)=>{
    const item=await Cart.findByIdAndDelete(req.params.id)
    res.json({msg:"item deleted successfully", item})
}

const updateIncrement = async(req,res)=>{
    const item = await Cart.findOne({_id:req.params.id});
    let originalPrice=item.price/item.quantity;
    const obj={
        quantity: item.quantity+1,
        price: item.price+originalPrice
    }
    const updated =await Cart.findByIdAndUpdate(req.params.id,{$set:obj})
    res.json({msg:"updated successfully", updated})
   
}
const updateDecrement=async(req,res)=>{
    const item = await Cart.findOne({_id:req.params.id});
    let originalPrice=item.price/item.quantity;
    console.log(originalPrice)
    const obj={
        quantity: item.quantity>1?item.quantity-1:1,
        price: item.price>originalPrice?item.price-originalPrice:originalPrice,
    }
    const updated =await Cart.findByIdAndUpdate(req.params.id,{$set:obj})
    res.json({msg:"updated successfully", updated})
}

const getCartItem= async(req,res)=>{
    const email = req.body.email;
    const cart=await Cart.find({email:req.body.email});
    if(cart){
        res.json({msg:"success", cart})
    }else{
        res.json({msg:"error, success failed",})
    }
}

module.exports={
    addToCart,
    removeFromCart,
    updateIncrement,
    updateDecrement,
    getCartItem
}