// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import "./index.css";
// Components
import App from "./App";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
