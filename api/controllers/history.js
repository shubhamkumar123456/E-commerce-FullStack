
const User=require('../models/UserSignup');

const getHistory=async(req,res)=>{
    const email=req.body.email;
    const user=await User.findOne({email})
    if(user){
        res.json({user:user.history})
    }else{
        res.json({msg:"user not found"})
    }
     
    }

module.exports = getHistory;