import { BarChartOutlined, StoreMallDirectory } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div className={styles.container}>
      <h6 className={styles.header}>Dashboard</h6>
      <ul className={styles.list}>
        <li className={styles.link}>
          <Link to="/dashboard" className={styles.link}>
            Home
          </Link>
        </li>
      </ul>
      <h6 className={styles.header}>Analytics</h6>
      <ul className={styles.list}>
        <li className={styles.link}>
          <BarChartOutlined color="primary" />
          Sales
        </li>
      </ul>
      <h6 className={styles.header}>Management</h6>
      <ul className={styles.list}>
        <li>
          <Link to="/dashboard/products" className={styles.link}>
            <StoreMallDirectory color="primary" />
            Products
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users" className={styles.link}>
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
