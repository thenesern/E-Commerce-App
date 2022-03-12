import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import Widget from "../../components/Widget/Widget";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <SideBar />
        <div>
          <div className={styles.widgets}>
            <Widget type="users" />
            <Widget type="orders" />
            <Widget type="earnings" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
