import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const validUser = () => {
    axios
      .post("http://localhost:3000/login/isUser", {
        email,
        password: password,
      })
      .then((data) => {
        console.log(data);
        if (data.data.isValid) {
          navigate("/home");

          sessionStorage.setItem("user", data.data.isvalid);
        } else {
          alert("Invalid");
        }
      })
      .catch((err) => console.log(err));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    validUser();
  };

  return (
    <div>
      <NavBar />
      <h1>Login Form</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        Email :
        <input
          type="email"
          name="email"
          id=""
          value={email}
          onChange={(e) => handleEmail(e)}
        />
        <br />
        <br />
        Password :
        <input
          type="text"
          name="password"
          id=""
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
