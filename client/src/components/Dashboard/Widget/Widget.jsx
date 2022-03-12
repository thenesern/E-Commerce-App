import React from "react";
import styles from "./Widget.module.css";
import {
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
const Widget = ({ type }) => {
  let data;

  const amount = 12;
  switch (type) {
    case "users":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all the Users",
        icon: (
          <PersonOutlined
            className={styles.icon}
            style={{ color: "#005f73" }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "Orders",
        isMoney: false,
        link: "See all the Orders",
        icon: (
          <ShoppingCartOutlined
            className={styles.icon}
            style={{ color: "#ee9b00" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "Earnings",
        isMoney: false,
        link: "See all the Earnings",
        icon: (
          <MonetizationOnOutlined
            className={styles.icon}
            style={{ color: "#606c38" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <h6 className={styles.title}>{data.title}</h6>
        <span className={styles.counter}>
          {data.isMoney && "$"} {amount}
        </span>
        <span className={styles.link}>{data.link}</span>
      </div>
      <div className={styles.right}>{data.icon}</div>
    </div>
  );
};

export default Widget;
