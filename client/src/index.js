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
import { Provider } from "react-redux";
import store from "./redux/store";
import Success from "./pages/succes";
const user = false;

ReactDOM.render(
  <Provider store={store}>
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
        <Route path="/success" element={<Success />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);
