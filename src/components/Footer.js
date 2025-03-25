// Footer.js
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer
      className="bg-black text-secondary text-center py-3 mt-auto d-flex flex-column flex-md-row justify-content-between align-items-center px-3"
      style={{ borderTop: "1px solid #444" }}
    >
      {/* Left Side - Date and Time */}
      <div className="text-md-start mb-2 mb-md-0">
        <p className="mb-0 small text-light">
          {dateTime.toLocaleDateString()} | {dateTime.toLocaleTimeString()}
        </p>
      </div>

      {/* Center - Love and Creator */}
      <div className="text-center mb-2 mb-md-0">
        <p className="mb-1 small">
          Developed with
          <span
            style={{
              color: "#ff4757",
              animation: "pulse 1.5s infinite",
              display: "inline-block",
              margin: "0 5px"
            }}
          >
            ❤️
          </span>
          by <span className="text-light">Sivasai Nukala</span>
        </p>
        <p className="small mb-0">
          © {new Date().getFullYear()} <span className="text-light">CodeTinker</span> | All rights reserved
        </p>
      </div>

      {/* Right Side - Social Links */}
      <div className="text-md-end">
        <a
          href="https://github.com/Sivasaiklu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary me-2"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sivasainukala16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      {/* Pulse Heart Animation */}
      <style>
        {`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
