import React from "react";
import { Hero } from "../component/Hero";
import { Featured } from "../component/Featured";
import "../App.css";
import { Appsection } from "../component/Appsection";
import items from "./../data/Productlist";
export const Home = () => {
  return (
    <div>
      <Hero />
      <div id="featured-container">
        <h1>FEATURED</h1>
        <p>Discover our new brand collections</p>
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
      <Appsection />
      <div id="latest-container">
        <h1>LATEST ITEMS</h1>
        <div id="latest-container">
          {items[3].map((item, i) => (
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
    </div>
  );
};
