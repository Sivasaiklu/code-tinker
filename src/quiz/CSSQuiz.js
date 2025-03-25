// CSS Quiz Component
import React, { useState } from "react";
import { Link } from "react-router-dom";

const cssQuestions = [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["font-color", "text-color", "color", "text-style"],
      correctAnswer: "color",
    },
    {
      question: "Which property is used to set background color in CSS?",
      options: ["background-color", "bg-color", "color-background", "bg"],
      correctAnswer: "background-color",
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["text-size", "font-size", "size-text", "text-font"],
      correctAnswer: "font-size",
    },
    {
      question: "How do you select an element with the id 'demo' in CSS?",
      options: ["#demo", ".demo", "element.demo", "demo"],
      correctAnswer: "#demo",
    },
    {
      question: "Which property is used to add space between the element's border and inner content?",
      options: ["margin", "border", "padding", "spacing"],
      correctAnswer: "padding",
    },
    {
      question: "Which property is used to make the text bold?",
      options: ["text-weight", "font-bold", "font-weight", "bold-text"],
      correctAnswer: "font-weight",
    },
    {
      question: "What is the correct CSS syntax to add a comment?",
      options: ["// this is a comment", "/* this is a comment */", "' this is a comment", "-- this is a comment"],
      correctAnswer: "/* this is a comment */",
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["font-family", "text-font", "font-style", "text-family"],
      correctAnswer: "font-family",
    },
    {
      question: "How do you select all paragraph elements in CSS?",
      options: ["#p", ".p", "p", "paragraph"],
      correctAnswer: "p",
    },
  ];

function CSSQuiz() {
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
    const correctAnswers = cssQuestions.reduce((acc, q, index) => {
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
          <h2 className="text-center text-primary">CSS Quiz</h2>
          <div className="alert alert-info text-center">
            Question {currentQuestion + 1} of {cssQuestions.length}
          </div>
          <h4 className="text-dark">{cssQuestions[currentQuestion].question}</h4>
          <div className="mt-3">
            {cssQuestions[currentQuestion].options.map((option, index) => (
              <div key={index} className={`form-check p-2 rounded ${answers[currentQuestion] === option ? "bg-light" : ""}`}>
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
            <button className="btn btn-secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>Previous</button>
            {currentQuestion < cssQuestions.length - 1 ? (
              <button className="btn btn-primary" onClick={handleNext}>Next</button>
            ) : (
              <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      ) : (
        <div className="card p-4 text-center shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-success">Quiz Completed!</h2>
          <p className="fs-5 fw-bold">Your Score: {score} / {cssQuestions.length}</p>
          <button className="btn btn-primary mt-3" onClick={handleRestart}>Restart</button>
        </div>
      )}
      <Link to="/quizzes" className="btn btn-dark text-white mt-3 mb-5 position-absolute bottom-0 start-50 translate-middle-x">
        Go Back to Quizzes
      </Link>
    </div>
  );
}

export default CSSQuiz;