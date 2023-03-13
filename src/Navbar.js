import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#form">
                Form
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
