import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Welcome to
          <span> Kyle Ahn</span>
          's Portfolio
        </h1>
        <p className="homePageSub">Full Stack Developer</p>
        <div className="icons">
          <a
            href="https://github.com/rldyd"
            target="_blank"
            className="iconHolder"
          >
            <FontAwesomeIcon icon={faGithub} className="icon Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-ahn-277122212/"
            target="_blank"
            className="iconHolder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon Ln" />
          </a>

          {/* <Link to="" className="iconHolder">
            <FontAwesomeIcon icon={faLinkedin} className="icon Ln" />
          </Link> */}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
