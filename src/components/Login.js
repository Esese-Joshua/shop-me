import React, { useState } from "react";
import "../App.css";
import "./SignUp.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.email]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try{
      const response = await fetch("http://localhost:8000/api/v1/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json",
          "X-Api-Key": "VEEKS2025GxZt"
         },
        body: JSON.stringify({
          ...formData,
          requestType: "inbound"
        })
      });

      const data = await response.json();

      if (response.ok && data.status) {
        setMessage("Login successful!");
        window.location.href = "/"
        setTimeout(() => navigate("/"), 1000); // smooth redirect

      } else {
        setMessage(data.message || "");
      }
    } catch (error) {
      console.error(error) // debug
      setMessage("Network error. Please try again.")
    } finally {
      setLoading(false);
    }
  };


  return ( 
    <div className="container">
      <NavBar />

    <div className="auth-page">
        <div className="main-content">
        <h3>Couldn't stay away for too long, huh?</h3>
        <h1>Continue With Us</h1>
        </div>

      <div className="auth-card">
        <form className="auth-form" onSubmit={handleSubmit}>
            {/* <div className="form-row"> */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-field"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                
                <button type="submit" className="btn" disabled={loading}>
                  {loading ? "Loging in..." : "Login"}
                </button>

                {message && (
                  <p className="text-center" style={{ marginTop: "1rem"}}>
                    {message}

                  </p>
                )}


                <p className="text-center" style={{ marginTop: "1.5rem" }}>
                    Have you joined our community yet?{" "}
                    <a href="/sign_up" className="text-link">
                        Join Us
                    </a>
                </p>

        </form>
        
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <p>© 2025 Veeks Atelier. All rights reserved.</p>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaWhatsapp />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Login;
