// Dependencies
import React from "react";
import { popularProducts } from "../../data";
// Styles
import styles from "./Products.module.css";
// Components
import Product from "../Product/Product";

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
