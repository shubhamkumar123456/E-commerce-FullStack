const express=require('express');
const { addToCart, getCartItem, updateToCart, removeFromCart, updateIncrement, updateDecrement } = require('../controllers/cart');
const router=express.Router();


router.post('/add',addToCart);
router.post('/',getCartItem);
// router.put('/updateCart:id',updateToCart);
router.put('/icrement/:id',updateIncrement)
router.put('/decrement/:id',updateDecrement)
router.delete('/delCart/:id',removeFromCart);

module.exports=router;