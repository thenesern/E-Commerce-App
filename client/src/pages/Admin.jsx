// Dependencies
import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
// Styles
import styles from "./Admin.module.css";
import { login } from "../redux/apiCalls";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.closeLink}>
        <Button variant="text" color="error" className={styles.closeBtn}>
          X
        </Button>
      </Link>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Admin</h1>

        <form className={styles.form}>
          <TextField
            type="email"
            label="E-Mail"
            color="secondary"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <TextField
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            color="secondary"
            className={styles.input}
          />
          <button className={styles.button} onClick={loginHandler}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
