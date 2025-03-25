import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/atom-one-dark.css"; 
import css from "highlight.js/lib/languages/css";
import hljs from "highlight.js/lib/core";

// Register languages
hljs.registerLanguage("css", css);
// hljs.registerLanguage("javascript", javascript); // Uncomment if needed

function CSSContent() {
  // Function to highlight code when component mounts or updates
  useEffect(() => {
    // Highlight all code blocks
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }, []);

  // State to track which code was copied
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Function to copy code
  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast.success("Code copied successfully!", { position: "bottom-right", autoClose: 2000 });
  };

  // CSS Examples with descriptions
  const cssExamples = [
    {
      title: "CSS Syntax & Basic Selectors",
      concept: "CSS rules consist of a selector and a declaration block. Selectors target HTML elements. Basic selectors: element (tag), class, ID.",
      code: `p {
        color: blue;
      }
      .my-class {
        background-color: lightgray;
      }
      #my-id {
        font-size: 18px;
      }`
    },
    {
      title: "The CSS Box Model",
      concept: "Every HTML element is treated as a rectangular box. Components: content, padding, border, margin.",
      code: `.box {
        width: 200px;
        padding: 20px;
        border: 1px solid black;
        margin: 10px;
      }`
    },
    {
      title: "Colors & Backgrounds",
      concept: "Applying colors to text and backgrounds. Using hex codes, RGB, HSL, and color names. Background images and gradients.",
      code: `body {
        background-color: #f0f0f0;
        color: #333;
        background-image: linear-gradient(to right, red, yellow);
      }`
    },
    {
      title: "Text Styling",
      concept: "Controlling font size, family, weight, and style. Text alignment, line height, and letter spacing.",
      code: `h1 {
        font-family: Arial, sans-serif;
        font-size: 32px;
        text-align: center;
      }`
    },
    {
      title: "Display & Positioning",
      concept: "display property: block, inline, inline-block, flex, grid. position property: static, relative, absolute, fixed, sticky.",
      code: `.container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .element {
        position: absolute;
        top: 50px;
        left: 100px;
      }`
    },
    {
      title: "Flexbox & Grid Layouts",
      concept: "Powerful layout models for creating responsive designs. Flexbox for one-dimensional layouts. Grid for two-dimensional layouts.",
      code: `.grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }`
    },
    {
      title: "Responsive Design & Media Queries",
      concept: "Adapting web pages to different screen sizes. Using media queries to apply styles based on device characteristics.",
      code: `@media (max-width: 768px) {
        body {
          font-size: 16px;
        }
      }`
    },
    {
      title: "Transitions & Animations",
      concept: "Creating smooth visual effects. Transitions for simple changes. Animations for more complex sequences.",
      code: `.button {
        transition: background-color 0.3s ease;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }`
    },
    {
      title: "Advanced Selectors & Pseudo-elements",
      concept: "Attribute selectors, combinators, and pseudo-classes/elements. Targeting specific elements based on their state or attributes.",
      code: `a:hover {
        text-decoration: underline;
      }
      p::first-line {
        font-weight: bold;
      }`
    },
    {
      title: "CSS Variables",
      concept: "Defining reusable values in CSS. Making it easier to maintain and update styles.",
      code: `:root {
        --primary-color: blue;
      }
      h1 {
        color: var(--primary-color);
      }`
    }
  ];

  return (
    <div className="container p-6 max-w-4xl mx-auto">
        <div className="container mt-4 text-center">
            <h2 className="mb-4">📚 Learn Web Development - <b>CSS</b></h2>
        </div>
      {/* Header and intro sections */}
      
      <div className="space-y-8">
        {cssExamples.map((example, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <h2 className="text-xl font-bold text-dark">{example.title}</h2>
            </div>
            
            <div className="p-4">
              <p className="mb-4">{example.concept}</p>
              
              <div className="bg-dark rounded-lg overflow-hidden text-light">
                <pre className="p-0 m-0">
                  <code className="css p-4 block">{example.code}</code>
                </pre>
                
                <div className="flex justify-between items-center p-2 bg-gray-800 border-t border-gray-700">
                  <button 
                    onClick={() => copyToClipboard(example.code, index)}
                    className="py-1 px-3 bg-info hover:bg-info-400 text-dark rounded flex items-center text-bold text-sm mx-2"
                  >
                    {copiedIndex === index ? "✓ Copied!" : "📋 Copy Code"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Next steps section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
        <p className="text-gray-700 mb-2">
          Now that you've learned the basics of HTML, here are some recommended next steps:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Learn <strong>CSS</strong> to style your web pages.</li>
          <li>Explore <strong>JavaScript</strong> to add interactivity.</li>
          <li>Practice HTML by building small projects like a portfolio or a blog page.</li>
          <li>Check out resources like <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>.</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Keep experimenting, and happy coding! 🚀
        </p>
      </div>
    </div>
  );
}

export default CSSContent;