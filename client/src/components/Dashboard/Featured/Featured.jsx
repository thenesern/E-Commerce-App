import React from "react";
import styles from "./Featured.module.css";
import { MoreVert } from "@material-ui/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.header}>Total Revenue</h1>
        <MoreVert />
      </div>
      <div className={styles.bottom}>
        <div className={styles["featured-chart"]}>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className={styles.title}>Total sales made today</p>
        <p className={styles.amount}>$40</p>
        <p className={styles.description}>
          Previous transactions processing. Last payments may not be included
        </p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Week</div>
            <div className={styles.itemResult}>
              <div className={styles.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemTitle}>Last Month</div>
            <div className={styles.itemResult}>
              <div className={styles.resultAmount}>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
