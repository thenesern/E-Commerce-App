import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import SideBar from "../../../components/Dashboard/SideBar/SideBar";
import styles from "./List.module.css";
import DataTable from "../../../components/Dashboard/DataTable/DataTable";

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
