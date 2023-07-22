const mongoose = require('mongoose')
// const arrSchema=new mongoose.Schema({
//     productName:String,
//     quantity:Number,
//     price:Number,
//     desc:String,
//     img:String,

// })
const historySchema=new mongoose.Schema({
    item:{
        type:Array,
        default:[],
    },
    email:String
});
const history=mongoose.model('History', historySchema);
module.exports = history;