import React from "react";
import styles from "./Widget.module.css";
import {
  LocalMall,
  MonetizationOnOutlined,
  PersonOutlined,
  ShoppingCartOutlined,
  StoreMallDirectoryTwoTone,
} from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllOrders } from "../../../redux/apiCalls";
import { useEffect } from "react";

const Widget = ({ type }) => {
  const dispatch = useDispatch();
  let data;

  useEffect(() => {
    getAllOrders(dispatch);
  }, [dispatch]);

  const users = useSelector(
    (state) => state.users.users.filter((user) => user.isAdmin === false).length
  );
  const orders = useSelector((state) => state.orders.orders.data.orders.length);
  const products = useSelector((state) => state.product.products.length);

  switch (type) {
    case "users":
      data = {
        title: "Users",
        isMoney: false,
        link: "/dashboard/users",
        amount: users,
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
        link: "/dashboard/orders",
        amount: orders,
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
        link: "/dashboard/earnings",
        amount: 1111,
        icon: (
          <MonetizationOnOutlined
            className={styles.icon}
            style={{ color: "#606c38" }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "Products",
        isMoney: false,
        link: "/dashboard/products",
        amount: products,
        icon: (
          <StoreMallDirectoryTwoTone
            className={styles.icon}
            style={{ color: "#001219" }}
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
          {data.isMoney && "$"} {data.amount}
        </span>
        <Link to={data.link} className={styles.link}>
          See all the {data.title}
        </Link>
      </div>
      <div className={styles.right}>{data.icon}</div>
    </div>
  );
};

export default Widget;
