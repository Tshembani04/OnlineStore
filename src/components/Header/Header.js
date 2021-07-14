import { Link } from "react-router-dom";
import "./Header.Styles.scss";
import Cart from "../Cart-Icon/Cart";
import React from "react";

function Header() {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/"> SHOPABAG </Link>{" "}
      </div>{" "}
      {/* Unordered list to contain our links */}{" "}
      <ul>
        <li>
          <Link to="/"> Home </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/shop"> Shop </Link>{" "}
        </li>{" "}
      </ul>{" "}
      <Cart />
    </nav>
  );
}

export default Header;
