import React, { useState, useEffect, useRef } from "react";
import challengesData from "../data/challengesData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";

const Challenges = () => {
  // eslint-disable-next-line
  const [activeTab, setActiveTab] = useState("all");
  
  const [userProgress, setUserProgress] = useState({});
  // State for certificate data
  const [certificateData, setCertificateData] = useState({
    name: "",
    email: "",
    date: getCurrentDate()
  });
  // State to control which step of certificate generation we're on
  const [certificateStep, setCertificateStep] = useState("form"); // "form" or "certificate"
  // State for download progress
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Reference to the certificate container
  const certificateRef = useRef(null);

  // Load saved progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("challengeProgress");
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("challengeProgress", JSON.stringify(userProgress));
  }, [userProgress]);

  // Filter challenges based on active tab
  const filteredChallenges =
    activeTab === "all"
      ? challengesData
      : challengesData.filter((challenge) => challenge.type === activeTab);

  // Mark a challenge as completed
  const markAsCompleted = (challengeId) => {
    setUserProgress((prev) => ({
      ...prev,
      [challengeId]: true,
    }));
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    const totalChallenges = challengesData.length;
    const completedChallenges = Object.values(userProgress).filter(Boolean).length;
    return Math.round((completedChallenges / totalChallenges) * 100);
  };

  // Check if all challenges are completed
  const allChallengesCompleted = () => {
    return calculateProgress() === 100;
  };

  // Generate current date in format: March 13, 2025
  function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Handle certificate form changes
  const handleCertificateChange = (e) => {
    const { name, value } = e.target;
    setCertificateData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle certificate form submission
  const handleCertificateSubmit = (e) => {
    e.preventDefault();
    setCertificateStep("certificate");
  };

  // Reset certificate modal when it's closed
  const resetCertificateModal = () => {
    setCertificateStep("form");
    setIsDownloading(false);
  };
  
  // Function to download certificate as PDF
  const downloadAsPDF = async () => {
    if (!certificateRef.current) return;
    
    setIsDownloading(true);
    try {
      const certificateElement = certificateRef.current;
      
      const canvas = await html2canvas(certificateElement, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CodeTinker_Certificate_${certificateData.name.replace(/\s+/g, '_')}.pdf`);
      
      toast.success("Certificate downloaded as PDF successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };
  
  // Function to download certificate as JPG
  const downloadAsJPG = async () => {
    if (!certificateRef.current) return;
    
    setIsDownloading(true);
    try {
      const certificateElement = certificateRef.current;
      
      const canvas = await html2canvas(certificateElement, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      canvas.toBlob(function(blob) {
        saveAs(blob, `CodeTinker_Certificate_${certificateData.name.replace(/\s+/g, '_')}.jpg`);
        toast.success("Certificate downloaded as JPG successfully!");
      }, 'image/jpeg', 1.0);
    } catch (error) {
      console.error("Error generating JPG:", error);
      toast.error("Failed to download JPG. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-vh-100 w-100 d-flex flex-column" style={{ 
      backgroundColor: "#121212", 
      color: "#fff", 
      fontFamily: "Arial, sans-serif",
      overflowX: "hidden"
    }}>
      <div className="container-fluid px-4 py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{ 
            color: "#f8f9fa", 
            textShadow: "0 0 10px rgba(255,255,255,0.3)" 
          }}><i>Beginner Challenges</i></h1>
          <p className="lead fw-bold text-info">
            Complete all challenges to master the fundamentals of HTML, CSS, and JavaScript — and claim your certificate!
          </p>

          <div className="progress mt-4" style={{ 
            height: "30px", 
            borderRadius: "15px", 
            overflow: "hidden", 
            boxShadow: "0 0 20px rgba(48, 231, 100, 0.3)",
            background: "#2a2a2a" 
          }}>
            <div
              className="progress-bar progress-bar-striped fw-bold"
              role="progressbar"
              style={{
                width: `${calculateProgress()}%`,
                background: `linear-gradient(90deg, #30e764 ${calculateProgress()}%, #2a2a2a ${calculateProgress()}%)`,
                transition: "width 0.6s ease",
                color: calculateProgress() > 50 ? "#121212" : "#fff"
              }}
              aria-valuenow={calculateProgress()}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {calculateProgress()}% Completed 🎯
            </div>
          </div>

          {allChallengesCompleted() && (
            <button
              className="btn mt-4"
              style={{
                padding: "12px 24px",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #30e764, #28a745)",
                color: "#000",
                border: "none",
                boxShadow: "0 4px 15px rgba(48, 231, 100, 0.5)",
                transition: "all 0.3s ease"
              }}
              data-bs-toggle="modal"
              data-bs-target="#certificateModal"
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 6px 20px rgba(48, 231, 100, 0.7)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 15px rgba(48, 231, 100, 0.5)";
              }}
            >
              🎉 Claim Your Certificate!
            </button>
          )}
        </div>
        
        <div className="row g-4">
          {filteredChallenges.map((challenge) => (
            <div key={challenge.id} className="col-md-6 col-lg-4">
              <div 
                className={`card h-100 shadow position-relative`}
                style={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: userProgress[challenge.id] ? '2px solid #28a745' : '1px solid #333',
                  boxShadow: userProgress[challenge.id] 
                    ? '0 0 15px rgba(40, 167, 69, 0.4)' 
                    : '0 0 10px rgba(0, 0, 0, 0.5)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = userProgress[challenge.id]
                    ? '0 10px 20px rgba(40, 167, 69, 0.5)'
                    : '0 10px 20px rgba(0, 0, 0, 0.7)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = userProgress[challenge.id]
                    ? '0 0 15px rgba(40, 167, 69, 0.4)'
                    : '0 0 10px rgba(0, 0, 0, 0.5)';
                }}
              >
                {userProgress[challenge.id] && (
                  <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill p-2 border border-2"
                    style={{
                      backgroundColor: "#ffc107",
                      borderColor: "#ff5c5c",
                      color: "#121212",
                      fontWeight: "bold",
                      zIndex: 1
                    }}>
                    Challenge Completed
                  </span>
                )}
                <div className="card-body rounded">
                  <h5 className="card-title fw-bold" style={{ color: "#f8f9fa" }}>{challenge.title}</h5>
                  <p className="card-text" style={{ color: "#adb5bd" }}>{challenge.description}</p>
                  <div className="mt-3">
                    <button 
                      className="btn text-light fw-bold bg-info text-dark" 
                      style={{
                        border: "none",
                        transition: "background-color 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = "#495057"}
                      onMouseOut={(e) => e.target.style.backgroundColor = "#343a40"}
                      data-bs-toggle="modal" 
                      data-bs-target={`#challengeModal-${challenge.id}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal for challenge details */}
              <div className="modal fade" id={`challengeModal-${challenge.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content" style={{ backgroundColor: "#1e1e1e", color: "#f8f9fa" }}>
                    <div className="modal-header" style={{ borderBottom: "1px solid #333" }}>
                      <h5 className="modal-title">{challenge.title}</h5>
                      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="mt-4">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" 
                              style={{ 
                                color: "#f8f9fa", 
                                backgroundColor: "#212529",
                                borderColor: "#495057"
                              }}
                              data-bs-toggle="tab" 
                              data-bs-target={`#challenge-${challenge.id}`} 
                              type="button" 
                              role="tab">Challenge</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" 
                              style={{ 
                                color: "#adb5bd", 
                                backgroundColor: "transparent",
                                borderColor: "#495057"
                              }}
                              data-bs-toggle="tab" 
                              data-bs-target={`#solution-${challenge.id}`} 
                              type="button" 
                              role="tab">Solution</button>
                          </li>
                        </ul>
                        
                        <div className="tab-content p-3 border border-top-0 rounded-bottom" style={{ borderColor: "#495057", backgroundColor: "#212529" }}>
                          <div className="tab-pane fade show active" id={`challenge-${challenge.id}`} role="tabpanel">
                            <h6 style={{ color: "#30e764" }}>Challenge Description:</h6>
                            <div className="challenge-description mb-4">
                              <p>{challenge.description}</p>
                              <p>{challenge.detailedDescription || "Complete this challenge by following the instructions below."}</p>
                              <ul style={{ color: "#adb5bd" }}>
                                {challenge.requirements && challenge.requirements.map((req, index) => (
                                  <li key={index}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="d-grid gap-2 col-md-6 mx-auto mt-4">
                              <a href={`/editor`} 
                                className="btn" 
                                style={{
                                  backgroundColor: "#0d6efd",
                                  color: "white",
                                  fontWeight: "bold",
                                  transition: "all 0.3s ease"
                                }}
                                onMouseOver={(e) => {
                                  e.target.style.backgroundColor = "#0b5ed7";
                                  e.target.style.transform = "translateY(-2px)";
                                }}
                                onMouseOut={(e) => {
                                  e.target.style.backgroundColor = "#0d6efd";
                                  e.target.style.transform = "translateY(0)";
                                }}
                              >
                                Go to Editor to Practice
                              </a>
                            </div>
                          </div>
                          
                          <div className="tab-pane fade" id={`solution-${challenge.id}`} role="tabpanel">
                            <h6 className="p-2 rounded" style={{ backgroundColor: "#343a40", color: "#30e764" }}>HTML Solution:</h6>
                            <pre className="p-3 rounded" style={{ backgroundColor: "#282c34", color: "#f8f9fa" }}><code>{challenge.solution.html}</code></pre>
                            
                            <h6 className="mt-3 p-2 rounded" style={{ backgroundColor: "#343a40", color: "#30e764" }}>CSS Solution:</h6>
                            <pre className="p-3 rounded" style={{ backgroundColor: "#282c34", color: "#f8f9fa" }}><code>{challenge.solution.css}</code></pre>
                            
                            <h6 className="mt-3 p-2 rounded" style={{ backgroundColor: "#343a40", color: "#30e764" }}>JavaScript Solution:</h6>
                            <pre className="p-3 rounded" style={{ backgroundColor: "#282c34", color: "#f8f9fa" }}><code>{challenge.solution.js}</code></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer" style={{ borderTop: "1px solid #333" }}>
                      <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button 
                        type="button" 
                        className={`btn ${userProgress[challenge.id] ? 'btn-success disabled' : 'btn-outline-success'}`}
                        onClick={() => markAsCompleted(challenge.id)}
                        data-bs-dismiss="modal"
                      >
                        {userProgress[challenge.id] ? 'Completed' : 'Mark as Completed'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <div className="modal fade" id="certificateModal" tabIndex="-1" aria-hidden="true" onHide={resetCertificateModal}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ backgroundColor: "#212529", color: "#f8f9fa" }}>
            <div className="modal-header" style={{ borderBottom: "1px solid #343a40" }}>
              <h5 className="modal-title">
                {certificateStep === "form" ? "Enter Your Details" : "Certificate of Completion"}
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="modal" 
                aria-label="Close"
                onClick={resetCertificateModal}
              ></button>
            </div>
            <div className="modal-body">
              {certificateStep === "form" ? (
                <form onSubmit={handleCertificateSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name" 
                      value={certificateData.name} 
                      onChange={handleCertificateChange}
                      required 
                      style={{ backgroundColor: "#343a40", color: "#f8f9fa", border: "1px solid #495057" }}
                    />
                    <div className="form-text" style={{ color: "#adb5bd" }}>Name as you want it to appear on your certificate</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      value={certificateData.email} 
                      onChange={handleCertificateChange}
                      required 
                      style={{ backgroundColor: "#343a40", color: "#f8f9fa", border: "1px solid #495057" }}
                    />
                  </div>
                  <div className="d-grid gap-2 col-md-6 mx-auto mt-4">
                    <button type="submit" 
                      className="btn"
                      style={{
                        backgroundColor: "#30e764",
                        color: "#121212",
                        fontWeight: "bold",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#28a745";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#30e764";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >Generate Certificate</button>
                  </div>
                </form>
              ) : (
                <div className="certificate-container border border-4 p-5 text-center" 
                  ref={certificateRef}
                  style={{ 
                    borderColor: "#30e764",
                    backgroundImage: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden',
                    color: "#212529"
                  }}>
                  {/* Decorative elements */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '0', 
                    right: '0', 
                    width: '150px', 
                    height: '150px', 
                    background: 'radial-gradient(circle, rgba(48,231,100,0.2) 0%, rgba(255,255,255,0) 70%)'
                  }}></div>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '0', 
                    left: '0', 
                    width: '150px', 
                    height: '150px', 
                    background: 'radial-gradient(circle, rgba(48,231,100,0.2) 0%, rgba(255,255,255,0) 70%)'
                  }}></div>
                  
                  {/* Company logo and name */}
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                      <span style={{ color: "#121212" }}>Code</span><span style={{ color: "#28a745" }}>Tinker</span>
                    </div>
                  </div>
                  
                  <h1 className="display-4 mb-3 fw-bold" style={{ fontFamily: 'Georgia, serif', color: "#28a745" }}>Certificate of Achievement</h1>
                  <div className="badge p-2 mb-4 fs-5" style={{ backgroundColor: "#30e764", color: "#121212" }}>Web Development Fundamentals</div>
                  
                  <p className="fs-5 fst-italic">This certifies that</p>
                  <h2 className="my-4 border-bottom pb-2 d-inline-block" style={{ 
                    fontFamily: 'cursive', 
                    minWidth: '300px',
                    borderColor: "#28a745",
                    color: "#121212"
                  }}>{certificateData.name}</h2>
                  
                  <div className="my-4 px-5">
                    <p className="fs-5">has successfully completed all 5 coding challenges demonstrating exceptional proficiency in</p>
                    <div className="my-3 d-flex justify-content-center">
                      <span className="badge mx-2 p-2 fs-6" style={{ backgroundColor: "#0dcaf0", color: "#212529" }}>HTML 5</span>
                      <span className="badge mx-2 p-2 fs-6" style={{ backgroundColor: "#dc3545", color: "#fff" }}>CSS 3</span>
                      <span className="badge mx-2 p-2 fs-6" style={{ backgroundColor: "#ffc107", color: "#212529" }}>JavaScript</span>
                    </div>
                  </div>
                  
                  <div className="row mt-5 pt-3" style={{ borderTop: "1px solid #adb5bd" }}>
                    <div className="col-6 text-start">
                      <p className="fs-5 mb-1">Date: <span className="fw-bold">{certificateData.date}</span></p>
                      <p className="fs-5">ID: CTWEB-{Math.floor(Math.random() * 9000) + 1000}</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fs-5 mb-1 fw-bold fst-italic">Sivasai Nukala</p>
                      <p className="fs-6 text-bold">Founder, CodeTinker</p>
                    </div>
                  </div>
                  
                  {/* Certificate seal/badge */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '20px', 
                    right: '25px', 
                    width: '100px', 
                    height: '100px', 
                    border: '2px solid #28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(-15deg)',
                    opacity: '0.8',
                    backgroundColor: 'rgba(48,231,100,0.1)'
                  }}>
                    <div className="fw-bold" style={{ fontSize: '0.7rem', color: "#28a745" }}>CERTIFIED<br/>CODER</div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer" style={{ borderTop: "1px solid #343a40" }}>
              {certificateStep === "form" ? (
                <button type="button" className="btn btn-outline-light" data-bs-dismiss="modal" onClick={resetCertificateModal}>
                  Cancel
                </button>
              ) : (
                <div className="w-100 d-flex justify-content-between">
                  <button type="button" className="btn btn-outline-light" onClick={() => setCertificateStep("form")}>
                    Back to Form
                  </button>
                  
                  <div className="btn-group">
                    <button 
                      type="button" 
                      className="btn mx-2 rounded" 
                      style={{
                        backgroundColor: "#0d6efd",
                        color: "white",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        if (!isDownloading) {
                          e.target.style.backgroundColor = "#0b5ed7";
                          e.target.style.transform = "translateY(-2px)";
                        }
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#0d6efd";
                        e.target.style.transform = "translateY(0)";
                      }}
                      onClick={downloadAsPDF}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Downloading...</>
                      ) : (
                        <>Download PDF</>
                      )}
                    </button>
                    
                    <button 
                      type="button" 
                      className="btn mx-2 rounded" 
                      style={{
                        backgroundColor: "#17a2b8",
                        color: "white",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        if (!isDownloading) {
                          e.target.style.backgroundColor = "#138496";
                          e.target.style.transform = "translateY(-2px)";
                        }
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#17a2b8";
                        e.target.style.transform = "translateY(0)";
                      }}
                      onClick={downloadAsJPG}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Downloading...</>
                      ) : (
                        <>Download JPG</>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;