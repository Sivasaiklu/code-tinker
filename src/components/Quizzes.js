import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaTrophy, FaQuestionCircle } from "react-icons/fa";

function Quizzes() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-center text-light" style={{ minHeight: "91vh", backgroundColor: "black" }}>
      {/* Header */}
      <h2 className="mb-4 mt-4 fw-bold">
        <FaQuestionCircle /> 🎯 Test Your Knowledge
      </h2>
      <p className="text-light fs-5">
        Take quizzes and coding challenges to improve your skills.
      </p>

      {/* Quiz Cards */}
      <div className="row justify-content-center mt-4 g-4">
        {/* HTML Quiz */}
        <div className="col-md-3">
          <div className="card quiz-card shadow-lg p-3 border-0 rounded text-center bg-secondary text-light">
            <FaHtml5 size={60} color="#E34F26" className="mb-2 icon-hover" />
            <h4 className="mt-2 fw-bold">HTML Quiz</h4>
            <p>Test your HTML Skills.</p>
            <Link to="/quizzes/html" className="btn btn-primary btn-sm mt-2 w-100">
              Start Quiz
            </Link>
          </div>
        </div>

        {/* CSS Quiz */}
        <div className="col-md-3">
          <div className="card quiz-card shadow-lg p-3 border-0 rounded text-center bg-secondary text-light">
            <FaCss3Alt size={60} color="#1572B6" className="mb-2 icon-hover" />
            <h4 className="mt-2 fw-bold">CSS Quiz</h4>
            <p>Test your CSS skills.</p>
            <Link to="/quizzes/css" className="btn btn-success btn-sm mt-2 w-100">
              Start Quiz
            </Link>
          </div>
        </div>

        {/* JavaScript Quiz */}
        <div className="col-md-3">
          <div className="card quiz-card shadow-lg p-3 border-0 rounded text-center bg-secondary text-light">
            <FaJs size={60} color="#F7DF1E" className="mb-2 icon-hover" />
            <h4 className="mt-2 fw-bold">JavaScript Quiz</h4>
            <p>Test your JS knowledge.</p>
            <Link to="/quizzes/javascript" className="btn btn-warning btn-sm mt-2 w-100">
              Start Quiz
            </Link>
          </div>
        </div>

        {/* Master Quiz */}
        <div className="col-md-3">
          <div className="card quiz-card shadow-lg p-3 border-0 rounded text-center master-quiz bg-dark text-light mb-4">
            <FaTrophy size={60} color="#FFD700" className="mb-2 icon-hover" />
            <h4 className="mt-2 fw-bold">Master Quiz</h4>
            <p>Challenge yourself with the final quiz.</p>
            <Link to="/quizzes/master" className="btn btn-danger btn-sm mt-2 w-100">
              Start Master Quiz
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

          .quiz-card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .quiz-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
          }

          .master-quiz {
            border: 2px solid #FFD700;
            background: radial-gradient(circle, rgba(255, 223, 0, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
          }
        `}
      </style>
    </div>
  );
}

export default Quizzes;
