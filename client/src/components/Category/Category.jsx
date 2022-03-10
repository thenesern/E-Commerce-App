//Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "./Category.module.css";

const Category = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.img} alt="" className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <Link to={`/products/${item.category}`}>
          <button className={styles.button}>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
