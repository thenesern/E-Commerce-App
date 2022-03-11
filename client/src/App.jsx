// Dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

// Styles
import "./App.css";

// Components
import Home from "./pages/Home";
import Product from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/admin"
          element={user ? <Navigate to="/dashboard" /> : <Admin />}
        />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
