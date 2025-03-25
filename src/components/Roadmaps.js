import React from 'react';

const Roadmaps = () => {
  const roadmaps = [
    {
      title: 'Frontend Development Roadmap',
      emoji: '🎨',
      details: 'Embark on a journey to master the art of crafting captivating and interactive user interfaces. This roadmap guides you through the essentials of HTML, CSS, and JavaScript, progressing to modern frameworks and tools, ensuring you build responsive, accessible, and performant web applications.',
      topics: [
        {
          title: 'HTML & CSS Fundamentals',
          emoji: '📝',
          description: 'Build the structural foundation of web pages with semantic HTML and style them with CSS, focusing on layout, typography, and visual design.',
          subtopics: ['HTML5 Semantics', 'CSS Selectors & Specificity', 'Box Model', 'Flexbox & Grid Layout', 'Responsive Web Design (Media Queries)']
        },
        {
          title: 'JavaScript & ES6+',
          emoji: '💻',
          description: 'Learn the core concepts of JavaScript, including DOM manipulation, asynchronous programming, and leverage modern ES6+ features for cleaner, efficient code.',
          subtopics: ['Variables & Data Types', 'Functions & Scope', 'DOM Manipulation', 'Asynchronous JavaScript (Promises, Async/Await)', 'ES6+ Features (Arrow Functions, Destructuring, Modules)']
        },
        {
          title: 'Responsive Design & Accessibility',
          emoji: '📱',
          description: 'Ensure your applications are usable across various devices and accessible to all users, adhering to WCAG guidelines.',
          subtopics: ['Mobile-First Design', 'Viewport Meta Tag', 'ARIA Attributes', 'Semantic HTML for Accessibility', 'Testing for Accessibility']
        },
        {
          title: 'Frontend Frameworks & State Management',
          emoji: '⚛️',
          description: 'Dive into popular frameworks like React, Angular, or Vue.js, and learn effective state management using tools like Redux, Context API, or Vuex.',
          subtopics: ['React (Components, Hooks, Routing)', 'Angular (Modules, Components, Services)', 'Vue.js (Components, Directives, Routing)', 'State Management (Redux, Context API, Vuex)', 'Component Libraries (Material UI, Ant Design)']
        },
        {
          title: 'Build Tools & Testing',
          emoji: '🛠️',
          description: 'Automate your workflow with build tools like Webpack or Parcel, and ensure code quality with unit, integration, and end-to-end testing.',
          subtopics: ['Webpack/Parcel (Bundling, Minification)', 'npm/yarn (Package Management)', 'Unit Testing (Jest, Mocha)', 'Integration Testing (React Testing Library, Cypress)', 'End-to-End Testing (Selenium, Playwright)']
        }
      ]
    },
    {
      title: 'Backend Development Roadmap',
      emoji: '🖥️',
      details: "Explore the world of server-side development, where you'll learn to build robust and scalable APIs, manage databases, and implement security measures. This roadmap covers essential server-side languages, database technologies, and deployment strategies.",
      topics: [
        {
          title: 'Server-side Programming & Languages',
          emoji: '⚙️',
          description: 'Choose a server-side language like Node.js, Python, Java, or Go, and learn to build server applications and handle HTTP requests.',
          subtopics: ['Node.js (Express.js, Koa)', 'Python (Django, Flask)', 'Java (Spring Boot)', 'Go (Gin, Echo)', 'Server-side Logic & Routing']
        },
        {
          title: 'APIs & RESTful Services',
          emoji: '🔌',
          description: 'Design and implement RESTful APIs, understand HTTP methods, and learn to handle data serialization and deserialization.',
          subtopics: ['RESTful API Design Principles', 'HTTP Methods (GET, POST, PUT, DELETE)', 'JSON & XML', 'API Documentation (Swagger, OpenAPI)', 'GraphQL (Optional)']
        },
        {
          title: 'Databases (SQL & NoSQL)',
          emoji: '💾',
          description: 'Learn to work with relational databases (SQL) and non-relational databases (NoSQL), understanding their strengths and use cases.',
          subtopics: ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Cassandra)', 'Database Design & Normalization', 'ORM/ODM (Sequelize, Mongoose)', 'Database Indexing & Optimization']
        },
        {
          title: 'Authentication & Security',
          emoji: '🔒',
          description: 'Implement secure authentication and authorization mechanisms, and protect your applications from common vulnerabilities.',
          subtopics: ['Authentication (JWT, OAuth)', 'Authorization (RBAC, ACL)', 'HTTPS & SSL/TLS', 'Security Best Practices (OWASP)', 'Input Validation & Sanitization']
        },
        {
          title: 'Testing & Deployment',
          emoji: '🚀',
          description: 'Write unit and integration tests for your backend code, and deploy your applications to cloud platforms or servers.',
          subtopics: ['Unit Testing (Jest, Pytest)', 'Integration Testing (Supertest, Testcontainers)', 'Deployment (Docker, Kubernetes)', 'Cloud Platforms (AWS, Azure, GCP)', 'CI/CD Pipelines']
        }
      ]
    },
    {
      title: 'Fullstack Development Roadmap',
      emoji: '🔗',
      details: 'Become a versatile developer by mastering both frontend and backend technologies. This roadmap guides you through building and deploying complete applications, from designing the user interface to managing server-side logic and databases.',
      topics: [
        {
          title: 'Frontend & Backend Fundamentals',
          emoji: '📚',
          description: 'Reinforce your understanding of both frontend and backend principles, ensuring a solid foundation for fullstack development.',
          subtopics: ['Review of Frontend & Backend Basics', 'Understanding Client-Server Architecture', 'Choosing the Right Tech Stack']
        },
        {
          title: 'API Integration & Data Flow',
          emoji: '🔄',
          description: 'Learn to connect frontend and backend components through APIs, managing data flow and ensuring seamless communication.',
          subtopics: ['Fetching Data from APIs (Fetch, Axios)', 'Handling API Responses', 'Data Transformation & Presentation', 'Real-time Communication (WebSockets)']
        },
        {
          title: 'Deployment & DevOps',
          emoji: '⚙️',
          description: 'Master the deployment process, including setting up CI/CD pipelines, managing infrastructure, and monitoring application performance.',
          subtopics: ['Containerization (Docker)', 'Orchestration (Kubernetes)', 'CI/CD Pipelines (GitHub Actions, GitLab CI)', 'Cloud Infrastructure (AWS, Azure, GCP)', 'Monitoring & Logging']
        },
        {
          title: 'Performance Optimization',
          emoji: '⏱️',
          description: 'Optimize your applications for speed and efficiency, focusing on both frontend and backend performance.',
          subtopics: ['Frontend Performance (Code Splitting, Lazy Loading)', 'Backend Performance (Caching, Database Optimization)', 'Load Testing & Profiling', 'Content Delivery Networks (CDN)']
        },
        {
          title: 'Modern Frameworks & Tools',
          emoji: '🧰',
          description: 'Explore modern fullstack frameworks and tools that streamline development, such as Next.js, Nuxt.js, or serverless architectures.',
          subtopics: ['Next.js (React Fullstack)', 'Nuxt.js (Vue.js Fullstack)', 'Serverless Architectures (AWS Lambda, Azure Functions)', 'JAMstack', 'Database as a Service (Firebase, Supabase)']
        }
      ]
    }
  ];

  return (
    <div className="container-fluid py-5 bg-black">
      <div className="row g-4">
        {roadmaps.map((roadmap, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card text-dark shadow-lg border-3 border-info rounded-5 h-100 p-2 mx-3"
              style={{
                background: "linear-gradient(45deg, rgb(219, 228, 237), rgb(219, 228, 237))",
              }}
            >
              <div className="card-header border-0">
                <h4 className="card-title fw-bold">
                  <i>
                    {roadmap.emoji} {roadmap.title}
                  </i>
                </h4>
                <hr className="border border-2 border-dark" />
              </div>
              <div className="card-body">
                <p className="card-text">{roadmap.details}</p>
                {roadmap.topics.map((topic, i) => (
                  <div key={i} className="mb-3">
                    <h5 className="text-dark fw-bold">
                      {topic.emoji ? topic.emoji + " " : ""}
                      {topic.title}
                    </h5>
                    <p className="mb-1">{topic.description}</p>
                    <ul className="list-group list-group-flush mb-3">
                      {topic.subtopics.map((sub, j) => (
                        <li key={j} className="list-group-item bg-transparent border-0 py-1 ps-0">
                          <span className="text-success">
                            <i className="bi bi-check2 me-2"></i>
                            {sub}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmaps;