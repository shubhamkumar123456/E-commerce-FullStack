const express=require('express');
const getHistory = require('../controllers/history');
const router=express.Router();

router.post('/', getHistory);


module.exports=router;