const express = require("express");
const router = express.Router();
const registerInfo = require("../model/register_model");

// ADD USER
router.post("/register", (req, res) => {
  const data = new registerInfo({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  });
  data.save();
});

//Display USER
router.get("/getUser", async (req, res) => {
  const data = await registerInfo.find();
  res.json(data);

  console.log("USER DATA ==> ", data);
});

// IS-USER-VALID
router.post("/isUSer", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const userData = await registerInfo.findOne({ email, password });

  if (!userData) {
    res.json({ isValid: false });
  } else {
    res.json({ isValid: true });
  }
});

module.exports = router;
