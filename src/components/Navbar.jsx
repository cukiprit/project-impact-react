import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

export default function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img
            src="https://i.ibb.co/Qm0XBTd/logo-tugs-skilvul.png"
            alt="Bootstrap"
            width="150"
            height="50"
          />
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
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
      </div>
    </header>
  );
}
