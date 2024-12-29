import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Display = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:3000/login/display");
    setData(result.data);
    console.log(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const studData = data.map((e, key) => {
    return (
      <tr key={e._id}>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.password}</td>
        <td>{e.phone}</td>
        <td>{e.gender}</td>
        <td>{e.city}</td>
        <td>{e.hobby}</td>
        <td>
          <a>Action</a>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <NavBar />
      <h1>Display</h1>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Phone</td>
          <td>Gender</td>
          <td>City</td>
          <td>Hobby</td>
          <td>Action</td>
        </tr>
        {studData}
      </table>
    </div>
  );
};

export default Display;
