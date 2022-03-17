import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import SideBar from "../../../components/Dashboard/SideBar/SideBar";
import styles from "./Users.module.css";
import DataTable from "../../../components/Dashboard/UserTable/UserTable";

const List = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.listContainer}>
        <SideBar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
