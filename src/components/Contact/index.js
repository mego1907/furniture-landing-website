import React from 'react'
import "./style.scss"
import {IoIosSend} from 'react-icons/io'

const Contact = () => {
  return (
    <div className="contact my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4>Information</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>News</li>
              <li>Store</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Collections</h4>
            <ul>
              <li>Wooden Chair</li>
              <li>Royal Cloth Sofa</li>
              <li>Accent Chair</li>
              <li>Bed</li>
              <li>Hanging Lamp</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>My Accounts</h4>
            <ul>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Community</li>
              <li>Order History</li>
              <li>My Cart</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4>Newsletter</h4>
            <p>Subscribe to get latest news,update and information.</p>
            <form>
              <input type="text" placeholder="Enter Email Here..." />
              <button type="button"><IoIosSend /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
