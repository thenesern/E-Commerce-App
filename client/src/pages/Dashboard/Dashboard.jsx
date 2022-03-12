import React from "react";
import Featured from "../../components/Dashboard/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Dashboard/SideBar/SideBar";
import Widget from "../../components/Dashboard/Widget/Widget";
import styles from "./Dashboard.module.css";
import Chart from "../../components/Dashboard/Chart/Chart";
import List from "../../components/Dashboard/Table/Table";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <SideBar />
        <div className={styles.container}>
          <div className={styles.widgets}>
            <Widget type="users" />
            <Widget type="orders" />
            <Widget type="earnings" />
          </div>
          <div className={styles.charts}>
            <Featured />
            <Chart />
          </div>
          <div className={styles.listContainer}>
            <div className={styles.listTitle}>Lastest Transactions</div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
