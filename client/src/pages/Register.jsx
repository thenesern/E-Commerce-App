import React from "react";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.signin}>
          Do you have already an account? <a href="/">Sign In</a>{" "}
        </p>
        <form action="" className={styles.form}>
          <div className={styles.pairs}>
            <div className={styles.pair}>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className={styles.input}
              />
            </div>
            <div className={styles.pair}>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.pair}>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" className={styles.input} />
          </div>
          <div className={styles.pairs}>
            <div className={styles.pair}>
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
              />
            </div>
            <div className={styles.pair}>
              <label htmlFor="">Password Confirm</label>
              <input
                type="password"
                placeholder="Password Confirm"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles["aggreement-container"]}>
            <input type="checkbox" />
            <p className={styles.aggreement}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
              deserunt ex quidem fuga iste unde similique, repellat atque nam
              temporibus ipsam quaerat animi ut! Vitae sunt sit aliquid eligendi
              consequatur!
            </p>
          </div>
          <button className={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
