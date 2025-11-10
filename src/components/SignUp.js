import React, { useState } from "react";
import "../App.css";
import "./SignUp.css";
import { useEffect } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [emailForOtp, setEmailForOtp] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFieldErrors({ ...fieldErrors, [e.target.name]: null }); // Clear field error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("http://localhost:8000/api/v1/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "VEEKS2025GxZt",
        },
        body: JSON.stringify({ ...formData, requestType: "inbound" }),
      });

      const data = await response.json();

      if (data.errors) {
        setFieldErrors(data.errors);
      }

      if (response.ok && data.status) {
        setMessage(data.message);
        setEmailForOtp(formData.email);
        setShowOtpModal(true);
      } else {
        setMessage(data.message || "");
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  // this stops users from scrolling the signup page while the OTP modal is open
  useEffect(() => {
    if (showOtpModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showOtpModal]);


  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/v1/confirm_otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "VEEKS2025GxZt",
        },
        body: JSON.stringify({ enter_otp: otp, requestType: "inbound" }),
      });

      const data = await response.json();

      if (response.ok && data.status) {
        alert("OTP verified successfully! You can now log in.");
        setShowOtpModal(false);
        navigate("/login");
      } else {
        setMessage(data.message || "Invalid or expired OTP.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <div className="auth-page">
        <div className="main-content">
          <h3>Create your account and unlock access to timeless elegance.</h3>
          <h1>Join Us Today</h1>
        </div>

        <div className="auth-card">
          {message && <p className="message">{message}</p>}
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className={`input-field ${fieldErrors.username ? "input-error" : ""}`}
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.username && (
                  <p className="field-error">{fieldErrors.username[0]}</p>
                )}
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={`input-field ${fieldErrors.email ? "input-error" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.email && (
                  <p className="field-error">{fieldErrors.email[0]}</p>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="input-wrapper">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`input-field ${fieldErrors.password ? "input-error" : ""}`}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.password && (
                  <p className="field-error">{fieldErrors.password[0]}</p>
                )}
              </div>

              <div className="input-wrapper">
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  className={`input-field ${fieldErrors.confirm_password ? "input-error" : ""}`}
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.confirm_password && (
                  <p className="field-error">{fieldErrors.confirm_password[0]}</p>
                )}
              </div>
            </div>

            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            <p className="text-center" style={{ marginTop: "1.5rem" }}>
              Already a member?{" "}
              <a href="/login" className="text-link">
                Login
              </a>
            </p>
          </form>
        </div>


        {/* Footer  */}
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



      {/* OTP Modal */}
      {showOtpModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Enter OTP</h3>
            <p>
              We’ve sent a verification code to <strong>{emailForOtp}</strong>.
            </p>

            <form onSubmit={handleOtpSubmit}>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="email-input"
                required
              />

              <button type="submit" className="--btn" disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

            </form>
            
            <button
              className="btn btn-secondary" onClick={() => setShowOtpModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
