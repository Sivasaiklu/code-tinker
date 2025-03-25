import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaBook } from "react-icons/fa";

function Learn() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center text-light" style={{ minHeight: "91vh", backgroundColor: "black"}}>
      {/* Header */}
      <h2 className="mb-4 fw-bold">
        <FaBook /> 📚 Learn Web Development
      </h2>
      <p className="text-light fs-5">
        Start learning web development with interactive tutorials and challenges.
      </p>

      {/* Content Cards */}
      <div className="row justify-content-center mt-4 g-4">
        {/* HTML Section */}
        <div className="col-md-3">
          <div className="card shadow-lg p-3 border-0 rounded text-center bg-secondary text-light">
            <FaHtml5 size={60} color="#E34F26" className="mb-2 icon-hover" />
            <h4 className="mt-2 fw-bold">HTML</h4>
            <p>Structure the web with HTML.</p>
            <Link to="/learn/html" className="btn btn-primary btn-sm mt-2 w-100">
              Start Learning
            </Link>
          </div>
        </div>

        {/* CSS Section */}
        <div className="col-md-3">
          <div className="card shadow-lg p-3 border-0 rounded text-center bg-secondary text-light">
            <FaCss3Alt size={60} color="#1572B6" className="mb-2 icon-hover" />
            <h4 className="mt-2 fw-bold">CSS</h4>
            <p>Style your web pages with CSS.</p>
            <Link to="/learn/css" className="btn btn-success btn-sm mt-2 w-100">
              Start Learning
            </Link>
          </div>
        </div>

        {/* JavaScript Section */}
        <div className="col-md-3">
          <div className="card shadow-lg p-3 border-0 rounded text-center bg-secondary text-light">
            <FaJs size={60} color="#F7DF1E" className="mb-2 icon-hover" />
            <h4 className="mt-2 fw-bold">JavaScript</h4>
            <p>Make your web pages interactive.</p>
            <Link to="/learn/javascript" className="btn btn-warning btn-sm mt-2 w-100">
              Start Learning
            </Link>
          </div>
        </div>
      </div>

      {/* Style Enhancements */}
      <style>
        {`
          .icon-hover {
            transition: transform 0.3s ease-in-out;
          }
          .icon-hover:hover {
            transform: scale(1.2);
          }
          .card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </div>
  );
}

export default Learn;
