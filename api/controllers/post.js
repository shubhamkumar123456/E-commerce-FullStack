const Post=require('../models/Post');

const createPost=async(req,res)=>{
    const {productName,price,quantity,desc,img}=req.body;
    const post =await Post.create({
        productName,
        price,
        quantity,
        desc,
        img
    })
    res.json({msg:"post created successfully",post})
}

const getallpost=async(req,res)=>{
    const post =await Post.find();
    res.json({msg:"all products",post})
}

const updatePost=async(req,res)=>{
    const {productName,price,quantity,desc,img}=req.body;
    let obj={};
    if(productName){obj.productName=productName};
    if(price){obj.price=price};
    if(quantity){obj.quantity=quantity};
    if(desc){obj.desc=desc};
    if(img){obj.img=img}
    const _id=req.body.id;
    
    const post =await Post.findByIdAndUpdate(req.params.id,{$set:obj})
    res.json({msg:"successfully updated", post})
}

const deletePost=async(req,res)=>{
    const post=await Post.findByIdAndDelete(req.params.id) 
    res.json({msg:"deleted successfully", post})
}


module.exports = {
    createPost,
    getallpost,
    updatePost,
    deletePost
    

}