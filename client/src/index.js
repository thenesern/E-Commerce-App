// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Styles
import "./index.css";
// Components
import App from "./App";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
const user = false;
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
