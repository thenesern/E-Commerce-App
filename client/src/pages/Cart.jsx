import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>YOUR CART</h1>
        <div className={styles.top}>
          <button className={styles["top-button"]}>CONTINUE SHOPPING</button>
          <div className={styles["top-texts"]}>
            <p className={styles["top-text"]}>Shopping Cart(2)</p>
            <p className={styles["top-text"]}>Your Wishlist(0)</p>
          </div>
          <button className={styles["top-button"]}>CHECKOUT NOW</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <div className={styles.product}>
              <div className={styles["product-details"]}>
                <img src="" alt="" className={styles["product-image"]} />
                <div className={styles.details}>
                  <p className={styles["product-name"]}>Product: Shoe</p>
                  <p className={styles["product-code"]}>Code: S1111</p>
                  <p className={styles["product-color"]}></p>
                  <p className={styles["product-size"]}>Size: 38</p>
                </div>
                <div className={styles["price-details"]}>
                  <div className={styles["product-amount-container"]}>
                    <Add />
                    <p className={styles["product-amount"]}>Amount: 1</p>
                    <Remove />
                  </div>
                  <div className={styles["product-price"]}>
                    <p className={styles.price}>Price: $99</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className={styles.Hr} />
            <div className={styles.product}>
              <div className={styles["product-details"]}>
                <img src="" alt="" className={styles["product-image"]} />
                <div className={styles.details}>
                  <p className={styles["product-name"]}>Product: Shoe</p>
                  <p className={styles["product-code"]}>Code: S1111</p>
                  <p className={styles["product-color"]}></p>
                  <p className={styles["product-size"]}>Size: 38</p>
                </div>
                <div className={styles["price-details"]}>
                  <div className={styles["product-amount-container"]}>
                    <Add />
                    <p className={styles["product-amount"]}>Amount: 1</p>
                    <Remove />
                  </div>
                  <div className={styles["product-price"]}>
                    <p className={styles.price}>Price: $99</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className={styles.Hr} />
            <div className={styles.product}>
              <div className={styles["product-details"]}>
                <img src="" alt="" className={styles["product-image"]} />
                <div className={styles.details}>
                  <p className={styles["product-name"]}>Product: Shoe</p>
                  <p className={styles["product-code"]}>Code: S1111</p>
                  <p className={styles["product-color"]}></p>
                  <p className={styles["product-size"]}>Size: 38</p>
                </div>
                <div className={styles["price-details"]}>
                  <div className={styles["product-amount-container"]}>
                    <Add />
                    <p className={styles["product-amount"]}>Amount: 1</p>
                    <Remove />
                  </div>
                  <div className={styles["product-price"]}>
                    <p className={styles.price}>Price: $99</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className={styles.Hr} />
          </div>
          <div className={styles.summary}>
            <h1 className={styles["summary-title"]}>ORDER SUMMARY</h1>
            <div className={styles["summary-item"]}>
              <h3 className={styles["summary-title"]}>Subtotal</h3>
              <p className={styles["summary-item-price"]}>$99</p>
            </div>
            <div className={styles["summary-item"]}>
              <h3 className={styles["summary-title"]}>Estimated Shipping</h3>
              <p className={styles["summary-item-price"]}>$5</p>
            </div>
            <div className={styles["summary-item"]}>
              <h3 className={styles["summary-title-total"]}>Total</h3>
              <p className={styles["summary-item-price"]}>$104</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
