const adminlogin=async(req,res)=>{
    let succsess=true;
    let {admin,password}=req.body;
    if(admin=="admin@gmail.com"){
        if(password=="admin@123"){
            succsess=true;
            res.json({msg:"logged in successfully",succsess});
        }else{
            succsess=false;
            res.json({msg:"wrong password",succsess});
        }
    }else{
        succsess=false;
        res.json({msg:"wrong email",succsess})
    }
}

module.exports={
    adminlogin
}