import React, { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    correctAnswer: "<a>",
  },
  {
    question: "Which HTML tag is used to display the largest heading?",
    options: ["<h1>", "<heading>", "<h6>", "<head>"],
    correctAnswer: "<h1>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["font", "styles", "class", "style"],
    correctAnswer: "style",
  },
  {
    question: "Which HTML tag is used to insert a line break?",
    options: ["<break>", "<br>", "<lb>", "<hr>"],
    correctAnswer: "<br>",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswer: "<ul>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>", "<bg>yellow</bg>"],
    correctAnswer: "<body style='background-color:yellow;'>",
  },
  {
    question: "Which is the correct way to create an email link in HTML?",
    options: ["<a href='email'>", "<mail>info@example.com</mail>", "<a href='mailto:info@example.com'>", "<email>info@example.com</email>"],
    correctAnswer: "<a href='mailto:info@example.com'>",
  },
  {
    question: "Which tag is used to create a table in HTML?",
    options: ["<tab>", "<table>", "<tbl>", "<t>"],
    correctAnswer: "<table>",
  },
  {
    question: "Which tag is used to define a footer in HTML5?",
    options: ["<bottom>", "<footer>", "<foot>", "<end>"],
    correctAnswer: "<footer>",
  },
];

function HTMLQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (option) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [currentQuestion]: option }));
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleSubmit = () => {
    const correctAnswers = questions.reduce((acc, q, index) => {
      return answers[index] === q.correctAnswer ? acc + 1 : acc;
    }, 0);
    setScore(correctAnswers);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      {!submitted ? (
        <div className="card p-4 shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="text-center text-primary">HTML Quiz</h2>
          <div className="alert alert-info text-center">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <h4 className="text-dark">{questions[currentQuestion].question}</h4>
          <div className="mt-3">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`form-check p-2 rounded ${
                  answers[currentQuestion] === option ? "bg-light" : ""
                }`}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label className="form-check-label ms-2">{option}</label>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-secondary"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion < questions.length - 1 ? (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="card p-4 text-center shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-success">Quiz Completed!</h2>
          <p className="fs-5 fw-bold">
            Your Score: {score} / {questions.length}
          </p>
          <button
            className="btn btn-primary mt-3"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      )}
      <Link to="/quizzes" className="btn btn-dark text-white mt-3 mb-5 position-absolute bottom-0 start-50 translate-middle-x">
        Go Back to Quizzes
      </Link>
    </div>
  );
}

export default HTMLQuiz;