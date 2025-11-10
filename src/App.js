import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import About from "./components/AboutUs";   
import Cart from "./components/Cart"; 
import ContactUs from "./components/ContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/aboutus" element={<About />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
