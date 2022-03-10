// Dependencies
import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
// Styles
import styles from "./Register.module.css";

const Register = () => {
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
              />
            </div>
            <div className={styles.pair}>
              <TextField
                type="text"
                label="Last Name"
                color="secondary"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.pair}>
            <TextField
              type="email"
              label="E-Mail"
              color="secondary"
              className={styles["input_email"]}
            />
          </div>
          <div className={styles.pairs}>
            <div className={styles.pair}>
              <TextField
                type="password"
                label="Password"
                color="secondary"
                className={styles.input}
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
          <button className={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
