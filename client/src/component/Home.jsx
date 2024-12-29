import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [hobby, setHobby] = useState([]);

  function handleHobby(e) {
    const { value, checked } = e.target;

    if (checked) {
      setHobby((h) => [...h, value]);
    } else {
      setHobby((prevHobby) => prevHobby.filter((h) => h !== value));
    }
  }

  const collectData = () => {
    const data = axios.post("http://localhost:3000/login/addStudent", {
      name,
      email,
      password,
      phone,
      gender,
      city,
      hobby,
    });
    console.log(data.data);
  };

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      Name :
      <input
        type="text"
        name="name"
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      Email :
      <input
        type="email"
        name="email"
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      Password :
      <input
        type="text"
        name="password"
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      Phone :
      <input
        type="number"
        name="phone"
        id=""
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      Gender :
      <input
        type="radio"
        name="gender"
        value={"Male"}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
      <input
        type="radio"
        name="gender"
        value={"Female"}
        onChange={(e) => setGender(e.target.value)}
      />
      Female
      <br />
      <br />
      City :
      <select name="city" onChange={(e) => setCity(e.target.value)}>
        <option value={"surat"}>Surat</option>
        <option value={"mumbai"}>Mumbai</option>
        <option value={"delhi"}>Delhi</option>
      </select>
      <br />
      <br />
      Hobby :
      <input
        type="checkbox"
        name="hobby[]"
        value={"cricket"}
        onChange={handleHobby}
      />{" "}
      Cricket
      <input
        type="checkbox"
        name="hobby[]"
        value={"swimming"}
        onChange={handleHobby}
      />
      Swimming
      <input
        type="checkbox"
        name="hobby[]"
        value={"travelling"}
        onChange={handleHobby}
      />
      Travelling
      <br />
      <br />
      <button onClick={collectData}> Submit</button>
    </div>
  );
};

export default Home;
