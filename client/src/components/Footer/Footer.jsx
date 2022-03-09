import {
  Facebook,
  Instagram,
  MailOutline,
  Payment,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>Logo</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est minima
          unde, placeat debitis ex laboriosam voluptatem? Suscipit reiciendis
          doloribus obcaecati? Qui saepe perferendis explicabo sit quasi dolorem
          non blanditiis corporis!
        </p>
        <div className={styles["social-container"]}>
          <div className={styles.icon}>
            <Facebook />
          </div>
          <div className={styles.icon}>
            <Instagram />
          </div>
          <div className={styles.icon}>
            <Twitter />
          </div>
          <div className={styles.icon}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>Pages</h3>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles["list-item"]}>
            <Link to="/cart" className={styles.link}>
              Cart
            </Link>
          </li>
          <li className={styles["list-item"]}>Woman Fashion</li>
          <li className={styles["list-item"]}>Man Fashion</li>
          <li className={styles["list-item"]}>Accessories</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles["contact-item"]}>
          <Room />
          <address>12 Commerce Street, West Canyon 11256</address>
        </div>
        <div className={styles["contact-item"]}>
          <Phone />
          <p> +1 123 321 22 33</p>
        </div>
        <div className={styles["contact-item"]}>
          <MailOutline />
          <p>contact@mycommerce.com</p>
        </div>
        <Payment />
        <Payment />
        <Payment />
        <Payment />
      </div>
    </div>
  );
};

export default Footer;
