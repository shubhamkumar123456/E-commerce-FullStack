const User=require('../models/UserSignup');

const signup=async(req,res)=>{
    const email=req.body.email;
    const user=await User.findOne({email})
    if(user){
        res.send("already a user")
    }else{
        const {name,email,password,cpassword}=req.body;
        const user=await User.create({
            name,
            email,
            password,
            cpassword
        })
        res.json({msg:"user created successfully",user});
    }
}

const login=async (req, res) => {
    let success=false;
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user){
        if(user.password==password){
            success=true;
            res.json({msg:"login succssfull",success})
        }
        else{
            success=false;
            res.json({msg:"login failed, incorrect password",success})
        }
    }else{
        success=false;
        res.send({msg:"user not found or wrong email",success})
    }
}



module.exports ={
    signup,
    login
}