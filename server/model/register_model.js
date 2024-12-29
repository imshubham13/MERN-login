const mongoose = require("mongoose");

const registerData = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("register_user",registerData);