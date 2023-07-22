const mongoose=require('mongoose');
// const mongoUrl="mongodb://0.0.0.0:27017/shopping"
const mongoUrl="mongodb+srv://clboy768:l4J7nRS0lKMgAtLj@e-commerce.mbjbmvl.mongodb.net/Shopping?retryWrites=true&w=majority"
const connectTodb=async()=>{
    await mongoose.connect(mongoUrl);
    console.log("connected to MongoDB");
}

module.exports=connectTodb