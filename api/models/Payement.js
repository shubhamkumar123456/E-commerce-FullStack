const mongoose=require('mongoose');
const payementSchema=new mongoose.Schema({
    payementOption:String,
    name:String,
    address:String,
    phoneNo:String,
    deliveryTime:String,
    email:String,
    history:{
        type:Array,
        default:[]
    }
})

const payement=mongoose.model('Payment',payementSchema);
module.exports = payement;