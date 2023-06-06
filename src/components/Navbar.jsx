import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#830000" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.ibb.co/Qm0XBTd/logo-tugs-skilvul.png"
            alt="Bootstrap"
            width="150"
            height="50"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BsList style={{ color: "#fff", fontSize: "28px" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pilah-sampah">
                Pilah Sampah
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Artikel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Berita
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
