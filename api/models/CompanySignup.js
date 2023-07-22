const monggose=require('mongoose');
const companySchema=new monggose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    cpassword:{
        type:String,
    }
})
const Company=monggose.model('Company',companySchema);
module.exports = Company;