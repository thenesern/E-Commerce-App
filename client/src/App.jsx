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
import Dashboard from "./pages/Dashboard/Dashboard";
import List from "./pages/Dashboard/Users/Users";
import User from "./pages/Dashboard/User/User";
import DashboardProducts from "./pages/Dashboard/Products/Products";

function App() {
  const isUser = useSelector((state) => state.user.currentUser?.token);
  const isAdmin = useSelector((state) => state.user.currentUser?.isAdmin);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {isUser && <Route path="/success" element={<Success />} />}
        {isAdmin && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/products" element={<DashboardProducts />} />
            <Route path="/dashboard/users/:userId" element={<User />} />
            <Route path="/dashboard/users" element={<List />} />
          </>
        )}
        <Route
          path="/login"
          element={isUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isUser ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
