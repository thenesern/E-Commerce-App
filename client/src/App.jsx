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
import AdminProductList from "./pages/Dashboard/ProductList/ProductList";
import Home from "./pages/Home";
import Product from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard/Dashboard";
import List from "./pages/Dashboard/List/List";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user.currentUser?.others.isAdmin);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {user && <Route path="/success" element={<Success />} />}
        {admin && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/products" element={<AdminProductList />} />
            <Route path="/dashboard/list" element={<List />} />
          </>
        )}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
