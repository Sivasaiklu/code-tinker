import React, { useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

hljs.registerLanguage("javascript", javascript);

function JSContent() {
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

  // JS Examples with descriptions
  const jsExamples = [
    {
      title: "JavaScript Basics: Variables & Syntax",
      concept: [
        "Declaring variables (var, let, const)",
        "Data types (strings, numbers, booleans, arrays, objects)",
        "Basic operators (+, -, *, /, %)",
      ],
      sampleCode: `
      let name = "John";
      const age = 30;
      let isStudent = false;
      let numbers = [1, 2, 3];
      let person = { name: "Jane", city: "New York" };
      console.log(name, age, isStudent, numbers, person);
      `
    },
    {
      title: "Control Flow: Conditionals & Loops",
      concept: [
        "if, else if, else statements",
        "for, while, do...while loops",
        "switch statements"
      ],
      sampleCode: `
      if (age >= 18) {
        console.log("Adult");
      } else {
        console.log("Minor");
      }
      for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
      }
      `
    },
    {
      title: "Functions",
      concept: [
        "Defining and calling functions",
        "Function parameters and return values",
        "Arrow functions"
      ],
      sampleCode: `
      function greet(name) {
        return "Hello, " + name + "!";
      }
      console.log(greet("Alice"));
  
      const square = (x) => x * x;
      console.log(square(5));
      `
    },
    {
      title: "DOM Manipulation",
      concept: [
        "Accessing and modifying HTML elements",
        "Selecting elements (getElementById, querySelector)",
        "Changing element content and attributes",
        "Event listeners"
      ],
      sampleCode: `
      let heading = document.getElementById("myHeading");
      heading.textContent = "New Heading";
      let button = document.getElementById("myButton");
      button.addEventListener("click", function() {
        alert("Button clicked!");
      });
      `
    },
    {
      title: "Events",
      concept: [
        "Handling user interactions (click, mouseover, keypress)",
        "Event listeners and event objects",
        "Event propagation"
      ],
      sampleCode: `
      document.addEventListener("keydown", function(event) {
        console.log("Key pressed:", event.key);
      });
      `
    },
    {
      title: "Advanced Arrays & Objects",
      concept: [
        "Array methods (map, filter, reduce, forEach)",
        "Object properties and methods",
        "Destructuring",
        "Spread/rest operators"
      ],
      sampleCode: `
      let doubled = numbers.map(num => num * 2);
      let filtered = numbers.filter(num => num > 1);
      let { name, city } = person;
      `
    },
    {
      title: "Asynchronous JavaScript & Promises",
      concept: [
        "Handling asynchronous operations (setTimeout, setInterval)",
        "Promises for handling asynchronous results",
        "Async/await"
      ],
      sampleCode: `
      fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
  
      async function fetchData() {
        try {
          const response = await fetch("https://api.example.com/data");
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error:", error);
        }
      }
      `
    },
    {
      title: "Modules & Scope",
      concept: [
        "Using modules to organize code",
        "Understanding variable scope (global, local, block)",
        "Import and export statements"
      ],
      sampleCode: `
      // module.js
      export function myFunction() {
        // ...
      }
  
      // main.js
      import { myFunction } from "./module.js";
      `
    },
    {
      title: "Error Handling",
      concept: [
        "Try...catch blocks",
        "Throwing errors",
        "Debugging"
      ],
      sampleCode: `
      try {
          // Code that might throw an error.
          console.log(variableThatDoesntExist);
      } catch (error) {
          console.error("An error occurred", error);
      }
      `
    },
    {
      title: "Advanced JavaScript",
      concept: [
        "Closures, prototypes, and the 'this' keyword",
        "Object-oriented programming (OOP) in JavaScript",
        "Working with APIs (fetch, XMLHttpRequest)",
        "Web storage (local storage, session storage)",
        "Web workers",
        "Regular expressions"
      ],
      keyPoints: "These concepts require a strong foundation in the basics."
    }
  ];

  return (
    <div className="container p-6 max-w-4xl mx-auto">
        <div className="container mt-4 text-center">
            <h2 className="mb-4">📚 Learn Web Development - <b>Javascript</b></h2>
        </div>
      {/* Header and intro sections */}
      
      <div className="space-y-8">
        {jsExamples.map((example, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <h2 className="text-xl font-bold text-dark">{example.title}</h2>
            </div>
            
            <div className="p-4">
              {Array.isArray(example.concept) ? (
                <ul className="mb-4 list-disc list-inside">
                  {example.concept.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4">{example.concept}</p>
              )}
              
              {example.sampleCode && (
                <div className="bg-dark rounded-lg overflow-hidden text-light">
                  <pre className="p-0 m-0">
                    <code className="javascript p-4 block">{example.sampleCode}</code>
                  </pre>
                  
                  <div className="flex justify-between items-center p-2 bg-gray-800 border-t border-gray-700">
                    <button 
                      onClick={() => copyToClipboard(example.sampleCode, index)}
                      className="py-1 px-3 bg-info hover:bg-info-400 text-dark rounded flex items-center text-bold text-sm mx-2"
                    >
                      {copiedIndex === index ? "✓ Copied!" : "📋 Copy Code"}
                    </button>
                  </div>
                </div>
              )}
              
              {example.keyPoints && (
                <p className="mt-4 font-semibold">{example.keyPoints}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Next steps section */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
        <p className="text-gray-700 mb-2">
          Now that you've learned the basics of JavaScript, here are some recommended next steps:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Build small projects to practice your JavaScript skills</li>
          <li>Learn a JavaScript framework like <strong>React</strong>, <strong>Vue</strong>, or <strong>Angular</strong></li>
          <li>Explore <strong>Node.js</strong> for server-side JavaScript</li>
          <li>Check out resources like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></li>
        </ul>
        <p className="mt-2 text-gray-700">
          Keep experimenting, and happy coding! 🚀
        </p>
      </div>
    </div>
  );
}

export default JSContent;