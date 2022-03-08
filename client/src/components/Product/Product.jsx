import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styles from "./Product.module.css";

const Product = ({ item }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={styles.circle} />
      <img src={item.image} alt="" className={styles.image} />
      {isShown && (
        <div
          className={styles.info}
          style={isShown ? { opacity: "1" } : { opacity: "0" }}
        >
          <div className={styles.icon}>
            <ShoppingCartOutlined />
          </div>
          <div className={styles.icon}>
            <SearchOutlined />
          </div>
          <div className={styles.icon}>
            <FavoriteBorderOutlined />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
