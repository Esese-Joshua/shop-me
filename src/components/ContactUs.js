import "../App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./ContactUs.css";


const ContactUs = () => {
  return (
    <div className="container">
        <NavBar />

        <div className="main-content">
            <h3> Get in Touch </h3>
            <h1> We’d Love to Hear From You </h1>
            <h3> Have questions about our collections or your order? Reach out to us, we’re always here to help. </h3>
        </div>

        <div className="contact-form-section">
            <form className="contact-form">

                <div className="form-left">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@example.com"
                        required
                        />
                    </div>
                </div>



                <div className="form-right">
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                        name="message"
                        id="message"
                        rows="6"
                        placeholder="Write your message..."
                        required
                        ></textarea>
                    </div>

                <button type="submit" className="btn"> Send Message </button>
                </div>
            </form>
        </div>


        {/* Contact Banner */}
        <div className="promotional-banner">
            <h1>Contact Details </h1>
            <p><strong>Email:</strong> support@veeksatelier.com </p>
            <p><strong>Phone:</strong> +234 (811) 111-111 </p>
            <p><strong>Address:</strong> 42 Luxury Avenue, Ikoyi, Lagos, Nigeria </p>
        </div>

        <Footer />
    </div>
  );

}

export default ContactUs;   