import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import prebuiltSnippets from "../data/prebuiltSnippets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";
import { FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

hljs.registerLanguage("xml", html);
hljs.registerLanguage("css", css);
hljs.registerLanguage("javascript", javascript);

const SnippetDetail = () => {
  const { id } = useParams();
  const snippet = prebuiltSnippets.find((s) => s.id === id);
  const codeRef = useRef(null);

  const [activeTab, setActiveTab] = useState("html");
  const [highlightedCode, setHighlightedCode] = useState("");
  const [loadingPreview, setLoadingPreview] = useState(true);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("✅ Code copied to Clipboard!", { position: "bottom-right", autoClose: 2000 });
  };

  useEffect(() => {
    if (snippet) {
      const language = activeTab === "js" ? "javascript" : activeTab === "html" ? "xml" : activeTab;
      const highlighted = hljs.highlight(snippet[activeTab], { language }).value;
      setHighlightedCode(highlighted);
    }
  }, [activeTab, snippet]);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingPreview(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!snippet) {
    return <h2 className="text-center text-danger mt-4">⚠️ Snippet Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
        <div className="text-center text-md-start">
          <h2 className="fw-bold text-primary">📌 {snippet.title}</h2>
          <p className="text-muted fs-5">{snippet.description}</p>
        </div>
        <Link to="/snippets" className="btn btn-dark text-white mt-3 mt-md-0">
          Go Back to Snippets
        </Link>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header bg-light d-flex flex-wrap justify-content-between">
              <ul className="nav nav-tabs card-header-tabs flex-grow-1">
                {["html", "css", "js"].map((tab) => (
                  <li className="nav-item" key={tab}>
                    <button
                      className={`nav-link ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                      style={{ transition: "0.3s ease" }}
                    >
                      {tab.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="btn btn-sm btn-primary d-flex align-items-center gap-1 mt-2 mt-lg-0"
                onClick={() => copyToClipboard(snippet[activeTab] || "")}
              >
                <FaCopy /> Copy
              </button>
            </div>

            <div className="card-body position-relative bg-dark">
              <pre
                className="p-3 border rounded text-light"
                style={{ height: "400px", overflow: "auto", transition: "0.3s ease" }}
                ref={codeRef}
              >
                <code
                  className={`hljs language-${activeTab}`}
                  dangerouslySetInnerHTML={{ __html: highlightedCode }}
                ></code>
              </pre>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-light fw-semibold">🔍 Snippet Preview</div>
            <div className="card-body p-0">
              {loadingPreview ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                  <span className="spinner-border text-primary"></span>
                </div>
              ) : (
                <iframe
                  title="snippet-preview"
                  srcDoc={`<html><head><style>${snippet.css}</style></head><body>${snippet.html}<script>${snippet.js}</script></body></html>`}
                  className="w-100 border-0"
                  style={{ height: "400px" }}
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SnippetDetail;