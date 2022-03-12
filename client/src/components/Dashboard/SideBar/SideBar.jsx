import {
  BarChartOutlined,
  Group,
  Home,
  ShoppingCartOutlined,
  StoreMallDirectory,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <h6 className={styles.header}>Dashboard</h6>
        <ul className={styles.list}>
          <li className={styles.li}>
            <Link to="/dashboard" className={styles.link}>
              <Home color="primary" />
              Home
            </Link>
          </li>
        </ul>
        <h6 className={styles.header}>Analytics</h6>
        <ul className={styles.list}>
          <li className={styles.li}>
            <Link to="/dashboard" className={styles.link}>
              <ShoppingCartOutlined color="primary" />
              Orders
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboard" className={styles.link}>
              <BarChartOutlined color="primary" />
              Earnings
            </Link>
          </li>
        </ul>
        <h6 className={styles.header}>Management</h6>
        <ul className={styles.list}>
          <li className={styles.li}>
            <Link to="/dashboard/products" className={styles.link}>
              <StoreMallDirectory color="primary" />
              Products
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboard/users" className={styles.link}>
              <Group color="primary" />
              Users
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
