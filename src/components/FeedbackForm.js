import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    codeEditor: "",
    learningResources: "",
    quizzes: "",
    challenges: "",
    certificates: "",
    projectLearning: "",
    snippets: "",
    roadmap: "",
    overallRating: 0,
    improvements: "",
    submitted: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFeedback({ ...feedback, overallRating: rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback({ ...feedback, submitted: true });
  };

  const handleBackToForm = () => {
    setFeedback({ ...feedback, submitted: false });
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '91vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
      <div className="card shadow-lg p-4 mt-3 mb-3" style={{ width: '100%', maxWidth: '800px', background: 'linear-gradient(135deg, #1e1e1e, #2e2e2e)', color: '#fff', border: '1px solid #444' }}>
        {feedback.submitted ? (
          <div className="text-center">
            <h2 className="text-success mb-4">✅ Thank you for your feedback!</h2>
            <button className="btn btn-primary" onClick={handleBackToForm}>Go Back to Form</button>
          </div>
        ) : (
          <>
            <h2 className="card-title text-center mb-4" style={{ color: '#f8f9fa' }}>Feedback Form</h2>
            <p className="text-center mb-3 text-info">We value your feedback!</p>
            <form onSubmit={handleSubmit}>
              {['codeEditor', 'learningResources', 'quizzes', 'challenges', 'certificates', 'projectLearning', 'snippets', 'roadmap'].map((topic, index) => (
                <div key={index} className="mb-3">
                  <label className="form-label" style={{ color: '#ddd' }}>
                    How do you rate our {topic.replace(/([A-Z])/g, " $1").toLowerCase()}?
                  </label>
                  <select
                    className="form-select"
                    name={topic}
                    value={feedback[topic]}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #444' }}
                  >
                    <option value="">Select Rating</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Average">Average</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
              ))}

              <div className="mb-3">
                <label className="form-label" style={{ color: '#ddd' }}>Overall Rating</label>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < feedback.overallRating
                          ? "text-warning fs-4 me-1"
                          : "text-secondary fs-4 me-1"
                      }
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRatingChange(i + 1)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: '#ddd' }}>Any improvements or suggestions?</label>
                <textarea
                  className="form-control"
                  name="improvements"
                  value={feedback.improvements}
                  onChange={handleChange}
                  rows="3"
                  style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #444' }}
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-info" style={{ fontWeight: "bold" }}>Submit Feedback</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
