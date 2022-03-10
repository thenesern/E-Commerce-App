// Dependencies
import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { sliderItems } from "../../data";
// Hooks
import { useState } from "react";
// Styles
import styles from "./Slider.module.css";
import sliderImage from "../../assets/slider-image.png";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.arrow} ${styles["arrow-left"]}`}
        onClick={() => sliderHandler("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((slide) => (
          <div
            className={styles.slide}
            key={slide.id}
            style={{ backgroundColor: `#${slide.bg}` }}
          >
            <div className={styles["image-container"]}>
              <img className={styles.image} src={sliderImage} alt="Model" />
            </div>
            <div className={styles["slider-container"]}>
              <h1 className={styles["slider-header"]}>{slide.title}</h1>
              <p className={styles["slider-description"]}>{slide.desc}</p>
              <Link to="/products">
                <button className={styles.button}>SHOP NOW</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${styles.arrow} ${styles["arrow-right"]}`}
        onClick={() => sliderHandler("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
