// Dependencies
import React from "react";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
// Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.language}>EN</span>
          <div className={styles["search-container"]}>
            <input className={styles.input} type="text" />
            <Search className={styles.search} />
          </div>
        </div>
        <div className={styles.center}>
          <Link to="/" className={styles.link}>
            <h1>Logo</h1>
          </Link>
        </div>
        <div className={styles.right}>
          <Link to="register" className={styles["menu-item"]}>
            Sign Up
          </Link>
          <Link to="login" className={styles["menu-item"]}>
            Sign In
          </Link>
          {false && (
            <div className={styles["menu-item"]}>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
