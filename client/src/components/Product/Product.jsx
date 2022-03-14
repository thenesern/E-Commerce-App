// Dependencies
import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
// Hooks
import { useState } from "react";
// Styles
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.card}>
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
            <Link to={`/product/${item._id}`}>
              <div className={styles.icon}>
                <SearchOutlined />
              </div>
            </Link>
            <div className={styles.icon}>
              <FavoriteBorderOutlined />
            </div>
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <h4>{item.title}</h4>
        <span>${item.price}</span>
        {item.color?.map((c) => (
          <div
            key={c}
            style={{ backgroundColor: `${c}` }}
            className={styles["filter-color"]}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
