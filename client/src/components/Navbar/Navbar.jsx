import React from "react";
import styles from "./Navbar.module.css";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

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
          <h1>Logo</h1>
        </div>
        <div className={styles.right}>
          <div className={styles["menu-item"]}>Sign Up</div>
          <div className={styles["menu-item"]}>Sign In</div>
          <div className={styles["menu-item"]}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
