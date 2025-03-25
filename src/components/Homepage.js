import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100 text-center"
      style={{ backgroundColor: "#0a0a0a", color: "#ffffff", minHeight: "100vh", width: "100%" }}
    >
      {/* Heading */}
      <h1 className="display-2 fw-bold text-gradient mb-2 animate-fade-in">
        🚀 CodeTinker
      </h1>
      <p className="lead fs-4 mb-4 animate-fade-in-slow" style={{ color: "#b0b0b0" }}>
        Learn, Practice, and Master Web Development
      </p>

      {/* Illustration Image */}
      <div className="container-img mb-4">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg"
          alt="Learning Illustration"
          className="img-fluid animated-img rounded shadow-lg"
          style={{
            width: "100%",
            maxWidth: "500px",
            transition: "transform 0.3s ease-in-out",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.6)",
            border: "2px solid #4facfe",
            borderRadius: "20px"
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Get Started Button */}
      <Link
        to="/editor"
        className="btn btn-primary btn-lg mt-4 animated-button"
        style={{
          padding: "15px 30px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          boxShadow: "0 5px 15px rgba(0, 123, 255, 0.8)",
          transition: "0.3s ease",
          background: "linear-gradient(45deg, #4facfe, #00f2fe)",
          border: "none",
          borderRadius: "10px"
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Get Started 🚀
      </Link>

      {/* Animations & Styles */}
      <style>
        {`
          .text-gradient {
            background: linear-gradient(90deg, #4facfe, #00f2fe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-in forwards;
          }

          .animate-fade-in-slow {
            animation: fadeIn 1.5s ease-in forwards;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animated-button:hover {
            box-shadow: 0 0 25px rgba(0, 123, 255, 1);
            transform: scale(1.1);
          }

          @media (max-width: 576px) {
            h1 {
              font-size: 1.8rem;
            }
            p {
              font-size: 1rem;
            }
            .btn-lg {
              padding: 10px 20px;
              font-size: 1rem;
            }
          }

          body {
            margin: 0;
            padding: 0;
            background-color: #0a0a0a;
          }
        `}
      </style>
    </div>
  );
}

export default HomePage;