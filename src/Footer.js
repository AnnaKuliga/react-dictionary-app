import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGraduationCap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="Footer mt-5">
      <section className="grid grid-3-columns-footer container" id="footer">
        <div className="about-app">
          <h4>Dictionary App</h4>
          <hr />
          <p>
            This dictionary app is made for general use. It is free and everyone
            can access it. Feel free to write me an email or contact me if you
            spote a bug.
          </p>
        </div>
        <div className="about-me">
          <h4>About me</h4>
          <hr />
          <p>
            Hi! My name is Anna and I come from Poland. I am front-end developer
            based in Europe. I am currently living in Norway, Oslo. You can
            check my other projects and if you like my dictionary app, feel free
            to contact me. 🌞
          </p>
        </div>
        <div className="about-page">
          <h4>About the page</h4>
          <hr />
          <p>
            I created this page as a part of{" "}
            <a
              href="https://www.shecodes.io"
              title="SheCodes Website"
              target="_blank"
              rel="noreferrer"
            >
              SheCodes
            </a>{" "}
            project to develop my coding skills. This project was coded by Anna
            Kuliga and is{" "}
            <a
              href="https://github.com/AnnaKuliga/react-dictionary-app"
              title="GitHub Weather App React"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>
            .
          </p>
        </div>
      </section>
      <div className="links">
        <hr />
        <div className="footer-links">
          <div className="row" id="contact-info">
            <class className="col-sm-3 text-center">
              <a href="mailto:a.kuliga2@gmail.com" title="Email me">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="email"> a.kuliga2@gmail.com</span>
              </a>
            </class>
            <class className="col-sm-3 text-center">
              <span className="phone-nr">
                <FontAwesomeIcon icon={faPhone} /> +48 785 036 017
              </span>
            </class>

            <class className="col-sm-2 text-center">
              <a
                href="https://www.shecodes.io/graduates/57519-anna-kuliga"
                target="_blank"
                rel="noreferrer"
                title="SheCodes Anna's Profile"
              >
                <FontAwesomeIcon icon={faGraduationCap} />
              </a>
            </class>
            <class className="col-sm-2 text-center">
              <a
                href="https://www.linkedin.com/in/anna-kuliga-967186224/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Anna"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </class>
            <class className="col-sm-2 text-center">
              <a
                href="https://github.com/AnnaKuliga"
                target="_blank"
                rel="noreferrer"
                title="GitHub Anna"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </class>
          </div>
        </div>
      </div>
    </footer>
  );
}
