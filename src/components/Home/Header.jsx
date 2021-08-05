import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            In A Flash
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                style={{ color: "#000" }}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
              <NavLink
                to="/blogs"
                style={{ color: "#000" }}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
              <NavLink
                to="/login"
                style={{ color: "#000" }}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
