const express=require('express');
const createPayement = require('../controllers/payement');
const router=express.Router();


router.post('/',createPayement)


module.exports=router;