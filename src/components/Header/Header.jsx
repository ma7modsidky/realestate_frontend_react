import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { BiMenuAltRight } from "react-icons/bi";
import OutSideClickHandler from "react-outside-click-handler";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // useAuth0 hook
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
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
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutSideClickHandler onOutsideClick={closeMenu}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpen)}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/properties">Properties</NavLink>
            <NavLink to="/values">Our Values</NavLink>
            <NavLink to="/contactUs">Contact Us</NavLink>

            {/* login button */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}

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
