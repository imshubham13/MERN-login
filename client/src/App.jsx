import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Home from "./component/Home";
import Display from "./component/Display";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
