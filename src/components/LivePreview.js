import React, { useEffect, useState, useRef } from "react";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";

const LivePreview = ({ html, css, js }) => {
  const [viewMode, setViewMode] = useState("desktop"); // "desktop" or "mobile"
  const iframeRef = useRef(null);

  useEffect(() => {
    const srcCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;

    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(srcCode);
      doc.close();
    }
  }, [html, css, js]);

  return (
    <div className="card shadow">
      {/* Card Header with View Mode Buttons */}
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Live Preview</h5>
        <div className="btn-group">
          <button
            className={`btn btn-sm ${viewMode === "desktop" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setViewMode("desktop")}
          >
            <FaDesktop className="me-1" /> Desktop
          </button>
          <button
            className={`btn btn-sm ${viewMode === "mobile" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setViewMode("mobile")}
          >
            <FaMobileAlt className="me-1" /> Mobile
          </button>
        </div>
      </div>

      {/* Live Preview Iframe */}
      <div className="card-body text-center">
        <iframe
          ref={iframeRef}
          title="Live Preview"
          className="border border-dark"
          style={{
            width: viewMode === "desktop" ? "100%" : "375px",
            height: "500px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default LivePreview;
