// Dependencies
import React from "react";
// Components
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar style={{ height: "90vh" }} />
        <Slider style={{ height: "10vh" }} />
      </div>
      <div style={{ marginTop: "5%" }}>
        <Categories />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
