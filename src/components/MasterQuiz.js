import React, { useState } from "react";
import { Link } from "react-router-dom";

const masterQuizQuestions = [
  // HTML Questions
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
    correctAnswer: "Hyper Text Markup Language",
    category: "HTML"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    correctAnswer: "<a>",
    category: "HTML"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswer: "<ul>",
    category: "HTML"
  },
  {
    question: "Which is the correct way to create an email link in HTML?",
    options: ["<a href='email'>", "<mail>info@example.com</mail>", "<a href='mailto:info@example.com'>", "<email>info@example.com</email>"],
    correctAnswer: "<a href='mailto:info@example.com'>",
    category: "HTML"
  },
  {
    question: "Which tag is used to define a footer in HTML5?",
    options: ["<bottom>", "<footer>", "<foot>", "<end>"],
    correctAnswer: "<footer>",
    category: "HTML"
  },
  
  // CSS Questions
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
    category: "CSS"
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "text-style"],
    correctAnswer: "color",
    category: "CSS"
  },
  {
    question: "How do you select an element with the id 'demo' in CSS?",
    options: ["#demo", ".demo", "element.demo", "demo"],
    correctAnswer: "#demo",
    category: "CSS"
  },
  {
    question: "Which property is used to add space between the element's border and inner content?",
    options: ["margin", "border", "padding", "spacing"],
    correctAnswer: "padding",
    category: "CSS"
  },
  {
    question: "How do you select all paragraph elements in CSS?",
    options: ["#p", ".p", "p", "paragraph"],
    correctAnswer: "p",
    category: "CSS"
  },
  
  // JavaScript Questions
  {
    question: "What keyword is used to declare a variable in JavaScript?",
    options: ["variable", "v", "var", "let"],
    correctAnswer: "var",
    category: "JavaScript"
  },
  {
    question: "What is the result of '5' + 3 in JavaScript?",
    options: ["8", "53", "Error", "35"],
    correctAnswer: "53",
    category: "JavaScript"
  },
  {
    question: "Which function is used to convert a string to an integer?",
    options: ["parseInt()", "toFloat()", "toInteger()", "convertInt()"],
    correctAnswer: "parseInt()",
    category: "JavaScript"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
    correctAnswer: "var colors = ['red', 'green', 'blue']",
    category: "JavaScript"
  },
  {
    question: "Which method removes the last element from an array and returns that element?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "pop()",
    category: "JavaScript"
  },
];

function MasterQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [categoryScores, setCategoryScores] = useState({
    HTML: 0,
    CSS: 0,
    JavaScript: 0
  });

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
    const results = masterQuizQuestions.reduce(
      (acc, q, index) => {
        const isCorrect = answers[index] === q.correctAnswer;
        const category = q.category;
        
        return {
          total: isCorrect ? acc.total + 1 : acc.total,
          categories: {
            ...acc.categories,
            [category]: isCorrect 
              ? acc.categories[category] + 1 
              : acc.categories[category]
          }
        };
      },
      { 
        total: 0, 
        categories: { HTML: 0, CSS: 0, JavaScript: 0 } 
      }
    );

    setScore(results.total);
    setCategoryScores(results.categories);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setCategoryScores({ HTML: 0, CSS: 0, JavaScript: 0 });
  };

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case "HTML":
        return "bg-danger";
      case "CSS":
        return "bg-primary";
      case "JavaScript":
        return "bg-warning text-dark";
      default:
        return "bg-secondary";
    }
  };

  const getProgressPercentage = () => {
    return ((currentQuestion + 1) / masterQuizQuestions.length) * 100;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      {!submitted ? (
        <div className="card p-3 mt-0 shadow-lg  border border-dark border-2" style={{ maxWidth: "700px", width: "100%"}}>
          <h2 className="text-center mb-4">
            <span className="text-primary">Web Development</span> Master Quiz
          </h2>
          
          <div className="progress mb-3" style={{ height: "10px" }}>
            <div 
              className="progress-bar progress-bar-striped progress-bar-animated" 
              role="progressbar" 
              style={{ width: `${getProgressPercentage()}%` }}
              aria-valuenow={currentQuestion + 1} 
              aria-valuemin="0" 
              aria-valuemax={masterQuizQuestions.length}
            ></div>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge bg-info fs-6">
              Question {currentQuestion + 1} of {masterQuizQuestions.length}
            </span>
            <span className={`badge ${getCategoryBadgeColor(masterQuizQuestions[currentQuestion].category)} fs-6`}>
              {masterQuizQuestions[currentQuestion].category}
            </span>
          </div>
          
          <h4 className="mb-4">{masterQuizQuestions[currentQuestion].question}</h4>
          
          <div className="mb-4">
            {masterQuizQuestions[currentQuestion].options.map((option, index) => (
              <div 
                key={index} 
                className={`form-check p-3 mb-2 rounded border ${
                  answers[currentQuestion] === option 
                    ? `bg-light border-${getCategoryBadgeColor(masterQuizQuestions[currentQuestion].category).split('-')[1]}` 
                    : ""
                }`}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name={`question-${currentQuestion}`}
                  id={`option-${index}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label className="form-check-label w-100 ms-2" htmlFor={`option-${index}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-secondary" 
              onClick={handlePrevious} 
              disabled={currentQuestion === 0}
            >
              <i className="bi bi-arrow-left"></i> Previous
            </button>
            
            {currentQuestion < masterQuizQuestions.length - 1 ? (
              <button 
                className="btn btn-primary" 
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
              >
                Next <i className="bi bi-arrow-right"></i>
              </button>
            ) : (
              <button 
                className="btn btn-success" 
                onClick={handleSubmit}
                disabled={!answers[currentQuestion]}
              >
                Submit Quiz <i className="bi bi-check-circle"></i>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="card p-4 text-center shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
          <div className="mb-4">
            <span className="position-absolute translate-middle start-50 badge rounded-pill bg-success p-2 mt-n3">
              <i className="bi bi-check-circle-fill me-1"></i>Completed
            </span>
          </div>
          
          <h2 className="text-success mt-3">Quiz Completed!</h2>
          
          <div className="p-3 bg-light rounded mb-4 mt-2">
            <h3 className="fs-4">Your Total Score</h3>
            <div className="display-4 fw-bold text-primary mb-2">
              {score} / {masterQuizQuestions.length}
            </div>
            <div className="progress" style={{ height: "20px" }}>
              <div 
                className="progress-bar bg-primary" 
                role="progressbar" 
                style={{ width: `${(score / masterQuizQuestions.length) * 100}%` }}
                aria-valuenow={score} 
                aria-valuemin="0" 
                aria-valuemax={masterQuizQuestions.length}
              >
                {Math.round((score / masterQuizQuestions.length) * 100)}%
              </div>
            </div>
          </div>
          
          <div className="row mb-4">
            <div className="col-md-4">
              <div className="card bg-danger text-white">
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">HTML</h6>
                  <p className="card-text fs-5 mb-0">
                    {categoryScores.HTML} / {masterQuizQuestions.filter(q => q.category === 'HTML').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-primary text-white">
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">CSS</h6>
                  <p className="card-text fs-5 mb-0">
                    {categoryScores.CSS} / {masterQuizQuestions.filter(q => q.category === 'CSS').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-warning text-dark">
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">JavaScript</h6>
                  <p className="card-text fs-5 mb-0">
                    {categoryScores.JavaScript} / {masterQuizQuestions.filter(q => q.category === 'JavaScript').length}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="btn btn-primary btn-lg mt-2" 
            onClick={handleRestart}
          >
            <i className="bi bi-arrow-repeat me-2"></i>
            Take Quiz Again
          </button>
        </div>
      )}
      <Link to="/quizzes" className="btn btn-dark text-white mt-3 mb-1 position-absolute bottom-0 start-50 translate-middle-x">
        Go Back to Quizzes
      </Link>
    </div>
  );
}

export default MasterQuiz;