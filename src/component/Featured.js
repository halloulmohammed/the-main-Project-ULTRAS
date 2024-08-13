import React from "react";
import "../style/featured.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export const Featured = (props) => {
  AOS.init();
  return (
    <div data-aos="fade-up" id="collc-con">
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
              <img src={props.pic} alt="pic" className='img' />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{props.title}</span>
                    <span className="p-company">{props.rate}
                    <i className="fa-solid fa-star star"></i>({props.review})</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner"></div>
                </div>
                <Link to={`/product/${props.id}`} className="cart">
                  <span className="price">{props.price}</span>
                  <span className="add-to-cart">
                    <span className="txt">Add To Card</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
