const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/login")

app.listen(3000 , () => {
    console.log("Server is running ========> ");
})

const register = require("./route/register_route");
app.use('/login',register);

const student = require("./route/student_route");
app.use('/login',student);