import React from "react";
import { Link } from "react-router-dom";
import prebuiltSnippets from "../data/prebuiltSnippets";

const PrebuiltSnippets = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-black text-white p-4">
      <h2 className="mb-4 text-center">📌 Prebuilt Code Snippets</h2>
      <div className="row g-4 w-100">
        {prebuiltSnippets.map((snippet) => (
          <div key={snippet.id} className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-lg border-2 border-success rounded-4 overflow-hidden bg-dark text-light">
              {/* Image Section with Error Handling */}
              <div className="position-relative">
                <img
                  src={snippet.image || "https://verpex.com/assets/uploads/images/blog/Basic-HTML-Codes-for-Websites.webp?v=1691760654"}
                  className="card-img-top"
                  alt={snippet.title}
                  style={{ height: "180px", objectFit: "cover" }}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/300")
                  }
                />
              </div>

              {/* Card Body Section */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate fw-bold">
                  {snippet.title}
                </h5>
                <p
                  className="card-text text-light mb-2"
                  title={snippet.description}
                  style={{ flexGrow: 1 }}
                >
                  {snippet.description.length > 70
                    ? `${snippet.description.substring(0, 70)}...`
                    : snippet.description}
                </p>
                <Link
                  to={`/snippets/${snippet.id}`}
                  className="btn btn-primary mt-auto fw-semibold"
                >
                  🔧 View Sample Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrebuiltSnippets;
