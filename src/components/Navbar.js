import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../images/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-2">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <img
            src={logo}
            alt="CodeTinker Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          CodeTinker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            {[
              { name: "Editor", path: "/editor" },
              { name: "Learn", path: "/learn" },
              { name: "Quizzes", path: "/quizzes" },
              { name: "Prebuilt Codes", path: "/snippets" },
              { name: "Projects", path: "/projects" },
              { name: "Challenges", path: "/challenges" },
              { name: "Roadmaps", path: "/roadmaps" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link ${location.pathname === item.path ? "active fw-semibold" : ""}`}
                  to={item.path}
                  style={{ transition: "0.3s ease-in-out" }}
                  onMouseOver={(e) => (e.target.style.color = "#00f2fe")}
                  onMouseOut={(e) => (e.target.style.color = "")}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                className="btn btn-outline-info mx-2 my-2 btn-sm"
                to="/contactus"
                style={{ transition: "0.3s ease" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#00f2fe")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-outline-warning my-2 btn-sm"
                to="/feedback"
                style={{ transition: "0.3s ease" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#ffdd57")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}
              >
                Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-outline-success mx-2 my-2 btn-sm"
                to="/founder"
                style={{ transition: "0.3s ease" }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#28a745")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "")}
              >
                Founder
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;