import "../App.css";
import jewelryImg from "../img/jewelry.jpg";
import NavBar from "./NavBar";
import { ShoppingCart } from "lucide-react";
import Footer from "./Footer";


const Women = () => {
  return (
    <div className="container">
      <NavBar />

      {/* Main Content Section */}
      <div className="main-content">
        <h3>Women's Collection</h3>
        <h1>Elegance Meets Modern Femininity</h1>
        <h3 className="page-intro">
          Discover our curated selection of fashion pieces designed for the modern woman, where sophistication meets effortless style.
        </h3>
      </div>

      {/* PRODUCT GRID */}
      <div className="category">
        <div className="category-card">
          <img src={jewelryImg} alt="Floral Dress" />
          <h2>Floral Silk Dress</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Handbag" />
          <h2>Signature Leather Handbag</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Heels" />
          <h2>Classic Nude Heels</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Perfume" />
          <h2>Blossom Eau de Parfum</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Floral Dress" />
          <h2>Floral Silk Dress</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category-card">
          <img src={jewelryImg} alt="Floral Dress" />
          <h2>Floral Silk Dress</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Handbag" />
          <h2>Signature Leather Handbag</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Heels" />
          <h2>Classic Nude Heels</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Perfume" />
          <h2>Blossom Eau de Parfum</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>        </div>

        <div className="category-card">
          <img src={jewelryImg} alt="Floral Dress" />
          <h2>Floral Silk Dress</h2>
          <div className="price-row">
            <p>$120</p>
            <ShoppingCart className="cart-icon" />
          </div>
        </div>
      </div>

      {/* PROMO SECTION */}
      <div className="promotional-banner">
        <h1>Redefine Your Wardrobe</h1>
        <p>
          Step into the season with confidence — explore new arrivals that capture timeless grace and individuality.
        </p>
        <button className="btn">Shop Now</button>
      </div>

      <Footer />
    </div>
  );

}

export default Women;   