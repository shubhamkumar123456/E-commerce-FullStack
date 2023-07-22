
const POST=require('../models/Post');

const purchaseProduct=async(req,res)=>{
    const {name,_id,quantity}=req.body;
    let newQuantity;
    let product=await POST.findOne({_id});
    if(product){
        let oldQuantity=product.quantity;
         newQuantity=oldQuantity-quantity;
         console.log(newQuantity);
    }
   let obj={};
   if(quantity){obj.quantity=newQuantity}
//    obj.quantity=newQuantity;

    product=await POST.findByIdAndUpdate(req.body._id,{$set:obj})
    res.json({msg:"product updated", product})
}

module.exports={
    purchaseProduct
}