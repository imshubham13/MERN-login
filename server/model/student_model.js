const mongoose = require("mongoose");

const studentData = new mongoose.Schema({
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
    gender:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    hobby:{
        type:[String]
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Student_master', studentData);