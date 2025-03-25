import React, { useState, useEffect } from "react";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import "highlight.js/styles/atom-one-dark.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

hljs.registerLanguage("html", html);

function HTMLContent() {

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

  // HTML Examples with descriptions
  const htmlExamples = [
    {
      title: "Basic HTML Structure",
      description: "Every HTML document needs a basic structure with DOCTYPE declaration, html, head, and body elements. The head contains metadata while the body contains visible content.",
      code: `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first paragraph.</p>
</body>
</html>`
    },
    {
      title: "Headings (h1-h6)",
      description: "Headings define titles and subtitles on your page with different levels of importance. <h1> is the most important heading, and <h6> is the least important.",
      code: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Smaller Heading</h4>
<h5>Even Smaller</h5>
<h6>Smallest Heading</h6>`
    },
    {
      title: "Paragraphs (p)",
      description: "Paragraphs are used to group related text content",
      code: `<p>This is the first paragraph.</p>
<p> It can contain multiple sentences and will be treated as a block of text.</p>
<p>This is the second paragraph</p>`
    },
    {
      title: "Line Breaks & Horizontal Rules",
      description: "Line breaks (<br>) create a new line without starting a new paragraph. Horizontal rules (<hr>) create a thematic break between content sections.",
      code: `<p>This is a paragraph with a line break.<br>This is the next line.</p>
<hr>
<p>This paragraph is separated by a horizontal rule.</p>`
    },
    {
      title: "Text Formatting",
      description: "HTML provides various elements to format text for emphasis, highlighting, and other styling purposes.",
      code: `<p><strong>Strong text</strong> for important content</p>
<p><em>Emphasized text</em> for stressed content</p>
<p><mark>Marked text</mark> for highlighted content</p>
<p><small>Small text</small> for fine print</p>
<p><del>Deleted text</del> and <ins>inserted text</ins> for edits</p>
<p>Chemical formula: H<sub>2</sub>O</p>
<p>Mathematical expression: x<sup>2</sup> + y<sup>2</sup></p>`
    },
    {
      title: "Lists",
      description: "HTML supports unordered lists (with bullet points) and ordered lists (with numbers or letters).",
      code: `<h4>Unordered List:</h4>
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>

<h4>Ordered List:</h4>
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`
    },
    {
      title: "Links (a)",
      description: "Links allow users to navigate between pages. The href attribute specifies the destination URL.",
      code: `<a href="https://www.example.com">Visit Example.com</a>
<a href="page2.html">Link to another page</a>
<a href="#section">Link to section on the same page</a>
<a href="mailto:example@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>`
    },
    {
      title: "Images (img)",
      description: "Images enhance your page content. The 'alt' attribute provides alternative text for accessibility and SEO.",
      code: `<img src="image.jpg" alt="A descriptive text of the image" width="500" height="300">
<figure>
  <img src="chart.jpg" alt="Bar chart showing data">
  <figcaption>Fig.1 - Data visualization of annual growth</figcaption>
</figure>`
    },
    {
      title: "Tables",
      description: "Tables organize data into rows and columns. Use them for data that needs to be presented in a grid format.",
      code: `<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>28</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>32</td>
      <td>Canada</td>
    </tr>
  </tbody>
</table>`
    },
    {
      title: "Forms",
      description: "Forms collect user input through various input elements like text fields, checkboxes, radio buttons, and more.",
      code: `<form action="/submit" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
  </div>
  
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
  </div>
  
  <button type="submit">Submit</button>
</form>`
    },
    {
      title: "Divs",
      description: "Divs are container elements used for grouping and styling. Divs are block-level elements while spans are inline elements.",
      code: `<div style="background-color: #f0f0f0; padding: 15px; margin-bottom: 20px;">
  <h3>This is a section</h3>
  <p>This entire block is contained within a div element.</p>
</div>`
    },
    {
      title: "HTML Attributes",
      description: "Attributes provide additional information about HTML elements and usually come in name/value pairs.",
      code: `<a href="https://example.com" target="_blank" rel="noopener">Opens in new tab</a>
<button type="button" disabled>Disabled Button</button>
<input type="text" placeholder="Enter your name" maxlength="50">
<div class="container" id="main-content" data-info="custom data">
  Element with multiple attributes
</div>`
    },
    {
      title: "Semantic HTML",
      description: "Semantic elements clearly describe their meaning to both the browser and the developer. They improve accessibility, SEO, and code readability.",
      code: `<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>News</h2>
    <article>
      <h3>Article Title</h3>
      <p>Article content...</p>
    </article>
  </section>
  
  <aside>
    <h2>Related Links</h2>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2025 My Website</p>
</footer>`
    }
  ];


  
  return (
    <div className="container p-6 max-w-4xl mx-auto">
        <div className="container mt-4 text-center">
            <h2 className="mb-4">📚 Learn Web Development - <b>HTML</b></h2>
        </div>
    {/* Header and intro sections */}
    
    <div className="space-y-8">
      {htmlExamples.map((example, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <h2 className="text-xl font-bold text-dark">{example.title}</h2>
          </div>
          
          <div className="p-4">
            <p className="mb-4">{example.description}</p>
            
            <div className="bg-dark rounded-lg overflow-hidden text-light">
              <pre className="p-0 m-0">
                <code className="html p-4 block">{example.code}</code>
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
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md border-t-4 border-blue-400">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">🎯 Next Steps</h2>
        <p className="text-gray-700 mb-2">Ready to level up? Here's what to tackle next:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>🎨 Learn <strong>CSS</strong> to style your web pages beautifully.</li>
          <li>⚡ Explore <strong>JavaScript</strong> to add interactivity and functionality.</li>
          <li>🔧 Build small projects like a portfolio, blog page, or quiz app.</li>
          <li>📖 Check out <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">MDN Web Docs</a> for more in-depth learning.</li>
        </ul>
      </div>

  </div>
  );
}

export default HTMLContent;