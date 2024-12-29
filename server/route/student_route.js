const express = require("express");
const router = express.Router();
const studentInfo = require("../model/student_model");

//ADD DATA
router.post('/addStudent', (req,res)=>{
    const data = new studentInfo({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        gender:req.body.gender,
        city:req.body.city,
        hobby:req.body.hobby
    })
    data.save();
})

// GET STUDENT
router.get('/display',async(req,res)=>{
    const data = await studentInfo.find();
    res.json(data);
    console.log("Student Data ==> ",data);
})

module.exports = router