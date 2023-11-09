import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import "./index.css";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Move the hook call to the top level

  const onLogout = () => {
    Cookies.remove("Token");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <span className="shopme">
        <BsFillBagFill className="BS-font" />
        Shopme
      </span>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
        <li>
          <Link to="/MyAccount">MyAccount</Link>
        </li>
        <li>
          <Link to="/login">
            <button className="button" type="button" onClick={onLogout}>
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
