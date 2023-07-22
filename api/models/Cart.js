const mongoose=require('mongoose');
const cartSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    productName:{
    type:String,
    },
    quantity:Number,
    price:Number,
    desc:String,
    img:String,
})
const Cart = mongoose.model('cart',cartSchema);
module.exports=Cart;