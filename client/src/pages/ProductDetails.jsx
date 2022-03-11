// Dependencies
import React from "react";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// Styles
import styles from "./ProductDetails.module.css";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Product = () => {
  const [productSize, setProductSize] = useState();
  const [productColor, setProductColor] = useState();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const quantityHandler = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(+quantity - 1);
    } else {
      setQuantity(+quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProduct();
  }, [id]);

  const cartHandler = () => {
    dispatch(addProduct({ ...product, quantity, productColor, productSize }));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles["image-container"]}>
          <img src={product.image} alt="" className={styles.image} />
        </div>
        <div className={styles["info-container"]}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <span className={styles.price}>Price: $ {product.price}</span>
          <div className={styles["filter-container"]}>
            <div className={styles.filter}>
              <h3 className={styles["filter-title"]}>Color</h3>
              <div className={styles.filters}>
                {product.color?.map((c) => (
                  <div
                    color={(c) => setColor(c)}
                    key={c}
                    onClick={() => setProductColor(c)}
                    style={{ backgroundColor: `${color}` }}
                    className={styles["filter-color"]}
                  />
                ))}
              </div>
            </div>
            <div className={styles.filter}>
              <h3 className={styles["filter-title"]}>Size</h3>
              <select>
                {product.size?.map((s) => (
                  <option
                    onClick={() => setProductSize(s)}
                    key={s}
                    className={styles["filter-size"]}
                  >
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles["add-container"]}>
            <div className={styles["amount-container"]}>
              <Remove onClick={() => quantityHandler("dec")} />
              <span className={styles.amount}>{+quantity}</span>
              <Add onClick={() => quantityHandler("inc")} />
            </div>
            <button onClick={cartHandler} className={styles.button}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
