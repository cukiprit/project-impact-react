import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="https://i.ibb.co/Qm0XBTd/logo-tugs-skilvul.png" alt="Bootstrap" width="150" height="50" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="/pilah-sampah/pilah-sampah.html">Pilah Sampah</a></li>
            <li className="dropdown">
              <a href="#"><span>Blog</span>
                <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="/artikel/artikel.html">Artikel</a></li>
                <li><a href="/berita/berita.html">Berita</a></li>
              </ul>
            </li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
        
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}
