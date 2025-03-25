import React, { useEffect, useState } from "react";
import founder from "../images/founder.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Founder = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "auto",
        minHeight: "91vh",
        width: "100%",
        backgroundColor: "#121212",
        color: "#f0f0f0",
        padding: "0",
        margin: "0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-10 col-md-11 text-center mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <h1
              className="fw-bold"
              style={{ color: "#00c9a7", fontSize: "2rem", marginBottom: "10px" }}
            >
              Founder of CodeTinker Learning Platform
            </h1>
          </div>

          <div
            className="col-lg-10 col-md-11"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div
              className="card border-2 border-info shadow-lg overflow-hidden"
              style={{ background: "#1e1e1e", borderRadius: "10px" }}
            >
              <div className="row g-0 flex-column flex-md-row">
                <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                  <div
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <img
                      src={founder}
                      alt="Founder Profile"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-3 p-md-5 text-center text-md-start">
                    <h2 className="fw-bold mb-1" style={{ color: "#00c9a7" }}>
                      Sivasai Nukala
                    </h2>
                    <p className="mb-2" style={{ color: "#b0b0b0" }}>
                      Full Stack Developer | React & AWS Enthusiast
                    </p>
                    <p
                      className="mb-3"
                      style={{ color: "#e0e0e0", lineHeight: "1.6" }}
                    >
                      Building modern web applications with React, Node.js, and AWS.
                      Passionate about tech, problem-solving, and continuous learning.
                    </p>

                    <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-3">
                      <a
                        href="https://github.com/Sivasaiklu"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff", fontSize: "1.5rem" }}
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sivasainukala16"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#0077b5", fontSize: "1.5rem" }}
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="mailto:sivasainookala@gmail.com"
                        style={{ color: "#f39c12", fontSize: "1.5rem" }}
                      >
                        <FaEnvelope />
                      </a>
                    </div>

                    <a
                      href="https://sivasaiklu.github.io/PortFolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#00c9a7",
                        color: "#121212",
                        padding: "10px 24px",
                        borderRadius: "6px",
                        fontWeight: "500",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        display: "inline-block",
                      }}
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;