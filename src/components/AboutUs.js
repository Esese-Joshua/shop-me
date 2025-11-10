import jewelryImg from "../img/jewelry.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";



const AboutUs = () => {
  return (
    <div className="container"> 
        <NavBar />

        {/* Main Content Section */}
        <div className="main-content">
            <h3> Spring Collection 2025 </h3>
            <h1> Our Story </h1>
            <h3> 
                Built on passion and driven by creativity, we’ve redefined fashion for the modern world — where comfort meets elegance and every piece tells your story. Inspired by beauty, culture, and authenticity, we craft collections that embody timeless sophistication. With every design, we celebrate individuality through thoughtful craftsmanship, sustainable choices, and the art of self-expression. 
            </h3>
        </div>


        {/* WHO WE ARE */}
        <div className="category">
            <div className="category-card">
                <img src={jewelryImg} alt="jewelry" />
                <h2>Who We Are</h2>
                <p> Founded with a vision to celebrate individuality, our brand is home to timeless designs and conscious craftsmanship. Each piece is created with care, inspired by global trends, yet deeply rooted in authenticity. </p>
            </div>

            {/* OUR MISSION */}
            <div className="category-card">
                <img src={jewelryImg} alt="jewelry" />
                <h2>Our Mission</h2>
                <p> To empower people through fashion, promoting confidence, sustainability, and self-expression. We believe that what you wear should reflect who you are and what you stand for. </p>
            </div>

        {/* TEAM / CULTURE */}
            <div className="category-card">
                <img src={jewelryImg} alt="jewelry" />
                <h2>Meet Our Team</h2>
                <p> From designers to dreamers, our team is united by a shared love for creativity and excellence. We’re proud to be a growing community of thinkers, makers, and storytellers. </p>
            </div>
        </div>

        <div className="promotional-banner">
            <h1> Join Our Cycle </h1>
            <p> Receive exclusive updates, early access to new collections, and special offers. </p>
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="btn"> Subscribe </button>
        </div>

        <Footer />
        
    </div>
  );

};

export default AboutUs;
