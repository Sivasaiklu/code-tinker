import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { toast, ToastContainer } from "react-toastify";
import { FaCopy, FaUndo } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/github-dark.css";

const CodeEditor = ({ html, setHtml, css, setCss, js, setJs }) => {
  const [activeTab, setActiveTab] = useState("html");
  const [copied, setCopied] = useState(false);

  const getCode = () => (activeTab === "html" ? html : activeTab === "css" ? css : js);
  const setCode = (newValue) => (activeTab === "html" ? setHtml(newValue) : activeTab === "css" ? setCss(newValue) : setJs(newValue));

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCode()).then(() => {
      setCopied(true);
      toast.success(`${activeTab.toUpperCase()} copied!`, { position: "bottom-right", autoClose: 2000 });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const resetCode = () => {
    if (window.confirm("Are you sure you want to reset this code?")) {
      setCode("");
      toast.info(`${activeTab.toUpperCase()} reset!`, { position: "bottom-right", autoClose: 2000 });
    }
  };

  return (
    <div className="card shadow mb-4" style={{ maxWidth: "100%" }}>
      <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#1e1e1e", flexWrap: "wrap" }}>
        {/* Tabs */}
        <ul className="nav nav-tabs" style={{ flexWrap: "wrap" }}>
          {["html", "css", "js"].map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? "active" : ""}`}
                style={{ color: activeTab === tab ? "black" : "rgb(157, 91, 91)", fontWeight: "bold" }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {/* Copy & Reset buttons */}
        <div className="d-flex gap-2" style={{ flexWrap: "wrap" }}>
          <button className="btn btn-sm btn-danger" onClick={resetCode}>
            <FaUndo /> Reset
          </button>
          <button className="btn btn-sm btn-primary" onClick={copyToClipboard} disabled={copied}>
            <FaCopy /> {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Editor Section */}
      <div className="card-body">
        <Editor
          height="500px"
          language={activeTab === "js" ? "javascript" : activeTab}
          theme="vs-dark"
          value={getCode() || ""}
          onChange={setCode}
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
            fontSize: 16,
            tabSize: 2,
          }}
        />
      </div>

      {/* Mobile responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            .card-body {
              padding: 10px;
            }
            .nav-tabs .nav-item .nav-link {
              font-size: 14px;
              padding: 5px 10px;
            }
            .btn {
              font-size: 12px;
              padding: 5px 8px;
            }
            .card-body .monaco-editor {
              height: 300px !important;
            }
          }
          @media (max-width: 480px) {
            .card-header {
              flex-direction: column;
              gap: 10px;
            }
            .d-flex.gap-2 {
              flex-direction: column;
              gap: 5px;
            }
          }
        `}
      </style>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default CodeEditor;
