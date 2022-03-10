// Dependencies
import React from "react";
// Styles
import styles from "./Categories.module.css";
// Components
import Category from "../Category/Category";
import { categories } from "../../data";

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
