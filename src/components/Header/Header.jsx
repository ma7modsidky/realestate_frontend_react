import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { BiMenuAltRight } from "react-icons/bi";
import OutSideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = (menuOpen) => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  console.log("re render", menuOpen);
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutSideClickHandler onOutsideClick={closeMenu}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpen)}>
            <NavLink to="/properties">Properties</NavLink>
            <NavLink to="/values">Our Values</NavLink>
            <NavLink to="/contactUs">Contact Us</NavLink>
            <button>
              <a href="#">Get Started</a>
            </button>
            {/* <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
            <button>
              <a href="#">Contact</a>
            </button> */}
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <BiMenuAltRight size={30} />
          </div>
        </OutSideClickHandler>
      </div>
    </section>
  );
};

export default Header;
