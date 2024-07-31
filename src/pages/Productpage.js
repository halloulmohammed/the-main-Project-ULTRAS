import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../component/Comments";
import { Featured } from "../component/Featured";
import {PaymentWidget} from "./PaymentWidget"; // Import the PaymentWidget component
import "../style/singleprod.css";
import items from "./../data/Productlist";

export const Productpage = () => {
  const params = useParams();
  const id = params.id;
  const product = items[4].find((product) => product.id === id);
  // const [size, setSize] = useState("");
  // const [quantity, setQuantity] = useState(1);
  const [showPayment, setShowPayment] = useState(false);

  const handleShopNowClick = () => {
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  // const showSize = (event) => {
  //   setSize(event.target.value);
  // };

  // const addQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const takeQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  return (
    <div id="Singleprod">
      <div className="single-prod-hero">
        <img src={product.pic} alt={product.title} id="prodimg" />
        <div className="prod-box">
          <span class = "product-name">(New) {product.title}</span>
          <span class = "product-price">{product.price}</span>
          <div className = "product-rating">
              <span><i className = "fas fa-star"></i></span>
              <span><i className = "fas fa-star"></i></span>
              <span><i className = "fas fa-star"></i></span>
              <span><i className = "fas fa-star"></i></span>
              <span><i className = "fas fa-star-half-alt"></i></span>
              <span>(350 ratings)</span>
          </div>
          <div id="description">
            <p>{product.description}</p>
          </div>
          
          <div className = "btn-groups">
            <button type = "button" className = "add-cart-btn"><i className = "fas fa-shopping-cart"></i>add to cart</button>
            <button type = "button" className = "buy-now-btn" onClick={handleShopNowClick}><i className = "fas fa-wallet"></i>buy now</button>
          </div>
        </div>
      </div>
      <div id="related-product">
        <h3 className="section-title">Related products:</h3>
        <div id="product-containner">
          {items[2].map((item, i) => (
            <Featured
              key={i}
              id={item.id}
              pic={item.pic}
              title={item.title}
              price={item.price}
              rate={item.rate}
              review={item.review}
            />
          ))}
        </div>
      </div>
      <div id="review-box">
        <h3 className="section-title">Review:</h3>
        <div className="review-comment" >
          <Comments />
        </div>
      </div>
      {showPayment && <PaymentWidget onClose={handleClosePayment} />}
    </div>
  );
};


