import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const collectData = async () => {
    let data = await axios
      .post("http://localhost:3000/login/register", {
        name,
        email,
        password,
        phone,
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <>
      <NavBar />
      <h1>Registration Form</h1>
      Name :{" "}
      <input
        type="text"
        name="name"
        id=""
        value={name}
        onChange={(e) => handleName(e)}
      />
      <br />
      <br />
      Email :{" "}
      <input
        type="email"
        name="email"
        id=""
        value={email}
        onChange={(e) => handleEmail(e)}
      />
      <br />
      <br />
      Password :{" "}
      <input
        type="text"
        name="password"
        id=""
        value={password}
        onChange={(e) => handlePassword(e)}
      />
      <br />
      <br />
      Phone :{" "}
      <input
        type="number"
        name="phone"
        id=""
        value={phone}
        onChange={(e) => handlePhone(e)}
      />
      <br />
      <br />
      <button onClick={collectData}>Submit</button>
    </>
  );
};

export default Register;
