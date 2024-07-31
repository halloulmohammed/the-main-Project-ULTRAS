// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../style/header.css";

// export const Header = () => {
//   const [activeLink, setActiveLink] = useState("/"); // State to keep track of active link
//   const location = useLocation(); // Hook to get current location

//   // Update active link when location changes
//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   return (

//     <div id="header-container">
//       <div>
//         <img src="/images/logo.png" alt="logo" id="logo" />
//       </div>
      // <ul id="nav-bar">
      //   <li className={activeLink === "/" ? "active" : ""}>
      //     <Link to="/">Home</Link>
      //   </li>
      //   <li className={activeLink === "/product" ? "active" : ""}>
      //     <Link to="/product">Products</Link>
      //   </li>
      //   <li className={activeLink === "/article" ? "active" : ""}>
      //     <Link to="/article">Articles</Link>
      //   </li>
      //   <li className={activeLink === "/media" ? "active" : ""}>
      //     <Link to="/media">Media</Link>
      //   </li>
      //   <li>
      //     <a href="/contact">Contact</a>
      //   </li>
      // </ul>
//       <div id="search-bar">
//         <input placeholder="searching for..." />
//         <a href="searching">
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </a>
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import '../scss/css/styles.css'; // Make sure to adjust the path according to your project structure
import { Link } from 'react-router-dom';
// import 'remixicon/fonts/remixicon.css';

export const Header = () => {
  // State for menu, search, and login visibility
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

  useEffect(() => {
    // This is equivalent to componentDidMount and componentDidUpdate
    const handleNavToggle = () => setMenuVisible(true);
    const handleNavClose = () => setMenuVisible(false);
    const handleSearchBtn = () => setSearchVisible(true);
    const handleSearchClose = () => setSearchVisible(false);
    const handleLoginBtn = () => setLoginVisible(true);
    const handleLoginClose = () => setLoginVisible(false);

    document.getElementById('nav-toggle').addEventListener('click', handleNavToggle);
    document.getElementById('nav-close').addEventListener('click', handleNavClose);
    document.getElementById('search-btn').addEventListener('click', handleSearchBtn);
    document.getElementById('search-close').addEventListener('click', handleSearchClose);
    document.getElementById('login-btn').addEventListener('click', handleLoginBtn);
    document.getElementById('login-close').addEventListener('click', handleLoginClose);

    // Cleanup function equivalent to componentWillUnmount
    return () => {
      document.getElementById('nav-toggle').removeEventListener('click', handleNavToggle);
      document.getElementById('nav-close').removeEventListener('click', handleNavClose);
      document.getElementById('search-btn').removeEventListener('click', handleSearchBtn);
      document.getElementById('search-close').removeEventListener('click', handleSearchClose);
      document.getElementById('login-btn').removeEventListener('click', handleLoginBtn);
      document.getElementById('login-close').removeEventListener('click', handleLoginClose);
    };
  }, []);

  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#header" className="nav__logo"><img src="/images/logo.png" alt="logo" id="nav-logo" /></a>
          <div className={`nav__menu ${isMenuVisible ? 'show-menu' : ''}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link">Home</Link>
              </li>
              <li className="nav__item">
                <Link to="/product" className="nav__link">Products</Link>
              </li>
              <li className="nav__item">
                <Link to="/article" className="nav__link">Articles</Link>
              </li>
              <li className="nav__item">
                <Link to="/media" className="nav__link">Media</Link>
              </li>
              <li className="nav__item">
                <Link href="/contact" className="nav__link">Contact</Link>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            <i className="ri-search-line nav__search" id="search-btn"></i>
            <i className="ri-user-line nav__login" id="login-btn"></i>
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      <div className={`search ${isSearchVisible ? 'show-search' : ''}`} id="search">
        <form action="" className="search__form">
          <i className="ri-search-line search__icon"></i>
          <input type="search" placeholder="What are you looking for?" className="search__input" />
        </form>
        <i className="ri-close-line search__close" id="search-close"></i>
      </div>

      <div className={`login ${isLoginVisible ? 'show-login' : ''}`} id="login">
        <form action="" className="login__form">
          <h2 className="login__title">Log In</h2>
          <div className="login__group">
            <div>
              <label htmlFor="email" className="login__label">Email</label>
              <input type="email" placeholder="Write your email" id="email" className="login__input" />
            </div>
            <div>
              <label htmlFor="password" className="login__label">Password</label>
              <input type="password" placeholder="Enter your password" id="password" className="login__input" />
            </div>
          </div>
          <div>
            <p className="login__signup">
              You do not have an account? <a href="#home">Sign up</a>
            </p>
            <a href="#home" className="login__forgot">You forgot your password</a>
            <button type="submit" className="login__button">Log In</button>
          </div>
        </form>
        <i className="ri-close-line login__close" id="login-close"></i>
      </div>
    </div>
  );
};



