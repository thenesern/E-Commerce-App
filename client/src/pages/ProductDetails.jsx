// Dependencies
import React from "react";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
// Styles
import styles from "./ProductDetails.module.css";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles["image-container"]}>
          <img src="" alt="" className={styles.image} />
        </div>
        <div className={styles["info-container"]}>
          <h1 className={styles.title}>Lorem</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            ducimus numquam quisquam minus officia. Quisquam necessitatibus
            quia, eligendi error ab modi animi quasi totam doloremque mollitia,
            asperiores enim consequuntur possimus?
          </p>
          <span className={styles.price}>Price</span>
          <div className={styles["filter-container"]}>
            <div className={styles.filter}>
              <h3 className={styles["filter-title"]}>Color</h3>
              <div className={styles.filters}>
                <div className={styles["filter-color"]} />
                <div className={styles["filter-color"]} />
                <div className={styles["filter-color"]} />
              </div>
            </div>
            <div className={styles.filter}>
              <h3 className={styles["filter-title"]}>Size</h3>
              <select>
                <option className={styles["filter-size"]}>XS</option>
                <option className={styles["filter-size"]}>S</option>
                <option className={styles["filter-size"]}>M</option>
                <option className={styles["filter-size"]}>L</option>
                <option className={styles["filter-size"]}>XL</option>
              </select>
            </div>
          </div>
          <div className={styles["add-container"]}>
            <div className={styles["amount-container"]}>
              <Remove />
              <span className={styles.amount}>1</span>
              <Add />
            </div>
            <button className={styles.button}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
