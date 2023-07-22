const mongoose = require('mongoose')
const PostSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        reqired:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
    },
    img:{
        type:String,
    }
})
const Post =mongoose.model('Post',PostSchema);
module.exports = Post;