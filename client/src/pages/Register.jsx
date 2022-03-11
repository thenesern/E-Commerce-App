// Dependencies
import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
// Styles
import styles from "./Register.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const registeringHandler = (e) => {
    e.preventDefault();
    register(dispatch, { firstName, lastName, email, password });
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.closeLink}>
        <Button variant="text" color="error" className={styles.closeBtn}>
          X
        </Button>
      </Link>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.signin}>
          Already have an account?{" "}
          <Link to="/login" className={styles["signIn-link"]}>
            Sign In
          </Link>
        </p>
        <form className={styles.form}>
          <div className={styles.pairs}>
            <div className={styles.pair}>
              <TextField
                type="text"
                label="First Name"
                color="secondary"
                className={styles.input}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.pair}>
              <TextField
                type="text"
                label="Last Name"
                color="secondary"
                className={styles.input}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.pair}>
            <TextField
              type="email"
              label="E-Mail"
              color="secondary"
              className={styles["input_email"]}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.pairs}>
            <div className={styles.pair}>
              <TextField
                type="password"
                label="Password"
                color="secondary"
                className={styles.input}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.pair}>
              <TextField
                type="password"
                label="Password Confirm"
                color="secondary"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.aggreement}>
            <Checkbox />
            <p>
              I accept the{" "}
              <Link to="/" className={styles.privacy}>
                Privacy Statement
              </Link>
            </p>
          </div>
          <button
            disabled={isFetching}
            className={styles.button}
            onClick={registeringHandler}
          >
            Sign Up
          </button>
          {error && (
            <span style={{ textAlign: "center", color: "red" }}>
              Something went wrong
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
