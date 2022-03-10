// Dependencies
import React from "react";
// Styles
import styles from "./ProductList.module.css";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <Announcement />
      <Navbar />
      <h1 className={styles.title}>Dresses</h1>
      <div className={styles["filter-container"]}>
        <div className={styles.filter}>
          <span className={styles["filter-text"]}>Filter Products:</span>
          <select name="" id="" className={styles.select}>
            <option disabled selected>
              Color
            </option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select name="" id="" className={styles.select}>
            <option disabled selected>
              Size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles["filter-text"]}>Sort Products:</span>
          <select name="" id="" className={styles.select}>
            <option selected>Newest</option>
            <option value="">Price (Asc)</option>
            <option value="">Price (Des)</option>
          </select>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default ProductList;
