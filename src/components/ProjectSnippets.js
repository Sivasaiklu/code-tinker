import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/projectsData";

const ProjectSnippets = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-black text-white p-4">
      <h2 className="mb-4 text-center">🚀 Project Snippets</h2>
      <div className="row g-4 w-100">
        {projectData.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-lg border-2 border-success rounded-4 overflow-hidden bg-dark text-light">
              <div className="position-relative">
                <img
                  src={project.image || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "180px", objectFit: "cover" }}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate fw-bold">{project.title}</h5>
                <p
                  className="card-text text-light mb-2"
                  title={project.description}
                  style={{ flexGrow: 1 }}
                >
                  {project.description.length > 70
                    ? `${project.description.substring(0, 70)}...`
                    : project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="btn btn-primary mt-auto text-light fw-semibold"
                >
                  🔍 View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSnippets;
