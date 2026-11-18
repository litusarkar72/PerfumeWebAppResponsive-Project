import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg perfume-navbar fixed-top">
      <div className="container-fluid px-5">

        <Link className="nav-class navbar-brand perfume-brand" to="/">
          <img src="https://www.myperfumeshop.in/cdn/shop/files/black_logo_mps_png.png?v=1736419126&width=140" alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          {/* Center nav links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 perfume-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="d-flex gap-3 social-icons">
            <a href="/facebook" className="text-dark fs-5">
              <FaFacebookF />
            </a>
            <a href="/instagram" className="text-dark fs-5">
              <FaInstagram />
            </a>
            <a href="/twitter" className="text-dark fs-5">
              <FaTwitter />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
