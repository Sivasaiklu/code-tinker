import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBackToForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div style={{ backgroundColor: 'black', minHeight: '91vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
      <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '500px', background: 'linear-gradient(135deg, #1e1e1e, #2e2e2e)', color: '#fff', border: '1px solid #444' }}>
        {submitted ? (
          <div className="text-center">
            <h2 className="text-success mb-4">✅ Your query has been submitted successfully!</h2>
            <button className="btn btn-primary" onClick={handleBackToForm}>Go Back to Form</button>
          </div>
        ) : (
          <>
            <h2 className="card-title text-center mb-4" style={{ color: '#f8f9fa' }}>Contact Us</h2>
            <p className="text-center mb-3 text-info">Have a question? Reach out to us!</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#ddd' }}>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #444' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#ddd' }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #444' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ color: '#ddd' }}>Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #444' }}
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-info" style={{ fontWeight: "bold" }}>Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
