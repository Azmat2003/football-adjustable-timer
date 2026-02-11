import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/copyright.css";

const Copyright = () => {
  return (
    <footer className="copyright">
      © {new Date().getFullYear()} | Azmat Matin Shadab |
      <a
        href="https://github.com/Azmat2003"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub className="github-icon" />
        GitHub
      </a>
    </footer>
  );
};

export default Copyright;
