import "./Cart.css";
import { Trash2 } from "lucide-react"; // optional, for delete icon
import NavBar from "./NavBar";
import Footer from "./Footer";
import jewelryImg from "../img/jewelry.jpg";


const Cart = () => {

  return (
    <div className="container">
        <NavBar />

      <div className="main-content">
          <h1>Your Shopping Cart</h1>
      </div>

      {/* {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping to add items.</p>
      ) : ( */}
        <div className="cart-content">
          <div className="cart-items">
              <div className="cart-item">
                <img src={jewelryImg} alt="" className="cart-item-img" />
                <div className="cart-item-details">
                  <h2> Gucci </h2>
                  <p className="item-price">$1700</p>
                  <div className="quantity-control">
                    <button> - </button>
                    <span> 2 </span> {/* quantity counter */}
                    <button> + </button>
                  </div>
                </div>

                <div className="cart-item-action">
                  <Trash2 className="delete-icon" />
                </div>
              </div>
          </div>
          
          {/* cart-summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <p>Subtotal</p>
              <p>$2000</p>
            </div>
            <div className="summary-details">
              <p>Tax</p>
              <p>$7.00</p>
            </div>
            <div className="summary-total">
              <p>Total</p>
              <p>$5000</p>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      

        <Footer />
    </div>
  );
};

export default Cart;
