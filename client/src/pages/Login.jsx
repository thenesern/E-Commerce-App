// Dependencies
import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
// Styles
import styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState("");
  const { isFetching, error } = useSelector((state) => state.auth);
  const a = useSelector((state) => state.auth);
  console.log(a);
  const loginHandler = (e) => {
    e.preventDefault();
    setSignedIn(new Date().toLocaleString());
    login(dispatch, { email, password, signedIn });
  };
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.closeLink}>
        <Button variant="text" color="primary" className={styles.closeBtn}>
          <span className={styles.close}>X</span>
        </Button>
      </Link>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Log In</h1>
        <p className={styles.signup}>
          Don't Have an Account?{" "}
          <Link to="/register" className={styles.signupLink}>
            Sign Up
          </Link>
        </p>
        <form className={styles.form}>
          <TextField
            required
            type="email"
            label="E-Mail"
            color="secondary"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <TextField
            required
            type="password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            color="secondary"
            className={styles.input}
          />
          <button
            disabled={isFetching}
            className={styles.button}
            onClick={loginHandler}
            type="submit"
          >
            Log In
          </button>
          {error && (
            <span style={{ textAlign: "center", color: "red" }}>
              Something went wrong
            </span>
          )}

          <Link to="/" className={styles.forget}>
            Have you forgetten your password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
