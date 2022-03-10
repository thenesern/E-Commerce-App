// Dependencies
import React, { useState } from "react";

// Styles
import styles from "./ProductList.module.css";
import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import { useLocation } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [sort, setSort] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [filters, setFilters] = useState({});
  const handleColor = (e) => {
    const value = e.target.value;
    setColor(value);
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };
  const handleSize = (e) => {
    const value = e.target.value;
    setSize(value);
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };
  return (
    <div className={styles.container}>
      <Announcement />
      <Navbar />
      <h1 className={styles.title}>{category}</h1>
      <div className={styles["filter-container"]}>
        <div className={styles.filter}>
          <span className={styles["filter-text"]}>Filter Products:</span>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Colors</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              name="color"
              onChange={handleColor}
            >
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="gray">Gray</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              name="size"
              onChange={handleSize}
            >
              <MenuItem value="XS">XS</MenuItem>
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={styles.filter}>
          <span className={styles["filter-text"]}>Sort Products:</span>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="asc">Price (Asc)</MenuItem>
              <MenuItem value="desc">Price (Desc)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Products
        category={category}
        color={color}
        filters={filters}
        size={size}
        sort={sort}
      />
      <Footer />
    </div>
  );
};

export default ProductList;
