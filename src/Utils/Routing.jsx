import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Products from "../Pages/Products";
import About from "../Pages/About";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routing;
