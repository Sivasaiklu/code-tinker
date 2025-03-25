import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import LivePreview from "./components/LivePreview";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import prebuiltCodes from "./data/prebuiltSnippets";
import PrebuiltSnippets from "./components/PrebuiltSnippets";
import SnippetDetail from "./components/SnippetDetail";
import Learn from "./components/Learn";
import HTMLContent from "./content/HTMLContent";
import CSSContent from "./content/CSSContent";
import JSContent from "./content/JSContent";
import HTMLQuiz from "./quiz/HTMLQuiz";
import CSSQuiz from "./quiz/CSSQuiz";
import JSQuiz from "./quiz/JSQuiz";
import Quizzes from "./components/Quizzes";
import HomePage from "./components/Homepage";
import ProjectSnippets from "./components/ProjectSnippets";
import ProjectDetails from "./components/ProjectDetails";
import Challenges from "./components/Challenges";
import MasterQuiz from "./components/MasterQuiz";
import Roadmaps from "./components/Roadmaps";
import ContactUs from "./components/ContactUs";
import FeedbackForm from "./components/FeedbackForm";
import Founder from "./components/Founder";
import Footer from "./components/Footer";

function Editor() {
  const { id } = useParams();
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  useEffect(() => {
    if (id) {
      const selectedSnippet = prebuiltCodes.find((snippet) => snippet.id === id);
      if (selectedSnippet) {
        setHtml(selectedSnippet.html || "");
        setCss(selectedSnippet.css || "");
        setJs(selectedSnippet.js || "");
      }
    }
  }, [id]);

  const resetCode = () => {
    setHtml("");
    setCss("");
    setJs("");
    toast.info("Code reset successfully!", { position: "bottom-right", autoClose: 2000 });
  };

  const downloadCode = () => {
    const zip = new JSZip();
    zip.file("index.html", html);
    zip.file("styles.css", css);
    zip.file("script.js", js);
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "CodeTinkerFiles.zip");
      toast.success("Code downloaded successfully!", { position: "bottom-right", autoClose: 3000 });
    });
  };

  return (
    <div className="container-fluid p-4">
      <div className="row mb-3">
        <div className="col-12 d-flex align-items-center">
          <button className="btn btn-danger me-2" onClick={resetCode} disabled={!html && !css && !js}>
            Reset Code
          </button>
          <button className="btn btn-success" onClick={downloadCode} disabled={!html && !css && !js}>
            Download Code
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <CodeEditor html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs} />
        </div>
        <div className="col-md-6">
          <LivePreview html={html} css={css} js={js} />
        </div>
      </div>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; // Hide navbar on homepage

  return (
    <>
      <ToastContainer />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/snippets" element={<PrebuiltSnippets />} />
        <Route path="/snippets/:id" element={<SnippetDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/html" element={<HTMLContent />} />
        <Route path="/learn/css" element={<CSSContent />} />
        <Route path="/learn/javascript" element={<JSContent />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/html" element={<HTMLQuiz />} />
        <Route path="/quizzes/css" element={<CSSQuiz />} />
        <Route path="/quizzes/javascript" element={<JSQuiz />} />
        <Route path="/quizzes/master" element={<MasterQuiz />} />
        <Route path="/projects" element={<ProjectSnippets />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/roadmaps" element={<Roadmaps/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/feedback" element={<FeedbackForm/>} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
      <Footer />
    </Router>
  );
}

export default App;
