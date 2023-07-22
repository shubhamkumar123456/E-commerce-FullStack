const Payement=require('../models/Payement');
const User=require('../models/UserSignup');

const createPayement=async(req,res)=>{
    const {name,address,phoneNo,deliveryTime,payementOption,email}=req.body;
    const history=req.body.history;
    const findEmail=await Payement.create({
        name,
        address,
        phoneNo,
        deliveryTime,
        payementOption,
        email,
        history
    })
    const findEmailname=await User.findOne({email:email})

            await findEmailname.updateOne({$push:{history:findEmail}})
      
       
        console.log(findEmailname.history)
     

  
    res.json({msg:"successfully created",findEmail})
}

module.exports =createPayement