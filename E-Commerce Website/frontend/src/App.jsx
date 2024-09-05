import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Cart,
  Product,
  PlaceOrder,
  Orders,
  Login,
  Collection,
} from "./pages";
import {Navbar, Footer, SearchBar} from "./components";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
