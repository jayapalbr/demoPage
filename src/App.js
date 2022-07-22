import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Task/Navbar";
import Home from "./Task/Home";
import Products from "./Task/Products";
import ContactUs from "./Task/ContactUs";
import AboutUs from "./Task/AboutUs";
import Login from "./Task/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
