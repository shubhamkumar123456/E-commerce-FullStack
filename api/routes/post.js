const express=require('express');
const { createPost, updatePost, deletePost, getallpost } = require('../controllers/post');
const { purchaseProduct } = require('../controllers/purchase');
const router=express.Router();

router.post('/createPost',createPost);
router.put('/update/:id',updatePost);
router.delete('/delete/:id',deletePost);
router.get('/',getallpost);
router.post('/purchase',purchaseProduct);

module.exports = router;