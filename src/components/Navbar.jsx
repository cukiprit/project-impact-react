import { Link } from "react-router-dom";
import { BsChevronDown, BsList, BsX } from "react-icons/bs";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header d-flex align-items-center">
      <div className={`container-fluid container-xl d-flex align-items-center justify-content-between ${isNavOpen ? "mobile-nav-right" : ""}`}>
        <Link to="/" className="logo d-flex align-items-center">
          <img
            src="https://i.ibb.co/Qm0XBTd/logo-tugs-skilvul.png"
            alt="Bootstrap"
            width="150"
            height="50"
          />
        </Link>
        <i
          className={`mobile-nav-toggle bi ${isNavOpen ? "bi-x" : "bi-list"} text-white`}
          onClick={toggleNav}
        >
          {isNavOpen ? <BsX /> : <BsList />}
        </i>
        <nav
          id="navbar"
          className={`navbar ${isNavOpen ? "mobile-nav-active" : ""}`}
        >
          <ul onClick={toggleNav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#about">Tentang Kami</Link>
            </li>
            <li>
              <Link to="/pilah-sampah">Pilah Sampah</Link>
            </li>
            <li className="dropdown">
              <Link to="#">
                <span style={{ marginRight: "10px" }}>Blog</span>
                <BsChevronDown />
              </Link>
              <ul>
                <li>
                  <Link to="/artikel">Artikel</Link>
                </li>
                <li>
                  <Link to="/berita">Berita</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {isNavOpen && (
          <div className="close-btn" onClick={toggleNav}>
            <BsX />
          </div>
        )}
      </div>
    </header>
  );
}
