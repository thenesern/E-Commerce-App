// Dependencies
import React, { useState } from "react";
import { Add, Remove } from "@material-ui/icons";
// Styles
import styles from "./Cart.module.css";
// Components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const history = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
      } catch (err) {
        console.log(err.message);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

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
          <StripeCheckout
            name="My Commerce"
            image=""
            billingAddress
            shippingAddress
            description={`Your total is $${cart.ttoal}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <button className={styles["top-button"]}>CHECKOUT NOW</button>
          </StripeCheckout>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            {cart.products.map((product) => (
              <div className={styles.product}>
                <div className={styles["product-details"]}>
                  <img
                    src={product.image}
                    alt=""
                    className={styles["product-image"]}
                  />
                  <div className={styles.details}>
                    <p className={styles["product-name"]}>
                      <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                        Product Name:
                      </span>
                      {product.title}
                    </p>
                    <p className={styles["product-code"]}>
                      <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                        Id:
                      </span>
                      {product._id}
                    </p>
                    <p style={{ display: "flex" }}>
                      <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                        Color:
                      </span>
                      <div
                        className={styles["product-color"]}
                        style={{ backgroundColor: `${product.color}` }}
                      />
                    </p>
                    <p className={styles["product-size"]}>
                      <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                        Size:
                      </span>{" "}
                      {product.size}
                    </p>
                  </div>
                  <div className={styles["price-details"]}>
                    <div className={styles["product-amount-container"]}>
                      <Add />
                      <p className={styles["product-amount"]}>
                        Amount: {product.quantity}
                      </p>
                      <Remove />
                    </div>
                    <div className={styles["product-price"]}>
                      <p className={styles.price}>
                        Price: $ {product.price * product.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <hr className={styles.Hr} />
          </div>
          <div className={styles.summary}>
            <h1 className={styles["summary-title"]}>ORDER SUMMARY</h1>
            <div className={styles["summary-item"]}>
              <h3 className={styles["summary-title"]}>Subtotal</h3>
              <p className={styles["summary-item-price"]}>$ {cart.total}</p>
            </div>
            <div className={styles["summary-item"]}>
              <h3 className={styles["summary-title"]}>Estimated Shipping</h3>
              <p className={styles["summary-item-price"]}>$5</p>
            </div>
            <div className={styles["summary-item"]}>
              <h3 className={styles["summary-title-total"]}>Total</h3>
              <p className={styles["summary-item-price"]}>$ {cart.total}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
