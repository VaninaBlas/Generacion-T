import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import NavBar from "../../components/NavBar/NavBar.js";
import Carousel from "../../components/Carousel/Carousel.js";
import ProductList from "../../components/Products/ProductList.js";
import ThemeToggleButton from "../../components/Theme/ThemeToggleButton.js";
import "./DashPage.js";

function DashPage() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);
  return (
    <div className={`dashboard-container ${theme}`}>
      <NavBar />
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="product-list-container" style={{ marginTop: "85px" }}>
        <ProductList />
      </div>
      <ThemeToggleButton />
    </div>
  );
}

export default DashPage;
