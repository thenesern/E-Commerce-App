import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign In</h1>
        <p className={styles.signup}>
          Don't you have an account? <a href="/">Sign Up</a>
        </p>
        <form action="" className={styles.form}>
          <div className={styles.pair}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" className={styles.input} />
          </div>

          <div className={styles.pair}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>

          <button className={styles.button}>Sign In</button>

          <a className={styles.remember} href="/">
            {" "}
            Don't you remember the password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
