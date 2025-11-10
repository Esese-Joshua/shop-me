import React from "react";
import "../App.css";
import jewelryImg from "../img/jewelry.jpg";
import fashionImg from "../img/fashion.jpg";
import accessoriesImg from "../img/accessories.jpg";
import overlayImg from "../img/overlay.avif"; 
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container"> 
      <NavBar />

      {/* Main Content Section */}
      <div className="main-content">
        <h3> Spring Collection 2025 </h3>
        <h1> Elegance meets exquisite design </h1>
      </div>

      <div className="overlay-content">
        <img src={overlayImg} alt="overlay-pic" className="overlayImg"/>
          <div className="overlay-text">
          <p> Discover the latest trends in fashion with our new spring collection. From vibrant colors to timeless classics, we have something for everyone. </p>
          
          <Link to="/aboutus">
              <button className="btn">Our Story</button>
          </Link>
          </div>
      </div>


      {/* Categories Section */}
      <div className="category-header">
        <h1> Discover Your Style </h1>
      </div>

      <div className="category">
        <div className="category-card">
            <img src={jewelryImg} alt="jewelry" />
            <h2> Jewelry </h2>
            <p> Timeless pieces that elevate any ensemble Handcrafted brilliance that defines timeless elegance.
                From dainty pieces to statement designs, our jewelry celebrates individuality and sophistication in every detail.
            </p>
        </div>

        <div className="category-card">
          <img src={fashionImg} alt="fashion" />
          <h2> Fashion </h2>
          <p> Discover styles that speak confidence and creativity.
              Our fashion line blends classic charm with modern expression, crafted for those who dare to stand out.  </p>
        </div>

        <div className="category-card">
          <img src={accessoriesImg} alt="accessories" />
          <h2> Accessories </h2>
          <p> Elevate every look with our curated accessories. Each piece adds a touch of refinement, the perfect harmony between function, flair, and finesse from premium bags, shoes, and finishing touches.  </p>
        </div>
      </div>


      {/* Promotion banner */}
      <div className="promotional-banner">
        <h1> Join Our Cycle </h1>
        <p>
          Receive exclusive updates, early access to new collections, and special offers. 
        </p>
        <input type="email" 
            placeholder="Enter your email" 
            className="email-input" 
        />
        <button className="btn"> Subscribe </button>
      </div>

      <Footer />


    </div>
  );
}

export default Home;