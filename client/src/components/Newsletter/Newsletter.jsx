// Dependencies
import React from "react";
import { Send } from "@material-ui/icons";
// Styles
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>
      <p className={styles.description}>
        Get timely updates from your favorite products.
      </p>
      <div className={styles["input-container"]}>
        <input type="text" className={styles.input} placeholder="Your Email" />
        <button className={styles.button}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
