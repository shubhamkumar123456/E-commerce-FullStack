const mongoose=require('mongoose');
const mongoUrl="mongodb://0.0.0.0:27017/shopping"
const connectTodb=async()=>{
    await mongoose.connect(mongoUrl);
    console.log("connected to MongoDB");
}

module.exports=connectTodb