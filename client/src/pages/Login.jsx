import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.closeLink}>
        <Button variant="text" color="error" className={styles.closeBtn}>
          X
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
            type="email"
            label="E-Mail"
            color="secondary"
            className={styles.input}
          />
          <TextField
            type="password"
            label="Password"
            color="secondary"
            className={styles.input}
          />
          <button className={styles.button}>Log In</button>
          <Link to="/" className={styles.forget}>
            Have you forgetten your password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
