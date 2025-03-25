// JS Quiz Component
import React, { useState } from "react";
import { Link } from "react-router-dom";

const jsQuestions = [
    {
      question: "What keyword is used to declare a variable in JavaScript?",
      options: ["variable", "v", "var", "let"],
      correctAnswer: "var",
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "==", "===", "+="],
      correctAnswer: "=",
    },
    {
      question: "What is the result of '5' + 3 in JavaScript?",
      options: ["8", "53", "Error", "35"],
      correctAnswer: "53",
    },
    {
      question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      question: "How do you write an 'if' statement for executing some code if 'i' is NOT equal to 5?",
      options: ["if (i <> 5)", "if (i != 5)", "if i <> 5", "if i !== 5"],
      correctAnswer: "if (i != 5)",
    },
    {
      question: "Which function is used to convert a string to an integer?",
      options: ["parseInt()", "toFloat()", "toInteger()", "convertInt()"],
      correctAnswer: "parseInt()",
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
      correctAnswer: "var colors = ['red', 'green', 'blue']",
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onmouseclick", "onclick", "onchange", "onmouseover"],
      correctAnswer: "onclick",
    },
    {
      question: "What does the 'typeof' operator return?",
      options: ["The data type of a variable", "The value of a variable", "The length of a variable", "The index of a variable"],
      correctAnswer: "The data type of a variable",
    },
    {
      question: "Which method removes the last element from an array and returns that element?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "pop()",
    },
  ];

function JSQuiz() {
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
    const correctAnswers = jsQuestions.reduce((acc, q, index) => {
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
          <h2 className="text-center text-primary">JS Quiz</h2>
          <div className="alert alert-info text-center">
            Question {currentQuestion + 1} of {jsQuestions.length}
          </div>
          <h4 className="text-dark">{jsQuestions[currentQuestion].question}</h4>
          <div className="mt-3">
            {jsQuestions[currentQuestion].options.map((option, index) => (
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
            {currentQuestion < jsQuestions.length - 1 ? (
              <button className="btn btn-primary" onClick={handleNext}>Next</button>
            ) : (
              <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      ) : (
        <div className="card p-4 text-center shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-success">Quiz Completed!</h2>
          <p className="fs-5 fw-bold">Your Score: {score} / {jsQuestions.length}</p>
          <button className="btn btn-primary mt-3" onClick={handleRestart}>Restart</button>
        </div>
      )}
      <Link to="/quizzes" className="btn btn-dark text-white mt-3 mb-5 position-absolute bottom-0 start-50 translate-middle-x">
        Go Back to Quizzes
      </Link>
    </div>
  );
}

export default JSQuiz;